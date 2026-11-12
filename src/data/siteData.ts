import { SiteConfig, ServiceItem, ZoneItem, ConseilArticle, FaqItem } from '../types';

export const siteConfig: SiteConfig = {
  company: 'Propreté Plus Bénin',
  brandName: 'BEC Nettoyage',
  baseline: 'Nettoyage professionnel à Abomey-Calavi, Cotonou et Porto-Novo',
  phone: '+22997000000',
  phoneDisplay: '+229 97 00 00 00',
  whatsapp: '22997000000',
  whatsappMessage: 'Bonjour BEC Nettoyage / Propreté Plus Bénin, je souhaite obtenir un devis pour une prestation de nettoyage.',
  email: 'contact@propreteplus-benin.com',
  villes: ['Abomey-Calavi', 'Cotonou', 'Porto-Novo'],
  horaires: 'Lundi – Samedi, 7h30 – 19h00',
  address: 'Bénin (Interventions à Cotonou, Abomey-Calavi, Porto-Novo et environs)',
};

export const servicesData: ServiceItem[] = [
  {
    id: 'bureaux',
    slug: 'nettoyage-bureaux',
    title: 'Nettoyage de bureaux',
    shortDesc: 'Entretien régulier ou ponctuel de vos bureaux, open spaces et salles de réunion avec rigueur et discrétion.',
    fullDesc: 'Un cadre de travail propre et sain améliore le bien-être de vos équipes et l’image de votre entreprise. Nous assurons un entretien méthodique adapté à vos horaires de fonctionnement.',
    image: '/images/nettoyage-bureaux.jpg',
    iconName: 'Building2',
    features: [
      'Nettoyage et désinfection des postes de travail et claviers',
      'Aspiration et lavage des sols (carrelage, parquet, moquette)',
      'Vidage des corbeilles et tri des déchets',
      'Désinfection rigoureuse des sanitaires et points de contact',
      'Entretien des espaces cafétéria et salles de réunion',
      'Nettoyage des baies vitrées et surfaces vitrées intérieures',
    ],
    checklist: [
      {
        category: 'Espaces de travail & bureaux',
        tasks: ['Dépoussiérage des bureaux et caissons', 'Nettoyage des écrans et périphériques avec lingettes adaptées', 'Désinfection des poignées et interrupteurs'],
      },
      {
        category: 'Sols & circulations',
        tasks: ['Balayage humide ou aspiration complète', 'Lavage avec détergent neutre parfumé adapté au revêtement', 'Élimination des taches de passage'],
      },
      {
        category: 'Sanitaires & hygiène',
        tasks: ['Détartrage et désinfection des cuvettes et lavabos', 'Nettoyage des miroirs et robinetteries', 'Réapprovisionnement consommables (papier, savon)'],
      },
      {
        category: 'Espaces de pause & cuisine',
        tasks: ['Dégraissage plan de travail et évier', 'Nettoyage extérieur micro-ondes et réfrigérateur', 'Lavage des poubelles et changement des sacs'],
      },
    ],
    audience: [
      { title: 'PME & Startups', desc: 'Des formules flexibles pour maintenir vos locaux accueillants sans perturber vos collaborateurs.' },
      { title: 'Cabinets & Agences', desc: 'Exigence de propreté et discrétion pour recevoir vos clients dans les meilleures conditions.' },
      { title: 'Sièges & Immeubles de bureaux', desc: 'Équipes dédiées avec superviseur et registre de passage quotidien.' },
    ],
    faqs: [
      {
        q: 'Intervenez-vous avant l’arrivée de nos employés ou en soirée ?',
        a: 'Oui, nous adaptons nos créneaux : intervention tôt le matin (dès 6h30) ou le soir après la fermeture des bureaux pour ne pas gêner vos activités.',
      },
      {
        q: 'Fournissez-vous les produits et le matériel ?',
        a: 'Tout à fait. Nos agents interviennent avec leurs aspirateurs professionnels, chariots de ménage, microfibres et produits d’entretien certifiés.',
      },
      {
        q: 'Peut-on mettre en place un contrat mensuel ?',
        a: 'Absolument. Nous proposons des contrats récurrents (1 à 6 passages par semaine) avec facturation mensuelle et suivi qualité régulier.',
      },
    ],
  },
  {
    id: 'chantier',
    slug: 'nettoyage-fin-de-chantier',
    title: 'Nettoyage de fin de chantier',
    shortDesc: 'Remise en état complète après travaux de construction ou rénovation pour une livraison impeccable.',
    fullDesc: 'Après des travaux, la poussière fine de plâtre et de ciment s’incruste partout. Notre équipe spécialisée procède à un décapage en profondeur pour rendre vos locaux immédiatement habitables et prêts à l’emploi.',
    image: '/images/nettoyage-fin-de-chantier.jpg',
    iconName: 'HardHat',
    features: [
      'Évacuation des gravats résiduels et emballages',
      'Dépoussiérage minutieux du sol au plafond',
      'Décapage des voiles de ciment, plâtre et colle',
      'Grattage professionnel des traces de peinture sur vitres et plinthes',
      'Lavage haute pression des extérieurs et terrasses',
      'Remise en brillance des carrelages et sanitaires neufs',
    ],
    checklist: [
      {
        category: 'Gros œuvre & résidus',
        tasks: ['Retrait des films plastiques de protection', 'Évacuation des poussières lourdes et chutes de matériaux', 'Aspiration industrielle avec filtres HEPA'],
      },
      {
        category: 'Sols & plinthes',
        tasks: ['Monobrosse et décapant spécifique pour voile de ciment', 'Brossage des joints de carrelage', 'Rinçage et séchage sans auréoles'],
      },
      {
        category: 'Menuiseries & vitrerie',
        tasks: ['Décollage des étiquettes et adhésifs sur châssis', 'Grattage minutieux des projections de peinture', 'Lavage des deux faces et encadrements'],
      },
      {
        category: 'Installations & finitions',
        tasks: ['Nettoyage intérieur et extérieur des placards intégrés', 'Dépoussiérage des gaines de climatisation et appliques', 'Contrôle pièce par pièce'],
      },
    ],
    audience: [
      { title: 'Promoteurs & Entreprises BTP', desc: 'Garantir une remise des clés sans réserve de propreté à vos acquéreurs.' },
      { title: 'Architectes & Maîtres d’œuvre', desc: 'Mettre en valeur vos réalisations et finitions pour la réception de chantier.' },
      { title: 'Particuliers après rénovation', desc: 'Retrouver un intérieur étincelant et respirable sans avoir à passer des jours à frotter.' },
    ],
    faqs: [
      {
        q: 'Combien de temps à l’avance faut-il réserver ?',
        a: 'Nous vous conseillons de réserver 48h à une semaine à l’avance, mais nous traitons également les urgences selon la disponibilité de nos équipes.',
      },
      {
        q: 'Comment éliminez-vous les traces de peinture sur les vitres sans les rayer ?',
        a: 'Nous utilisons des racloirs professionnels à lames de sécurité interchangeables et des solvants doux neutres pour les surfaces sensibles.',
      },
    ],
  },
  {
    id: 'appartements',
    slug: 'nettoyage-appartements',
    title: 'Nettoyage d’appartements & maisons',
    shortDesc: 'Remise à propre approfondie avant emménagement, après déménagement ou grand nettoyage saisonnier.',
    fullDesc: 'Que vous soyez locataire, propriétaire ou bailleur, nous transformons votre logement du sol au plafond. Un nettoyage soigné pour un emménagement serein ou pour récupérer l’intégralité de votre caution.',
    image: '/images/nettoyage-appartement.jpg',
    iconName: 'Home',
    features: [
      'Nettoyage en profondeur des cuisines (four, hotte, placards intérieurs)',
      'Détartrage des salles de bains, robinetteries et parois de douche',
      'Lavage minutieux de toutes les baies vitrées et moustiquaires',
      'Lessivage des portes, plinthes et interrupteurs',
      'Nettoyage des terrasses, balcons et grilles de sécurité',
      'Désodorisation et aération des espaces',
    ],
    checklist: [
      {
        category: 'Cuisine complète',
        tasks: ['Dégraissage hotte et crédence', 'Nettoyage intérieur/extérieur des placards', 'Détartrage évier et robinet'],
      },
      {
        category: 'Salles d’eau & sanitaires',
        tasks: ['Suppression du tartre et des traces de calcaire', 'Nettoyage des joints et bondes', 'Désinfection antibactérienne'],
      },
      {
        category: 'Chambres & séjour',
        tasks: ['Nettoyage des placards et penderies', 'Lavage des sols avec produit parfumé', 'Dépoussiérage des ventilateurs et climatiseurs'],
      },
      {
        category: 'Extérieurs & ouvertures',
        tasks: ['Brossage balcons et terrasses', 'Lavage des vitres intérieures et extérieures', 'Nettoyage des rails de fenêtres coulissantes'],
      },
    ],
    audience: [
      { title: 'Locataires en état des lieux', desc: 'Rendez votre logement impeccable pour sécuriser la restitution de votre dépôt de garantie.' },
      { title: 'Nouveaux occupants', desc: 'Emménagez dans un lieu frais, désinfecté et parfaitement sain dès le premier jour.' },
      { title: 'Propriétaires & Airbnb', desc: 'Maintenez une réputation 5 étoiles grâce à des standards hôteliers irréprochables.' },
    ],
    faqs: [
      {
        q: 'Dois-je être présent pendant la prestation ?',
        a: 'Vous pouvez nous accueillir au début pour nous faire visiter et revenir pour le contrôle final, ou bien rester sur place si vous le souhaitez.',
      },
      {
        q: 'Fournissez-vous les serpillières, escabeaux et produits ?',
        a: 'Oui, notre équipe arrive totalement autonome avec tout l’équipement nécessaire.',
      },
    ],
  },
];

