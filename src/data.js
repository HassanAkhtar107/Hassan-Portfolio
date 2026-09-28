export const personalInfo = {
  name: "Muhammad Hassan Akhtar",
  title: "Full-Stack Developer",
  description: "Software Engineer crafting digital experiences with 2+ year of expertise.",
  description1: "Specializing in full-stack web & app development, DevOps practices, and scalable solutions that drive business growth.",
  location: "Lahore, Pakistan",
  email: "m.hassanakhtar107@gmail.com",
  phone: "+92-303-4400107",
  linkedin: "https://www.linkedin.com/in/muhammad-hassanakhtar/",
  github: "https://github.com/HassanAkhtar107",
  resumeUrl: "/M Hassan Akhtar.pdf",
  stats: [
    { label: "Projects", value: "10+" },
    { label: "Years Exp", value: "2+" },
    { label: "Client Satisfaction", value: "100%" }
  ]
};

export const skills = [
  {
    category: "Programming Languages",
    icon: "code",
    items: ["JavaScript", "Python", "TypeScript"]
  },
  {
    category: "Frameworks & Libraries",
    icon: "layers",
    items: ["React", "Next.js", "React Native", "Django Rest Framework(DRF)"]
  },
  {
    category: "DevOps & Tools",
    icon: "settings",
    items: ["Docker", "Git", "CI/CD Pipeline", "Firebase", "PostgreSQL", "MySQL", "SQLite"]
  },
  {
    category: "AI & DEVELOPMENT TOOLS",
    icon: "brain",
    items: ["Cursor", "Claude", "Google Antigravity"]
  },
  {
    category: "UI & Styling",
    icon: "palette",
    items: ["Tailwind", "MUI", "CSS Modules", "Responsive Design"]
  }
];

export const experience = [
  {
    title: "Full-Stack Developer",
    company: "Valueans",
    location: "Lahore, Pakistan",
    period: "June 2025 — April 2026",
    description: "Working on complex web and mobile applications using React Native, React, Next.js, and Django. Leading feature development and ensuring high-performance code across the stack.",
    technologies: ["React Native", "React", "Next.js", "Django(DRF)", "PostgreSQL", "Docker", "CI/CD"]
  },
  {
    title: "App Developer",
    company: "Daira Engineering",
    location: "Lahore, Pakistan",
    period: "Nov 2024 — May 2025",
    description: "Focused on building high-quality mobile applications with React Native. Collaborated with UI/UX designers to implement pixel-perfect designs.",
    technologies: ["React Native", "Responsive UI", "Weather API"]
  }
];

