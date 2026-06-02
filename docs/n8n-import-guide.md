# n8n Workflow Import Guide

This guide explains how to import, configure, and test any workflow from this repository in your n8n instance.

---

## Importing a Workflow

### Method 1: Import from File
1. Open n8n in your browser.
2. Click **"+"** in the top left to create a new workflow.
3. Click the **⋮** menu (top right) → **Import from file**.
4. Select `workflow.json` from the chosen workflow folder.
5. n8n will render the full workflow diagram.

### Method 2: Copy-Paste JSON
1. Open `workflow.json` in a text editor.
2. Copy all content.
3. In n8n → **⋮** → **Import from JSON** → paste and confirm.

---

## Configuring Credentials

After importing, each node that uses an external service will show a warning icon (⚠️). Click each node to set the correct credential:

- **OpenAI node**: link your saved OpenAI API credential.
- **Telegram node**: link your Telegram API credential.
- **Google Sheets node**: link your Google Sheets OAuth2 credential.

---

## Setting Variables

Many workflows use `$env.VARIABLE_NAME` references. In n8n:
1. Go to **Settings → Variables**.
2. Add each variable from the workflow's `.env.example` file.

---

## Testing with Sample Data

To test without real data:
1. Use **Pin Data** on trigger nodes in n8n.
2. Paste the contents of `sample-input.json` as pinned data.
3. Click **Execute Workflow** — n8n will use the pinned data instead of fetching live.

---

## Activating Scheduled Workflows

For workflows with a **Schedule Trigger** (like Daily Revenue Brief and Weekly Review):
1. Confirm the schedule is correct (timezone, day, time).
2. Toggle the workflow to **Active** using the top-right switch.
3. n8n will now run it automatically on the configured schedule.

---

## Troubleshooting

| Issue | Solution |
|---|---|
| Credential error | Check credentials are linked correctly in each node |
| Empty sheet data | Verify sheet name matches exactly (case-sensitive) |
| Telegram message not received | Check `TELEGRAM_CHAT_ID` and bot was started |
| OpenAI rate limit | Switch to `gpt-4o-mini` or add delays between node runs |
