# GitHub Pages publication

Target: `liuhon33/liuhon33.github.io`, serving https://liuhon33.github.io/.

## Prepared version

The approved single-page portfolio has been checked in a real browser. Hongrui authorized publication of this version on October 8, 2026. Its source files are served directly, without a framework build. `node scripts/prepare-publish.mjs` creates a `dist/` folder containing only the approved public files when an artifact is needed.

The private thesis PDF, complete thesis pages, private application documents, and internal source notes are not website assets. Only the selected original research figures, poster display export, supplied poster PowerPoint, and updated public CV are included.

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
