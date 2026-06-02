# Money Engine Workflows — полный план OSS-проекта

**Версия документа:** 1.0  
**Дата:** 2026-06-02  
**Основная цель:** создать реальный open-source проект вокруг AI-автоматизаций для получения, возврата и увеличения дохода, который можно развивать, продвигать и позже использовать как основу для заявки в **OpenAI Codex for OSS**.  
**Рабочее название репозитория:** `money-engine-workflows`  
**Главная тема:** доход, первые продажи, офферы, каналы, follow-up, возврат денег, upsell, revenue review, финансовая дисциплина предпринимателя.

---

## 1. Краткая суть проекта

**Money Engine Workflows** — это open-source библиотека практических AI-workflows для предпринимателей, фаундеров, small business, агентств и консультантов, которые хотят начать получать доход, увеличить выручку, вернуть упущенные деньги и системно управлять revenue-действиями.

Важно: проект не должен выглядеть как “папка с n8n JSON”.  
Он должен выглядеть как полноценная OSS-система:

1. **Workflow library** — готовые workflows для n8n.
2. **Vendor-neutral blueprints** — описание бизнес-логики workflow в независимом формате.
3. **Prompt library** — проверенные AI-prompts для revenue-задач.
4. **CLI validator** — инструмент проверки качества workflows.
5. **Template generator** — генератор структуры нового workflow.
6. **Docs & examples** — документация, demo-data, инструкции.
7. **Quality standard** — правила безопасности, приватности, повторяемости и поддержки.
8. **Community contribution system** — шаблоны issues/PR, roadmap, contribution guide.

Проект должен помогать отвечать на главный вопрос предпринимателя:

> “Что мне сделать сегодня, чтобы появились деньги, вернулись деньги или вырос доход?”

---

## 2. Почему этот проект имеет смысл

### 2.1. Главная боль

У начинающего предпринимателя или малого бизнеса часто нет проблемы “какую CRM выбрать”.  
Главная проблема раньше:

- нет стабильного дохода;
- непонятно, что продавать;
- непонятно, кому продавать;
- непонятно, как сформулировать оффер;
- нет системы действий;
- теряются потенциальные клиенты;
- забываются follow-up;
- счета не контролируются;
- старые клиенты не возвращаются;
- предприниматель не видит, где деньги.

Money Engine Workflows должен закрывать именно эту боль: **переход от хаоса к системным revenue-действиям**.

### 2.2. Почему n8n подходит для старта

n8n — популярная workflow automation platform с native AI capabilities, self-host/cloud вариантами и большим количеством интеграций. Официальный GitHub-репозиторий описывает n8n как платформу с 400+ интеграциями и AI-возможностями. На момент подготовки документа у него около 190k GitHub stars.

Официальная документация n8n указывает, что workflows сохраняются в JSON и могут экспортироваться/импортироваться как JSON-файлы. Это делает n8n удобной стартовой платформой для open-source workflow library.

Но Money Engine Workflows не должен быть заложником n8n. n8n — первый формат исполнения, а не весь проект.

---

## 3. Позиционирование

### 3.1. Английское позиционирование

> Money Engine Workflows is an open-source collection of AI-powered revenue workflows for founders and small businesses: first revenue sprints, offer building, outreach, sales follow-up, revenue recovery, invoice reminders, upsell discovery, and founder daily briefs.

### 3.2. Русское позиционирование

> Money Engine Workflows — open-source библиотека AI-автоматизаций для предпринимателей: первые продажи, офферы, лиды, follow-up, возврат денег, напоминания по оплатам, upsell, ежедневные revenue-briefs и рост дохода.

### 3.3. One-liner для GitHub

> AI-powered n8n workflows and revenue automation blueprints for founders and small businesses to find, recover, and grow revenue.

### 3.4. Слоган

> Find revenue. Recover revenue. Grow revenue.

---

## 4. Чем проект отличается от обычных n8n templates

Обычный template:

- один JSON;
- мало объяснений;
- часто непонятно, как настроить;
- может содержать личные URL или слабую структуру;
- нет стандарта качества;
- нет проверки;
- нет масштабируемости.

Money Engine Workflows:

- у каждого workflow есть `workflow.json`, `README.md`, `manifest.yaml`, `sample-input`, `sample-output`;
- есть CLI-валидатор;
- есть правила безопасности;
- есть demo-data;
- есть независимый blueprint;
- есть prompts;
- есть категории по revenue-задачам;
- есть roadmap;
- есть процесс contributions;
- есть GitHub Actions для проверки PR;
- есть возможность позже добавлять Make, Zapier, Pipedream, Docker worker или Money Engine AI.

