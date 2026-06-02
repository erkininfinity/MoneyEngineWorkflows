# Revenue Recovery Agent Workflow

This workflow reads invoices and sales deal pipelines from Google Sheets, finds unpaid bills and stuck B2B proposals, prioritizes them based on financial potential, and notifies the founder on Telegram with custom messaging drafts to recover this money.

## Required integrations

- **n8n** (v1.0+)
- **Google Sheets API**
- **OpenAI API**
- **Telegram Bot API**

## Setup

1. Import `workflow.json` into n8n.
2. Link credentials in n8n.
3. Configure environment parameters:
   - `GOOGLE_SHEET_ID`: Spreadsheet containing transaction sheets.
   - `TELEGRAM_CHAT_ID`: Telegram chat ID for recovery alerts.
4. Format your sheets:
   - **Invoices Sheet**: `invoice_id`, `client_id`, `amount`, `due_date`, `status` (pending, paid, overdue).
   - **Deals Sheet**: `deal_id`, `client_id`, `amount`, `stage` (lead, negotiation, proposal_sent, stalled, won, lost), `last_contact_date`.
5. Run the workflow.

## Safety

This workflow is categorized under **Medium Risk** because it interacts with sensitive invoice information and outputs messages meant to be sent to clients. By default, it operates in **Human-in-the-Loop** mode: all notifications and drafts are delivered to the founder for approval before any outreach occurs.
