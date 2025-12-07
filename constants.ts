
import { Language } from './types';

export const TRANSLATIONS = {
  fr: {
    nav: {
      home: "Accueil",
      services: "Services",
      portfolio: "Réalisations",
      team: "Équipe",
      about: "À propos",
      contact: "Contact",
      quote: "Devis",
      admin: "Admin"
    },
    hero: {
      title: "Solutions Informatiques d'Avenir",
      subtitle: "Africa Infotech Innovation propulse votre entreprise vers le succès numérique avec des technologies de pointe.",
      cta_services: "Nos Services",
      cta_contact: "Contactez-nous"
    },
    about: {
      title: "À Propos de Nous",
      mission: "Notre Mission",
      mission_text: "Accélérer la transformation digitale en Afrique et dans le monde.",
      vision: "Notre Vision",
      vision_text: "Être le leader de l'innovation technologique accessible et sécurisée.",
      values: "Nos Valeurs",
      values_text: "Innovation, Intégrité, Excellence, Engagement."
    },
    services: {
      title: "Nos Expertises",
      more_details: "Voir détails",
      request_quote: "Demander un devis"
    },
    portfolio: {
      title: "Nos Réalisations",
      subtitle: "Découvrez nos projets récents qui ont transformé des entreprises."
    },
    team: {
      title: "Notre Équipe",
      subtitle: "Des experts passionnés dévoués à votre réussite."
    },
    contact: {
      title: "Contactez-nous",
      name: "Nom complet",
      email: "Email",
      phone: "Téléphone",
      subject: "Sujet",
      message: "Message",
      send: "Envoyer",
      success: "Message envoyé avec succès!"
    },
    quote: {
      title: "Demander un Devis",
      company: "Entreprise (Optionnel)",
      service_type: "Type de Service",
      budget: "Budget Estimé",
      details: "Détails du projet",
      submit: "Soumettre la demande"
    },
    footer: {
      rights: "Tous droits réservés.",
      quick_links: "Liens Rapides",
      contact_info: "Infos Contact"
    }
  },
  en: {
    nav: {
      home: "Home",
      services: "Services",
      portfolio: "Portfolio",
      team: "Team",
      about: "About",
      contact: "Contact",
      quote: "Get Quote",
      admin: "Admin"
    },
    hero: {
      title: "Future-Ready IT Solutions",
      subtitle: "Africa Infotech Innovation drives your business towards digital success with cutting-edge technologies.",
      cta_services: "Our Services",
      cta_contact: "Contact Us"
    },
    about: {
      title: "About Us",
      mission: "Our Mission",
      mission_text: "Accelerating digital transformation in Africa and globally.",
      vision: "Our Vision",
      vision_text: "To be the leader in accessible and secure technological innovation.",
      values: "Our Values",
      values_text: "Innovation, Integrity, Excellence, Commitment."
    },
    services: {
      title: "Our Expertise",
      more_details: "View Details",
      request_quote: "Request Quote"
    },
    portfolio: {
      title: "Our Portfolio",
      subtitle: "Discover our recent projects that transformed businesses."
    },
    team: {
      title: "Our Team",
      subtitle: "Passionate experts dedicated to your success."
    },
    contact: {
      title: "Contact Us",
      name: "Full Name",
      email: "Email",
      phone: "Phone",
      subject: "Subject",
      message: "Message",
      send: "Send",
      success: "Message sent successfully!"
    },
    quote: {
      title: "Request a Quote",
      company: "Company (Optional)",
      service_type: "Service Type",
      budget: "Estimated Budget",
      details: "Project Details",
      submit: "Submit Request"
    },
    footer: {
      rights: "All rights reserved.",
      quick_links: "Quick Links",
      contact_info: "Contact Info"
    }
  }
};

export const INITIAL_SERVICES = [
  {
    id: '1',
    title: 'Développement Web & Mobile',
    shortDescription: 'Création de sites vitrines, e-commerce et applications mobiles performantes.',
    fullDescription: 'Nous concevons des applications web et mobiles sur mesure, utilisant les dernières technologies (React, Node.js, Flutter) pour garantir rapidité, sécurité et scalabilité.',
    iconName: 'Code',
    imageUrl: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '2',
    title: 'Cybersécurité & Audit',
    shortDescription: 'Protection de vos données et audit de sécurité de vos infrastructures.',
    fullDescription: 'Nos experts analysent vos vulnérabilités et mettent en place des pare-feu, des protocoles de chiffrement et des stratégies de sauvegarde pour sécuriser votre entreprise.',
    iconName: 'ShieldCheck',
    imageUrl: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '3',
    title: 'Marketing Digital & SEO',
    shortDescription: 'Boostez votre visibilité et attirez plus de clients qualifiés.',
    fullDescription: 'Stratégies SEO, gestion des réseaux sociaux (Community Management) et campagnes publicitaires ciblées pour maximiser votre ROI.',
    iconName: 'TrendingUp',
    imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '4',
    title: 'Maintenance Informatique',
    shortDescription: 'Support technique et maintenance préventive de votre parc informatique.',
    fullDescription: 'Assistance 24/7, réparation matérielle, installation de logiciels et gestion de réseaux locaux pour assurer la continuité de vos activités.',
    iconName: 'Wrench',
    imageUrl: 'https://images.unsplash.com/photo-1597852074816-d933c7d2b988?auto=format&fit=crop&w=800&q=80'
  }
];

