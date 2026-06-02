# Workflow Quality Standard

Every workflow in Money Engine Workflows must meet the following standard to be included in the library. The CLI validator enforces most of these rules automatically.

---

## The 10 Quality Principles

### 1. Useful
The workflow must solve a concrete, real-world revenue problem. Acceptable: "Draft reminder for overdue invoices." Not acceptable: "Move data between two sheets."

### 2. Reproducible
Must work on demo data without configuration beyond environment variables. Include `sample-input.json` and `sample-output.md` with realistic examples.

### 3. Safe (Human-in-the-Loop)
Any workflow that sends messages to external parties (clients, prospects) must require human approval before sending. No auto-sending. Use draft output to Telegram, Google Sheets, or a waiting approval node.

### 4. Documented
The workflow `README.md` must include:
- Who the workflow is for
- What it does (numbered steps)
- Required integrations
- Setup instructions
- Safety section

### 5. Configurable
All secrets, IDs, and variable parameters must be externalized via:
- n8n environment variables (`$env.VARIABLE_NAME`)
- n8n credential manager (not hardcoded in nodes)
- `.env.example` file listing all required variables

### 6. Maintainable
Must include a `manifest.yaml` with correct `id`, `name`, `category`, `version`, `status`, `risk_level`, and `human_approval_required`.

### 7. Portable
Business logic should be described in the `README.md` clearly enough to reproduce the workflow in another tool (e.g. Make, Zapier) without studying the JSON directly.

### 8. Business-Focused
Output must be actionable. Prefer "Here are 3 actions with expected revenue impact" over "Here is a summary of your data."

### 9. AI-Aware
Prompts must be engineered to minimize hallucination risk. Output must be labeled as AI-generated drafts. Avoid using AI output as source of truth for financial decisions.

### 10. Contribution-Ready
The workflow must pass `money-engine validate` without errors.

---

## Required File Checklist

| File | Required | Validated by CLI |
|---|---|---|
| `workflow.json` | ✅ | ✅ Valid JSON + nodes array |
| `manifest.yaml` | ✅ | ✅ Schema validated |
| `README.md` | ✅ | ✅ Sections checked |
| `sample-input.json` | ✅ | ✅ Valid JSON |
| `sample-output.md` | ✅ | ✅ Exists |
| `.env.example` | ✅ | ✅ Exists |

---

## Risk Level Definitions

| Level | Meaning |
|---|---|
| `low` | No external communications; internal analysis/planning only |
| `medium` | Drafts external messages (invoices, outreach) for human review |
| `high` | Could trigger financial transactions or send messages automatically |

All `high` risk workflows must have explicit approval gates and are reviewed more strictly before inclusion.
