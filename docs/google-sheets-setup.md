# Google Sheets Setup Guide

Multiple workflows read client, invoice, and deal data from Google Sheets.

---

## Step 1: Create Your Revenue Tracking Spreadsheet

Create a new Google Spreadsheet and add these tabs with the exact column headers:

### `Clients` tab
| client_id | name | last_purchase_date | total_spent | notes |
|---|---|---|---|---|
| 1 | Alpha Studio | 2026-03-12 | 450000 | Interested in retainer |

### `Invoices` tab
| invoice_id | client_id | amount | due_date | status | tone |
|---|---|---|---|---|---|
| INV-001 | 1 | 320000 | 2026-05-20 | overdue | Friendly/Professional |

(`status` values: `pending`, `paid`, `overdue`)

### `Deals` tab
| deal_id | client_id | amount | stage | last_contact_date | next_step | loss_reason | source |
|---|---|---|---|---|---|---|---|
| D-001 | 1 | 600000 | proposal_sent | 2026-05-22 | follow up | | LinkedIn |

(`stage` values: `lead`, `negotiation`, `proposal_sent`, `stalled`, `won`, `lost`)

### `MetricsSummary` tab (for daily/weekly briefs)
| date | revenue_collected | deals_won | deals_lost | new_leads | outreach_sent |
|---|---|---|---|---|---|
| 2026-06-02 | 820000 | 2 | 1 | 5 | 20 |

### `WeeklyMetrics` tab (for Weekly Revenue Review)
| week | revenue_collected | deals_closed_won | deals_closed_lost | new_leads | outreach_sent | outreach_replies |
|---|---|---|---|---|---|---|
| 2026-05-26 to 2026-06-01 | 820000 | 2 | 3 | 7 | 34 | 6 |

---

## Step 2: Get the Spreadsheet ID

Your Google Spreadsheet URL:
```
https://docs.google.com/spreadsheets/d/YOUR_SHEET_ID/edit
```

The long string between `/d/` and `/edit` is your **Sheet ID**.

---

## Step 3: Set Up Google Sheets OAuth2 in n8n

1. In n8n: **Settings → Credentials → New → Google Sheets OAuth2 API**.
2. Follow the OAuth consent flow to authorize.
3. Save as `Revenue Sheets`.

---

## Step 4: Configure Environment Variable

```
GOOGLE_SHEET_ID=1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgVE2upms
```

---

## Using Sample Data

See the [`examples/`](../examples) folder for ready-to-use CSV files that match these sheet structures. You can import them directly into Google Sheets via **File → Import**.