export const zonesData: ZoneItem[] = [
  {
    id: 'cotonou',
    slug: 'cotonou',
    name: 'Cotonou',
    region: 'Littoral',
    shortDesc: 'Intervention rapide dans tous les quartiers de la métropole économique pour bureaux, résidences et locaux commerciaux.',
    description: 'Cœur économique du Bénin, Cotonou concentre sièges d’entreprises, ambassades, banques et résidences de standing. Nos équipes mobiles sont déployées pour intervenir rapidement sans subir les ralentissements du trafic.',
    quartiers: ['Haie Vive', 'Cadjèhoun', 'Ganhi', 'Akpakpa', 'Fidjrossè', 'Menontin', 'Agla', 'Kouhounou', 'Gbégamey', 'Zongo', 'Saint-Michel', 'Pléssité'],
    specifics: [
      'Proximité de la côte : gestion de l’air salin et de l’humidité sur les baies vitrées',
      'Activité commerciale intense : interventions tôt le matin ou en soirée',
      'Accès rapide aux quartiers d’affaires (Ganhi, Haie Vive)',
    ],
    advantages: [
      'Délais de déplacement réduits grâce à nos équipes sectorisées',
      'Disponibilité 6j/7 avec permanence d’urgence le samedi',
      'Références solides auprès des entreprises du Littoral',
    ],
  },
  {
    id: 'abomey-calavi',
    slug: 'abomey-calavi',
    name: 'Abomey-Calavi',
    region: 'Atlantique',
    shortDesc: 'Service complet pour nouvelles constructions, villas, complexes résidentiels et commerces en pleine expansion.',
    description: 'Ville à la croissance la plus rapide du Bénin, Abomey-Calavi accueille de nombreux chantiers neufs, villas familiales et commerces. Nous y réalisons quotidiennement des nettoyages de fin de chantier et d’emménagement.',
    quartiers: ['Arconville', 'Bidossessi', 'Zogbadjè', 'Tankpè', 'Godomey', 'Togbin', 'Ouèdo', 'Akassato', 'KPOTA', 'Cité Houéyiho', 'Glo-Djigbé'],
    specifics: [
      'Forte concentration de chantiers neufs et rénovations récentes',
      'Présence de poussières de latérite nécessitant des brossages et décapages ciblés',
      'Grandes superficies résidentielles et villas clôturées',
    ],
    advantages: [
      'Équipement haute pression adapté aux sols extérieurs en pavés ou béton',
      'Tarification claire au m² pour les grandes surfaces',
      'Agents locaux connaissant parfaitement les voies d’accès',
    ],
  },
  {
    id: 'porto-novo',
    slug: 'porto-novo',
    name: 'Porto-Novo',
    region: 'Ouémé',
    shortDesc: 'Nettoyage des institutions, résidences de caractère et bâtiments administratifs de la capitale.',
    description: 'Capitale politique et patrimoniale, Porto-Novo se distingue par ses bâtiments administratifs, résidences traditionnelles et nouveaux lotissements. Notre équipe intervient avec rigueur et respect du patrimoine bâti.',
    quartiers: ['Ouando', 'Avakpa', 'Djassin', 'Tokpota', 'Louho', 'Attakè', 'Kandévié', 'Dowa', 'Donoukin', 'Hlogou', 'Agbokou'],
    specifics: [
      'Bâtiments administratifs et ministères nécessitant protocole et discrétion',
      'Sols en carreaux anciens ou ciment poli demandant des produits neutres',
      'Intervention coordonnée pour éviter les trajets multiples',
    ],
    advantages: [
      'Possibilité de planning fixe hebdomadaire',
      'Devis transparent sans supplément de déplacement caché',
      'Superviseur dédié pour chaque opération',
    ],
  },
];

