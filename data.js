/*
  UNIQUE / TIDAL POOL — PORTFOLIO CONTENT
  ---------------------------------------------------------------
  Edit this file to update your portfolio. Keep commas and quotes.
  Put photos, research figures and documents in the assets folder.
  Empty links are never displayed as working buttons.
*/
window.PORTFOLIO_DATA = {
  profile: {
    name: "Unique Desyrre A. Resiloy",
    shortName: "Unique",
    initials: "UD",
    heading: "Personal Portfolio",
    expertise: "Data Enthusiast | Natural Language Processing | Applied Statistical Research",
    location: "Bogor, Indonesia",
    photo: "assets/unique-profile.jpg",
    greeting: "Curious about data, careful about the details.",
    about: `I'm a Statistics and Data Science graduate from IPB University with a background in applied research, data analysis, and machine learning. My research has covered different areas, including socioeconomic issues, health data, and natural language processing. I mainly work with Python and R, from preparing and exploring datasets to building models, visualizing results, and writing research reports.
            
    Beyond academic research, I've worked on household surveys with BPS and MarkPlus and served as a practicum teaching assistant at IPB University. I also write data-driven articles about social issues in Eastern Indonesia, particularly those that deserve closer attention.
    
    I'm interested in work that involves exploring data, examining real-world problems, and presenting findings in ways that people can understand and use.`,
    email: "uresiloy@gmail.com",
    linkedin: "https://www.linkedin.com/in/unique-desyrre-a-resiloy/",
    github: "https://github.com/uniqueeee777",
    tableau: "https://public.tableau.com/app/profile/unique.resiloy/vizzes", 
    cv: "assets/Unique Desyrre A. Resiloy-CVupdate.pdf"
  },



education: [
  {
    study: "master",
    institution: "IPB University",
    degree: "Master of Statistics and Data Science",
    period: "2024–2026 · Bogor, Indonesia",
    gpa: "3.63",
    logo: "assets/Logo-IPB-New.png",

    academicWork: "During my master's, I worked with different types of data and methods, particularly statistical modeling, machine learning, and natural language processing. My research involved preparing datasets, building and evaluating models, and interpreting results across financial, health, and text-based applications. I also gained practical teaching experience through data science and visualization classes at IPB.",

    beyond: [
      "LPDP Scholarship recipient",
      "Research presenter at IEEE ICAIMS 2026",
      "Practicum Teaching Assistant"
    ],

    documents: [
      {
        file: "assets/icaims 2026.jpeg",
        label: "ICAIMS 2026",
        caption: "Conference presentation",
        type: "photo"
      },
      {
        file: "assets/icaims certificated 2026.jpeg",
        label: "Certificate",
        caption: "ICAIMS 2026 conference certificate",
        type: "certificate"
      }
    ],

    abstractBook: "https://drive.google.com/file/d/1b_7Mzgt3DcCEDHLetBZ0q_hK_wY5w8fr/view"
  },

  {
    study: "bachelor",
    institution: "Universitas Pattimura",
    degree: "Bachelor of Statistics",
    period: "2018–2022 · Ambon, Indonesia",
    gpa: "3.65",
    logo: "assets/Logo_Universitas_Pattimura_Terbaru.png",

    academicWork: "My undergraduate work focused on applying statistical methods to regional and socioeconomic data, particularly in Maluku. I worked on poverty modeling, public-sector budget analysis, and forecasting using regression, clustering, and time-series methods. This was also where I began writing research papers and learning how to present statistical findings beyond the classroom.",

    beyond: [
      "Research presenter at IndoMS 2021",
      "Published undergraduate research in applied statistics"
    ],

    documents: [
      {
        file: "assets/konferensi xx indoms.jpeg",
        label: "View certificate",
        caption: "IndoMS XX (2021) conference certificate",
        type: "certificate"
      }
    ]
  }
],
organizations: [
  {
    role: "Coordinator, Scientific Division",
    institution: "Statistics and Data Science Student Association · IPB University",
    period: "Nov 2024 – Dec 2025",

    description: "Coordinated academic activities and helped organize Statistics on Training (SOT), SPARK, Statistics Scholars, and StatLink with fellow committee members."
  },

  {
    role: "Coordinator, Education, Research & Community Service Division",
    institution: "HIMASTA FMIPA · Universitas Pattimura",
    period: "Nov 2019 – Nov 2020",

    description: "Helped coordinate statistics training and knowledge-sharing activities to support student academic development."
  }
],

teaching: {
  role: "Practicum Teaching Assistant",
  institution: "IPB University",
  period: "Sep–Dec 2026",

  galleryNote: "A few moments from our classes, from working through assignments to sharing what we made.",

  photos: [
    {
      src: "assets/teaching-01.jpg",
      caption: "A day with the class",
      alt: "Class photo after a student project session"
    },
    {
      src: "assets/teaching-02.jpg",
      caption: "Turning data into something visual",
      alt: "Students presenting an infographic"
    },
    {
      src: "assets/teaching-03.jpg",
      caption: "Walking through the findings",
      alt: "Student presentation during practicum"
    },
    {
      src: "assets/teaching-04.jpg",
      caption: "Talking through the numbers",
      alt: "Discussion about an analysis"
    },
    {
      src: "assets/teaching-05.jpg",
      caption: "One presentation at a time",
      alt: "Student discussing a project in class"
    },
    {
      src: "assets/teaching-06.jpg",
      caption: "Sharing what we worked on",
      alt: "Infographic discussion during a class"
    }
  ],

  courses: [
    {
      id: "data-science",
      name: "Data Science",
      period: "2026",
      label: "LEARNING MATERIALS",

      description: "I prepare teaching notes in Indonesian and English and help students work through practical exercises. Video lessons for sessions 10–13 and a Kaggle-based project for session 14 are also in the works.",

      action: "Explore materials",
      popupTitle: "Teaching materials",
      popupIntro: "A place for the learning notes and activities I have been preparing. Links will appear here once published.",

      chips: [
        "Indonesian & English",
        "Video + Kaggle in progress"
      ],

      noteTitle: "Materials before the links",
      noteText: "Will be added once they're ready to share.",

      resources: [
        {
          title: "Indonesian teaching notes",
          detail: "Learning notes and practical exercises",
          status: "Not published yet",
          url: ""
        },
        {
          title: "English teaching notes",
          detail: "English-language learning materials",
          status: "Not published yet",
          url: ""
        },
        {
          title: "Video lessons · Sessions 10–13",
          detail: "YouTube learning videos",
          status: "In production",
          url: ""
        },
        {
          title: "Kaggle project · Session 14",
          detail: "A practicum project for the final meeting",
          status: "In preparation",
          url: ""
        }
      ]
    },

    {
      id: "visdat",
      name: "Big Data Visualization",
      period: "2026",
      label: "PROJECT-BASED CLASS",

      description: "This class is mostly built around student projects. I review article drafts before submission, give feedback on infographics, and maintain a Shiny dashboard that brings the students' visualization projects together.",

      action: "Course projects",
      popupTitle: "Course projects",
      popupIntro: "Students work on articles, infographics, and interactive dashboards as part of this practicum.",

      noteTitle: "Articles, infographics & dashboards",
      noteText: "Draft reviews, feedback, and an R Shiny project gallery.",

      dashboardUrl: "https://unique7777.shinyapps.io/dashboard-visdat-2026/",

      resources: [
        {
          title: "Articles & infographics",
          detail: "Review of article drafts and feedback on infographic work",
          status: "Course activity",
          url: ""
        },
        {
          title: "R Shiny dashboards",
          detail: "Student dashboard projects collected in one place",
          status: "Live",
          url: "https://unique7777.shinyapps.io/dashboard-visdat-2026/"
        }
      ]
    }
  ]
},

fieldwork: [
  {
    organization: "BPS Maluku × Universitas Pattimura",
    period: "MAR 2020",
    title: "2020 Online Population Census",
    role: "Census Support Volunteer",
    location: "Negeri Allang, Maluku",

    logos: [
      {
        src: "assets/Logo-BPS-Fieldwork.png",
        alt: "BPS logo"
      },
      {
        src: "assets/Logo_Universitas_Pattimura_Terbaru.png",
        alt: "Universitas Pattimura logo"
      }
    ],

    description:
      "I joined the 2020 Online Population Census as a student volunteer through a collaboration between BPS Maluku and Universitas Pattimura. I worked directly with residents, including those who were unfamiliar with the online census system. The role required patience, clear communication, and the ability to adjust explanations to different people.",

    responsibilities: [
      "Assisted residents in completing the online census.",
      "Explained the information required in the census form.",
      "Helped residents navigate the digital registration process."
    ]
  },

  {
    organization: "MarkPlus Insight",
    period: "AUG–SEP 2022",
    title: "Household Balance Sheet Survey",
    role: "Enumerator · SNRT 2022",
    location: "Maluku, Indonesia",

    logos: [
      {
        src: "assets/Logo-MarkPlus-Fieldwork.png",
        alt: "MarkPlus Inc. logo",
        style: "markplus"
      }
    ],

    description:
      "I worked with households assigned by the survey team rather than selecting respondents myself. The job involved visiting people at home, following the survey guidelines, and working around different household schedules. I also used KoboToolbox for digital data collection, where keeping records accurate and organized was part of the daily work.",

    responsibilities: [
      "Conducted structured household interviews.",
      "Recorded survey responses using KoboToolbox.",
      "Checked entries for completeness before submission."
    ]
  },

  {
    organization: "Statistics Indonesia (BPS)",
    period: "OCT–NOV 2022",
    title: "REGSOSEK 2022",
    role: "Field Monitoring Officer (PML)",
    location: "Ambon, Maluku",

    logos: [
      {
        src: "assets/Logo-BPS-Fieldwork.png",
        alt: "BPS logo"
      }
    ],

    description:
      "At REGSOSEK 2022, I worked on the monitoring side of household data collection. Unlike my earlier role as an enumerator, I was responsible for checking work that had already been completed and identifying information that needed another look. The role also involved working with enumerators and returning to households when the reported information needed to be confirmed.",

    responsibilities: [
      "Reviewed survey forms for incomplete or inconsistent responses.",
      "Conducted household revisits to verify collected information.",
      "Followed up with enumerators to address problems found during field checks."
    ]
  }
],

  // Dashboard Lab remains available for future interactive projects.
  dashboardLab: [
    { title: "Research-to-Dashboard", status: "PLANNED", text: "Interactive views of selected published research, built around the results and limitations of each study.", link: "" },
    { title: "Socioeconomic Data Explorer", status: "CONCEPT", text: "A space to examine regional indicators, compare locations, and explore trends using public datasets.", link: "" },
    { title: "Tableau Practice Lab", status: "COMING LATER", text: "Hands-on Tableau work: exploring datasets, testing visual forms, and improving how findings are communicated.", link: "" }
  ],


  // Current scientific manuscripts: avoid duplicating published papers in Education.
  scientificWorks: {
    review: [
      {
        short: "From News to Policy Signals",
        title: "From News to Policy Signals: Linking Human Trafficking Narratives with District-Level Socioeconomic Conditions in East Nusa Tenggara",
        kind: "CONFERENCE MANUSCRIPT",
        venue: "Joint International Conference 2026 · IFLP & ICDSOS",
        description: "A study linking narratives in human trafficking news with district-level socioeconomic conditions across East Nusa Tenggara.",
        stage: "Submitted — awaiting acceptance decision."
      }
    ],
    progress: [
      {
        short: "Understanding Workforce Skills Development",
        title: "Understanding Workforce Skills Development Through Statistical Methods: A Systematic Review and Future Research Agenda",
        kind: "SYSTEMATIC LITERATURE REVIEW",
        venue: "Workforce skills research · 118 empirical studies",
        description: "A systematic review examining what statistical research can establish about workforce skills, their development, and how they are used at work.",
        stage: "Manuscript revision following an editorial decision."
      },
      {
        short: "Stability-Aware Model Selection for Multi-View Clustering",
        title: "Stability-Aware Model Selection for Multi-View Clustering: A Monte Carlo Evaluation and Application to Food Security in Eastern Indonesia",
        kind: "MONTE CARLO & APPLIED STATISTICS",
        venue: "Multi-view clustering · Food security in Eastern Indonesia",
        description: "A study evaluating internal clustering quality and resampling stability, followed by an application to food, climate, and accessibility indicators.",
        stage: "Research and manuscript development in progress."
      }
    ]
  },

  // Article image URLs were checked against the linked publishers in Nov 2026.
  // Browser-only code cannot reliably scrape og:image for NEW links due to CORS.
  articles: [
    {
      publisher: "Floresa",
      domain: "floresa.co",
      category: "Analysis",
      date: "OCT 22, 2026",
      longDate: "October 22, 2026",
      title: "Perdagangan Orang di NTT: Kasus yang Terungkap, Persoalan yang Terlewat",
      dek: "Data kasus hanya menunjukkan apa yang berhasil terlihat—bukan seluruh eksploitasi yang terjadi, apalagi yang gagal dicegah.",
      summary: "An analysis of the limits of recorded trafficking cases and how media narratives can complement official data in East Nusa Tenggara.",
      url: "https://floresa.co/perspektif/analisis/90461/2026/10/22/perdagangan-orang-di-ntt-kasus-yang-terungkap-persoalan-yang-terlewat",
      image: "https://floresa.co/wp-content/uploads/2026/10/signal-2026-10-16-11-44-41-340_002.jpg"
    },
    {
      publisher: "Floresa",
      domain: "floresa.co",
      category: "Analysis",
      date: "OCT 16, 2026",
      longDate: "October 16, 2026",
      title: "Dari Peta Risiko Bencana ke Perlindungan Desa",
      dek: "Peta bencana menunjukkan wilayah rawan, tetapi belum tentu mengungkap desa mana yang paling membutuhkan perlindungan.",
      summary: "An argument for reading disaster-risk maps alongside village-level needs, preparedness, and access to essential services.",
      url: "https://floresa.co/perspektif/analisis/90344/2026/10/16/dari-peta-risiko-bencana-ke-perlindungan-desa",
      image: "https://floresa.co/wp-content/uploads/2026/10/signal-2026-10-16-11-44-41-340_002.jpg"
    },
    {
      publisher: "Benua",
      domain: "benua.id",
      category: "Opinion",
      date: "NOV 05, 2026",
      longDate: "November 5, 2026",
      title: "Ketika Air dan Kapal Menentukan Pangan Maluku",
      dek: "Ketahanan pangan Maluku membutuhkan pemerataan akses, distribusi, dan kebijakan sesuai kebutuhan setiap daerah.",
      summary: "A closer look at how water access, transportation, and geography shape food security across Maluku's islands.",
      url: "https://benua.id/ketika-air-dan-kapal-menentukan-pangan-maluku/",
      image: "assets/benua-pangan-maluku.jpeg"
    }
  ],

publications: [
  {
    study: "master",
    year: "2025",
    type: "MACHINE LEARNING",
    title: "Classification of Cardiovascular and Chronic Respiratory Diseases Utilizing Ensemble Models with Data Exploration Techniques",
    source: "JIPI · 2025",
    link: "https://jurnal.stkippgritulungagung.ac.id/index.php/jipi/article/view/9311"
  },
  {
    study: "master",
    year: "2026",
    type: "NLP",
    title: "IndoBERT Optimization for Sentiment Analysis on DeepSeek App Reviews",
    source: "IJCCS · 2026",
    link: "https://journal.ugm.ac.id/ijccs/article/view/107507"
  },
  {
    study: "master",
    year: "2026",
    type: "SPATIAL STATISTICS",
    title: "From Mapping to Modeling: Spatial Statistics in Ethnobotanical Research",
    source: "Ethnobotany Research and Applications · 2026",
    link: "https://ethnobotanyjournal.org/index.php/era/article/view/8467"
  },
  {
    study: "bachelor",
    year: "2022",
    type: "FORECASTING",
    shortLabel: "Prosiding KNM XX",
    title: "Peramalan Garis Kemiskinan Kabupaten Buru Selatan Menggunakan Metode Double Exponential Smoothing dari Holt",
    source: "PCST · 2022",
    link: "https://ojs3.unpatti.ac.id/index.php/pcst/article/view/5652"
  },
  {
    study: "bachelor",
    year: "2022",
    type: "CLUSTERING",
    shortLabel: "Variance · 2022",
    title: "Pengelompokan Satuan Kerja Provinsi Maluku Berdasarkan Indikator Kinerja Pelaksanaan Anggaran Menggunakan Analisis Cluster K-Means",
    source: "Variance · 2022",
    link: "https://doi.org/10.30598/variancevol3iss2page91-98"
  },
  {
    study: "bachelor",
    year: "2022",
    type: "STATISTICS",
    shortLabel: "Parameter · 2022",
    title: "Pemodelan Persentase Penduduk Miskin di Maluku dengan Menggunakan Regresi Nonparametrik Spline",
    source: "Parameter · 2022",
    link: "https://doi.org/10.30598/parameterv1i2pp123-128"
  }
],
};
