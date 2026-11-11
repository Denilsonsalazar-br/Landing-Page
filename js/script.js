const navbar = document.getElementById("navbar");
    const menuToggle = document.getElementById("menuToggle");
    const navLinks = document.getElementById("navLinks");
    const links = document.querySelectorAll(".nav-links a");

    // Efeito ao rolar a página
    window.addEventListener("scroll", () => {
      navbar.classList.toggle("scrolled", window.scrollY > 30);
    });

    // Abrir e fechar menu mobile
    menuToggle.addEventListener("click", () => {
      const isOpen = navLinks.classList.toggle("open");

      menuToggle.classList.toggle("active", isOpen);
      menuToggle.setAttribute("aria-expanded", isOpen);
      menuToggle.setAttribute(
        "aria-label",
        isOpen ? "Fechar menu" : "Abrir menu"
      );
    });

    // Fechar menu ao clicar em um link
    links.forEach(link => {
      link.addEventListener("click", () => {
        links.forEach(item => item.classList.remove("active"));
        link.classList.add("active");

        navLinks.classList.remove("open");
        menuToggle.classList.remove("active");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute("aria-label", "Abrir menu");
      });
    });

    // Fechar menu ao pressionar ESC
    document.addEventListener("keydown", event => {
      if (event.key === "Escape") {
        navLinks.classList.remove("open");
        menuToggle.classList.remove("active");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute("aria-label", "Abrir menu");
      }
    });

/* CARROSSEL DE PROJETOS

const projectsCarousel = document.getElementById("projectsCarousel");

if (projectsCarousel) {
    const track = document.getElementById("projectsTrack");
    const slides = Array.from(
        track.querySelectorAll(".project-slide")
    );
    const dots = Array.from(
        projectsCarousel.querySelectorAll(".carousel-dot")
    );

    const prev = document.getElementById("projectPrev");
    const next = document.getElementById("projectNext");
    let currentSlide = 0;
    const totalSlides = slides.length;


    // Atualizar carrossel

    function updateProjects(index) {
        if (!totalSlides) return;
        currentSlide =
            (index + totalSlides) % totalSlides;

        track.style.transform =
            `translateX(-${currentSlide * 100}%)`;


        // Atualizar indicadores
        dots.forEach((dot, i) => {
            dot.classList.toggle(
                "active",
                i === currentSlide
            );
        });


        // Controlar slides visíveis para acessibilidade

        slides.forEach((slide, i) => {
            const active = i === currentSlide;
            slide.setAttribute(
                "aria-hidden",
                String(!active)
            );
            slide.inert = !active;
        });
    }


    // Botão anterior

    prev.addEventListener("click", () => {
        updateProjects(currentSlide - 1);
    });


    // Próximo projeto

    next.addEventListener("click", () => {
        updateProjects(currentSlide + 1);
    });

    // Indicadores

    dots.forEach((dot, index) => {
        dot.addEventListener("click", () => {
            updateProjects(index);
        });
    });

    // Navegação por teclado

    projectsCarousel.addEventListener("keydown", event => {
        if (event.key === "ArrowRight") {
            updateProjects(currentSlide + 1);
        }
        if (event.key === "ArrowLeft") {
            updateProjects(currentSlide - 1);
        }
    });

    // Inicialização
    updateProjects(0);
}*/

/* CARROSSEL AUTOMÁTICO DE PROJETOS*/

const projectsCarousel = document.getElementById("projectsCarousel");
if (projectsCarousel) {

    const track = document.getElementById("projectsTrack");
    const slides = Array.from(
        track.querySelectorAll(".project-slide")
    );
    const dots = Array.from(
        projectsCarousel.querySelectorAll(".carousel-dot")
    );
    const prev = document.getElementById("projectPrev");
    const next = document.getElementById("projectNext");


    // CONFIGURAÇÕES

    let currentSlide = 0;
    let autoplayTimer = null;
    let isHovered = false;
    let isFocused = false;
    const totalSlides = slides.length;
    const autoplayDelay = 5000;
    const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
    ).matches;


    /* ATUALIZAR PROJETOS */

    function updateProjects(index) {
        if (!totalSlides) return;
        currentSlide =
            (index + totalSlides) % totalSlides;


        // Atualizar slides
        slides.forEach((slide, i) => {
            const active = i === currentSlide;
            slide.classList.toggle("active", active);
            slide.setAttribute(
                "aria-hidden",
                String(!active)
            );
            slide.inert = !active;
        });


        // Atualizar indicadores
        dots.forEach((dot, i) => {
            const active = i === currentSlide;
            dot.classList.toggle("active", active);
            if (active) {
                dot.setAttribute("aria-current", "true");
            } else {
                dot.removeAttribute("aria-current");
            }
        });
    }


    /* PARAR AUTOPLAY */

    function stopAutoplay() {
        clearInterval(autoplayTimer);
        autoplayTimer = null;
    }


    /* INICIAR AUTOPLAY */

    function startAutoplay() {
        stopAutoplay();

        // Respeitar acessibilidade
        if (prefersReducedMotion) return;

        // Não avançar durante interações
        if (isHovered || isFocused || document.hidden) return;
        autoplayTimer = setInterval(() => {
            updateProjects(currentSlide + 1);
        }, autoplayDelay);
    }

    /* BOTÃO PROJETO ANTERIOR */

    prev.addEventListener("click", () => {
        updateProjects(currentSlide - 1);
        startAutoplay();
    });

    /* BOTÃO PRÓXIMO PROJETO */

    next.addEventListener("click", () => {
        updateProjects(currentSlide + 1);
        startAutoplay();
    });


    /* INDICADORES */

    dots.forEach((dot, index) => {
        dot.addEventListener("click", () => {
            updateProjects(index);
            startAutoplay();
        });
    });

    /* PAUSAR AO PASSAR O MOUSE */

    projectsCarousel.addEventListener("mouseenter", () => {
        isHovered = true;
        stopAutoplay();
    });

    projectsCarousel.addEventListener("mouseleave", () => {
        isHovered = false;
        startAutoplay();
    });


    /* PAUSAR DURANTE NAVEGAÇÃO POR TECLADO */

    projectsCarousel.addEventListener("focusin", () => {
        isFocused = true;
        stopAutoplay();
    });

    projectsCarousel.addEventListener("focusout", event => {
        if (!projectsCarousel.contains(event.relatedTarget)) {
            isFocused = false;
            startAutoplay();
        }
    });

    /* CONTROLAR ABA DO NAVEGADOR */

    document.addEventListener("visibilitychange", () => {
        if (document.hidden) {
            stopAutoplay();
        } else {
            startAutoplay();
        }
    });

    /* INICIALIZAÇÃO */

    updateProjects(0);

    startAutoplay();

}

