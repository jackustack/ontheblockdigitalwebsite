# On The Block Digital — Project Specification

> A hyper-local, outcome-driven digital growth partner for Main Street businesses. Built on Next.js with a focus on AI search authority, performance, accessibility, and SEO.

## Brand Identity

**Name:** On The Block Digital
**Domain:** ontheblockdigital.com
**Tagline:** "Your neighbors are searching for you."
**Mission:** Help Main Street businesses get found, get chosen, and grow — so they can compete against larger companies.
**Voice:** Direct, warm, community-rooted. No jargon. No "synergy" or "leverage." Speak like a neighbor who happens to know marketing.
**Brand promise:** Outcomes, not services. We talk about what happens for the business, not what we do.

### Brand Language Rules

- Never say "SEO," "PPC," "conversion optimization," or any marketing jargon on customer-facing pages
- Instead say: "get found," "get more calls," "fill your schedule," "bring people through the door"
- Never say "we offer services" — say "here's what changes for your business"
- Always lead with the business owner's problem, not our solution
- Reference the specific city and neighborhood when possible
- Use "on the block" language naturally: "your block," "your neighbors," "down the street"

---

## Tech Stack

| Layer | Technology | Notes |
|-------|-----------|-------|
| Framework | Next.js 14+ (App Router) | Use Server Components by default |
| Language | TypeScript | Strict mode enabled |
| Styling | Tailwind CSS 3+ | Custom design system with city-based CSS variables |
| Hosting | Vercel | Edge functions for dynamic city routing |
| CMS/Data | Markdown/MDX or headless CMS | For blog/content pages |
| Forms | Server Actions or API routes | Lead capture forms |
| Analytics | Vercel Analytics + Google Analytics 4 | Privacy-respecting implementation |
| Maps/Autofill | Google Places API | For city/state autofill in funnel |
| Schema | JSON-LD | Embedded in page `<head>` via Next.js metadata API |
| Images | Next.js `<Image>` component | Always use, always set width/height/alt |

---

## Performance Standards

Every page must meet these thresholds:

| Metric | Target | Tool |
|--------|--------|------|
| Lighthouse Performance | 95+ | Chrome DevTools |
| Lighthouse SEO | 100 | Chrome DevTools |
| Lighthouse Accessibility | 100 | Chrome DevTools |
| Lighthouse Best Practices | 100 | Chrome DevTools |
| LCP (Largest Contentful Paint) | < 1.5s | Web Vitals |
| FID (First Input Delay) | < 50ms | Web Vitals |
| CLS (Cumulative Layout Shift) | < 0.05 | Web Vitals |
| TTFB (Time to First Byte) | < 200ms | Web Vitals |
| Total page weight | < 500KB | Bundle analyzer |

### Performance Rules

- Use Server Components by default. Only use `'use client'` when interactivity requires it.
- Lazy load everything below the fold with `next/dynamic` or native lazy loading.
- Use `next/image` for ALL images. No raw `<img>` tags. Always provide `width`, `height`, and descriptive `alt`.
- Use `next/font` for all fonts. No external font stylesheet requests.
- Minimize client-side JavaScript. The landing page funnel is the primary interactive element.
- Prefetch internal links with `<Link>` component.
- Use static generation (`generateStaticParams`) for all known industry/city pages.
- Use ISR (Incremental Static Regeneration) for pages that update periodically.
- Bundle analyze regularly: `npm run analyze`.

---

## Accessibility Standards (WCAG 2.1 AA Minimum)

