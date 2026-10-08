export const translations = {
  en: {
    nav: {
      about: "About",
      experience: "Experience",
      projects: "Projects",
      contact: "Contact",
    },
    hero: {
      title: "Francisco Herrera",
      subtitle: "Full Stack Developer",
      description:
        "6 years of experience building scalable web applications with NestJS, Node.js, React, Angular, Next.js, and cloud solutions.",
      cta: "View my work",
      cv: "Download CV",
      tech: "Nest.js, Node.js, React, Next.js, Angular, TypeScript, Kafka, Docker, Microservices, AWS, Lambda, Serverless, PostgreSQL, Firebase, MySQL, MongoDB, GraphQL, Ionic, React Native",
    },
    about: {
      title: "About Me",
      description: `I'm a Full Stack Developer with 6 years of experience creating scalable web applications. I specialize in NestJS, Node.js, React, Next.js, and Angular, with expertise in RESTful APIs, microservices, and AWS services.

I work with MEAN and MERN environments, managing databases like PostgreSQL, Firebase, and MySQL. I'm passionate about writing clean, maintainable code and collaborating in teams to deliver high-quality solutions.

Core Competencies: Frontend Development (React, Next.js, Angular), Backend Development (NestJS, Node.js, GraphQL), Database Management (MongoDB, MySQL, PostgreSQL, Firebase), Cloud Services (AWS, Lambda), and Agile Team Collaboration.`,
    },
    experience: {
      title: "Work Experience",
      jobs: [
        {
          company: "Consultec",
          tech: "Nest.js, Node.js, Microservices, Kafka, Docker",
          location: "Panama",
          role: "Backend Developer",
          period: "Dec 2025 - Sep 2026",
          description:
            "Development and construction of web servers using microservices architecture. Implementation of event-driven communication with Kafka and containerization with Docker.",
        },
        {
          company: "Hexa Systems",
          tech: "Nest.js, Node.js, Microservices, Kafka",
          location: "Guayaquil, Ecuador",
          role: "Full Stack Developer",
          period: "Jun 2025 - Nov 2025",
          description:
            "Development and maintenance of scalable web applications using microservices architecture. Implementation of event-driven communication with Kafka.",
        },
        {
          company: "Kreacia",
          tech: "Next.js, React, AWS Lambda, Serverless",
          location: "Puebla, Mexico",
          role: "Full Stack Developer",
          period: "Oct 2023 - May 2025",
          description:
            "Development, optimization and scalability of projects with Next.js for audiovisual distribution companies. Additionally used serverless architecture powered by AWS Lambda.",
        },
        {
          company: "Wootic",
          tech: "React, Angular, NestJS, AWS, Ionic, GraphQL, S3",
          location: "Cordoba, Argentina",
          role: "Full Stack Developer",
          period: "Mar 2022 - Jan 2023",
          description:
            "Participated in several projects, including a vendor portal for the University of Cordoba using React, Angular, NestJS, AWS, and serverless architecture powered by AWS Lambda. Also developed two projects with Ionic and NestJS, integrating GraphQL and AWS S3 for image storage.",
        },
        {
          company: "Woboxx",
          tech: "Socket.io, Node.js",
          location: "Maracaibo, Venezuela",
          role: "Full Stack Developer",
          period: "Nov 2021 - Mar 2022",
          description:
            "Independently integrated templates into web applications and developed a live chat system with real-time communication using sockets, covering both frontend and backend.",
        },
        {
          company: "Expertos de la Web",
          tech: "Angular, Node.js, Express, MongoDB",
          location: "Cabudare, Venezuela",
          role: "Full Stack Developer",
          period: "Aug 2020 - Oct 2021",
          description:
            "In Angular projects, participated in the creation of HTML and CSS templates and in the modular structuring with components. In the backend, developed endpoints using Node.js with Express and MongoDB.",
        },
      ],
    },
    projects: {
      title: "Featured Projects",
      bookstore: {
        name: "Bookstore Inventory API",
        description:
          "REST API to manage a bookstore chain inventory and calculate the suggested sale price in real time from the USD exchange rate. Technical assessment with Docker, automated tests and cloud deployment.",
        tech: "Node.js, TypeScript, Express, PostgreSQL, Docker, Vercel",
      },
      auth: {
        name: "Authentication Microservice",
        description:
          "Microservice for user, role and session management with Keycloak: login, registration, password recovery with OTP and session control. Built at Consultec.",
        tech: "Nest.js, TypeScript, Microservices, Docker",
      },
      paymentRequest: {
        name: "Payment Request Microservice",
        description:
          "Microservice for supplier payment requests: dashboard metrics, filtering by company group, bulk approval and payer account reassignment. Built at Consultec.",
        tech: "Nest.js, TypeScript, Microservices, Kafka, Docker",
      },
      rulesEngine: {
        name: "Rules Engine Microservice",
        description:
          "Rules engine microservice consuming event-driven messages, with a simulator that publishes payment requests to Kafka topics. Built at Consultec.",
        tech: "Nest.js, TypeScript, Microservices, Kafka, Docker",
      },
      parkour: {
        name: "Parkour Test App",
        description: "User authentication and personal information management system built with Next.js and Vercel.",
        tech: "Next.js, TypeScript, Vercel",
      },
      netflix: {
        name: "LibreOferta - Netflix Clone",
        description:
          "Streaming platform frontend recommending and ranking series and movies with complete guide to discover quality content.",
        tech: "Angular, TypeScript, RxJS",
      },
      bobsCorn: {
        name: "Bob's Corn",
        description:
          "Full stack store with a fair-purchase policy: one corn per client per minute, enforced by a database-backed rate limiter, with a live countdown and purchase stats. Frontend and API deployed on Vercel with Neon Postgres.",
        tech: "Vue.js, TypeScript, Node.js, Express, PostgreSQL, Tailwind CSS, Vercel",
      },
      venueMap: {
        name: "Venue Map Explorer",
        description:
          "Interactive map app with browser geolocation, curated London venues with descriptions, remote data loading and custom pins added by clicking on the map.",
        tech: "React, Leaflet, React Router, Vercel",
      },
      tauroflix: {
        name: "TauroFlix",
        description: "Multimedia content management and administration platform for photos and videos.",
        tech: "Full Stack, Next.js, React",
      },
      github: {
        name: "GitHub Repositories",
        description: "Collection of all my projects and contributions available on GitHub.",
        tech: "Various technologies",
      },
    },
    contact: {
      title: "Get In Touch",
      description:
        "I'm always interested in hearing about new projects and opportunities. Open to remote work and relocation.",
      email: "Email",
      phone: "Phone / WhatsApp",
      github: "GitHub",
      linkedin: "LinkedIn",
    },
    footer: {
      copyright: "© 2025 Francisco Herrera. All rights reserved.",
    },
  },
  es: {
    nav: {
      about: "Acerca de",
      experience: "Experiencia",
      projects: "Proyectos",
      contact: "Contacto",
    },
    hero: {
      title: "Francisco Herrera",
      subtitle: "Desarrollador Full Stack",
      description:
        "6 años de experiencia construyendo aplicaciones web escalables con NestJS, Node.js, React, Angular, Next.js y soluciones en la nube.",
      cta: "Ver mi trabajo",
      cv: "Descargar CV",
      tech: "Nest.js, Node.js, React, Next.js, Angular, TypeScript, Kafka, Docker, Microservices, AWS, Lambda, Serverless, PostgreSQL, Firebase, MySQL, MongoDB, GraphQL, Ionic, React Native",
    },
    about: {
      title: "Acerca de Mí",
      description: `Soy un Desarrollador Full Stack con 6 años de experiencia creando aplicaciones web escalables. Me especializo en NestJS, Node.js, React, Next.js y Angular, con experiencia en APIs RESTful, microservicios y servicios de AWS.

Trabajo con entornos MEAN y MERN, gestionando bases de datos como PostgreSQL, Firebase y MySQL. Soy apasionado por escribir código limpio y mantenible, colaborando en equipos para entregar soluciones de alta calidad.

Competencias Principales: Desarrollo Frontend (React, Next.js, Angular), Desarrollo Backend (NestJS, Node.js, GraphQL), Gestión de Bases de Datos (MongoDB, MySQL, PostgreSQL, Firebase), Servicios en la Nube (AWS, Lambda, S3), y Colaboración Ágil en Equipo.`,
    },
    experience: {
      title: "Experiencia Laboral",
      jobs: [
        {
          company: "Consultec",
          tech: "Nest.js, Node.js, Microservices, Kafka, Docker",
          location: "Panamá",
          role: "Desarrollador Backend",
          period: "Dic 2025 - Sep 2026",
          description:
            "Desarrollo y construcción de servidores web mediante arquitectura de microservicios. Implementación de comunicación basada en eventos con Kafka y contenedorización con Docker.",
        },
        {
          company: "Hexa Systems",
          tech: "Nest.js, Node.js, Microservices, Kafka",
          location: "Guayaquil, Ecuador",
          role: "Desarrollador Full Stack",
          period: "Jun 2025 - Nov 2025",
          description:
            "Desarrollo y mantenimiento de aplicaciones web escalables usando arquitectura de microservicios. Implementación de comunicación orientada a eventos con Kafka.",
        },
        {
          company: "Kreacia",
          tech: "Next.js, React, AWS Lambda, Serverless",
          location: "Puebla, México",
          role: "Desarrollador Full Stack",
          period: "Oct 2023 - May 2025",
          description:
            "Desarrollo, optimización y escalabilidad de proyectos con Next.js para empresas de distribución audiovisual. Además, uso de arquitectura serverless con AWS Lambda.",
        },
        {
          company: "Wootic",
          tech: "React, Angular, NestJS, AWS, Ionic, GraphQL, S3",
          location: "Córdoba, Argentina",
          role: "Desarrollador Full Stack",
          period: "Mar 2022 - Ene 2023",
          description:
            "Participé en varios proyectos, incluyendo un portal de proveedores para la Universidad de Córdoba utilizando React, Angular, NestJS, AWS y arquitectura serverless con AWS Lambda. También desarrollé dos proyectos con Ionic y NestJS, integrando GraphQL y AWS S3 para almacenamiento de imágenes.",
        },
        {
          company: "Woboxx",
          tech: "Socket.io, Node.js",
          location: "Maracaibo, Venezuela",
          role: "Desarrollador Full Stack",
          period: "Nov 2021 - Mar 2022",
          description:
            "De manera independiente, integré plantillas en aplicaciones web y desarrollé un sistema de chat en vivo con comunicación en tiempo real usando sockets, abarcando tanto el frontend como el backend.",
        },
        {
          company: "Expertos de la Web",
          tech: "Angular, Node.js, Express, MongoDB",
          location: "Cabudare, Venezuela",
          role: "Desarrollador Full Stack",
          period: "Ago 2020 - Oct 2021",
          description:
            "En proyectos con Angular, participé en la creación de plantillas HTML y CSS, y en la estructuración modular con componentes. En el backend, desarrollé endpoints usando Node.js con Express y MongoDB.",
        },
      ],
    },
    projects: {
      title: "Proyectos Destacados",
      bookstore: {
        name: "Bookstore Inventory API",
        description:
          "API REST para gestionar el inventario de una cadena de librerías y calcular el precio de venta sugerido en tiempo real a partir de la tasa de cambio USD. Prueba técnica con Docker, pruebas automatizadas y despliegue en la nube.",
        tech: "Node.js, TypeScript, Express, PostgreSQL, Docker, Vercel",
      },
      auth: {
        name: "Microservicio de Autenticación",
        description:
          "Microservicio para la gestión de usuarios, roles y sesiones con Keycloak: login, registro, recuperación de contraseña con OTP y control de sesión. Desarrollado en Consultec.",
        tech: "Nest.js, TypeScript, Microservices, Docker",
      },
      paymentRequest: {
        name: "Microservicio de Solicitudes de Pago",
        description:
          "Microservicio de solicitudes de pago a proveedores: métricas de dashboard, filtrado por grupo empresarial, aprobación masiva y reasignación de cuenta pagadora. Desarrollado en Consultec.",
        tech: "Nest.js, TypeScript, Microservices, Kafka, Docker",
      },
      rulesEngine: {
        name: "Microservicio Motor de Reglas",
        description:
          "Microservicio de motor de reglas que consume mensajes basados en eventos, con un simulador que publica solicitudes de pago en tópicos de Kafka. Desarrollado en Consultec.",
        tech: "Nest.js, TypeScript, Microservices, Kafka, Docker",
      },
      parkour: {
        name: "Aplicación de Prueba Parkour",
        description:
          "Sistema de autenticación de usuarios y gestión de información personal construido con Next.js y Vercel.",
        tech: "Next.js, TypeScript, Vercel",
      },
      netflix: {
        name: "LibreOferta - Clon de Netflix",
        description:
          "Frontend de plataforma de streaming que recomienda y clasifica series y películas con guía completa para descubrir contenido de calidad.",
        tech: "Angular, TypeScript, RxJS",
      },
      bobsCorn: {
        name: "Bob's Corn",
        description:
          "Tienda full stack con política de compra justa: un maíz por cliente por minuto, controlado por un limitador de peticiones respaldado en base de datos, con cuenta regresiva en vivo y estadísticas de compras. Frontend y API desplegados en Vercel con Postgres en Neon.",
        tech: "Vue.js, TypeScript, Node.js, Express, PostgreSQL, Tailwind CSS, Vercel",
      },
      venueMap: {
        name: "Explorador de Mapas",
        description:
          "Aplicación de mapas interactiva con geolocalización del navegador, lugares destacados de Londres con descripción, carga de datos remotos y marcadores personalizados al hacer clic en el mapa.",
        tech: "React, Leaflet, React Router, Vercel",
      },
      tauroflix: {
        name: "TauroFlix",
        description: "Plataforma de administración y gestión de contenido multimedia de fotos y videos.",
        tech: "Full Stack, Next.js, React, TypeScript",
      },
      github: {
        name: "Repositorios en GitHub",
        description: "Colección de todos mis proyectos y contribuciones disponibles en GitHub.",
        tech: "Varias tecnologías",
      },
    },
    contact: {
      title: "Ponte en Contacto",
      description:
        "Siempre estoy interesado en escuchar sobre nuevos proyectos y oportunidades. Abierto a trabajo remoto y relocalización.",
      email: "Correo",
      phone: "Teléfono / WhatsApp",
      github: "GitHub",
      linkedin: "LinkedIn",
    },
    footer: {
      copyright: "© 2025 Francisco Herrera. Todos los derechos reservados.",
    },
  },
}

export type Language = "en" | "es"

export function useTranslation(lang: Language) {
  return translations[lang]
}
