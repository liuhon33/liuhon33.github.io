# GitHub Pages publication

Target: `liuhon33/liuhon33.github.io`, serving https://liuhon33.github.io/.

## Initial release

The approved single-page portfolio has been checked in a real browser. Hongrui authorized publication of this version on October 8, 2026. Its source files are served directly, without a framework build. `node scripts/prepare-publish.mjs` creates a `dist/` folder containing only the approved public files when an artifact is needed.

## October 29 update

The portfolio now presents four stacked project rows. Expand reveals an inline overview; Explore more opens a dedicated page in a new browser tab. The detail URLs are `/projects/ml-lamp/`, `/projects/saturday-matching/`, `/projects/neural-simulation/`, and `/projects/deep-learning-lab/`. The first three retain their existing narratives. Deep Learning Lab keeps its introduction above an expandable ResNet Learner entry, with two original visualizer screenshots and a launch link.

Local Chrome checks covered the four expand/collapse controls, new-tab navigation, keyboard activation, existing project anchors, the research figure viewer, mobile navigation, and layouts from 320 to 1440 pixels wide. Local links and asset paths were checked, and the existing three narratives were compared with the initial release. The revised ResNet entry and both screenshot viewers passed separate interaction and responsive checks. Hongrui reviewed the local version and explicitly authorized its publication on October 29, 2026. Pages settings were rechecked before publication: `master`, repository root, HTTPS enforced.

The private thesis PDF, complete thesis pages, private application documents, and internal source notes are not website assets. Only the selected original research figures, poster display export, supplied poster PowerPoint, updated public CV, and two ResNet visualizer screenshots are included.

## Repository state to preserve

Both the local publishing branch and remote default branch are `master`. Before the initial portfolio release, the remote root contained the original planning README, publishing document, and Git configuration files, with no existing application framework.

GitHub Pages settings were verified on October 8, 2026: branch-based publishing from `master`, folder `/`. A push to this branch triggers the existing Pages build and deployment workflow. For future updates, fetch and re-check the remote history and integrate reviewed changes without force-pushing or replacing unrelated commits.

## Publish the reviewed version

1. Prepare and review the local website and downloadable CV. Publication of the initial version was explicitly authorized by Hongrui.
2. Inspect remote changes and current Pages settings.
3. Commit the reviewed website files to the appropriate branch. Keep the application-materials repository separate.
4. Retain the configured branch-based Pages source: `master`, repository root, containing `index.html` and `.nojekyll`. For any future artifact deployment, use only the prepared `dist/` folder.
5. Verify the GitHub Pages deployment, HTTPS address, navigation, expandable projects, figure viewer, and CV/poster downloads on the public site.

Keep a record of the deployed commit so the reviewed version can be identified or restored later.