---

## 5. Целевая аудитория

### 5.1. Основные пользователи

1. **Начинающие предприниматели**  
   Хотят получить первые деньги, но не знают, что делать каждый день.

2. **Малый бизнес**  
   Теряет лиды, забывает follow-up, не контролирует оплату, не делает upsell.

3. **Агентства и консультанты**  
   Могут использовать workflows для клиентов.

4. **No-code / low-code специалисты**  
   Хотят готовые шаблоны для внедрения.

5. **AI automation builders**  
   Ищут полезные workflows, которые можно кастомизировать.

6. **Разработчики OSS/indie hackers**  
   Хотят open-source базу для revenue automation.

### 5.2. Вторичная аудитория

- владельцы Telegram/Instagram-бизнесов;
- B2B-сервисные компании;
- образовательные проекты;
- консалтинг;
- локальные услуги;
- digital-продукты;
- фрилансеры;
- solo-founders.

---

## 6. Главная продуктовая идея

Проект должен быть сфокусирован не на “автоматизации ради автоматизации”, а на **revenue outcomes**.

Каждый workflow должен попадать минимум в одну из категорий:

1. **Получить первые деньги**
2. **Сформировать оффер**
3. **Найти канал продаж**
4. **Запустить outreach**
5. **Вернуть зависшие деньги**
6. **Контролировать оплаты**
7. **Найти upsell**
8. **Понять, что приносит доход**
9. **Сделать ежедневный/еженедельный revenue review**
10. **Улучшить следующий revenue sprint**

---

## 7. Архитектура проекта

### 7.1. Высокоуровневая структура

```text
money-engine-workflows/
  workflows/
    first-revenue/
    offer-building/
    acquisition/
    outreach/
    sales-follow-up/
    revenue-recovery/
    payments/
    upsell/
    founder-briefs/
    weekly-review/

  blueprints/
    first-revenue/
    offer-building/
    revenue-recovery/

  prompts/
    offer-builder/
    outreach/
    revenue-review/
    invoice-reminder/

  packages/
    cli/
    validator/
    generator/
    schema/

  examples/
    leads.csv
    clients.csv
    invoices.csv
    deals.csv
    revenue-sprint-input.json
    sample-founder-profile.json

  docs/
    getting-started.md
    n8n-import-guide.md
    openai-setup.md
    telegram-setup.md
    google-sheets-setup.md
    workflow-quality-standard.md
    security.md
    contribution-guide.md
    roadmap.md

  .github/
    workflows/
      validate-workflows.yml
    ISSUE_TEMPLATE/
    PULL_REQUEST_TEMPLATE.md

  README.md
  CONTRIBUTING.md
  SECURITY.md
  CODE_OF_CONDUCT.md
  LICENSE
  package.json
```

### 7.2. Структура одного workflow

```text
workflows/revenue-recovery/revenue-recovery-agent/
  workflow.json
  manifest.yaml
  README.md
  sample-input.json
  sample-output.md
  .env.example
  screenshots/
    overview.png
```

### 7.3. Manifest workflow

Каждый workflow должен иметь `manifest.yaml`.

Пример:

```yaml
id: revenue-recovery-agent
name: Revenue Recovery Agent
category: revenue-recovery
version: 0.1.0
status: stable
platforms:
  - n8n
required_integrations:
  - Google Sheets
  - OpenAI-compatible LLM
  - Telegram
inputs:
  - clients.csv
  - deals.csv
  - invoices.csv
outputs:
  - revenue_recovery_report
  - telegram_summary
  - follow_up_messages
risk_level: medium
human_approval_required: true
description: >
  Finds overdue invoices, stalled deals, missed follow-ups and upsell opportunities.
```

### 7.4. Почему нужен manifest

Manifest делает проект серьёзнее:

- workflow можно автоматически валидировать;
- можно строить каталог;
- можно генерировать docs;
- можно проверять версии;
- можно позже экспортировать в другие платформы;
- можно поддерживать качество contributions.

---

## 8. MVP v0.1.0

Цель первой версии: показать, что это реальный и полезный проект, а не набор идей.

### 8.1. Что обязательно входит в v0.1.0

1. **10 готовых workflows для n8n**
2. **10 README-страниц для каждого workflow**
3. **Demo CSV/JSON data**
4. **CLI validator**
5. **Template generator**
6. **GitHub Actions validation**
7. **Основной README**
8. **CONTRIBUTING.md**
9. **SECURITY.md**
10. **Roadmap**
11. **Документация по OpenAI/n8n/Telegram/Google Sheets setup**
12. **Release v0.1.0**

---

## 9. Первые 10 workflows

