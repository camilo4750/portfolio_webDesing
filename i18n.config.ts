export default defineI18nConfig(() => ({
  legacy: false,
  locale: "en",
  messages: {
    es: {
      menuAbout: "Sobre mi",
      menuExperience: "Experiencia",
      menuProject: "Proyectos",
      menuContact: "Contacto",
      footerNav: "Ideas en lógica, soluciones en código.",
      selectSpanish: "Español",
      selectEnglish: "Ingles",
      greetingIntro: "Hola",
      greetingName: "soy Camilo",
      experienceYear: "AÑOS DE",
      experienceDescription: "EXPERIENCIA",
      textBntCv: "Descargar CV",
      aboutMe:
        "Desarrollador Full Stack especializado en el diseño y desarrollo de aplicaciones empresariales escalables, con fuerte enfoque en arquitectura backend, análisis de datos y visualización. A lo largo de mi experiencia he trabajado en sistemas de logística, CRM y ERP, construyendo soluciones robustas orientadas al rendimiento, la mantenibilidad y la evolución del producto.",
      titleSectionExperience: "Mi Experiencia",
      experiencePersonalProjects: {
        company: "Proyectos Personales",
        title: "Arquitectura & Testing",
        description:
          "En paralelo, he desarrollado una arquitectura backend propia basada en Arquitectura Hexagonal, Clean Architecture pragmática, Vertical Slice y testing automatizado con PHPUnit y Mockery, integrando Laravel con Vue mediante Inertia.js bajo un enfoque SPA.",
      },
      experienceBex: {
        company: "Bex Soluciones",
        title: "Full Stack Software Engineer",
        contract: "Remoto",
        description:
          "Trabajé en sistemas multi-cliente enfocados en análisis de datos, reportes avanzados y visualización. Desarrollé dashboards, KPIs, procesos almacenados en MySQL, módulos de georreferenciación con mapas y puntos de calor, y automatizaciones con n8n para generación dinámica de reportes PDF compartidos entre múltiples empresas.",
      },
      experienceDisocom: {
        company: "Disocom",
        title: "Software Support Engineer",
        contract: "Remoto",
        description:
          "Presté servicios de soporte y evolución a un CRM empresarial en PHP (Yii2) y MongoDB, gestionando múltiples incidencias en paralelo y desarrollando un módulo completo de evaluaciones internas con flujos de revisión, retroalimentación y notificaciones multicanal.",
      },
      experienceNuxt: {
        company: "Savne SAS",
        title: "Frontend Developer",
        description:
          "En la etapa final en Savne me enfoqué en frontend avanzado, trabajando con Nuxt 3 y una arquitectura basada en Feature-Based Architecture y Vertical Slices, construyendo aplicaciones escalables, mantenibles y alineadas con APIs Laravel.",
      },
      experienceSemiSenior: {
        company: "Savne SAS",
        title: "Desarrollador Full Stack Semi-Senior",
        description:
          "Con mayor dominio del negocio, destaqué por refinar requerimientos y proponer soluciones técnicas más eficientes, reduciendo retrabajo y funcionalidades innecesarias. Participé en el diseño e implementación de una arquitectura hexagonal, APIs REST seguras con JWT, testing automatizado y entornos dockerizados, aplicados a sistemas de seguros y gestión legal.",
      },
      experiencePasarEx: {
        company: "Portal VIP – Savne SAS",
        title: "Migración y liderazgo técnico",
        description:
          "Fui seleccionado como líder técnico para la migración completa del Portal VIP de PasarEx, transformándolo de PHP puro a Laravel 10 con Vue 3. Implementé por primera vez una arquitectura en capas con patrones Repository y Service, desarrollando el sistema de punta a punta (backend y frontend) y entregando más de 60 vistas pixel-perfect basadas en Figma.",
      },
      experienceLaravel: {
        company: "Savne SAS",
        title: "Laravel Developer",
        description:
          "Di el salto al desarrollo con Laravel, trabajando con Livewire y posteriormente integrando Vue.js dentro de vistas Blade. Esta etapa marcó mi primer contacto con arquitecturas más estructuradas, mejoras significativas en la experiencia de usuario y sistemas más dinámicos y eficientes.",
      },
      experienceJunior: {
        company: "Savne SAS",
        title: "Desarrollador Full Stack Junior",
        description:
          "Comencé mi carrera trabajando en el soporte y evolución de aplicaciones en PHP bajo arquitectura MVC. Durante esta etapa fortalecí mis bases en bases de datos, optimización de consultas SQL y desarrollo frontend con jQuery, participando en la estabilización y mejora de sistemas existentes.",
      },
      projects: {
        title: "Mis creaciones más recientes",
        description:
          "Aquí presento algunos de mis últimos proyectos, para que puedas explorarlos y conocer las metodologías y tecnologías con las que fueron desarrollados.",
        projectOne: {
          title: "Software de administración de talleres",
          description:
            "Este proyecto utiliza Laravel con una arquitectura en capas y Vue con Options API, desplegado en un entorno Docker. Implementa autenticación con Fortify, " +
            "gestión de usuarios y roles, generación de gráficos y reportes, asegurando código de calidad y escalabilidad. Además, incluye pruebas unitarias y de integración para garantizar su fiabilidad.",
        },
        projectTwo: {
          title: "Versionamiento de Base de Datos para Taller",
          description:
            "Este proyecto implementa Laravel en un entorno Docker con conexión a una red externa, permitiendo una gestión eficiente del versionamiento de la base de datos PostgreSQL. Facilita la integración con el entorno real, " +
            "garantizando despliegues controlados, reproducibles y confiables.",
        },
        projectThree: {
          title: "Frontend con Nuxt y API externa",
          description:
            "Este proyecto se conecta a una API externa e implementa autenticación con JWT y middlewares. Incluye login (usuario: 'emilys', contraseña: 'emilyspass'), paginación, búsqueda de datos y validación de formularios.",
        },
        projectFour: {
          title: "Interfaz y Diseño Web Interno",
          description:
            "Concepto de diseño web para una empresa de servicios de venta y remodelación de inmuebles.",
        },
        projectFive: {
          title: "Interfaz y Diseño Web Compumedica",
          description:
            "Diseño web personalizado: la comunicación constante con el cliente es clave para lograr resultados satisfactorios.",
        },
        projectSix: {
          title: "Interfaz y Diseño Web DevWork",
          description:
            "Diseño web personalizado: Concepto de diseño web para una empresa de servicios technologicos he innovadores",
        },
        titleBtnRepo: "Ver repositorio",
        titleBtnDemo: "Probar Demo",
      },
      contact: {
        title: "Contáctame",
        subtitle: "Construyamos proyectos increíbles juntos!",
        description:
          "Siempre en búsqueda de aprender, compartir conocimientos y crecer tanto profesional como personalmente. " +
          "Cada oportunidad es un paso hacia la evolución, y mi compromiso es dar siempre lo mejor de mí. Si tienes un proyecto, " +
          "idea o simplemente quieres conectar, estaré encantado de escucharte.",
        telephone: {
          title: "Llámanos",
          titleBtn: "Enviar mensaje",
        },
        email: {
          title: "Envíanos un correo",
          titleBtn: "Enviar correo",
        },
        linkedin: {
          title: "Te invito a revisar mi perfil de LinkedIn",
          titleBtn: "Revisar",
        },
      },
      footer: "Reservados todos los derechos",
    },
    en: {
      menuAbout: "About",
      menuExperience: "Experience",
      menuProject: "Projects",
      menuContact: "Contact",
      footerNav: "Ideas in logic, solutions in code.",
      selectSpanish: "Spanish",
      selectEnglish: "English",
      greetingIntro: "Hey there,",
      greetingName: "I'm Camilo",
      experienceYear: "YEARS",
      experienceDescription: "EXPERIENCE",
      textBntCv: "Download CV",
      aboutMe:
        "Full Stack Developer specialized in designing and developing scalable enterprise applications, with a strong focus on backend architecture, data analysis, and visualization. Throughout my experience, I have worked on logistics, CRM, and ERP systems, building robust solutions oriented towards performance, maintainability, and product evolution.",
      titleSectionExperience: "My experience",
      experiencePersonalProjects: {
        company: "Personal Projects",
        title: "Architecture & Testing",
        description:
          "In parallel, I have developed my own backend architecture based on Hexagonal Architecture, pragmatic Clean Architecture, Vertical Slice, and automated testing with PHPUnit and Mockery, integrating Laravel with Vue through Inertia.js under an SPA approach.",
      },
      experienceBex: {
        company: "Bex Soluciones",
        title: "Full Stack Software Engineer",
        contract: "Remote",
        description:
          "I worked on multi-client systems focused on data analysis, advanced reporting, and visualization. I developed dashboards, KPIs, stored procedures in MySQL, georeferencing modules with maps and heat points, and automations with n8n for dynamic generation of PDF reports shared among multiple companies.",
      },
      experienceDisocom: {
        company: "Disocom",
        title: "Software Support Engineer",
        contract: "Remote",
        description:
          "I provided support and evolution services for an enterprise CRM in PHP (Yii2) and MongoDB, managing multiple incidents in parallel and developing a complete internal evaluations module with review flows, feedback, and multi-channel notifications.",
      },
      experienceNuxt: {
        company: "Savne SAS",
        title: "Frontend Developer",
        description:
          "In the final stage at Savne, I focused on advanced frontend, working with Nuxt 3 and an architecture based on Feature-Based Architecture and Vertical Slices, building scalable, maintainable applications aligned with Laravel APIs.",
      },
      experienceSemiSenior: {
        company: "Savne SAS",
        title: "Full Stack Semi-Senior Developer",
        description:
          "With greater business mastery, I stood out for refining requirements and proposing more efficient technical solutions, reducing rework and unnecessary functionalities. I participated in the design and implementation of a hexagonal architecture, secure REST APIs with JWT, automated testing, and dockerized environments, applied to insurance and legal management systems.",
      },
      experiencePasarEx: {
        company: "Portal VIP – Savne SAS",
        title: "Migration and v Leadership",
        description:
          "I was selected as technical leader for the complete migration of PasarEx's VIP Portal, transforming it from pure PHP to Laravel 10 with Vue 3. I implemented for the first time a layered architecture with Repository and Service patterns, developing the system end-to-end (backend and frontend) and delivering over 60 pixel-perfect views based on Figma.",
      },
      experienceLaravel: {
        company: "Savne SAS",
        title: "Laravel Developer",
        description:
          "I made the leap to Laravel development, working with Livewire and later integrating Vue.js within Blade views. This stage marked my first contact with more structured architectures, significant improvements in user experience, and more dynamic and efficient systems.",
      },
      experienceJunior: {
        company: "Savne SAS",
        title: "Full Stack Junior Developer",
        description:
          "I began my career working on support and evolution of PHP applications under MVC architecture. During this stage, I strengthened my foundations in databases, SQL query optimization, and frontend development with jQuery, participating in the stabilization and improvement of existing systems.",
      },
      projects: {
        title: "My latest creations",
        description:
          "Here are some of my latest projects, so you can explore them and learn about the methodologies and technologies used in their development.",
        projectOne: {
          title: "Workshop Management Software",
          description:
            "his project uses Laravel with a layered architecture and Vue with Options API, deployed in a Docker environment. It implements authentication with Fortify, " +
            "user and role management, chart and report generation, ensuring code quality and scalability. Additionally, it includes unit and integration testing to ensure reliability.",
        },
        projectTwo: {
          title: "Database Versioning for Workshop",
          description:
            "This project implements Laravel in a Docker environment with a connection to an external network, enabling efficient versioning management of the PostgreSQL database. It facilitates integration with the real environment, " +
            "ensuring controlled, reproducible, and reliable deployments.",
        },
        projectThree: {
          title: "Frontend with Nuxt and External API",
          description:
            "This project connects to an external API and implements authentication with JWT and middlewares. It includes login (user: 'emilys', password: 'emilyspass'), pagination, data search, and form validation.",
        },
        projectFour: {
          title: "Internal Web Interface and Design",
          description:
            "Web design concept for a service company specializing in property sales and renovations.",
        },
        projectFive: {
          title: "Internal Web Interface and Design Compumedica",
          description:
            "Custom web design: constant communication with the client is key to achieving satisfactory results.",
        },
        projectSix: {
          title: "Interface and Web Design DevWork",
          description:
            "Custom Web Design: Web design concept for a technology and innovation services company.",
        },
        titleBtnRepo: "View repository",
        titleBtnDemo: "Explore demo",
      },
      contact: {
        title: "Contact me",
        subtitle: "Let's build amazing projects together!",
        description:
          "Always seeking to learn, share knowledge, and grow both professionally and personally. " +
          "Every opportunity is a step toward evolution, and my commitment is to always give my best. If you have a project, " +
          "an idea, or just want to connect, I’d be happy to hear from you",
        titleTelephone: "Call us",
        telephone: {
          title: "Call us",
          titleBtn: "Send message",
        },
        email: {
          title: "Send us an email",
          titleBtn: "Send email",
        },
        linkedin: {
          title: "I invite you to check out my LinkedIn profile.",
          titleBtn: "Check out",
        },
      },
      footer: "All rights reserved",
    },
  },
}));
