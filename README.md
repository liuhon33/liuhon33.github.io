# Hongrui Liu — portfolio

A single-page portfolio for research and data recruiters, prepared for GitHub Pages at https://liuhon33.github.io/.

The site uses plain HTML, CSS, and a small amount of JavaScript. It has no build-time dependencies, external fonts, tracking scripts, or backend. Project disclosures work without JavaScript; JavaScript adds mobile-menu controls, figure previews, and direct links into expanded projects.

## Preview

From this folder:

```powershell
python -m http.server 4173 --bind 127.0.0.1
```

Open http://127.0.0.1:4173/. The server stays local to this computer.

## Files

- `index.html`: introduction, three projects, experience, community, skills, education, and contact.
- `styles.css`: responsive layout, colour palette, accessibility, print styles, and optional experience-photo styling.
- `script.js`: navigation, project deep links, figure dialog, and print expansion.
- `assets/research/`: the approved research poster display export and original figure excerpts.
- `assets/downloads/`: the updated public CV and supplied poster PowerPoint.
- `scripts/prepare-publish.mjs`: prepares an explicit list of public files in `dist/`.
- `.nojekyll`: enables direct static-file serving for branch-based GitHub Pages publishing.

## Content maintenance

Three featured projects: ML-LAMP graduate research, Saturday Program matching, and computational neuroscience coursework. CDiA is deferred from the first version. Professional and community entries are text-only and can gain photos later without a structural redesign. Add a `figure.experience-media` containing a supplied image, descriptive alt text, and an optional caption within an experience entry when a photograph is ready.

Use the native `details` and `summary` structure for project expansions. For a new research image, give its link a real image destination, `data-lightbox`, a concise `data-title`, a contextual `data-caption`, and an image with meaningful alt text. Links continue to work when scripting is unavailable.

Preserve original figure labels, axes, and uncertainty. The public figures are 4.6, 4.9, and 5.1 from Hongrui Liu's 2026 MSc research. The poster is a separate analysis version; do not combine its sample counts with those of the figures. The complete thesis is not a public asset.

## Prepare publication

```powershell
node scripts/prepare-publish.mjs
```

This copies only the explicit public-file list into `dist/`. The site can also be served directly from this repository's root. See `docs/publishing.md` for the current branch information and review steps. Preparing files does not publish them.
