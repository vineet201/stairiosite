# Startup India / SISFS Website Update Plan

Status: active phased implementation. Code changes should happen one phase at a time.
Date prepared: 2026-05-12
Site: Stairio

This document is the implementation blueprint for updating the Stairio website so it better supports Startup India recognition, Startup India Seed Fund Scheme readiness, and the broader AI-native company story. The goal is to strengthen the site's proof of innovation, product depth, scalability, impact, and commercialization without losing the current website structure, visual identity, robot/3D feel, dark theme, glass cards, gradients, and existing design language.

## 0. Phase Implementation Tracker

Current working phase:

```text
Phase 1: Home Page Positioning
Status: implemented, pending visual review
Completion: 90%
Next phase after review: Phase 2 - About + Team Credibility
```

Phase progress:

| Phase | Scope | Status | Completion | Notes |
|---|---|---:|---:|---|
| Phase 0 | Content + Design Lock | Partially complete | 60% | Conservative claim rules are locked. Real incorporation, DPIIT, traction, customer, and team proof still need founder confirmation before publishing hard claims. |
| Phase 1 | Home Page Positioning | Review needed | 90% | Original hero restored by founder preference. "What Is Stairio?", Technology Core, Impact Thesis, Roadmap Snapshot, and product carousel updates remain. Targeted lint passed, production build passed, `/` returns 200. Final 10% is desktop/mobile visual review. |
| Phase 2 | About + Team Credibility | Not started | 0% | Wait until Phase 1 is reviewed. |
| Phase 3 | Hotelify Flagship Proof | Not started | 0% | Existing Hotelify design must be preserved. |
| Phase 4 | SmartSite Product Repositioning | Not started | 0% | Depends on approved product-company language from Phase 1. |
| Phase 5A | New `/impact` Page | Not started | 0% | Should use verified impact claims only. |
| Phase 5B | New `/technology` Page | Not started | 0% | Can proceed with architecture-level claims after Phase 1. |
| Phase 5C | New `/case-studies` Page | Not started | 0% | Requires real pilots, demos, LOIs, or clearly labelled concept cases. |
| Phase 6A | AI Voice Agent Page | Not started | 0% | Product depth page. |
| Phase 6B | SalesPro Page | Not started | 0% | Product depth page. |
| Phase 6C | Kore Page | Not started | 0% | Product depth page. |
| Phase 7 | Trust, Legal, Help Center | Not started | 0% | Should happen after product and proof pages are stable. |
| Phase 8 | Navigation, SEO, QA, Final Polish | Not started | 0% | Final linking, metadata, responsive QA, and content polish. |

Phase 0 claim policy now active:

```text
Allowed now:
- AI-native product company positioning.
- Products for hospitality, service MSMEs, sales teams, and operators.
- Technology-led workflow automation, AI agents, analytics, and productized software.
- Roadmap language such as PoC, trials, market entry, and scale.

Avoid until verified:
- DPIIT-recognized claims.
- Startup India Seed Fund eligibility claims.
- Exact customer counts, revenue, growth, savings, or adoption numbers.
- Named customers, pilots, LOIs, testimonials, or government support unless documented.
- Any statement that says funding approval is likely or guaranteed.
```

Update rule:

```text
At the start of each phase: mark that phase "In progress" and set a realistic percent.
During work: increase only after code/content is actually changed.
After verification: mark "Complete" and set 100%.
If founder facts are needed: leave the related item below 100% with a clear note.
```

## 1. Non-Negotiable Design Guardrails

Keep the current site feeling like the current Stairio site.

Do not redesign the brand from scratch. Do not remove the existing hero robot / 3D system, the dark premium theme, glass surfaces, product cards, motion style, or the established purple/orange/green accent language.

Use the existing component language wherever possible:

- Dark backgrounds: black / near-black sections.
- Glass cards: `bg-[#0d0d0d]/80`, soft borders, backdrop blur, subtle top highlight lines.
- Gradients: white-to-neutral text, purple/orange accent gradients, green pulse dots.
- Motion: Framer Motion reveal, gentle hover states, carousel motion.
- Icons: lucide or existing icon systems only.
- Layout rhythm: centered section headers, max-width containers, bento grids, horizontal product cards, dashboard/mock UI panels.
- Do not add a generic corporate white theme.
- Do not replace the current visual direction with government-style design.
- Do not remove the existing homepage robot/AI experience.
- Avoid long text blocks on the page. Use cards, proof strips, metrics, diagrams, timeline panels, and accordions.

Recommended implementation style:

```text
Existing section structure -> same visual style -> stronger content and proof
Existing product cards     -> richer positioning -> no layout disruption
New pages                  -> reuse current dark/glass page template
New content                -> shown as evidence, roadmap, impact, traction
```

## 2. Strategic Positioning Shift

Current site impression:

```text
Stairio = AI/software agency + product ideas
```

Target site impression:

```text
Stairio = AI-native product company for Indian service businesses
```

Recommended company structure to communicate:

```text
Stairio
|
|-- Product Studio
|   |-- Hotelify: AI hospitality operating system
|   |-- SmartSite: AI website and lead-conversion platform
|   |-- AI Voice Agent: sales and support automation
|   |-- Kore: fitness/gym operations platform
|   |-- SalesPro: sales pipeline and revenue workflow platform
|
|-- Stairio Labs
|   |-- Custom AI systems
|   |-- Workflow automation
|   |-- AI agents and integrations
|   |-- Prototype and commercialization projects
|
|-- Impact Mission
    |-- Digitize Indian MSMEs
    |-- Reduce manual operations
    |-- Improve discoverability, revenue, and employment potential
    |-- Build safe, responsible, useful AI for Indian business contexts
```

Core message:

```text
We are building reusable AI-native products for large underserved Indian business categories, starting with hospitality and service MSMEs.
```

This matters because Startup India Seed Fund Scheme is better aligned with scalable product/IP companies than generic service delivery companies.

## 3. Research Signals To Reflect On The Website

Official DPIIT recognition signals:

- Startup should be incorporated as a Private Limited Company, Registered Partnership Firm, or LLP.
- Turnover should be below Rs. 100 crore in any previous financial year.
- Entity should generally be considered startup up to 10 years from incorporation.
- Entity should work toward innovation/improvement of products, services, or processes.
- Entity should have potential to generate employment or create wealth.
- Entity should not be formed by splitting up or reconstructing an existing business.

