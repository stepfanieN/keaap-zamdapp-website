const SITE_DATA = {
  programs: [
    {
      id: "keaap",
      page: "keaap.html",
      name: "KEAAP",
      fullName: "Kaposi Sarcoma in the Era of ART in Africa Program",
      type: "Research program",
      countries: ["Zambia", "Tanzania", "United States"],
      themes: ["Kaposi sarcoma", "KSHV", "HIV-associated malignancies", "Viral oncology"],
      summary: "KEAAP studies the continued burden of Kaposi sarcoma in Africa in the context of expanded antiretroviral therapy access.",
      description: "KEAAP is an NIH/NCI-supported HIV-associated malignancy research program focused on Kaposi sarcoma in the era of widespread antiretroviral therapy. The program supports collaborative research across Zambia, Tanzania, and U.S. partner institutions to examine the continued burden of Kaposi sarcoma among people living with HIV.",
      focus: ["Kaposi sarcoma in people living with HIV", "KSHV biology and immune response", "ART-era cancer burden", "Research infrastructure development", "Cross-country collaboration between Zambia and Tanzania"],
      projectIds: ["keaap-kshv-immune", "keaap-kshv-reservoirs"]
    },
    {
      id: "zamdapp",
      page: "zamdapp.html",
      name: "ZAMDAPP",
      fullName: "Zambia AIDS Malignancies Diagnosis and Pathogenesis Program",
      type: "Research and training platform",
      countries: ["Zambia", "United States"],
      themes: ["Kaposi sarcoma", "OSSN", "Pathology", "Viral oncology", "Biostatistics"],
      summary: "ZAMDAPP strengthens Zambia-led research capacity for HIV-associated malignancies, diagnostics, pathology, viral oncology, and research infrastructure.",
      description: "ZAMDAPP is an NIH/NCI-supported collaborative program focused on strengthening Zambia-led research capacity for AIDS-associated malignancies. The program supports research, training, diagnostics, pathology, viral oncology, biostatistics, epidemiology, and laboratory capacity for cancer research in Zambia.",
      focus: ["Kaposi sarcoma", "Ocular surface squamous neoplasia", "HIV-associated malignancies", "Pathology and diagnostics", "Viral oncology", "Cancer genomics and molecular research", "Biostatistics and epidemiology", "Research training and mentorship"],
      projectIds: ["zamdapp-ks-art", "zamdapp-ossn-pathology"]
    },
    {
      id: "amtrip",
      page: "zamdapp/amtrip/index.html",
      name: "AMTRIP Zambia",
      fullName: "AIDS Malignancies Training and Research International Program",
      type: "Training program",
      countries: ["Zambia", "United States"],
      themes: ["Training", "Pathology", "Molecular diagnostics", "Bioinformatics", "Biostatistics"],
      summary: "AMTRIP supports training, mentorship, and technical capacity development in Zambia across laboratory, pathology, data, and cancer research methods domains.",
      description: "AMTRIP is a ZAMDAPP-linked training and research capacity initiative focused on strengthening Zambia's infrastructure for AIDS-associated malignancies and other cancer research. It supports trainees, clinicians, scientists, laboratory teams, pathology teams, and data specialists through degree training, technical training, workshops, mentorship, and collaborative research.",
      focus: ["Fellow training", "Student research projects", "Pathology capacity strengthening", "Molecular diagnostics", "Viral oncology", "Biostatistics and epidemiology", "Cancer genomics", "Bioinformatics", "Research methods", "Mentorship"],
      projectIds: ["amtrip-training-projects"]
    },
    {
      id: "trmtrip",
      page: "trmtrip.html",
      name: "TRMTRIP/TAMTRP Tanzania",
      fullName: "Tanzania AIDS Malignancies Training and Research International Program",
      type: "Training program",
      countries: ["Tanzania", "United States"],
      themes: ["Training", "Oncology", "Pathology", "Epidemiology", "Biobanking", "Cancer genomics"],
      summary: "TRMTRIP/TAMTRP supports HIV-associated and infection-associated cancer research and training capacity in Tanzania through oncology, diagnostics, pathology, epidemiology, genomics, biostatistics, and translational research.",
      description: "TRMTRIP/TAMTRP supports cancer research and training capacity in Tanzania, with emphasis on HIV-associated malignancies, infection-associated cancers, diagnostics, cancer genomics, epidemiology, biostatistics, pathology, and translational research. The program works through Ocean Road Cancer Institute and U.S. academic partners to strengthen Tanzania-led research infrastructure and mentorship.",
      focus: ["HIV-associated cancer research", "Infection-associated malignancies", "Oncology and pathology training", "Molecular detection and diagnostics", "Cancer genomics", "Bioinformatics and computational genomics", "Epidemiology and biostatistics", "Biobanking and cancer registry capacity", "Clinical and translational research"],
      projectIds: ["trmtrip-training-projects"]
    }
  ],
  parentProgramIds: ["keaap", "zamdapp"],
  zamdappSubProgramIds: ["amtrip", "trmtrip"],
  zamdappCategories: [
    {
      id: "ks-hiv-treatment-outcomes",
      title: "Kaposi Sarcoma and HIV Treatment Outcomes",
      shortDescription: "Research focused on Kaposi sarcoma sensitization, early detection, referral, HIV treatment outcomes, viral co-factors, KSHV immune profiling, and tumor microenvironment studies among people living with HIV in Zambia.",
      intro: "This ZAMDAPP research area focuses on Kaposi sarcoma among people living with HIV in Zambia, with emphasis on early diagnosis, sensitization, referral, antiretroviral treatment outcomes, viral co-factors, tumor biology, and KSHV immune profiling. Recent work has included sensitization training for healthcare workers at first-level hospitals and HIV care and treatment clinics, patient education on self-examination for suspected KS lesions, and placement of KS awareness posters in HIV care settings. The research portfolio also includes studies of KSHV and EBV co-localization in HIV-associated Kaposi sarcoma, KSHV antibody profiling, and molecular features of the KS tumor microenvironment."
    },
    {
      id: "ossn-pathology-viral-etiology",
      title: "OSSN Pathology and Viral Etiology",
      shortDescription: "Research focused on ocular surface squamous neoplasia in Zambia, including sociodemographic, clinical, pathological, environmental, HIV-related, and viral etiologic factors such as EBV, HPV, KSHV, Merkel cell polyomavirus, adenovirus, and other tumor viruses.",
      intro: "This ZAMDAPP research area focuses on the pathological diagnosis and etiology of ocular surface squamous neoplasia in Zambia. The work investigates sociodemographic, environmental, clinical, pathological, HIV-related, and virological factors associated with OSSN. Using samples from HIV-positive and HIV-negative patients with ocular surface lesions, the project evaluates the role of mucosal HPV genotypes and other oncogenic tumor viruses, including EBV, KSHV, Merkel cell polyomavirus, polyomaviruses, and adenoviruses. The project also assesses tumor grade, stage, histopathology, and dysregulated molecular pathways using biomarkers such as p16, Ki67, p53, and Yap.",
      aims: ["Characterize associated risk factors for OSSN.", "Determine whether HPV or other tumor viruses are differentially associated with OSSN by tumor type, grade, or stage.", "Determine whether HPV genotype or other tumor-virus-related pathology across OSSN stages differs by HIV status."]
    },
    {
      id: "hiv-neuropathogenesis-coinfections",
      title: "HIV/AIDS Neuropathogenesis and Coinfections",
      shortDescription: "Research focused on subtype C HIV-1 persistence, viral reservoirs, central nervous system involvement, neuropathology, coinfections, inflammation, and virus-associated cancers in Zambia and the broader Sub-Saharan African context.",
      intro: "The ability of HIV-1 to persist in infected individuals despite suppressive antiretroviral therapy remains a major barrier to HIV cure. This body of ZAMDAPP-related work investigates whether the central nervous system and other tissues may serve as reservoirs for subtype C HIV-1, how these reservoirs are affected by ART, and how HIV interacts with coinfections, inflammation, neuropathology, and virus-associated cancers in Zambia and the broader Sub-Saharan African context."
    }
  ],
  amtripPage: {
    intro: "AMTRIP Zambia is the AIDS Malignancies Training and Research International Program. Presented as a ZAMDAPP sub-program, AMTRIP strengthens Zambia's research infrastructure for HIV-associated malignancies and other cancers through training, mentorship, technical capacity development, and collaborative research.",
    background: "AMTRIP was established through the University of Zambia, University Teaching Hospitals, Cancer Diseases Hospital, and long-standing U.S. academic collaborations. The program responds to the need for Zambia-led capacity in cancer epidemiology, diagnostics, pathology, molecular genetics, cancer genomics, biostatistics, bioinformatics, and laboratory research methods.",
    goal: "The program goal is to increase the number of Zambian biomedical researchers, clinicians, laboratory scientists, pathologists, and data-focused trainees with skills needed to advance Zambia's cancer research agenda, including research on HIV-associated malignancies and other locally important cancers.",
    focusAreas: ["Cancer epidemiology", "Pathology and diagnostics", "Molecular diagnostics", "Cancer genomics", "Viral oncology", "Bioinformatics", "Biostatistics", "Research ethics", "Scientific writing", "Mentorship"],
    trainingPlan: [
      { title: "Long-term master's, MMed, MS, or MPH training", text: "Planned training includes four long-term master's-level, MMed, MS, or MPH pathways for Zambian trainees." },
      { title: "Long-term doctoral training", text: "Planned doctoral-level training includes two PhD pathways connected to cancer research and related biomedical disciplines." },
      { title: "Medium-term skills training", text: "Medium-term training supports ten focused skills-development opportunities in laboratory, pathology, data, clinical, and research methods." },
      { title: "Short-term workshops", text: "Short courses and workshops are expected to reach more than 250 participants through in-country and partner-supported training activities." }
    ],
    pathways: [
      {
        title: "Graduate Degree Training",
        text: "AMTRIP supports master's, doctoral, MMed, and related degree training pathways for Zambian trainees working in cancer research, diagnostics, epidemiology, pathology, molecular science, and public health."
      },
      {
        title: "Medium-Term Technical Training",
        text: "The program supports focused technical training in areas such as molecular pathology, cancer biology, genomics, laboratory methods, and cancer research technologies through partner institutions."
      },
      {
        title: "Workshops and Short Courses",
        text: "Workshops address grant writing, manuscript preparation, mentoring, biostatistics, ethics, bioinformatics, molecular pathology, laboratory methods, viral oncology, and career development."
      }
    ],
    recentTraining: [
      { title: "Research and regulatory methods", text: "Recent activities include training in research methods, regulatory and ethics requirements, good clinical practice, qualitative research designs, and clinical trials." },
      { title: "Scientific communication", text: "The program supports presentation skills, public speaking, journal critique, grant writing, manuscript preparation, and other scholarly communication skills." },
      { title: "Pathology and implementation science", text: "Training activities include cancer pathology education, implementation science, safeguarding, mentorship, and practical research support." }
    ],
    partners: ["University of Zambia", "University Teaching Hospitals", "Cancer Diseases Hospital", "LSU Health New Orleans", "University of Nebraska partners", "City of Hope", "Regional African cancer research collaborators"],
    impact: "AMTRIP contributes to a broader regional training environment by supporting Zambia-led cancer research capacity, mentorship, technical skill development, technology transfer, and collaboration across African and U.S. partner institutions.",
    outcomes: [
      { title: "Collaborative research capacity", text: "AMTRIP supports sustained collaboration among Zambian and U.S. partners in cancer research, diagnostics, pathology, laboratory science, and data-focused work." },
      { title: "Workforce development", text: "The program supports emerging investigators, clinicians, laboratory scientists, pathologists, and data professionals through structured mentorship and training pathways." },
      { title: "Sustainable infrastructure", text: "Sustainability priorities include partner ownership, new local and international partnerships, postgraduate mentorship, and continued strengthening of research infrastructure at UTHs and UNZA." }
    ],
    facilitiesIntro: "AMTRIP training and research activities are connected to Zambia-based clinical and research infrastructure, including University Teaching Hospitals and Kaposi sarcoma research and training spaces.",
    facilities: [
      {
        src: "assets/img/uth-main-entrance.jpg",
        alt: "University Teaching Hospital entrance in Zambia",
        caption: "University Teaching Hospitals, Zambia"
      },
      {
        src: "assets/img/kaposi-sarcoma-clinic.jpg",
        alt: "Kaposi Sarcoma Laboratory at University Teaching Hospitals in Zambia",
        caption: "Kaposi Sarcoma Laboratory, UTHs"
      },
      {
        src: "assets/img/kaposi-sarcoma-research-lab.jpg",
        alt: "Kaposi Sarcoma Clinic, Pathology, Biorepository and Laboratory at University Teaching Hospitals in Zambia",
        caption: "Kaposi Sarcoma Clinic, Pathology, Biorepository and Laboratory, UTHs"
      }
    ],
    publications: "AMTRIP-related publications and trainee outputs are maintained in the consortium publication database."
  },
  tamtrpPage: {
    intro: "TRMTRIP/TAMTRP Tanzania is a ZAMDAPP-linked training program focused on strengthening Tanzania-led cancer research capacity through Ocean Road Cancer Institute and U.S. academic collaboration.",
    background: "The program builds on long-standing collaboration between Ocean Road Cancer Institute and the Stanley S. Scott Cancer Center at LSU Health New Orleans. It is designed to strengthen Tanzania's capacity for research on HIV-associated malignancies, infection-associated cancers, cancer diagnostics, cancer genomics, epidemiology, biostatistics, pathology, and translational research.",
    goal: "The overall objective is to enhance cancer research capacity at Tanzania's major cancer research institution, Ocean Road Cancer Institute, while increasing the number of trained Tanzanian cancer researchers prepared for future work in HIV-associated cancer diagnostics, genomics, and therapy-related research.",
    shortTermGoals: [
      { title: "Research and training infrastructure", text: "Enhance ORCI's cancer research and training infrastructure for Tanzania-led studies in oncology, diagnostics, genomics, epidemiology, and translational research." },
      { title: "Mentored research training", text: "Support a training and mentoring program for Tanzanian trainees conducting research on cancers commonly encountered at ORCI and partner institutions." }
    ],
    aims: [
      { title: "Long-term degree training", text: "Provide intensive academic instruction and research experience for PhD and master's-level candidates in relevant HIV-associated cancer research fields." },
      { title: "Medium-term technical training", text: "Support three- to six-month technical training for postgraduates and health care providers in molecular pathology, cancer biology, bioinformatics, genomics, biostatistics, biobanking, cancer registry, and clinical or translational research." },
      { title: "Technical workshops", text: "Deliver workshops that strengthen basic, clinical, implementation, genomics, bioinformatics, computational genomics, epidemiology, and biostatistics skills while expanding collaboration between partner institutions." }
    ],
    trainingPlan: [
      { title: "Long-term master's, MMed, MS, or MPH training", text: "The training plan includes four long-term master's-level, MMed, MS, or MPH pathways for Tanzanian trainees." },
      { title: "Long-term doctoral training", text: "The program supports doctoral-level training connected to cancer research and related biomedical disciplines." },
      { title: "Medium-term skills training", text: "Medium-term training supports ten focused skills-development opportunities for Tanzania fellows and health care providers." },
      { title: "Short-term workshops", text: "Short courses and workshops are expected to reach more than 250 participants across the training period." }
    ],
    trainingTracks: [
      { title: "Clinical trials methods and management", text: "Training in clinical research design, study conduct, and management of cancer-focused clinical research activities." },
      { title: "Public health, operational, and translational research", text: "Training in cancer prevention, epidemiology, cancer registry systems, biostatistics, data management, biobanking, and implementation-focused research." },
      { title: "Laboratory-based cancer biology research", text: "Training in molecular biology, virology, pathology, diagnostics, viral oncology, immunology, and related laboratory research methods." },
      { title: "Cancer genomics and bioinformatics", text: "Training in next-generation sequencing, data management, big data analytics, computational genomics, and genomics-informed research." }
    ],
    progress: [
      { title: "Degree training", text: "Program progress reported in 2024 included PhD and MSc trainees enrolled through MUHAS and LSUHSC-New Orleans pathways." },
      { title: "Medium-term training", text: "Three trainees completed three-month training placements at LSUHSC-New Orleans." },
      { title: "Short-course training", text: "A biostatistics workshop was completed as part of short-term training activities." },
      { title: "Responsible conduct of research", text: "Trainees completed responsible conduct of research training through MUHAS." }
    ],
    partners: ["Ocean Road Cancer Institute", "Stanley S. Scott Cancer Center, LSU Health New Orleans", "Muhimbili University of Health and Allied Sciences", "Tanzanian clinical and research collaborators", "U.S. academic partners"],
    impact: "TAMTRP supports Tanzania's preparation for cancer research approaches that increasingly use molecular diagnostics, cancer genomics, data science, and translational research to improve understanding of HIV-associated and infection-associated malignancies.",
    sustainability: [
      { title: "Trainee-led research capacity", text: "The program supports the development of Tanzanian trainees and mentors who can lead locally relevant cancer research." },
      { title: "Institutional collaboration", text: "TAMTRP strengthens collaboration among ORCI, MUHAS, LSU Health New Orleans, and other local and international partners." },
      { title: "Research infrastructure", text: "The program supports infrastructure for diagnostics, data systems, biobanking, genomics, epidemiology, and translational cancer research." }
    ],
    teamImage: {
      src: "assets/img/tamtrp-orci-team.jpg",
      alt: "TAMTRP and ORCI team members at Ocean Road Cancer Institute",
      caption: "TAMTRP and ORCI team members"
    },
    publications: "TAMTRP-related publications and trainee outputs are maintained in the consortium publication database."
  },
  projects: [
    {
      id: "keaap-kshv-immune",
      title: "KEAAP Project 2: KSHV Immune Response",
      program: "KEAAP",
      countries: ["Zambia", "Tanzania", "United States"],
      theme: "Viral oncology",
      status: "Active",
      leads: "Consortium investigators",
      description: "2026 progress update: Project 2 has accumulated 155 Kaposi sarcoma cases across the two study sites, including 86 in Zambia and 69 in Tanzania. Ongoing work includes KSHV-specific T-cell response assays, metabolomics/proteomics analyses, and spatial immune proteomics analyses of KS tissues.",
      publications: "See Publications page"
    },
    {
      id: "keaap-kshv-reservoirs",
      title: "KEAAP Project 3: KSHV Reservoirs",
      program: "KEAAP",
      countries: ["Zambia", "Tanzania", "United States"],
      theme: "Biobank",
      status: "Active",
      leads: "Consortium investigators",
      description: "2026 progress update: Project 3 includes 65 full-body autopsy cases across Zambia and Tanzania; site-specific updates include 61 cases recruited in Zambia and 6 full-body autopsies conducted at ORCI in Tanzania. ORCI autopsy facility expansion and rehabilitation were completed, and the Last Gift of Life initiative was introduced for autopsy and tissue donation sensitization.",
      publications: "See Publications page"
    },
    {
      id: "zamdapp-ks-art",
      title: "ZAMDAPP Project 1: Early-Diagnosed Kaposi Sarcoma and ART Outcomes",
      program: "ZAMDAPP",
      countries: ["Zambia"],
      theme: "Kaposi sarcoma",
      status: "Active",
      leads: "Consortium investigators",
      description: "This project focuses on early recognition, referral, diagnosis, and clinical outcomes among people with Kaposi sarcoma. It supports Zambia-led research on ART-era cancer outcomes and care pathways.",
      publications: "See Publications page"
    },
    {
      id: "zamdapp-ossn-pathology",
      title: "ZAMDAPP Project 2: Pathological Diagnosis and Etiology of OSSN",
      program: "ZAMDAPP",
      countries: ["Zambia"],
      theme: "OSSN",
      status: "Active",
      leads: "Consortium investigators",
      description: "This project examines ocular surface squamous neoplasia in Zambia, with attention to pathology, diagnostic classification, viral associations, HIV-related risk factors, and tumor characteristics. It is presented here as a public research summary only.",
      publications: "See Publications page"
    },
    {
      id: "amtrip-training-projects",
      title: "AMTRIP Zambia Student Training Projects",
      program: "AMTRIP",
      countries: ["Zambia"],
      theme: "Training",
      status: "Training Project",
      leads: "Program mentors",
      description: "AMTRIP training projects support student- and fellow-led research in Zambia through mentorship, methods training, pathology and laboratory capacity strengthening, and scientific writing.",
      publications: "See Publications page"
    },
    {
      id: "trmtrip-training-projects",
      title: "TRMTRIP/TAMTRP Tanzania Training Projects",
      program: "TRMTRIP/TAMTRP",
      countries: ["Tanzania"],
      theme: "Training",
      status: "Training Project",
      leads: "Program mentors",
      description: "TRMTRIP/TAMTRP training projects support Tanzania-led research capacity across HIV-associated and infection-associated cancers, molecular diagnostics, pathology, cancer genomics, bioinformatics, epidemiology, biostatistics, biobanking, cancer registry systems, clinical research, and translational research.",
      publications: "See Publications page"
    },
    {
      id: "ossn-pathology",
      title: "OSSN Pathology and Diagnostic Research",
      program: "ZAMDAPP",
      countries: ["Zambia"],
      theme: "Pathology",
      status: "Active",
      leads: "Pathology collaborators",
      description: "This research area focuses on ocular surface squamous neoplasia pathology, diagnostic classification, tumor characterization, and related research questions.",
      publications: "See Publications page"
    },
    {
      id: "pot-pathology",
      title: "POT / Pathology Research Section",
      program: "Pathology/POT",
      countries: ["Zambia", "Tanzania", "United States"],
      theme: "Pathology",
      status: "Active",
      leads: "Pathology collaborators",
      description: "The pathology/POT section supports diagnostic strengthening, tissue-based research systems, pathology workflows, pathology training, capacity development, governance, and research methods.",
      publications: "See Publications page"
    },
    {
      id: "data-core",
      title: "Biostatistics and Data Management Core",
      program: "Data Core",
      countries: ["Zambia", "Tanzania", "United States"],
      theme: "Data",
      status: "Active",
      leads: "Data Management and Biostatistics Core",
      description: "The Data Management and Biostatistics Core supports database development, data quality workflows, harmonization, statistical analysis planning, reproducible reporting, and manuscript and grant support.",
      publications: "See Publications page"
    },
    {
      id: "biobank-tissue",
      title: "Biobank and Tissue Research Capacity Section",
      program: "Pathology/POT",
      countries: ["Zambia", "Tanzania", "United States"],
      theme: "Biobank",
      status: "Active",
      leads: "Pathology and tissue research collaborators",
      description: "Ethical tissue research infrastructure, specimen governance, documentation, storage systems, quality control, and regulatory workflows.",
      publications: "See Publications page"
    }
  ],
  labFacilities: [
    {
      name: "KEAAP / UNZA / UTH Laboratory and Biorepository Facilities",
      location: "University of Zambia and University Teaching Hospitals, Zambia",
      image: "assets/img/kaposi-sarcoma-research-lab.jpg",
      alt: "Kaposi Sarcoma Clinic, Pathology, Biorepository and Laboratory at University Teaching Hospitals in Zambia",
      description: "Zambia-based KEAAP/UNZA/UTH infrastructure supports clinical research, immunology and molecular testing workflows, specimen storage, pathology-linked research, and data entry for consortium studies.",
      equipment: ["FACScan for CD4 counts", "high-speed centrifuges", "blood chemistry machine", "real-time PCR machine", "solution-based PCR machines", "three -80°C specimen freezers", "DNA sequencer", "HIV genotyping machine", "two Corbett real-time PCR analyzers", "microscope digital camera", "three computer data-entry workstations"],
      services: ["CD4 testing support", "blood chemistry testing support", "PCR-based molecular workflows", "HIV genotyping support", "specimen processing and storage", "microscopy documentation", "data entry and study documentation"]
    },
    {
      name: "Ocean Road Cancer Institute Oncology and Research Facilities",
      location: "Dar es Salaam, Tanzania",
      image: "assets/img/orci-front.jpg",
      alt: "Ocean Road Cancer Institute building in Dar es Salaam, Tanzania",
      description: "Tanzania-based oncology, pathology, autopsy, and translational research infrastructure supporting Kaposi sarcoma research, training, and tissue-based research activities.",
      equipment: ["2-8°C refrigerators", "-20°C freezers", "-80°C freezers", "general laboratory equipment", "molecular laboratory equipment", "pathology and cytology laboratory equipment"],
      services: ["oncology research coordination", "pathology and cytology workflows", "molecular laboratory support", "specimen handling and cold storage", "autopsy and tissue donation workflows", "training activities"]
    },
    {
      name: "Data Management and Biostatistics Core",
      location: "Cross-site",
      image: "assets/img/hero-research.svg",
      alt: "Research data and collaboration graphic",
      description: "A cross-program core supporting data systems, study monitoring, data quality, harmonization, statistical analysis planning, reporting, and manuscript and grant support.",
      equipment: ["REDCap systems", "secure databases", "quality-control workflows", "analysis workstations", "reporting templates"],
      services: ["database development", "data quality review", "statistical analysis planning", "study monitoring", "reproducible reporting"]
    },
    {
      name: "Collaborating U.S. Partner Laboratories",
      location: "United States",
      image: "assets/img/lsu-health-new-orleans-logo.png",
      alt: "LSU Health New Orleans logo",
      fit: "contain",
      description: "U.S. academic partner laboratories and analytic teams support collaborative research methods, viral oncology, molecular assays, data analysis, mentorship, and scientific dissemination.",
      equipment: ["Illumina NextSeq 500", "MiSeq", "iScan", "PCR systems", "cryostats", "microscopes", "imaging systems", "flow cytometers", "cell sorters", "centrifuges and related instruments"],
      services: ["sequencing and genomics collaboration", "PCR-based assay support", "imaging and microscopy collaboration", "flow cytometry and cell sorting support", "methodologic support", "mentorship", "manuscript and grant support"]
    }
  ],
  facilityServices: [
    {
      type: "Clinical Research",
      title: "Study coordination and clinical workflows",
      description: "Support for recruitment workflows, clinical data collection, study documentation, referral coordination, and trainee participation in public-facing research activities."
    },
    {
      type: "Pathology",
      title: "Diagnostic and tissue-linked research support",
      description: "Pathology collaboration, diagnostic classification support, tissue documentation, quality workflows, and integration with translational research questions."
    },
    {
      type: "Biorepository",
      title: "Specimen governance and storage workflows",
      description: "Specimen processing, documentation, cold storage coordination, chain-of-custody practices, and ethical tissue research support."
    },
    {
      type: "Laboratory",
      title: "Molecular and immunology-linked research methods",
      description: "Support for KSHV-related assays, molecular methods, collaborative proteomics/metabolomics workflows, and training in laboratory research practice."
    },
    {
      type: "Data",
      title: "Data management and biostatistics",
      description: "REDCap/database support, data quality review, harmonization, study monitoring, statistical analysis planning, and reproducible reporting."
    },
    {
      type: "Training",
      title: "Hands-on research capacity development",
      description: "Training activities for fellows, students, clinicians, laboratory scientists, pathologists, and data teams through mentored project-based research."
    }
  ],
  themes: ["Kaposi sarcoma", "Ocular surface squamous neoplasia", "HIV-associated malignancies", "Viral oncology", "Pathology and diagnostics", "Biostatistics and data management", "Biobanking and tissue research", "Training and mentorship", "Cancer epidemiology", "Implementation science"],
  sites: [
    {
      country: "Zambia",
      institutions: ["University Teaching Hospitals", "Cancer Diseases Hospital", "University of Zambia", "Local research partners"],
      summary: "Zambia-based activities include clinical, pathology, diagnostic, laboratory, epidemiologic, and data-focused research on HIV-associated malignancies.",
      programs: ["KEAAP", "ZAMDAPP", "AMTRIP"],
      image: "assets/img/uth-main-entrance.jpg",
      imageAlt: "University Teaching Hospital entrance in Zambia"
    },
    {
      country: "Tanzania",
      institutions: ["Ocean Road Cancer Institute", "Collaborating clinical and research sites"],
      summary: "Tanzania-based activities include Kaposi sarcoma research, oncology collaboration, pathology, diagnostics, training, and translational research.",
      programs: ["KEAAP", "TRMTRIP/TAMTRP"],
      image: "assets/img/orci-front.jpg",
      imageAlt: "Ocean Road Cancer Institute building in Dar es Salaam, Tanzania"
    },
    {
      country: "United States",
      institutions: ["LSU Health New Orleans", "University of Nebraska-Lincoln", "Collaborating academic partners"],
      summary: "U.S. partner institutions provide collaborative support in research design, training, laboratory science, viral oncology, pathology, cancer genomics, biostatistics, data systems, mentorship, and scientific dissemination.",
      programs: ["KEAAP", "ZAMDAPP", "AMTRIP", "TRMTRIP/TAMTRP"]
    }
  ],
  collaboratingSiteLogos: [
    {
      name: "LSU Health New Orleans",
      logos: [{ src: "assets/img/lsu-health-new-orleans-logo.png", alt: "LSU Health New Orleans logo" }],
      description: "U.S. partner institution supporting collaborative research design, training, laboratory science, viral oncology, pathology, cancer genomics, biostatistics, data systems, mentorship, and scientific dissemination."
    },
    {
      name: "Ocean Road Cancer Institute",
      logos: [{ src: "assets/img/orci-logo.png", alt: "Ocean Road Cancer Institute logo" }],
      description: "Tanzania-based oncology partner supporting Kaposi sarcoma research, clinical collaboration, pathology, diagnostics, training, and translational research activities."
    },
    {
      name: "University Teaching Hospitals / Cancer Diseases Hospital, Zambia",
      logos: [
        { src: "assets/img/uth-ministry-of-health-logo.png", alt: "Ministry of Health University Teaching Hospitals Zambia logo" },
        { src: "assets/img/cancer-diseases-hospital-logo.jpg", alt: "Cancer Diseases Hospital logo" }
      ],
      description: "Zambia-based clinical and institutional partners supporting pathology, diagnostics, laboratory, epidemiologic, clinical, and data-focused research on HIV-associated malignancies."
    }
  ],
  tanzaniaImages: [
    {
      src: "assets/img/orci-front.jpg",
      alt: "Ocean Road Cancer Institute front building in Dar es Salaam",
      caption: "Ocean Road Cancer Institute, Dar es Salaam"
    },
    {
      src: "assets/img/orci-block-d-entrance.jpg",
      alt: "Ocean Road Cancer Institute Block D entrance",
      caption: "ORCI Block D entrance"
    },
    {
      src: "assets/img/orci-heritage-building.jpg",
      alt: "Historic Ocean Road Cancer Institute building",
      caption: "Historic ORCI campus building"
    }
  ],
  zambiaImages: [
    {
      src: "assets/img/uth-main-entrance.jpg",
      alt: "University Teaching Hospital entrance in Zambia",
      caption: "University Teaching Hospitals, Zambia"
    },
    {
      src: "assets/img/kaposi-sarcoma-clinic.jpg",
      alt: "Kaposi Sarcoma Laboratory at University Teaching Hospitals in Zambia",
      caption: "Kaposi Sarcoma Laboratory, UTHs"
    },
    {
      src: "assets/img/kaposi-sarcoma-research-lab.jpg",
      alt: "Kaposi Sarcoma Clinic, Pathology, Biorepository and Laboratory at University Teaching Hospitals in Zambia",
      caption: "Kaposi Sarcoma Clinic, Pathology, Biorepository and Laboratory, UTHs"
    }
  ],
  homePillars: [
    {
      title: "Early Detection and Referral Systems",
      text: "Activities that strengthen recognition, referral, and study workflows for HIV-associated malignancies, including Kaposi sarcoma and ocular surface squamous neoplasia."
    },
    {
      title: "Pathology and Molecular Diagnostics",
      text: "Collaborative pathology, diagnostic classification, viral oncology, and molecular research capacity across consortium studies."
    },
    {
      title: "Autopsy and Biobank Research Capacity",
      text: "General descriptions of ethical tissue research infrastructure, autopsy-based discovery, specimen governance, and research readiness."
    },
    {
      title: "Training, Data Systems, and Biostatistics",
      text: "Mentorship, fellow training, REDCap/data workflows, biostatistics, and reproducible reporting support across consortium programs."
    }
  ],
  homeImpactStats: [
    { value: "3", label: "Partner countries", text: "Zambia, Tanzania, and the United States." },
    { value: "4", label: "Research and training platforms", text: "KEAAP, ZAMDAPP, AMTRIP Zambia, and TRMTRIP/TAMTRP Tanzania." },
    { value: "27", label: "Publication records", text: "Current citations listed in the publications database." },
    { value: "5", label: "Structured project areas", text: "Research, training, pathology, tissue research capacity, and data systems." }
  ],
  nihFunding: {
    title: "NIH Funding and Supported Programs",
    intro: "The consortium's research, training, and capacity-building activities have been supported through NIH-funded programs focused on HIV-associated cancers, AIDS malignancies, pathology, cancer diagnostics, and research training in Zambia, Tanzania, and the United States. These programs have supported collaborative research infrastructure, trainee development, laboratory and pathology capacity, and multi-country studies addressing HIV-associated malignancies in Sub-Saharan Africa.",
    programs: [
      {
        acronym: "KEAAP",
        fullName: "Kaposi Sarcoma in the Era of ART in Africa Program",
        award: "U54CA277846",
        institute: "National Cancer Institute",
        duration: "2024-2028",
        focus: "Kaposi sarcoma outcomes, early detection, diagnosis, treatment pathways, and HIV-associated cancer research in Zambia and Tanzania."
      },
      {
        acronym: "ZAMDAPP",
        fullName: "Zambia AIDS Malignancies Diagnosis and Pathogenesis Program",
        award: "U54CA221204",
        institute: "National Cancer Institute",
        duration: "2017-2025",
        focus: "AIDS malignancies diagnosis, pathogenesis, pathology, viral oncology, Kaposi sarcoma, ocular surface squamous neoplasia, and HIV-associated cancer research in Zambia."
      },
      {
        acronym: "AMTRIP Zambia",
        fullName: "AIDS Malignancies Training and Research International Program",
        award: "D43TW010354",
        institute: "Fogarty International Center, with NIH partner support from the National Cancer Institute",
        duration: "2022-2026",
        focus: "Research training and capacity strengthening in AIDS malignancies, pathology, cancer diagnostics, and HIV-associated cancer research in Zambia."
      },
      {
        acronym: "TAMTRP / TRMTRIP",
        fullName: "Tanzania AIDS Malignancies Training and Research Program",
        award: "D43TW012277",
        institute: "Fogarty International Center, with NIH partner support from the National Cancer Institute",
        duration: "2022-2027",
        focus: "Research training and capacity strengthening in AIDS malignancies and HIV-associated cancer research in Tanzania, including collaboration with Ocean Road Cancer Institute."
      }
    ],
    associatedTitle: "Associated NIH Support",
    associated: [
      {
        acronym: "AITRP",
        fullName: "AIDS International Training and Research Program",
        award: "D43TW001429",
        note: "Earlier Fogarty-supported training program that contributed to the research training foundation for investigators involved in later AIDS malignancies and HIV-associated cancer programs."
      },
      {
        acronym: "Fred & Pamela Buffett Cancer Center Support Grant",
        fullName: "Cancer Center Support Grant",
        award: "P30CA036727",
        institute: "National Cancer Institute",
        note: "Associated cancer center support grant appearing in related publications and institutional research support acknowledgements."
      }
    ]
  },
  fellows: [
    { name: "Fellow Name Placeholder", country: "Zambia", program: "AMTRIP", period: "2026-present", area: "Pathology, diagnostics, and HIV-associated cancer research", bio: "Short public bio placeholder for team review.", output: "Publication or project output placeholder", role: "Current role placeholder" },
    { name: "Fellow Name Placeholder", country: "Tanzania", program: "TRMTRIP/TAMTRP", period: "2026-present", area: "Oncology, epidemiology, and implementation science", bio: "Short public bio placeholder for team review.", output: "Conference abstract placeholder", role: "Current role placeholder" },
    { name: "Student Trainee Placeholder", country: "Zambia", program: "ZAMDAPP", period: "2025-present", area: "Student-led research and data quality", bio: "Short public bio placeholder for team review.", output: "Student project placeholder", role: "Training role placeholder" },
    { name: "Alumni Placeholder", country: "Zambia", program: "AMTRIP", period: "2024-2025", area: "Clinical outcomes and mentorship", bio: "Alumni public bio placeholder.", output: "Selected output placeholder", role: "Approved current role placeholder" }
  ],
  teamGovernance: {
    institutions: [
      "Ocean Road Cancer Institute (ORCI), Tanzania",
      "Muhimbili University of Health and Allied Sciences (MUHAS)",
      "Stanley S. Scott Cancer Center, LSUHSC-New Orleans, USA",
      "Tulane University School of Public Health",
      "University of Zambia School of Medicine"
    ],
    administration: [
      { name: "Dr. Charles Wood", role: "Principal Investigator", affiliation: "LSU", image: "assets/img/profile-placeholder.svg", orcid: "" },
      { name: "Dr. Owen Ngalamika", role: "Principal Investigator", affiliation: "University Teaching Hospitals", image: "assets/img/profile-placeholder.svg", orcid: "" },
      { name: "Dr. Julius Mwaiselage", role: "Principal Investigator", affiliation: "Ocean Road Cancer Institute", image: "assets/img/profile-placeholder.svg", orcid: "" },
      { name: "Dr. Salum Lidenge", role: "Program Coordinator, Tanzania", affiliation: "Ocean Road Cancer Institute, Dar es Salaam, Tanzania", image: "assets/img/profile-placeholder.svg", orcid: "" }
    ],
    zambiaAdministrativeCore: [
      { name: "Mr. Irwin Kabinje", role: "Project Coordinator, Zambia", affiliation: "Zambia Administrative Core", image: "assets/img/profile-placeholder.svg", orcid: "" }
    ],
    steeringAdvisory: [
      { name: "Dr. Augusto Ochoa", role: "Chair, Steering / Advisory Committee", affiliation: "Department of Interdisciplinary Oncology, LSU Health New Orleans", image: "assets/img/profile-placeholder.svg", orcid: "" },
      { name: "Dr. Mary Mayige", role: "Steering / Advisory Committee Member", affiliation: "Tanzania National Institute for Medical Research", image: "assets/img/profile-placeholder.svg", orcid: "" },
      { name: "Dr. Andrea Pembe", role: "Steering / Advisory Committee Member", affiliation: "Muhimbili University of Health and Allied Sciences (MUHAS)", image: "assets/img/profile-placeholder.svg", orcid: "" },
      { name: "Dr. Khamza Maunda", role: "Steering / Advisory Committee Member", affiliation: "Ocean Road Cancer Institute (ORCI)", image: "assets/img/profile-placeholder.svg", orcid: "" },
      { name: "Dr. Nicolas Mwale", role: "Steering / Advisory Committee Member", affiliation: "Assistant Dean, University of Zambia School of Medicine", image: "assets/img/profile-placeholder.svg", orcid: "" },
      { name: "Dr. Victoria Seewaldt", role: "Steering / Advisory Committee Member", affiliation: "Department of Population Sciences, City of Hope", image: "assets/img/profile-placeholder.svg", orcid: "" },
      { name: "Dr. William Bertrand", role: "Steering / Advisory Committee Member", affiliation: "School of Public Health, Tulane University", image: "assets/img/profile-placeholder.svg", orcid: "" },
      { name: "Dr. Aaron Mujajati", role: "Steering / Advisory Committee Member", affiliation: "Consultant Internal Medicine Physician, University of Zambia School of Medicine", image: "assets/img/profile-placeholder.svg", orcid: "" }
    ]
  },
  organizationChart: {
    image: "assets/img/consortium-organization-chart.png",
    alt: "Consortium organization chart showing principal investigators, steering committee, external advisory panel, administrative core, data management and integration core, developmental core, and project teams.",
    sections: [
      {
        title: "Principal Investigators",
        type: "Leadership",
        people: [
          { name: "Charles Wood", affiliation: "LSU" },
          { name: "Owen Ngalamika", affiliation: "UTH" },
          { name: "Julius Mwaiselage", affiliation: "ORCI" }
        ]
      },
      {
        title: "Steering Committee",
        type: "Governance",
        people: [
          { name: "Principal Investigators" },
          { name: "Associate Directors" },
          { name: "Project Leads" },
          { name: "Core Leads" }
        ]
      },
      {
        title: "External Advisory Panel",
        type: "Governance",
        people: [{ name: "External Advisory Panel" }]
      },
      {
        title: "Administrative Core",
        type: "Core",
        people: [
          { name: "Directors", role: "Principal Investigators" },
          { name: "John West", affiliation: "LSU", role: "Associate Director" },
          { name: "Catherine Chunda-Liyoka", affiliation: "UTH", role: "Associate Director" },
          { name: "John Ngowi", affiliation: "ORCI", role: "Associate Director" }
        ]
      },
      {
        title: "Data Management and Integration Core",
        type: "Core",
        people: [
          { name: "Tekeda Ferguson", affiliation: "LSU", role: "Director" },
          { name: "Stepfanie Siyumbwa", affiliation: "UTH", role: "Director" },
          { name: "Chacha Mwita", affiliation: "ORCI", role: "Director" }
        ]
      },
      {
        title: "Developmental Core",
        type: "Core",
        people: [
          { name: "Chipepo Kankasa", affiliation: "UTH", role: "Director" },
          { name: "Julius Mwaiselage", affiliation: "ORCI", role: "Director" },
          { name: "John West", affiliation: "LSU", role: "Director" }
        ]
      },
      {
        title: "Project 1: Early KS, staging, and care",
        type: "Project",
        people: [
          { name: "Crispin Kahesa", affiliation: "ORCI" },
          { name: "Susan Msadabwe", affiliation: "CDH" },
          { name: "Mike Hagensee", affiliation: "LSU" }
        ]
      },
      {
        title: "Project 2: KS immune response",
        type: "Project",
        people: [
          { name: "Salum Lidenge", affiliation: "ORCI" },
          { name: "Owen Ngalamika", affiliation: "UTH" },
          { name: "John West", affiliation: "LSU" }
        ]
      },
      {
        title: "Project 3: KS reservoirs",
        type: "Project",
        people: [
          { name: "Peter Julius", affiliation: "UTH" },
          { name: "For Yue Tso", affiliation: "LSU" },
          { name: "Angela Mlole", affiliation: "ORCI" }
        ]
      }
    ]
  },
  publications: [
    { title: "Disseminated iatrogenic upper gastrointestinal Kaposi sarcoma following prolonged steroid use in a patient with Crohn's disease: a case report", authors: "Makupa G, Serventi F, Mwakipunda L, Nnko G, Liwa E, Lidenge SJ, Herman A, Gasper L, Mwasamwaja A, Kombole B, Mremi A", year: "2026", journal: "J Med Case Rep. 2026 Mar 12;20(1):244", doi: "10.1186/s13256-026-05937-9", pubmed: "PMID: 41821115; PMCID: PMC13147781", program: "KEAAP", topic: "Kaposi sarcoma", country: "Tanzania" },
    { title: "Institutional management factors influencing compliance with National Cancer Treatment Guidelines for cervical cancer: a case study from ocean road cancer institute, Tanzania", authors: "Tupa F, Ruwaichi T, Luoga P, Mwaiselage J, Lidenge SJ, Tungu M", year: "2025", journal: "BMC Cancer. 2025 Aug 2;25(1):1259", doi: "10.1186/s12885-025-14702-y", pubmed: "PMID: 40753383; PMCID: PMC12317438", program: "KEAAP", topic: "Cervical cancer", country: "Tanzania" },
    { title: "Genotype distribution of human papillomavirus among women with cervical cancer stratified by HIV status in Tanzania", authors: "Mrema A, Ngoma M, Lugina EL, Kahakwa A, Mwita CJ, Iddy S, Rugengamizi E, Samwel K, Ngowi J, Lidenge SJ, Wood C, Mwaiselage J", year: "2025", journal: "PLoS One. 2025 Aug 1;20(8):e0322311", doi: "10.1371/journal.pone.0322311", pubmed: "PMID: 40748896; PMCID: PMC12316304", program: "KEAAP", topic: "Cervical cancer", country: "Tanzania" },
    { title: "Prevalence and impact on quality of life of dermatological disorders and their associated factors among the elderly in urban areas of Dar es Salaam, Tanzania", authors: "Muki U, Shayo G, Minja E, Bakari M, Kazema A, Lidenge SJ", year: "2025", journal: "Sci Rep. 2025 Jul 18;15(1):26019", doi: "10.1038/s41598-025-06166-8", pubmed: "PMID: 40676040; PMCID: PMC12271310", program: "KEAAP", topic: "Dermatology", country: "Tanzania" },
    { title: "Factors associated with depression among women living with HIV and cervical cancer in Tanzania: a cross-sectional study", authors: "Mrema A, Tarimo Q, Lidenge SJ, Shungu R, Noah H", year: "2026", journal: "Ecancermedicalscience. 2026", doi: "DOI not added", pubmed: "PubMed not added", program: "KEAAP", topic: "Cervical cancer", country: "Tanzania" },
    { title: "The social and clinical profile of patients with ocular surface squamous cell carcinoma in Tanzania", authors: "Malangwa G, Banzi MO, Makupa G, Nnko G, Mwakipunda L, Rugengemanzi E, Karia A, Ramadhan A, Mashashi G, Idrisa C, Gisiri M, Kashabano J, Mabruk NA, Moturi M, Mushi B, Ndumbalo J, Kahesa C, Maunda K, DeBoer RJ, Mmbaga E, Lugina EL", year: "2026", journal: "BMC Cancer. 2026 May 30. Epub ahead of print", doi: "10.1186/s12885-026-16178-w", pubmed: "PMID: 42218433", program: "KEAAP", topic: "OSSN", country: "Tanzania" },
    { title: "Clinical and Pathologic Presentation of Primary Ocular Surface Tumors among Zambians", authors: "Julius P, Siyumbwa SN, Moonga P, Maate F, Kaile T, Kang G, West JT, Wood C, Angeletti PC", year: "2021", journal: "Ocular Oncology and Pathology. 2021;7(2):108-120", doi: "10.1159/000511610", pmid: "33869164", pmcid: "PMC8024974", program: "ZAMDAPP", topic: "OSSN", country: "Zambia", categoryIds: ["ossn-pathology-viral-etiology"] },
    { title: "Epstein-Barr Virus, but not human Papillomavirus, is associated with preinvasive and invasive ocular surface squamous neoplasia in Zambian patients", authors: "Julius P, Siyumbwa SN, Moonga P, Maate F, Kaile T, Haynatski G, Minhas V, Snow J, Peterson K, Gihozo P, Streeter S", year: "2022", journal: "Frontiers in Oncology. 2022;12:864066", doi: "10.3389/fonc.2022.864066", pmid: "35494029", pmcid: "PMC9047892", program: "ZAMDAPP", topic: "OSSN", country: "Zambia", categoryIds: ["ossn-pathology-viral-etiology"] },
    { title: "Yes-associated protein-1 overexpression in ocular surface squamous neoplasia; a potential diagnostic marker and therapeutic target", authors: "Julius P, Siyumbwa SN, Maate F, Moonga P, Kang G, Kaile T, West JT, Wood C, Angeletti PC", year: "2023", journal: "Frontiers in Oncology. 2023;13:1213426", doi: "10.3389/fonc.2023.1213426", pmid: "37476371", pmcid: "PMC10354641", program: "ZAMDAPP", topic: "OSSN", country: "Zambia", categoryIds: ["ossn-pathology-viral-etiology"] },
    { title: "Co-infection and Co-localization of Kaposi sarcoma-associated herpesvirus and Epstein-Barr virus in HIV-Associated Kaposi Sarcoma: A Case Report", authors: "Julius P, Kang G, Siyumbwa S, Musumali J, Tso Y, Ngalamika O, Kaile T, Maate F, Moonga P, West JT, Angeletti P", year: "2023", journal: "Frontiers in Cellular and Infection Microbiology. 2023;13:1270935", doi: "10.3389/fcimb.2023.1270935", pmid: "37928187", pmcid: "PMC10623342", program: "ZAMDAPP", topic: "Kaposi sarcoma", country: "Zambia", categoryIds: ["ks-hiv-treatment-outcomes", "ossn-pathology-viral-etiology"] },
    { title: "Accuracy of diagnosing early ocular surface squamous neoplasia using methylene blue in Zambia", authors: "Morapelo A, Julius PD, Munachonga EM, Siyumbwa SN, Moonga P", year: "2024", journal: "African Vision and Eye Health. 2024;83(1):897", doi: "10.4102/aveh.v83i1.897", pmid: "", pmcid: "", program: "ZAMDAPP", topic: "OSSN", country: "Zambia", categoryIds: ["ossn-pathology-viral-etiology"] },
    { title: "Upregulation of cell surface glycoproteins in correlation with KSHV LANA in the Kaposi sarcoma tumor microenvironment", authors: "Privatt SR, Ngalamika O, Zhang J, Li Q, Wood C, West JT", year: "2023", journal: "Cancers. 2023;15(7):2171", doi: "", pmid: "", pmcid: "", program: "ZAMDAPP", topic: "Kaposi sarcoma", country: "Zambia", categoryIds: ["ks-hiv-treatment-outcomes"] },
    { title: "Elevated iNOS and 3'-nitrotyrosine in Kaposi's sarcoma tumors and mouse model", authors: "Vladimirova O, Soldan S, Su C, Kossenkov A, Ngalamika O, Tso FY, West JT, Wood C, Lieberman PM", year: "2023", journal: "Tumour Virus Research. 2023;15:200259", doi: "", pmid: "", pmcid: "", program: "ZAMDAPP", topic: "Kaposi sarcoma", country: "Zambia", categoryIds: ["ks-hiv-treatment-outcomes"] },
    { title: "Antibody profiling and predictive modeling discriminate between Kaposi sarcoma and asymptomatic KSHV infection", authors: "Bennett SJ, Yalcin D, Privatt SR, Ngalamika O, Lidenge SJ, West JT, Wood C", year: "2024", journal: "PLoS Pathogens. 2024;20(2):e1012023", doi: "", pmid: "", pmcid: "", program: "ZAMDAPP", topic: "KSHV", country: "Zambia", categoryIds: ["ks-hiv-treatment-outcomes"] },
    { title: "Brain is a potential sanctuary for subtype C HIV-1 irrespective of ART treatment outcome", authors: "Tso FY, Kang G, Kwon EH, Julius P, Li Q, West JT, Wood C", year: "2018", journal: "PLoS One. 2018;13(7)", doi: "", pmid: "", pmcid: "", program: "ZAMDAPP", topic: "HIV neuropathogenesis", country: "Zambia", categoryIds: ["hiv-neuropathogenesis-coinfections"] },
    { title: "Prevalence of Human Immunodeficiency Virus, Hepatitis B, and Hepatitis C viral infections among forensic autopsy cases at the University Teaching Hospital in Lusaka, Zambia", authors: "Himwaze C, Mucheleng'anga L, Siyumbwa SN, Kaile T, Julius P", year: "2020", journal: "Forensic Science International: Reports. 2020;2:100133", doi: "", pmid: "", pmcid: "", program: "ZAMDAPP", topic: "Coinfections", country: "Zambia", categoryIds: ["hiv-neuropathogenesis-coinfections"] },
    { title: "Systematic post-mortem analysis of brain tissue from an HIV-1 subtype C viremic decedent revealed a paucity of infection and pathology", authors: "Musumali J, Julius P, Siyumbwa SN, Yalcin D, Kang G, Munsaka S, West JT, Wood C", year: "2022", journal: "Journal of NeuroVirology. 2022;28(4-6):527-536", doi: "", pmid: "", pmcid: "", program: "ZAMDAPP", topic: "HIV neuropathogenesis", country: "Zambia", categoryIds: ["hiv-neuropathogenesis-coinfections"] },
    { title: "Subtype C HIV-1 reservoirs throughout the body in ART-suppressed individuals", authors: "Liu Z, Julius P, Kang G, West JT, Wood C", year: "2022", journal: "JCI Insight. 2022;7(20)", doi: "", pmid: "", pmcid: "", program: "ZAMDAPP", topic: "HIV reservoirs", country: "Zambia", categoryIds: ["hiv-neuropathogenesis-coinfections"] },
    { title: "High-risk human papillomavirus-associated vulvar neoplasia among women living with human immunodeficiency virus in Zambia", authors: "Maate F, Julius P, Siyumbwa S, Pinder L, Kaile T, Mwanahamuntu M, Parham G", year: "2022", journal: "African Journal of Laboratory Medicine. 2022;11(1):1-10", doi: "", pmid: "", pmcid: "", program: "ZAMDAPP", topic: "HPV-associated cancer", country: "Zambia", categoryIds: ["hiv-neuropathogenesis-coinfections"] },
    { title: "Cannabis use associates with reduced proviral burden and inflammatory cytokine in tissues from men with clade C HIV-1 on suppressive antiretroviral therapy", authors: "Liu Z, Julius P, Himwaze CM, Mucheleng'anga LA, Chapple AG, West JT, Wood C", year: "2024", journal: "The Journal of Infectious Diseases. 2024;229(5):1306-1316", doi: "", pmid: "", pmcid: "", program: "ZAMDAPP", topic: "HIV reservoirs", country: "Zambia", categoryIds: ["hiv-neuropathogenesis-coinfections"] },
    { title: "Limited HIV-associated neuropathologies and lack of immune activation in Sub-Saharan African individuals with late-stage subtype C HIV-1 infection", authors: "Liu Z, Julius P, Mudenda V, Kang G, Del Valle L, West JT, Wood C", year: "2024", journal: "Journal of NeuroVirology. 2024;30(3):303-315", doi: "", pmid: "", pmcid: "", program: "ZAMDAPP", topic: "HIV neuropathogenesis", country: "Zambia", categoryIds: ["hiv-neuropathogenesis-coinfections"] },
    { title: "A rare presentation of a 17-year-old female with primary colon lymphoma, presenting as intussusception: a case report", authors: "Uledi MA, Mvugalo AA, Nyondo HC, Kashabano JJ, Mashaka AB, Lugina EL", year: "2026", journal: "Ann Med Surg (Lond). 2026 May 14;88(6):3658-3662", doi: "10.1097/MS9.0000000000005139", pubmed: "PMID: 42254171; PMCID: PMC13236291", program: "KEAAP", topic: "Lymphoma", country: "Tanzania" },
    { title: "Insights Into Kaposi Sarcoma-Associated Herpesvirus-Specific Humoral Responses", authors: "Yalcin D, Eymard ED, Kiran K, Kibanga W, Liu Z, Wood C, Tso FY", year: "2025", journal: "J Med Virol. 2025 Sep;97(9):e70597", doi: "10.1002/jmv.70597", pubmed: "PMID: 40916576", program: "KEAAP", topic: "KSHV", country: "Multi-country" },
    { title: "Primary Orbital Extranodal Natural Killer/T-Cell Lymphoma in a Young African Male: A Case Report", authors: "Pupwe G, Julius P, Mumba C, Guobin K, Munsaka S, Ngalamika O", year: "2026", journal: "Case Rep Oncol. 2026 Jan 2;19(1):211-217", doi: "10.1159/000550181", pubmed: "PMID: 41613514; PMCID: PMC12851611", program: "KEAAP", topic: "Lymphoma", country: "Zambia" },
    { title: "CD4 and CD8 T-cell lymphocytes from penile squamous cell carcinoma tumors are more differentiated with higher PD-1 expression compared to lymphocytes in peripheral circulation", authors: "Mumba C, Mwale NK, Mapulanga V, Ngalamika O", year: "2026", journal: "Immunol Lett. 2026 Feb;277:107099", doi: "DOI not added", pubmed: "PubMed not added", program: "KEAAP", topic: "Penile cancer", country: "Zambia" },
    { title: "Low yield of pathological lymph node metastasis among patients with invasive penile squamous cell carcinoma in the context of high HIV burden: evidence from a prospective cohort study in Zambia", authors: "Mapulanga V, Ngalamika O, Mumba C, Muhimbe Z, Pettaway CA, Bowa K, Sinkala E", year: "2026", journal: "Front Urol. 2026 Feb 13;6:1727689", doi: "DOI not added", pubmed: "PubMed not added", program: "KEAAP", topic: "Penile cancer", country: "Zambia" },
    { title: "Smoking and presence of human papillomavirus correlates with lymphocyte density in the stroma of penile squamous cell carcinoma", authors: "Mumba C, Mapulanga V, Mwale NK, Ngalamika O", year: "2025", journal: "Front Oncol. 2025 Mar 31;15:1568764", doi: "DOI not added", pubmed: "PubMed not added", program: "KEAAP", topic: "Penile cancer", country: "Zambia" }
  ],
  news: [
    { title: "KEAAP progress shared at AORTIC 2025", type: "Dissemination", date: "2025", summary: "KEAAP progress and impact were communicated during the AORTIC meeting held in Tunisia in October 2025." },
    { title: "Project 3 preliminary findings presented at CROI 2026", type: "Conference", date: "2026", summary: "Project 3 preliminary findings were presented as a poster at the Conference on Retroviruses and Opportunistic Infections (CROI) 2026 in Denver, Colorado. A manuscript on these findings is in preparation." },
    { title: "KSHV workshop presentations planned for Hamburg, Germany", type: "Conference", date: "2026", summary: "Selected Project 2 and Project 3 findings are planned for presentation at the 2026 International Workshop on KSHV and Related Agents in Hamburg, Germany." },
    { title: "Tanzania research updates shared at ORCI, MUHAS, and Tanzania Oncology Society meetings", type: "Dissemination", date: "2026", summary: "Project 2-related data and research updates were reported through the ORCI International Conference, the MUHAS Scientific Conference in Dar es Salaam, and the Tanzania Oncology Society annual meeting." },
    { title: "2026 publications list added", type: "Publications", date: "2026", summary: "The Publications page reflects the current publication list, with DOI and PubMed information included in citation cards." }
  ],
  trainingAreas: ["Research methods", "Biostatistics", "Data management", "REDCap", "Pathology", "Molecular diagnostics", "Viral oncology", "Cancer genomics", "Bioinformatics", "Scientific writing", "Ethics and regulatory training"],
  dataCoreFunctions: ["REDCap project design and maintenance", "Data dictionaries and case report forms", "Data quality checks", "Query resolution workflows", "Data harmonization across countries", "Statistical analysis plans", "Reproducible reports", "Manuscript tables and figures", "Training in data management and analysis", "Study monitoring and documentation"],
  pathologySections: ["OSSN pathology", "Kaposi sarcoma pathology", "Tissue diagnostics", "Autopsy and cause-of-death research", "Biobank and tissue systems", "Training in pathology research methods"]
};

