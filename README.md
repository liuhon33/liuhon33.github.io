# Hongrui Liu personal website

This is the website repository for the planned portfolio at `https://liuhon33.github.io/`. The local folder name is `personal_website`; the intended GitHub repository name is `liuhon33.github.io`, owned by `liuhon33`.

## Relationship to JobApplication

This folder and `../JobApplication/` are sibling repositories with independent Git histories:

- `JobApplication` (`liuhon33/JobApp`): CV and application records, source materials, content drafts, portfolio plan, checklist and media inventory.
- `personal_website` (`liuhon33/liuhon33.github.io`): website implementation and selected public content, once reviewed.

The existing outline retains six sections: Home; Research and technical projects; Professional experience; Education, awards and skills; Leadership and community involvement; CV and contact. The proposed site has an overview plus individual project pages. No framework has been selected and no website components are created yet.

For local editorial work, consult these paths relative to this folder:

- `../JobApplication/docs/portfolio-outline.md`
- `../JobApplication/docs/content-checklist.md`
- `../JobApplication/docs/media-manifest.md`
- `../JobApplication/content/projects/graduate-research/summary.md`

These are local companion paths, not public website URLs or runtime dependencies. Do not import the sibling directory in a website build.

## Content workflow

Complete and review activity drafts in JobApplication first. During implementation, bring over only the website paragraphs and approved media needed for publication. Leave editorial notes, source paths, checklists, letters, references, academic records and research inputs in the application workspace. Record public copies and destinations in the JobApplication media manifest; avoid multiple copies within this website repository.

The research poster is authorized for public use. Its supplied PowerPoint and original poster image currently remain in JobApplication's `media/graduate-research/posters/` folder. No assets have been copied here during Git setup.

The thesis is private and must remain outside this repository. Only original summary prose is authorized. Do not upload the thesis, extracted pages, figures or raw text, and do not create a thesis download or link. An approved CV will be selected separately.

## Git and publication status

Local Git uses branch `main` and a separate history. `origin` points to the intended GitHub repository. Configuring a remote URL does not create the GitHub repository, push files or enable Pages. Remote existence has not been verified because the initial network check could not connect.

This setup tracks repository documentation and Git configuration files only. No site, framework, dependencies, deployment workflow or Pages configuration has been added. See `docs/publishing.md` for the later connection and publication steps.
