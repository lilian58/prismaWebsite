import React, { createContext, useContext, useState } from 'react';

const translations = {
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
        nature: 'Le bien de la nature'
      }
    },
    // About Section
    about: {
      marquee: 'Femmes épanouies, Jeunes ambitieux, Nature préservée',
      title: 'À PROPOS DE NOUS',
      who: 'Qui est PRISMA',
      whoText: 'PRISMA est une association privée engagée dans la PROMOTION DES INITIATIVES SOCIOÉCONOMIQUES DU MONDE ASSOCIATIF au Burundi. Une ASBL de droit burundais.',
      vision: 'Vision',
      visionText: 'PRISMA vise à développer l\'autoformation des jeunes chômeur, la scolarisation des enfants, aider les jeunes à faire émerger leur talent tout en luttant contre la dégradation de l\'environnement naturel.',
      mission: 'Mission',
      missionText: 'Autoformation des jeunes chômeur, scolarisation des enfants, aider les jeunes à faire émerger leur talent par une approche participative et une organisation à base de communauté.'
    },
    // Activities Section
    activities: {
      women: {
        title: "Défense des droits des Enfants et des Femmes-Bien être en général",
        description: "PRISMA se tient aux côtés des femmes et des enfants, porteuse d'une vision où chaque voix compte, chaque droit est protégé et chaque vie trouve la place qu'elle mérite ; ensemble, nous bâtissons un monde plus juste, plus solidaire et plus humain.",
      },
      youth: {
        title: "Encadrements des enfants/jeunes-Aider pour l'émergence des talents des enfsnts et jeunes- appui aux projets des jeunes chomeurs",
        description: "PRISMA s'engage à guider et inspirer chaque enfant et jeune, cultivant leurs talents naissants et les soutenant dans la concrétisation de leurs projets ; ensemble, nous ouvrons les portes de l'opportunité et bâtissons des trajectoires porteuses d'avenir.",
      },
      nature: {
        title: "Plantation des arbres et aménagements des propriétés privées",
        description: "PRISMA cultive un avenir plus vert en plantant des arbres et en valorisant chaque espace privé, transformant jardins et terrains en havres de vie où la nature s'épanouit et inspire le changement.",
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
        nature: 'Nature\'s Wellbeing'
      }
    },
    // About Section
    about: {
      marquee: 'Empowered Women, Ambitious Youth, Preserved Nature',
      title: 'ABOUT US',
      who: 'Who is PRISMA',
      whoText: 'PRISMA is a private association committed to PROMOTING SOCIOECONOMIC INITIATIVES OF THE ASSOCIATIVE WORLD in Burundi. A Burundian law ASBL.',
      vision: 'Vision',
      visionText: 'PRISMA aims to develop self-training for unemployed youth, children\'s education, help young people develop their talent while fighting against natural environment degradation.',
      mission: 'Mission',
      missionText: 'Self-training for unemployed youth, children\'s education, helping young people develop their talent through a participatory approach and community-based organization.'
    },
    // Activities Section
    activities: {
      women: {
        title: "Defense of the rights of Children and Women - General well-being",
        description: "PRISMA stands alongside women and children, carrying a vision where every voice counts, every right is protected, and every life finds its rightful place; together, we build a more just, supportive, and humane world.",
      },
      youth: {
        title: "Supervision of children/youth - Assisting the emergence of talents in children and youth - support for projects of unemployed youth",
        description: "PRISMA is committed to guiding and inspiring every child and young person, cultivating their emerging talents and supporting them in realizing their projects; together, we open the doors of opportunity and build promising future paths.",
      },
      nature: {
        title: "Tree planting and private property development",
        description: "PRISMA cultivates a greener future by planting trees and enhancing every private space, transforming gardens and lands into havens of life where nature flourishes and inspires change.",
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
        nature: 'Ubuzima bw\'ubusanzwe'
      }
    },
    // About Section
    about: {
      marquee: 'Abagore bateje imbere, Urubyiruko rwiyemeje, Ubusanzwe bukingiwe',
      title: 'UKO TURI',
      who: 'Ni nde PRISMA',
      whoText: 'PRISMA ni umuryango wihariye wiyemeje GUTEZA IMBERE IMISHINGA Y\'UBUKUNGU Y\'ITSINDA RY\'IMIRYANGO mu Burundi. ASBL y\'amategeko y\'Uburundi.',
      vision: 'Icyerekezo',
      visionText: 'PRISMA igamije gutezimbere kwiyigisha kw\'urubyiruko rutazi akazi, kwigisha abana, gufasha urubyiruko rwakura ubushobozi bwarwo ndetse no kurwanya kwangirika kw\'ibidukikije.',
      mission: 'Inshingano',
      missionText: 'Kwiyigisha urubyiruko rutazi akazi, kwigisha abana, gufasha urubyiruko rwakura ubushobozi bwarwo binyuze mu buryo bwo kugirana uruhare n\'imitunganyirize ishingiye ku muryango.'
    },
    // Activities Section
    activities: {
      women: {
        title: "Kwunganira agateka k'abana n'abakenyezi - Kumererwa neza muri rusangi",
        description: "PRISMA ihagaze iruhande y'abakenyezi n'abana, ifise iciyumviro aho ijwi ry'umwe wese riharurwa, agateka kose bikingirwa, n'ubuzima bwose buronka ikibanza bubereye; hamwe, twubaka isi irangwa n'ubutungane, ubufatanye n'ubuntu.",
      },
      youth: {
        title: "Gukurikirana abana/urwaruka - Gufasha impano z'abana n'urwaruka kwigaragaza - Gushigikira imigambi y'urwaruka rudafise akazi",
        description: "PRISMA yiyemeje kuyobora no gutera intege umwana wese n'urwaruka, igakuza impano zabo zikiri nkeyi ikanabashigikira mu gushira mu ngiro imigambi yabo; hamwe, twugurura imiryango y'amahigwe tukubaka inzira zizobereye za kazoza.",
      },
      nature: {
        title: "Gutera ibiti no gutunganya amatongo y'abantu kugiti cabo",
        description: "PRISMA iritwararika kazoza keza mu gutera ibiti no mu gushira agaciro mu kibanza cose c'umuntu kugiti ciwe, igahindura imirima n'amatongo ahantu h'ubuzima aho ibidukikije vyisanzura bigatera impinduka.",
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
    }
  }
};

const TranslationContext = createContext();

export const useTranslation = () => {
  const context = useContext(TranslationContext);
  if (!context) {
    throw new Error('useTranslation must be used within TranslationProvider');
  }
  return context;
};

export const TranslationProvider = ({ children }) => {
  const [currentLanguage, setCurrentLanguage] = useState('fr');

  const t = (key) => {
    const keys = key.split('.');
    let value = translations[currentLanguage];
    
    for (const k of keys) {
      if (value && value[k]) {
        value = value[k];
      } else {
        return key; // Return the key if translation not found
      }
    }
    
    return value;
  };

  return (
    <TranslationContext.Provider value={{ t, currentLanguage, setCurrentLanguage }}>
      {children}
    </TranslationContext.Provider>
  );
};