Official SISFS startup signals:

- Startup should be DPIIT-recognized.
- Startup should be incorporated not more than 2 years ago at time of SISFS application.
- Startup should have a product/service idea with market fit, viable commercialization, and scaling potential.
- Technology should be core to product, service, business model, distribution model, or methodology.
- Preference is given to innovative solutions in priority sectors and impact areas.
- Startup should not have received more than Rs. 10 lakh monetary support under another Central/State Government scheme, excluding specified non-monetary/prize categories.
- Indian promoter shareholding should be at least 51 percent at application time.
- Support can be up to Rs. 20 lakh as grant for PoC/prototype/product trials and up to Rs. 50 lakh as debt/convertible/debt-linked instruments for market entry/commercialization/scaling.
- Funds must be used for the purpose granted, not facility creation.

Current ecosystem signals:

- Startup India / PIB reported on 2026-04-17 that the full Rs. 945 crore SISFS corpus had been committed to 219 incubators, with funding approved to more than 3,400 startups.
- IndiaAI Mission direction favors compute, datasets, indigenous models, startup support, safe/trusted AI, skilling, and real-world applications.
- AI success-story patterns from Startup India pages usually include a narrow problem, clear product, technology depth, measurable impact, recognition/support, and commercialization path.

## 4. Current Public Route Inventory

Current public pages observed locally:

```text
/
/about
/team
/blog
/help-center
/quote
/website-builder
/hotelify
/privacy-policy
/terms-of-service
/refund-policy
```

Current internal/admin pages:

```text
/admin/login
/admin/quotes
/vc/[id]
```

Admin/internal pages should not be part of the public Startup India story.

## 5. Recommended Future Sitemap

Keep existing pages and add only focused proof pages.

```text
HOME /
|
|-- Products
|   |-- /hotelify
|   |-- /website-builder
|   |-- /ai-voice-agent        [new]
|   |-- /kore                  [new or later]
|   |-- /salespro              [new or later]
|
|-- Company
|   |-- /about
|   |-- /team
|   |-- /impact                [new]
|   |-- /technology            [new]
|   |-- /case-studies          [new]
|   |-- /roadmap               [optional new]
|
|-- Resources
|   |-- /blog
|   |-- /help-center
|   |-- /startup-readiness     [optional new, use only if factual]
|
|-- Conversion
|   |-- /quote
|
|-- Legal
    |-- /privacy-policy
    |-- /terms-of-service
    |-- /refund-policy
```

Priority new pages:

1. `/impact`
2. `/technology`
3. `/case-studies`
4. `/ai-voice-agent`

Optional later pages:

1. `/roadmap`
2. `/startup-readiness`
3. `/kore`
4. `/salespro`

## 6. Home Page Update Plan

Current role:

```text
Brand entry point + products/services overview
```

New role:

```text
Investor/incubator-ready company story without losing premium AI-native design
```

Preserve:

- Current hero composition.
- Robot/3D/Spline AI experience.
- "What Is Stairio?" section.
- Products section.
- Services carousel.
- "Built for Impact" cards.
- Testimonials section style.

Update structure:

```text
HOME
|
|-- Hero
|   |-- Keep existing visual/robot style
|   |-- Sharpen copy: "AI-native product company for Indian service businesses"
|   |-- CTA 1: Explore Products
|   |-- CTA 2: See Impact / Build With Us
|
|-- What Is Stairio?
|   |-- Keep current 3D/glass card
|   |-- Add product-company framing
|   |-- Mention reusable AI products, not only custom services
|
|-- Products & Services
|   |-- Keep current card carousel
|   |-- Add clearer badges: Product, Prototype, Pilot, Commercializing
|   |-- Replace dead links with real/future pages
|
|-- Technology Core [new section]
|   |-- AI agents
|   |-- Workflow engine
|   |-- Data/dashboard layer
|   |-- Integrations/API layer
|
|-- Impact Thesis [new section]
|   |-- MSME digitization
|   |-- Hotel revenue leakage reduction
|   |-- Operational automation
|   |-- Job and wealth creation potential
|
|-- Traction & Proof [new section]
|   |-- Pilots, demos, LOIs, testimonials, usage metrics
|   |-- Only use factual numbers
|
|-- Roadmap Snapshot [new section]
|   |-- Prototype -> product trials -> market entry -> commercialization
|
|-- Testimonials
    |-- Keep style
    |-- Prefer real customer/pilot proof when available
```

Suggested home page content blocks:

```text
[Hero Line]
AI-native products for Indian businesses that still run on manual work.

[Support Copy]
Stairio builds vertical AI systems for hospitality, service MSMEs, sales teams, and operators. We combine software, automation, and AI agents into products that can be deployed, measured, and scaled.

[Technology Core Cards]
1. AI Workflow Engine
2. Voice and Chat Agents
3. Business Data Layer
4. Integrations and Automation APIs

[Impact Cards]
1. Reduce manual operations
2. Improve direct revenue capture
3. Enable Tier-2 and Tier-3 digitization
4. Create scalable software-led employment
```

Home page graphical section wireframe:

```text
+------------------------------------------------------+
| HERO: existing robot/AI visual                       |
| "AI-native products for Indian service businesses"   |
| [Explore Products] [See Impact]                      |
+------------------------------------------------------+
| WHAT IS STAIRIO: existing 3D/glass card              |
| Product company + AI-native systems                  |
+------------------------------------------------------+
| PRODUCTS: existing product carousel                  |
| Hotelify | SmartSite | AI Agent | Kore | SalesPro     |
+------------------------------------------------------+
| TECHNOLOGY CORE: new 4-card bento                    |
| Workflow Engine | Agents | Data Layer | Integrations |
+------------------------------------------------------+
| IMPACT THESIS: metric/proof strip                    |
| MSMEs | Hotels | Automation | Jobs                   |
+------------------------------------------------------+
| TRACTION: pilots, demos, testimonials, LOIs          |
+------------------------------------------------------+
| ROADMAP: PoC -> trials -> market entry -> scale      |
+------------------------------------------------------+
```

## 7. About Page Update Plan

Current role:

```text
General company story
```

New role:

