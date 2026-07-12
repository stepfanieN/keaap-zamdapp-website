# KEAAP-ZAMDAPP HIV-Associated Cancer Research Consortium Website

Modern bilingual English-Swahili website for the KEAAP-ZAMDAPP HIV-Associated Cancer Research Consortium.

## About

This static website presents the consortium's research programs, project portfolio, training activities, collaborating institutions, sites, publications, and contact pathways.

## Edit Content

Most website content lives in:

`assets/js/content.js`

Use `SITE_DATA` for structured records such as programs, projects, fellows, publications, sites, news, and partner logos. Use `SITE_I18N` for English (`en`) and Kiswahili (`sw`) page copy.

## Run Locally

Open `index.html` directly in a browser, or serve the folder with a static server:

```powershell
python -m http.server 61451 --bind 127.0.0.1
```

Then open:

`http://127.0.0.1:61451/index.html`

## Publish With GitHub Pages

1. Create a public GitHub repository.
2. Upload or push this project folder to the repository.
3. In GitHub, open `Settings` -> `Pages`.
4. Set the source to the main branch and the root folder.
5. Save, then use the GitHub Pages URL shown by GitHub.

## Pages

- `index.html`
- `about.html`
- `programs.html`
- `keaap.html`
- `zamdapp.html`
- `zamdapp/amtrip/index.html`
- `amtrip.html`
- `trmtrip.html`
- `projects.html`
- `sites.html`
- `training.html`
- `publications.html`
- `data-core.html`
- `pathology.html`
- `news.html`
- `contact.html`

`research.html` is kept as a compatibility route and renders the Programs page.
