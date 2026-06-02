# Weekly Revenue Review Workflow

Runs every Monday morning, aggregating weekly deal activity, collected payments, lead engagement, and outreach results into a strategic performance review and next-week action sprint.

## Required integrations

- **n8n** (v1.0+)
- **Google Sheets API**
- **OpenAI API**
- **Telegram Bot API**

## Setup

1. Import `workflow.json` into n8n.
2. Link credentials.
3. Configure environment:
   - `GOOGLE_SHEET_ID`: Sheet with a `WeeklyMetrics` tab.
   - `TELEGRAM_CHAT_ID`: Where to deliver the weekly report.
4. The `WeeklyMetrics` sheet should be updated weekly with: revenue collected, deals closed, deals lost, new leads, outreach sent, and channel breakdown.
5. Activate the workflow — it triggers automatically every Monday at 9AM.

## Safety

This workflow is categorized under **Low Risk**. It reads internal metrics and sends a private digest to the founder only.
