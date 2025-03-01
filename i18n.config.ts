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
        one: "Proporcioné soporte para aplicaciones en PHP 5.0, desarrollando nuevos módulos y corrigiendo errores en los existentes.",
        two:
          "Trabajé con aplicaciones más robustas utilizando Laravel (a partir de la versión 6.0) y Vue.js (2 y 3). " +
          "Implementé servicios externos como SimpliRoute, integré y trabajé con mapas, generé gráficos e informes a gran escala, " +
          "utilicé colas y envié correos electrónicos de forma automática.",
        three:
          "Desarrollé módulos con alta complejidad lógica, asegurando siempre la satisfacción del cliente.",
        four:
          "Colaboré en mejorar la escalabilidad y el mantenimiento interno desarrollando una sólida arquitectura basada en capas " +
          "adaptada a nuestras necesidades, logrando excelentes resultados en nuevos proyectos.",
      },
      semiSeniorSavneExperience: {
        title: "Desarrollador semi-senior",
        one: "Me eligieron como líder para desarrollar un sistema completo, gestionando a dos programadores.",
        two: "Diseñé modelos C4 para representar la arquitectura y los extendí al nivel de clase.",
        three:
          "Resolví la duplicación de código en el backend utilizando servicios.",
        four: "Como equipo, desarrollamos una arquitectura hexagonal para el backend, aprovechando también la arquitectura basada en capas que ya teníamos.",
        five:
          "Implementé nuevos proyectos separando el backend para usarlo como API con JWT. En el frontend, migramos a Nuxt.js con TypeScript " +
          "por su escalabilidad y alineación con nuestras necesidades.",
        six: "Implementamos una arquitectura frontend sostenible y escalable para proyectos de alto potencial.",
        seven:
          "Implementación de i18n para la creación de aplicaciones bilingües.",
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
        title: "Junior Developer",
        one: "I provided support for applications in PHP 5.0, developing new modules and fixing bugs in existing ones.",
        two:
          "Worked with more robust applications using Laravel (from version 6.0) and Vue.js (2 and 3). I implemented external services such as SimpliRoute, " +
          "integrated and worked with maps, generated charts and large-scale reports, utilized Queues, and automated email sending.",
        three:
          "I developed modules with high logical complexity, always ensuring customer satisfaction.",
        four:
          " I collaborated in improving scalability and internal maintenance by developing a solid layer-based architecture tailored to our needs, " +
          "achieving excellent results in new projects.",
      },
      semiSeniorSavneExperience: {
        title: "Semi-senior development",
        one: "I was chosen as the leader to develop a complete system, managing two programmers.",
        two: "I designed C4 models to represent the architecture and extended them to the class level.",
        three:
          "I resolved code duplication in the backend by utilizing services.",
        four: "As a team, we developed a hexagonal architecture for the backend, also making use of the layer-based architecture we already had.",
        five:
          "I implemented new projects by separating the backend to be used as an API with JWT. On the frontend, we migrated to Nuxt.js with TypeScript " +
          "for its scalability and alignment with our needs.",
        six: "We implemented a sustainable and scalable frontend architecture for high-potential projects.",
        seven: "Implementation of i18n for creating bilingual applications.",
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
      },
      footer: "All rights reserved",
    },

  },
}));
