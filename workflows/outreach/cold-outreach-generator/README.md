# Cold Outreach Generator Workflow

This workflow reads prospect data (Name, Company, Niche, Recent Update) from a Google Sheet, uses AI to formulate highly customized, context-aware outreach drafts, and saves them back to the spreadsheet for your approval.

## Required integrations

- **n8n** (v1.0+)
- **Google Sheets API**
- **OpenAI API**

## Setup

1. Import `workflow.json` into n8n.
2. Link your Google Sheets and OpenAI credentials in n8n.
3. Prepare a Google Sheet with a worksheet named `Prospects` containing these columns:
   - `name`, `company`, `niche`, `recent_post_or_news`, `draft_message`
4. Set the env variables:
   - `GOOGLE_SHEET_ID`: The ID of your spreadsheet.
   - `MY_OFFER_SUMMARY`: A brief description of what you are offering.
5. Run the workflow. It will iterate through each row and write the personalized drafts in the `draft_message` column.

## Safety

This workflow is categorized under **Medium Risk** as it compiles messaging drafts that could potentially be sent to real prospects. It is configured to run in **Human-in-the-Loop** mode: drafts are stored in the sheet and must be reviewed, modified, and sent manually by a human.
