
type Language = 'fr' | 'en' | 'rn' | 'sv'|'nl'|'de';

type TranslationValue = string | { [key: string]: TranslationValue };

type Translation = { [key: string]: TranslationValue };

const translations: Record<Language, Translation> = {
  // French Language
  fr: {
    // Navigation
    nav: {
      home: 'Accueil',
      about: 'À propos de nous',
      activities: 'Activités',
      partners: 'Partenaires',
      contact: 'Contact',
      news: 'Actualités',
      projects: 'Projets',
      youthTraining: 'Formation des jeunes',
      womenWellbeing: 'Bien-être de la femme',
      socioEconomicActivities: 'Activités socioéconomiques',
      achievements: 'Réalisations'
    },
    // Hero Section
    hero: {
      title: 'PRISMA,',
      subtitle: 'une communauté au service de la communauté !',
      engaged: 'Engagée pour',
      taglines: {
        youth: 'Emploi des jeunes',
        women: 'Les droits des femmes',
        nature: 'Le bien de la nature',
        autonomy: 'Autonomisation de la femme',
        children: 'Épanouissement des enfants'
      }
    },
    // About Section
    about: {
      marquee: 'Femmes épanouies, Jeunes ambitieux, Nature préservée',
      title: 'À PROPOS DE NOUS',
      who: 'Qui est PRISMA',
      whoText: 'PRISMA est une association au service de la communauté engagée dans la PROMOTION DES INITIATIVES SOCIOÉCONOMIQUES DU MONDE ASSOCIATIF au Burundi. Une ASBL de droit burundais.',
      vision: 'Vision',
      visionText: 'PRISMA vise à développer l\'autoformation des jeunes chômeurs, favoriser la scolarisation des enfants, aider les jeunes à faire émerger leurs talents tout en luttant contre la dégradation de l\'environnement naturel. Egalement favoriser l\'autonomie, la valorisation et la défense des droits des femmes et des enfants pour leur épanouissement dans un environnement physique et familial sain.',
      mission: 'Mission',
      missionText: 'Autoformation des jeunes chômeur, scolarisation des enfants, aider les jeunes à faire émerger leur talent par une approche participative et une organisation à base de communauté.'
    },
    // Activities Section
    activities: {
      marquee: 'AGIR POUR GUERIR, AGIR POUR PREVENIR',
      women: {
        title: "Défense des droits des Enfants et des Femmes-Bien être en général",
        description: "PRISMA se tient aux côtés des femmes et des enfants, porteurs d'une vision où chaque voix compte, chaque droit est protégé et chaque vie trouve la place qu'elle mérite ; ensemble, nous bâtissons un monde plus juste, plus solidaire et plus humain.",
        firstpoint : "Droit à la scolarité et à l'éducation (Répétitorat pour les enfants qui ont décroché du système scolaire)",
        secondpoint : "Droit à la participation",
        thirdpoint : "Hygiène et assainissement/habitation/eau potable",
        fourthpoint : "Droit à l'information",
        fifthpoint : "Droit de s'associer aux autres",
        sixthpoint : "Accès au soins de santé et promotion d'une maternité sans risques / limitation du taux de mortalité infantile",
        seventhpoint : "Prise en charge holistique des Enfants et Femmes victimes de divers abus"
      },
      youth: {
        title: "Encadrements des enfants/jeunes-Aider pour l'émergence des talents des enfants et jeunes- appui aux projets des jeunes chomeurs",
        description: "PRISMA s'engage à guider et inspirer chaque enfant et jeune, cultivant leurs talents naissants et les soutenant dans la concrétisation de leurs projets ; ensemble, nous ouvrons les portes de l'opportunité et bâtissons des trajectoires porteuses d'avenir.",
        firstpoint: "Soutien des activités sportives colonies des vacances- encadrement pendant les vacances",
        secondpoint: "Appui aux microprojets des projets des ONG des jeunes",
        thirdpoint: "Appui aux jeunes pour la scolarisation à l'étranger ou à la participation à des séminaires formatrices"
      },
      nature: {
        title: "Plantation des arbres et aménagements des propriétés privées",
        description: "PRISMA cultive un avenir plus vert en plantant des arbres et en valorisant chaque espace privé, transformant jardins et terrains en havres de vie où la nature s'épanouit et inspire le changement.",
        firspoint : "Aménagement des propriétés (courbes antiérosives herbes fourragères et fixatrices)",
        secondpoint : "Plantation d'arbres forestiers, agroforestiers et fruitiers"
      },
      explore: 'Explorer',
      mainTitle: 'ACTIVITÉS'
    },
    // Impact Section
    impact: {
        mainTitle: 'Notre Impact',
        stat1: 'Femmes soutenues',
        stat2: 'Jeunes formés',
        stat3: 'Arbres plantés',
        allAchievements: 'Toutes nos réalisations',
        partnersTitle: 'Eux aussi nous font confiance',
        familyTitle: 'TOUTE UNE FAMILLE EN ACTION'
    },
    // Contact
    contact: {
      title: 'CONTACTEZ NOUS !',
      formTitle: 'Laisser nous un message',
      name: 'Votre nom',
      email: 'Votre email',
      subject: 'Sujet',
      message: 'Votre message',
      send: 'Envoyer',
      sending: 'Envoi...'
    },
    // Newsletter
    newsletter: {
      title: 'Restez informer de tout !',
      subtitle: 'SUR NOTRE NEWSLETTER',
      placeholder: 'ENTREZ VOTRE COURRIEL',
      subscribe: 'S\'inscrire',
      subscribing: 'Envoi...',
      success: 'Merci pour votre inscription !',
      error: 'Une erreur est survenue.'
    },
    // TopBar
    topbar: {
      marquee: 'PROMOTION DES INITIATIVES SOCIOÉCONOMIQUES DU MONDE ASSOCIATIF'
    },
    //footer
    footer: {
      home: 'Accueil',
      about: 'À propos de nous',
      news: 'Actualités',
      projects: 'Projets',
      activities: 'Activités',
      youthTraining: 'Formation des jeunes',
      womenWellbeing: 'Bien-être des femmes',
      socioEconomicActivities: 'Activités socioéconomiques',
      achievements: 'Réalisations',
      partners: 'Partenaires',
      contact: 'Contact',
    }

  },
  // English Language
  en: {
    // Navigation
    nav: {
      home: 'Home',
      about: 'About Us',
      activities: 'Activities',
      partners: 'Partners',
      contact: 'Contact',
      news: 'News',
      projects: 'Projects',
      youthTraining: 'Youth Training',
      womenWellbeing: 'Women\'s Wellbeing',
      socioEconomicActivities: 'Socio-Economic Activities',
      achievements: 'Achievements'
    },
    // Hero Section
    hero: {
      title: 'PRISMA,',
      subtitle: 'a community serving the community!',
      engaged: 'Committed to',
      taglines: {
        youth: 'Youth Employment',
        women: 'Women\'s Rights',
        nature: 'Nature\'s Wellbeing',
        autonomy: 'Women\'s Autonomy',
        children: 'Children\'s Development '
      }
    },
    // About Section
    about: {
      marquee: 'Empowered Women, Ambitious Youth, Preserved Nature',
      title: 'ABOUT US',
      who: 'Who is PRISMA',
      whoText: 'PRISMA is a community-serving association committed to the PROMOTION OF SOCIO-ECONOMIC INITIATIVES OF THE ASSOCIATIVE WORLD in Burundi. A non-profit organization under Burundian law.',
      vision: 'Vision',
      visionText: 'PRISMA aims to develop self-training for unemployed youth, promote the schooling of children, help young people develop their talents while combating the degradation of the natural environment. Also to promote autonomy, valorization, and the defense of the rights',
      mission: 'Mission',
      missionText: 'Self-training for unemployed youth, children\'s education, helping young people develop their talent through a participatory approach and community-based organization.'
    },
    // Activities Section
    activities: {
      marquee: 'ACT TO HEAL, ACT TO PREVENT',
      women: {
        title: "Defense of the rights of Children and Women - General well-being",
        description: "PRISMA stands alongside women and children, carrying a vision where every voice counts, every right is protected, and every life finds its rightful place; together, we build a more just, supportive, and humane world.",
        firstpoint : "Right to schooling and education (Tutoring for children who have dropped out of the school system)",
        secondpoint : "Right to participation",
        thirdpoint : "Hygiene and sanitation/housing/drinking water",
        fourthpoint : "Right to information",
        fifthpoint : "Right to associate with others",
        sixthpoint : "Access to healthcare and promotion of safe motherhood / reduction of infant mortality rate",
        seventhpoint : "Holistic care for Children and "
      },
      youth: {
        title: "Supervision of children/youth - Assisting the emergence of talents in children and youth - support for projects of unemployed youth",
        description: "PRISMA is committed to guiding and inspiring every child and young person, cultivating their emerging talents and supporting them in realizing their projects; together, we open the doors of opportunity and build promising future paths.",
        firstpoint: "Support for sports activities holiday camps - supervision during the holidays",
        secondpoint: "Support for microprojects of youth NGO projects",
        thirdpoint: "Support for young people for schooling abroad or participation in training seminars"
      },
      nature: {
        title: "Tree planting and private property development",
        description: "PRISMA cultivates a greener future by planting trees and enhancing every private space, transforming gardens and lands into havens of life where nature flourishes and inspires change.",
        firspoint : "Development of properties (anti-erosive curves, fodder and fixing grasses)",
        secondpoint : "Planting of forest, agroforestry and fruit trees"
      },
      explore: 'Explore',
      mainTitle: 'ACTIVITIES'
    },
    // Impact Section
    impact: {
        mainTitle: 'Our Impact',
        stat1: 'Women supported',
        stat2: 'Youth trained',
        stat3: 'Trees planted',
        allAchievements: 'All our achievements',
        partnersTitle: 'They also trust us',
        familyTitle: 'A WHOLE FAMILY IN ACTION'
    },
    // Contact
    contact: {
      title: 'CONTACT US!',
      formTitle: 'Leave us a message',
      name: 'Your name',
      email: 'Your email',
      subject: 'Subject',
      message: 'Your message',
      send: 'Send',
      sending: 'Sending...'
    },
    // Newsletter
    newsletter: {
      title: 'Stay informed about everything!',
      subtitle: 'ON OUR NEWSLETTER',
      placeholder: 'ENTER YOUR EMAIL',
      subscribe: 'Subscribe',
      subscribing: 'Sending...',
      success: 'Thank you for subscribing!',
      error: 'An error occurred.'
    },
    // TopBar
    topbar: {
      marquee: 'PROMOTION OF SOCIOECONOMIC INITIATIVES OF THE ASSOCIATIVE WORLD'
    },
    //footer
    footer: {
      home: 'Home',
      about: 'About Us',
      news: 'News',
      projects: 'Projects',
      activities: 'Activities',
      youthTraining: 'Youth Training',
      womenWellbeing: 'Women Wellbeing',
      socioEconomicActivities: 'Socioeconomic Activities',
      achievements: 'Achievements',
      partners: 'Partners',
      contact: 'Contact'
    }

  },
  // Rundi Language
  rn: {
    // Navigation
    nav: {
      home: 'Itangiriro',
      about: 'Uko turi',
      activities: 'Ibikorwa',
      partners: 'Abafatanyabikorwa',
      contact: 'Duhuze',
      news: 'Amakuru',
      projects: 'Imishinga',
      youthTraining: 'Guhugura urubyiruko',
      womenWellbeing: 'Ubuzima bw\'abagore',
      socioEconomicActivities: 'Ibikorwa by\'ubukungu',
      achievements: 'Ibyo twagezeho'
    },
    // Hero Section
    hero: {
      title: 'PRISMA,',
      subtitle: 'umuryango ukorera umuryango!',
      engaged: 'Twiyemeje',
      taglines: {
        youth: 'Akazi k\'urubyiruko',
        women: 'Uburenganzira bw\'abagore',
        nature: 'Ubuzima bw\'ubusanzwe',
        autonomy: 'Kwiyubaka kw\'abagore',
        children: 'Gutera imbere kw\'abana'
      }
    },
    // About Section
    about: {
      marquee: 'Abagore bateje imbere, Urubyiruko rwiyemeje, Ubusanzwe bukingiwe',
      title: 'UKO TURI',
      who: 'Ni nde PRISMA',
      whoText: 'PRISMA ni umuryango ukorera umuryango wiyemeje guteza imbere IMISHINGA Y\'UBUKUNGU Y\'ITSINDA RY\'IMIRYANGO mu Burundi. ASBL y\'amategeko y\'Aburundi.',
      vision: 'Icyerekezo',
      visionText: 'PRISMA ifise intumbero yo guteza imbere kwigira ubwabo kw\'urwaruka rudafise akazi, guteza imbere ishure ry\'abana, gufasha urwaruka kugaragaza no guteza imbere impano zabo mu gihe harwanywa kononekara kw\'ibidukikije. Irongera kandi guteza imbere ukwiyubara, guha agaciro no kurwanira uburenganzira bw\'abagore n\'abana kugira bashobore gutera imbere mu buzima bwiza, haba mu muryango no mu bidukikije.',
      mission: 'Inshingano',
      missionText: 'Kwiyigisha urubyiruko rutazi akazi, kwigisha abana, gufasha urubyiruko rwakura ubushobozi bwarwo binyuze mu buryo bwo kugirana uruhare n\'imitunganyirize ishingiye ku muryango.'
    },
    // Activities Section
    activities: {
      marquee: 'GUKORA KUGIRA TUKIZE, GUKORA KUGIRA TUBUZE',
      women: {
        title: "Kwunganira agateka k'abana n'abakenyezi - Kumererwa neza muri rusangi",
        description: "PRISMA ihagaze iruhande y'abakenyezi n'abana, ifise iciyumviro aho ijwi ry'umwe wese riharurwa, agateka kose bikingirwa, n'ubuzima bwose buronka ikibanza bubereye; hamwe, twubaka isi irangwa n'ubutungane, ubufatanye n'ubuntu.",
        firstpoint : "Uburenganzira bwo kwiga no kwigishwa (Gusubirizamwo ku bana bava mu mashure)",
        secondpoint : "Uburenganzira bwo kugira uruhare",
        thirdpoint : "Isuku no gusukura/ubutunzi/amazi meza yo kunywa", 
        fourthpoint : "Uburenganzira bwo kumenyesha",
        fifthpoint : "Uburenganzira bwo kwifatanya n'abandi",
        sixthpoint : "Kugera ku buvuzi no guteza imbere ububyeyi butagira ingorane / kugabanya urupfu rw'abana bato",
        seventhpoint : "Kwita ku bana n'abagore bahuye n'akarengane atandukanye mu buryo burambye"
      },
      youth: {
        title: "Gukurikirana abana/urwaruka - Gufasha impano z'abana n'urwaruka kwigaragaza - Gushigikira imigambi y'urwaruka rudafise akazi",
        description: "PRISMA yiyemeje kuyobora no gutera intege umwana wese n'urwaruka, igakuza impano zabo zikiri nkeyi ikanabashigikira mu gushira mu ngiro imigambi yabo; hamwe, twugurura imiryango y'amahigwe tukubaka inzira zizobereye za kazoza.",
        firstpoint: "Gushigikira ibikorwa vy'imikino amakoraniro y'ibiruhuko - gukurikirana mu gihe c'ibiruhuko",
        secondpoint: "Gushigikira imishinga mito y'imishinga y'amashyirahamwe y'urubyiruko",
        thirdpoint: "Gushigikira urwaruka mu kwiga hanze y'igihugu canke mu kwitabira amahugurwa"
      },
      nature: {
        title: "Gutera ibiti no gutunganya amatongo y'abantu kugiti cabo",
        description: "PRISMA iritwararika kazoza keza mu gutera ibiti no mu gushira agaciro mu kibanza cose c'umuntu kugiti ciwe, igahindura imirima n'amatongo ahantu h'ubuzima aho ibidukikije vyisanzura bigatera impinduka.",
        firspoint : "Gutunganya amatongo (imihanda yo kurwanya isenyuka ry'ubutaka, ibimera vy'amatungo n'ibifata ubutaka)",
        secondpoint : "Gutera ibiti vy'ishyamba, ibifatiye ku buhinzi n'ibiti vy'imbuto"
      },
      explore: 'Rondera',
      mainTitle: 'IBIKORWA'
    },
    // Impact Section
    impact: {
        mainTitle: 'Ico Tumaze Gukora',
        stat1: 'Abakenyezi bashigikiwe',
        stat2: 'Urwaruka rwahuguwe',
        stat3: 'Ibiti vyatewe',
        allAchievements: 'Ibyo twagezeho byose',
        partnersTitle: 'Nabo nyene baratwizera',
        familyTitle: 'UMURYANGO WOSE MU GIKORWA'
    },
    // Contact
    contact: {
      title: 'DUTUBABARIRE!',
      formTitle: 'Duhe ubutumwa',
      name: 'Izina ryawe',
      email: 'Email yawe',
      subject: 'Ingingo',
      message: 'Ubutumwa bwawe',
      send: 'Ohereza',
      sending: 'Twohereza...'
    },
    // Newsletter
    newsletter: {
      title: 'Komera umenyerewe ibintu byose!',
      subtitle: 'KU MAKURU YACU',
      placeholder: 'ANDIKA EMAIL YAWE',
      subscribe: 'Kwiyandikisha',
      subscribing: 'Twohereza...',
      success: 'Murakoze kwiyandikisha!',
      error: 'Habaye ikosa.'
    },
    // TopBar
    topbar: {
      marquee: 'GUTEZA IMBERE IMISHINGA Y\'UBUKUNGU Y\'ITSINDA RY\'IMIRYANGO'
    },
    //footer
    footer: {
      home: 'Itangiriro',
      about: 'Uko turi',
      news: 'Amakuru',
      projects: 'Imishinga',
      activities: 'Ibikorwa',
      youthTraining: 'Guhugura urubyiruko',
      womenWellbeing: 'Ubuzima bw\'abagore',
      socioEconomicActivities: 'Ibikorwa by\'ubukungu',
      achievements: 'Ibyo twagezeho',
      partners: 'Abafatanyabikorwa',
      contact: 'Duhuze'
    }

  },
  // Swedish Language
  sv: {
    // Navigation
    nav: {
      home: 'Hem',
      about: 'Om oss',
      activities: 'Aktiviteter', 
      partners: 'Partners',
      contact: 'Kontakt',
      news: 'Nyheter',
      projects: 'Projekt',
      youthTraining: 'Ungdomsutbildning',
      womenWellbeing: 'Kvinnors välbefinnande',
      socioEconomicActivities: 'Socioekonomiska aktiviteter',
      achievements: 'Prestationer'
    },
    // Hero Section
    hero: {
      title: 'PRISMA,',
      subtitle: 'en gemenskap som tjänar gemenskapen!',
      engaged: 'Engagerade för',
      taglines: {
        youth: 'Ungdomssysselsättning',
        women: 'Kvinnors rättigheter',
        nature: 'Naturens välbefinnande',
        autonomy: 'Kvinnors autonomi',
        children: 'Barns utveckling'
      }
    },
    // About Section
    about: {
      marquee: 'Stärkta kvinnor, ambitiösa ungdomar, bevarad natur',
      title: 'OM OSS',
      who: 'Vem är PRISMA',
      whoText: 'PRISMA är en gemenskapsserviceförening som är engagerad i FRÄMJANDE AV SOCIOEKONOMISKA INITIATIV I DEN ASSOCIATIVA VÄRLDEN i Burundi. En ideell organisation enligt burundisk lag.',
      vision: 'Vision',
      visionText: 'PRISMA syftar till att utveckla självutbildning för arbetslösa ungdomar, främja skolgång för barn, hjälpa unga att utveckla sina talanger samtidigt som de bekämpar nedbrytningen av den naturliga miljön. Också att främja autonomi, värdering och försvar av rättigheterna',
      mission: 'Uppdrag',
      missionText: 'Självutbildning för arbetslösa ungdomar, barnutbildning, hjälpa unga att utveckla sin talang genom ett deltagande tillvägagångssätt och samhällsbaserad organisation.'
    },
    // Activities Section
    activities: {
       women: {
        title: "Försvar av barnens och kvinnornas rättigheter - Allmänt välbefinnande",
        description: "PRISMA står vid sidan av kvinnor och barn och bär en vision där varje röst räknas, varje rättighet skyddas och varje liv hittar sin rättmätiga plats; tillsammans bygger vi en mer rättvis, stödjande och human värld.",
        firstpoint : "Rätt till skolgång och utbildning (handledning för barn som har hoppat av skolsystemet)",
        secondpoint : "Rätt till deltagande",
        thirdpoint : "Hygien och sanitet/bostäder/dricksvatten",
        fourthpoint : "Rätt till information",
        fifthpoint : "Rätt att förena sig med andra",
        sixthpoint : "Tillgång till sjukvård och främjande av säker moderskap / minskning av spädbarnsdödligheten",
        seventhpoint : "Helhetlig vård för barn och kvinnor som är offer för olika övergrepp"
      },
      youth: {
        title: "Övervakning av barn/ungdomar - Att hjälpa talangernas framväxt hos barn och ungdomar - stöd för projekt för arbetslösa ungdomar",
        description: "PRISMA är engagerad i att vägleda och inspirera varje barn och ung person, odla deras framväxande talanger och stödja dem i att förverkliga sina projekt; tillsammans öppnar vi möjligheternas dörrar och bygger lovande framtidsvägar.",
        firstpoint: "Stöd för sportaktiviteter semesterläger - övervakning under semestern",
        secondpoint: "Stöd för mikroföretag för ungdomsorganisationers projekt",
        thirdpoint: "Stöd för unga för skolgång utomlands eller deltagande i utbildningsseminarier"
      },
      nature: {
        title: "Trädplantering och privat fastighetsutveckling",
        description: "PRISMA odlar en grönare framtid genom att plantera träd och förbättra varje privat utrymme, förvandla trädgårdar och marker till livets tillflyktsorter där naturen blomstrar och inspirerar förändring.",
        firspoint : "Utveckling av fastigheter (anti-erosiva kurvor, foder- och fixeringsgräs)",
        secondpoint : "Plantering av skogs-, agroforestry- och fruktträd"
      },
      explore: 'Utforska',
      mainTitle: 'AKTIVITETER'
    },
    // Impact Section
    impact: {
        mainTitle: 'Vår påverkan',
        stat1: 'Kvinnor som stöds',
        stat2: 'Ungdomar utbildade',
        stat3: 'Träd planterade',
        allAchievements: 'Alla våra prestationer',
        partnersTitle: 'De litar också på oss',
        familyTitle: 'HELA FAMILJEN I AKTION'
      },
    // Contact
    contact: {
      title: 'KONTAKTA OSS!',
      formTitle: 'Lämna oss ett meddelande',
      name: 'Ditt namn',
      email: 'Din e-post',
      subject: 'Ämne',
      message: 'Ditt meddelande',
      send: 'Skicka',
      sending: 'Skickar...'
    },
    // Newsletter
    newsletter: {
      title: 'Håll dig informerad om allt!',
      subtitle: 'PÅ VÅRT NYHETSBREV', 
      placeholder: 'ANGE DIN E-POST',
      subscribe: 'Prenumerera',
      subscribing: 'Skickar...',
      success: 'Tack för att du prenumererar!',
      error: 'Ett fel uppstod.'
    },
    // TopBar
    topbar: {
      marquee: 'FRÄMJANDE AV SOCIOEKONOMISKA INITIATIV I DEN ASSOCIATIVA VÄRLDEN'
    },
    //footer
    footer: {
      home: 'Hem',
      about: 'Om oss',
      news: 'Nyheter',
      projects: 'Projekt',
      activities: 'Aktiviteter',
      youthTraining: 'Ungdomsutbildning',
      womenWellbeing: 'Kvinnors välbefinnande',
      socioEconomicActivities: 'Socioekonomiska aktiviteter',
      achievements: 'Prestationer',
      partners: 'Partners',
      contact: 'Kontakt' 
    }
  },
  // Dutch Language
  nl: {
    // Navigation
    nav: {
      home: 'Home',
      about: 'Over ons',
      activities: 'Activiteiten',
      partners: 'Partners',
      contact: 'Contact',
      news: 'Nieuws',
      projects: 'Projecten',
      youthTraining: 'Jeugdstraining',
      womenWellbeing: 'Welzijn van vrouwen',
      socioEconomicActivities: 'Sociaal-economische activiteiten',
      achievements: 'Prestaties'
    },
    // Hero Section
    hero: {
      title: 'PRISMA,',
      subtitle: 'een gemeenschap die de gemeenschap dient!',
      engaged: 'Toegewijd aan',
      taglines: {
        youth: 'Jeugdwerkgelegenheid',
        women: 'Vrouwenwerking',
        nature: 'Natuurwelzijn',
        autonomy: 'Autonomie van vrouwen',
        children: 'Ontwikkeling van kinderen'
      }
    },
    // About Section
    about: {
      marquee: 'Empowered vrouwen, ambitieuze jongeren, behouden natuur',
      title: 'OVER ONS',
      who: 'Wie is PRISMA',
      whoText: 'PRISMA is een gemeenschap-dienende vereniging die zich inzet voor de PROMOTIE VAN SOCIAAL-ECONOMISCHE INITIATIEVEN VAN DE ASSOCIATIEVE WERELD in Burundi. Een non-profitorganisatie volgens het Burundese recht.',
      vision: 'Visie',
      visionText: 'PRISMA streeft ernaar zelfopleiding voor werkloze jongeren te ontwikkelen, de schoolgang van kinderen te bevorderen, jongeren te helpen hun talenten te ontwikkelen en tegelijkertijd de degradatie van de natuurlijke omgeving te bestrijden. Ook het bevorderen van autonomie, waardering en verdediging van de rechten',
      mission: 'Missie',
      missionText: 'Zelfopleiding voor werkloze jongeren, kinderonderwijs, jongeren helpen hun talent te ontwikkelen door middel van een participatieve benadering en een op de gemeenschap gebaseerde organisatie.'
    },
    // Activities Section
    activities: {
      women: {
        title: "Verdediging van de rechten van kinderen en vrouwen - Algemeen welzijn",
        description: "PRISMA staat naast vrouwen en kinderen, met een visie waarin elke stem telt, elk recht wordt beschermd en elk leven zijn rechtmatige plaats vindt; samen bouwen we aan een rechtvaardiger, ondersteunender en menselijker wereld.",
        firstpoint : "Recht op schoolgang en onderwijs (bijles voor kinderen die zijn gestopt met school)",
        secondpoint : "Recht op deelname",
        thirdpoint : "Hygiëne en sanitaire voorzieningen/woning/drinkwater",
        fourthpoint : "Recht op informatie",
        fifthpoint : "Recht om zich met anderen te verenigen",
        sixthpoint : "Toegang tot gezondheidszorg en bevordering van veilig moederschap / vermindering van de kindersterfte",
        seventhpoint : "Holistische zorg voor kinderen en vrouwen die het slachtoffer zijn van verschillende misbruiken"
      },
      youth: {
        title: "Supervisie van kinderen/jongeren - Helpen bij het ontstaan van talenten bij kinderen en jongeren - ondersteuning voor projecten van werkloze jongeren",
        description: "PRISMA zet zich in om elk kind en elke jongere te begeleiden en te inspireren, hun opkomende talenten te cultiveren en hen te ondersteunen bij het realiseren van hun projecten; samen openen we de deuren van kansen en bouwen we veelbelovende toekomstpaden.",
        firstpoint: "Ondersteuning van sportactiviteiten vakantiekampen - toezicht tijdens de vakantie",
        secondpoint: "Ondersteuning voor microprojecten van jeugd-NGO-projecten",
        thirdpoint: "Ondersteuning voor jongeren voor schoolgang in het buitenland of deelname aan opleidingsseminars"
      },
      nature: {
        title: "Bomen planten en ontwikkeling van particuliere eigendommen",
        description: "PRISMA cultiveert een groenere toekomst door bomen te planten en elke privéruimte te verbeteren, tuinen en terreinen te transformeren in havens van leven waar de natuur bloeit en verandering inspireert.",
        firspoint : "Ontwikkeling van eigendommen (anti-erosieve krommen, voeder- en fixatiegrassen)",
        secondpoint : "Planten van bos-, agroforestry- en fruitbomen"
      },
      explore: 'Verkennen',
      mainTitle: 'ACTIVITEITEN'
    },
    // Impact Section
    impact: {
        mainTitle: 'Onze impact',
        stat1: 'Ondersteunde vrouwen',
        stat2: 'Getrainde jongeren',
        stat3: 'Geplante bomen',
        allAchievements: 'Al onze prestaties',
        partnersTitle: 'Zij vertrouwen ook op ons',
        familyTitle: 'EEN HELE FAMILIE IN ACTIE'
    },
    // Contact
    contact: {
      title: 'NEEM CONTACT MET ONS OP!',
      formTitle: 'Laat ons een bericht achter',
      name: 'Je naam',
      email: 'Je e-mail',
      subject: 'Onderwerp',
      message: 'Je bericht',
      send: 'Verzenden',
      sending: 'Bezig met verzenden...'
    },
    // Newsletter
    newsletter: {
      title: 'Blijf overal van op de hoogte!',
      subtitle: 'OP ONZE NIEUWSBRIEF',
      placeholder: 'VOER JE E-MAIL IN',
      subscribe: 'Abonneren',
      subscribing: 'Bezig met verzenden...',
      success: 'Bedankt voor je inschrijving!',
      error: 'Er is een fout opgetreden.'
    },
    // TopBar
    topbar: {
      marquee: 'PROMOTIE VAN SOCIAAL-ECONOMISCHE INITIATIEVEN VAN DE ASSOCIATIEVE WERELD'
    },
    //footer
    footer: {
      home: 'Home',
      about: 'Over ons',
      news: 'Nieuws',
      projects: 'Projecten',
      activities: 'Activiteiten',
      youthTraining: 'Jeugdtraining',
      womenWellbeing: 'Welzijn van vrouwen',
      socioEconomicActivities: 'Sociaal-economische activiteiten',
      achievements: 'Prestaties',
      partners: 'Partners',
      contact: 'Contact'
    }
  },
  // German Language
  de: {
    // Navigation
    nav: {
      home: 'Startseite',
      about: 'Über uns',
      activities: 'Aktivitäten',
      partners: 'Partner',
      contact: 'Kontakt',
      news: 'Nachrichten',
      projects: 'Projekte',
      youthTraining: 'Jugendtraining',
      womenWellbeing: 'Wohlbefinden der Frauen',
      socioEconomicActivities: 'Sozioökonomische Aktivitäten',
      achievements: 'Leistungen'
    },
    // Hero Section
    hero: {
      title: 'PRISMA,',
      subtitle: 'eine Gemeinschaft, die der Gemeinschaft dient!',
      engaged: 'Engagiert für',
      taglines: {
        youth: 'Jugendbeschäftigung',
        women: 'Frauenförderung',
        nature: 'Wohlbefinden der Natur',
        autonomy: 'Autonomie der Frauen',
        children: 'Entwicklung der Kinder'
      }
    },
    // About Section
    about: {
      marquee: 'Starke Frauen, ehrgeizige Jugendliche, bewahrte Natur',
      title: 'ÜBER UNS',
      who: 'Wer ist PRISMA',
      whoText: 'PRISMA ist eine gemeinschaftsorientierte Vereinigung, die sich für die FÖRDERUNG SOZIOÖKONOMISCHER INITIATIVEN DER ASSOZIATIVEN WELT in Burundi einsetzt. Eine gemeinnützige Organisation nach burundischem Recht.',
      vision: 'Vision',
      visionText: 'PRISMA hat sich zum Ziel gesetzt, die Selbstschulung arbeitsloser Jugendlicher zu fördern, die Schulbildung von Kindern zu unterstützen, jungen Menschen zu helfen, ihre Talente zu entwickeln und gleichzeitig die Zerstörung der natürlichen Umwelt zu bekämpfen. Auch die Förderung von Autonomie, Wertschätzung und Verteidigung der Rechte',
      mission: 'Mission',
      missionText: 'Selbstschulung für arbeitslose Jugendliche, Kinderbildung, Unterstützung junger Menschen bei der Entwicklung ihrer Talente durch einen partizipativen Ansatz und eine gemeinschaftsbasierte Organisation.'
    },
    // Activities Section
    activities: {
       women: {
        title: "Verteidigung der Rechte von Kindern und Frauen - Allgemeines Wohlbefinden",
        description: "PRISMA steht an der Seite von Frauen und Kindern, trägt eine Vision, in der jede Stimme zählt, jedes Recht geschützt wird und jedes Leben seinen rechtmäßigen Platz findet; gemeinsam bauen wir eine gerechtere, unterstützendere und humanere Welt auf.",
        firstpoint : "Recht auf Schulbildung und Ausbildung (Nachhilfe für Kinder, die das Schulsystem verlassen haben)",
        secondpoint : "Recht auf Teilnahme",
        thirdpoint : "Hygiene und Sanitäranlagen/Wohnung/Trinkwasser",
        fourthpoint : "Recht auf Information",
        fifthpoint : "Recht, sich mit anderen zu verbinden",
        sixthpoint : "Zugang zur Gesundheitsversorgung und Förderung einer sicheren Mutterschaft / Verringerung der Säuglingssterblichkeit",
        seventhpoint : "Ganzheitliche Betreuung von Kindern und Frauen, die Opfer verschiedener Missbräuche sind"
      },
      youth: {
        title: "Betreuung von Kindern/Jugendlichen - Unterstützung bei der Entfaltung von Talenten bei Kindern und Jugendlichen - Unterstützung für Projekte arbeitsloser Jugendlicher",
        description: "PRISMA verpflichtet sich, jedes Kind und jeden Jugendlichen zu führen und zu inspirieren, ihre aufstrebenden Talente zu kultivieren und sie bei der Verwirklichung ihrer Projekte zu unterstützen; gemeinsam öffnen wir die Türen der Möglichkeiten und bauen vielversprechende Zukunftswege.",
        firstpoint: "Unterstützung von Sportaktivitäten Ferienlager - Betreuung während der Ferien",
        secondpoint: "Unterstützung von Mikroprojekten für Jugend-NGO-Projekte",
        thirdpoint: "Unterstützung für Jugendliche bei der Schulbildung im Ausland oder der Teilnahme an Schulungsseminaren"
      },
      nature: {
        title: "Baumpflanzung und Entwicklung von Privateigentum",
        description: "PRISMA kultiviert eine grünere Zukunft, indem es Bäume pflanzt und jeden privaten Raum verbessert, Gärten und Grundstücke in Oasen des Lebens verwandelt, wo die Natur gedeiht und Veränderung inspiriert.",
        firspoint : "Entwicklung von Immobilien (anti-erosive Kurven, Futter- und Fixiergräser)",
        secondpoint : "Pflanzung von Wald-, Agroforst- und Obstbäumen"
      },
      explore: 'Erkunden',
      mainTitle: 'AKTIVITÄTEN'
    },
    // Impact Section
    impact: {
        mainTitle: 'Unsere Wirkung',
        stat1: 'Unterstützte Frauen',
        stat2: 'Ausgebildete Jugendliche',
        stat3: 'Gepflanzte Bäume',
        allAchievements: 'Alle unsere Leistungen',
        partnersTitle: 'Sie vertrauen uns auch',
        familyTitle: 'EINE GANZE FAMILIE IN AKTION'
    },
    // Contact
    contact: {
      title: 'KONTAKTIEREN SIE UNS!',
      formTitle: 'Hinterlassen Sie uns eine Nachricht',
      name: 'Ihr Name',
      email: 'Ihre E-Mail',
      subject: 'Betreff',
      message: 'Ihre Nachricht',
      send: 'Senden',
      sending: 'Senden...'
    },
    // Newsletter
    newsletter: {
      title: 'Bleiben Sie über alles informiert!',
      subtitle: 'IN UNSEREM NEWSLETTER',
      placeholder: 'GEBEN SIE IHRE E-MAIL EIN',
      subscribe: 'Abonnieren',
      subscribing: 'Senden...',
      success: 'Danke für Ihr Abonnement!',
      error: 'Ein Fehler ist aufgetreten.'
    },
    // TopBar
    topbar: {
      marquee: 'FÖRDERUNG SOZIOÖKONOMISCHER INITIATIVEN DER ASSOZIATIVEN WELT'
    },
    //footer
    footer: {
      home: 'Startseite',
      about: 'Über uns',
      news: 'Nachrichten',
      projects: 'Projekte',
      activities: 'Aktivitäten',
      youthTraining: 'Jugendtraining',
      womenWellbeing: 'Wohlbefinden der Frauen',
      socioEconomicActivities: 'Sozioökonomische Aktivitäten',
      achievements: 'Leistungen',
      partners: 'Partner',
      contact: 'Kontakt'
    }
  }
};

export { translations };
export type { Language, TranslationValue, Translation };