### 9.1. First Revenue Sprint

**Цель:** помочь человеку запустить 7-дневный спринт для первых денег.

**Вход:**

- навыки;
- опыт;
- доступные ресурсы;
- целевой доход;
- доступные каналы;
- ограничения по времени.

**Выход:**

- revenue stream;
- первый оффер;
- целевая аудитория;
- 7-дневный план;
- тексты outreach;
- метрики;
- ежедневные задачи.

**Пример результата:**

```text
Цель: получить первые 100 000 ₸ за 7 дней.
Оффер: AI-аудит продаж для малого бизнеса.
Канал: теплые контакты + Telegram.
План: 50 контактов, 20 сообщений, 5 звонков, 2 оплаты.
```

**Почему важен:**  
Это главный workflow, который связывает проект с идеей Money Engine.

---

### 9.2. AI Offer Builder

**Цель:** собрать продаваемый оффер из навыка, рынка и боли клиента.

**Вход:**

- что человек умеет;
- кому хочет продавать;
- какой результат может дать;
- желаемый чек;
- сроки выполнения.

**Выход:**

- оффер;
- обещание результата;
- цена;
- пакеты;
- гарантия;
- возражения;
- CTA;
- короткая версия для сообщения;
- версия для поста.

**Пример оффера:**

```text
AI-аудит продаж за 49 000 ₸:
за 48 часов находим 5 мест, где бизнес теряет заявки и деньги,
и даём план автоматизации с готовыми AI-сценариями.
```

---

### 9.3. Cold Outreach Generator

**Цель:** подготовить персонализированные сообщения потенциальным клиентам.

**Вход:**

- список prospects из Google Sheets;
- ниша;
- оффер;
- стиль сообщения;
- канал: Telegram/email/LinkedIn.

**Выход:**

- первое сообщение;
- follow-up через 2 дня;
- follow-up через 5 дней;
- короткий CTA;
- версия без “продажного давления”.

**Важно:**  
Workflow не должен автоматически спамить людей без контроля. По умолчанию должно быть `human approval required`.

---

### 9.4. Hot Lead Detector

**Цель:** определить, где есть деньги и срочность.

**Вход:**

- новый лид;
- сообщение;
- источник;
- продукт;
- бюджет, если есть.

**Выход:**

- lead score;
- revenue potential;
- urgency;
- next action;
- suggested reply;
- notification.

**Отличие от обычного lead scoring:**  
Фокус не просто “какой лид”, а “какое действие может привести к доходу”.

---

### 9.5. Revenue Recovery Agent

**Цель:** найти деньги, которые бизнес уже почти заработал, но не забрал.

**Вход:**

- invoices.csv;
- deals.csv;
- clients.csv;
- последние контакты;
- expected payment date.

**Выход:**

- просроченные счета;
- зависшие сделки;
- клиенты без follow-up;
- повторные продажи;
- приоритеты по деньгам;
- тексты сообщений;
- Telegram summary.

**Пример результата:**

```text
Сегодня можно вернуть до 1 250 000 ₸:
1. Клиент A — счёт 320 000 ₸ просрочен 8 дней.
2. Клиент B — КП на 600 000 ₸ отправлено 6 дней назад, нет follow-up.
3. Клиент C — покупал 3 месяца назад, можно предложить сопровождение.
```

---

### 9.6. Founder Daily Revenue Brief

**Цель:** каждый день давать владельцу бизнеса короткий список revenue-действий.

**Вход:**

- новые лиды;
- сделки;
- invoices;
- tasks;
- yesterday activity.

**Выход:**

- 3 главных действия для денег;
- сделки с риском;
- кто должен оплатить;
- кому написать;
- прогноз потенциальных денег на день;
- Telegram message.

**Пример:**

```text
Сегодня главное:
1. Позвонить клиенту B — сделка 600 000 ₸ зависла после КП.
2. Напомнить клиенту A об оплате 320 000 ₸.
3. Написать 10 prospects из списка "теплые контакты".
```

---

### 9.7. Invoice Reminder AI

**Цель:** контролировать оплаты и готовить корректные напоминания.

**Вход:**

- invoices.csv;
- due dates;
- client tone;
- relationship type.

**Выход:**

- мягкое напоминание;
- повторное напоминание;
- деловое строгое напоминание;
- список просрочек;
- Telegram/email draft.

**Важно:**  
По умолчанию отправка только после подтверждения человеком.

---

### 9.8. Upsell Finder

**Цель:** найти клиентов, которым можно предложить дополнительную покупку.

**Вход:**

- список клиентов;
- история покупок;
- дата последней покупки;
- продуктовая линейка;
- средний чек.

