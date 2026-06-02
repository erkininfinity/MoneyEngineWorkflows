# Money Engine Workflows

> AI-powered n8n workflows and revenue automation blueprints for founders and small businesses to find, recover, and grow revenue.

---

[![Validate Workflows CI](https://github.com/erkininfinity/MoneyEngineWorkflows/actions/workflows/validate-workflows.yml/badge.svg)](https://github.com/erkininfinity/MoneyEngineWorkflows/actions/workflows/validate-workflows.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

**Money Engine Workflows** is an open-source collection of AI-powered revenue automation workflows, templates, blueprints, prompts, and validator tooling. It is specifically designed for startups, founders, small B2B/B2C businesses, and agencies to transition from sales chaos to predictable, systemized revenue-generating actions.

> **Slogan:** Find revenue. Recover revenue. Grow revenue.
> **Core Principle:** Focus automation not just on moving data, but on driving revenue outcomes.

---

## 🌟 Key Features

1. **Production-Ready n8n Workflows** – 10 highly realistic, configurable templates with credential placeholders and human-in-the-loop safeguards.
2. **Quality Manifest Standard** – Every workflow includes metadata specifying risk levels, integrations, CSV structures, and inputs/outputs.
3. **CLI Tooling (`money-engine`)** – Built-in command line utility to validate manifests, scan for hardcoded secrets, list integrations, and scaffold new workflows.
4. **Credential Isolation & Safety** – Explicit strict guidelines and automated validation rules ensuring no production webhooks or API keys are ever committed.
5. **Blueprint System** – Platform-independent definitions explaining the business logic behind each automation, making it easily reproducible on platforms like Make or Zapier.

---

## 📂 Project Structure

```text
money-engine-workflows/
├── workflows/                # Production n8n workflows grouped by category
│   ├── first-revenue/        # Sprints for starting first-time income
│   ├── offer-building/       # AI assistants to package and price offers
│   ├── acquisition/          # Lead qualifiers and scoring automations
│   ├── outreach/             # Cold and warm messaging flow draft-generators
│   ├── sales-follow-up/      # Lost deals analysis and CRM progression
│   ├── revenue-recovery/     # Multi-channel recovery agents for stalled accounts
│   ├── payments/             # Invoice status matching and email templates
│   ├── upsell/               # Discover and suggest account growth opportunities
│   ├── founder-briefs/       # Daily action briefs sent to Telegram/Slack
│   └── weekly-review/        # Comprehensive weekly outcome dashboard summaries
├── blueprints/               # Vendor-neutral workflow logic maps
├── prompts/                  # AI instruction sets and templates
├── packages/
│   └── cli/                  # Validator and boilerplate generator command-line tool
├── examples/                 # Synthetic datasets (clients, invoices, deals CSVs)
└── docs/                     # Comprehensive setup guides & quality standards
```

---

## 🚀 Quick Start

### 1. Requirements

- Node.js (v20.19 or higher)
- n8n (self-hosted or cloud version)
- API Credentials (e.g., OpenAI or any OpenAI-compatible LLM provider, Telegram Bot Token, Google Sheets API)

### 2. Installation

Clone this repository and bootstrap dependencies:

```bash
git clone https://github.com/erkininfinity/MoneyEngineWorkflows.git
cd MoneyEngineWorkflows
npm install
npm run build
```

### 3. Running the Validator CLI

Run validation on all workflows:

```bash
# Using the root npm script
npm run validate

# Or call the CLI directly
node packages/cli/dist/index.js validate workflows
```

To create a new workflow scaffold:

```bash
node packages/cli/dist/index.js create workflows/my-category/my-new-workflow
```

---

## 🛠️ The 10 Core Workflows

| Category | Workflow | Description | Risk Level |
| :--- | :--- | :--- | :---: |
| **First Revenue** | [First Revenue Sprint](workflows/first-revenue/first-revenue-sprint) | Scaffolds a 7-day revenue sprint based on skills and channels. | Low |
| **Offer Building** | [AI Offer Builder](workflows/offer-building/ai-offer-builder) | Structures a premium offering with pricing, tiers, and hooks. | Low |
| **Outreach** | [Cold Outreach Generator](workflows/outreach/cold-outreach-generator) | Generates tailored multi-step messaging drafts for leads. | Medium |
| **Acquisition** | [Hot Lead Detector](workflows/acquisition/hot-lead-detector) | Analyzes inbound messages to score and highlight urgent opportunities. | Low |
| **Recovery** | [Revenue Recovery Agent](workflows/revenue-recovery/revenue-recovery-agent) | Scans records to pinpoint unpaid bills and stalled proposals. | Medium |
| **Founder Briefs** | [Founder Daily Revenue Brief](workflows/founder-briefs/founder-daily-revenue-brief) | Daily digests summarizing critical high-value actions. | Low |
| **Payments** | [Invoice Reminder AI](workflows/payments/invoice-reminder-ai) | Automatically drafts gentle and firm reminder messages. | Medium |
| **Upsell** | [Upsell Finder](workflows/upsell/upsell-finder) | Pinpoints previous buyers ideal for renewals or upgrades. | Low |
| **Follow-Up** | [Lost Deal Analyzer](workflows/sales-follow-up/lost-deal-analyzer) | Audits failed negotiations to extract key conversion insights. | Low |
| **Weekly Review** | [Weekly Revenue Review](workflows/weekly-review/weekly-revenue-review) | Aggregates weekly metrics and outcomes for strategic review. | Low |

---

## 🛡️ Security & Privacy

This project strictly adheres to **Human-in-the-Loop** and **Credential Isolation** standards:
- **No Direct Send**: Workflows that draft outreach or reminder messages save outcomes as drafts or send them to the founder for approval rather than messaging clients directly.
- **Zero Secrets Policy**: Credentials are parameterized via environment variables (`.env`) or n8n credential managers. Real webhook keys or personal data must never be committed.

For details, see [SECURITY.md](SECURITY.md).

---

## 🤝 Contributing

We welcome contributions! Check out [CONTRIBUTING.md](CONTRIBUTING.md) to understand:
- How to write workflows that meet the standard.
- Running checks locally via the validator CLI.
- Submitting Pull Requests.

Maintainer notes for the OpenAI Codex for OSS application are in [docs/codex-for-oss.md](docs/codex-for-oss.md).

---

## 🗺️ Roadmap

- [x] MVP v0.1.0: 10 core workflows, CLI validator, documentation, GitHub Actions.
- [ ] v0.2.0: Richer screenshot previews, 5 additional workflows (social sales, contract reminders), interactive CLI documentation generator.
- [ ] v0.3.0: Make and Zapier blueprint representations, hosted workflow catalog on GitHub Pages.
- [ ] v1.0.0: Stable CLI compiler, 30+ workflows, integration with the upcoming Money Engine AI core platform.

---

## 📄 License

This project is licensed under the MIT License. See [LICENSE](LICENSE) for details.
