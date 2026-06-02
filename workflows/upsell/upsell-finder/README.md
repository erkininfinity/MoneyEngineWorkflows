# Upsell Finder Workflow

Analyzes your client history to identify high-probability upsell and cross-sell opportunities, ranked by revenue potential and relationship readiness.

## Required integrations

- **n8n** (v1.0+)
- **Google Sheets API**
- **OpenAI API**
- **Telegram Bot API**

## Setup

1. Import `workflow.json` into n8n.
2. Link credentials.
3. Configure env:
   - `GOOGLE_SHEET_ID`: Sheet containing your clients database.
   - `PRODUCT_CATALOG`: Plain-text description of your current services/products.
4. Clients sheet should have columns: `client_id`, `name`, `last_purchase_date`, `total_spent`, `notes`.
5. Execute the workflow and review the ranked opportunities in your Telegram.

## Safety

This workflow is categorized under **Low Risk**. All message drafts require human review and approval before being sent to clients.
