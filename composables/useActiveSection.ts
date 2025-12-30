export function useActiveSection() {
  const activeSection = useState<string>('activeSection', () => 'about');

  onMounted(() => {
    const scrollContainer = document.getElementById('scroll-container');
    if (!scrollContainer) return;

    const observerOptions = {
      root: scrollContainer,
      rootMargin: '-20% 0px -60% 0px',
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.id;
          if (sectionId) {
            activeSection.value = sectionId;
          }
        }
      });
    }, observerOptions);

    // Observar todas las secciones
    const sections = ['about', 'experience', 'projects', 'contacts'];
    
    // Esperar un momento para que las secciones estén renderizadas
    setTimeout(() => {
      sections.forEach((id) => {
        const section = document.getElementById(id);
        if (section) {
          observer.observe(section);
        }
      });
    }, 100);

    // Cleanup
    onUnmounted(() => {
      observer.disconnect();
    });
  });

  return {
    activeSection,
  };
}

