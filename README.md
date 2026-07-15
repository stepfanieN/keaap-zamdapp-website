# Building the KEAAP-ZAMDAPP HIV-Associated Cancer Research Consortium Website

The KEAAP-ZAMDAPP HIV-Associated Cancer Research Consortium website was developed to create a clear, professional, and accessible online home for the consortium’s work. The goal was to bring together information that had previously been spread across reports, presentations, project documents, and institutional records and organise it into one platform that could be used by researchers, trainees, collaborators, funders, and the wider public.

We began by defining the main story the website needed to communicate. The consortium is not a single project, but a network of research programmes, training initiatives, clinical and laboratory sites, collaborating institutions, and investigators working together to address HIV-associated cancers in Zambia and Tanzania. The website therefore needed to show both the overall consortium structure and the individual contributions of KEAAP, ZAMDAPP, AMTRIP, and TRMTRIP.

Using Codex, we first developed the overall structure of the website and identified the pages required to present the consortium clearly. These included pages covering the consortium’s background, research programmes, individual projects, participating sites, training activities, publications, pathology work, the Data Management and Biostatistics Core, news, and contact information.

The website was built as a static site using HTML, CSS, and JavaScript. This approach was selected because it is lightweight, easy to maintain, inexpensive to host, and suitable for publication through GitHub Pages. It also allows the website to run without a database or specialised server infrastructure.

A major part of the work involved creating a consistent visual identity across all pages. We developed a modern layout with clear navigation, responsive page designs, research-focused imagery, programme summaries, project cards, institutional logos, and structured sections for publications, training, and research sites. The layouts were designed to work on desktop computers, tablets, and mobile phones.

Because the consortium works across Zambia and Tanzania, the website was also developed with bilingual English and Kiswahili content. Instead of creating separate websites for each language, we built a language-switching system that allows users to move between English and Kiswahili while remaining on the same page. This made the site easier to maintain and ensured that the two language versions followed the same structure.

To simplify future updates, most of the website’s content was separated from the page layouts and placed in a central JavaScript file:

`assets/js/content.js`

Within this file, structured consortium information is stored under `SITE_DATA`. This includes research programmes, projects, fellows, publications, research sites, news items, and partner logos.

The translated page text is stored under `SITE_I18N`, with separate records for English (`en`) and Kiswahili (`sw`). This structure means that future updates can be made by editing the central content file rather than changing multiple HTML pages individually.

We also created dedicated pages for the major consortium components and research platforms, including KEAAP, ZAMDAPP, AMTRIP, and TRMTRIP. Each section was designed to explain the programme’s purpose, activities, participating institutions, and contribution to HIV-associated cancer research and research capacity strengthening.

The completed website includes the following main pages:

* `index.html`
* `about.html`
* `programs.html`
* `keaap.html`
* `zamdapp.html`
* `zamdapp/amtrip/index.html`
* `amtrip.html`
* `trmtrip.html`
* `projects.html`
* `sites.html`
* `training.html`
* `publications.html`
* `data-core.html`
* `pathology.html`
* `news.html`
* `contact.html`

An additional page, `research.html`, was retained as a compatibility route and redirects users to the current Programmes page. This helps prevent broken links where the older page address may already have been shared.

Throughout the development process, the website was reviewed locally to check page navigation, bilingual content, responsiveness, image placement, links, and consistency across sections. The site can be opened directly through `index.html` or tested using a local Python web server.

For example, the project can be run locally using:

```powershell
python -m http.server 61451 --bind 127.0.0.1
```

The website can then be viewed at:

`http://127.0.0.1:61451/index.html`

The final publication approach uses GitHub Pages. This allows the consortium to host the website publicly without paying for a conventional web-hosting service. The project folder can be uploaded to a public GitHub repository, after which GitHub Pages can be enabled from the repository settings.

The completed website now provides a central platform for documenting the consortium’s research, training, partnerships, publications, and scientific contributions. It was designed not only as a public information website, but also as a living record of the consortium’s progress and a platform that can continue to grow as new projects, fellows, publications, institutions, and research findings are added.
