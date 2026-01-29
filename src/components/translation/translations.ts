
type Language = 'fr' | 'en' | 'rn';

type TranslationValue = string | { [key: string]: TranslationValue };

type Translation = { [key: string]: TranslationValue };

const translations: Record<Language, Translation> = {
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
      engaged: 'Engagé pour',
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
      whoText: 'PRISMA est une association privée engagée dans la PROMOTION DES INITIATIVES SOCIOÉCONOMIQUES DU MONDE ASSOCIATIF au Burundi. Une ASBL de droit burundais.',
      vision: 'Vision',
      visionText: 'PRISMA vise à développer l\'autoformation des jeunes chômeur, favoriser la scolarisation des enfants, aider les jeunes à faire émerger leur talent tout en luttant contre la dégradation de l\'environnement naturel. Egalement favoriser l\'autonomie, la valorisation et la défense des droits des femmes et des enfants pour leur épanouissement dans un environnement physique et familial sain.',
      mission: 'Mission',
      missionText: 'Autoformation des jeunes chômeur, scolarisation des enfants, aider les jeunes à faire émerger leur talent par une approche participative et une organisation à base de communauté.'
    },
    // Activities Section
    activities: {
      marquee: 'AGIR POUR GUERIR, AGIR POUR PREVENIR',
      women: {
        title: "Défense des droits des Enfants et des Femmes-Bien être en général",
        description: "PRISMA se tient aux côtés des femmes et des enfants, porteuse d'une vision où chaque voix compte, chaque droit est protégé et chaque vie trouve la place qu'elle mérite ; ensemble, nous bâtissons un monde plus juste, plus solidaire et plus humain.",
        firstpoint : "Droit à la scolarité et à l'éducation (Répétitorat pour les enfants qui ont décroché du système scolaire)",
        secondpoint : "Droit à la participation",
        thirdpoint : "Hygiène et assainissement/habitation/eau potable",
        fourthpoint : "Droit à l'information",
        fifthpoint : "Droit de s'associer aux autres",
        sixthpoint : "Accès au soins de santé et promotion d'une maternité sans risques / limitation du taux de mortalité infantile",
        seventhpoint : "Prise en charge holistique des Enfants et Femmes victimes de divers abus"
      },
      youth: {
        title: "Encadrements des enfants/jeunes-Aider pour l'émergence des talents des enfsnts et jeunes- appui aux projets des jeunes chomeurs",
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
      whoText: 'PRISMA is a private association committed to PROMOTING SOCIOECONOMIC INITIATIVES OF THE ASSOCIATIVE WORLD in Burundi. A Burundian law ASBL.',
      vision: 'Vision',
      visionText: 'PRISMA aims to develop self-training for young unemployed people, promote children\'s education, help young people develop their talents while combating the degradation of the natural environment. It also promotes autonomy, empowerment and the defence of women\'s and children\'s rights so that they can flourish in a healthy physical and family environment.',
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
      whoText: 'PRISMA ni umuryango wihariye wiyemeje GUTEZA IMBERE IMISHINGA Y\'UBUKUNGU Y\'ITSINDA RY\'IMIRYANGO mu Burundi. ASBL y\'amategeko y\'Uburundi.',
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
      
      
    }

  }
};

export { translations };
export type { Language, TranslationValue, Translation };