- All interactive elements must be keyboard navigable.
- All images must have descriptive `alt` text (not "image of..." — just describe what's there).
- Color contrast ratio: minimum 4.5:1 for body text, 3:1 for large text.
- Focus indicators must be visible on all interactive elements.
- Form inputs must have associated `<label>` elements.
- ARIA attributes used correctly — prefer semantic HTML over ARIA when possible.
- Skip-to-content link on every page.
- Page structure uses proper heading hierarchy (one `h1` per page, sequential `h2`, `h3`, etc.).
- The autofill input in the funnel must be screen reader accessible with `aria-autocomplete`, `aria-expanded`, `role="combobox"`.
- Motion: respect `prefers-reduced-motion` for all animations.
- Test with axe-core or similar tool on every page before shipping.

---

## Site Architecture

```
ontheblockdigital.com/
├── /                                    # Landing page (outcome-focused funnel)
├── /restaurants/
│   └── /restaurants/oakland-ca          # Tier 1: Active industry page
├── /home-services/
│   └── /home-services/oakland-ca        # Tier 1: Active industry page
├── /dental/
│   └── /dental/oakland-ca              # Tier 2: Warm/coming-soon page
├── /legal/
│   └── /legal/oakland-ca              # Tier 2: Warm/coming-soon page
├── /retail/
│   └── /retail/oakland-ca             # Tier 2: Warm/coming-soon page
├── /industries/
│   └── /industries/[slug]/[city-state] # Tier 3: Catch-all for unknown industries
├── /results                            # Case studies and proof (cross-industry)
├── /about                              # Company story, mission, team
├── /blog/                              # Content hub for AI authority
│   ├── /blog/[slug]                    # Individual posts
│   └── /blog/category/[category]       # Category archives
├── /contact                            # Contact form, locations
├── /llms.txt                           # AI crawler guidance file
├── /robots.txt                         # Search engine crawler rules
└── /sitemap.xml                        # Auto-generated sitemap
```

### URL Rules

- Industry-first, then city: `/restaurants/oakland-ca` (not `/oakland/restaurants`)
- City slugs always include state abbreviation: `oakland-ca`, `detroit-mi`
- All lowercase, hyphens only, no underscores
- No trailing slashes
- Industry slugs match autofill entries exactly

### Page Tiers

**Tier 1 — Active Industries:** Full content, case studies, local stats, structured data, city colors. These are authority pages.

**Tier 2 — Known Industries, Not Active:** Warm landing page with lead capture. Copy acknowledges we're expanding. Still has structured data and city colors. Still builds topical authority.

**Tier 3 — Unknown Industries:** Catch-all with lead capture. Honest copy: "We're not in [industry] yet but want to hear from you." Routes through `/industries/[slug]/[city-state]`.

**Unknown City:** Generic warm page when a city isn't in our system yet. Lead capture: "Want us to come to your block?"

---

## Landing Page Funnel Specification

### Hero Section

```
Headline: "Your neighbors are searching for you right now."
Subtext: "Are they finding you — or your competition?"
CTA Button: "Want to Know More?"
```

The hero should feel grounded and urgent. No stock photos. Consider an abstract representation of a city block or storefront. Use the default brand colors (not city-specific, since the user hasn't selected a city yet).

### Funnel Flow

**Step 1: CTA Click** → Smooth scroll or modal opens

**Step 2: Industry Input**
- Prompt: "What type of business do you run?"
- Component: Combobox (text input with autofill dropdown)
- Autofill source: `/data/industries.json` — a maintained list of known industries
- Behavior:
  - As user types, matching industries appear in dropdown
  - User can select from dropdown OR type a custom entry
  - Custom entries are accepted and slugified for routing
- Accessibility: `role="combobox"`, `aria-autocomplete="list"`, `aria-expanded`, keyboard navigation

**Step 3: Location Input**
- Prompt: "Where's your business located?"
- Component: Google Places Autocomplete (restricted to US cities)
- Returns: city name + state abbreviation
- Accessibility: Same combobox pattern

**Step 4: Redirect Logic**
```
if (industry is Tier 1 AND city is active):
  redirect → /{industry}/{city-state}
else if (industry is Tier 2 AND city is active):
  redirect → /{industry}/{city-state}  (warm page)
else if (industry is unknown AND city is active):
  redirect → /industries/{industry-slug}/{city-state}  (catch-all)
else if (city is unknown):
  redirect → /industries/{industry-slug}/request  (city request page)
```

### Data File: `/data/industries.json`

```json
{
  "industries": [
    {
      "name": "Restaurant",
      "slug": "restaurants",
      "tier": 1,
      "aliases": ["café", "cafe", "diner", "eatery", "food service", "bar", "bistro", "bakery"]
    },
    {
      "name": "Home Services",
      "slug": "home-services",
      "tier": 1,
      "aliases": ["plumber", "plumbing", "electrician", "hvac", "contractor", "handyman", "roofing", "landscaping", "cleaning"]
    },
    {
      "name": "Dental",
      "slug": "dental",
      "tier": 2,
      "aliases": ["dentist", "dental practice", "orthodontist", "oral surgery"]
    },
    {
      "name": "Legal",
      "slug": "legal",
      "tier": 2,
      "aliases": ["lawyer", "law firm", "attorney", "legal services"]
    },
    {
      "name": "Retail",
      "slug": "retail",
      "tier": 2,
      "aliases": ["shop", "store", "boutique", "retail store"]
    }
  ]
}
```

### Data File: `/data/cities.json`

```json
{
  "cities": [
    {
      "name": "Oakland",
      "state": "CA",
      "slug": "oakland-ca",
      "active": true,
      "colors": {
        "primary": "#2D5F2D",
        "accent": "#C4A747",
        "bgSubtle": "#F5F2E8",
        "textOnPrimary": "#FFFFFF"
      },
      "meta": {
        "population": "433000",
        "tagline": "The Town",
        "neighborhoods": ["Temescal", "Fruitvale", "Jack London Square", "Rockridge", "Downtown", "West Oakland", "East Oakland", "Piedmont Ave", "Lake Merritt", "Chinatown"]
      }
    }
  ]
}
```

---

## City Color System

Each city gets a color palette applied via CSS custom properties. The base design system (typography, layout, spacing, components) stays consistent. Only the accent colors change.

### Implementation

In the root layout or city-specific layout:

```css
:root {
  /* Default / brand colors */
  --color-primary: #1A1A2E;
  --color-accent: #E94560;
  --color-bg: #FAFAFA;
  --color-text: #1A1A2E;
}

/* Applied dynamically per city */
[data-city="oakland-ca"] {
  --color-primary: #2D5F2D;
  --color-accent: #C4A747;
  --color-bg-subtle: #F5F2E8;
}
```

Apply `data-city` attribute to the `<body>` or page wrapper based on the route parameter.

### Color Selection Guidelines for New Cities

When adding a new city, select colors based on (in order of priority):
1. Official city flag/seal colors
2. Strong cultural associations (sports teams that represent civic identity)
3. Geographic/natural associations (desert tones, ocean blues, etc.)

**All color combinations must pass WCAG AA contrast ratios.**

Document the rationale for each city's palette in `/data/cities.json` comments or a companion file.

---

## SEO Specification

### Technical SEO

- **Sitemap:** Auto-generated via `next-sitemap` or equivalent. Include all Tier 1, Tier 2, and blog pages. Exclude Tier 3 catch-all pages until they have real content.
- **Robots.txt:** Allow all crawlers. Block `/api/` routes.
- **Canonical URLs:** Set on every page. Self-referencing canonicals.
- **Meta tags:** Every page must have unique `<title>` and `<meta name="description">`.
- **Open Graph:** Full OG tags on every page (title, description, image, type, url).
- **Twitter Cards:** Summary large image card on every page.
- **Heading hierarchy:** One `h1` per page. Sequential heading levels. Never skip levels.
- **Internal linking:** Every page links to at least 2 other relevant pages.
- **404 page:** Custom 404 with search, navigation, and lead capture.

### Title Tag Format

```
Tier 1: "{Outcome} for {Industry} in {City} | On The Block Digital"
Example: "Get More Patients for Your Dental Practice in Oakland | On The Block Digital"

Tier 2: "{Industry} Marketing in {City} — Coming Soon | On The Block Digital"

Blog: "{Post Title} | On The Block Digital Blog"

Static pages: "{Page Title} | On The Block Digital"
```

### Structured Data (JSON-LD)

Every page type gets appropriate schema:

**Homepage:**
```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "On The Block Digital",
  "url": "https://ontheblockdigital.com",
  "description": "Digital growth partner for Main Street businesses.",
  "areaServed": [
    { "@type": "City", "name": "Oakland", "addressRegion": "CA" }
  ]
}
```

**Industry/City Pages (Tier 1):**
```json
{
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "On The Block Digital — {Industry} in {City}",
  "areaServed": { "@type": "City", "name": "{City}", "addressRegion": "{State}" },
  "serviceType": "Digital Marketing for {Industry}"
}
```

Plus `FAQPage` schema with 5-8 real questions on each Tier 1 page.

**Blog Posts:**
```json
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "...",
  "author": { "@type": "Organization", "name": "On The Block Digital" },
  "datePublished": "...",
  "dateModified": "..."
}
```

### Content Strategy for AI Authority

Each Tier 1 industry/city page must directly answer these question patterns (embedded in page content, not in a separate FAQ section):

1. "How can a {industry} in {city} get more customers?"
2. "What does digital marketing cost for {industry} in {city}?"
3. "How do {industry} businesses in {city} compete with [larger competitor type]?"
4. "What should a {industry} owner in {city} do to grow their business?"
5. "Best marketing strategies for {industry} in {city}"

These questions should be answered in natural prose within the page content, AND in the FAQ schema.

### Blog Cadence

- 2-4 posts per month
- Alternate between:
  - Industry-specific posts (e.g., "5 Ways Oakland Restaurants Are Getting Found in 2026")
  - City-specific posts (e.g., "The State of Small Business in Oakland: What's Changing")
  - General outcome posts (e.g., "How to Tell If Your Business Is Invisible Online")
- Every blog post links to at least one industry/city page
- Every blog post has structured data

---

## AI Search Optimization

### llms.txt File

Maintain a `/public/llms.txt` file at the site root. This file follows the llmstxt.org specification and is formatted in Markdown. It provides AI crawlers with a structured overview of the site's most authoritative content.

The llms.txt file should be regenerated whenever new Tier 1 pages or significant blog content is added. See the companion `llms.txt` file in this project for the current version.

### AI-Readable Content Principles

1. **Direct answers first.** Every page should answer its primary question in the first paragraph. Don't bury the lead.
2. **Strong heading hierarchy.** H2 → H3 → H4. AI systems parse headings to understand content structure.
3. **Conversational language.** Match how people actually ask questions ("How do I get more customers?" not "Customer acquisition methodologies").
4. **Concrete specifics.** Name real neighborhoods, real competitor types, real numbers when possible. AI systems prefer citable specifics over generic claims.
5. **Entity consistency.** Always refer to the brand as "On The Block Digital" (not abbreviated). Always refer to cities by full name + state.
6. **Schema markup on every page.** This is the single most reliable signal for AI systems to understand page content and purpose.

### Entity Building Signals

- Google Business Profile: Maintain with Oakland as primary location, consistent NAP (Name, Address, Phone).
- Bing Places: Register and maintain.
- Local directories: Oakland Chamber of Commerce, Yelp business page, local business directories.
- Content mentions: Reference real Oakland landmarks, streets, neighborhoods naturally in content.

---

## Redirect Plan (UnifiedStack → On The Block)

When launching, implement 301 redirects from all existing unifiedstack.io pages:

```
unifiedstack.io/ → ontheblockdigital.com/
unifiedstack.io/services → ontheblockdigital.com/
unifiedstack.io/about → ontheblockdigital.com/about
unifiedstack.io/contact → ontheblockdigital.com/contact
unifiedstack.io/blog/* → ontheblockdigital.com/blog/* (match slugs where possible)
unifiedstack.io/* → ontheblockdigital.com/ (catch-all for unmapped pages)
```

Implement at the DNS/hosting level or via `next.config.js` redirects. Keep redirects active for a minimum of 12 months.

---

## File Structure (Next.js App Router)

```
src/
├── app/
│   ├── layout.tsx                      # Root layout (fonts, analytics, skip-nav)
│   ├── page.tsx                        # Landing page with funnel
│   ├── not-found.tsx                   # Custom 404
│   ├── robots.ts                       # Dynamic robots.txt
│   ├── sitemap.ts                      # Dynamic sitemap
│   ├── [industry]/
│   │   ├── page.tsx                    # Industry overview (optional)
│   │   └── [city]/
│   │       └── page.tsx                # Industry + City page (Tier 1 & 2)
│   ├── industries/
│   │   └── [slug]/
│   │       └── [city]/
│   │           └── page.tsx            # Tier 3 catch-all
│   ├── results/
│   │   └── page.tsx                    # Case studies
│   ├── about/
│   │   └── page.tsx
│   ├── blog/
│   │   ├── page.tsx                    # Blog index
│   │   └── [slug]/
│   │       └── page.tsx                # Blog post
│   └── contact/
│       └── page.tsx
├── components/
│   ├── ui/                             # Base UI components (Button, Input, etc.)
│   ├── layout/                         # Header, Footer, Navigation
│   ├── funnel/                         # Landing page funnel components
│   │   ├── IndustryCombobox.tsx        # Industry autofill input
│   │   ├── CityCombobox.tsx            # City/state autofill input
│   │   └── FunnelFlow.tsx              # Orchestrates the funnel steps
│   ├── seo/                            # JsonLd, MetaTags, OpenGraph components
│   └── city/                           # City-themed wrapper components
├── data/
│   ├── industries.json                 # Industry definitions (name, slug, tier, aliases)
│   ├── cities.json                     # City definitions (name, slug, colors, meta)
│   └── content/                        # MDX content for pages
├── lib/
│   ├── utils.ts                        # Shared utilities
│   ├── routing.ts                      # Funnel redirect logic
│   ├── schema.ts                       # JSON-LD schema generators
│   └── city-theme.ts                   # City color resolver
├── styles/
│   └── globals.css                     # Tailwind base + CSS custom properties
└── public/
    ├── llms.txt                        # AI crawler guidance
    ├── fonts/                          # Self-hosted fonts
    └── images/
        └── og/                         # OG images per page
```

---

## Design System

### Typography

Select two fonts via `next/font`:
- **Display/Heading font:** A distinctive serif or slab-serif that feels grounded and confident. Not corporate. Think neighborhood sign, not tech startup. Suggestions: Playfair Display, Lora, Libre Baskerville, or DM Serif Display.
- **Body font:** A clean, highly legible sans-serif. Suggestions: Source Sans 3, DM Sans, or Outfit.

Never use: Inter, Roboto, Arial, system fonts. These are generic and don't convey the brand's community-rooted identity.

### Spacing Scale

Use Tailwind's default scale. Generous whitespace. The site should breathe.

### Component Library

Build these reusable components:

- `<Button>` — Primary, secondary, ghost variants. All accessible, all keyboard-navigable.
- `<SectionHeading>` — Consistent heading + subtext pattern.
- `<LeadCaptureForm>` — Name, email, phone, message. Used on Tier 2, Tier 3, and contact pages.
- `<OutcomeCard>` — Displays a business outcome (icon + heading + short description).
- `<TestimonialCard>` — Client quote with name, business, city.
- `<CityBadge>` — Shows city name with city color accent.
- `<IndustryIcon>` — SVG icons for each known industry.
- `<JsonLd>` — Renders JSON-LD schema in page `<head>`.
- `<SkipToContent>` — Accessibility skip link.

### Animation

- Use CSS transitions for hover/focus states.
- Use `prefers-reduced-motion` media query to disable animations for users who prefer it.
- Subtle fade-in on scroll for content sections (CSS-only with `IntersectionObserver` if needed).
- No heavy animation libraries unless justified.

---

## Development Workflow

### Commands

```bash
npm run dev          # Local development server
npm run build        # Production build
npm run start        # Production server
npm run lint         # ESLint
npm run type-check   # TypeScript strict check
npm run analyze      # Bundle analysis
npm run lighthouse   # Run Lighthouse CI (configure separately)
```

### Pre-Commit Checklist

Before merging any page:
- [ ] Lighthouse Performance ≥ 95
- [ ] Lighthouse SEO = 100
- [ ] Lighthouse Accessibility = 100
- [ ] Lighthouse Best Practices = 100
- [ ] axe-core reports 0 violations
- [ ] All images use `next/image` with alt text
- [ ] Page has unique title and meta description
- [ ] Page has JSON-LD structured data
- [ ] Page has OG tags
- [ ] Heading hierarchy is sequential
- [ ] All links are keyboard accessible
- [ ] City colors pass WCAG AA contrast
- [ ] Page weight < 500KB

### Adding a New City

1. Add entry to `/data/cities.json` with name, slug, colors, and meta.
2. Verify all color combinations pass WCAG AA contrast.
3. Create any city-specific content in `/data/content/`.
4. Add city to `generateStaticParams` in relevant page components.
5. Update `llms.txt` if adding Tier 1 pages.
6. Update sitemap configuration.

### Adding a New Industry

1. Add entry to `/data/industries.json` with name, slug, tier, and aliases.
2. If Tier 1: Create full content page with structured data, FAQ schema, and city-specific content.
3. If Tier 2: Create warm landing page with lead capture.
4. Update autofill data.
5. Update `llms.txt`.
6. Update sitemap.

### Promoting an Industry Tier

When an industry moves from Tier 2 → Tier 1:
1. Replace warm landing page content with full authority content.
2. Add FAQ schema.
3. Add case studies / proof.
4. Add to sitemap priority.
5. Update `llms.txt`.

---

## Content Templates

### Tier 1 Page Content Structure

```
1. Hero: Outcome-focused headline specific to {industry} in {city}
   "Oakland restaurants are losing customers to chains. Here's how to fight back."

2. The Problem: 2-3 paragraphs on what {industry} businesses in {city} are struggling with.
   Reference real local challenges (Oakland: declining foot traffic, crime concerns, competition from delivery apps).

3. The Outcomes: What changes when we work together.
   - More people find you online
   - More people walk through your door
   - Your phone rings more
   - You spend less time worrying about marketing
   (No jargon. Just results.)

4. How It Works: Brief, honest explanation. 3 steps max.

5. Proof: Case study, testimonial, or data point.

6. Local Context: A paragraph that names real {city} neighborhoods, challenges, and opportunities.
   This signals to AI systems that this page has genuine local authority.

7. FAQ: 5-8 real questions with direct answers.
   Embedded in content AND in FAQPage schema.

8. CTA: Lead capture form.
```

### Tier 2 Page Content Structure

```
1. Hero: "We're bringing {outcome} to {city}'s {industry} businesses."

2. Brief value proposition: What we do for this industry (2 paragraphs max).

3. Lead capture: "Be the first {industry} on the block. Tell us about your business."

4. Local context: 1 paragraph about {city} to build topical relevance.
```

### Tier 3 Page Content Structure

```
1. Hero: "Every business on the block deserves to be found."

2. Brief: "We're not working with {industry} businesses yet, but we want to hear from you."

3. Lead capture form.
```

---

## Security & Privacy

- No third-party tracking scripts beyond GA4 (loaded conditionally with consent).
- Forms submit to API routes, not third-party endpoints.
- Google Places API key restricted to the domain.
- Environment variables for all API keys (never committed to repo).
- CSP headers configured via `next.config.js`.
- HTTPS enforced via Vercel.

---

## Evolution Rules

This project follows a "lock in and evolve only when necessary" approach:

1. **Do not change the URL structure** once launched. Industry-first, city-second is permanent.
2. **Do not change the tier system** without a strategic reason. Adding tiers = adding complexity.
3. **Do not add new features to the funnel** until the current flow has data on conversion rates.
4. **Do add new cities and industries** as customers come in — this is expected growth.
5. **Do update content** on existing pages regularly — freshness signals matter for AI and SEO.
6. **Do not redesign** the site until it has been live for at least 6 months with traffic data.
7. **Measure before changing.** Every change should be informed by data, not assumptions.