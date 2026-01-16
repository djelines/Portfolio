
export const PERSONAL_INFO = {
  name: "Inès Charfi",
  role: "Développeuse Full Stack",
  email: "charines@outlook.fr",
  location: "Yvelines (78)",
  github: "https://github.com/djelines",
  linkedin: "https://www.linkedin.com/in/in%C3%A8s-c-7067a5343/",
  tagline: "Mon cerveau est comme du SQL : parfois il exécute des requêtes, parfois il est bloqué sur 'error 404 - brain not found'."
};

export const PROJECTS = [
  // Major Projects
  {
    title: "Banque Republic",
    description: "Application bancaire web pour la gestion de comptes virtuels, transactions et bénéficiaires avec dashboard interactif.",
    technologies: ["React", "Vite", "TailwindCSS", "FastAPI"],
    type: "Web",
    date: "2025",
    link: "https://banque-republic.micdev.fr/"
  },
  {
    title: "FeedFlow",
    description: "Plateforme SaaS de création et diffusion de sondages avec gestion des résultats et automatisations.",
    technologies: ["Laravel", "PHP", "Docker"],
    type: "Web",
    date: "2025",
    link: "https://feedflow.micdev.fr/"
  },
  {
    title: "Make it Code",
    description: "Application mobile gamifiée pour apprendre le développement via mini-jeux et progression guidée.",
    technologies: ["Flutter", "Dart", "Firebase"],
    type: "Mobile",
    date: "2025",
    link: "https://github.com/djelines/MakeItCode"
  },
  {
    title: "Coding Tool Box",
    description: "Plateforme pédagogique tout-en-un avec gestion des rôles, Kanban collaboratif et QCM dynamiques assistés par IA.",
    technologies: ["Laravel", "PHP", "MySQL", "Bootstrap"],
    type: "Web",
    date: "Avril 2025",
    link: "https://github.com/djelines/Projet_WEB"
  },
  {
    title: "Mon Carnet Automnal",
    description: "Application Todo minimaliste avec gestion des priorités et interface automnale moderne.",
    technologies: ["React", "TypeScript", "DaisyUI"],
    type: "Web",
    date: "Août 2024",
    link: "https://github.com/djelines/My-Autumn-Notebook"
  },

  // Game Dev
  {
    title: "Tic Tac Toe",
    description: "Jeu du morpion à deux joueurs avec détection de victoire et remise à zéro rapide.",
    technologies: ["React", "TailwindCSS"],
    type: "Game",
    date: "Août 2024",
    link: "https://github.com/djelines/TicTacToe"
  },
  {
    title: "NoBanJump",
    description: "Jeu de plateforme inspiré de Doodle Jump avec obstacles et bonus.",
    technologies: ["C#"],
    type: "Game",
    date: "Février 2024",
    link: "https://github.com/djelines/NoBanJump"
  },
  {
    title: "Combat Pokémon",
    description: "Jeu de combat Pokémon en équipes développé avec Pygame.",
    technologies: ["Python", "Pygame"],
    type: "Game",
    date: "Novembre 2024",
    link: "https://github.com/djelines/Pokemon_Fight"
  },
  {
    title: "This is a game",
    description: "Jeu stratégique multijoueur en console basé sur déplacement et destruction de cases.",
    technologies: ["Java"],
    type: "Game",
    date: "Février 2024",
    link: "https://github.com/djelines/This_is_Game"
  },
  {
    title: "l'Aventure de Link !",
    description: "Jeu de plateforme avec chronomètre, collecte de pièces et ennemis.",
    technologies: ["Python", "Pygame"],
    type: "Game",
    date: "Novembre 2024",
    link: "https://github.com/djelines/Link-s_Adventure_Run"
  },

  // Other Projects
  {
    title: "Système de réservation enseignants",
    description: "Plateforme de réservation de rendez-vous entre étudiants et professeurs avec gestion des disponibilités.",
    technologies: ["Laravel", "PHP", "JavaScript", "MySQL"],
    type: "Web",
    date: "Février 2024",
    link: "https://github.com/djelines/laravel_Edu.Lib"
  },
  {
    title: "Pharma2077",
    description: "Application console de gestion de pharmacie avec stocks, commandes et rôles.",
    technologies: ["Java"],
    type: "Software",
    date: "Février 2024",
    link: "https://github.com/djelines/Pharma2077"
  },
  {
    title: "Jeu de Mémoire",
    description: "Jeu de memory web avec gestion des scores persistés en base de données.",
    technologies: ["PHP", "MySQL", "Hack"],
    type: "Game",
    date: "Décembre 2024",
    link: "https://github.com/djelines/Game_Of_Memory"
  },
  {
    title: "2048",
    description: "Clone du jeu 2048 jouable en console avec gestion du score.",
    technologies: ["Java"],
    type: "Game",
    date: "Novembre 2024",
    link: "https://github.com/djelines/2048"
  },
  {
    title: "Chaud et Froid",
    description: "Jeu de logique où le joueur doit se rapprocher d’une cible en un nombre limité de coups.",
    technologies: ["Python", "Pygame"],
    type: "Game",
    date: "Novembre 2024",
    link: "https://github.com/djelines/Hot_and_Cold"
  }
];


