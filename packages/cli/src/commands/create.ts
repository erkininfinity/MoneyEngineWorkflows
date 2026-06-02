import fs from 'fs';
import path from 'path';
import pc from 'picocolors';
import { CATEGORIES } from '../schema.js';

export function createWorkflow(targetPath: string, options: { name?: string; desc?: string }): boolean {
  const absolutePath = path.resolve(targetPath);
  const id = path.basename(absolutePath);
  const categoryDir = path.dirname(absolutePath);
  const category = path.basename(categoryDir);

  if (!CATEGORIES.includes(category as any)) {
    console.error(pc.red(`Error: Category "${category}" is not valid.`));
    console.error(pc.yellow(`Allowed categories: ${CATEGORIES.join(', ')}`));
    return false;
  }

  if (fs.existsSync(absolutePath)) {
    console.error(pc.red(`Error: Directory already exists at ${targetPath}`));
    return false;
  }

  const name = options.name || id.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
  const description = options.desc || `AI-powered workflow to automate ${name.toLowerCase()} for revenue optimization.`;

  console.log(pc.cyan(`\n🛠️ Scaffolding workflow "${name}" in category "${category}"...\n`));

  try {
    fs.mkdirSync(absolutePath, { recursive: true });

    // 1. manifest.yaml
    const manifestContent = `id: ${id}
name: ${name}
category: ${category}
version: 0.1.0
status: experimental
platforms:
  - n8n
required_integrations:
  - Google Sheets
  - OpenAI-compatible LLM
inputs:
  - data.csv
outputs:
  - summary_report
risk_level: low
human_approval_required: true
description: >
  ${description}
`;
    fs.writeFileSync(path.join(absolutePath, 'manifest.yaml'), manifestContent, 'utf8');

    // 2. workflow.json (empty n8n skeleton)
    const workflowContent = {
      name: name,
      nodes: [
        {
          parameters: {},
          id: "3d50df52-1678-4ea7-90ff-4e78e11a37c9",
          name: "When clicking \"Execute Workflow\"",
          type: "n8n-nodes-base.manualTrigger",
          typeVersion: 1,
          position: [100, 300]
        }
      ],
      connections: {},
      active: false,
      settings: {},
      pinData: {}
    };
    fs.writeFileSync(path.join(absolutePath, 'workflow.json'), JSON.stringify(workflowContent, null, 2), 'utf8');

    // 3. README.md
    const readmeContent = `# ${name}

${description}

## Who is this for?

Founders, B2B agencies, and small businesses looking to automate their ${name.toLowerCase()} processes.

## What it does

1. Reads input data from a source (e.g. Google Sheets or CSV).
2. Runs LLM prompts to analyze records.
3. Outputs recommendations or structured drafts.

## Required integrations

- n8n
- Google Sheets
- OpenAI-compatible LLM

## Setup

1. Copy \`.env.example\` to \`.env\` and fill out parameters.
2. Import \`workflow.json\` into n8n.
3. Configure credentials in n8n.

## Safety

This workflow runs in **Human-in-the-Loop** mode. Messages are generated as drafts and require approval before sending.
`;
    fs.writeFileSync(path.join(absolutePath, 'README.md'), readmeContent, 'utf8');

    // 4. sample-input.json
    fs.writeFileSync(path.join(absolutePath, 'sample-input.json'), JSON.stringify([
      {
        id: "1",
        field1: "value1",
        field2: "value2"
      }
    ], null, 2), 'utf8');

    // 5. sample-output.md
    const sampleOutput = `## Sample Outcome: ${name}

- **Status**: Complete
- **Date**: 2026-06-02
- **Result**: Successfully completed workflow task.
`;
    fs.writeFileSync(path.join(absolutePath, 'sample-output.md'), sampleOutput, 'utf8');

    // 6. .env.example
    const envExample = `OPENAI_API_KEY=your_openai_api_key_here
TELEGRAM_BOT_TOKEN=your_telegram_bot_token_here
TELEGRAM_CHAT_ID=your_chat_id_here
GOOGLE_SHEET_ID=your_google_sheet_id_here
`;
    fs.writeFileSync(path.join(absolutePath, '.env.example'), envExample, 'utf8');

    console.log(pc.green(`✔ Successfully created workflow at ${targetPath}`));
    console.log(pc.white(`  Files generated:`));
    console.log(`  - ${path.join(targetPath, 'manifest.yaml')}`);
    console.log(`  - ${path.join(targetPath, 'workflow.json')}`);
    console.log(`  - ${path.join(targetPath, 'README.md')}`);
    console.log(`  - ${path.join(targetPath, 'sample-input.json')}`);
    console.log(`  - ${path.join(targetPath, 'sample-output.md')}`);
    console.log(`  - ${path.join(targetPath, '.env.example')}\n`);
    return true;
  } catch (e: any) {
    console.error(pc.red(`Error: Failed to scaffold workflow - ${e.message}`));
    return false;
  }
}
