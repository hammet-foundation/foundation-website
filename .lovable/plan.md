# Hammet Research Foundation — Landing Page Plan

A polished, single-page scrolling site built with the existing TanStack Start + Tailwind v4 stack. Institutional, grant-worthy tone with the specified brand palette and real content throughout.

## Design system

Update `src/styles.css` with the foundation palette as OKLCH tokens:
- Background: Off-white `#EBEAE2` (base canvas)
- Primary: Periwinkle `#7F80FF` (CTAs, links, primary buttons)
- Foreground/Heading dark: Deep Indigo `#4B0082` (headings, dark sections, footer)
- Accent: Cyan `#00FFFF` (used sparingly — stat numbers, highlights, hover)
- Neutral text derived from indigo at reduced chroma for body copy

Typography: load **Inter** via `<link>` in `__root.tsx` head, set `--font-sans` in `@theme`. Display headings in tighter tracking, body in relaxed leading. AA contrast verified — Periwinkle and Cyan are used only on Deep Indigo (dark) sections; on Off-white we use Deep Indigo for text.

Global background pattern: subtle Deep Indigo → Periwinkle radial gradient in the hero, faint geometric SVG grid/dots elsewhere. No stock photography.

## Route & structure

Replace `src/routes/index.tsx` placeholder with the full landing page. Update `__root.tsx` head with real title/description/OG tags:
- Title: "Hammet Research Foundation — AI Literacy for Every Nigerian Student"
- Description: mission-driven one-liner

Single-page scroll with sticky top nav (anchor links: Mission, Programs, Impact, Partners, Team, Get Involved, Contact). Smooth-scroll via CSS `scroll-behavior: smooth` + `scroll-margin-top` on sections.

## Sections (components under `src/components/foundation/`)

1. **Nav** — Sticky, translucent Off-white blur bar. Foundation wordmark left, anchor links center, "Partner With Us" Periwinkle CTA right. Mobile: hamburger sheet.

2. **Hero** — Deep Indigo → Periwinkle gradient with animated floating geometric shapes (SVG circles/polygons, gentle CSS keyframe drift). Eyebrow chip "Hammet Research Foundation", H1 "Every child deserves a future they helped build.", subheadline rewritten for inclusivity:
   > "We fund and scale access to AI literacy for Nigerian secondary school students — with a deliberate focus on the learners the digital economy is most likely to overlook: girls, students in rural and low-resource schools, learners with disabilities, and children from displaced and underserved communities."

   Two CTAs (Partner With Us → scrolls to Contact; See Our Impact → scrolls to Impact). Animated scroll cue at bottom.

3. **Mission** — "The gap we're closing" with the provided body copy (subheadline sentence about girls also broadened to the inclusive framing above). SDG badges (4, 5, 9, 10) rendered as custom SVG tiles in official SDG colors with number + short label. Fade-in on scroll.

4. **Programs** — "How we work". 4 cards (Regional AI Camps, Digital Passport Credentialing, Girls & Underserved Learners in AI Initiative, School & Ministry Partnerships) with custom Lucide icons, Off-white cards with Deep Indigo border-accent, Periwinkle icon backgrounds, Cyan hover glow. Staggered fade-in.

5. **Impact — By the Numbers** — Deep Indigo background section. Real target numbers with animated count-up on scroll into view (IntersectionObserver + requestAnimationFrame):
   - **100,000+** students to reach
   - **500+** partner schools
   - **36** states + FCT covered (all of Nigeria)
   - **60%** girls and underserved learners
   - Numbers in Cyan, labels in Off-white. Footnote: "Program targets for our current build phase — figures updated as cohorts complete."

