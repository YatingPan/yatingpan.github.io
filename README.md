# Yating Pan — academic homepage

A buildless, responsive single-page academic website for GitHub Pages.

- `index.html`: biography, research entries, experience, education and life section.
- `style.css`: layout, typography and responsive rules.
- `script.js`: optional active-section navigation. Content works without JavaScript.
- `assets/papers/`: actual paper and project thumbnails. See `ASSETS.md` for provenance.

Content is aligned with the owner's four-page academic CV (October 2026): four published/accepted papers, two refereed DH2026 presentations, two submitted manuscripts, seven research/industry roles, five education/training entries, four teaching/workshop roles, two additional conference presentations, four funded-project contributions, methods/engineering/languages, service and three awards. Submitted manuscripts are explicitly marked under review. ArgumentBot is identified as an acknowledged technical contribution.

To add a paper, duplicate a `paper` article in `index.html` and update its image, title, authors, venue, summary and links. Add a new year heading when needed.

To add personal photos, create `assets/life/` and replace each `photo-slot` block with an image as described in the HTML comment. Update the caption and alt text.

No build step or external JavaScript/font dependencies are required. GitHub Pages serves the repository root.