const SITE_I18N = {
  en: {
    langName: "English",
    altLangName: "Kiswahili",
    reviewNote: "",
    siteTitle: "KEAAP-ZAMDAPP HIV-Associated Cancer Research Consortium",
    shortTitle: "HIV Cancer Research Consortium",
    tagline: "A collaborative research and training platform strengthening HIV-associated cancer research, pathology, diagnostics, biostatistics, and training capacity across Zambia, Tanzania, and U.S. partner institutions.",
    nav: [
      ["Home", "index.html", "home"],
      ["About", "about.html", "about"],
      ["Programs", "programs.html", "programs"],
      ["Projects", "projects.html", "projects"],
      ["Sites", "sites.html", "sites"],
      ["Facilities", "facilities.html", "facilities"],
      ["Fellows & Training", "training.html", "training"],
      ["Organization", "organization.html", "organization"],
      ["Publications", "publications.html", "publications"],
      ["News", "news.html", "news"],
      ["Contact", "contact.html", "contact"]
    ],
    labels: {
      skip: "Skip to content",
      menu: "Menu",
      language: "Language",
      primaryNav: "Primary navigation",
      learnMore: "Learn More",
      viewAll: "View All",
      filter: "Filter",
      search: "Search",
      all: "All",
      program: "Program",
      country: "Country",
      theme: "Theme",
      status: "Status",
      year: "Year",
      topic: "Topic",
      clear: "Clear filters",
      noResults: "No records match the current filters.",
      placeholder: "Item",
      profileAlt: "Profile image",
      siteAlt: "Research site image",
      exportCitation: "Export citation",
      submitInquiry: "Submit inquiry",
      name: "Name",
      email: "Email",
      institution: "Institution",
      interest: "Area of interest",
      message: "Message",
      mission: "Mission",
      vision: "Vision",
      crossCutting: "Cross-cutting sections",
      suggestedProjects: "Related project cards",
      type: "Type",
      programFocus: "Program focus",
      relatedProjects: "Related projects",
      leads: "Leads",
      relatedOutputs: "Related outputs",
      zamdappInformation: "ZAMDAPP Information",
      zamdappInformationIntro: "",
      keyInstitutions: "Key institutions",
      fellowsGallery: "Fellows gallery",
      trainingAreas: "Training areas",
      studentProjects: "Student projects",
      mentorshipModel: "Mentorship model",
      coreFunctions: "Core functions",
      subsections: "Subsections",
      publicContact: "Contact details",
      publicContactText: "Please use the inquiry form for collaboration, training, publication, and program-related questions.",
      biobankResearch: "Biobank / tissue research",
      searchProjects: "Search projects",
      projectFilters: "Explore the portfolio",
      projectFiltersText: "",
      viewDetails: "View summary",
      moreInformation: "More Information",
      projectStatus: "Status",
      projectArea: "Research area",
      regionalTrainingInitiatives: "Regional training initiatives",
      zamdappIncludesTraining: "Includes regional training initiatives, including AMTRIP Zambia and TRMTRIP/TAMTRP Tanzania."
    },
    pages: {
      home: {
        eyebrow: "HIV-associated cancer research and training",
        title: "HIV-Associated Cancer Research Across Zambia, Tanzania, and the United States",
        intro: "A collaborative research and training consortium advancing early detection, pathology, autopsy-based discovery, biobanking readiness, data systems, and research training for HIV-associated malignancies in Sub-Saharan Africa.",
        primary: ["Explore Research", "programs.html"],
        secondary: ["View Publications", "publications.html"],
        tertiary: ["Meet the Consortium", "about.html"],
        introTitle: "Advancing locally grounded research through international collaboration",
        introText: "The consortium brings together investigators, clinicians, pathologists, laboratory scientists, data specialists, and trainees working to improve public knowledge and research capacity for HIV-associated cancers in Sub-Saharan Africa.",
        pillarTitle: "Research pillars",
        pillarIntro: "",
        programTitle: "Research and training programs",
        themeTitle: "Cross-cutting research themes",
        whereTitle: "Where we work",
        whereIntro: "Consortium activities are organized across Zambia, Tanzania, and U.S. partner institutions, with country-specific summaries of research and training activity.",
        siteTitle: "Collaborating institutions",
        siteIntro: "",
        impactTitle: "Consortium at a glance",
        impactIntro: "",
        trainingTitle: "Training the next generation of African cancer researchers",
        trainingText: "The consortium supports fellows, students, clinicians, scientists, and data teams through mentorship, research methods training, laboratory and pathology capacity strengthening, data management support, and collaborative research projects.",
        publicationsTitle: "Selected publications and outputs",
        contactTitle: "Collaborate with the consortium",
        contactText: "Inquiries about research collaboration, training, publications, and institutional partnerships can be directed through the contact page.",
        contactPrimary: ["Contact Us", "contact.html"],
        contactSecondary: ["View Sites", "sites.html"]
      },
      about: {
        eyebrow: "About",
        title: "About the Consortium",
        intro: "The consortium is a collaborative HIV-associated cancer research and training platform connecting investigators and institutions in Zambia, Tanzania, and the United States.",
        body: "",
        mission: "To strengthen locally led HIV-associated cancer research, diagnostics, data systems, and training capacity across Zambia and Tanzania through equitable international collaboration.",
        vision: "To contribute to improved cancer research capacity, earlier diagnosis, stronger evidence generation, and better outcomes for people affected by HIV-associated malignancies in sub-Saharan Africa.",
        thesisEyebrow: "Consortium model",
        thesisTitle: "A partnership built around place, people, and research capacity",
        thesisText: "The consortium brings together African and U.S. investigators, clinicians, pathologists, laboratory scientists, data teams, and trainees working across institutions where HIV-associated cancers remain a major public-health concern.",
        placeTitle: "Research grounded in collaborating institutions",
        placeText: "Zambia and Tanzania are not presented as field sites at the edge of the work. They are institutional centers of clinical care, pathology, diagnostics, training, data systems, and locally led cancer research.",
        valuesTitle: "Core values",
        valuesIntro: "These principles shape how the consortium approaches collaboration, training, data, tissue research, publication, and public communication.",
        values: ["Scientific rigor", "Equity in collaboration", "Local leadership", "Capacity strengthening", "Ethical research", "Data quality", "Sustainable training", "Public health impact"],
        valueDetails: [
          ["Scientific rigor", "Research questions, methods, data systems, and dissemination are expected to meet high scientific standards."],
          ["Equity in collaboration", "Partnerships should recognize local expertise, shared authorship, institutional priorities, and reciprocal training."],
          ["Local leadership", "Programs support African investigators, trainees, clinicians, and technical teams as leaders in cancer research."],
          ["Ethical research", "The consortium emphasizes responsible conduct, governance, privacy, and respectful tissue and data practices."],
          ["Sustainable training", "Mentorship, degree pathways, workshops, and technical training are designed to strengthen long-term institutional capacity."],
          ["Public health impact", "The work is oriented toward evidence, diagnostics, earlier recognition, and research capacity for HIV-associated malignancies."]
        ],
        imagePanelTitle: "People, institutions, and research environments",
        imagePanelText: "Existing consortium photography shows the institutional settings and training communities that anchor the work across Tanzania and Zambia.",
        images: [
          { src: "assets/img/orci-front.jpg", alt: "Ocean Road Cancer Institute building in Dar es Salaam, Tanzania", caption: "Ocean Road Cancer Institute, Tanzania" },
          { src: "assets/img/uth-main-entrance.jpg", alt: "University Teaching Hospital entrance in Zambia", caption: "University Teaching Hospitals, Zambia" },
          { src: "assets/img/kaposi-sarcoma-research-lab.jpg", alt: "Kaposi Sarcoma Clinic, Pathology, Biorepository and Laboratory at University Teaching Hospitals in Zambia", caption: "Kaposi Sarcoma Clinic, Pathology, Biorepository and Laboratory, UTHs" }
        ],
        countryLabel: "Consortium countries",
        heroImage: { src: "assets/img/tamtrp-orci-team.jpg", alt: "TAMTRP and ORCI team members at Ocean Road Cancer Institute", caption: "TAMTRP and ORCI training community" },
        spotlightPrompt: "Highlight for more",
        spotlightInstruction: "Choose a partnership story",
        spotlights: [
          {
            label: "Full Consortium",
            title: "Full consortium story",
            text: "Placeholder for an approved full-consortium story connecting Zambia, Tanzania, and United States partners through HIV-associated cancer research, training, pathology, data systems, and institutional collaboration.",
            src: "assets/img/tamtrp-orci-team.jpg",
            alt: "TAMTRP and ORCI team members at Ocean Road Cancer Institute",
            caption: "Full consortium story placeholder"
          },
          {
            label: "Zambia",
            title: "Zambia: clinical, pathology, and laboratory research capacity",
            text: "Zambia anchors consortium work through University Teaching Hospitals, Cancer Diseases Hospital, University of Zambia partners, and teams working across clinical research, pathology, diagnostics, Kaposi sarcoma, OSSN, data quality, and training.",
            src: "assets/img/uth-main-entrance.jpg",
            alt: "University Teaching Hospital entrance in Zambia",
            caption: "University Teaching Hospitals, Zambia"
          },
          {
            label: "Tanzania",
            title: "Tanzania: oncology care, training, and institutional research infrastructure",
            text: "Tanzania activities are centered around Ocean Road Cancer Institute and collaborating academic partners, with work spanning oncology, pathology, research training, autopsy and tissue research capacity, and HIV-associated cancer studies.",
            src: "assets/img/orci-front.jpg",
            alt: "Ocean Road Cancer Institute building in Dar es Salaam, Tanzania",
            caption: "Ocean Road Cancer Institute, Tanzania"
          },
          {
            label: "United States",
            title: "United States: academic partnership and methodological support",
            text: "U.S. partner institutions contribute academic collaboration, mentorship, laboratory and analytic expertise, data systems, biostatistics, and training support while working with African-led research priorities and institutional leadership.",
            src: "assets/img/lsu-health-new-orleans-logo.png",
            alt: "LSU Health New Orleans logo",
            caption: "United States academic partner institutions",
            fit: "contain"
          }
        ],
        workTitle: "How the consortium works",
        workIntro: "",
        fundingContextTitle: "Funding and institutional context",
        fundingContextIntro: "",
        sections: [["Partner Institutions", "The consortium connects collaborating institutions in Zambia, Tanzania, and the United States through research, training, pathology, diagnostics, and data systems."], ["Research Approach", "The consortium emphasizes African-priority driven questions, cross-country collaboration, rigorous methods, and scholarly dissemination."], ["Training Approach", "The training model emphasizes mentorship, hands-on research participation, scientific writing, data quality, laboratory and pathology skills, and locally relevant cancer research questions."]]
      },
      programs: { eyebrow: "Programs", title: "Programs that anchor the consortium", intro: "KEAAP and ZAMDAPP serve as parent research platforms, with linked projects, training initiatives, cores, pathology sections, and publication structures. AMTRIP Zambia and TRMTRIP/TAMTRP Tanzania are presented as regional training initiatives under ZAMDAPP." },
      projects: {
        eyebrow: "Projects",
        title: "Consortium Project Portfolio",
        intro: "Our research portfolio brings together clinical, pathology, laboratory, epidemiologic, biostatistical, and training projects across Zambia, Tanzania, and U.S. partner institutions. Projects are organized by program, country, and research theme to help visitors understand the scope of the consortium's work.",
        groups: {
          keaap: { title: "KEAAP Projects", intro: "Kaposi sarcoma and KSHV-focused research conducted through the KEAAP collaborative platform." },
          zamdapp: { title: "ZAMDAPP Projects", intro: "Zambia-led research on HIV-associated malignancies, diagnostics, pathology, and cancer outcomes." },
          training: { title: "Training Projects", intro: "Fellow, student, and trainee research activities supported through AMTRIP and TRMTRIP/TAMTRP." },
          pathology: { title: "Pathology and Diagnostic Research", intro: "Pathology, diagnostic strengthening, OSSN, POT, and tissue research capacity sections." },
          data: { title: "Data Management and Biostatistics Core", intro: "Cross-program data management, biostatistics, harmonization, reporting, and study support." }
        }
      },
      sites: { eyebrow: "Sites", title: "Collaborating countries and institutions", intro: "Consortium activities are organized across Zambia, Tanzania, and U.S. partner institutions." },
      facilities: {
        eyebrow: "Facilities",
        title: "Laboratory, Pathology, Biorepository, and Data Facilities",
        intro: "The consortium uses clinical, laboratory, pathology, biorepository, autopsy, data, and training infrastructure across Zambia, Tanzania, and U.S. partner institutions.",
        typesTitle: "Facility types",
        servicesTitle: "Services and capabilities"
      },
      training: { eyebrow: "Fellows & Training", title: "Fellows and Training", intro: "Fellows, student trainees, clinicians, laboratory scientists, pathologists, and data-focused teams participate in mentorship, workshops, degree training, and project-based research." },
      organization: { eyebrow: "Organization", title: "Consortium Organization", intro: "The consortium structure brings together principal investigators, project teams, core leadership, the steering committee, and the external advisory panel.", directoryTitle: "Organization Directory", directoryIntro: "Structured listing of the leadership, advisory, core, and project groups shown in the organization chart." },
      publications: { eyebrow: "Publications", title: "Publication database", intro: "Search and filter scholarly outputs by program, year, topic, and country. Citations include DOI, PMID, and PMCID details." },
      news: { eyebrow: "News", title: "News and Updates", intro: "Updates for training workshops, fellows' achievements, publications, conference presentations, new collaborations, and program milestones." },
      contact: { eyebrow: "Contact", title: "Contact the consortium", intro: "For collaboration, training, publication, or program-related inquiries, please contact the consortium team using the form below.", formTitle: "Program inquiry", consent: "I consent to being contacted about this inquiry.", success: "Thank you. The consortium team will review your inquiry." },
      "data-core": { eyebrow: "Core", title: "Data Management and Biostatistics Core", intro: "The Data Management and Biostatistics Core supports high-quality research through database development, REDCap systems, data quality control, statistical analysis, reproducible reporting, study monitoring, and manuscript and grant support.", note: "The core supports study workflows, harmonization, analysis planning, and reporting across consortium programs." },
      pathology: { eyebrow: "Pathology / POT", title: "Pathology and Diagnostic Research", intro: "The pathology section supports diagnostic strengthening and research on HIV-associated and infection-related malignancies, including pathology review, tissue-based research, diagnostic classification, tumor characterization, and translational research.", biobankTitle: "Biobank and Tissue Research Capacity", biobankText: "The consortium is working to strengthen ethical, high-quality tissue research systems that support pathology, diagnostics, viral oncology, and cancer research." }
    },
    footer: {
      quickLinks: "Quick links",
      programs: "Programs"
    }
  },
  sw: {
    langName: "Kiswahili",
    altLangName: "English",
    reviewNote: "",
    siteTitle: "Muungano wa Utafiti wa Saratani Zinazohusiana na VVU",
    shortTitle: "Muungano wa Utafiti wa VVU na Saratani",
    tagline: "Jukwaa shirikishi la utafiti na mafunzo linaloimarisha utafiti wa saratani zinazohusiana na VVU, patholojia, uchunguzi, biostatistiki, na uwezo wa mafunzo Zambia, Tanzania, na taasisi washirika za Marekani.",
    nav: [
      ["Nyumbani", "index.html", "home"],
      ["Kuhusu", "about.html", "about"],
      ["Programu", "programs.html", "programs"],
      ["Miradi", "projects.html", "projects"],
      ["Maeneo", "sites.html", "sites"],
      ["Miundombinu", "facilities.html", "facilities"],
      ["Watafiti & Mafunzo", "training.html", "training"],
      ["Muundo", "organization.html", "organization"],
      ["Machapisho", "publications.html", "publications"],
      ["Habari", "news.html", "news"],
      ["Mawasiliano", "contact.html", "contact"]
    ],
    labels: {
      skip: "Ruka hadi kwenye maudhui",
      menu: "Menyu",
      language: "Lugha",
      primaryNav: "Urambazaji mkuu",
      learnMore: "Jifunze zaidi",
      viewAll: "Tazama yote",
      filter: "Chuja",
      search: "Tafuta",
      all: "Zote",
      program: "Programu",
      country: "Nchi",
      theme: "Mada",
      status: "Hali",
      year: "Mwaka",
      topic: "Mada",
      clear: "Futa vichujio",
      noResults: "Hakuna rekodi zinazolingana na vichujio hivi.",
      placeholder: "Kipengee",
      profileAlt: "Picha ya wasifu",
      siteAlt: "Picha ya eneo la utafiti",
      exportCitation: "Hamisha nukuu",
      submitInquiry: "Tuma swali",
      name: "Jina",
      email: "Barua pepe",
      institution: "Taasisi",
      interest: "Eneo la kuvutiwa",
      message: "Ujumbe",
      mission: "Dhamira",
      vision: "Maono",
      crossCutting: "Sehemu zinazovuka programu",
      suggestedProjects: "Kadi za miradi inayohusiana",
      type: "Aina",
      programFocus: "Mwelekeo wa programu",
      relatedProjects: "Miradi inayohusiana",
      leads: "Viongozi",
      relatedOutputs: "Matokeo yanayohusiana",
      zamdappInformation: "Taarifa za ZAMDAPP",
      zamdappInformationIntro: "",
      keyInstitutions: "Taasisi muhimu",
      fellowsGallery: "Orodha ya watafiti",
      trainingAreas: "Maeneo ya mafunzo",
      studentProjects: "Miradi ya wanafunzi",
      mentorshipModel: "Mfumo wa ushauri",
      coreFunctions: "Majukumu ya kitengo",
      subsections: "Sehemu ndogo",
      publicContact: "Maelezo ya mawasiliano",
      publicContactText: "Tafadhali tumia fomu ya maulizo kwa maswali kuhusu ushirikiano, mafunzo, machapisho, na programu.",
      biobankResearch: "Biobank / utafiti wa tishu",
      searchProjects: "Tafuta miradi",
      projectFilters: "Chunguza orodha ya miradi",
      projectFiltersText: "",
      viewDetails: "Tazama muhtasari",
      moreInformation: "Maelezo zaidi",
      projectStatus: "Hali",
      projectArea: "Eneo la utafiti",
      regionalTrainingInitiatives: "Mipango ya mafunzo ya kikanda",
      zamdappIncludesTraining: "Inajumuisha mipango ya mafunzo ya kikanda, ikiwemo AMTRIP Zambia na TRMTRIP/TAMTRP Tanzania."
    },
    pages: {
      home: {
        eyebrow: "Utafiti na mafunzo kuhusu saratani zinazohusiana na VVU",
        title: "Utafiti wa Saratani Zinazohusiana na VVU Zambia, Tanzania, na Marekani",
        intro: "Muungano shirikishi wa utafiti na mafunzo unaoendeleza utambuzi wa mapema, patholojia, utafiti wa autopsy, maandalizi ya biobank, mifumo ya data, na mafunzo ya utafiti kuhusu saratani zinazohusiana na VVU Afrika kusini mwa Sahara.",
        primary: ["Chunguza Utafiti", "programs.html"],
        secondary: ["Tazama Machapisho", "publications.html"],
        tertiary: ["Fahamu Muungano", "about.html"],
        introTitle: "Kuendeleza utafiti unaotokana na mahitaji ya ndani kupitia ushirikiano wa kimataifa",
        introText: "Muungano huwaleta pamoja wachunguzi, wahudumu wa kliniki, wanapatholojia, wanasayansi wa maabara, wataalamu wa data, na wanafunzi wanaofanya kazi kuboresha maarifa ya umma na uwezo wa utafiti kuhusu saratani zinazohusiana na VVU Afrika kusini mwa Sahara.",
        pillarTitle: "Nguzo za utafiti",
        pillarIntro: "",
        programTitle: "Programu za utafiti na mafunzo",
        themeTitle: "Mada zinazovuka programu",
        whereTitle: "Tunapofanya kazi",
        whereIntro: "Shughuli za muungano zimepangwa katika taasisi washirika Zambia, Tanzania, na Marekani.",
        siteTitle: "Taasisi shirikishi",
        siteIntro: "",
        impactTitle: "Muungano kwa ufupi",
        impactIntro: "",
        trainingTitle: "Kufundisha kizazi kijacho cha watafiti wa saratani Afrika",
        trainingText: "Muungano unasaidia watafiti, wanafunzi, wahudumu wa kliniki, wanasayansi, na timu za data kupitia ushauri, mafunzo ya mbinu za utafiti, kuimarisha maabara na patholojia, msaada wa usimamizi wa data, na miradi shirikishi ya utafiti.",
        publicationsTitle: "Machapisho na matokeo yaliyochaguliwa",
        contactTitle: "Shirikiana na muungano",
        contactText: "Maswali kuhusu ushirikiano wa utafiti, mafunzo, machapisho, na ushirikiano wa taasisi yanaweza kutumwa kupitia ukurasa wa mawasiliano.",
        contactPrimary: ["Wasiliana Nasi", "contact.html"],
        contactSecondary: ["Tazama Maeneo", "sites.html"]
      },
      about: {
        eyebrow: "Kuhusu",
        title: "Kuhusu Muungano",
        intro: "Muungano ni jukwaa shirikishi la utafiti na mafunzo kuhusu saratani zinazohusiana na VVU linalounganisha wachunguzi na taasisi Zambia, Tanzania, na Marekani.",
        body: "",
        mission: "Kuimarisha utafiti unaoongozwa ndani kuhusu saratani zinazohusiana na VVU, uchunguzi, mifumo ya data, na uwezo wa mafunzo Zambia na Tanzania kupitia ushirikiano wa haki wa kimataifa.",
        vision: "Kuchangia uwezo bora wa utafiti wa saratani, utambuzi wa mapema, ushahidi thabiti, na matokeo bora kwa watu walioathiriwa na saratani zinazohusiana na VVU Afrika kusini mwa Sahara.",
        thesisEyebrow: "Mfumo wa muungano",
        thesisTitle: "Ushirikiano unaojengwa katika maeneo, watu, na uwezo wa utafiti",
        thesisText: "Muungano unawaleta pamoja wachunguzi wa Afrika na Marekani, madaktari, wataalamu wa patholojia, wanasayansi wa maabara, timu za data, na washiriki wa mafunzo wanaofanya kazi katika taasisi ambako saratani zinazohusiana na VVU zinaendelea kuwa suala muhimu la afya ya umma.",
        placeTitle: "Utafiti unaotegemea taasisi shirikishi",
        placeText: "Zambia na Tanzania haziwasilishwi kama maeneo ya pembeni ya kazi. Ni vituo vya taasisi kwa huduma za kliniki, patholojia, uchunguzi, mafunzo, mifumo ya data, na utafiti wa saratani unaoongozwa ndani.",
        valuesTitle: "Maadili ya msingi",
        valuesIntro: "Kanuni hizi zinaongoza namna muungano unavyoshughulikia ushirikiano, mafunzo, data, utafiti wa tishu, machapisho, na mawasiliano kwa umma.",
        values: ["Umakini wa kisayansi", "Usawa katika ushirikiano", "Uongozi wa ndani", "Kuimarisha uwezo", "Utafiti wa kimaadili", "Ubora wa data", "Mafunzo endelevu", "Athari kwa afya ya umma"],
        valueDetails: [
          ["Umakini wa kisayansi", "Maswali ya utafiti, mbinu, mifumo ya data, na usambazaji wa matokeo vinapaswa kufuata viwango thabiti vya kisayansi."],
          ["Usawa katika ushirikiano", "Ushirikiano unatambua utaalamu wa ndani, uandishi wa pamoja, vipaumbele vya taasisi, na mafunzo ya pande zote."],
          ["Uongozi wa ndani", "Programu zinaunga mkono wachunguzi, washiriki wa mafunzo, madaktari, na timu za kiufundi za Afrika kama viongozi wa utafiti wa saratani."],
          ["Utafiti wa kimaadili", "Muungano unasisitiza mwenendo wa kuwajibika, usimamizi, faragha, na matumizi ya heshima ya tishu na data."],
          ["Mafunzo endelevu", "Ushauri, njia za shahada, warsha, na mafunzo ya kiufundi yanalenga kuimarisha uwezo wa taasisi kwa muda mrefu."],
          ["Athari kwa afya ya umma", "Kazi inalenga ushahidi, uchunguzi, utambuzi wa mapema, na uwezo wa utafiti kuhusu saratani zinazohusiana na VVU."]
        ],
        imagePanelTitle: "Watu, taasisi, na mazingira ya utafiti",
        imagePanelText: "Picha zilizopo za muungano zinaonyesha mazingira ya taasisi na jamii za mafunzo zinazobeba kazi Tanzania na Zambia.",
        images: [
          { src: "assets/img/orci-front.jpg", alt: "Jengo la Ocean Road Cancer Institute Dar es Salaam, Tanzania", caption: "Ocean Road Cancer Institute, Tanzania" },
          { src: "assets/img/uth-main-entrance.jpg", alt: "Mlango wa University Teaching Hospital Zambia", caption: "University Teaching Hospitals, Zambia" },
          { src: "assets/img/kaposi-sarcoma-research-lab.jpg", alt: "Kliniki ya Kaposi Sarcoma, patholojia, biorepository, na maabara katika University Teaching Hospitals Zambia", caption: "Kaposi Sarcoma Clinic, Pathology, Biorepository and Laboratory, UTHs" }
        ],
        countryLabel: "Nchi za muungano",
        heroImage: { src: "assets/img/tamtrp-orci-team.jpg", alt: "Wanachama wa timu ya TAMTRP na ORCI katika Ocean Road Cancer Institute", caption: "Jamii ya mafunzo ya TAMTRP na ORCI" },
        spotlightPrompt: "Chagua ili kuona zaidi",
        spotlightInstruction: "Chagua simulizi ya ushirikiano",
        spotlights: [
          {
            label: "Muungano Mzima",
            title: "Simulizi ya muungano mzima",
            text: "Nafasi ya kuweka simulizi iliyoidhinishwa ya muungano mzima inayounganisha washirika wa Zambia, Tanzania, na Marekani kupitia utafiti wa saratani zinazohusiana na VVU, mafunzo, patholojia, mifumo ya data, na ushirikiano wa taasisi.",
            src: "assets/img/tamtrp-orci-team.jpg",
            alt: "Wanachama wa timu ya TAMTRP na ORCI katika Ocean Road Cancer Institute",
            caption: "Nafasi ya simulizi ya muungano mzima"
          },
          {
            label: "Zambia",
            title: "Zambia: uwezo wa utafiti wa kliniki, patholojia, na maabara",
            text: "Zambia inabeba kazi za muungano kupitia University Teaching Hospitals, Cancer Diseases Hospital, washirika wa University of Zambia, na timu zinazofanya utafiti wa kliniki, patholojia, uchunguzi, Kaposi sarcoma, OSSN, ubora wa data, na mafunzo.",
            src: "assets/img/uth-main-entrance.jpg",
            alt: "Mlango wa University Teaching Hospital Zambia",
            caption: "University Teaching Hospitals, Zambia"
          },
          {
            label: "Tanzania",
            title: "Tanzania: huduma za oncology, mafunzo, na miundombinu ya utafiti",
            text: "Shughuli za Tanzania zinajikita katika Ocean Road Cancer Institute na washirika wa kitaaluma, zikiwa na kazi katika oncology, patholojia, mafunzo ya utafiti, uwezo wa autopsy na utafiti wa tishu, na tafiti za saratani zinazohusiana na VVU.",
            src: "assets/img/orci-front.jpg",
            alt: "Jengo la Ocean Road Cancer Institute Dar es Salaam, Tanzania",
            caption: "Ocean Road Cancer Institute, Tanzania"
          },
          {
            label: "Marekani",
            title: "Marekani: ushirikiano wa kitaaluma na msaada wa mbinu",
            text: "Taasisi washirika za Marekani huchangia ushirikiano wa kitaaluma, ushauri, utaalamu wa maabara na uchambuzi, mifumo ya data, biostatistiki, na msaada wa mafunzo kwa kuzingatia vipaumbele na uongozi wa utafiti wa Afrika.",
            src: "assets/img/lsu-health-new-orleans-logo.png",
            alt: "Nembo ya LSU Health New Orleans",
            caption: "Taasisi washirika za kitaaluma Marekani",
            fit: "contain"
          }
        ],
        workTitle: "Jinsi muungano unavyofanya kazi",
        workIntro: "",
        fundingContextTitle: "Muktadha wa ufadhili na taasisi",
        fundingContextIntro: "",
        sections: [["Taasisi Washirika", "Muungano unaunganisha taasisi shirikishi Zambia, Tanzania, na Marekani kupitia utafiti, mafunzo, patholojia, uchunguzi, na mifumo ya data."], ["Mbinu ya Utafiti", "Muungano unasisitiza maswali yanayotokana na vipaumbele vya Afrika, ushirikiano wa nchi mbalimbali, mbinu thabiti, na usambazaji wa kisayansi."], ["Mbinu ya Mafunzo", "Mfano wa mafunzo unasisitiza ushauri, ushiriki wa vitendo katika utafiti, uandishi wa kisayansi, ubora wa data, na maswali ya utafiti yanayohusiana na mahitaji ya ndani."]]
      },
      programs: { eyebrow: "Programu", title: "Programu zinazoongoza muungano", intro: "KEAAP na ZAMDAPP ni majukwaa makuu ya utafiti, pamoja na miradi, mipango ya mafunzo, vitengo, sehemu za patholojia, na machapisho. AMTRIP Zambia na TRMTRIP/TAMTRP Tanzania zinaonyeshwa kama mipango ya mafunzo ya kikanda chini ya ZAMDAPP." },
      projects: {
        eyebrow: "Miradi",
        title: "Orodha ya Miradi ya Muungano",
        intro: "Orodha hii inaleta pamoja miradi ya kliniki, patholojia, maabara, epidemiolojia, biostatistiki, na mafunzo katika Zambia, Tanzania, na taasisi washirika za Marekani. Miradi imepangwa kwa programu, nchi, na mada ya utafiti ili kusaidia wageni kuelewa wigo wa kazi za muungano.",
        groups: {
          keaap: { title: "Miradi ya KEAAP", intro: "Utafiti kuhusu Kaposi sarcoma na KSHV kupitia jukwaa shirikishi la KEAAP." },
          zamdapp: { title: "Miradi ya ZAMDAPP", intro: "Utafiti unaoongozwa Zambia kuhusu saratani zinazohusiana na VVU, uchunguzi, patholojia, na matokeo ya saratani." },
          training: { title: "Miradi ya Mafunzo", intro: "Shughuli za utafiti za watafiti, wanafunzi, na washiriki wa mafunzo kupitia AMTRIP na TRMTRIP/TAMTRP." },
          pathology: { title: "Patholojia na Utafiti wa Uchunguzi", intro: "Patholojia, kuimarisha uchunguzi, OSSN, POT, na uwezo wa utafiti wa tishu." },
          data: { title: "Kitengo cha Usimamizi wa Data na Biostatistiki", intro: "Usimamizi wa data, biostatistiki, ulinganishaji wa data, ripoti, na msaada wa utafiti katika programu zote." }
        }
      },
      sites: { eyebrow: "Maeneo", title: "Nchi na taasisi shirikishi", intro: "Shughuli za muungano zimepangwa Zambia, Tanzania, na taasisi washirika za Marekani." },
      facilities: {
        eyebrow: "Miundombinu",
        title: "Maabara, Patholojia, Biorepository, na Mifumo ya Data",
        intro: "Muungano hutumia miundombinu ya kliniki, maabara, patholojia, biorepository, autopsy, data, na mafunzo katika Zambia, Tanzania, na taasisi washirika za Marekani.",
        typesTitle: "Aina za miundombinu",
        servicesTitle: "Huduma na uwezo"
      },
      training: { eyebrow: "Watafiti & Mafunzo", title: "Watafiti na Mafunzo", intro: "Watafiti, wanafunzi, wahudumu wa kliniki, wanasayansi wa maabara, wataalamu wa patholojia, na timu za data hushiriki katika ushauri, warsha, mafunzo ya shahada, na utafiti wa miradi." },
      organization: { eyebrow: "Muundo", title: "Muundo wa Muungano", intro: "Muundo wa muungano unaunganisha wachunguzi wakuu, timu za miradi, uongozi wa vitengo, kamati ya uongozi, na jopo la ushauri wa nje.", directoryTitle: "Orodha ya Muundo", directoryIntro: "Orodha ya vikundi vya uongozi, ushauri, vitengo, na miradi vinavyoonyeshwa katika chati ya muundo." },
      publications: { eyebrow: "Machapisho", title: "Hifadhidata ya machapisho", intro: "Tafuta na chuja matokeo ya kisayansi kwa programu, mwaka, mada, na nchi. Nukuu zinajumuisha maelezo ya DOI, PMID, na PMCID." },
      news: { eyebrow: "Habari", title: "Habari na Taarifa", intro: "Taarifa kuhusu warsha za mafunzo, mafanikio ya watafiti, machapisho, mawasilisho ya mikutano, ushirikiano mpya, na hatua za programu." },
      contact: { eyebrow: "Mawasiliano", title: "Wasiliana na muungano", intro: "Kwa maswali kuhusu ushirikiano, mafunzo, machapisho, au programu, tafadhali wasiliana na timu ya muungano kupitia fomu hapa chini.", formTitle: "Swali kuhusu programu", consent: "Ninakubali kuwasiliana nami kuhusu swali hili.", success: "Asante. Timu ya muungano itapitia swali lako." },
      "data-core": { eyebrow: "Kitengo", title: "Kitengo cha Usimamizi wa Data na Biostatistiki", intro: "Kitengo hiki kinaunga mkono utafiti wa ubora kupitia ujenzi wa hifadhidata, mifumo ya REDCap, udhibiti wa ubora wa data, uchambuzi wa takwimu, ripoti zinazoweza kurudiwa, ufuatiliaji wa utafiti, na msaada wa machapisho na ruzuku.", note: "Kitengo hiki kinaunga mkono mtiririko wa tafiti, ulinganishaji wa data, mipango ya uchambuzi, na ripoti katika programu za muungano." },
      pathology: { eyebrow: "Patholojia / POT", title: "Patholojia na Utafiti wa Uchunguzi", intro: "Sehemu ya patholojia inaunga mkono kuimarisha uchunguzi na utafiti wa saratani zinazohusiana na VVU na maambukizi, ikijumuisha mapitio ya patholojia, utafiti wa tishu, uainishaji wa uchunguzi, na utafiti wa translational.", biobankTitle: "Uwezo wa Biobank na Utafiti wa Tishu", biobankText: "Muungano unaimarisha mifumo ya kimaadili na yenye ubora ya utafiti wa tishu inayosaidia patholojia, uchunguzi, viral oncology, na utafiti wa saratani." }
    },
    footer: {
      quickLinks: "Viungo vya haraka",
      programs: "Programu"
    }
  }
};