export const INITIAL_TEAM = [
  {
    id: '1',
    name: 'Jean K.',
    role: 'CEO & Fondateur',
    bio: 'Expert en stratégie digitale avec 10 ans d\'expérience.',
    imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: '2',
    name: 'Amina S.',
    role: 'Lead Developer',
    bio: 'Passionnée par le code propre et les architectures scalables.',
    imageUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: '3',
    name: 'Marc T.',
    role: 'Expert Cybersécurité',
    bio: 'Protège les infrastructures critiques contre les cybermenaces.',
    imageUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80'
  }
];

export const INITIAL_PROJECTS = [
  {
    id: '1',
    title: 'E-commerce Benin',
    category: 'Web Development',
    description: 'Une plateforme de vente en ligne complète pour le marché local avec paiement mobile money.',
    imageUrl: 'https://images.unsplash.com/photo-1556740738-b6a63e27c4df?auto=format&fit=crop&w=800&q=80',
    date: '2023-11-15',
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    client: 'Benin Market SA'
  },
  {
    id: '2',
    title: 'SecurBank App',
    category: 'Mobile App',
    description: 'Application bancaire ultra-sécurisée avec authentification biométrique pour une microfinance.',
    imageUrl: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80',
    date: '2024-01-20',
    technologies: ['Flutter', 'Firebase', 'FaceID API'],
    client: 'MicroFinance Plus'
  },
  {
    id: '3',
    title: 'AgriConnect Plateforme',
    category: 'Web Development',
    description: 'Système de gestion agricole connectant les producteurs ruraux aux acheteurs internationaux.',
    imageUrl: 'https://images.unsplash.com/photo-1560493676-04071c5f467b?auto=format&fit=crop&w=800&q=80',
    date: '2024-02-10',
    technologies: ['Vue.js', 'Laravel', 'MySQL'],
    client: 'AgriCoop Ltée'
  },
  {
    id: '4',
    title: 'Smart City Dashboard',
    category: 'Data & Analytics',
    description: 'Tableau de bord interactif pour la gestion du trafic et des services urbains en temps réel.',
    imageUrl: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=800&q=80',
    date: '2023-12-05',
    technologies: ['Python', 'Django', 'D3.js', 'PostgreSQL'],
    client: 'Mairie de Cotonou'
  },
  {
    id: '5',
    title: 'HealthCare Plus',
    category: 'Software',
    description: 'Logiciel de gestion hospitalière (ERP) optimisant le parcours patient et la facturation.',
    imageUrl: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=800&q=80',
    date: '2024-03-01',
    technologies: ['C#', '.NET Core', 'Azure', 'SQL Server'],
    client: 'Clinique Espoir'
  },
  {
    id: '6',
    title: 'LogiTrack Express',
    category: 'Mobile App',
    description: 'Application de suivi logistique en temps réel pour une grande entreprise de transport.',
    imageUrl: 'https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?auto=format&fit=crop&w=800&q=80',
    date: '2023-10-15',
    technologies: ['React Native', 'Google Maps API', 'AWS'],
    client: 'TransBenin'
  },
  {
    id: '7',
    title: 'CyberDefend Audit',
    category: 'Cybersécurité',
    description: 'Audit complet et renforcement de l\'infrastructure réseau d\'une agence gouvernementale.',
    imageUrl: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80',
    date: '2024-01-05',
    technologies: ['Kali Linux', 'Wireshark', 'Metasploit'],
    client: 'Gouv Benin'
  },
  {
    id: '8',
    title: 'EduTech Academy',
    category: 'E-learning',
    description: 'Plateforme d\'apprentissage en ligne interactive pour les universités avec vidéoconférence.',
    imageUrl: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&w=800&q=80',
    date: '2023-09-20',
    technologies: ['Moodle', 'PHP', 'WebRTC'],
    client: 'Université Privée'
  },
  {
    id: '9',
    title: 'SolarMonitor IoT',
    category: 'IoT',
    description: 'Solution IoT pour le monitoring à distance de parcs solaires et la gestion énergétique.',
    imageUrl: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=800&q=80',
    date: '2024-02-28',
    technologies: ['Arduino', 'MQTT', 'Grafana', 'InfluxDB'],
    client: 'Energy Solar'
  }
];
