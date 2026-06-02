import fs from 'fs';
import path from 'path';
import yaml from 'yaml';
import pc from 'picocolors';
import { manifestSchema } from '../schema.js';

interface ValidationResult {
  workflowPath: string;
  errors: string[];
  warnings: string[];
}

export function validateWorkflows(targetDir: string): boolean {
  console.log(pc.cyan(`\n🔍 Scanning workflows in: ${targetDir}\n`));
  const results: ValidationResult[] = [];
  
  if (!fs.existsSync(targetDir)) {
    console.error(pc.red(`Error: Target directory ${targetDir} does not exist.`));
    return false;
  }

  // Find all manifest.yaml files recursively
  const manifests = findManifests(targetDir);

  if (manifests.length === 0) {
    console.log(pc.yellow('⚠️ No workflow manifests found.'));
    return true;
  }

  for (const manifestPath of manifests) {
    const workflowPath = path.dirname(manifestPath);
    const errors: string[] = [];
    const warnings: string[] = [];

    // 1. Validate manifest.yaml
    let manifestData: any;
    try {
      const content = fs.readFileSync(manifestPath, 'utf8');
      manifestData = yaml.parse(content);
      const parsed = manifestSchema.safeParse(manifestData);
      if (!parsed.success) {
        parsed.error.errors.forEach(err => {
          errors.push(`manifest.yaml: ${err.path.join('.') || 'root'} - ${err.message}`);
        });
      }
    } catch (e: any) {
      errors.push(`manifest.yaml: Failed to read/parse YAML - ${e.message}`);
    }

    // 2. Validate workflow.json
    const workflowJsonPath = path.join(workflowPath, 'workflow.json');
    if (!fs.existsSync(workflowJsonPath)) {
      errors.push('workflow.json: File is missing.');
    } else {
      try {
        const content = fs.readFileSync(workflowJsonPath, 'utf8');
        const json = JSON.parse(content);
        
        // Simple n8n validation structure check
        if (!json.nodes || !Array.isArray(json.nodes)) {
          errors.push('workflow.json: Root must contain a "nodes" array.');
        } else {
          // Secret scanning inside workflow.json
          scanSecrets(content, errors, warnings);
        }
      } catch (e: any) {
        errors.push(`workflow.json: Invalid JSON syntax - ${e.message}`);
      }
    }

    // 3. Check companion files
    const readmePath = path.join(workflowPath, 'README.md');
    if (!fs.existsSync(readmePath)) {
      errors.push('README.md: File is missing.');
    } else {
      const readmeContent = fs.readFileSync(readmePath, 'utf8');
      if (!readmeContent.includes('## Required integrations') && !readmeContent.includes('## Integrations')) {
        warnings.push('README.md: Missing "## Required integrations" section.');
      }
      if (!readmeContent.includes('## Safety')) {
        warnings.push('README.md: Missing "## Safety" section.');
      }
    }

    const sampleInputPath = path.join(workflowPath, 'sample-input.json');
    if (!fs.existsSync(sampleInputPath)) {
      errors.push('sample-input.json: File is missing.');
    } else {
      try {
        JSON.parse(fs.readFileSync(sampleInputPath, 'utf8'));
      } catch (e: any) {
        errors.push(`sample-input.json: Invalid JSON syntax - ${e.message}`);
      }
    }

    const sampleOutputPath = path.join(workflowPath, 'sample-output.md');
    const sampleOutputJsonPath = path.join(workflowPath, 'sample-output.json');
    if (!fs.existsSync(sampleOutputPath) && !fs.existsSync(sampleOutputJsonPath)) {
      errors.push('sample-output.md (or sample-output.json): File is missing.');
    }

    const envExamplePath = path.join(workflowPath, '.env.example');
    if (!fs.existsSync(envExamplePath)) {
      errors.push('.env.example: File is missing.');
    }

    results.push({ workflowPath, errors, warnings });
  }

  // Print results
  let totalErrors = 0;
  let totalWarnings = 0;

  for (const res of results) {
    const relativeDir = path.relative(process.cwd(), res.workflowPath);
    if (res.errors.length > 0 || res.warnings.length > 0) {
      console.log(pc.bold(pc.white(`\n📁 ${relativeDir}`)));
      res.errors.forEach(err => {
        console.log(`  ${pc.red('✖')} ${err}`);
        totalErrors++;
      });
      res.warnings.forEach(warn => {
        console.log(`  ${pc.yellow('⚠️')} ${warn}`);
        totalWarnings++;
      });
    } else {
      console.log(`${pc.green('✔')} ${relativeDir} is valid.`);
    }
  }

  console.log(pc.bold(`\n📊 Summary: ${results.length} workflows checked.`));
  if (totalErrors > 0) {
    console.log(pc.red(`   ${totalErrors} errors found. Validation FAILED.\n`));
    return false;
  } else if (totalWarnings > 0) {
    console.log(pc.yellow(`   ${totalWarnings} warnings found. Validation PASSED with warnings.\n`));
    return true;
  } else {
    console.log(pc.green('   All workflows passed validation successfully!\n'));
    return true;
  }
}