**Выход:**

- upsell opportunities;
- cross-sell ideas;
- приоритет;
- ожидаемый потенциальный доход;
- сообщение клиенту.

---

### 9.9. Lost Deal Analyzer

**Цель:** понять, почему теряются сделки.

**Вход:**

- lost deals;
- комментарии менеджеров;
- переписки;
- цены;
- источники.

**Выход:**

- причины потерь;
- частые возражения;
- проблемы оффера;
- проблемы цены;
- рекомендации;
- next experiment.

---

### 9.10. Weekly Revenue Review

**Цель:** раз в неделю разобрать, что реально принесло деньги.

**Вход:**

- доходы;
- сделки;
- лиды;
- расходы на привлечение;
- outreach activity;
- invoices.

**Выход:**

- что сработало;
- что не сработало;
- какие каналы дают доход;
- где потери;
- что тестировать на следующей неделе;
- revenue sprint на 7 дней.

---

## 10. CLI-инструменты

Чтобы проект был весомым, нужен собственный CLI.

Рабочее название пакета:

```bash
money-engine
```

### 10.1. Команды CLI

```bash
money-engine validate workflows/**/*.json
money-engine validate-manifest workflows/**/manifest.yaml
money-engine create workflow
money-engine list
money-engine docs:generate
money-engine check-secrets
```

### 10.2. Validator должен проверять

1. Валидный JSON.
2. Есть `manifest.yaml`.
3. Есть `README.md`.
4. Есть `sample-input`.
5. Есть `sample-output`.
6. Нет реальных credentials.
7. Нет личных webhook URLs.
8. Нет hardcoded email/phone/private data.
9. Есть placeholders.
10. Есть описание required integrations.
11. Есть указание human approval для risky actions.
12. Есть версия.
13. Есть категория.
14. Workflow не содержит очевидные unsafe nodes без предупреждения.
15. README содержит setup steps.

### 10.3. Template generator

Команда:

```bash
money-engine create workflow
```

Генерирует:

```text
workflow.json
manifest.yaml
README.md
sample-input.json
sample-output.md
.env.example
```

### 10.4. Почему CLI важен

CLI делает проект:

- технически серьёзным;
- поддерживаемым;
- удобным для contributions;
- подходящим для GitHub Actions;
- более убедительным для Codex for OSS.

---

## 11. Технический стек

### 11.1. Для repository tooling

- **TypeScript**
- **Node.js**
- **pnpm**
- **Zod** для schema validation
- **Vitest** для тестов
- **ESLint/Prettier**
- **GitHub Actions**

### 11.2. Для workflows

- n8n JSON
- OpenAI-compatible LLM node / HTTP request
- Google Sheets
- Telegram
- Email/Gmail
- Webhook
- Schedule Trigger
- CSV/Spreadsheet input

### 11.3. Для документации

- Markdown
- Возможно позже: Docusaurus или Nextra
- GitHub Pages

---

## 12. Безопасность и приватность

Проект работает с доходами, клиентами и потенциально чувствительными данными. Поэтому с первого дня нужен security-first подход.

### 12.1. Правила

1. Никогда не хранить реальные API keys в workflow.
2. Никогда не коммитить реальные webhook URLs.
3. Использовать placeholders:
   - `{{OPENAI_API_KEY}}`
   - `{{TELEGRAM_BOT_TOKEN}}`
   - `{{GOOGLE_SHEET_ID}}`
4. Все отправки клиентам — только через approval mode в первом MVP.
5. Не обещать юридические, налоговые или финансовые советы.
6. AI-generated messages должны быть drafts, а не auto-send, если workflow может повлиять на клиента.
7. Указывать risk level workflow.
8. Добавить prompt injection предупреждения.
9. Не передавать лишние персональные данные в LLM.
10. Для каждого workflow указать, какие данные уходят в AI.

### 12.2. Security labels

В manifest:

```yaml
risk_level: low | medium | high
human_approval_required: true
sends_external_messages: true
uses_customer_data: true
uses_financial_data: true
```

### 12.3. SECURITY.md должен включать

- как сообщать уязвимости;
- что считается секретом;
- правила безопасного contribution;
- как удалять случайно добавленные credentials;
- best practices для self-hosted n8n.

---

## 13. Документация

### 13.1. Главные документы

1. `README.md`
2. `docs/getting-started.md`
3. `docs/n8n-import-guide.md`
4. `docs/openai-setup.md`
5. `docs/telegram-setup.md`
6. `docs/google-sheets-setup.md`
7. `docs/workflow-quality-standard.md`
8. `docs/security.md`
9. `docs/revenue-workflow-design.md`
10. `docs/contributing-workflows.md`

