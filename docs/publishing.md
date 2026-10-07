# GitHub Pages publishing plan

Selected account: `liuhon33`.
Intended repository: `liuhon33/liuhon33.github.io`.
Intended origin: `https://github.com/liuhon33/liuhon33.github.io.git`.
Eventual website: `https://liuhon33.github.io/`.
Local folder: `personal_website`.

The user selected this account on October 7, 2026. The original spelling `hongrui_liu_uoft.github.io` is not the target: GitHub usernames cannot contain underscores, and a user-site repository must match its owner's username. See [GitHub username requirements](https://github.com/signup) and [GitHub Pages quickstart](https://docs.github.com/en/pages/quickstart).

## Current state

A separate local repository is initialized on `main`, with documentation and ignore/line-ending rules tracked. Its remote URL is configured for the selected account. The local folder need not be renamed to the remote repository name.

No remote repository has been created by this setup, no commits have been pushed, and Pages has not been enabled. A network check could not establish whether the remote already exists. No site is live as a result of this work.

## Connect the remote when ready

1. Check whether `liuhon33/liuhon33.github.io` already exists. If it does, inspect its history and contents before integrating this local repository. Do not overwrite an existing site or force-push.
2. If absent, create an empty repository named exactly `liuhon33.github.io` under `liuhon33`. GitHub Free supports Pages from public repositories. Do not initialize another README remotely because this local repository already has one.
3. From this folder, verify `git remote -v` and `git status`. For a confirmed empty remote, `git push -u origin main` uploads the tracked history. Review the file list first; the application repository is never part of this push.

## Build and publish after content review

Implement the reviewed portfolio in this repository. Select a framework only when needed; GitHub Pages serves static output. Keep private application sources outside the build inputs and published output.

Choose the publishing method after the implementation is known: a branch/folder for a simple static site, or a GitHub Actions build that publishes only the generated site output. Do not point Pages at JobApplication or enable deployment merely to publish this planning README.

When the site is ready, enable Pages in the GitHub repository settings, verify the deployment and HTTPS address, and check navigation, images, CV/poster links and mobile display. Missing project destinations should remain hidden or plain text. No thesis download, source path, raw text or figure may appear in the deployed files or repository history.

## Separate Git histories

Run Git in the folder you intend to change. JobApplication remains the application/drafting repository; personal_website is the website repository. They are not nested repositories, submodules or worktrees of each other. The website build must work from its own checkout without access to application records.