export const engagements = [
  {
    id: 1,
    title: 'Visite préalable ou échange précis',
    desc: 'Nous évaluons vos surfaces et contraintes pour vous proposer une solution dimensionnée au juste besoin.',
    icon: 'SearchCheck',
  },
  {
    id: 2,
    title: 'Équipe formée et équipée',
    desc: 'Agents qualifiés, dotés de matériel professionnel moderne et formés aux techniques de préservation des revêtements.',
    icon: 'ShieldCheck',
  },
  {
    id: 3,
    title: 'Produits adaptés aux surfaces',
    desc: 'Sélection rigoureuse de détergents respectueux de vos carrelages, bois, métaux et vitrages.',
    icon: 'Sparkles',
  },
  {
    id: 4,
    title: 'Respect des délais convenus',
    desc: 'Ponctualité stricte et engagement sur le temps de prestation pour ne jamais bloquer votre organisation.',
    icon: 'Clock',
  },
  {
    id: 5,
    title: 'Contrôle qualité systématique',
    desc: 'Une fiche de vérification est passée en revue avec vous avant de clore l’intervention.',
    icon: 'CheckCircle2',
  },
];

export const methodSteps = [
  {
    step: '01',
    title: 'Prise de contact',
    desc: 'Vous nous contactez par téléphone, WhatsApp ou formulaire de devis en décrivant votre besoin.',
  },
  {
    step: '02',
    title: 'Évaluation des locaux',
    desc: 'Nous examinons la surface, les accès, le niveau d’encrassement et les matériaux pour calibrer l’équipe.',
  },
  {
    step: '03',
    title: 'Devis clair et sans engagement',
    desc: 'Vous recevez une proposition chiffrée détaillée précisant ce qui est inclus et le délai d’exécution.',
  },
  {
    step: '04',
    title: 'Réalisation de l’intervention',
    desc: 'Nos agents interviennent avec matériel complet et méthodologie par zones selon les règles de l’art.',
  },
  {
    step: '05',
    title: 'Contrôle et validation avec vous',
    desc: 'Tour de vérification final : nous ne partons que lorsque chaque pièce correspond à vos attentes.',
  },
];

