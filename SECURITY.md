# Security Policy

We take security and privacy seriously. Because **Money Engine Workflows** handles revenue, invoices, deals, and client information, safeguarding user configurations and credentials is a top priority.

---

## 🔒 Credential Isolation & Safe Practices

To ensure that your automations remain secure, we mandate a strict separation between credentials and workflow logic:

1. **Use n8n Credential Managers**: Do not hardcode authentication details inside nodes. Use n8n's native credentials systems.
2. **Environment Variables**: Use `.env` or system variables for variables that change between environments (e.g. Google Sheet IDs, Telegram Chat IDs).
3. **Drafts Over Direct Senders**: For outreach or messaging templates, default to drafting messages for review rather than automating client communications with zero human review.
4. **Secret Scanning CLI**: The `money-engine` validator scans configurations to block accidental commits of URLs containing sensitive tokens, passwords, or alphanumeric values that resemble API keys.

---

## 🚨 Reporting a Vulnerability

If you discover a security vulnerability, please do NOT create a public issue. Instead, report it privately:

1. Send an email to **erkin@erkininfinity.com** (with CC to any relevant maintainers).
2. Include a detailed description of the vulnerability, steps to reproduce, and potential impact.
3. We will acknowledge receipt of your report within 48 hours and coordinate a fix.

---

## 🛠️ Mitigating Accidental Secret Leaks

If you accidentally commit a real API key, webhook URL, or sensitive customer details:

1. **Revoke the Leak Immediately**: Rotate your OpenAI API keys, reset Telegram Bot tokens, or change your spreadsheet permissions. This is the single most important step.
2. **Clean the Git History**: Use tools like `git-filter-repo` or BFG Repo-Cleaner to scrub the secret from your branch history before merging.
3. **Notify Maintainers**: If the secret was already merged, contact us immediately so we can clean the history of the main repository.
