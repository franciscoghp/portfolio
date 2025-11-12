export const translations = {
  en: {
    nav: {
      about: "About",
      projects: "Projects",
      contact: "Contact",
    },
    hero: {
      title: "Francisco Herrera",
      subtitle: "Full Stack Developer",
      description:
        "5 years of experience building scalable web applications with React, Angular, NestJS, Next.js, Node.js, and cloud solutions.",
      cta: "View my work",
      tech: "React, Next.js, Angular, Node.js, Nest.js, TypeScript, AWS, Lambda, Serverless, PostgreSQL, Firebase, MySQL, MongoDB, GraphQL, Ionic, React Native",
    },
    about: {
      title: "About Me",
      description: `I'm a Full Stack Developer with 5 years of experience creating scalable web applications. I specialize in React, Next.js, Angular, Node.js, and NestJS, with expertise in RESTful APIs, microservices, and AWS services.

I work with MEAN and MERN environments, managing databases like PostgreSQL, Firebase, and MySQL. I'm passionate about writing clean, maintainable code and collaborating in teams to deliver high-quality solutions.

Core Competencies: Frontend Development (React, Next.js, Angular), Backend Development (Node.js, NestJS, GraphQL), Database Management (MongoDB, MySQL, PostgreSQL, Firebase), Cloud Services (AWS, Lambda), and Agile Team Collaboration.`,
    },
    projects: {
      title: "Featured Projects",
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
      tauroflix: {
        name: "TauroFlix",
        description: "Multimedia content management and administration platform for photos and videos.",
        tech: "Full Stack, Next.js, React",
      },
      microservices: {
        name: "Microservices - Wallet System",
        description: "Scalable microservices architecture for a digital wallet platform with REST API documentation.",
        tech: "Node.js, Express, REST API",
      },
      monolith: {
        name: "Wallet Monolith",
        description: "Backend monolithic application powering the wallet system with comprehensive API documentation.",
        tech: "Node.js, Express, MongoDB",
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
      projects: "Proyectos",
      contact: "Contacto",
    },
    hero: {
      title: "Francisco Herrera",
      subtitle: "Desarrollador Full Stack",
      description:
        "5 años de experiencia construyendo aplicaciones web escalables con React, Angular, Next.js, Node.js y soluciones en la nube.",
      cta: "Ver mi trabajo",
      tech: "React, Next.js, Angular, Node.js, Nest.js, TypeScript, AWS, Lambda, S3, Serverless, PostgreSQL, Firebase, MySQL, MongoDB, GraphQL, Ionic, React Native",
    },
    about: {
      title: "Acerca de Mí",
      description: `Soy un Desarrollador Full Stack con 5 años de experiencia creando aplicaciones web escalables. Me especializo en React, Next.js, Angular, Node.js y NestJS, con experiencia en APIs RESTful, microservicios y servicios de AWS.

Trabajo con entornos MEAN y MERN, gestionando bases de datos como PostgreSQL, Firebase y MySQL. Soy apasionado por escribir código limpio y mantenible, colaborando en equipos para entregar soluciones de alta calidad.

Competencias Principales: Desarrollo Frontend (React, Next.js, Angular), Desarrollo Backend (Node.js, NestJS, GraphQL), Gestión de Bases de Datos (MongoDB, MySQL, PostgreSQL, Firebase), Servicios en la Nube (AWS, Lambda, S3), y Colaboración Ágil en Equipo.`,
    },
    projects: {
      title: "Proyectos Destacados",
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
      tauroflix: {
        name: "TauroFlix",
        description: "Plataforma de administración y gestión de contenido multimedia de fotos y videos.",
        tech: "Full Stack, Next.js, React, TypeScript",
      },
      microservices: {
        name: "Microservicios - Sistema de Wallet",
        description:
          "Arquitectura de microservicios escalable para una plataforma de wallet digital con documentación de API REST.",
        tech: "Nest.js, NodeJS, REST API, TypeScript",
      },
      monolith: {
        name: "Wallet Monolito",
        description:
          "Aplicación backend monolítica que potencia el sistema de wallet con documentación completa de API.",
        tech: "Nest.js, Express, Postgress, TypeScript",
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
