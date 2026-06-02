# Telegram Setup Guide

Telegram is used by several workflows to send notifications, daily briefs, and follow-up drafts to your private chat.

---

## Step 1: Create a Telegram Bot

1. Open Telegram and search for **@BotFather**.
2. Send `/newbot`.
3. Choose a name (e.g. `My Revenue Engine`) and a username ending in `bot` (e.g. `my_revenue_engine_bot`).
4. BotFather will return your **Bot Token** — copy and save it safely.

```
7123456789:AAFbbcdd-your-bot-token-here
```

> ⚠️ **Never commit this token to a public repository.**

---

## Step 2: Get Your Chat ID

1. Start a conversation with your new bot by clicking its link.
2. Send any message (e.g. `/start`).
3. Open this URL in your browser, replacing `YOUR_BOT_TOKEN`:
   ```
   https://api.telegram.org/botYOUR_BOT_TOKEN/getUpdates
   ```
4. Look for `"chat":{"id":` — the number after it is your **Chat ID**.

```json
"chat": {
  "id": 987654321,
  "first_name": "Erkin",
  ...
}
```

---

## Step 3: Configure in n8n

1. In n8n, go to **Settings → Credentials → New Credential → Telegram API**.
2. Enter your **Bot Token**.
3. Save. Name it something like `My Revenue Bot`.

---

## Step 4: Configure Environment Variables

In your `.env` file:
```
TELEGRAM_BOT_TOKEN=7123456789:AAFbbcdd-your-bot-token-here
TELEGRAM_CHAT_ID=987654321
```

---

## Testing

To test your Telegram setup, send a message via the n8n **Telegram node** or use curl:

```bash
curl -X POST "https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage" \
  -H "Content-Type: application/json" \
  -d '{"chat_id": "987654321", "text": "Hello from Money Engine Workflows!"}'
```
