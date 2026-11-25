# Takayuki Yokoyama — Research

A lightweight, bilingual research portfolio for Takayuki Yokoyama. It consists of plain HTML, CSS, and JavaScript. BIZ UD fonts are loaded from Google Fonts; no build step is required.

## Publishing

This repository is intended for GitHub Pages. In Settings → Pages, choose **Deploy from a branch**, branch **main**, folder **/(root)**. The `index.html` at the repository root is the entry point.

## Editing

Profile text and section order are in `index.html`. Paired `data-en` and `data-ja` attributes contain translations. The appearance is in `style.css`; `script.js` controls the language switch and displays publications.

### Add or update a publication

Edit the `publications` array in [`publications.js`](publications.js). Copy an existing entry and change its `year`, `authors`, `title`, and `links`. Set `kind` to `preprint` or `journal`; the site groups entries automatically and shows newer years first. When a preprint is published, change its `kind` to `journal` and add the journal link to `links`. Keep its arXiv link if desired. The list has a single source of truth, so no HTML editing is needed. Publication details reflect publicly available records as of November 2026.

### Add a conference presentation

Edit the `presentations` array in [`presentations.js`](presentations.js). Add an item with `category` set to `international`, `domestic_oral`, or `domestic_poster`, and put the complete Japanese citation in `ja`. For international conferences, also provide the English citation in `en`. The English site displays international conferences only; the Japanese site displays all three groups. Keep entries in the order you want them displayed.

Education, awards, funding, teaching, and other CV entries live in `index.html` with paired `data-ja` and `data-en` text. Update both languages when changing these entries.
