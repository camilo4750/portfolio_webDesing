export default defineNuxtPlugin(() => {
  class ScrollEffects {
    elements: NodeListOf<HTMLElement>;
    origin: string;
    distance: string;
    duration: number;
    delay: number;

    constructor({
      selector = "",
      origin = "left",
      distance = "60px",
      duration = 1000,
      delay = 350,
    } = {}) {
      this.elements = document.querySelectorAll(selector);
      this.origin = origin;
      this.distance = distance;
      this.duration = duration;
      this.delay = delay;

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

      window.addEventListener("scroll", () => this.revealOnScroll());
      this.revealOnScroll();
    }

    revealOnScroll() {
      const windowHeight = window.innerHeight;

      this.elements.forEach((el) => {
        const position = el.getBoundingClientRect().top;
        const direction = this.origin;
        if (position < windowHeight * 0.85) {
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
