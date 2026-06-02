# Blueprint: Revenue Recovery Agent

**Category**: revenue-recovery  
**Version**: 0.1.0  
**Platform**: Vendor-neutral

This blueprint describes the business logic of the Revenue Recovery Agent workflow independently of any specific automation platform. Use this to implement the same logic in Make, Zapier, Pipedream, or custom code.

---

## Trigger

Run manually or on a schedule (daily or weekly).

---

## Step 1: Fetch Active Business Data

Read the following from your data source (Google Sheets, CRM, database):
- **Invoices**: `invoice_id`, `client_name`, `amount`, `due_date`, `status`
- **Deals**: `deal_id`, `client_name`, `amount`, `stage`, `last_contact_date`

---

## Step 2: Filter by Status

**Overdue Invoices**: select all rows where `status == "overdue"`.  
**Stalled Deals**: select all rows where `stage IN ["proposal_sent", "stalled"]` and `last_contact_date` is more than 5 days ago.

---

## Step 3: Prioritize by Financial Potential

Sort the combined list by `amount` descending. Assign priority ranks.

---

## Step 4: Generate Recovery Actions via LLM

For each item, send a prompt to an LLM with:
- Context: client name, amount, situation (overdue/stalled), days elapsed
- Instruction: write a non-aggressive, professional follow-up/reminder draft message

---

## Step 5: Output

1. Compile a structured Markdown or JSON report listing all items by priority.
2. Notify the founder via Telegram, Slack, or email with the top 3–5 items.
3. Store drafts back to the data source for the founder to review and send manually.

---

## Safety Requirements

- ✅ Messages are drafts only — never send automatically.
- ✅ All client data stays within your own infrastructure (LLM call only receives the specific client record, not the full database).
- ✅ `risk_level: medium` — human approval required before sending any message.
