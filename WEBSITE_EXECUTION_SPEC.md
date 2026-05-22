# Naidu Andaman Travels — Execution Spec (Wireframes + Components + Build Plan)

This spec translates `AGENCY_AGENTS_SKILL_PLAN.md` into implementation-ready output.

## 1) Wireframe Specification (Page-by-Page)

## 1.1 Home Page

## Goal
Drive users to first contact (WhatsApp/call/form) within 30–90 seconds.

## Sections (top to bottom)
1. **Top Utility Bar**
   - Phone, WhatsApp, operating hours, trust line (“Local Andaman Experts”).
2. **Header / Navigation**
   - Logo, Packages, Custom Plan, Testimonials, Blog, Contact, primary CTA “Plan My Trip”.
3. **Hero**
   - Headline: outcome-focused (“Plan Your Perfect Andaman Trip Without Stress”).
   - Subcopy: transparent inclusions, local support, response SLA.
   - CTAs: “Get Free Itinerary” + “Chat on WhatsApp”.
   - Quick form (dates, travelers, budget).
4. **Trust Strip**
   - Review score, years operating, trips planned, response time.
5. **Featured Packages**
   - 3–6 cards segmented by honeymoon/family/budget.
6. **How It Works (3 steps)**
   - Share requirements → receive plan/quote → travel with support.
7. **Why Choose Us**
   - Local operators, transparent pricing, emergency support.
8. **Social Proof**
   - Testimonials with traveler type tags and optional media.
9. **FAQ Preview**
   - 5 top objections (ferry, permits, weather, hidden fees, cancellation).
10. **Sticky Mobile CTA**
   - Call + WhatsApp + Plan form.

## 1.2 Packages Listing

## Goal
Reduce decision friction and guide users to the right package detail page.

## Sections
- Filter rail (duration, traveler type, budget band, month)
- Sort (popular, price low-high, honeymoon best)
- Package card grid:
  - title, nights/days, price band, highlights, inclusions snapshot, CTA
- Contextual nudges:
  - “Best for first-time Andaman travelers”, etc.

## 1.3 Package Detail Page

## Goal
Answer all buyer objections and convert.

## Sections
1. Hero summary (title, rating, duration, price band)
2. Day-by-day itinerary timeline
3. Inclusions/exclusions comparison block
4. Hotel options & upgrade matrix
5. Logistics details (pickup, ferry routes, support)
6. FAQs specific to package
7. Dual CTA module (WhatsApp + inquiry form)
8. Similar packages carousel

## 1.4 Custom Trip Planner

## Goal
Capture qualified leads for personalized packages.

## Steps
1. Travel dates + flexibility
2. Travelers + trip type
3. Budget range
4. Interests (beaches, adventure, scuba, family comfort)
5. Contact details + preferred contact channel

## 1.5 Testimonials Page
- Filter by traveler type
- Story cards with before/after expectations
- Optional embedded social proof snippets

## 1.6 Blog/Guides
- Category hubs (itinerary, budget, logistics, seasonal)
- Article CTA to package pages

## 1.7 Contact Page
- Fast contact panel (call/WhatsApp)
- Inquiry form
- map/service area
- response commitment and working hours

---

## 2) Component Inventory + Priorities

## P0 (Launch-blocking)
1. Global header + mobile menu
2. Sticky mobile CTA bar
3. Hero with quick inquiry form
4. Package card (standardized)
5. Filter/sort module
6. Itinerary timeline
7. Inclusion/exclusion table
8. Testimonial card + slider
9. FAQ accordion
10. Contact/inquiry form with validation
11. WhatsApp deep-link button
12. SEO meta + schema blocks

## P1 (High-value post-launch)
1. Quote estimator widget
2. Save/share package
3. Exit capture module
4. Offer banner engine

## P2 (Scale)
1. AI assistant widget
2. Multi-language switcher
3. Referral module

---

## 3) Data Model (CMS + APIs)

## Core entities
1. **Package**
   - slug, title, summary, duration, traveler_type, price_min, price_max, hero_media
2. **ItineraryDay**
   - package_id, day_number, title, details, meals, stays
3. **InclusionItem**
   - package_id, type (include/exclude), label
4. **HotelOption**
   - package_id, tier, hotel_name, room_type, surcharge
5. **Testimonial**
   - traveler_name, traveler_type, rating, quote, media, trip_month
6. **LeadInquiry**
   - source_page, package_id, dates, travelers, budget, contact_mode, phone/email, note
7. **BlogPost**
   - category, title, slug, content, primary_keyword, cta_package_ids

---

## 4) Tracking Plan (GA4/GTM)

## Core events
- `view_home`
- `view_package_list`
- `filter_packages`
- `view_package_detail`
- `click_whatsapp`
- `click_call`
- `start_inquiry`
- `submit_inquiry`
- `start_custom_planner`
- `submit_custom_planner`
- `view_testimonials`
- `view_blog_article`

## Required parameters
- `page_type`
- `package_id`
- `traveler_type`
- `budget_band`
- `traffic_source`
- `cta_location`

## Dashboard slices
- lead conversion by source
- package page conversion rate
- whatsapp vs form lead share
- drop-off in custom planner steps

---

## 5) Build Sprint Plan (4 weeks)

## Week 1
- finalize IA, wireframes, content skeleton
- define CMS schema + tracking spec

## Week 2
- build home + package listing + package detail
- implement inquiry form + WhatsApp actions

## Week 3
- build custom planner + testimonials + blog + contact
- integrate SEO schema + analytics events

## Week 4
- polish performance and accessibility
- QA/UAT, bug fixing, launch checklist

---

## 6) Acceptance Criteria

1. Mobile Lighthouse performance target >= 80 on key pages.
2. Inquiry form success tracking fires reliably.
3. WhatsApp CTA visible without scrolling on mobile.
4. Every package page has clear inclusions/exclusions and one primary CTA.
5. Basic SEO setup complete (title/meta/schema/sitemap/robots).
6. Content admin can edit packages without developer support.
