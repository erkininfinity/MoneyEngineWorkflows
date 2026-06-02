# AI Offer Builder Workflow

This workflow automatically takes your technical/business skills, pairs them with target audience demographics and pain points, and structures a compelling B2B offer with proper positioning, tiers, pricing, risk-reversal, and landing copy.

## Required integrations

- **n8n** (v1.0+)
- **OpenAI API**
- **Telegram Bot API**

## Setup

1. Import `workflow.json` into n8n.
2. Link your OpenAI and Telegram credentials.
3. Configure the `TELEGRAM_CHAT_ID` environment parameter.
4. Modify values inside the **Set Input Params** node:
   - `capabilities`: your skill list.
   - `target_audience`: who you want to sell to.
   - `customer_pain`: main pain point.
   - `target_price`: minimum price.
5. Execute the workflow to generate and receive your structured offer.

## Safety

This workflow is categorized under **Low Risk**. It generates copy recommendations privately and does not publish them anywhere.