function findManifests(dir: string): string[] {
  const manifests: string[] = [];

  function traverse(currentDir: string) {
    const files = fs.readdirSync(currentDir, { withFileTypes: true });
    for (const file of files) {
      const fullPath = path.join(currentDir, file.name);
      if (file.isDirectory()) {
        if (file.name !== 'node_modules' && file.name !== 'dist' && !file.name.startsWith('.')) {
          traverse(fullPath);
        }
      } else if (file.name === 'manifest.yaml' || file.name === 'manifest.yml') {
        manifests.push(fullPath);
      }
    }
  }

  traverse(dir);
  return manifests;
}

function scanSecrets(content: string, errors: string[], warnings: string[]) {
  // Check for common API key patterns (OpenAI sk-..., general keys, passwords)
  const openaiRegex = /sk-[a-zA-Z0-9]{32,}/g;
  const generalApiKeyRegex = /(?:api_key|apikey|secret|password|token)["']?\s*:\s*["']([^"'{}%=$]+)["']/gi;
  const activeWebhookRegex = /https:\/\/hooks\.n8n\.cloud\/webhook\/[a-zA-Z0-9-]+/gi;
  const makeWebhookRegex = /https:\/\/hook\.(?:us1\.)?make\.com\/[a-zA-Z0-9]+/gi;

  // OpenAI Check
  if (openaiRegex.test(content)) {
    errors.push('workflow.json: Hardcoded OpenAI API key detected.');
  }

  // Webhook Check
  const n8nWebhookMatch = content.match(activeWebhookRegex);
  if (n8nWebhookMatch) {
    errors.push(`workflow.json: Active n8n webhook URL detected (${n8nWebhookMatch[0]}). Use placeholders or variables.`);
  }

  const makeWebhookMatch = content.match(makeWebhookRegex);
  if (makeWebhookMatch) {
    errors.push(`workflow.json: Active Make webhook URL detected (${makeWebhookMatch[0]}). Use placeholders or variables.`);
  }

  // General secret check: find values that look like hardcoded secrets instead of variables
  let match;
  while ((match = generalApiKeyRegex.exec(content)) !== null) {
    const value = match[1].trim();
    // Exclude placeholders like {{...}} or local configs like 'localhost' or common values
    if (
      value.length > 8 && 
      !value.startsWith('{{') && 
      !value.includes('$env') && 
      !value.includes('placeholder') && 
      !value.startsWith('http') &&
      !['development', 'production', 'testing', 'authorized'].includes(value.toLowerCase())
    ) {
      // Look for entropy/randomness or just warn
      warnings.push(`workflow.json: Potential hardcoded secret detected in "${match[0].slice(0, 30)}...". Verify it is a placeholder.`);
    }
  }
}
