import fs from 'fs';
import path from 'path';
import yaml from 'yaml';
import pc from 'picocolors';

export function listWorkflows(targetDir: string) {
  console.log(pc.cyan(`\n📋 Listing workflows in: ${targetDir}\n`));

  if (!fs.existsSync(targetDir)) {
    console.error(pc.red(`Error: Target directory ${targetDir} does not exist.`));
    return;
  }

  const manifests = findManifests(targetDir);

  if (manifests.length === 0) {
    console.log(pc.yellow('No workflows found. Use "money-engine create" to create one.'));
    return;
  }

  // Header
  console.log(
    pc.bold(
      `${pad('ID', 30)} | ${pad('Name', 30)} | ${pad('Category', 18)} | ${pad('Status', 12)} | ${pad('Risk', 8)}`
    )
  );
  console.log('-'.repeat(108));

  for (const manifestPath of manifests) {
    try {
      const content = fs.readFileSync(manifestPath, 'utf8');
      const manifest = yaml.parse(content);
      
      const id = manifest.id || path.basename(path.dirname(manifestPath));
      const name = manifest.name || 'Unknown';
      const category = manifest.category || 'Unknown';
      const status = manifest.status || 'unknown';
      const risk = manifest.risk_level || 'unknown';

      let statusColor = pc.white;
      if (status === 'stable') statusColor = pc.green;
      else if (status === 'beta') statusColor = pc.yellow;
      else if (status === 'experimental') statusColor = pc.magenta;

      let riskColor = pc.white;
      if (risk === 'low') riskColor = pc.green;
      else if (risk === 'medium') riskColor = pc.yellow;
      else if (risk === 'high') riskColor = pc.red;

      console.log(
        `${pc.cyan(pad(id, 30))} | ${pad(name, 30)} | ${pc.gray(pad(category, 18))} | ${statusColor(pad(status, 12))} | ${riskColor(pad(risk, 8))}`
      );
    } catch (e: any) {
      console.log(pc.red(`Failed to parse ${manifestPath}: ${e.message}`));
    }
  }
  console.log();
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

function pad(str: string, length: number): string {
  if (str.length > length) {
    return str.slice(0, length - 3) + '...';
  }
  return str.padEnd(length, ' ');
}
