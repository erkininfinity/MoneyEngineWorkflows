# Lost Deal Analyzer Workflow

Processes closed-lost B2B deals to extract recurring patterns, objection themes, and pricing mismatches, then recommends targeted experiments to raise future conversion rates.

## Required integrations

- **n8n** (v1.0+)
- **Google Sheets API**
- **OpenAI API**
- **Telegram Bot API**

## Setup

1. Import `workflow.json` into n8n and link credentials.
2. Set env: `GOOGLE_SHEET_ID`, `TELEGRAM_CHAT_ID`.
3. Ensure your Deals sheet includes the column `stage` (set to `lost` for closed-lost deals) plus fields: `deal_id`, `client_id`, `amount`, `loss_reason`, `last_contact_date`, `source`.
4. Run the workflow. Full report will be sent to Telegram.

## Safety

This workflow is categorized under **Low Risk**. It only reads internal data and produces a private diagnostic report — no client communications are made.
