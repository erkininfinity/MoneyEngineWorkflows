# Founder Daily Revenue Brief Workflow

This workflow triggers every morning at 9:00 AM. It fetches active sales, deal metrics, and invoice states from Google Sheets, uses AI to extract the three highest leverage tasks to generate or secure income, and forwards a compact, readable report directly to the founder's Telegram.

## Required integrations

- **n8n** (v1.0+)
- **Google Sheets API**
- **OpenAI API**
- **Telegram Bot API**

## Setup

1. Import `workflow.json` into n8n.
2. Link your credentials.
3. Configure the `GOOGLE_SHEET_ID` environment variable for your transaction spreadsheet.
4. Configure `TELEGRAM_CHAT_ID` and `TELEGRAM_BOT_TOKEN` (via environment or credentials).
5. Set the active timezone on the Schedule Trigger node to match your business region.

## Safety

This workflow is categorized under **Low Risk**. It is an informational digest sent directly to the business owner and does not execute external sales/payment actions.