```text
Clear company mission, product thesis, and credibility story
```

Preserve:

- Current dark/glass page style.
- Principle cards.
- Timeline layout.
- CTA section.

Add/update:

```text
ABOUT
|
|-- Hero
|   |-- "Building AI-native products for India's next generation of businesses"
|
|-- Why We Exist
|   |-- Keep current card
|   |-- Add problem: fragmented tools, manual operations, low AI adoption in small businesses
|
|-- Company Thesis [new]
|   |-- Vertical SaaS + AI agents + workflow automation
|   |-- Start with hospitality and service MSMEs
|
|-- Mission / Vision [new]
|   |-- Mission: make AI useful and deployable for Indian operators
|   |-- Vision: build category-defining AI-native operating systems
|
|-- Principles
|   |-- Keep current principle grid
|   |-- Add responsible AI, measurable outcomes, product depth
|
|-- How We Work
|   |-- Keep timeline
|   |-- Add "prototype, validate, commercialize, scale"
|
|-- Company Facts [new, factual only]
    |-- Incorporation type/date if available
    |-- DPIIT status if available
    |-- Location
    |-- Products in development
    |-- Pilots/customers if real
```

Graphical wireframe:

```text
+------------------------------+
| About Hero                   |
+------------------------------+
| Why We Exist | What We Build |
+------------------------------+
| Product Thesis Bento         |
| Vertical SaaS + AI Agents    |
+------------------------------+
| Mission | Vision | Values    |
+------------------------------+
| Prototype -> Validate ->     |
| Commercialize -> Scale       |
+------------------------------+
| Company Facts                |
+------------------------------+
```

## 8. Team Page Update Plan

Current role:

```text
Team showcase
```

New role:

```text
Team strength evidence for SISFS/incubator review
```

Preserve:

- Current team card visual style.
- Dark background and motion.
- Team member grid.

Add/update:

```text
TEAM
|
|-- Hero
|   |-- "The builders behind Stairio's AI-native products"
|
|-- Founder / Core Team Cards
|   |-- Real names, real roles
|   |-- Product ownership
|   |-- Technical/business expertise
|
|-- Capability Matrix [new]
|   |-- AI engineering
|   |-- Full-stack product development
|   |-- Cloud/infrastructure
|   |-- UX/product design
|   |-- Domain research and GTM
|
|-- Advisors / Mentors [new if factual]
|   |-- Incubator mentors, domain experts, hospitality advisors
|
|-- Hiring / Talent Mission
    |-- Keep current mission CTA
```

Graphical wireframe:

```text
+------------------------------+
| Team Hero                    |
+------------------------------+
| Founder/Core Team Grid       |
+------------------------------+
| Capability Matrix            |
| AI | Product | Cloud | GTM   |
+------------------------------+
| Advisors / Mentors           |
+------------------------------+
| Join the Mission CTA         |
+------------------------------+
```

Important:

- Avoid fake social links.
- Replace `#` with real links or remove.
- Avoid inflated experience claims unless verified.

## 9. Hotelify Page Update Plan

Current role:

```text
Product landing page for hotel direct booking/PMS
```

New role:

```text
Flagship product proof page for SISFS readiness
```

Preserve:

- Current Hotelify page design.
- Pricing module.
- Existing advanced feature section.
- Direct booking narrative.
- Dark hospitality visual style.

Add/update:

```text
HOTELIFY
|
|-- Hero
|   |-- Keep current design
|   |-- Add stronger product category: "AI hospitality operating system"
|
|-- Problem
|   |-- OTA commissions
|   |-- Fragmented PMS/channel tools
|   |-- Manual guest operations
|   |-- Poor direct booking conversion
|
|-- Product System
|   |-- PMS
|   |-- Direct booking engine
|   |-- Channel manager
|   |-- AI guest assistant
|   |-- Revenue advisor
|
|-- Technology Moat [new]
|   |-- Real-time availability
|   |-- Dynamic pricing rules
|   |-- OTA sync/inventory logic
|   |-- Guest CRM/data layer
|   |-- Automated GST/invoicing/message workflows
|
|-- Pilot / Market Validation [new]
|   |-- Demo hotels, LOIs, pilots, waitlist, interviews
|   |-- Use only factual data
|
|-- SISFS Roadmap [new]
|   |-- PoC: booking engine + dashboard
|   |-- Prototype: PMS + payments + guest portal
|   |-- Product trials: pilot hotels
|   |-- Commercialization: channel manager + AI assistant
|
|-- Pricing
|   |-- Keep plan order already requested
|
|-- FAQ
    |-- Add data/security/OTA/payment support questions
```

Graphical wireframe:

```text
+------------------------------------------------+
| Hotelify Hero                                  |
+------------------------------------------------+
| Hotel Problems: commission, operations, sync    |
+------------------------------------------------+
| Product Modules                                |
| PMS | Booking Engine | CRM | Payments | AI     |
+------------------------------------------------+
| Technology Moat Bento                          |
| Sync | Pricing | CRM | GST | Messaging         |
+------------------------------------------------+
| Pilot / Validation Evidence                    |
+------------------------------------------------+
| Roadmap: PoC -> Trials -> Commercialization    |
+------------------------------------------------+
| Pricing + FAQ                                  |
+------------------------------------------------+
```

## 10. SmartSite / Website Builder Page Update Plan

Current role:

```text
Website package/service page
```

New role:

```text
Scalable SmartSite product for MSME digital presence and lead conversion
```

Preserve:

- Current website-builder hero and demo style.
- Pricing module.
- Visual demo builder.
- Existing website design/service narrative.

Add/update:

```text
SMARTSITE
|
|-- Hero
|   |-- "AI-powered websites that help Indian businesses get discovered and convert leads"
|
|-- Product Framing
|   |-- SmartSite is a repeatable platform, not only a custom website service
|
|-- AI Capabilities [new]
|   |-- AI content assistant
|   |-- SEO checklist/automation
|   |-- Lead capture workflows
|   |-- Local business schema
|   |-- Analytics insights
|
|-- MSME Impact [new]
|   |-- Trust, discoverability, leads, online presence
|
|-- Product Roadmap [new]
|   |-- Template engine
|   |-- No-code editor
|   |-- AI content blocks
|   |-- Multi-language/local SEO
|
|-- Pricing / FAQ
    |-- Keep existing structure
```

