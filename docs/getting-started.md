# Getting Started with Money Engine Workflows

This guide will help you set up and run your first workflow in under 10 minutes.

---

## Prerequisites

Before starting, you will need:

1. **n8n** — Self-hosted or cloud account. [Get n8n →](https://n8n.io)
2. **OpenAI API Key** — or any compatible LLM provider. [Get API Key →](https://platform.openai.com/api-keys)
3. **Telegram Bot** — A bot token and your personal chat ID. [Setup guide →](./telegram-setup.md)
4. **Google Sheets** — A spreadsheet set up with the required columns. [Setup guide →](./google-sheets-setup.md)

---

## Step 1: Clone the Repository

```bash
git clone https://github.com/erkininfinity/MoneyEngineWorkflows.git
cd MoneyEngineWorkflows
```

## Step 2: Install the CLI

```bash
npm install
npm run build
```

## Step 3: Choose Your First Workflow

Start with one of these beginner-friendly workflows:

| Workflow | Purpose | Risk Level |
|---|---|---|
| [First Revenue Sprint](../workflows/first-revenue/first-revenue-sprint) | Get a 7-day plan to earn your first income | Low |
| [AI Offer Builder](../workflows/offer-building/ai-offer-builder) | Structure a sellable offer from your skills | Low |
| [Founder Daily Revenue Brief](../workflows/founder-briefs/founder-daily-revenue-brief) | Daily Telegram digest of revenue actions | Low |

## Step 4: Import the Workflow into n8n

1. Open n8n in your browser.
2. Click the **+** button to create a new workflow.
3. Click the menu (**⋮**) → **Import from file**.
4. Select the `workflow.json` file from the workflow folder.
5. The workflow is now imported.

## Step 5: Configure Credentials

For each workflow, set up n8n credentials:
- **OpenAI**: Settings → Credentials → Add OpenAI → enter your API key.
- **Telegram**: Settings → Credentials → Add Telegram → enter your bot token.
- **Google Sheets**: Settings → Credentials → Add Google Sheets OAuth2.

See the individual setup guides in this `docs/` folder for detailed instructions.

## Step 6: Set Environment Variables

Copy `.env.example` from the workflow folder to `.env` and fill in your values:

```bash
cp workflows/first-revenue/first-revenue-sprint/.env.example .env
```

Edit `.env`:
```
OPENAI_API_KEY=sk-...your-real-key...
TELEGRAM_BOT_TOKEN=123456:ABC...
TELEGRAM_CHAT_ID=987654321
```

## Step 7: Test the Workflow

Click **Execute Workflow** in n8n. Check your Telegram for the result.

---

## Validating Workflows

Run the CLI validator to check all workflows for quality compliance:

```bash
npm run validate
```

## Listing All Workflows

```bash
node packages/cli/dist/index.js list workflows
```

---

## Next Steps

- Explore all 10 workflows in the [`workflows/`](../workflows) directory.
- Read the [Workflow Quality Standard](./workflow-quality-standard.md).
- Contribute your own workflow following [CONTRIBUTING.md](../CONTRIBUTING.md).
