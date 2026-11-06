# Design guide — "Warm editorial"

The visual system for https://liuhon33.github.io/. Read this before changing any styling, so new pages and edits stay consistent. It applies to the homepage, the `projects/*` pages and `blog/index.html`, which all share `styles.css`. The random-state article (`blog/random-state/`) has its own stylesheet and is intentionally separate.

## Principles

1. **Minimal but warm.** One continuous cream paper, generous whitespace, thin hairlines instead of boxes.
2. **Editorial type.** A serif for display headings, a clean sans for everything you read, and a mono only for small technical marks.
3. **One accent, used with purpose.** Clay marks section eyebrows, project numbers, small highlights and hovers. Never large fills.
4. **Consistent scale.** Every font size comes from the type-scale variables below. Never hard-code a new size.
5. **Calm motion.** Quiet hovers and a single fade-in per section. Nothing bounces, loops or moves on its own.
6. **Copy is separate from design.** Style changes must not rewrite text. Wording changes are decided separately with Hongrui.

## Color tokens

Defined in `:root` at the top of `styles.css`, plus the "Warm editorial layer" block.

| Token | Value | Use |
| --- | --- | --- |
| `--paper` | `#faf9f5` | Page background (warm cream) |
| `--white` | `#ffffff` | Figure frames and the hero card only |
| `--sage` (tint) | `#f3f1ea` | Soft panels: hero caption, finding callout, poster block, tags background |
| hover tint | `#f1eee6` | Project-row hover background |
| `--sand` | `#f3efe6` | Awards panel |
| hero backdrop | `#ece6da` | Tilted "stacked page" behind the hero card |
| `--ink` | `#1f1e1b` | Headings, strong text (15.8:1 on paper) |
| `--body` | `#4a4740` | Paragraphs (8.8:1) |
| `--muted` | `#6b675e` | Dates, captions, labels (5.4:1) |
| `--line` | `#e6e2d8` | Hairlines and dividers |
| strong line | `#d6d1c4` | Link underlines, icon outlines, button borders |
| `--clay` | `#c96442` | Decorative only: status dot, callout rule, hover outlines (3.7:1, not for small text) |
| `--accent` | `#ad4f2c` | Clay for small text: eyebrows, numbers, Expand labels (5.1:1) |
| `--charcoal` | `#2b2a27` | Contact block background |
| on charcoal | `#f5f3ee` / `#c9c4b8` / `#a9a397` | Heading / paragraph / small text |
| clay light | `#e0a17f` | Accents on charcoal (eyebrow, arrows, email hover) |

Rules:
- Small text in clay must use `--accent` (`#ad4f2c`), never `--clay`, to meet WCAG AA contrast.
- No green, blue or cool greys anywhere in the shared stylesheet.
- Check any new text color for at least 4.5:1 contrast against its background.

## Typography

