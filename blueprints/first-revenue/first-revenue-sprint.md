# Blueprint: First Revenue Sprint

**Category**: first-revenue  
**Version**: 0.1.0  
**Platform**: Vendor-neutral

This blueprint describes the logic of the First Revenue Sprint workflow independently of any automation platform.

---

## Trigger

Run manually with founder input parameters.

---

## Inputs Required

| Parameter | Type | Description |
|---|---|---|
| `skills` | string | Comma-separated list of skills |
| `channels` | string | Available sales/outreach channels |
| `target_income` | string | Target revenue goal (e.g. "100,000 KZT") |
| `hours_per_day` | number | Available work hours per day |
| `timeline_days` | number | Sprint duration (default: 7) |

---

## Step 1: Generate Revenue Stream Recommendation

Send inputs to LLM. Ask it to:
- Recommend the highest-probability revenue stream given the skills
- Define the minimal viable service/offer
- Identify the target customer segment

---

## Step 2: Design the 7-Day Action Plan

For each day (1–7), generate:
- Specific daily task (e.g. "Day 1: Build prospect list of 20 contacts")
- Expected outcome
- Channel to use

---

## Step 3: Write Outreach Templates

Generate 2–3 variants of outreach messages:
- Telegram/WhatsApp DM (under 200 characters)
- LinkedIn connection message
- Cold email subject + body

---

## Step 4: Define Success Metrics

Specify:
- Minimum conversations needed
- Minimum proposals needed
- Minimum closes needed to hit income target

---

## Output

Return a structured Markdown document with all 4 sections.  
Send a summary to the founder via Telegram or email.

---

## Safety Requirements

- ✅ `risk_level: low` — no external communications made automatically.
- ✅ All output is a private planning document for the founder only.