### 13.2. README должен отвечать на вопросы

- Что это?
- Для кого?
- Какую проблему решает?
- Как быстро запустить первый workflow?
- Какие workflows уже есть?
- Какие integrations нужны?
- Чем отличается от обычных n8n templates?
- Как contribute?
- Как связаться?
- Roadmap.

---

## 14. Roadmap

### Phase 0 — подготовка концепции

Срок: 1–2 дня

- выбрать название;
- создать GitHub repo;
- выбрать license;
- сделать README skeleton;
- описать первые categories;
- подготовить issue templates.

### Phase 1 — MVP v0.1.0

Срок: 7–14 дней

- добавить 10 workflows;
- добавить demo data;
- написать docs;
- сделать CLI validator v0.1;
- настроить GitHub Actions;
- выпустить первый release;
- опубликовать пост/анонс.

### Phase 2 — v0.2.0

Срок: 2–4 недели после v0.1

- улучшить workflows после тестов;
- добавить screenshots;
- добавить 5 новых workflows;
- добавить docs generator;
- добавить больше examples;
- собрать feedback через GitHub Issues;
- сделать первые community requests.

### Phase 3 — v0.3.0

Срок: 1–2 месяца

- добавить каталог workflows на GitHub Pages;
- добавить workflow rating/status;
- добавить больше revenue categories;
- добавить Pipedream/Make blueprints или neutral YAML;
- улучшить validator;
- подготовить OpenAI Codex for OSS application.

### Phase 4 — v1.0

Срок: 3–6 месяцев

- 30–50 workflows;
- стабильный CLI;
- community contributions;
- docs site;
- issue/PR activity;
- release cadence;
- реальное использование;
- публичные кейсы.

---

## 15. План на первые 30 дней

### День 1–2: старт

- создать repo `money-engine-workflows`;
- добавить README;
- выбрать MIT или Apache-2.0;
- добавить CONTRIBUTING/SECURITY/CODE_OF_CONDUCT;
- создать структуру папок.

### День 3–5: первые workflows

Сделать:

1. AI Offer Builder
2. First Revenue Sprint
3. Revenue Recovery Agent

Для каждого:

- `workflow.json`;
- `manifest.yaml`;
- README;
- sample input/output.

### День 6–8: CLI validator

- создать `packages/cli`;
- команда `validate`;
- проверки manifest/README/sample files;
- проверка secrets;
- тесты.

### День 9–10: документация

- getting started;
- n8n import guide;
- OpenAI setup;
- Telegram setup;
- Google Sheets setup.

### День 11–14: v0.1.0

Добавить ещё 7 workflows:

4. Cold Outreach Generator
5. Hot Lead Detector
6. Founder Daily Revenue Brief
7. Invoice Reminder AI
8. Upsell Finder
9. Lost Deal Analyzer
10. Weekly Revenue Review

После этого:

- GitHub Actions;
- release notes;
- v0.1.0 tag.

### День 15–20: тестирование и улучшение

- протестировать workflows на demo data;
- исправить ошибки;
- добавить screenshots;
- записать короткий demo GIF/video;
- создать issues для roadmap.

### День 21–30: продвижение

- пост в LinkedIn/X;
- пост в n8n community;
- пост в Telegram/личных соцсетях;
- outreach к no-code/AI automation людям;
- собрать feedback;
- открыть GitHub discussions;
- сделать v0.1.1/v0.1.2.

---

## 16. GitHub Issues для старта

Создать первые issues:

1. Add AI Offer Builder workflow
2. Add First Revenue Sprint workflow
3. Add Revenue Recovery Agent workflow
4. Add Founder Daily Revenue Brief workflow
5. Build workflow validator CLI
6. Add secret scanning rules
7. Add Google Sheets setup guide
8. Add Telegram setup guide
9. Add workflow quality standard
10. Add contribution guide for new workflows
11. Add screenshots for each workflow
12. Add docs site
13. Add Make/Pipedream blueprint support
14. Add prompt injection safety guide
15. Add examples for service businesses

---

## 17. Pull Request template

```markdown
## What does this PR add?

## Workflow category

## Checklist

- [ ] workflow.json is valid
- [ ] manifest.yaml is included
- [ ] README.md is included
- [ ] sample-input is included
- [ ] sample-output is included
- [ ] no credentials or private URLs
- [ ] human approval is required for external messages
- [ ] docs explain required integrations
- [ ] tested with demo data

## Screenshots / examples

## Notes
```

---

## 18. Workflow quality standard

Каждый workflow должен быть:

