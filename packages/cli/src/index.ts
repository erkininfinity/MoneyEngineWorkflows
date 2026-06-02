#!/usr/bin/env node

import { Command } from 'commander';
import path from 'path';
import { validateWorkflows } from './commands/validate.js';
import { createWorkflow } from './commands/create.js';
import { listWorkflows } from './commands/list.js';
import { generateDocs } from './commands/docs.js';

const program = new Command();

program
  .name('money-engine')
  .description('CLI companion for Money Engine Workflows')
  .version('0.1.0');

program
  .command('validate')
  .description('Validate workflows in a directory')
  .argument('[dir]', 'Directory containing workflows', 'workflows')
  .action((dir) => {
    const targetDir = path.resolve(dir);
    const success = validateWorkflows(targetDir);
    if (!success) {
      process.exit(1);
    }
  });

program
  .command('create')
  .description('Scaffold a new workflow')
  .argument('<path>', 'Target path (e.g. workflows/category/workflow-name)')
  .option('-n, --name <name>', 'Human readable name of the workflow')
  .option('-d, --desc <desc>', 'Description of the workflow')
  .action((targetPath, options) => {
    const success = createWorkflow(targetPath, options);
    if (!success) {
      process.exit(1);
    }
  });

program
  .command('list')
  .description('List all workflows')
  .argument('[dir]', 'Workflows directory', 'workflows')
  .action((dir) => {
    const targetDir = path.resolve(dir);
    listWorkflows(targetDir);
  });

program
  .command('docs')
  .description('Generate documentation registry')
  .argument('[dir]', 'Workflows directory', 'workflows')
  .action((dir) => {
    const targetDir = path.resolve(dir);
    generateDocs(targetDir);
  });

program.parse(process.argv);