export const testimonials = [
  {
    name: 'Patrice A.',
    role: 'Directeur d’agence',
    city: 'Cotonou (Haie Vive)',
    text: 'Nous avons confié l’entretien de nos 250 m² de bureaux à BEC Nettoyage. L’équipe est ponctuelle, discrète et les bureaux sont impeccables chaque matin.',
    rating: 5,
  },
  {
    name: 'Mariam K.',
    role: 'Propriétaire',
    city: 'Abomey-Calavi (Arconville)',
    text: 'Après 6 mois de travaux dans notre villa, le sol était couvert de ciment et de poussière. En une journée, leur équipe a remis toute la maison à neuf. Bluffant !',
    rating: 5,
  },
  {
    name: 'Florent D.',
    role: 'Promoteur immobilier',
    city: 'Porto-Novo (Tokpota)',
    text: 'Partenaire indispensable pour nos livraisons d’appartements neufs. Les acquéreurs sont ravis et le procès-verbal de livraison se passe sans accroc.',
    rating: 5,
  },
];

export const conseilsArticles: ConseilArticle[] = [
  {
    id: 'choisir-entreprise-nettoyage-benin',
    slug: 'choisir-entreprise-nettoyage-benin',
    title: 'Comment choisir une entreprise de nettoyage professionnel au Bénin ?',
    category: 'Conseils pratiques',
    readTime: '5 min',
    date: '10 Novembre 2026',
    summary: 'Les critères essentiels pour sélectionner un prestataire de confiance à Cotonou, Calavi ou Porto-Novo sans mauvaise surprise.',
    content: [
      {
        sectionTitle: '1. Vérifier la clarté de la proposition commerciale',
        paragraphs: [
          'Au Bénin, beaucoup de prestataires proposent des tarifs forfaitaires au téléphone sans même demander la superficie exacte ni le type de sol. Une entreprise sérieuse commence toujours par poser des questions précises sur vos locaux.',
          'Exigez un devis écrit qui détaille ce qui est inclus : nettoyage des vitres, dépoussiérage des plinthes, détachage, ou encore évacuation des déchets.',
        ],
        bulletPoints: [
          'Le nombre d’agents mobilisés',
          'La liste exacte des pièces et surfaces prises en charge',
          'La fourniture du matériel et des produits détergents',
        ],
      },
      {
        sectionTitle: '2. S’assurer de la qualité du matériel utilisé',
        paragraphs: [
          'Le simple balai et la serpillière traditionnelle ne suffisent pas pour un résultat professionnel. Vérifiez si l’entreprise dispose d’aspirateurs industriels, de monobrosses pour les carrelages et de chiffons microfibres propres.',
          'L’usage de produits agressifs (comme l’acide chlorhydrique non maîtrisé) peut détruire vos carreaux ou faire rouiller votre robinetterie.',
        ],
      },
      {
        sectionTitle: '3. Exiger un contrôle qualité en fin de prestation',
        paragraphs: [
          'Une entreprise d’excellence organise systématiquement une visite de conformité à la fin des travaux. Vous devez pouvoir vérifier le résultat pièce par pièce avant le règlement final.',
        ],
      },
    ],
  },
  {
    id: 'etapes-nettoyage-fin-de-chantier',
    slug: 'etapes-nettoyage-fin-de-chantier',
    title: 'Quelles sont les étapes d’un nettoyage de fin de chantier ?',
    category: 'Fin de chantier',
    readTime: '6 min',
    date: '04 Novembre 2026',
    summary: 'Du dépoussiérage initial à la mise en brillance des surfaces : découvrez le déroulement chronologique d’une remise en état après travaux.',
    content: [
      {
        sectionTitle: 'Étape 1 : Le débarras des gravats et résidus',
        paragraphs: [
          'Avant toute action à l’eau, il est indispensable de retirer les chutes de placo, sacs de ciment vides et emballages plastiques de protection.',
        ],
      },
      {
        sectionTitle: 'Étape 2 : Le dépoussiérage aérien et des murs',
        paragraphs: [
          'La poussière de ciment retombe lentement. Si vous lavez le sol en premier, la poussière des murs viendra le salir à nouveau. On procède toujours du haut vers le bas.',
        ],
        bulletPoints: [
          'Dépoussiérage des plafonds et corniches',
          'Aspiration des coffres de volets et rebords',
          'Essuyage doux des murs peints',
        ],
      },
      {
        sectionTitle: 'Étape 3 : Le décapage des sols et joints',
        paragraphs: [
          'C’est la phase la plus technique : élimination du voile blanc de ciment à l’aide d’un produit décapant spécifique neutre et d’une monobrosse.',
        ],
      },
      {
        sectionTitle: 'Étape 4 : Le grattage des vitres et huisseries',
        paragraphs: [
          'Les projections de peinture et de colle nécessitent des racloirs spéciaux sans risque de micro-rayures sur le verre.',
        ],
      },
    ],
  },
  {
    id: 'frequence-nettoyage-bureaux-entreprise',
    slug: 'frequence-nettoyage-bureaux-entreprise',
    title: 'À quelle fréquence faut-il nettoyer les bureaux d’une entreprise ?',
    category: 'Bureaux',
    readTime: '4 min',
    date: '28 Octobre 2026',
    summary: 'Quotidien, hebdomadaire ou bimensuel ? Comment calibrer le rythme d’entretien selon l’affluence et vos activités professionnelles.',
    content: [
      {
        sectionTitle: 'Les critères déterminants',
        paragraphs: [
          'Le nombre de collaborateurs sur site, l’accueil régulier de clients extérieurs et la situation géographique (proximité d’une voie sablonneuse ou bitumée) modifient considérablement la fréquence requise.',
        ],
        bulletPoints: [
          'Entreprise de plus de 10 personnes : passage quotidien recommandé',
          'Bureaux de 3 à 8 personnes : 2 à 3 passages par semaine',
          'Cabinet recevant peu de public : 1 passage hebdomadaire approfondi',
        ],
      },
      {
        sectionTitle: 'Les zones critiques à désinfecter au quotidien',
        paragraphs: [
          'Même si les bureaux ne sont aspirés que deux fois par semaine, les sanitaires et les corbeilles doivent impérativement être traités chaque jour.',
        ],
      },
    ],
  },
  {
    id: 'criteres-prix-nettoyage-professionnel',
    slug: 'criteres-prix-nettoyage-professionnel',
    title: 'Quels critères influencent le prix d’un nettoyage professionnel ?',
    category: 'Conseils pratiques',
    readTime: '5 min',
    date: '20 Octobre 2026',
    summary: 'Comprendre comment est calculé le montant d’une prestation de nettoyage au Bénin pour comparer les offres en toute transparence.',
    content: [
      {
        sectionTitle: '1. La superficie et la typologie des locaux',
        paragraphs: [
          'Le nombre de mètres carrés constitue la base, mais le ratio pièces d’eau / surfaces nues change le temps d’intervention. Une maison avec 4 salles de bains demande plus d’efforts qu’un open space de surface équivalente.',
        ],
      },
      {
        sectionTitle: '2. L’état initial de propreté',
        paragraphs: [
          'Un entretien régulier coûte proportionnellement moins cher qu’une remise en état après deux ans d’inoccupation ou après des travaux lourds de maçonnerie.',
        ],
      },
      {
        sectionTitle: '3. Les prestations annexes souhaitées',
        paragraphs: [
          'Le lessivage des murs, le traitement spécial des terrasses au nettoyeur haute pression ou le nettoyage des moustiquaires peuvent s’ajouter au devis de base.',
        ],
      },
    ],
  },
  {
    id: 'entretenir-sols-sans-abimer',
    slug: 'entretenir-sols-sans-abimer',
    title: 'Comment entretenir les sols sans les abîmer ?',
    category: 'Conseils pratiques',
    readTime: '4 min',
    date: '15 Octobre 2026',
    summary: 'Carrelages grès cérame, marbre, parquets ou bétons cirés : les bons gestes et produits pour préserver leur éclat durablement.',
    content: [
      {
        sectionTitle: 'Le danger des acides sur les carrelages modernes',
        paragraphs: [
          'Au Bénin, la mauvaise habitude de verser de l’acide pur pour enlever les taches attaque définitivement l’émail des carreaux et creuse les joints de ciment.',
          'Préférez toujours des détergents dégraissants à pH neutre ou alcalin modéré.',
        ],
      },
      {
        sectionTitle: 'La règle du double seau',
        paragraphs: [
          'Laver un sol avec une eau déjà souillée ne fait que déplacer la poussière. Utiliser un seau pour l’eau savonneuse et un seau pour le rinçage est la clé de sols brillants.',
        ],
      },
    ],
  },
  {
    id: 'preparer-appartement-avant-emmenagement',
    slug: 'preparer-appartement-avant-emmenagement',
    title: 'Comment préparer un appartement avant un emménagement ?',
    category: 'Particuliers',
    readTime: '5 min',
    date: '10 Octobre 2026',
    summary: 'La to-do list idéale pour nettoyer un appartement vide avant de poser vos cartons et vos meubles.',
    content: [
      {
        sectionTitle: 'Pourquoi nettoyer avant l’arrivée des meubles',
        paragraphs: [
          'Une fois les canapés et armoires en place, atteindre les plinthes et l’arrière des meubles devient impossible. Profitez de l’espace vide pour tout assainir.',
        ],
        bulletPoints: [
          'Désinfecter l’intérieur des placards de cuisine',
          'Détartrer les robinetteries et canalisations',
          'Laver les moustiquaires et les vitres',
          'Vérifier l’absence d’insectes ou d’humidité cachée',
        ],
      },
    ],
  },
  {
    id: 'pourquoi-nettoyage-apres-travaux',
    slug: 'pourquoi-nettoyage-apres-travaux',
    title: 'Pourquoi réaliser un nettoyage professionnel après des travaux ?',
    category: 'Fin de chantier',
    readTime: '5 min',
    date: '02 Octobre 2026',
    summary: 'La poussière de chantier est abrasive et nocive pour les poumons : pourquoi une intervention spécialisée s’impose.',
    content: [
      {
        sectionTitle: 'Un enjeu de santé respiratoire',
        paragraphs: [
          'Les microparticules de silice et de plâtre restent en suspension dans l’air pendant des semaines si elles ne sont pas capturées par des filtres industriels adaptés.',
        ],
      },
      {
        sectionTitle: 'Protéger vos nouveaux équipements',
        paragraphs: [
          'Faire fonctionner une climatisation dans un logement poussiéreux bouche instantanément les filtres et endommage le compresseur.',
        ],
      },
    ],
  },
  {
    id: 'maintenir-bureau-propre-quotidien',
    slug: 'maintenir-bureau-propre-quotidien',
    title: 'Comment maintenir un bureau propre et accueillant au quotidien ?',
    category: 'Bureaux',
    readTime: '4 min',
    date: '25 Septembre 2026',
    summary: '7 habitudes simples à adopter en entreprise pour préserver la propreté entre chaque passage de l’équipe de ménage.',
    content: [
      {
        sectionTitle: 'Des règles simples pour toute l’équipe',
        paragraphs: [
          'Une entreprise propre est le résultat d’une collaboration harmonieuse entre les occupants et l’équipe d’entretien.',
        ],
        bulletPoints: [
          'Libérer son plan de travail le soir pour faciliter le dépoussiérage',
          'Consommer les repas dans la cafétéria plutôt que sur les claviers',
          'Signaler immédiatement tout déversement liquide',
          'Aérer les locaux 10 minutes chaque matin',
        ],
      },
    ],
  },
];

