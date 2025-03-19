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
        "Durante mi trayectoria como desarrollador web, he trabajado con una amplia variedad de tecnologías, creando soluciones " +
        "innovadoras para servicios de entrega y optimizando operaciones logísticas a gran escala. Me concentro en desarrollar aplicaciones " +
        "eficientes, escalables y orientadas al usuario.",
      titleSectionExperience: "Mi Experiencia",
      jobPositionSavne: "Desarrollador web",
      juniorSavneExperience: {
        title: "Desarrollador junior",
        one: "Documenté módulos y funcionalidades mediante diagramas de flujo, secuencia y casos de uso con StarUML y Draw.io.",
        two: "Proporcioné soporte en aplicaciones en PHP puro, aplicando soluciones modulares y escalables que aumentaron la calidad del código.",
        three:
          "Optimicé bases de datos en PostgreSQL, mejorando relaciones, normalizando estructuras y optimizando índices.",
        four: "Supervisé y mejoré el rendimiento de sitios web mediante Lighthouse, identificando y resolviendo problemas de estabilidad y carga, optimizando recursos y mejorando la experiencia del usuario.",
        five: "Mejoré la manipulación del DOM y la carga de datos en una aplicación basada en Blade, utilizando jQuery, JavaScript y AJAX",
        six: "Introduje Vue 3 (Options API) en plantillas Blade, optimizando módulos dinámicos y reduciendo tiempos de carga.",
        seven:
          "Convertí diseños de Figma a código con HTML, CSS y Bootstrap, logrando interfaces pixel-perfect y 100% responsivas. La alta calidad del desarrollo y la satisfacción del cliente me llevaron a un ascenso a Desarrollador Semi Senior.",
      },
      semiSeniorSavneExperience: {
        title: "Desarrollador semi-senior",
        one: "Mantuve comunicación directa con clientes, traduciéndo sus necesidades en soluciones tecnológicas funcionales.",
        two: "Gestioné múltiples proyectos simultáneamente, optimizando flujos de trabajo y asegurando entregas eficientes dentro de los plazos establecidos.",
        three:
          "Diseñé e implementé arquitecturas escalables en Laravel, aplicando una estructura en capas con los patrones Repository y Service",
        four: "Utilicé modelos C4 en StarUML para documentar la arquitectura del sistema y definir estructuras a nivel de clases.",
        five: "Desarrollé sistemas completos desde cero con Laravel y Vue 3, utilizando Docker y PostgreSQL para garantizar escalabilidad en entornos de alto tráfico.",
        six: "Implementé pruebas unitarias, de integración y funcionales con PHPUnit, empleando Mocking para simular dependencias y asegurar una cobertura del 100% en módulos clave.",
        seven:
          "Lideré la mentoría de desarrolladores junior, realizando revisiones de código en GitLab, corrigiendo errores en lógica e implementación, y proporcionando retroalimentación para mejorar la calidad del código.",
        eight:
          "Apliqué autenticación con JWT en Laravel dentro de una arquitectura desacoplada, reforzando la seguridad del sistema y reduciendo vulnerabilidades",
        nine: "Participé en la implementación de una arquitectura modular para una API REST con Nuxt 3, Nuxt UI, TypeScript y TailwindCSS.",
        ten: "Diseñé y codifique componentes modulares y eficientes.",
        eleven:
          "Optimizé el rendimiento del sistema aplicando estrategias como lazy loading, caching y SSR/ISR.",
        twelve:
          "Configuré y personalicé i18n para soportar aplicaciones bilingües, ampliando el alcance del sistema y mejorando la accesibilidad.",
        thirteen:
          "Inglés Intermedio (B1) – Capacidad para mantener conversaciones y leer documentación técnica.",
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
        "During my trajectory as a web developer, I have worked with a wide variety of technologies, creating innovative solutions for " +
        "delivery services and optimizing large-scale logistics operations. I focus on developing efficient, scalable, and user-oriented applications.",
      titleSectionExperience: "My experience",
      jobPositionSavne: "Web developer",
      juniorSavneExperience: {
        title: "Developer Junior",
        one: "Documented modules and functionalities using flowcharts, sequence diagrams, and use case diagrams with StarUML and Draw.io.",
        two: "Provided support for applications in pure PHP, applying modular and scalable solutions that increased code.",
        three:
          "Optimized PostgreSQL databases by improving relationships, normalizing structures, and optimizing indexes.",
        four: "Monitored and enhanced website performance using Lighthouse, identifying and resolving stability and loading issues, optimizing resources, and improving user experience.",
        five: "Improved DOM manipulation and data loading in a Blade-based application using jQuery, JavaScript, and AJAX.",
        six: "Introduced Vue 3 (Options API) in Blade templates, optimizing modules and reducing load times",
        seven:
          "Converted Figma designs into code using HTML, CSS, and Bootstrap, achieving pixel-perfect and fully responsive interfaces. The high development quality and client satisfaction led to my promotion to Semi-Senior Developer.",
      },
      semiSeniorSavneExperience: {
        title: "developer Semi-Senior",
        one: "Maintained direct communication with clients, translating their needs into functional technological solutions",
        two: "Managed multiple projects simultaneously, optimizing workflows and ensuring efficient deliveries within established deadlines.",
        three:
          "Designed and implemented scalable architectures in Laravel, applying a layered structure with the Repository and Service patterns.",
        four: "Used C4 models in StarUML to document system architecture and define class-level structures",
        five: "Developed complete systems from scratch using Laravel and Vue 3, leveraging Docker and PostgreSQL to ensure scalability in high-traffic environments.",
        six: "Implemented unit, integration, and functional tests with PHPUnit, utilizing Mocking to simulate dependencies and ensuring 100% coverage in key modules.",
        seven:
          "Led mentorship for junior developers, conducting code reviews in GitLab, correcting logic and implementation errors, and providing feedback to enhance code quality.",
        eight:
          "Applied JWT authentication in Laravel within a decoupled architecture, strengthening system security and reducing vulnerabilities ",
        nine: "Contributed to the implementation of a modular architecture for a REST API with Nuxt 3, Nuxt UI, TypeScript, and TailwindCSS.",
        ten: "Design and coded modular and efficient components.",
        eleven:
          "Optimized system performance by applying strategies such as lazy loading, caching, and SSR/ISR.",
        twelve:
          "Configured and customized i18n to support bilingual applications, expanding system reach and enhancing accessibility. ",
        thirteen:
          "Intermediate English (B1) – Ability to hold conversations and read technical documentation.",
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