Graphical wireframe:

```text
+---------------------------------------------+
| SmartSite Hero + existing visual             |
+---------------------------------------------+
| Why MSMEs Need A Smart Website               |
+---------------------------------------------+
| AI Website Product Layer                      |
| Content | SEO | Leads | Analytics            |
+---------------------------------------------+
| Live Builder / Demo                           |
+---------------------------------------------+
| Roadmap + Pricing + FAQ                       |
+---------------------------------------------+
```

## 11. Products Section / Product Pages Plan

Current issue:

Some products are visible as cards but do not have full pages or working routes. For due diligence, visible products should either have real pages or be clearly marked as "in development."

Product page priority:

```text
Priority 1: /ai-voice-agent
Priority 2: /salespro
Priority 3: /kore
```

Standard product page template:

```text
PRODUCT PAGE
|
|-- Hero
|   |-- Product name
|   |-- Target customer
|   |-- Core promise
|
|-- Problem
|   |-- 3-4 painful workflows
|
|-- Product Modules
|   |-- Core features
|
|-- AI / Technology Layer
|   |-- What is proprietary or reusable
|
|-- Use Cases
|   |-- Industry examples
|
|-- Roadmap / Status
|   |-- Prototype, pilot, beta, live
|
|-- CTA
    |-- Request demo / Join pilot
```

AI Voice Agent page recommended story:

```text
AI Voice Agent
|
|-- For sales, support, follow-up, appointment booking
|-- Problem: missed leads, slow follow-ups, staff overload
|-- Modules: outbound calling, lead qualification, scheduling, CRM update
|-- AI layer: conversation flows, voice pipeline, call summaries, handoff rules
|-- Compliance note: consent, safe calling, human escalation
```

SalesPro page recommended story:

```text
SalesPro
|
|-- For sales teams and service businesses
|-- Problem: scattered leads, missed follow-ups, low pipeline visibility
|-- Modules: pipeline, lead scoring, automation, reporting
|-- AI layer: prioritization, summaries, next-best action
```

Kore page recommended story:

```text
Kore
|
|-- For gyms and fitness centers
|-- Problem: memberships, renewals, attendance, payment leakage
|-- Modules: members, classes, payments, reminders, progress
|-- AI layer: churn alerts, retention nudges, member engagement
```

## 12. New `/impact` Page Plan

Purpose:

Show that Stairio is not only building software, but creating measurable economic and operational impact. This is important for DPIIT/SISFS themes around employment, wealth creation, social/economic value, and national relevance.

Design:

Reuse About/Blog page visual language: dark background, centered hero, glass metric cards, bento grids, timeline.

Structure:

```text
/impact
|
|-- Hero
|   |-- "AI that creates measurable business impact"
|
|-- Impact Thesis
|   |-- Digitizing service MSMEs
|   |-- Reducing manual work
|   |-- Improving revenue capture
|   |-- Creating scalable digital jobs
|
|-- Sector Impact Cards
|   |-- Hospitality
|   |-- Local businesses/MSMEs
|   |-- Sales teams
|   |-- Fitness/wellness operators
|
|-- Metrics We Track
|   |-- Hours automated
|   |-- Leads captured
|   |-- Direct bookings
|   |-- Revenue saved
|   |-- Jobs enabled
|
|-- Responsible AI Commitments
|   |-- Human override
|   |-- Data ownership
|   |-- Privacy-aware workflows
|   |-- Transparent automation
|
|-- Future Impact Roadmap
    |-- Pilots -> measurable studies -> public impact reports
```

Graphical wireframe:

```text
+------------------------------------------+
| Impact Hero                              |
+------------------------------------------+
| Impact Thesis Bento                      |
| MSMEs | Hotels | Revenue | Employment    |
+------------------------------------------+
| Metrics We Track                         |
+------------------------------------------+
| Responsible AI Commitments               |
+------------------------------------------+
| Future Impact Roadmap                    |
+------------------------------------------+
```

## 13. New `/technology` Page Plan

Purpose:

Show technology depth and novelty so the company does not look like an AI wrapper or website agency.

Design:

Dark engineering-focused page using glass cards, architecture diagrams, code-like panels, dashboard mockups, and product module cards.

Structure:

```text
/technology
|
|-- Hero
|   |-- "The AI-native architecture behind Stairio products"
|
|-- Platform Architecture
|   |-- UI/product layer
|   |-- Workflow engine
|   |-- AI agent layer
|   |-- Data/analytics layer
|   |-- Integration/API layer
|
|-- Reusable Technology Modules
|   |-- Booking/availability engine
|   |-- Voice/chat agent framework
|   |-- Lead workflow engine
|   |-- Dashboard/reporting layer
|   |-- Notifications/invoicing automation
|
|-- Data and AI Safety
|   |-- Data ownership
|   |-- Privacy
|   |-- Audit logs
|   |-- Human escalation
|
|-- Product Roadmap
|   |-- Proprietary datasets
|   |-- Vertical AI workflows
|   |-- Multi-language interfaces
|   |-- IndiaAI compute/dataset alignment if applicable
```

Graphical architecture:

```text
+------------------------------------------------+
| Customer Interfaces                             |
| Web App | Mobile Dashboard | Voice | Chat       |
+------------------------+-----------------------+
                         |
+------------------------v-----------------------+
| Stairio Workflow Engine                         |
| Rules | Tasks | Events | Notifications          |
+------------------------+-----------------------+
                         |
+------------------------v-----------------------+
| AI Layer                                        |
| Agents | Summaries | Recommendations | Routing  |
+------------------------+-----------------------+
                         |
+------------------------v-----------------------+
| Data Layer                                      |
| CRM | Bookings | Leads | Revenue | Analytics    |
+------------------------+-----------------------+
                         |
+------------------------v-----------------------+
| Integrations                                    |
| Payments | OTA | WhatsApp | Email | APIs        |
+------------------------------------------------+
```

## 14. New `/case-studies` Page Plan

Purpose:

Build proof for market validation and product trials. This is one of the most important pages for seed fund confidence.

Design:

Use dark cards, before/after metrics, screenshots/mockups, and short case study cards. Avoid long article format.

Structure:

