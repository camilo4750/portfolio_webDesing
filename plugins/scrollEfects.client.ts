export default defineNuxtPlugin(() => {
  class ScrollEffects {
    container: HTMLElement | null;
    elements: NodeListOf<HTMLElement>;
    origin: string;
    distance: string;
    duration: number;
    delay: number;

    constructor({
      containerSelector = "#scroll-container",
      selector = "",
      origin = "left",
      distance = "60px",
      duration = 700,
      delay = 250,
    } = {}) {
      this.container = document.querySelector(containerSelector);
      this.elements = document.querySelectorAll(selector);
      this.origin = origin;
      this.distance = distance;
      this.duration = duration;
      this.delay = delay;

      if (!this.container) {
        console.warn(
          `No se encontró el contenedor "${containerSelector}". ScrollEffect no se activará.`
        );
        return;
      }

      this.init();
    }

    init() {
      this.elements.forEach((el) => {
        const direction = this.origin;
        el.style.opacity = "0";
        if (direction === "left") {
          el.style.transform = `translateX(-${this.distance})`;
        } else if (direction === "right") {
          el.style.transform = `translateX(${this.distance})`;
        }
        el.style.transition = "none";
      });

      this.container?.addEventListener("scroll", () => this.revealOnScroll());
      this.revealOnScroll();
    }

    revealOnScroll() {
      // Altura del contenedor
      const containerHeight = this.container!.clientHeight;

      this.elements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        const containerRect = this.container!.getBoundingClientRect();
        
        // Ajustar posición relativa al contenedor
        const position = rect.top - containerRect.top; 

        if (position < containerHeight * 0.85) {
          el.style.transition = `transform ${this.duration}ms ease-out ${this.delay}ms, opacity ${this.duration}ms ease-out ${this.delay}ms`;
          el.style.opacity = "1";
          el.style.transform = "translateX(0)";
        }
      });
    }
  }

  return {
    provide: {
      scrollEffects: ScrollEffects,
    },
  };
});