export const EXPERIENCES = [
  {
    company: "ActivBold",
    role: "Développeur Logiciel",
    period: "Depuis août 2025",
    location: "Maisons-Laffitte (78)",
    description: [
      "Mise en place d'un système d'administration personnalisé.",
      "Intégration du SDK photo et suivi de la plateforme.",
      "Développement de fonctions AWS Lambda (Serverless).",
      "Rédaction et mise à jour de plusieurs documentations techniques."
    ]
  },
  {
    company: "Romuald Grignon",
    role: "Stagiaire Dev. Logiciel",
    period: "Mai 2025 - Juin 2025",
    location: "Maurecourt (78)",
    description: [
      "Création d'outils Python/Shell pour automatisation de tests.",
      "Participation projet Django/Java (sécurité, gestion de données).",
      "Refonte UX/UI, envois automatisés de courriels et amélioration des performances."
    ]
  },
  {
    company: "Esiee-IT",
    role: "Stagiaire Dev. Informatique",
    period: "Avril 2023",
    location: "Cergy (95)",
    description: [
      "Découverte d’Anaconda pour la gestion des environnements Python et l’exécution de projets IA",
      "Conception d’une IA en Python capable de reconnaître des visages/personnes à partir d’images", 
      "Expérimentations avec la carte micro:bit pour le développement de jeux et l’initiation à l’électronique"
    ]
  },
  {
    company: "Bouygues",
    role: "Stagiaire Dev. Informatique",
    period: "Nov. 2023",
    location: "Technopole Meudon (92)",
    description: [
      "Participation aux Girls@Tec de Bouygues Telecom.",
      "Expérience en réalité virtuelle avec casques VR et simulations interactives."
    ]
  }
];

export const EDUCATION = [
  {
    school: "ESIEE-IT",
    degree: "Bachelor en Développement de Solutions Numériques Sécurisées",
    period: "Depuis 2024",
    location: "Cergy (95)",
    description: [
      "Conception et développement web/mobile sécurisé.",
      "Maintenance d'applications sécurisées (web et mobile) avec maîtrise du front-end et back-end.",
      "Méthodologie Agile (Scrum).",
      "Travail en équipe Agile, Git, création d’interfaces UX/UI modernes et intégration de services sécurisés.", 
      "Alternance recherchée (3 sem. entreprise / 2 sem. école)."
    ]
  }
];

export const SKILLS = [
  {
    category: "Languages & Frameworks",
    items: ["Python", "Django", "FastAPI", "Java", "JavaScript", "React", "NextJS", "NodeJS", "HTML/CSS", "Tailwind", "Bootstrap", "PHP", "Laravel", "Dart", "Flutter"]
  },
  {
    category: "Bases de données",
    items: ["SQL", "PostgreSQL", "MySQL", "Firebase"]
  },
  {
    category: "Outils & Autres",
    items: ["Git", "Unity (C#)", "Terraform", "AWS Lambda", "Scrum", "DevOps", "Docker"]
  }
];

export const SOFT_SKILLS = [
  {
    title: "Esprit Collaboratif",
    color: "bg-[#fff7d1]", // Yellow
    rotation: "-rotate-2"
  },
  {
    title: "Aisance Relationnelle",
    color: "bg-[#ffe4e1]", // Pink
    rotation: "rotate-2"
  },
  {
    title: "Ténacité",
    color: "bg-[#e0f7fa]", // Cyan
    rotation: "-rotate-1"
  },
  {
    title: "Curiosité",
    color: "bg-[#f0f4c3]", // Lime
    rotation: "rotate-1"
  }
];
