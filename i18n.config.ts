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
    },
  },
}));
