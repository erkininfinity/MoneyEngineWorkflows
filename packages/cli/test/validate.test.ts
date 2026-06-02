import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { afterEach, describe, expect, test } from 'vitest';
import { validateWorkflows } from '../src/commands/validate.js';

const tempDirs: string[] = [];

afterEach(() => {
  for (const dir of tempDirs.splice(0)) {
    fs.rmSync(dir, { recursive: true, force: true });
  }
});

describe('validateWorkflows', () => {
  test('accepts a complete workflow package', () => {
    const workflowsDir = createWorkflowPackage();

    expect(validateWorkflows(workflowsDir)).toBe(true);
  });

  test('rejects hardcoded OpenAI API keys in workflow JSON', () => {
    const fakeOpenAiKey = ['sk', 'abcdefghijklmnopqrstuvwxyz1234567890'].join('-');
    const workflowsDir = createWorkflowPackage({
      workflowJson: {
        nodes: [
          {
            id: 'llm',
            name: 'LLM',
            type: 'n8n-nodes-base.openAi',
            parameters: {
              api_key: fakeOpenAiKey
            }
          }
        ]
      }
    });

    expect(validateWorkflows(workflowsDir)).toBe(false);
  });
});

function createWorkflowPackage(overrides: { workflowJson?: unknown } = {}) {
  const root = fs.mkdtempSync(path.join(os.tmpdir(), 'money-engine-'));
  tempDirs.push(root);

  const workflowDir = path.join(root, 'workflows', 'first-revenue', 'first-revenue-sprint');
  fs.mkdirSync(workflowDir, { recursive: true });

  fs.writeFileSync(
    path.join(workflowDir, 'manifest.yaml'),
    [
      'id: first-revenue-sprint',
      'name: First Revenue Sprint',
      'category: first-revenue',
      'version: 0.1.0',
      'status: stable',
      'platforms:',
      '  - n8n',
      'required_integrations:',
      '  - OpenAI-compatible LLM',
      'inputs:',
      '  - founder_profile',
      'outputs:',
      '  - sprint_plan',
      'risk_level: low',
      'human_approval_required: true',
      'description: Generates a simple revenue sprint plan.'
    ].join('\n'),
    'utf8'
  );

  fs.writeFileSync(
    path.join(workflowDir, 'workflow.json'),
    JSON.stringify(overrides.workflowJson ?? { nodes: [] }, null, 2),
    'utf8'
  );
  fs.writeFileSync(
    path.join(workflowDir, 'README.md'),
    ['# First Revenue Sprint', '## Required integrations', '## Safety'].join('\n\n'),
    'utf8'
  );
  fs.writeFileSync(path.join(workflowDir, 'sample-input.json'), '{}', 'utf8');
  fs.writeFileSync(path.join(workflowDir, 'sample-output.md'), '# Sample output', 'utf8');
  fs.writeFileSync(path.join(workflowDir, '.env.example'), 'OPENAI_API_KEY=your_key_here', 'utf8');

  return path.join(root, 'workflows');
}