Fonts load from Google Fonts in the `<head>` of every shared page (keep this link identical across pages):

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=DM+Mono:wght@400;500&family=Newsreader:opsz,wght@6..72,400;6..72,500&family=Plus+Jakarta+Sans:ital,wght@0,400;0,500;0,600;0,700;1,400&display=swap" rel="stylesheet">
```

| Role | Font | Where |
| --- | --- | --- |
| Display (`--font-serif`) | Newsreader, weight 400, letter-spacing `-.015em` | h1, section h2, contact h2, project-page titles, hero caption title, blog entry titles, the "HL" monogram |
| Text (`--font-sans`) | Plus Jakarta Sans | All body text, UI, card titles (h3), project row titles (weight 600) |
| Marks (`--font-mono`) | DM Mono, weight 500 | Project numbers `01`, `01 / Research`, method step numbers, community numbers, award years, skill symbols |

### Type scale

All sizes come from these variables. Pick the closest step; do not invent new sizes.

| Variable | Desktop | ≤850px | ≤620px | Use |
| --- | --- | --- | --- | --- |
| `--fs-label` | 11px | | | Uppercase eyebrows and mini-labels (tracking `.1em`–`.12em`) |
| `--fs-tag` | 12px | | | Tags, pills, mono marks |
| `--fs-meta` | 13px | | | Dates, captions, footer, small notes |
| `--fs-ui` | 14px | | | Nav, buttons, text links, figure captions |
| `--fs-body` | 15px | | | All paragraphs |
| `--fs-lead` | 17px | | 16px | Hero intro and bio (same size), contact intro, pull quotes, award names |
| `--fs-h4` | 19px | | 18px | Subsection titles, skill titles, method steps |
| `--fs-h3` | 24px | | 22px | Card titles: project rows, jobs, community, education |
| `--fs-h2` | 40px | 34px | 32px | Section headings, project-page titles |
| `--fs-h1` | `clamp(42px, 4.8vw, 64px)` | | `clamp(36px, 10.4vw, 46px)` | Hero headline, contact heading |

Rules:
- Headings use proportional `em` letter-spacing, never pixel tracking.
- Body line-height is 1.7. Do not add per-element line-heights above 1.85.
- Responsive breakpoints change the scale variables only. Do not shrink individual elements' font sizes in media queries.
- Two paragraphs side by side or one after another (e.g. hero intro and bio) use the same size; distinguish them by color, not size.

## Layout and spacing

- Container: `min(1180px, 100% - 96px)` wide; side margins 32px at ≤1100px and 20px at ≤620px.
- Spacing sits on an 8px grid.
- Section rhythm: `--section-space` is 128px desktop, 96px at ≤850px, 64px at ≤620px.
- Sections share one paper background and are divided by a single 1px `--line` hairline. No tinted section bands.
- Section headings: eyebrow (`NN / Section name`, clay, uppercase) → serif h2 → optional short subtitle, with 48px below.
- Paragraph measure: about 60–75 characters (`max-width: 72ch` on project pages).

## Components

**Hero research card.** Keep the "stacked pages" look: a white card with a header bar ("A closer look at my research" / `01 / Research`), the figure, then a tinted caption panel; behind it a sand panel rotated 3°; a soft warm shadow. The figure note sits right-aligned beneath.

**Project list.** Borderless rows separated by hairlines (no cards). Each row: mono number in clay, title (sans 600, `--fs-h3`), one-line description, Expand/Collapse with a round ＋ icon on the right.
- Hover: the row's background turns `#f1eee6` with 10px rounded corners. The panel extends 20px past the text (12px on phones) via negative margin plus matching padding, so text does not move. The title keeps its ink color; only the ＋ outline turns clay.
- Expanded content aligns under the title (`--row-indent`: 58px desktop, 0 on phones). The duplicate number inside the expansion is hidden.
- "Explore more" opens the project page in a new tab and keeps its ↗.
- Keep all IDs (`#graduate-project`, `#graduate-details`, etc.) and `data-open-project` attributes; `script.js` relies on them.

**Project pages.** Content flows directly on the paper, not inside a card. Detail sections sit below a hairline.

**Contact block.** The single dark area of the page: warm charcoal, serif heading, clay-light accents.

**Monogram.** Plain "HL" in Newsreader 500, 21px, no circle.

**Buttons and links.** Dark button: ink background, 8px radius. Text links: 14px, 600 weight, `#d6d1c4` underline that turns clay on hover.

## Arrows and icons

- ↗ only on links that leave the site or open a new tab (CV, LinkedIn, GitHub, email, "Explore more", visualizer launch).
- In-site links (to `#sections`, `../`, other pages on this site) have no ↗.
- ↓ for in-page scroll buttons, ← for "back" links, ↑ for "back to top".

## Motion

- Hovers: color, border and background transitions of about 0.2s.
- Section fade-in: sections below the first screen start at `opacity: 0; translateY(14px)` and ease in over 0.45s once, when they enter the viewport (`IntersectionObserver` at the end of `script.js`). Sections already on screen at load are never hidden.
- Respect `prefers-reduced-motion`: no fade-in, no transitions. Print always shows everything.
- Content must stay fully visible without JavaScript (the hidden state needs the `.js` class).

## Implementation notes

- `styles.css` structure: base rules (top) → responsive media queries → print → the "Warm editorial layer" block (overrides plus its own media queries) → blog index styles. Put new design-level overrides in the warm editorial block, with its own media queries after the base ones.
- A `:root` override placed later in the file wins at every width, so any variable changed there must be re-declared inside that block's media queries too.
- Selector conflicts to watch: `.details-content p` and `.contact-section p` used to override `.mini-label` / `.eyebrow` sizes; both are guarded now (`.details-content p.mini-label`, `.contact-section p:not(.eyebrow)`).
- After editing, run `node scripts/prepare-publish.mjs` and add any new public file to its explicit list.
- Preview locally with `python -m http.server 4173 --bind 127.0.0.1` and check 1440px and 375px widths before publishing. Browsers cache `styles.css` and `script.js` aggressively; hard-refresh when checking changes.

## History

- 2026-11-06 — Gemini wording pass and first typography unification (Plus Jakarta Sans + DM Mono, one type scale).
- 2026-11-06 — "Warm editorial" redesign: cream + clay palette, Newsreader display headings, hairline sections, borderless project list, fade-in motion, "HL" monogram. Kept from the earlier design at Hongrui's request: the tilted hero card and the tinted project-row hover.
