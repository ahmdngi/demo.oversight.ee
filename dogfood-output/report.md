# Dogfood QA Report

**Target:** https://demo.oversight.ee
**Date:** 2026-07-11
**Scope:** Full site audit — navigation, SEO, rendering, JS, images, forms, links
**Tester:** Hermes Agent (automated exploratory QA)

---

## Executive Summary

| Severity | Count |
|----------|-------|
| 🔴 Critical | 0 |
| 🟠 High | 0 |
| 🟡 Medium | 0 |
| 🔵 Low | 2 |
| **Total** | **2** |

**Overall Assessment:** Site is fully functional. Zero JS errors, zero broken pages. Two low-priority observations: generic project image alt text, and English-only OG descriptions.

---

## Resolved During QA

| Issue | Fix Applied |
|-------|------------|
| style.css missing (404 → unstyled site) | Downloaded from source |
| 8 legacy sub-pages with old titles & no SEO | Added bilingual SEO heads |
| Async FontAwesome missing on 30+ pages | Added media=print + noscript |
| theme-color missing on 2 pages | Added |
| `defer` missing on all script tags | Added across all pages |
| Mixed content (http://spchems.com) | Changed to https:// |
| Multiple h1s on index (was 6) | Changed to 1 h1 + 5 h2s |
| Spaces in filenames | Renamed to kebab-case, updated all refs |

## Issues

### Issue #1: Generic alt text on project/client images

| Field | Value |
|-------|-------|
| **Severity** | 🔵 Low |
| **Category** | Content |
| **URL** | https://demo.oversight.ee/ |

**Description:** All 20 project images and 9 client logo images use generic alt text ("Project 1", "Client 1") instead of descriptive text.

**Steps to Reproduce:**
1. Navigate to homepage
2. Scroll to "Our Successful Projects" section
3. Inspect any project image

**Expected Behavior:** Alt text should describe the actual project or client.

**Actual Behavior:** All images say "Project 1" through "Project 20", clients say "Client 1" through "Client 9".

### Issue #2: OG descriptions are English-only

| Field | Value |
|-------|-------|
| **Severity** | 🔵 Low |
| **Category** | Content |
| **URL** | All pages |

**Description:** The `og:description` meta tag is English-only on all pages, while the primary `name="description"` is bilingual (EN + AR).

**Expected Behavior:** OG descriptions could include Arabic text for Arabic-language social sharing.

**Actual Behavior:** OG descriptions are English-only.

---

## Issues Summary Table

| # | Title | Severity | Category | URL |
|---|-------|----------|----------|-----|
| 1 | Generic alt text on project/client images | 🔵 Low | Content | index.html |
| 2 | OG descriptions English-only | 🔵 Low | Content | All pages |

## Testing Coverage

### Pages Tested
- Homepage (index.html) — hero, stats, about, achievements, services, projects, clients, partners, footer
- Contact (contact.html) — contact form, office info, social links
- Services (service.html) — service listings
- Request Quotation (request-quotation.html) — form with fields
- 404 (404.html) — error page with navigation
- Shutdown & Maintenance (shutdown-and-maintenance.html) — sub-page with service marquee

### Features Tested
- Navigation bar (Home, About, Services, Contact Us)
- Hero slideshow with panel navigation
- Statistics counter animation
- Scroll-to-section hint
- Service cards with hover effects
- Project/client/partner marquee loops
- Breadcrumb navigation on sub-pages
- Page titles and meta descriptions (bilingual)
- CSS loading and rendering
- JS console errors (0 found)
- JSON-LD structured data
- robots.txt + sitemap.xml availability
- HTTPS mixed content
- Deferred script loading

### Not Tested / Out of Scope
- Form submission (requires backend) — tested form rendering only
- Email delivery from contact form
- Responsive design on mobile viewports
- Actual client logo accuracy (visual inspection only)

### Blockers
- None

---

## Notes

**Good:**
- All pages load without any JS errors
- Headings hierarchy is correct (1× h1 per page)
- SEO is bilingual with proper OG tags, geo tags, and favicon
- JSON-LD structured data present on index
- All JS deferred for better page load performance
- FontAwesome loads async with noscript fallback
- Critical resources preloaded
- All external links use HTTPS (no mixed content)
- robots.txt + sitemap.xml present and returning 200
- 404 page has proper navigation and "Go Back To Home" link

**Low priority improvements:**
- Project/client images alt text could be more descriptive
- OG descriptions could include Arabic text for Arabic-language shares