1. **Useful** — решает реальную revenue-задачу.
2. **Reproducible** — можно запустить с demo data.
3. **Safe** — не отправляет сообщения без approval.
4. **Documented** — есть понятные инструкции.
5. **Configurable** — все переменные вынесены.
6. **Maintainable** — есть manifest/version/status.
7. **Portable** — логика описана не только в n8n JSON.
8. **Business-focused** — выводит action, а не просто summary.
9. **AI-aware** — учитывает риски LLM hallucination/prompt injection.
10. **Contribution-ready** — проходит validator.

---

## 19. Как сделать проект реальным, а не фейковым

### 19.1. Обязательные признаки реальности

- публичный GitHub repo;
- регулярные commits;
- issues;
- releases;
- changelog;
- тестируемые workflows;
- demo data;
- инструкции;
- validator;
- первые пользователи;
- feedback;
- исправления bugs;
- понятный maintainer процесс.

### 19.2. Чего нельзя делать

- не создавать пустой repo ради заявки;
- не копировать чужие workflows без лицензии;
- не добавлять fake stars/fake users;
- не писать “used by thousands”, если это неправда;
- не обещать гарантированный доход;
- не выдавать AI-рекомендации как финансовый/юридический совет;
- не отправлять сообщения клиентам автоматически без согласия пользователя.

### 19.3. Как набирать реальное использование

- использовать самому;
- сделать workflows на реальных demo-кейсах;
- дать 5–10 предпринимателям протестировать;
- попросить feedback через GitHub Issues;
- опубликовать короткие видео;
- писать weekly release updates;
- добавить “request a workflow” issue template.

---

## 20. Связка с Money Engine AI

Money Engine Workflows может стать первым практическим OSS-проектом в экосистеме.

### 20.1. Роли проектов

**Money Engine AI**  
Большой продукт: Revenue Operating System.

**Money Engine Workflows**  
Быстрый OSS-проект: готовые revenue workflows и automation blueprints.

### 20.2. Как они усиливают друг друга

- Workflows привлекают аудиторию быстрее.
- Money Engine AI может использовать эти workflows как library.
- CLI validator пригодится обоим проектам.
- Community может добавлять workflows.
- Позже можно сделать экспорт из Money Engine AI в n8n.
- Open-source credibility будет строиться через Workflows.

---

## 21. Стратегия под OpenAI Codex for OSS

### 21.1. Цель

Подать заявку на Codex for OSS не сразу после пустого repo, а после того, как проект будет выглядеть как настоящий open-source maintainer project.

### 21.2. Что OpenAI запрашивает в форме

В форме Codex for OSS нужны:

- имя;
- фамилия;
- email, связанный с ChatGPT;
- GitHub username, профиль должен быть публичным;
- GitHub repository URL, репозиторий должен быть публичным;
- описание роли: primary/core maintainer;
- qualifications / почему repo подходит;
- interest / что интересно: Codex, security, API credits;
- justification / как будут использоваться API credits;
- anything else.

OpenAI описывает программу как поддержку maintainers критического open-source ПО. Selected maintainers могут получить ChatGPT Pro на 6 месяцев с Codex, conditional access to Codex Security и API credits для coding, maintainer automation, release workflows и core open-source work.

### 21.3. Когда подаваться

Лучше подаваться после:

- v0.1.0 release;
- 10+ workflows;
- working CLI validator;
- docs;
- issues;
- хотя бы нескольких external users/testers;
- активной истории commits;
- v0.1.1/v0.1.2 bugfix releases;
- понятного roadmap.

Идеально — после v0.2.0:

- 15+ workflows;
- GitHub Actions validator;
- docs site;
- первые community requests;
- 20–100 stars органически;
- 3–5 real feedback issues.

### 21.4. Черновик ответа: Role

```text
I am the founder and primary maintainer of Money Engine Workflows. I maintain the workflow library, review contributions, design the workflow quality standard, manage releases, and develop the CLI tooling for validation and template generation.
```

### 21.5. Черновик ответа: Qualifications

До 500 символов:

```text
Money Engine Workflows is an open-source library of AI-powered revenue automation workflows and tooling for founders and small businesses. It helps users build, test, and safely run workflows for first revenue, offer creation, outreach, invoice reminders, revenue recovery, upsell discovery, and founder revenue briefs.
```

### 21.6. Черновик ответа: Interest

```text
I am interested in Codex, API credits, and security support to improve workflow quality, review contributions, generate tests, document workflows, detect unsafe patterns, and maintain reliable AI automation examples for the community.
```

### 21.7. Черновик ответа: Justification for API credits

До 500 символов:

