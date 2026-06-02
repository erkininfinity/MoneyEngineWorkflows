# Prompt Library

Reusable prompts for Money Engine workflows. These prompts are platform-neutral and can be used in n8n AI nodes, OpenAI-compatible chat nodes, Make, Zapier, or a custom worker.

## Available Prompts

| Prompt | Primary workflow | Purpose |
| :--- | :--- | :--- |
| [Offer Builder](offer-builder.md) | AI Offer Builder | Turn skills, audience, pain points, and constraints into a sellable offer. |
| [Outreach Draft Generator](outreach-draft-generator.md) | Cold Outreach Generator | Produce reviewable cold or warm outreach drafts without direct sending. |
| [Invoice Reminder](invoice-reminder.md) | Invoice Reminder AI | Draft polite payment reminders based on invoice status and relationship context. |
| [Revenue Review](revenue-review.md) | Weekly Revenue Review | Summarize revenue signals, blockers, and next actions for a founder. |

## Safety Rules

- Do not include real customer data, API keys, webhook URLs, phone numbers, or private emails in prompt examples.
- Keep all outbound messaging prompts in draft mode unless the workflow has explicit human approval.
- Prefer concise, structured outputs that can be validated or reviewed before use.
