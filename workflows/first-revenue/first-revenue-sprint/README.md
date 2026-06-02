# First Revenue Sprint Workflow

This workflow scaffolds a 7-day revenue generation sprint using your current capabilities, warm channels, and target numbers. It uses AI to formulate the offer, outline target prospects, list daily actions, and generate conversion-optimized messaging drafts.

## Required integrations

- **n8n** (v1.0+)
- **OpenAI API** (or any OpenAI-compatible provider)
- **Telegram Bot API** (for notifications)

## Setup

1. Import `workflow.json` into your n8n instance.
2. In n8n, create an OpenAI Credential and link it to the **OpenAI Chat Model** node.
3. Create a Telegram Credential with your bot token and link it to the **Telegram Alert** node.
4. Set the environment variable `TELEGRAM_CHAT_ID` or configure it directly in the Telegram node parameters.
5. Double-click the **Set Input Params** node and configure your `skills`, `channels`, `target_income`, and `hours_per_day`.
6. Click **Execute Workflow** to generate your plan.

## Safety

This workflow is categorized under **Low Risk**. It generates private recommendations and notifies you in a private Telegram chat. It does not send any emails or messages to clients directly.