```text
API credits will support core OSS work: validating AI prompts, generating tests for workflow tooling, improving docs, summarizing issues, assisting PR review, creating safe demo outputs, and building examples that show how small businesses can use AI workflows for revenue generation without exposing private data.
```

### 21.8. Черновик ответа: Anything else

```text
The project is built as a real open-source maintainer project, not a one-off template dump. It includes workflow manifests, documentation, demo data, quality checks, a validator CLI, security guidelines, and a roadmap for community-contributed revenue automation workflows.
```

---

## 22. Как использовать Codex внутри проекта

Если заявка будет принята, Codex и API credits можно использовать для:

1. Review новых workflow contributions.
2. Проверки README на полноту.
3. Генерации тестов CLI.
4. Поиска hardcoded secrets.
5. Улучшения prompts.
6. Генерации sample outputs.
7. Создания release notes.
8. Issue triage.
9. Security review workflow JSON.
10. Подготовки docs.
11. Рефакторинга validator.
12. Создания converters для других платформ.

---

## 23. Лицензия

Рекомендуемые варианты:

### MIT

Плюсы:

- просто;
- понятно;
- удобно для adoption;
- меньше барьеров.

### Apache-2.0

Плюсы:

- лучше для проектов с большим будущим;
- есть patent grant;
- выглядит более enterprise-friendly.

Мой выбор: **MIT** для быстрого распространения.  
Если планируется серьёзная enterprise-аудитория — **Apache-2.0**.

---

## 24. Названия и брендинг

### 24.1. Репозиторий

`money-engine-workflows`

### 24.2. Альтернативы

- `revenue-workflows`
- `ai-revenue-workflows`
- `founder-revenue-workflows`
- `money-engine-automations`
- `revenue-automation-kit`

### 24.3. GitHub topics

```text
n8n
ai
automation
workflow
revenue
sales
small-business
founders
openai
llm
telegram
google-sheets
sales-automation
business-automation
revenue-operations
```

---

## 25. Пример README opening

```markdown
# Money Engine Workflows

AI-powered revenue automation workflows for founders and small businesses.

Money Engine Workflows is an open-source library of practical n8n workflows, prompts, blueprints, and validation tools for getting, recovering, and growing revenue.

It helps you:
- build a first revenue sprint,
- create a clear offer,
- generate outreach messages,
- recover overdue payments,
- find upsell opportunities,
- review weekly revenue,
- send daily founder revenue briefs.

This project is not a generic automation template dump. Each workflow includes documentation, demo data, a manifest, sample outputs, safety notes, and validation checks.
```

---

## 26. Пример документа workflow README

```markdown
# Revenue Recovery Agent

Find overdue invoices, stalled deals, missed follow-ups, and upsell opportunities.

## Who is this for?

Founders, small businesses, agencies, consultants, and service businesses that already have clients, invoices, or deals but lose revenue due to poor follow-up.

## What it does

1. Reads invoices, deals, and clients from Google Sheets.
2. Detects overdue invoices.
3. Finds deals with no recent follow-up.
4. Finds old clients for possible upsell.
5. Generates a prioritized revenue recovery list.
6. Sends a Telegram summary to the founder.
7. Drafts follow-up messages for approval.

## Required integrations

- n8n
- Google Sheets
- OpenAI-compatible LLM
- Telegram

## Safety

This workflow does not automatically message customers. It generates drafts and sends them to the founder/manager for approval.
```

---

## 27. Примеры данных

### clients.csv

```csv
client_id,name,last_purchase_date,total_spent,notes
1,Alpha Studio,2026-03-12,450000,Interested in automation support
2,Beta Clinic,2026-01-25,1200000,Asked about monthly retainer
3,Gamma School,2025-12-05,300000,No follow-up after proposal
```

### invoices.csv

```csv
invoice_id,client_id,amount,due_date,status
INV-001,1,320000,2026-05-20,overdue
INV-002,2,500000,2026-06-10,pending
INV-003,3,180000,2026-05-15,overdue
```

### deals.csv

```csv
deal_id,client_id,amount,stage,last_contact_date,next_step
D-001,1,600000,proposal_sent,2026-05-22,follow up
D-002,2,900000,negotiation,2026-05-29,send case study
D-003,3,250000,stalled,2026-05-12,call client
```

---

## 28. Метрики успеха проекта

### 28.1. Technical metrics

- количество workflows;
- количество валидных manifests;
- test coverage CLI;
- GitHub Actions pass rate;
- number of releases;
- number of contributors.

### 28.2. Community metrics

- stars;
- forks;
- issues;
- PRs;
- discussions;
- requests for workflows;
- mentions in n8n community.

### 28.3. Product metrics

