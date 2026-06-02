# OpenAI Setup Guide

Many workflows use an OpenAI-compatible LLM to generate offers, score leads, draft messages, and produce analysis reports.

---

## Step 1: Get an API Key

1. Go to [platform.openai.com/api-keys](https://platform.openai.com/api-keys).
2. Click **Create new secret key**.
3. Name it (e.g. `money-engine-workflows`) and copy the key.

```
sk-proj-...your-secret-key...
```

> ⚠️ **This key is shown only once. Store it in a password manager or `.env` file immediately.**

---

## Step 2: Add Credential in n8n

1. In n8n: **Settings → Credentials → New → OpenAI API**.
2. Paste your API key.
3. Save as `OpenAI Revenue Engine`.

---

## Step 3: Using a Compatible Provider

All workflows use the standard OpenAI Chat Completions API format. You can replace OpenAI with any compatible provider:

| Provider | Base URL Override |
|---|---|
| Together AI | `https://api.together.xyz/v1` |
| Groq | `https://api.groq.com/openai/v1` |
| Azure OpenAI | your Azure endpoint |
| Ollama (local) | `http://localhost:11434/v1` |

In n8n, configure the **Base URL** in the credential if you use an alternative provider.

---

## Recommended Models

| Use Case | Recommended Model |
|---|---|
| Offer building, daily briefs | `gpt-4o` or `gpt-4o-mini` |
| Fast lead scoring | `gpt-4o-mini` |
| Complex analysis (weekly review) | `gpt-4o` |

---

## Cost Estimate

Most workflows consume 500–2,000 input tokens and 300–800 output tokens per run. At current GPT-4o-mini pricing, a daily brief costs roughly **$0.001–0.005** per run.
