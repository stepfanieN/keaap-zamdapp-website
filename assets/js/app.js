(function () {
  const pageKey = document.body.dataset.page || "home";
  const storageKey = "hacc-language";
  const programPageMap = { keaap: "keaap", zamdapp: "zamdapp", amtrip: "amtrip", trmtrip: "trmtrip" };
  const projectPageMap = Object.fromEntries(SITE_DATA.projects.map((project) => [`project-${project.id}`, project.id]));
  let lang = getStoredLanguage();

  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => Array.from(root.querySelectorAll(selector));
  const esc = (value) => String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
  const slug = (value) => String(value).toLowerCase().replaceAll(/[^a-z0-9]+/g, "-").replaceAll(/^-|-$/g, "");

  function getStoredLanguage() {
    try {
      const stored = localStorage.getItem(storageKey);
      return SITE_I18N[stored] ? stored : "en";
    } catch {
      return "en";
    }
  }

  function saveLanguage(next) {
    try { localStorage.setItem(storageKey, next); } catch {}
  }

  function i18n() {
    return SITE_I18N[lang];
  }

  function label(key) {
    return i18n().labels[key] || key;
  }

  function pageCopy(key = pageKey) {
    return i18n().pages[key] || i18n().pages.home;
  }

  function topLevelPrograms() {
    return SITE_DATA.programs.filter((program) => SITE_DATA.parentProgramIds.includes(program.id));
  }

  function zamdappSubPrograms() {
    return SITE_DATA.programs.filter((program) => SITE_DATA.zamdappSubProgramIds.includes(program.id));
  }

  function setLanguage(nextLang) {
    if (!SITE_I18N[nextLang]) return;
    lang = nextLang;
    saveLanguage(nextLang);
    render();
  }

  function render() {
    document.documentElement.lang = lang === "sw" ? "sw" : "en";
    $(".skip-link").textContent = label("skip");
    document.title = titleForPage();
    renderHeader();
    renderMain();
    renderFooter();
  }

  function titleForPage() {
    const copy = i18n();
    const active = copy.nav.find((item) => item[2] === pageKey);
    if (active && pageKey !== "home") return `${active[0]} | ${copy.siteTitle}`;
    if (programPageMap[pageKey]) {
      const program = SITE_DATA.programs.find((item) => item.id === programPageMap[pageKey]);
      return `${program.name} | ${copy.siteTitle}`;
    }
    if (projectPageMap[pageKey]) {
      const project = SITE_DATA.projects.find((item) => item.id === projectPageMap[pageKey]);
      return `${project.title} | ${copy.siteTitle}`;
    }
    const page = copy.pages[pageKey];
    if (page && pageKey !== "home") return `${page.title} | ${copy.siteTitle}`;
    return copy.siteTitle;
  }

  function renderHeader() {
    const copy = i18n();
    $("#site-header").innerHTML = `
      <div class="header-inner">
        <a class="brand" href="index.html" aria-label="${esc(copy.siteTitle)}">
          <span class="brand-mark" aria-hidden="true">KZ</span>
          <span>
            <strong>${esc(copy.shortTitle)}</strong>
            <small>Zambia | Tanzania | United States</small>
          </span>
        </a>
        <button class="nav-toggle" type="button" aria-expanded="false" aria-controls="primary-nav">
          <span></span><span></span><span></span>
          <span class="sr-only">${esc(label("menu"))}</span>
        </button>
        <nav class="primary-nav" id="primary-nav" aria-label="${esc(label("primaryNav"))}">
          ${copy.nav.map(([text, href, key]) => `<a class="nav-link ${navItemActive(key) ? "is-active" : ""}" href="${esc(href)}">${esc(text)}</a>`).join("")}
        </nav>
        <div class="language-toggle" aria-label="${esc(label("language"))}">
          <button type="button" data-lang="en" aria-pressed="${lang === "en"}">EN</button>
          <button type="button" data-lang="sw" aria-pressed="${lang === "sw"}">SW</button>
        </div>
      </div>
    `;

    $(".nav-toggle").addEventListener("click", () => {
      const button = $(".nav-toggle");
      const nav = $("#primary-nav");
      const open = button.getAttribute("aria-expanded") === "true";
      button.setAttribute("aria-expanded", String(!open));
      nav.classList.toggle("is-open", !open);
    });

    $$("[data-lang]").forEach((button) => {
      button.addEventListener("click", () => setLanguage(button.dataset.lang));
    });
  }

  function navItemActive(key) {
    if (key === pageKey) return true;
    if (key === "programs" && projectPageMap[pageKey]) return true;
    return false;
  }

  function renderFooter() {
    const copy = i18n();
    const footerNotes = [copy.footer.disclaimer, copy.footer.funding].filter(Boolean);
    $("#site-footer").innerHTML = `
      <div class="footer-inner">
        <div>
          <strong>${esc(copy.siteTitle)}</strong>
          <p>${esc(copy.tagline)}</p>
          ${copy.reviewNote ? `<p class="review-note">${esc(copy.reviewNote)}</p>` : ""}
        </div>
        <div>
          <h2>${esc(copy.footer.quickLinks)}</h2>
          <ul>${copy.nav.slice(1).map(([text, href]) => `<li><a href="${esc(href)}">${esc(text)}</a></li>`).join("")}</ul>
        </div>
        <div>
          <h2>${esc(copy.footer.programs)}</h2>
          <ul>${topLevelPrograms().map((program) => `<li><a href="${esc(program.page)}">${esc(program.name)}</a></li>`).join("")}</ul>
        </div>
      </div>
      ${footerNotes.length ? `<div class="footer-disclaimer">${footerNotes.map((note) => `<p>${esc(note)}</p>`).join("")}</div>` : ""}
    `;
  }

  function renderMain() {
    const main = $("#main");
    if (pageKey === "home") main.innerHTML = renderHome();
    else if (pageKey === "about") {
      main.innerHTML = renderAbout();
      bindAboutSpotlight();
    }
    else if (pageKey === "programs") main.innerHTML = renderPrograms();
    else if (pageKey === "amtrip") main.innerHTML = renderAmtripPage();
    else if (pageKey === "trmtrip") main.innerHTML = renderTrmtripPage();
    else if (programPageMap[pageKey]) main.innerHTML = renderProgramDetail(programPageMap[pageKey]);
    else if (projectPageMap[pageKey]) main.innerHTML = renderProjectDetailPage(projectPageMap[pageKey]);
    else if (pageKey === "projects") {
      main.innerHTML = renderProjects();
      bindProjectsFilter();
    } else if (pageKey === "sites") main.innerHTML = renderSites();
    else if (pageKey === "facilities") main.innerHTML = renderFacilities();
    else if (pageKey === "training") main.innerHTML = renderTraining();
    else if (pageKey === "publications") {
      main.innerHTML = renderPublications();
      bindPublicationsFilter();
    } else if (pageKey === "data-core") main.innerHTML = renderDataCore();
    else if (pageKey === "pathology") main.innerHTML = renderPathology();
    else if (pageKey === "news") main.innerHTML = renderNews();
    else if (pageKey === "organization") main.innerHTML = renderOrganization();
    else if (pageKey === "contact") {
      main.innerHTML = renderContact();
      bindContactForm();
    } else if (pageKey === "team") main.innerHTML = renderTeam();
    else main.innerHTML = renderHome();
  }

  function reviewBanner() {
    return i18n().reviewNote ? `<aside class="review-banner" role="note">${esc(i18n().reviewNote)}</aside>` : "";
  }

  function pageHero(copy) {
    return `
      <section class="page-hero">
        <div class="section-inner narrow">
          ${reviewBanner()}
          <p class="eyebrow">${esc(copy.eyebrow)}</p>
          <h1>${esc(copy.title)}</h1>
          <p class="lead">${esc(copy.intro)}</p>
        </div>
      </section>
    `;
  }

  function sectionHeader(title, intro = "") {
    return `
      <div class="section-header">
        <h2>${esc(title)}</h2>
        ${intro ? `<p>${esc(intro)}</p>` : ""}
      </div>
    `;
  }

  function renderHome() {
    const copy = pageCopy("home");
    return `
      <section class="hero">
        <div class="hero-overlay"></div>
        <div class="hero-content">
          ${reviewBanner()}
          <p class="eyebrow">${esc(copy.eyebrow)}</p>
          <h1>${esc(copy.title)}</h1>
          <p>${esc(copy.intro)}</p>
          <div class="hero-actions">
            <a class="button button-primary" href="${esc(copy.primary[1])}">${esc(copy.primary[0])}</a>
            <a class="button button-secondary" href="${esc(copy.secondary[1])}">${esc(copy.secondary[0])}</a>
            ${copy.tertiary ? `<a class="button button-secondary" href="${esc(copy.tertiary[1])}">${esc(copy.tertiary[0])}</a>` : ""}
          </div>
        </div>
      </section>
      <section class="section section-compact">
        <div class="section-inner">
          <div class="mission-strip">
            <p class="eyebrow">${esc(label("mission"))}</p>
            <h2>${esc(copy.introTitle)}</h2>
            <p>${esc(copy.introText)}</p>
          </div>
        </div>
      </section>
      <section class="section">
        <div class="section-inner">
          ${sectionHeader(copy.pillarTitle, copy.pillarIntro)}
          <div class="pillar-grid">${SITE_DATA.homePillars.map(renderPillarCard).join("")}</div>
        </div>
      </section>
      <section class="section section-muted section-compact">
        <div class="section-inner">
          ${sectionHeader(copy.programTitle, i18n().tagline)}
          <div class="home-program-grid">${renderHomeProgramCards()}</div>
        </div>
      </section>
      <section class="section">
        <div class="section-inner">
          ${sectionHeader(copy.themeTitle)}
          ${renderThemeGrid(SITE_DATA.themes)}
        </div>
      </section>
      <section class="section section-muted section-compact">
        <div class="section-inner">
          ${sectionHeader(copy.whereTitle, copy.whereIntro)}
          <div class="country-grid">${SITE_DATA.sites.map(renderCountryCard).join("")}</div>
        </div>
      </section>
      <section class="section section-compact collaborating-sites-section">
        <div class="section-inner">
          ${sectionHeader(copy.siteTitle, copy.siteIntro)}
          <div class="collaborating-logo-grid">${SITE_DATA.collaboratingSiteLogos.map(renderCollaboratingLogoCard).join("")}</div>
        </div>
      </section>
      <section class="section">
        <div class="section-inner">
          ${sectionHeader(copy.impactTitle, copy.impactIntro)}
          <div class="impact-grid">${SITE_DATA.homeImpactStats.map(renderImpactCard).join("")}</div>
        </div>
      </section>
      <section class="section">
        <div class="section-inner feature-band">
          <div>
            <p class="eyebrow">${esc(pageCopy("training").eyebrow)}</p>
            <h2>${esc(copy.trainingTitle)}</h2>
            <p>${esc(copy.trainingText)}</p>
          </div>
          <a class="button button-primary" href="training.html">${esc(pageCopy("training").title)}</a>
        </div>
      </section>
      <section class="section section-muted section-compact">
        <div class="section-inner">
          ${sectionHeader(copy.publicationsTitle)}
          <div class="grid two">${SITE_DATA.publications.slice(0, 2).map(renderPublicationCard).join("")}</div>
          <div class="section-action"><a class="button button-primary" href="publications.html">${esc(label("viewAll"))}</a></div>
        </div>
      </section>
      <section class="section">
        <div class="section-inner">
          <div class="home-contact-cta">
            <div>
              <p class="eyebrow">${esc(pageCopy("contact").eyebrow)}</p>
              <h2>${esc(copy.contactTitle)}</h2>
              <p>${esc(copy.contactText)}</p>
            </div>
            <div class="cta-actions">
              <a class="button button-primary" href="${esc(copy.contactPrimary[1])}">${esc(copy.contactPrimary[0])}</a>
              <a class="button button-outline" href="${esc(copy.contactSecondary[1])}">${esc(copy.contactSecondary[0])}</a>
            </div>
          </div>
        </div>
      </section>
    `;
  }

  function renderPillarCard(pillar) {
    return `
      <article class="card pillar-card">
        <span class="card-accent" aria-hidden="true"></span>
        <h3>${esc(pillar.title)}</h3>
        <p>${esc(pillar.text)}</p>
      </article>
    `;
  }

  function renderCountryCard(site) {
    return `
      <article class="card country-card">
        <h3>${esc(site.country)}</h3>
        <p>${esc(site.summary)}</p>
        <div class="tag-list">${site.programs.map((item) => `<span>${esc(item)}</span>`).join("")}</div>
      </article>
    `;
  }

  function renderImpactCard(stat) {
    return `
      <article class="impact-card">
        <strong>${esc(stat.value)}</strong>
        <span>${esc(stat.label)}</span>
        <p>${esc(stat.text)}</p>
      </article>
    `;
  }

  function renderAbout() {
    const copy = pageCopy("about");
    return `
      ${renderAboutHero(copy)}
      <section class="section about-thesis-section">
        <div class="section-inner">
          <div class="about-thesis">
            <div>
              <p class="eyebrow">${esc(copy.thesisEyebrow)}</p>
              <h2>${esc(copy.thesisTitle)}</h2>
              <p>${esc(copy.thesisText)}</p>
            </div>
            <div class="about-statement-grid" aria-label="${esc(copy.valuesTitle)}">
              ${renderAboutStatement(label("mission"), copy.mission)}
              ${renderAboutStatement(label("vision"), copy.vision)}
            </div>
          </div>
        </div>
      </section>
      <section class="section section-muted about-place-section">
        <div class="section-inner about-place-layout">
          <div>
            <p class="eyebrow">${esc(copy.imagePanelTitle)}</p>
            <h2>${esc(copy.placeTitle)}</h2>
            <p>${esc(copy.placeText)}</p>
          </div>
          <div class="about-photo-mosaic">
            ${copy.images.map(renderAboutImage).join("")}
          </div>
        </div>
      </section>
      <section class="section about-values-section">
        <div class="section-inner">
          ${sectionHeader(copy.valuesTitle, copy.valuesIntro)}
          <div class="about-values-grid">
            ${copy.valueDetails.map(renderAboutValue).join("")}
          </div>
        </div>
      </section>
      <section class="section section-muted about-work-section">
        <div class="section-inner">
          ${sectionHeader(copy.workTitle, copy.workIntro)}
          <div class="about-work-list">
            ${copy.sections.map(renderAboutWorkItem).join("")}
          </div>
        </div>
      </section>
      ${renderAboutFundingSection(copy)}
    `;
  }

  function renderAboutHero(copy) {
    const spotlights = copy.spotlights || [];
    const activeSpotlight = spotlights[0] || copy.heroImage;
    return `
      <section class="page-hero about-hero">
        <div class="section-inner about-hero-layout">
          <div class="about-hero-copy">
            <p class="eyebrow">${esc(copy.eyebrow)}</p>
            <h1>${esc(copy.title)}</h1>
            <p class="lead">${esc(copy.intro)}</p>
            ${spotlights.length ? `
              <div class="about-highlight-panel">
                <p class="about-highlight-kicker">${esc(copy.spotlightPrompt || copy.countryLabel)}</p>
                <div class="about-country-row" aria-label="${esc(copy.spotlightInstruction || copy.countryLabel)}">
                  ${spotlights.map((item, index) => `
                    <button class="about-spotlight-button ${index === 0 ? "is-active" : ""}" type="button" data-about-spotlight="${index}" aria-pressed="${index === 0 ? "true" : "false"}">
                      ${esc(item.label)}
                    </button>
                  `).join("")}
                </div>
              </div>
            ` : ""}
          </div>
          <figure class="about-hero-image" data-fit="${esc(activeSpotlight.fit || "cover")}">
            <img src="${esc(activeSpotlight.src || copy.heroImage.src)}" alt="${esc(activeSpotlight.alt || copy.heroImage.alt)}" id="about-spotlight-image">
            <figcaption id="about-spotlight-caption">${esc(activeSpotlight.caption || copy.heroImage.caption)}</figcaption>
          </figure>
          ${spotlights.length ? `
            <article class="about-spotlight-story" aria-live="polite">
              <h2 id="about-spotlight-title">${esc(activeSpotlight.title || "")}</h2>
              <p id="about-spotlight-text">${esc(activeSpotlight.text || "")}</p>
            </article>
          ` : ""}
        </div>
      </section>
    `;
  }

  function bindAboutSpotlight() {
    const copy = pageCopy("about");
    const spotlights = copy.spotlights || [];
    if (!spotlights.length) return;

    const buttons = $$("[data-about-spotlight]");
    const image = $("#about-spotlight-image");
    const caption = $("#about-spotlight-caption");
    const title = $("#about-spotlight-title");
    const text = $("#about-spotlight-text");
    const figure = $(".about-hero-image");
    if (!buttons.length || !image || !caption || !title || !text || !figure) return;

    function setSpotlight(index) {
      const next = spotlights[index];
      if (!next) return;

      buttons.forEach((button, buttonIndex) => {
        const active = buttonIndex === index;
        button.classList.toggle("is-active", active);
        button.setAttribute("aria-pressed", String(active));
      });

      figure.classList.add("is-changing");
      window.setTimeout(() => {
        image.src = next.src;
        image.alt = next.alt;
        figure.dataset.fit = next.fit || "cover";
        caption.textContent = next.caption;
        title.textContent = next.title;
        text.textContent = next.text;
        figure.classList.remove("is-changing");
      }, 120);
    }

    buttons.forEach((button) => {
      button.addEventListener("click", () => setSpotlight(Number(button.dataset.aboutSpotlight)));
    });
  }

  function renderAboutStatement(title, text) {
    return `
      <article class="about-statement">
        <h3>${esc(title)}</h3>
        <p>${esc(text)}</p>
      </article>
    `;
  }

  function renderAboutImage(image, index) {
    return `
      <figure class="about-mosaic-item ${index === 0 ? "is-large" : ""}">
        <img src="${esc(image.src)}" alt="${esc(image.alt)}">
        <figcaption>${esc(image.caption)}</figcaption>
      </figure>
    `;
  }

  function renderAboutValue([title, text]) {
    return `
      <article class="about-value">
        <h3>${esc(title)}</h3>
        <p>${esc(text)}</p>
      </article>
    `;
  }

  function renderAboutWorkItem([title, text], index) {
    return `
      <article class="about-work-item">
        <span aria-hidden="true">${String(index + 1).padStart(2, "0")}</span>
        <div>
          <h3>${esc(title)}</h3>
          <p>${esc(text)}</p>
        </div>
      </article>
    `;
  }

  function renderAboutFundingSection(copy) {
    const funding = SITE_DATA.nihFunding;
    return `
      <section class="section section-compact about-funding-section" id="nih-funding">
        <div class="section-inner">
          ${sectionHeader(copy.fundingContextTitle, copy.fundingContextIntro)}
          <div class="about-funding-list">
            ${funding.programs.map(renderAboutFundingDetail).join("")}
          </div>
          <div class="associated-support about-associated-support">
            <div class="associated-support-header">
              <p class="eyebrow">${esc(funding.associatedTitle)}</p>
              <h3>${esc(funding.associatedTitle)}</h3>
            </div>
            <div class="associated-support-grid">
              ${funding.associated.map(renderAssociatedSupportCard).join("")}
            </div>
          </div>
        </div>
      </section>
    `;
  }

  function renderAboutFundingDetail(program) {
    return `
      <details class="about-funding-detail">
        <summary>
          <span>${esc(program.acronym)}</span>
          <strong>${esc(program.fullName)}</strong>
        </summary>
        <dl>
          <dt>NIH Award</dt><dd>${esc(program.award)}</dd>
          <dt>Duration</dt><dd>${esc(program.duration)}</dd>
          <dt>Institute/Center</dt><dd>${esc(program.institute)}</dd>
          <dt>Focus</dt><dd>${esc(program.focus)}</dd>
        </dl>
      </details>
    `;
  }

  function renderNihFundingSection() {
    const funding = SITE_DATA.nihFunding;
    return `
      <section class="section section-muted section-compact nih-funding-section" id="nih-funding">
        <div class="section-inner">
          ${sectionHeader(funding.title, funding.intro)}
          <div class="nih-funding-grid">
            ${funding.programs.map(renderNihFundingCard).join("")}
          </div>
          <div class="associated-support">
            <div class="associated-support-header">
              <p class="eyebrow">${esc(funding.associatedTitle)}</p>
              <h3>${esc(funding.associatedTitle)}</h3>
            </div>
            <div class="associated-support-grid">
              ${funding.associated.map(renderAssociatedSupportCard).join("")}
            </div>
          </div>
        </div>
      </section>
    `;
  }

  function renderNihFundingCard(program) {
    return `
      <article class="card nih-funding-card">
        <p class="tag">${esc(program.acronym)}</p>
        <h3>${esc(program.fullName)}</h3>
        <dl>
          <dt>NIH Award</dt><dd>${esc(program.award)}</dd>
          <dt>Duration</dt><dd>${esc(program.duration)}</dd>
          <dt>Institute/Center</dt><dd>${esc(program.institute)}</dd>
          <dt>Focus</dt><dd>${esc(program.focus)}</dd>
        </dl>
      </article>
    `;
  }

  function renderAssociatedSupportCard(program) {
    return `
      <article class="associated-support-card">
        <h4>${esc(program.acronym)}</h4>
        <p>${esc(program.fullName)}</p>
        <dl>
          <dt>NIH Award</dt><dd>${esc(program.award)}</dd>
          ${program.institute ? `<dt>Institute/Center</dt><dd>${esc(program.institute)}</dd>` : ""}
          <dt>Note</dt><dd>${esc(program.note)}</dd>
        </dl>
      </article>
    `;
  }

  function renderPrograms() {
    const copy = pageCopy("programs");
    return `
      ${pageHero(copy)}
      <section class="section">
        <div class="section-inner">
          <div class="program-stack">${topLevelPrograms().map(renderProgramPanel).join("")}</div>
        </div>
      </section>
      <section class="section section-muted">
        <div class="section-inner">
          ${sectionHeader(label("crossCutting"))}
          <div class="grid three">
            ${renderInfoCard("Data Management and Biostatistics Core", pageCopy("data-core").intro, "data-core.html")}
            ${renderInfoCard("Pathology / POT", pageCopy("pathology").intro, "pathology.html")}
            ${renderInfoCard(pageCopy("facilities").title, pageCopy("facilities").intro, "facilities.html")}
            ${renderInfoCard(pageCopy("pathology").biobankTitle, pageCopy("pathology").biobankText, "pathology.html#biobank")}
          </div>
        </div>
      </section>
      <section class="section">
        <div class="section-inner">
          ${sectionHeader("Project sub-pages")}
          <div class="grid three">${SITE_DATA.projects.map(renderProjectCard).join("")}</div>
        </div>
      </section>
    `;
  }

  function renderProgramDetail(id) {
    const program = SITE_DATA.programs.find((item) => item.id === id);
    const projects = SITE_DATA.projects.filter((project) => program.projectIds.includes(project.id));
    const subPrograms = id === "zamdapp" ? zamdappSubPrograms() : [];
    return `
      ${pageHero({ eyebrow: program.name, title: program.fullName, intro: program.description })}
      <section class="section">
        <div class="section-inner detail-layout">
          <aside class="detail-aside">
            <h2>${esc(program.name)}</h2>
            <dl>
              <dt>${esc(label("type"))}</dt><dd>${esc(program.type)}</dd>
              <dt>${esc(label("country"))}</dt><dd>${esc(program.countries.join(", "))}</dd>
              <dt>${esc(label("theme"))}</dt><dd>${esc(program.themes.join(", "))}</dd>
            </dl>
          </aside>
          <div>
            ${sectionHeader(label("programFocus"))}
            ${renderThemeGrid(program.focus)}
            ${subPrograms.length ? renderSubProgramLinks(subPrograms) : ""}
          </div>
        </div>
      </section>
      ${id === "zamdapp" ? renderZamdappInformationSection() : ""}
      ${id === "trmtrip" ? renderTanzaniaImageGallery() : ""}
      <section class="section section-muted">
        <div class="section-inner">
          ${sectionHeader(label("relatedProjects"))}
          <div class="grid three">${projects.map(renderProjectCard).join("")}</div>
        </div>
      </section>
    `;
  }

  function renderAmtripPage() {
    const program = SITE_DATA.programs.find((item) => item.id === "amtrip");
    const page = SITE_DATA.amtripPage;
    const projects = SITE_DATA.projects.filter((project) => program.projectIds.includes(project.id));
    return `
      ${pageHero({ eyebrow: "ZAMDAPP sub-program", title: program.name, intro: page.intro })}
      <section class="breadcrumb-band">
        <div class="section-inner">
          <nav class="breadcrumb" aria-label="Breadcrumb">
            <a href="index.html">Home</a>
            <span aria-hidden="true">/</span>
            <a href="zamdapp.html">ZAMDAPP</a>
            <span aria-hidden="true">/</span>
            <span>${esc(program.name)}</span>
          </nav>
        </div>
      </section>
      <section class="section">
        <div class="section-inner split-intro">
          <div>
            <p class="eyebrow">Background and Rationale</p>
            <h2>${esc(program.fullName)}</h2>
            <p>${esc(page.background)}</p>
          </div>
          <div class="feature-band compact-feature">
            <div>
              <p class="eyebrow">Program Goal</p>
              <h2>Training and research capacity</h2>
              <p>${esc(page.goal)}</p>
            </div>
          </div>
        </div>
      </section>
      <section class="section section-muted">
        <div class="section-inner">
          ${sectionHeader("Training Focus Areas")}
          ${renderThemeGrid(page.focusAreas)}
        </div>
      </section>
      <section class="section">
        <div class="section-inner">
          ${sectionHeader("Training Plan", "AMTRIP combines degree pathways, focused technical training, and short-course learning for Zambia-based cancer research capacity building.")}
          <div class="grid four">${page.trainingPlan.map((item) => renderInfoCard(item.title, item.text)).join("")}</div>
        </div>
      </section>
      <section class="section">
        <div class="section-inner">
          ${sectionHeader("Training Pathways")}
          <div class="grid three">${page.pathways.map((item) => renderInfoCard(item.title, item.text)).join("")}</div>
        </div>
      </section>
      ${renderImageGallery(page.facilities, "Zambia Facilities and Training Sites", page.facilitiesIntro, "section-muted amtrip-facilities-section")}
      <section class="section">
        <div class="section-inner">
          ${sectionHeader("Recent Training Activities", "Recent training activities include research methods, ethics and regulatory preparation, scientific communication, pathology education, and implementation science.")}
          <div class="grid three">${page.recentTraining.map((item) => renderInfoCard(item.title, item.text)).join("")}</div>
        </div>
      </section>
      <section class="section section-muted">
        <div class="section-inner">
          ${sectionHeader("Partners and Collaborations", "AMTRIP is presented as a collaborative training initiative within the ZAMDAPP ecosystem.")}
          ${renderThemeGrid(page.partners)}
        </div>
      </section>
      <section class="section">
        <div class="section-inner">
          <div class="feature-band">
            <div>
              <p class="eyebrow">Regional Impact</p>
              <h2>Strengthening Zambia-led cancer research</h2>
              <p>${esc(page.impact)}</p>
            </div>
            <a class="button button-primary" href="training.html">${esc(pageCopy("training").title)}</a>
          </div>
        </div>
      </section>
      <section class="section section-muted">
        <div class="section-inner">
          ${sectionHeader("Capacity and Sustainability", "AMTRIP supports collaborative research capacity, workforce development, and sustainable research infrastructure in Zambia.")}
          <div class="grid three">${page.outcomes.map((item) => renderInfoCard(item.title, item.text)).join("")}</div>
        </div>
      </section>
      <section class="section">
        <div class="section-inner">
          ${sectionHeader("Publications and Outputs", page.publications)}
          <div class="grid three">${projects.map(renderProjectCard).join("")}</div>
          <div class="section-action"><a class="button button-primary" href="publications.html">${esc(pageCopy("publications").title)}</a></div>
        </div>
      </section>
    `;
  }

  function renderTrmtripPage() {
    const program = SITE_DATA.programs.find((item) => item.id === "trmtrip");
    const page = SITE_DATA.tamtrpPage;
    const projects = SITE_DATA.projects.filter((project) => program.projectIds.includes(project.id));
    return `
      ${pageHero({ eyebrow: "ZAMDAPP sub-program", title: program.name, intro: page.intro })}
      <section class="breadcrumb-band">
        <div class="section-inner">
          <nav class="breadcrumb" aria-label="Breadcrumb">
            <a href="index.html">Home</a>
            <span aria-hidden="true">/</span>
            <a href="zamdapp.html">ZAMDAPP</a>
            <span aria-hidden="true">/</span>
            <span>${esc(program.name)}</span>
          </nav>
        </div>
      </section>
      <section class="section">
        <div class="section-inner split-intro">
          <div>
            <p class="eyebrow">Background and Rationale</p>
            <h2>${esc(program.fullName)}</h2>
            <p>${esc(page.background)}</p>
          </div>
          <div class="feature-band compact-feature">
            <div>
              <p class="eyebrow">Program Objective</p>
              <h2>Training and research capacity in Tanzania</h2>
              <p>${esc(page.goal)}</p>
            </div>
          </div>
        </div>
      </section>
      <section class="section section-muted">
        <div class="section-inner">
          ${sectionHeader("Short-Term Goals", "TAMTRP focuses on strengthening ORCI research infrastructure and mentored Tanzania-led cancer research training.")}
          <div class="grid two">${page.shortTermGoals.map((item) => renderInfoCard(item.title, item.text)).join("")}</div>
        </div>
      </section>
      <section class="section">
        <div class="section-inner">
          ${sectionHeader("Specific Aims")}
          <div class="grid three">${page.aims.map((item) => renderInfoCard(item.title, item.text)).join("")}</div>
        </div>
      </section>
      <section class="section section-muted">
        <div class="section-inner">
          ${sectionHeader("Training Plan", "The program combines long-term degree training, medium-term technical training, and short-course workshops for Tanzanian trainees and collaborating teams.")}
          <div class="grid four">${page.trainingPlan.map((item) => renderInfoCard(item.title, item.text)).join("")}</div>
        </div>
      </section>
      <section class="section">
        <div class="section-inner">
          ${sectionHeader("Training Tracks", "Training areas span clinical research, public health, laboratory science, cancer genomics, data systems, and translational research.")}
          <div class="grid four">${page.trainingTracks.map((item) => renderInfoCard(item.title, item.text)).join("")}</div>
        </div>
      </section>
      <section class="section section-muted">
        <div class="section-inner">
          ${renderProgramImageFeature(page.teamImage, "TAMTRP Training Community", "The Tanzania training program brings together ORCI teams, trainees, mentors, and collaborating partners to strengthen cancer research capacity.")}
        </div>
      </section>
      <section class="section">
        <div class="section-inner">
          ${sectionHeader("Progress Highlights", "Selected progress highlights from the Tanzania training program include degree training, medium-term placements, workshop activity, and responsible conduct of research training.")}
          <div class="grid four">${page.progress.map((item) => renderInfoCard(item.title, item.text)).join("")}</div>
        </div>
      </section>
      ${renderTanzaniaImageGallery("ORCI Tanzania Campus", "Ocean Road Cancer Institute anchors Tanzania-based oncology, pathology, training, and translational research collaboration within the consortium.", "section-muted tanzania-gallery-section")}
      <section class="section">
        <div class="section-inner">
          ${sectionHeader("Partners and Collaborations", "TAMTRP is presented as a collaborative training initiative within the ZAMDAPP ecosystem.")}
          ${renderThemeGrid(page.partners)}
        </div>
      </section>
      <section class="section section-muted">
        <div class="section-inner">
          <div class="feature-band">
            <div>
              <p class="eyebrow">Program Impact</p>
              <h2>Preparing for genomics-informed cancer research</h2>
              <p>${esc(page.impact)}</p>
            </div>
            <a class="button button-primary" href="training.html">${esc(pageCopy("training").title)}</a>
          </div>
        </div>
      </section>
      <section class="section">
        <div class="section-inner">
          ${sectionHeader("Capacity and Sustainability", "TAMTRP supports trainee-led research capacity, institutional collaboration, and research infrastructure in Tanzania.")}
          <div class="grid three">${page.sustainability.map((item) => renderInfoCard(item.title, item.text)).join("")}</div>
        </div>
      </section>
      <section class="section section-muted">
        <div class="section-inner">
          ${sectionHeader("Publications and Outputs", page.publications)}
          <div class="grid three">${projects.map(renderProjectCard).join("")}</div>
          <div class="section-action"><a class="button button-primary" href="publications.html">${esc(pageCopy("publications").title)}</a></div>
        </div>
      </section>
    `;
  }

  function renderProjects() {
    const copy = pageCopy("projects");
    return `
      ${pageHero(copy)}
      <section class="section project-portfolio-section">
        <div class="section-inner">
          ${renderFilterBar("projects")}
          <div class="project-groups result-grid" id="project-results">${renderProjectGroups()}</div>
          <p class="empty-state" id="project-empty" hidden>${esc(label("noResults"))}</p>
        </div>
      </section>
    `;
  }

  function renderProjectDetailPage(id) {
    const project = SITE_DATA.projects.find((item) => item.id === id);
    if (!project) return renderProjects();
    const program = SITE_DATA.programs.find((item) => item.name === project.program || item.id === project.program.toLowerCase());
    const related = SITE_DATA.projects.filter((item) => item.id !== project.id && (item.program === project.program || item.theme === project.theme)).slice(0, 3);
    return `
      ${pageHero({ eyebrow: project.program, title: project.title, intro: project.description })}
      <section class="breadcrumb-band">
        <div class="section-inner">
          <nav class="breadcrumb" aria-label="Breadcrumb">
            <a href="index.html">Home</a>
            <span aria-hidden="true">/</span>
            <a href="programs.html">Programs</a>
            <span aria-hidden="true">/</span>
            <a href="projects.html">Projects</a>
            <span aria-hidden="true">/</span>
            <span>${esc(project.title)}</span>
          </nav>
        </div>
      </section>
      <section class="section">
        <div class="section-inner detail-layout">
          <aside class="detail-aside">
            <h2>Project Details</h2>
            <dl>
              <dt>${esc(label("program"))}</dt><dd>${esc(project.program)}</dd>
              <dt>${esc(label("country"))}</dt><dd>${esc(project.countries.join(", "))}</dd>
              <dt>${esc(label("theme"))}</dt><dd>${esc(project.theme)}</dd>
              <dt>${esc(label("projectStatus"))}</dt><dd>${esc(project.status)}</dd>
              <dt>${esc(label("leads"))}</dt><dd>${esc(project.leads)}</dd>
            </dl>
          </aside>
          <div class="project-detail-main">
            ${sectionHeader("Public Project Summary")}
            <p>${esc(project.description)}</p>
            ${project.detail ? `<p>${esc(project.detail)}</p>` : ""}
            <div class="project-detail-actions">
              <a class="button button-primary" href="publications.html">${esc(label("relatedOutputs"))}</a>
              <a class="button button-secondary" href="projects.html#${esc(project.id)}">Back to Project Portfolio</a>
            </div>
          </div>
        </div>
      </section>
      ${related.length ? `
        <section class="section section-muted">
          <div class="section-inner">
            ${sectionHeader("Related Project Sub-pages")}
            <div class="grid three">${related.map(renderProjectCard).join("")}</div>
          </div>
        </section>
      ` : ""}
    `;
  }

  function renderFacilities() {
    const copy = pageCopy("facilities");
    return `
      ${pageHero(copy)}
      <section class="section">
        <div class="section-inner">
          ${sectionHeader(copy.typesTitle)}
          <div class="grid three">${SITE_DATA.labFacilities.map(renderFacilityCard).join("")}</div>
        </div>
      </section>
      <section class="section section-muted">
        <div class="section-inner">
          ${sectionHeader(copy.servicesTitle)}
          <div class="grid three">${SITE_DATA.facilityServices.map(renderFacilityServiceCard).join("")}</div>
        </div>
      </section>
    `;
  }

  function renderFacilityCard(facility) {
    return `
      <article class="card facility-card" data-fit="${esc(facility.fit || "cover")}">
        <img src="${esc(facility.image || "assets/img/site-placeholder.svg")}" alt="${esc(facility.alt || facility.name)}">
        <div>
          <p class="tag">${esc(facility.location)}</p>
          <h3>${esc(facility.name)}</h3>
          <p>${esc(facility.description)}</p>
          <dl>
            <dt>Equipment</dt><dd>${renderFacilityList(facility.equipment)}</dd>
            <dt>Services</dt><dd>${renderFacilityList(facility.services)}</dd>
          </dl>
        </div>
      </article>
    `;
  }

  function renderFacilityList(items) {
    return `<ul class="facility-list">${items.map((item) => `<li>${esc(item)}</li>`).join("")}</ul>`;
  }

  function renderFacilityServiceCard(service) {
    return `
      <article class="card">
        <p class="tag">${esc(service.type)}</p>
        <h3>${esc(service.title)}</h3>
        <p>${esc(service.description)}</p>
      </article>
    `;
  }

  function renderSites() {
    const copy = pageCopy("home");
    return `
      ${pageHero(pageCopy("sites"))}
      <section class="section collaborating-sites-section">
        <div class="section-inner">
          ${sectionHeader(copy.siteTitle, copy.siteIntro)}
          <div class="collaborating-logo-grid">${SITE_DATA.collaboratingSiteLogos.map(renderCollaboratingLogoCard).join("")}</div>
        </div>
      </section>
      <section class="section map-section">
        <div class="section-inner">
          <div class="map-graphic" aria-hidden="true">
            <span>Zambia</span><span>Tanzania</span><span>USA</span>
          </div>
          <div class="grid three">${SITE_DATA.sites.map(renderSiteCard).join("")}</div>
        </div>
      </section>
      ${renderZambiaImageGallery("Zambia Research and Training Sites", "University Teaching Hospitals and Kaposi sarcoma research and training spaces support Zambia-based clinical, laboratory, pathology, and training activities.")}
      ${renderTanzaniaImageGallery("ORCI Tanzania Campus", "Ocean Road Cancer Institute anchors Tanzania-based oncology, pathology, training, and translational research collaboration within the consortium.", "tanzania-gallery-section")}
    `;
  }

  function renderTraining() {
    const copy = pageCopy("training");
    return `
      ${pageHero(copy)}
      <section class="section">
        <div class="section-inner">
          ${sectionHeader("Training community")}
          <div class="grid three">
            ${renderInfoCard("Fellows and trainees", "Training activities support emerging investigators and technical teams working in HIV-associated cancer research, pathology, diagnostics, epidemiology, and data systems.")}
            ${renderInfoCard("Mentorship and workshops", "Mentorship, short courses, and workshops support scientific writing, research methods, ethics, biostatistics, bioinformatics, pathology, and laboratory methods.")}
            ${renderInfoCard("Research outputs", "Trainee-associated publications and scholarly outputs are maintained in the consortium publication database.", "publications.html")}
          </div>
        </div>
      </section>
      <section class="section section-muted">
        <div class="section-inner">
          ${sectionHeader(label("trainingAreas"))}
          ${renderThemeGrid(SITE_DATA.trainingAreas)}
        </div>
      </section>
      <section class="section">
        <div class="section-inner">
          ${sectionHeader(label("fellowsGallery"))}
          <div class="grid two">${SITE_DATA.fellows.map(renderFellowCard).join("")}</div>
        </div>
      </section>
      <section class="section">
        <div class="section-inner">
          <div class="grid two">
            ${renderInfoCard(label("studentProjects"), "Student-led projects are organized through ZAMDAPP and its regional training initiatives, including AMTRIP Zambia and TRMTRIP/TAMTRP Tanzania.", "projects.html")}
            ${renderInfoCard(label("mentorshipModel"), "The training model emphasizes mentorship, hands-on research participation, scientific writing, data quality, laboratory and pathology skills, and locally relevant cancer research questions.")}
          </div>
        </div>
      </section>
    `;
  }

  function renderPublications() {
    return `
      ${pageHero(pageCopy("publications"))}
      <section class="section">
        <div class="section-inner">
          ${renderFilterBar("publications")}
          <div class="grid two result-grid" id="publication-results">${SITE_DATA.publications.map(renderPublicationCard).join("")}</div>
          <p class="empty-state" id="publication-empty" hidden>${esc(label("noResults"))}</p>
        </div>
      </section>
    `;
  }

  function renderZamdappInformationSection() {
    return `
      <section class="section section-muted" id="zamdapp-information">
        <div class="section-inner">
          ${sectionHeader(label("zamdappInformation"), label("zamdappInformationIntro"))}
          <div class="grid three">
            ${SITE_DATA.zamdappCategories.map((category) => renderInfoCard(category.title, category.shortDescription, "publications.html")).join("")}
          </div>
        </div>
      </section>
    `;
  }

  function renderZambiaImageGallery(title = "Zambia Research Site", intro = "University Teaching Hospitals, Cancer Diseases Hospital, and University of Zambia partners support Zambia-based consortium research, training, pathology, diagnostics, and data-focused activities.", className = "section-muted zambia-gallery-section") {
    return renderImageGallery(SITE_DATA.zambiaImages, title, intro, className);
  }

  function renderTanzaniaImageGallery(title = "Tanzania Research Site", intro = "Ocean Road Cancer Institute provides an institutional home for Tanzania-based consortium research, training, oncology, pathology, and translational research activities.", className = "section-muted tanzania-gallery-section") {
    return renderImageGallery(SITE_DATA.tanzaniaImages, title, intro, className);
  }

  function renderImageGallery(images, title, intro, className = "section-muted") {
    return `
      <section class="section ${esc(className)}">
        <div class="section-inner">
          ${sectionHeader(title, intro)}
          <div class="site-image-gallery">
            ${images.map(renderSiteImageCard).join("")}
          </div>
        </div>
      </section>
    `;
  }

  function renderSiteImageCard(image) {
    return `
      <figure class="site-image-card">
        <img src="${esc(image.src)}" alt="${esc(image.alt)}">
        <figcaption>${esc(image.caption)}</figcaption>
      </figure>
    `;
  }

  function renderProgramImageFeature(image, title, text) {
    return `
      <div class="program-image-feature">
        <figure class="site-image-card program-feature-figure">
          <img src="${esc(image.src)}" alt="${esc(image.alt)}">
          <figcaption>${esc(image.caption)}</figcaption>
        </figure>
        <div>
          <p class="eyebrow">Program Community</p>
          <h2>${esc(title)}</h2>
          <p>${esc(text)}</p>
        </div>
      </div>
    `;
  }

  function renderDataCore() {
    const copy = pageCopy("data-core");
    return `
      ${pageHero(copy)}
      <section class="section">
        <div class="section-inner">
          ${sectionHeader(label("coreFunctions"), copy.note)}
          ${renderThemeGrid(SITE_DATA.dataCoreFunctions)}
        </div>
      </section>
      <section class="section section-muted">
        <div class="section-inner">
          ${sectionHeader(label("relatedProjects"))}
          <div class="grid three">${SITE_DATA.projects.filter((project) => project.theme === "Data").map(renderProjectCard).join("")}</div>
        </div>
      </section>
    `;
  }

  function renderPathology() {
    const copy = pageCopy("pathology");
    return `
      ${pageHero(copy)}
      <section class="section">
        <div class="section-inner">
          ${sectionHeader(label("subsections"))}
          ${renderThemeGrid(SITE_DATA.pathologySections)}
        </div>
      </section>
      <section class="section section-muted" id="biobank">
        <div class="section-inner">
          <div class="feature-band">
            <div>
              <p class="eyebrow">${esc(label("biobankResearch"))}</p>
              <h2>${esc(copy.biobankTitle)}</h2>
              <p>${esc(copy.biobankText)}</p>
            </div>
            <a class="button button-primary" href="projects.html">${esc(pageCopy("projects").title)}</a>
          </div>
        </div>
      </section>
      <section class="section">
        <div class="section-inner">
          ${sectionHeader(label("relatedProjects"))}
          <div class="grid three">${SITE_DATA.projects.filter((project) => ["Pathology", "OSSN", "Biobank"].includes(project.theme)).map(renderProjectCard).join("")}</div>
        </div>
      </section>
    `;
  }

  function renderNews() {
    const copy = pageCopy("news");
    return `
      ${pageHero(copy)}
      <section class="section">
        <div class="section-inner">
          <div class="grid three">${SITE_DATA.news.map(renderNewsCard).join("")}</div>
        </div>
      </section>
    `;
  }

  function renderContact() {
    const copy = pageCopy("contact");
    return `
      ${pageHero(copy)}
      <section class="section">
        <div class="section-inner contact-layout">
          <div>
            <h2>${esc(copy.formTitle)}</h2>
            <form class="contact-form">
              ${formField("name", label("name"), "text")}
              ${formField("email", label("email"), "email")}
              ${formField("institution", label("institution"), "text")}
              ${formField("interest", label("interest"), "text")}
              <label for="message">${esc(label("message"))}</label>
              <textarea id="message" name="message" rows="5"></textarea>
              <label class="checkbox-row"><input type="checkbox" required> <span>${esc(copy.consent)}</span></label>
              <button class="button button-primary" type="submit">${esc(label("submitInquiry"))}</button>
              <p class="form-status" aria-live="polite"></p>
          </form>
        </div>
        <aside class="contact-aside">
          <h2>${esc(label("publicContact"))}</h2>
          <p>${esc(label("publicContactText"))}</p>
        </aside>
      </div>
      </section>
    `;
  }

  function renderOrganization() {
    const copy = pageCopy("organization");
    const chart = SITE_DATA.organizationChart;
    return `
      ${pageHero(copy)}
      <section class="section organization-chart-section">
        <div class="section-inner">
          <figure class="organization-chart-figure">
            <img src="${esc(chart.image)}" alt="${esc(chart.alt)}">
          </figure>
        </div>
      </section>
      <section class="section section-muted organization-directory-section">
        <div class="section-inner">
          ${sectionHeader(copy.directoryTitle, copy.directoryIntro)}
          <div class="organization-grid">
            ${chart.sections.map(renderOrganizationCard).join("")}
          </div>
        </div>
      </section>
    `;
  }

  function renderOrganizationCard(section) {
    return `
      <article class="card organization-card">
        <p class="tag">${esc(section.type)}</p>
        <h3>${esc(section.title)}</h3>
        <ul>
          ${section.people.map(renderOrganizationPerson).join("")}
        </ul>
      </article>
    `;
  }

  function renderOrganizationPerson(person) {
    const details = [person.role, person.affiliation].filter(Boolean).join(", ");
    return `
      <li>
        <strong>${esc(person.name)}</strong>
        ${details ? `<span>${esc(details)}</span>` : ""}
      </li>
    `;
  }

  function renderTeam() {
    const governance = SITE_DATA.teamGovernance;
    return `
      ${pageHero({ eyebrow: "Team", title: "Team and Collaborators", intro: "The consortium brings together investigators, clinicians, pathologists, laboratory scientists, data specialists, trainees, and institutional partners across Zambia, Tanzania, and the United States." })}
      <section class="section">
        <div class="section-inner">
          ${sectionHeader("Administration")}
          <div class="grid three">${governance.administration.map(renderGovernanceProfileCard).join("")}</div>
        </div>
      </section>
      <section class="section section-muted">
        <div class="section-inner">
          ${sectionHeader("Zambia Administrative Core")}
          <div class="grid three">${governance.zambiaAdministrativeCore.map(renderGovernanceProfileCard).join("")}</div>
        </div>
      </section>
      <section class="section">
        <div class="section-inner">
          ${sectionHeader("Steering / Advisory Committee")}
          <div class="grid three">${governance.steeringAdvisory.map(renderGovernanceProfileCard).join("")}</div>
        </div>
      </section>
      <section class="section section-muted">
        <div class="section-inner split-intro">
          <div>
            <div class="team-block-heading">
              <h2>Collaborating Institutions</h2>
            </div>
            ${renderThemeGrid(governance.institutions)}
          </div>
        </div>
      </section>
    `;
  }

  function renderGovernanceProfileCard(person) {
    const image = person.image || "assets/img/profile-placeholder.svg";
    const orcid = person.orcid || "";
    return `
      <article class="card profile-card governance-card">
        <figure>
          <img src="${esc(image)}" alt="${esc(person.name)} profile image">
        </figure>
        <div class="profile-card-body">
          <p class="tag">${esc(person.role)}</p>
          <h3>${esc(person.name)}</h3>
          <p>${esc(person.affiliation)}</p>
          ${orcid ? `<a class="orcid-link" href="${esc(orcid)}" target="_blank" rel="noopener">ORCID</a>` : ""}
        </div>
      </article>
    `;
  }

  function renderProgramCard(program) {
    return `
      <article class="card program-card">
        <div class="program-code">${esc(program.name.split(" ")[0].slice(0, 4))}</div>
        <p class="tag">${esc(program.type)}</p>
        <h3>${esc(program.name)}</h3>
        <p><strong>${esc(program.fullName)}</strong></p>
        <p>${esc(program.summary)}</p>
        <a href="${esc(program.page)}">${esc(label("learnMore"))}</a>
      </article>
    `;
  }

  function renderHomeProgramCards() {
    const keaap = SITE_DATA.programs.find((program) => program.id === "keaap");
    const zamdapp = SITE_DATA.programs.find((program) => program.id === "zamdapp");
    const subPrograms = zamdappSubPrograms();
    return [renderProgramCard(keaap), renderZamdappHomeCard(zamdapp, subPrograms)].join("");
  }

  function renderZamdappHomeCard(program, subPrograms) {
    return `
      <article class="card program-card home-program-card">
        <div class="program-code">${esc(program.name.slice(0, 4))}</div>
        <p class="tag">${esc(program.type)}</p>
        <h3>${esc(program.name)}</h3>
        <p><strong>${esc(program.fullName)}</strong></p>
        <p>${esc(program.summary)} ${esc(label("zamdappIncludesTraining"))}</p>
        <div class="sub-programs" aria-label="${esc(label("regionalTrainingInitiatives"))}">
          <h4>${esc(label("regionalTrainingInitiatives"))}</h4>
          <div>
            ${subPrograms.map((item) => `<a href="${esc(item.page)}"><span>${esc(item.name)}</span><small>${esc(item.fullName)}</small><em>${esc(label("moreInformation"))}</em></a>`).join("")}
          </div>
        </div>
        <a href="${esc(program.page)}">${esc(label("learnMore"))}</a>
      </article>
    `;
  }

  function renderProgramPanel(program) {
    const projects = SITE_DATA.projects.filter((project) => program.projectIds.includes(project.id));
    const subPrograms = program.id === "zamdapp" ? zamdappSubPrograms() : [];
    return `
      <article class="program-panel" id="${esc(program.id)}">
        <div>
          <p class="eyebrow">${esc(program.type)}</p>
          <h2>${esc(program.name)}</h2>
          <p class="lead">${esc(program.fullName)}</p>
          <p>${esc(program.description)}</p>
          <div class="tag-list">${program.themes.map((theme) => `<span>${esc(theme)}</span>`).join("")}</div>
          ${subPrograms.length ? renderSubProgramLinks(subPrograms) : ""}
          <a class="button button-primary" href="${esc(program.page)}">${esc(label("learnMore"))}</a>
        </div>
        <div class="mini-list">
          <h3>${esc(label("suggestedProjects"))}</h3>
          ${projects.map((project) => `<a href="projects.html#${esc(project.id)}">${esc(project.title)}</a>`).join("")}
        </div>
      </article>
    `;
  }

  function renderSubProgramLinks(subPrograms) {
    return `
      <div class="sub-programs program-sub-programs" aria-label="${esc(label("regionalTrainingInitiatives"))}">
        <h4>${esc(label("regionalTrainingInitiatives"))}</h4>
        <div>
          ${subPrograms.map((item) => `<a href="${esc(item.page)}"><span>${esc(item.name)}</span><small>${esc(item.fullName)}</small><em>${esc(label("moreInformation"))}</em></a>`).join("")}
        </div>
      </div>
    `;
  }

  function renderProjectCard(project) {
    const detailHref = projectPageHref(project);
    return `
      <article class="card project-card" id="${esc(project.id)}" data-program="${esc(project.program)}" data-country="${esc(project.countries.join("|"))}" data-theme="${esc(project.theme)}" data-status="${esc(project.status)}">
        <div class="project-tag-row">
          <span>${esc(project.program)}</span>
          ${project.countries.map((country) => `<span>${esc(country)}</span>`).join("")}
          <span>${esc(project.theme)}</span>
        </div>
        <h3>${esc(project.title)}</h3>
        <p>${esc(project.description)}</p>
        <div class="project-card-footer">
          <p><strong>${esc(label("projectStatus"))}:</strong> ${esc(project.status)}</p>
          <a href="${esc(detailHref)}">${esc(label("viewDetails"))}</a>
        </div>
      </article>
    `;
  }

  function projectPageHref(project) {
    return `project-${project.id}.html`;
  }

  function renderProjectGroups() {
    const copy = pageCopy("projects");
    return projectGroups().map((group) => {
      const projects = SITE_DATA.projects.filter(group.includes);
      if (!projects.length) return "";
      const groupCopy = copy.groups[group.id];
      return `
        <section class="project-group" data-project-group="${esc(group.id)}" aria-labelledby="${esc(group.id)}-heading">
          <div class="project-group-header">
            <p class="eyebrow">${esc(label("projectArea"))}</p>
            <h2 id="${esc(group.id)}-heading">${esc(groupCopy.title)}</h2>
            <p>${esc(groupCopy.intro)}</p>
          </div>
          <div class="grid three">${projects.map(renderProjectCard).join("")}</div>
        </section>
      `;
    }).join("");
  }

  function projectGroups() {
    return [
      { id: "keaap", includes: (project) => project.program === "KEAAP" },
      { id: "zamdapp", includes: (project) => project.id === "zamdapp-ks-art" || project.id === "zamdapp-ossn-pathology" },
      { id: "training", includes: (project) => project.program === "AMTRIP" || project.program === "TRMTRIP/TAMTRP" },
      { id: "pathology", includes: (project) => ["ossn-pathology", "pot-pathology", "biobank-tissue"].includes(project.id) },
      { id: "data", includes: (project) => project.program === "Data Core" }
    ];
  }

  function renderSiteCard(site) {
    return `
      <article class="card image-card">
        <img src="${esc(site.image || "assets/img/site-placeholder.svg")}" alt="${esc(site.imageAlt || label("siteAlt"))}">
        <div class="card-body">
          <h3>${esc(site.country)}</h3>
          <p>${esc(site.summary)}</p>
          <div class="tag-list">${site.programs.map((item) => `<span>${esc(item)}</span>`).join("")}</div>
          <h4>${esc(label("keyInstitutions"))}</h4>
          <ul>${site.institutions.map((item) => `<li>${esc(item)}</li>`).join("")}</ul>
        </div>
      </article>
    `;
  }

  function renderCollaboratingLogoCard(site) {
    return `
      <article class="card collaborating-logo-card">
        <div class="logo-frame ${site.logos.length > 1 ? "logo-frame-pair" : ""}">
          ${site.logos.map((logo) => `<img src="${esc(logo.src)}" alt="${esc(logo.alt)}">`).join("")}
        </div>
        <div class="card-body">
          <h3>${esc(site.name)}</h3>
          <p>${esc(site.description)}</p>
        </div>
      </article>
    `;
  }

  function renderFellowCard(fellow) {
    return `
      <article class="card profile-card">
        <img src="assets/img/profile-placeholder.svg" alt="${esc(label("profileAlt"))}">
        <div>
          <p class="tag">${esc(fellow.program)}</p>
          <h3>${esc(fellow.name)}</h3>
          <p>${esc(fellow.bio)}</p>
          <dl>
            <dt>${esc(label("country"))}</dt><dd>${esc(fellow.country)}</dd>
            <dt>Period</dt><dd>${esc(fellow.period)}</dd>
            <dt>Area</dt><dd>${esc(fellow.area)}</dd>
            <dt>Output</dt><dd>${esc(fellow.output)}</dd>
            <dt>Role</dt><dd>${esc(fellow.role)}</dd>
          </dl>
        </div>
      </article>
    `;
  }

  function renderPublicationCard(pub) {
    const ids = publicationIds(pub);
    const articleUrl = publicationArticleUrl(pub, ids);
    return `
      <article class="card publication-card" data-program="${esc(pub.program)}" data-year="${esc(pub.year)}" data-topic="${esc(pub.topic)}" data-country="${esc(pub.country)}">
        <div class="publication-meta"><span>${esc(pub.program)}</span><span>${esc(pub.year)}</span><span>${esc(pub.topic)}</span></div>
        <h3>${esc(pub.title)}</h3>
        <p>${esc(pub.authors)}</p>
        <p>${esc(pub.journal)} | ${esc(pub.country)}</p>
        <dl class="publication-identifiers">
          ${pub.doi ? `<dt>DOI</dt><dd>${esc(pub.doi)}</dd>` : ""}
          ${ids.pmid ? `<dt>PMID</dt><dd>${esc(ids.pmid)}</dd>` : ""}
          ${ids.pmcid ? `<dt>PMCID</dt><dd>${esc(ids.pmcid)}</dd>` : ""}
        </dl>
        <div class="publication-links">
          ${articleUrl ? `<a href="${esc(articleUrl)}" target="_blank" rel="noopener">View Article</a>` : ""}
          <button type="button">${esc(label("exportCitation"))}</button>
        </div>
      </article>
    `;
  }

  function publicationIds(pub) {
    const pubmed = pub.pubmed || "";
    return {
      pmid: pub.pmid || (pubmed.match(/PMID:\s*([0-9]+)/i) || [])[1] || "",
      pmcid: pub.pmcid || (pubmed.match(/PMCID:\s*(PMC[0-9]+)/i) || [])[1] || ""
    };
  }

  function publicationArticleUrl(pub, ids) {
    if (pub.doi && /^10\./.test(pub.doi)) return `https://doi.org/${pub.doi}`;
    if (ids.pmcid) return `https://pmc.ncbi.nlm.nih.gov/articles/${ids.pmcid}/`;
    if (ids.pmid) return `https://pubmed.ncbi.nlm.nih.gov/${ids.pmid}/`;
    return "";
  }

  function renderNewsCard(item) {
    return `
      <article class="card news-card">
        <p class="tag">${esc(item.type)}</p>
        <h3>${esc(item.title)}</h3>
        <p>${esc(item.summary)}</p>
        <time>${esc(item.date)}</time>
      </article>
    `;
  }

  function renderInfoCard(title, text, href = "") {
    const inner = `
      <span class="card-accent" aria-hidden="true"></span>
      <h3>${esc(title)}</h3>
      <p>${esc(text)}</p>
      ${href ? `<a href="${esc(href)}">${esc(label("learnMore"))}</a>` : ""}
    `;
    return `<article class="card info-card">${inner}</article>`;
  }

  function renderThemeGrid(items) {
    return `<div class="theme-grid">${items.map((item) => `<span>${esc(item)}</span>`).join("")}</div>`;
  }

  function renderFilterBar(kind) {
    if (kind === "projects") {
      return `
        <form class="filter-bar project-filter-panel" id="project-filter">
          <div class="filter-intro">
            <h2>${esc(label("projectFilters"))}</h2>
            <p>${esc(label("projectFiltersText"))}</p>
          </div>
          ${searchField("project-search", label("searchProjects"))}
          ${selectField("program", unique(SITE_DATA.projects.map((item) => item.program)))}
          ${selectField("country", unique(SITE_DATA.projects.flatMap((item) => item.countries)))}
          ${selectField("theme", unique(SITE_DATA.projects.map((item) => item.theme)))}
          ${selectField("status", unique(SITE_DATA.projects.map((item) => item.status)))}
          <button type="reset">${esc(label("clear"))}</button>
        </form>
      `;
    }
    return `
      <form class="filter-bar" id="publication-filter">
        ${searchField("publication-search")}
        ${selectField("program", unique(SITE_DATA.publications.map((item) => item.program)))}
        ${selectField("year", unique(SITE_DATA.publications.map((item) => item.year)))}
        ${selectField("topic", unique(SITE_DATA.publications.map((item) => item.topic)))}
        ${selectField("country", unique(SITE_DATA.publications.map((item) => item.country)))}
        <button type="reset">${esc(label("clear"))}</button>
      </form>
    `;
  }

  function searchField(id, text = label("search")) {
    return `<label><span>${esc(text)}</span><input id="${esc(id)}" type="search" placeholder="${esc(text)}"></label>`;
  }

  function selectField(name, options) {
    return `
      <label>
        <span>${esc(label(name))}</span>
        <select name="${esc(name)}" data-filter="${esc(name)}">
          <option value="">${esc(label("all"))}</option>
          ${options.map((option) => `<option value="${esc(option)}">${esc(option)}</option>`).join("")}
        </select>
      </label>
    `;
  }

  function unique(items) {
    return Array.from(new Set(items)).sort();
  }

  function bindProjectsFilter() {
    const form = $("#project-filter");
    const search = $("#project-search");
    const cards = $$("#project-results .project-card");
    const empty = $("#project-empty");
    const groups = $$("#project-results .project-group");
    bindGenericFilter(form, search, cards, empty, (card, filters, query) => {
      const text = card.textContent.toLowerCase();
      const matchQuery = !query || text.includes(query);
      const matchProgram = !filters.program || card.dataset.program === filters.program;
      const matchCountry = !filters.country || card.dataset.country.includes(filters.country);
      const matchTheme = !filters.theme || card.dataset.theme === filters.theme;
      const matchStatus = !filters.status || card.dataset.status === filters.status;
      return matchQuery && matchProgram && matchCountry && matchTheme && matchStatus;
    }, () => {
      groups.forEach((group) => {
        group.hidden = $$(".project-card", group).every((card) => card.hidden);
      });
    });
  }

  function bindPublicationsFilter() {
    const form = $("#publication-filter");
    const search = $("#publication-search");
    const cards = $$("#publication-results .publication-card");
    const empty = $("#publication-empty");
    bindGenericFilter(form, search, cards, empty, (card, filters, query) => {
      const text = card.textContent.toLowerCase();
      return (!query || text.includes(query))
        && (!filters.program || card.dataset.program === filters.program)
        && (!filters.year || card.dataset.year === filters.year)
        && (!filters.topic || card.dataset.topic === filters.topic)
        && (!filters.country || card.dataset.country === filters.country);
    });
  }

  function bindGenericFilter(form, search, cards, empty, predicate, afterUpdate = () => {}) {
    const update = () => {
      const filters = Object.fromEntries($$("[data-filter]", form).map((field) => [field.dataset.filter, field.value]));
      const query = search.value.trim().toLowerCase();
      let shown = 0;
      cards.forEach((card) => {
        const visible = predicate(card, filters, query);
        card.hidden = !visible;
        if (visible) shown += 1;
      });
      afterUpdate();
      empty.hidden = shown > 0;
    };
    form.addEventListener("input", update);
    form.addEventListener("change", update);
    form.addEventListener("reset", () => setTimeout(update, 0));
  }

  function bindContactForm() {
    const form = $(".contact-form");
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      $(".form-status", form).textContent = pageCopy("contact").success;
    });
  }

  function formField(id, text, type) {
    return `<label for="${esc(id)}">${esc(text)}</label><input id="${esc(id)}" name="${esc(id)}" type="${esc(type)}">`;
  }

  render();
})();