6. **Partners** — "Who we work with". Provided intro copy. **Continuous marquee logo strip** (CSS keyframe infinite scroll, pauses on hover) with realistic partner logos rendered as clean SVG wordmarks/badges:
   - Federal Ministry of Education (Nigeria)
   - National Agency for the Prohibition of Trafficking in Persons (NAPTIP) — corrected from "NAPPs"
   - Nigerian Universities Commission
   - UNICEF Nigeria
   - UNESCO
   - Mastercard Foundation
   - African Union — Education
   - Co-Creation Hub (CcHUB)
   - Tony Elumelu Foundation
   - MTN Foundation
   Each rendered as a monochrome Deep Indigo lockup on Off-white pill (aspirational partner directory — noted in a small caption as "Aligned and prospective partners" for accuracy). "Interested in becoming a partner? Reach out." link below.

7. **Team & Governance** — "Who's behind this" with provided body. Grid of 4 leadership cards:
   - **Prince Obinna** — Executive Director
   - **Angel Nwafor** — Head of Operations & Programs
   - **Oluebube Okafor** — Head of Engineering & AI Systems (renamed from "Engineering & Tech")
   - **Ronald Ubanwa** — Head of Brand & Learning Design (renamed from "Head Designer")
   - **Head of Partnerships** — *"Recruiting — join us"* card styled as an open call with a mail CTA (no empty placeholder)

   Each card: initials monogram avatar (Periwinkle bg, Off-white letters — no fake photos), name, title, 1-line bio.

8. **Get Involved** — "Work with us". Three path cards (Funders & Grant Partners, Schools, Institutional Partners) each with icon, short copy, and a CTA button that scrolls to the contact form and pre-selects the matching inquiry type.

9. **Contact + Footer** — "Let's build this together." Contact form (name, organization, email, inquiry type dropdown, message). Form submits client-side to a `mailto:` fallback (no backend requested); we render a success state. Deep Indigo footer with:
   - Off-white foundation description
   - Registration line: **"Registered in Nigeria as an Incorporated Trustee."** (pending removed)
   - Contact email: `hello@hammetfoundation.org`
   - Social links (X, LinkedIn, Instagram) as Lucide icons
   - Closing tagline verbatim

## Animation

- Reusable `FadeIn` wrapper using IntersectionObserver → adds `animate-fade-in` class once visible; respects `prefers-reduced-motion`.
- Hero: floating shapes via CSS `@keyframes` drift/float.
- Impact: count-up numbers.
- Partners: infinite marquee.
- Cards: subtle hover lift + Cyan ring.

Nothing gimmicky — all easing, opacity, and small transforms.

## Accessibility

- Semantic `<header> <main> <section aria-labelledby> <footer>`, one `<h1>`.
- All interactive elements keyboard reachable, visible focus rings in Cyan.
- Form fields with `<label>`, required states, aria-invalid on error.
- Color contrast: Periwinkle/Cyan only used as text on Deep Indigo (both pass AA large); body text on Off-white is Deep Indigo (>12:1).
- Alt text on every SVG logo, decorative shapes marked `aria-hidden`.
- `prefers-reduced-motion` disables marquee, count-up, and floats.

## Technical

- Files added:
  - `src/components/foundation/Nav.tsx`
  - `src/components/foundation/Hero.tsx`
  - `src/components/foundation/Mission.tsx`
  - `src/components/foundation/Programs.tsx`
  - `src/components/foundation/Impact.tsx`
  - `src/components/foundation/Partners.tsx`
  - `src/components/foundation/Team.tsx`
  - `src/components/foundation/GetInvolved.tsx`
  - `src/components/foundation/Contact.tsx`
  - `src/components/foundation/Footer.tsx`
  - `src/components/foundation/FadeIn.tsx`
  - `src/components/foundation/SdgBadge.tsx`
  - `src/components/foundation/PartnerLogo.tsx` (inline SVG wordmarks)
- Files modified: `src/routes/index.tsx`, `src/routes/__root.tsx` (head + Inter link), `src/styles.css` (palette + font + keyframes for float/marquee/fade).
- No backend, no new packages required (Lucide already available, Tailwind v4 handles animations via `@utility`/keyframes in `styles.css`).

Ready to build on approval.