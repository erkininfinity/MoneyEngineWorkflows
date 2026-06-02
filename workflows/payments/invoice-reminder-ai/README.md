# Invoice Reminder AI Workflow

This workflow reads invoices from a Google Sheet, filters for overdue invoices, determines the severity based on overdue days, and drafts appropriate soft, moderate, or strict payment notifications. The drafts are dispatched to the founder's Telegram account.

## Required integrations

- **n8n** (v1.0+)
- **Google Sheets API**
- **OpenAI API**
- **Telegram Bot API**

## Setup

1. Import `workflow.json` into n8n.
2. Link Sheets, OpenAI, and Telegram credentials.
3. Set env config:
   - `GOOGLE_SHEET_ID`: Target sheet containing invoices.
   - `TELEGRAM_CHAT_ID`: Recipient Telegram chat.
4. Ensure invoices sheet has columns: `invoice_id`, `client_name`, `amount`, `due_date`, `status` (overdue), `tone`.

## Safety

This workflow is categorized under **Medium Risk** because it generates communications intended for active, overdue clients. It implements strict **Human-in-the-Loop** safeguards: no reminders are sent to clients automatically. Messages are sent to the founder for approval first.
