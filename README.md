# Hongrui Liu — portfolio

A portfolio for research and data recruiters, prepared for GitHub Pages at https://liuhon33.github.io/.

The site uses plain HTML, CSS, and a small amount of JavaScript. It has no build-time dependencies, external fonts, tracking scripts, or backend. Project disclosures and links work without JavaScript; JavaScript adds mobile-menu controls, figure previews, and direct links into expanded overviews.

## Preview

From this folder:

```powershell
python -m http.server 4173 --bind 127.0.0.1
```

Open http://127.0.0.1:4173/. The server stays local to this computer.

## Files

- `index.html`: introduction, four compact project rows, experience, community, skills, education, and contact.
- `projects/<slug>/index.html`: full project pages that open in separate tabs on the same domain.
- `styles.css`: responsive layout, colour palette, accessibility, print styles, and optional experience-photo styling.
- `script.js`: navigation, project deep links, figure dialog, and print expansion.
- `assets/research/`: the approved research poster display export and original figure excerpts.
- `assets/downloads/`: the updated public CV and supplied poster PowerPoint.
- `scripts/prepare-publish.mjs`: prepares an explicit list of public files in `dist/`.
- `.nojekyll`: enables direct static-file serving for branch-based GitHub Pages publishing.

## Content maintenance

Four featured projects: ML-LAMP graduate research, Saturday Program matching, computational neuroscience coursework, and Deep Learning Lab. The lab currently features only the ResNet visualizer. Additional coursework and visual labs remain deferred. Professional and community entries are text-only and can gain photos later without a structural redesign. Add a `figure.experience-media` containing a supplied image, descriptive alt text, and an optional caption within an experience entry when a photograph is ready.

Each project follows the same two steps: its title and brief summary appear in one full-width row; expanding the native `details.project-disclosure` shows the overview card and skills; "Explore more" opens a real page under `/projects/` in a new tab. The full figures and project narrative belong on that detail page. Preserve existing project and disclosure IDs so homepage links continue to expand the right row.

To add a project, add one row and overview to `.project-list`, create its detail page using the existing shared header and stylesheet, and add that page to the explicit list in `scripts/prepare-publish.mjs`. Use `target="_blank"` and `rel="noopener"` for the Explore more link, with accessible text announcing the new tab. Keep the one-sentence row description concise enough for a single desktop line; mobile text wraps naturally.

The Deep Learning Lab keeps its introduction, motivation, and approach above a list of expandable lab entries. The first entry, ResNet Learner, contains a concise project description, two enlargeable screenshots, and the launch link to `https://liuhon33.github.io/neuro-network-visualizer/`. Add future labs as additional items in `.lab-list` using the same disclosure pattern.

The lab description is grounded in the visualizer repository's `README.md` and `docs/resnet-learning-summary.md` as read on October 29, 2026. The unmodified screenshots in `assets/deep-learning/` come from `docs/images/features-and-predictions-after-500-updates.png` and `docs/images/learning-after-500-updates.png` in `liuhon33/neuro-network-visualizer`. They show one documented run, not a new benchmark.

For a new research image, give its link a real image destination, `data-lightbox`, a concise `data-title`, a contextual `data-caption`, and an image with meaningful alt text. Include the existing figure dialog on pages that use the viewer. Links continue to work when scripting is unavailable.

Preserve original figure labels, axes, and uncertainty. The public figures are 4.6, 4.9, and 5.1 from Hongrui Liu's 2026 MSc research. The poster is a separate analysis version; do not combine its sample counts with those of the figures. The complete thesis is not a public asset.

The current poster download is the unchanged `SOBP_poster_v2.pptx` supplied on October 29, 2026. Its display image is a complete 4000 × 2265 PNG export from PowerPoint. The poster links include a version query so returning visitors load the updated assets.

## Prepare publication

```powershell
node scripts/prepare-publish.mjs
```

This copies only the explicit public-file list into `dist/`. The site can also be served directly from this repository's root. See `docs/publishing.md` for the current branch information and review steps. Preparing files does not publish them.
