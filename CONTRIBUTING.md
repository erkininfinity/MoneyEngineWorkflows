# Contributing to Money Engine Workflows

First off, thank you for taking the time to contribute! We want to build the most comprehensive, safe, and actionable open-source library of revenue automations.

Here are the guidelines to ensure your contributions can be merged quickly and smoothly.

---

## 🛠️ Contribution Workflow

1. **Fork the Repository**: Create your own copy of the codebase.
2. **Create a Feature Branch**:
   ```bash
   git checkout -b workflow/my-awesome-workflow
   ```
3. **Scaffold Your Workflow**:
   Use our CLI to scaffold the correct directory structure:
   ```bash
   node packages/cli/dist/index.js create workflows/my-category/my-awesome-workflow
   ```
4. **Build Your n8n Workflow**:
   - Build and test your workflow in n8n.
   - Export the workflow JSON and save it as `workflow.json` in your new directory.
   - Replace any private credentials, keys, or endpoints with standard placeholders (e.g. `{{OPENAI_API_KEY}}`, `{{TELEGRAM_BOT_TOKEN}}`).
5. **Populate Companion Files**:
   - Write a detailed `manifest.yaml` mapping your workflow metadata.
   - Describe integrations and step-by-step setup in the local `README.md`.
   - Provide realistic, sanitized inputs and outputs (`sample-input.json`, `sample-output.md`, `.env.example`).
6. **Validate Locally**:
   Run the CLI validator to ensure everything meets our quality standards:
   ```bash
   npm run validate
   ```
7. **Commit & Push**: Commit your changes and open a Pull Request.

---

## 📋 Quality Standards

To be accepted, your workflow MUST meet these rules:

1. **Useful**: Solves a specific, real-world revenue-generating, recovery, or tracking problem.
2. **Safe (Human-in-the-Loop)**: Any workflow that interacts externally (sending messages, sending emails, posting messages) must output drafts or require user approval before sending. Auto-spam is forbidden.
3. **No Hardcoded Secrets**: No real API keys, tokens, client IDs, personal emails, phone numbers, or active webhook URLs.
4. **Documented**: Setup instructions must be comprehensive, explaining the Google Sheets schema, required environment variables, and bot configurations.
5. **CLI Passed**: Must pass all validation rules executed by `money-engine validate`.

---

## 📄 Manifest Schema Format

Your `manifest.yaml` must adhere to this structure:

```yaml
id: unique-kebab-case-id
name: Human Readable Title
category: first-revenue | offer-building | acquisition | outreach | sales-follow-up | revenue-recovery | payments | upsell | founder-briefs | weekly-review
version: 0.1.0
status: stable | beta | experimental
platforms:
  - n8n
required_integrations:
  - Google Sheets
  - OpenAI-compatible LLM
  - Telegram
inputs:
  - clients.csv
outputs:
  - telegram_alert
  - follow_up_draft
risk_level: low | medium | high
human_approval_required: true
description: A short 1-2 sentence explanation of what this workflow solves.
```

---

## 🐛 Submitting Pull Requests

Please fill out the Pull Request template completely when opening your PR. The CI pipeline will automatically build the CLI and run validation checks on your branch. If any files are missing or contain secrets, the build will fail.