export const projects = [
  {
    title: "Patient Records Management",
    description: "Secure hospital portal for managing branches and patient records with advanced data filtering and sorting.",
    detailDescription: "Patient Records Management is a hospital management portal designed to help healthcare organizations manage multiple branches and patient records in one centralized system. The platform provides organized patient data management with advanced filtering, sorting, and data table functionality, making it easier for staff to search, view, and manage patient information efficiently.",
    image: "/images/PatientRecord.jpg",
    technologies: ["React", "DRF", "PostgreSQL", "agGrid", "MUI", "Docker"],
    codeLink: "#",
    demoLink: "https://referralynx.com/",
    contribution: [
      "Worked on frontend in React with MUI components and agGrid for advanced data tables.",
      "Developed the backend API using Django Rest Framework (DRF) — my first Django project.",
      "Implemented patient record filtering, sorting, and branch management features.",
      "Integrated PostgreSQL database schema design and query optimization."
    ],
    role: "Full-Stack Developer"
  },
  {
    title: "Document Generation System",
    description: "Admin-driven template system with dynamic chapters and field selection for automated PDF generation.",
    detailDescription: "Document Generation System is a web-based platform that allows administrators to create and manage document templates using dynamic chapters and fields. Users can select the required information and generate customized documents efficiently. The system is designed to simplify the document creation process and reduce the need for manually preparing repetitive documents.",
    image: "/images/DocGen.avif",
    technologies: ["Next.js", "Tailwind", "Django", "PostgreSQL", "Docker"],
    codeLink: "#",
    demoLink: "https://docugen.io/",
    contribution: [
      "Took ownership as a full-stack developer on an existing half-built project.",
      "Revamped and improved multiple UI sections in Next.js for a modern, polished look.",
      "Maintained and extended the Django backend, adding new API endpoints and logic.",
      "Integrated Stripe payment gateway for subscription and billing functionality."
    ],
    role: "Full-Stack Developer"
  },
  {
    title: "SmartFarm Irrigation App",
    description: "Enabling farmers to visualize farm layouts with React Native Maps and get realtime and historical weather updates via a Weather API...",
    detailDescription: "SmartFarm Irrigation is a mobile application designed to help farmers monitor and manage their farming activities using location-based farm visualization and weather information. The application allows users to view their farm layouts on a map and access both real-time and historical weather data to support better irrigation and farming decisions.",
    image: "/images/farm.avif",
    technologies: ["React Native", "Maps", "Charts", "Weather API"],
    codeLink: "#",
    demoLink: "https://arbormated.com/",
    contribution: [
      "My first React Native mobile application — built hands-on from the ground up.",
      "Completely redesigned and rebuilt the entire app UI for a modern, farmer-friendly experience.",
      "Integrated React Native Maps to allow farmers to visualize and interact with farm layouts.",
      "Connected live and historical weather data via a Weather API with real-time updates."
    ],
    role: "React Native Developer"
  },
  {
    title: "Horse Auction & Marketplace",
    description: "A full-stack horse trading platform with real-time bidding, auction-based listings, and secure payment integration.",
    detailDescription: "Horse Auction & Marketplace is a full-stack mobile and web platform for buying, selling, and auctioning horses online. Users can create and browse horse listings, participate in auctions, place real-time bids, and manage their marketplace activities. The platform uses real-time communication to keep auction bids synchronized between users.",
    image: "/images/Horse.jpg",
    technologies: ["React Native", "Django", "PostgreSQL", "WebSockets", "Django Channels", "Docker"],
    codeLink: "#",
    demoLink: "#",
    contribution: [
      "Core company product — built the entire React Native mobile app from scratch.",
      "Developed the full Django backend with REST APIs, WebSocket support via Django Channels.",
      "Implemented real-time bidding system using WebSockets for live auction functionality.",
      "Handled end-to-end full-stack ownership: database design, API, and mobile UI."
    ],
    role: "Full-Stack Developer"
  },
  {
    title: "SynxWork",
    description: "It's a business management web application built with Next.js. It helps admins manage employees, teams, clients, jobs, and payments from one place.",
    detailDescription: "SynxWork is a business management web application that provides a centralized platform for managing day-to-day business operations. Administrators can manage employees, create teams, assign jobs, manage client information, track employee payments, and generate invoices. The application brings different business management tasks together in a single dashboard.",
    image: "/images/synxwork.png",
    technologies: ["Next.js", "Tailwind", "Responsive UI"],
    codeLink: "#",
    demoLink: "https://synx-work.vercel.app/",
    contribution: [
      "Designed and built the entire frontend UI from scratch using Next.js and Tailwind CSS.",
      "Created a comprehensive dashboard for managing employees, teams, clients, and jobs.",
      "Implemented responsive layouts ensuring seamless experience across all device sizes.",
      "Delivered a clean, professional admin interface with intuitive navigation and UX."
    ],
    role: "Frontend Developer"
  },
  {
    title: "NutriBot AI App",
    description: "A smart nutrition assistant that simplifies diet tracking through AI. It features Vision Camera for instant food identification...",
    detailDescription: "NutriBot is an AI-powered mobile nutrition assistant designed to make food and diet tracking easier. Users can capture food using their device camera, identify food items, and receive nutritional information through AI-powered analysis. The application combines mobile camera capabilities, AI integrations, and Firebase services to provide a personalized nutrition experience.",
    image: "/images/Nutribot.avif",
    technologies: ["React Native", "Firebase", "Vision Camera", "AI Integrations"],
    codeLink: "#",
    demoLink: "#",
    contribution: [
      "Built this project completely from scratch — concept to finished product.",
      "Integrated Vision Camera for real-time food identification using the device camera.",
      "Connected AI integrations to analyze food and generate accurate nutritional data.",
      "Implemented Firebase for authentication, cloud storage, and real-time database."
    ],
    role: "Full-Stack Mobile Developer"
  },
  {
    title: "NetSecureAnalyzer",
    description: "A full-stack network security monitoring platform for monitoring network traffic, firewall activity, VPN status, connected devices, and secure file transfers.",
    detailDescription: "NetSecureAnalyzer is a full-stack network security monitoring and management platform built to simulate and monitor real-world network environments. It provides administrators with tools to manage firewall rules, block and unblock IP addresses using Windows Firewall, monitor live TCP connections, and track connected devices with VPN and geolocation information. Regular users can view their device information, send and receive secure file transfers, and manage their VPN status. The platform also provides a real-time dashboard with network metrics such as upload/download speed, ping, jitter, packet loss, and TCP connections collected using psutil.",
    image: "/images/NetSecureAnalyzer.png",
    technologies: ["React", "Django", "PostgreSQL", "psutil", "Windows Firewall", "Docker"],
    codeLink: "https://github.com/HassanAkhtar107/NetSecureAnalyzer",
    demoLink: "#",
    contribution: [
      "Built the complete project from scratch as a full-stack developer.",
      "Developed the React frontend with dashboards and network visualizations.",
      "Built the Django REST backend for network monitoring, firewall controls, and file transfers.",
      "Implemented real-time network monitoring using psutil and Windows Firewall integration."
    ],
    role: "Full-Stack Developer"
  }
];

