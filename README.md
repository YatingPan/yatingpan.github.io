# Yating Pan — academic homepage

A buildless, responsive single-page academic website for GitHub Pages.

- `index.html`: biography, research entries, experience, education and life section.
- `style.css`: layout, typography and responsive rules.
- `script.js`: optional active-section navigation, three independent photo carousels, and a native-dialog photo viewer. Content and image links work without JavaScript.
- `assets/papers/`: actual paper and project thumbnails. See `ASSETS.md` for provenance.
- `assets/life/`: 13 owner-supplied photographs grouped as football, travel, and studying across cultures.

The homepage presents the owner's research profile, published/accepted papers, refereed DH2026 presentations, manuscripts under review, a compact work-experience timeline, complete education and training, teaching/workshops, collaborative-project contributions, skills/languages, and a life section. Research details appear with the corresponding papers and projects. Work experience lists the two research-assistant appointments and FunPlus role, with one sentence per appointment. Academic service and awards are omitted at the owner's request. ArgumentBot is identified as an acknowledged technical contribution.

To add a paper, duplicate a `paper` article in `index.html` and update its image, title, authors, venue, summary and links. Add a new year heading when needed.

Teaching separates two invited workshops in South Korea from three Peking University teaching assistantships: Intelligent Philology (Fall 2025), LLMs and Humanities Data Processing (Fall 2026), and Database Systems (Fall 2026). Course level and department are shown with each course.

Beyond research uses one row of three independently controlled photo carousels on desktop, with a stacked layout on narrow screens. Each supports previous/next buttons, arrow keys, native touch scrolling, a counter, and a caption. Motion respects reduced-motion preferences. Clicking a photo opens the complete image in the viewer.

To add personal photos, add an optimized image to `assets/life/` and duplicate a `life-slide` block in the relevant gallery. Update the slide label, image dimensions, alt text, accessible link label, `data-label`, and `data-caption`. The viewer supports previous/next buttons, arrow keys, Escape, and backdrop dismissal.

Desktop layout uses the available page width up to 1560 px. Paragraphs and skills descriptions use justified alignment with automatic hyphenation. Languages include German (B1), Classical Chinese (reading), and Latin (currently learning).

No build step or external JavaScript/font dependencies are required. GitHub Pages serves the repository root.

The Collaborative projects section explicitly describes contributions to shared research projects. Profile keywords: Computational Linguistics; Digital Humanities; Multilingual & Multimodal NLP.