- workflows imported;
- demo runs;
- user feedback;
- reported revenue use cases;
- number of categories covered.

### 28.4. Codex readiness metrics

- public repo;
- active commits;
- documented maintainer activity;
- clear roadmap;
- security guidelines;
- contribution process;
- core tooling;
- real users/testers.

---

## 29. Стратегия продвижения

### 29.1. Каналы

1. GitHub
2. n8n Community
3. X/Twitter
4. LinkedIn
5. Telegram
6. Reddit: r/n8n, r/Entrepreneur, r/Automate
7. Indie Hackers
8. Hacker News Show HN
9. Product Hunt позже
10. YouTube Shorts/Reels с demo

### 29.2. Контент-углы

- “10 AI workflows to get your first revenue”
- “How to recover lost revenue with n8n + AI”
- “Daily revenue brief for founders”
- “Open-source revenue automation library”
- “Stop losing money because of missed follow-ups”
- “From Google Sheets to AI revenue system”

### 29.3. Первые посты

**Пост 1:**

```text
I’m building Money Engine Workflows — an open-source library of AI-powered n8n workflows for founders and small businesses to find, recover, and grow revenue.

First workflows:
- First Revenue Sprint
- AI Offer Builder
- Revenue Recovery Agent
- Founder Daily Revenue Brief
- Invoice Reminder AI

GitHub: ...
```

**Пост 2:**

```text
Most automation templates focus on moving data.

I want to build workflows that answer:
What can bring revenue today?
Who should I follow up with?
Which invoices are overdue?
Which old clients can buy again?
What offer should I test this week?
```

---

## 30. Риски проекта

### 30.1. Риск: выглядит как обычный template dump

Решение:

- CLI validator;
- manifest standard;
- docs;
- demo data;
- quality checks;
- releases;
- contribution process.

### 30.2. Риск: слишком зависит от n8n

Решение:

- blueprints в независимом YAML/Markdown формате;
- prompts отдельно;
- позже converters;
- позиционировать n8n как первый execution platform.

### 30.3. Риск: обещание дохода

Решение:

- не обещать гарантированный результат;
- формулировать как “helps run revenue experiments”;
- добавить disclaimer.

### 30.4. Риск: auto-spam

Решение:

- human approval by default;
- outreach workflow генерирует drafts;
- clear anti-spam policy.

### 30.5. Риск: приватные данные

Решение:

- sample data только synthetic;
- secret scanning;
- privacy notes;
- minimization of data sent to AI.

---

## 31. Что делать первым

Самый правильный старт:

1. Создать repo.
2. Сделать сильный README.
3. Добавить структуру.
4. Добавить 3 workflows:
   - AI Offer Builder
   - First Revenue Sprint
   - Revenue Recovery Agent
5. Добавить CLI validator skeleton.
6. Выпустить v0.0.1.
7. Дальше добавить ещё 7 workflows и выпустить v0.1.0.

---

## 32. Итоговая формула проекта

**Money Engine Workflows** — это не просто n8n templates.  
Это open-source стандарт, библиотека и tooling для AI revenue automation.

Главный фокус:

```text
получить первые деньги
→ создать оффер
→ найти канал
→ запустить outreach
→ вернуть зависшие деньги
→ контролировать оплаты
→ делать upsell
→ каждую неделю улучшать систему дохода
```

Проект должен стать практическим инструментом для предпринимателей и разработчиков, которые хотят не просто автоматизировать процессы, а строить систему получения и роста дохода.

---

## 33. Ссылки для проверки и дальнейшей работы

- OpenAI Codex for OSS: https://openai.com/form/codex-for-oss/
- n8n GitHub: https://github.com/n8n-io/n8n
- n8n workflow export/import docs: https://docs.n8n.io/workflows/export-import/
- n8n workflow templates: https://n8n.io/workflows/
- n8n AI templates category: https://n8n.io/workflows/categories/ai/

---

## 34. Финальное решение

Рекомендуем делать **Money Engine Workflows** как второй проект рядом с **Money Engine AI**.

- **Money Engine Workflows** — быстрый OSS-проект, который можно запустить и продвигать уже сейчас.
- **Money Engine AI** — более крупная платформа, которую можно строить дальше.
- Workflows дадут аудиторию, реальные use cases, GitHub activity и community.
- Money Engine AI потом сможет использовать Workflows как базовую библиотеку revenue automation.

Лучший порядок:

1. Money Engine Workflows v0.1.0
2. Первые пользователи и feedback
3. Улучшение CLI/tooling
4. Подготовка Codex for OSS заявки
5. Параллельно разработка Money Engine AI

---