export const faqList: FaqItem[] = [
  {
    id: 'faq-1',
    category: 'Zones',
    question: 'Dans quelles villes intervenez-vous ?',
    answer: 'Nous intervenons principalement dans toute l’agglomération de Cotonou, la commune d’Abomey-Calavi (y compris Akassato, Godomey, Togbin) et la ville de Porto-Novo. Pour des chantiers d’envergure dans d’autres localités du Bénin (Ouidah, Allada, Bohicon), nous étudions votre demande sur devis.',
  },
  {
    id: 'faq-2',
    category: 'Services',
    question: 'Quels types de locaux nettoyez-vous ?',
    answer: 'Nous prenons en charge les bureaux d’entreprises, sièges administratifs, commerces, agences bancaires, appartements, villas privées, immeubles résidentiels et chantiers de construction ou rénovation.',
  },
  {
    id: 'faq-3',
    category: 'Services',
    question: 'Proposez-vous des interventions ponctuelles et régulières ?',
    answer: 'Oui, nous proposons les deux formules : interventions ponctuelles (remise en état, fin de chantier, grand ménage) et contrats d’entretien récurrents avec passages programmés (quotidien, 2 à 3 fois par semaine ou hebdomadaire).',
  },
  {
    id: 'faq-4',
    category: 'Tarifs',
    question: 'Comment obtenir un devis ?',
    answer: 'Vous pouvez utiliser notre formulaire de devis en ligne sur cette application, nous contacter par téléphone au +229 97 00 00 00 ou nous écrire directement sur WhatsApp. Nous vous répondons rapidement avec une proposition claire et sans engagement.',
  },
  {
    id: 'faq-5',
    category: 'Tarifs',
    question: 'Quels éléments influencent le prix ?',
    answer: 'Le tarif dépend de la superficie en m², de la nature des lieux (bureaux ou habitation), du niveau d’encrassement initial (chantier lourd vs entretien régulier), de la fréquence et des options annexes (vitrerie en hauteur, lessivage de murs).',
  },
  {
    id: 'faq-6',
    category: 'Général',
    question: 'Fournissez-vous le matériel et les produits de nettoyage ?',
    answer: 'Oui, absolument. Nos agents arrivent entièrement équipés : aspirateurs professionnels, monobrosses, perches télescopiques, raclettes à vitres, microfibres et produits d’entretien dégraissants, détartrants et désinfectants certifiés.',
  },
  {
    id: 'faq-7',
    category: 'Interventions',
    question: 'Peut-on programmer une intervention à une date ou heure précise ?',
    answer: 'Oui. Pour les bureaux, nous intervenons fréquemment tôt le matin avant l’ouverture ou en soirée. Pour les appartements et chantiers, nous planifions ensemble la date exacte de début et l’heure estimée de fin.',
  },
  {
    id: 'faq-8',
    category: 'Services',
    question: 'Réalisez-vous le nettoyage après des travaux de rénovation ?',
    answer: 'C’est l’une de nos spécialités majeures. Nous disposons des équipements nécessaires pour aspirer la poussière de plâtre, gratter la peinture sans rayer les vitres et décaper les voiles de ciment sur les carrelages.',
  },
  {
    id: 'faq-9',
    category: 'Interventions',
    question: 'Comment se déroule une première intervention ?',
    answer: 'Notre superviseur et l’équipe arrivent à l’heure fixée. Un rapide tour initial permet de confirmer les priorités. Les agents appliquent notre méthodologie par zones. Enfin, un contrôle contradictoire est effectué avec vous avant la signature du bon d’intervention.',
  },
  {
    id: 'faq-10',
    category: 'Général',
    question: 'Le personnel est-il discret et de confiance dans mes locaux ?',
    answer: 'Chaque agent de BEC Nettoyage / Propreté Plus Bénin est recruté après vérification d’antécédents, formé à la confidentialité et aux règles de sécurité. Ils portent une tenue de travail identifiable et respectent scrupuleusement vos biens.',
  },
  {
    id: 'faq-11',
    category: 'Interventions',
    question: 'Que se passe-t-il si un point a été oublié ou imparfait ?',
    answer: 'Notre engagement de garantie satisfaction prévoit qu’en cas de remarque justifiée lors du contrôle de fin de prestation, nos agents reprennent immédiatement la surface concernée sans aucun frais supplémentaire.',
  },
  {
    id: 'faq-12',
    category: 'Interventions',
    question: 'Intervenez-vous en dehors des heures de travail et le week-end ?',
    answer: 'Oui, nos équipes travaillent du lundi au samedi de 7h30 à 19h00, et nous organisons des astreintes de nuit ou le dimanche pour les besoins spécifiques des entreprises et des livraisons de chantier urgentes.',
  },
];
