# Yating Pan — academic homepage

A buildless, responsive single-page academic website for GitHub Pages.

- `index.html`: biography, research entries, experience, education and life section.
- `style.css`: layout, typography and responsive rules.
- `script.js`: optional active-section navigation. Content works without JavaScript.
- `assets/papers/`: actual paper and project thumbnails. See `ASSETS.md` for provenance.

The homepage presents the owner's research profile, published/accepted papers, refereed DH2026 presentations, manuscripts under review, a compact work-experience timeline, complete education and training, teaching/workshops, funded-project contributions, methods/engineering/languages, and a life section. Research details appear with the corresponding papers and projects. Work experience lists the two research-assistant appointments and FunPlus role, with one sentence per appointment. Academic service and awards are omitted at the owner's request. ArgumentBot is identified as an acknowledged technical contribution.

Teaching separates two invited workshops in South Korea from three Peking University teaching assistantships: Intelligent Philology (Fall 2025), LLMs and Humanities Data Processing (Fall 2026), and Database Systems (Fall 2026). Course level and department are shown with each course.

To add a paper, duplicate a `paper` article in `index.html` and update its image, title, authors, venue, summary and links. Add a new year heading when needed.

To add personal photos, create `assets/life/` and replace each `photo-slot` block with an image as described in the HTML comment. Update the caption and alt text.

No build step or external JavaScript/font dependencies are required. GitHub Pages serves the repository root.