```text
/case-studies
|
|-- Hero
|   |-- "Product trials, pilots, and proof from the field"
|
|-- Featured Case Study
|   |-- Hotelify pilot or demo deployment
|
|-- Case Study Grid
|   |-- Hotelify
|   |-- SmartSite
|   |-- AI Voice Agent
|   |-- Custom AI Automation
|
|-- Evidence Types
|   |-- Pilot
|   |-- Prototype demo
|   |-- LOI
|   |-- Paid customer
|   |-- User interview
|
|-- CTA
    |-- Become a pilot partner
```

Case study card template:

```text
Case Study Card
|
|-- Customer/segment
|-- Problem
|-- Stairio solution
|-- Product modules used
|-- Measured result
|-- Next milestone
```

Important:

- Use real proof only.
- If no customers yet, label as "Prototype validation", "Demo workflow", or "Pilot target".
- Never imply funded/official recognition unless true.

## 15. Optional `/startup-readiness` Page Plan

Use only if the company wants a public due-diligence page. Otherwise keep this content private or inside pitch deck.

Purpose:

Provide a clean, factual page for incubators, partners, or investors.

Structure:

```text
/startup-readiness
|
|-- Company Snapshot
|-- DPIIT Status
|-- Incorporation Details
|-- Product Portfolio
|-- Problem / Solution
|-- Technology Core
|-- Market Opportunity
|-- Traction
|-- Fund Utilization Plan
|-- 12-Month Milestones
|-- Contact
```

Warning:

Only publish if all legal/funding/company facts are verified.

## 16. Blog Update Plan

Current role:

```text
Placeholder insight page
```

New role:

```text
Thought leadership and policy-aligned evidence that Stairio understands AI, India, and target markets
```

Preserve:

- Current blog card layout.
- Dark editorial page.

Recommended article cards:

```text
1. Why Indian Hotels Need AI-Native Operating Systems
2. What AI-Native Means For MSMEs
3. How AI Agents Can Reduce Missed Leads For Local Businesses
4. Building Responsible AI Workflows For Indian Companies
5. From Prototype To Commercialization: How Stairio Builds Products
6. Why Direct Booking Infrastructure Matters For Independent Hotels
7. IndiaAI, Datasets, And The Next Wave Of Vertical AI Products
```

Graphical wireframe:

```text
+------------------------------+
| Blog Hero                    |
+------------------------------+
| Featured Article             |
+------------------------------+
| AI Strategy | Hospitality    |
| MSME Growth | Responsible AI |
+------------------------------+
```

## 17. Help Center Update Plan

Current role:

```text
Basic support index
```

New role:

```text
Product trust and adoption support
```

Add FAQ categories:

```text
Product
- What is Hotelify?
- What is SmartSite?
- What is AI Voice Agent?
- Can products be piloted before full rollout?

Data and AI
- Who owns customer data?
- Is business data used to train public models?
- Can humans review AI actions?
- How are AI mistakes handled?

Implementation
- How long does setup take?
- What integrations are supported?
- What happens after launch?

Startup / Partnership
- Can hotels or MSMEs join a pilot?
- Can incubators or partners contact Stairio?
```

Graphical wireframe:

```text
+-------------------------------+
| Help Center Hero              |
+-------------------------------+
| Product | Data | Setup Cards  |
+-------------------------------+
| FAQ Accordion                 |
+-------------------------------+
| Contact / Pilot CTA           |
+-------------------------------+
```

## 18. Quote Page Update Plan

Current role:

```text
General lead form
```

New role:

```text
Lead capture + pilot/customer validation source
```

Preserve:

- Existing form card design.
- Current form fields.

Add/update later:

```text
QUOTE
|
|-- Add "Join a Pilot" option
|-- Add product interest: Hotelify, SmartSite, AI Agent, Kore, SalesPro, Custom AI
|-- Add company type/industry
|-- Add "I am an incubator / investor / partner" option
|-- Add source tracking
```

Potential service type additions:

```text
Join Hotelify Pilot
Join AI Voice Agent Pilot
Partner / Incubator Inquiry
Investor / Funding Conversation
```

## 19. Privacy Policy Update Plan

Current role:

```text
General privacy page
```

New role:

```text
AI and data trust page
```

Add sections:

```text
AI Data Handling
- What data AI systems may process
- Whether client data is used for model training
- Human review and support access

Business Data Ownership
- Customers own their hotel/guest/lead/business data

Security Practices
- Practical access controls
- Third-party processors
- Payment/communication integrations

Deletion and Export
- How customers can request deletion/export
```

Avoid:

- Overpromising compliance certifications unless verified.
- Mentioning DPDP compliance as complete unless reviewed legally.

## 20. Terms Of Service Update Plan

Add sections:

```text
AI Output and Automation Limits
- AI can support workflows but may need human review
- Customer remains responsible for final business decisions

Product Subscriptions / Pilots
- Trial/pilot terms
- Support scope
- Integrations scope

Data and Integrations
- Customer credentials/API access
- Third-party service dependencies
```

## 21. Refund Policy Update Plan

Add clarity for:

```text
Product subscriptions
Pilot fees
Implementation/setup fees
Custom AI development
Recurring support
```

Keep language practical and customer-friendly.

## 22. Header / Footer Navigation Plan

Current issue:

Some header/footer links are `#`, which weakens credibility.

Update later:

```text
Header Product Menu
|
|-- Hotelify -> /hotelify
|-- SmartSite -> /website-builder
|-- AI Voice Agent -> /ai-voice-agent
|-- SalesPro -> /salespro or mark Coming Soon
|-- Kore -> /kore or mark Coming Soon

Header Company Menu
|
|-- About -> /about
|-- Team -> /team
|-- Impact -> /impact
|-- Technology -> /technology
|-- Case Studies -> /case-studies
|-- Blog -> /blog
```

Footer:

```text
Company
- About
- Team
- Impact
- Case Studies
- Contact / Quote

Products
- Hotelify
- SmartSite
- AI Voice Agent
- SalesPro
- Kore

Resources
- Blog
- Help Center
- Technology
- Privacy
- Terms
```

## 23. SISFS-Ready Evidence Checklist

The site should eventually show or support these proof points:

```text
Eligibility / Company
[ ] Incorporation type
[ ] Incorporation date
[ ] DPIIT recognition status
[ ] Indian promoter shareholding note, if appropriate
[ ] No misleading funding claims

Product
[ ] Clear flagship product
[ ] Product roadmap
[ ] Prototype status
[ ] Pilot status
[ ] Commercialization path

Technology
[ ] AI is core to product/service/business model
[ ] Reusable technology modules
[ ] Data layer or workflow engine
[ ] Proprietary logic / IP direction
[ ] Security and responsible AI posture

Market
[ ] Target customer segments
[ ] Market pain
[ ] Business model
[ ] Pricing or monetization
[ ] Distribution plan

Traction
[ ] Demo screenshots
[ ] Pilot users / LOIs / waitlist
[ ] Testimonials
[ ] Usage metrics
[ ] Revenue or pipeline if available

Impact
[ ] Jobs/wealth creation potential
[ ] MSME digitization impact
[ ] Operational efficiency metrics
[ ] Sector relevance
[ ] India-first AI narrative

Fund Use
[ ] PoC/prototype milestones
[ ] Product trial milestones
[ ] Market entry milestones
[ ] Commercialization milestones
[ ] 12-month plan
```

## 24. Implementation Phases

Use these phases as separate AI/work sessions. Each phase should be implemented, tested, visually checked, and committed/reviewed before moving to the next. This avoids redesign drift and keeps the current Stairio theme intact.

High-level dependency map:

```text
PHASE 0: Content + Design Lock
        |
        v
PHASE 1: Home Page Positioning
        |
        v
PHASE 2: About + Team Credibility
        |
        v
PHASE 3: Hotelify Flagship Proof
        |
        v
PHASE 4: SmartSite Product Repositioning
        |
        v
PHASE 5: New Proof Pages
        |
        v
PHASE 6: Product Depth Pages
        |
        v
PHASE 7: Trust, Legal, Help Center
        |
        v
PHASE 8: Navigation, SEO, QA, Final Polish
```

### Phase 0: Content + Design Lock

Goal:

Create the factual content foundation before touching UI code.

Pages touched:

```text
No production pages yet.
Only this planning document or a separate content worksheet.
```

Work items:

```text
[ ] Confirm incorporation details.
[ ] Confirm DPIIT recognition status.
[ ] Confirm whether any real pilots, customers, LOIs, waitlist, or demos exist.
[ ] Confirm which team members, roles, links, and bios are real.
[ ] Confirm what numbers can be used publicly.
[ ] Decide whether `/startup-readiness` should be public or private.
[ ] Decide which products are active, beta, prototype, or future.
```

Design rule:

```text
No design changes. This phase prevents fake or risky claims later.
```

Output:

```text
Verified facts list
Allowed claims list
Claims to avoid list
Product status list
```

Recommended AI iteration size:

```text
1 short planning/content turn.
No code.
```

### Phase 1: Home Page Positioning

Goal:

Make the homepage immediately communicate Stairio as an AI-native product company, not just an AI service/software agency.

Pages/components touched:

```text
src/app/page.tsx
src/components/ui/products-section.tsx
src/components/ui/services-card-demo.tsx, only if needed
New small homepage section component, if cleaner
```

Structure:

```text
HOME PHASE 1
|
|-- Keep existing hero robot / AI visual
|-- Refine hero copy
|-- Refine "What Is Stairio?"
|-- Add Technology Core section
|-- Add Impact Thesis section
|-- Add Roadmap Snapshot section
|-- Keep current Products and Services layout
```

Work items:

```text
[x] Keep the current hero visual structure.
[x] Replace broad/generic claims with product-company positioning.
[x] Add a compact Technology Core bento section.
[x] Add a compact Impact Thesis section.
[x] Add a small roadmap strip: PoC -> Trials -> Market Entry -> Scale.
[x] Review product cards for dead or misleading links.
[x] Do not remove the robot/Spline section.
```

Do not touch:

```text
Hotelify page
SmartSite page
Legal pages
Admin pages
```

Visual rule:

```text
Use existing homepage dark/glass design. New sections should look like they were always part of the site.
```

Validation:

```text
[x] Home route returns 200.
[x] No TypeScript errors.
[x] Targeted lint for changed files.
[ ] Visual check desktop and mobile.
```

Recommended AI iteration size:

```text
1 implementation turn.
This is the first real code phase.
```

### Phase 2: About + Team Credibility

Goal:

Strengthen company credibility, team strength, mission, and execution capability for incubator/investor review.

Pages/components touched:

```text
src/app/about/page.tsx
src/app/team/page.tsx
src/components/ui/team-section-block.tsx
```

Structure:

```text
ABOUT + TEAM PHASE
|
|-- About
|   |-- Mission
|   |-- Vision
|   |-- Company thesis
|   |-- Product-company structure
|   |-- Prototype -> validate -> commercialize -> scale process
|
|-- Team
    |-- Real role clarity
    |-- Capability matrix
    |-- Advisors/mentors only if factual
    |-- Remove or replace fake social links
```

Work items:

```text
[ ] Add "Why we exist" with India/MSME/product framing.
[ ] Add mission and vision cards.
[ ] Add product thesis section.
[ ] Add company facts section, only with verified facts.
[ ] Add team capability matrix.
[ ] Clean fake `#` social links where possible.
```

Do not touch:

```text
Home page, except navigation if absolutely required.
Product pages.
Legal pages.
```

Visual rule:

```text
Reuse About page dark cards and Team page motion/card pattern.
```

Validation:

```text
[ ] /about returns 200.
[ ] /team returns 200.
[ ] Targeted lint for changed files.
[ ] Check mobile card stacking.
```

Recommended AI iteration size:

```text
1 implementation turn.
```

### Phase 3: Hotelify Flagship Proof

Goal:

Make Hotelify the strongest flagship product page for SISFS readiness.

Pages/components touched:

```text
src/app/hotel-saas/page.tsx
src/app/hotelify/page.tsx, only if alias needs metadata/route handling later
src/components/blocks/hotelify-advanced-features.tsx
Possible new Hotelify proof/roadmap component
```

Structure:

```text
HOTELIFY PHASE
|
|-- Keep existing hero and pricing structure
|-- Strengthen problem framing
|-- Add technology moat section
|-- Add pilot/validation section
|-- Add SISFS roadmap section
|-- Add security/data/payment FAQ items
```

Work items:

```text
[ ] Keep pricing design and current plan order.
[ ] Keep existing Hotelify advanced features section.
[ ] Add "Technology Moat" around booking, PMS, channel sync, CRM, pricing, GST, messaging.
[ ] Add "Product Trial Roadmap" using SISFS language: PoC, prototype, trials, commercialization.
[ ] Add pilot/validation block with factual status only.
[ ] Add or update FAQs around data, payments, OTA sync, onboarding.
```

Do not touch:

```text
Homepage.
SmartSite.
Legal pages.
```

Visual rule:

```text
Use the current Hotelify dark hospitality style, bento dashboards, compact metric cards, and glass panels.
```

Validation:

```text
[ ] /hotelify returns 200.
[ ] /hotel-saas returns 200 if still directly accessible.
[ ] Targeted lint for Hotelify files.
[ ] TypeScript check.
[ ] Visual check around pricing and new sections.
```

Recommended AI iteration size:

```text
1 implementation turn.
If content is heavy, split into 3A Technology Moat and 3B Roadmap/FAQ.
```

### Phase 4: SmartSite Product Repositioning

Goal:

Reframe the website-builder page as SmartSite, a scalable AI website and lead-conversion product for MSMEs, while preserving the current website-builder design.

Pages/components touched:

```text
src/app/website-builder/page.tsx
src/components/ui/hero-website-builder.tsx
src/components/blocks/*website-builder*
```

Structure:

```text
SMARTSITE PHASE
|
|-- Keep current hero/demo/pricing
|-- Add product framing
|-- Add AI capabilities
|-- Add MSME impact
|-- Add SmartSite roadmap
```

Work items:

```text
[ ] Shift wording from only "website service" to "SmartSite product".
[ ] Add AI capabilities section: content, SEO, local business schema, lead capture, analytics.
[ ] Add MSME impact section: trust, discoverability, conversion.
[ ] Add roadmap: template engine, no-code editor, AI content blocks, multilingual/local SEO.
[ ] Preserve current pricing layout.
```

Do not touch:

```text
Home page.
Hotelify page.
Legal pages.
```

Visual rule:

```text
Use current SmartSite/website-builder visual style and demo sections. Do not make it look like a separate brand.
```

Validation:

```text
[ ] /website-builder returns 200.
[ ] Targeted lint.
[ ] Check pricing and FAQ remain intact.
```

Recommended AI iteration size:

```text
1 implementation turn.
```

### Phase 5: New Proof Pages

Goal:

Add the three most important credibility pages: Impact, Technology, and Case Studies.

Pages/components touched:

```text
src/app/impact/page.tsx
src/app/technology/page.tsx
src/app/case-studies/page.tsx
Shared block components, if useful
Header/footer navigation later or in Phase 8
```

Structure:

```text
PROOF PAGES PHASE
|
|-- /impact
|   |-- Impact thesis
|   |-- Metrics tracked
|   |-- Responsible AI commitments
|
|-- /technology
|   |-- Architecture diagram
|   |-- Reusable modules
|   |-- Data and AI safety
|
|-- /case-studies
    |-- Pilot/prototype/customer cards
    |-- Evidence type tags
    |-- Become a pilot partner CTA
```

Recommended split:

```text
Phase 5A: /impact
Phase 5B: /technology
Phase 5C: /case-studies
```

Work items:

```text
[ ] Build each page using the existing About/Blog dark page style.
[ ] Avoid long paragraphs.
[ ] Use glass cards, metric strips, architecture panels, proof cards.
[ ] Use "prototype validation" or "pilot target" where real customer proof is not available.
[ ] Do not claim official recognition/funding unless verified.
```

Do not touch:

```text
Existing product pages, except links after Phase 8.
```

Visual rule:

```text
These pages should feel like premium Stairio pages, not static policy documents.
```

Validation:

```text
[ ] /impact returns 200.
[ ] /technology returns 200.
[ ] /case-studies returns 200.
[ ] Targeted lint for new files.
[ ] TypeScript check.
```

Recommended AI iteration size:

```text
2 to 3 implementation turns.
Do not build all three pages in one turn if context or QA gets crowded.
```

### Phase 6: Product Depth Pages

Goal:

Give visible products real pages or clearly mark them as future/prototype so the site does not look unfinished.

Pages/components touched:

```text
src/app/ai-voice-agent/page.tsx
src/app/salespro/page.tsx
src/app/kore/page.tsx
src/components/ui/products-section.tsx
Header/footer navigation in Phase 8
```

Structure:

```text
PRODUCT DEPTH PHASE
|
|-- /ai-voice-agent
|   |-- Problem, product modules, AI layer, compliance, CTA
|
|-- /salespro
|   |-- Pipeline, follow-ups, revenue visibility, AI next-best action
|
|-- /kore
    |-- Gym operations, memberships, retention, payment reminders
```

Recommended split:

```text
Phase 6A: AI Voice Agent page
Phase 6B: SalesPro page
Phase 6C: Kore page
```

Work items:

```text
[ ] Build AI Voice Agent first because it most directly supports the AI-native story.
[ ] Give SalesPro and Kore a clear status: prototype, beta, in development, or live.
[ ] Update product card CTAs only after pages exist.
[ ] Avoid making these pages too large before proof exists.
```

Do not touch:

```text
Legal pages.
Case studies unless linking only.
```

Visual rule:

```text
Reuse the product landing page pattern from Hotelify/SmartSite in a lighter, compact way.
```

Validation:

```text
[ ] New product routes return 200.
[ ] Product card links work.
[ ] Targeted lint.
```

Recommended AI iteration size:

```text
2 to 3 implementation turns.
```

### Phase 7: Trust, Legal, Help Center

Goal:

Make the site safer and more credible around AI, data ownership, pilots, support, and subscriptions.

Pages/components touched:

```text
src/app/privacy-policy/page.tsx
src/app/terms-of-service/page.tsx
src/app/refund-policy/page.tsx
src/app/help-center/page.tsx
src/app/quote/page.tsx
```

Structure:

```text
TRUST PHASE
|
|-- Privacy
|   |-- AI data handling
|   |-- customer data ownership
|   |-- deletion/export
|
|-- Terms
|   |-- AI output limits
|   |-- pilot/subscription scope
|   |-- third-party integrations
|
|-- Refund
|   |-- setup, pilot, subscription, custom development clarity
|
|-- Help Center
|   |-- product, data, implementation, partnership FAQs
|
|-- Quote
    |-- pilot/partner/investor inquiry options
```

Work items:

```text
[ ] Add AI/data terms without pretending legal certification.
[ ] Add Help Center FAQ categories.
[ ] Add quote form options for pilot partners and incubator/investor inquiries.
[ ] Keep policy pages practical and easy to read.
```

Do not touch:

```text
Homepage visual design.
Product page layouts.
```

Visual rule:

```text
Reuse existing info-page and Help Center dark/glass patterns.
```

Validation:

```text
[ ] Legal/help/quote routes return 200.
[ ] Quote form still submits.
[ ] Targeted lint.
```

Recommended AI iteration size:

```text
1 to 2 implementation turns.
```

### Phase 8: Navigation, SEO, QA, Final Polish

Goal:

Connect the new content into the site cleanly and polish the experience.

Pages/components touched:

```text
src/components/ui/header-3.tsx
src/components/ui/flickering-footer.tsx
src/app/layout.tsx
Metadata in relevant page files
Possibly sitemap/robots if present or later added
```

Structure:

```text
FINAL POLISH PHASE
|
|-- Header product links
|-- Header company links
|-- Footer links
|-- Page metadata
|-- Dead link cleanup
|-- Route smoke tests
|-- Visual QA
```

Work items:

```text
[ ] Replace `#` links with real routes or remove them.
[ ] Add Impact, Technology, Case Studies to navigation.
[ ] Add correct metadata titles/descriptions for key pages.
[ ] Make sure all public routes return 200.
[ ] Run TypeScript.
[ ] Run targeted lint for changed files.
[ ] Perform desktop/mobile visual checks.
```

Do not touch:

```text
Large page content unless QA reveals a problem.
```

Visual rule:

```text
Navigation should remain compact. Do not overload menus with every future idea.
```

Validation:

```text
[ ] All public routes return 200.
[ ] No broken primary navigation.
[ ] No obvious mobile overflow.
[ ] No TypeScript errors.
[ ] Targeted lint acceptable.
```

Recommended AI iteration size:

```text
1 implementation/QA turn.
```

### Phase Execution Checklist

Use this at the start and end of every phase:

```text
Before starting a phase
[ ] Re-read this plan section.
[ ] Check current git status.
[ ] Identify files owned by this phase.
[ ] Avoid unrelated refactors.

During the phase
[ ] Preserve current design language.
[ ] Use existing components when possible.
[ ] Do not introduce unverified claims.
[ ] Keep content concise and visual.

Before finishing the phase
[ ] Run route smoke test for touched pages.
[ ] Run targeted lint.
[ ] Run TypeScript if TS/React structure changed.
[ ] Visually inspect affected pages if possible.
[ ] Summarize changed files and any warnings.
```

### Recommended Phase Prompts For Future AI Iterations

Use prompts like these to avoid scope drift:

```text
Implement Phase 1 from Startup-India-SISFS-Website-Update-Plan.md.
Only update the homepage and required homepage components.
Preserve the existing Stairio theme, robot/3D section, dark glass cards, and overall layout.
Do not touch other pages.
```

```text
Implement Phase 3 from Startup-India-SISFS-Website-Update-Plan.md.
Only update Hotelify-related files.
Preserve current Hotelify design and pricing structure.
Add the technology moat, pilot/validation, and SISFS roadmap sections.
Use only factual claims.
```

```text
Implement Phase 5A only: create /impact.
Use the existing About/Blog dark glass design language.
Do not update navigation yet.
```

```text
Implement Phase 8 final navigation and QA.
Only connect existing completed pages into header/footer and metadata.
Do not create new page content.
```

## 25. Content Claims Rules

Use only truthful claims.

Do not write:

```text
Trusted by 500+ companies
DPIIT recognized
Funded by Startup India
Patented technology
Used by thousands
Certified secure
```

unless those claims are factually verified.

Safer alternatives:

```text
Built for growing Indian businesses
Designed for pilot deployments
In development for hospitality operators
Prototype-ready AI workflows
Built with data ownership and human oversight in mind
```

## 26. Visual Component Reuse Map

Use existing patterns:

```text
Hero sections
- Reuse current home/about/blog page header patterns.
- Keep robot/3D assets on home.

Cards
- Reuse Card + CardContent glass cards.
- Reuse rounded-3xl style where already used.
- Keep borders subtle and dark.

Product grids
- Reuse ProductsSection card style.
- Reuse Hotelify bento/dashboard visual language.

Timelines
- Reuse About timeline style for roadmap/fund-use sections.

FAQ
- Reuse Hotelify/Website Builder accordion style.

Metrics
- Use compact glass metric strips, not large marketing counters.
```

## 27. Final Target Narrative

When an incubator, DPIIT reviewer, customer, or partner visits the site, they should understand this within 60 seconds:

```text
Stairio builds AI-native products, not just websites or services.

Its first wedge is Indian hospitality and service MSMEs, where manual operations, fragmented tools, and low digital conversion create a real market problem.

The company has reusable technology modules: AI agents, workflow automation, dashboards, integrations, booking/lead/revenue systems.

The products can be prototyped, piloted, commercialized, and scaled.

The company cares about measurable impact: revenue capture, automation, MSME digitization, responsible AI, and employment/wealth creation.
```

## 28. Source Notes

Research sources used for this plan:

- Startup India official portal: DPIIT recognition, benefits, recognition flow.
- Startup India recognition page: eligibility criteria and no-fee/no-agent disclaimer.
- DPIIT / Ministry of Commerce and Industry: Guidelines for Startup India Seed Fund Scheme.
- Startup India Seed Fund Scheme public portal and portfolio data.
- PIB, 2026-04-17: Startup India recognized startups, SISFS corpus commitment, incubator/funding update.
- PIB, 2026-03-25: IndiaAI Mission compute/startup support update.
- IndiaAI Mission official/public brief: compute, datasets, startup financing, safe/trusted AI, foundation models.
- Startup India National Startup Awards pages: AI/software/deep-tech success-story structure and proof pattern.
