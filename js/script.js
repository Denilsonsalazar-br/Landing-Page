
/* 1. NAVBAR, MENU MOBILE E SEÇÃO ATIVA */

const navbar = document.getElementById("navbar");
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");
const anchorLinks = document.querySelectorAll('.nav-links a[href^="#"]');

// Efeito ao rolar a página (também roda ao carregar, para páginas recarregadas já rolada)
function updateNavbar() {
    navbar.classList.toggle("scrolled", window.scrollY > 30);
}

window.addEventListener("scroll", updateNavbar, { passive: true });
updateNavbar();

// Abrir/fechar menu mobile
function setMenu(open, restoreFocus = false) {
    navLinks.classList.toggle("open", open);
    menuToggle.classList.toggle("active", open);
    menuToggle.setAttribute("aria-expanded", String(open));
    menuToggle.setAttribute("aria-label", open ? "Fechar menu" : "Abrir menu");

    if (!open && restoreFocus) menuToggle.focus();
}

menuToggle.addEventListener("click", () => {
    setMenu(!navLinks.classList.contains("open"));
});

// Marcar o link ativo
function setActiveLink(id) {
    anchorLinks.forEach(link => {
        const active = link.getAttribute("href") === `#${id}`;
        link.classList.toggle("active", active);

        if (active) {
            link.setAttribute("aria-current", "true");
        } else {
            link.removeAttribute("aria-current");
        }
    });
}

// Fechar menu ao clicar em um link
anchorLinks.forEach(link => {
    link.addEventListener("click", () => {
        setActiveLink(link.getAttribute("href").slice(1));
        setMenu(false);
    });
});

// Fechar menu ao clicar fora dele
document.addEventListener("click", event => {
    if (
        navLinks.classList.contains("open") &&
        !navLinks.contains(event.target) &&
        !menuToggle.contains(event.target)
    ) {
        setMenu(false);
    }
});

// Fechar menu com ESC e devolver o foco ao botão
document.addEventListener("keydown", event => {
    if (event.key === "Escape" && navLinks.classList.contains("open")) {
        setMenu(false, true);
    }
});

// Destacar no menu a seção visível durante a rolagem
if ("IntersectionObserver" in window) {
    const spy = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) setActiveLink(entry.target.id);
        });
    }, { rootMargin: "-40% 0px -55% 0px" });

    anchorLinks.forEach(link => {
        const target = document.getElementById(link.getAttribute("href").slice(1));
        if (target) spy.observe(target);
    });
}


/* ========================================
   2. CARROSSEL FADE + AUTOPLAY (reutilizável)
   Usado em: projetos, certificações e formações técnicas
======================================== */

const carousels = [];

function createFadeCarousel({
    rootId,
    slideSelector,
    dotSelector,
    prevId,
    nextId,
    navSelector,
    arrowClass,
    delay = 5000
}) {
    const root = document.getElementById(rootId);
    if (!root) return;

    const slides = Array.from(root.querySelectorAll(slideSelector));
    const dots = Array.from(root.querySelectorAll(dotSelector));
    const prev = document.getElementById(prevId);
    const next = document.getElementById(nextId);
    const total = slides.length;
    if (!total) return;

    const reducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
    ).matches;

    let current = 0;
    let timer = null;
    let hovered = false;
    let focused = false;
    let userPaused = false;
    let pauseButton = null;

    function show(index) {
        current = (index + total) % total;

        slides.forEach((slide, i) => {
            const active = i === current;
            slide.classList.toggle("active", active);
            slide.setAttribute("aria-hidden", String(!active));
            slide.inert = !active;
        });

        dots.forEach((dot, i) => {
            const active = i === current;
            dot.classList.toggle("active", active);

            if (active) {
                dot.setAttribute("aria-current", "true");
            } else {
                dot.removeAttribute("aria-current");
            }
        });
    }

    function stop() {
        clearInterval(timer);
        timer = null;
    }

    function start() {
        stop();

        if (reducedMotion || total < 2) return;
        if (userPaused || hovered || focused || document.hidden) return;

        timer = setInterval(() => show(current + 1), delay);
    }

    // Botão de pausa (WCAG 2.2.2): o usuário controla a rotação automática
    if (!reducedMotion && total > 1) {
        const nav = root.querySelector(navSelector);

        if (nav) {
            pauseButton = document.createElement("button");
            pauseButton.type = "button";
            pauseButton.className = `${arrowClass} carousel-pause`;
            pauseButton.setAttribute("aria-pressed", "false");

            const renderPause = () => {
                pauseButton.textContent = userPaused ? "▶" : "❚❚";
                pauseButton.setAttribute("aria-pressed", String(userPaused));
                pauseButton.setAttribute(
                    "aria-label",
                    userPaused
                        ? "Retomar rotação automática"
                        : "Pausar rotação automática"
                );
            };

            renderPause();

            pauseButton.addEventListener("click", () => {
                userPaused = !userPaused;
                renderPause();
                start();
            });

            nav.prepend(pauseButton);
        }
    }

    if (prev) {
        prev.addEventListener("click", () => {
            show(current - 1);
            start();
        });
    }

    if (next) {
        next.addEventListener("click", () => {
            show(current + 1);
            start();
        });
    }

    dots.forEach((dot, index) => {
        dot.addEventListener("click", () => {
            show(index);
            start();
        });
    });

    root.addEventListener("mouseenter", () => {
        hovered = true;
        stop();
    });

    root.addEventListener("mouseleave", () => {
        hovered = false;
        start();
    });

    root.addEventListener("focusin", () => {
        focused = true;
        stop();
    });

    root.addEventListener("focusout", event => {
        if (!root.contains(event.relatedTarget)) {
            focused = false;
            start();
        }
    });

    carousels.push({ start, stop });

    show(0);
    start();
}

// Uma única escuta para aba em segundo plano
document.addEventListener("visibilitychange", () => {
    carousels.forEach(carousel => {
        if (document.hidden) {
            carousel.stop();
        } else {
            carousel.start();
        }
    });
});

createFadeCarousel({
    rootId: "projectsCarousel",
    slideSelector: ".project-slide",
    dotSelector: ".carousel-dot",
    prevId: "projectPrev",
    nextId: "projectNext",
    navSelector: ".carousel-navigation",
    arrowClass: "carousel-arrow"
});

createFadeCarousel({
    rootId: "certificateCarousel",
    slideSelector: ".certificate-slide",
    dotSelector: ".certificate-dot",
    prevId: "certificatePrev",
    nextId: "certificateNext",
    navSelector: ".certificate-navigation",
    arrowClass: "certificate-arrow"
});

createFadeCarousel({
    rootId: "technicalCarousel",
    slideSelector: ".technical-slide",
    dotSelector: ".technical-dot",
    prevId: "technicalPrev",
    nextId: "technicalNext",
    navSelector: ".technical-navigation",
    arrowClass: "technical-arrow"
});


/* ========================================
   3. CARROSSEL DE BADGES (rolagem horizontal)
======================================== */

const credentialsViewport = document.querySelector(".credentials-viewport");

if (credentialsViewport) {
    const badgePrev = document.getElementById("badgePrev");
    const badgeNext = document.getElementById("badgeNext");
    const badgeTrack = credentialsViewport.querySelector(".credentials-track");

    // Lê o espaçamento real do CSS em vez de repetir o valor aqui
    function getBadgeScrollDistance() {
        const card = credentialsViewport.querySelector(".credential-card");
        if (!card) return credentialsViewport.clientWidth;

        const gap = parseFloat(getComputedStyle(badgeTrack).columnGap) || 0;
        return (card.offsetWidth + gap) * 2;
    }

    // Desabilita as setas nas pontas
    function updateBadgeArrows() {
        const maxScroll =
            credentialsViewport.scrollWidth - credentialsViewport.clientWidth - 1;

        badgePrev.disabled = credentialsViewport.scrollLeft <= 0;
        badgeNext.disabled = credentialsViewport.scrollLeft >= maxScroll;
    }

    badgePrev.addEventListener("click", () => {
        credentialsViewport.scrollBy({
            left: -getBadgeScrollDistance(),
            behavior: "smooth"
        });
    });

    badgeNext.addEventListener("click", () => {
        credentialsViewport.scrollBy({
            left: getBadgeScrollDistance(),
            behavior: "smooth"
        });
    });

    credentialsViewport.addEventListener("scroll", updateBadgeArrows, {
        passive: true
    });
    window.addEventListener("resize", updateBadgeArrows);
    window.addEventListener("load", updateBadgeArrows);
    updateBadgeArrows();
}


/* ========================================
   4. RODAPÉ — ANO ATUAL
======================================== */

const currentYear = document.getElementById("currentYear");

if (currentYear) {
    currentYear.textContent = new Date().getFullYear();
}


/* ========================================
   5. ALTERNÂNCIA DE TEMA
======================================== */

const themeToggle = document.getElementById("themeToggle");
const htmlElement = document.documentElement;

function applyTheme(theme) {
    const isLight = theme === "light";

    htmlElement.setAttribute("data-theme", isLight ? "light" : "dark");
    themeToggle.setAttribute(
        "aria-label",
        isLight ? "Ativar tema escuro" : "Ativar tema claro"
    );
    themeToggle.setAttribute("aria-pressed", String(isLight));
    themeToggle.setAttribute(
        "title",
        isLight ? "Alternar para tema escuro" : "Alternar para tema claro"
    );
}

if (themeToggle) {
    let savedTheme = "dark";

    try {
        const storedTheme = localStorage.getItem("denilson-theme");

        if (storedTheme === "light" || storedTheme === "dark") {
            savedTheme = storedTheme;
        }
    } catch (error) {
        console.warn("Não foi possível recuperar o tema salvo.", error);
    }

    applyTheme(savedTheme);

    themeToggle.addEventListener("click", () => {
        const newTheme =
            htmlElement.getAttribute("data-theme") === "dark" ? "light" : "dark";

        applyTheme(newTheme);

        try {
            localStorage.setItem("denilson-theme", newTheme);
        } catch (error) {
            console.warn("Não foi possível salvar o tema.", error);
        }
    });
}


/* ========================================
   6. COPIAR CHAVES DO SISTEC
======================================== */

document.querySelectorAll(".sistec-copy").forEach(button => {
    // Guardado uma única vez: cliques rápidos não corrompem mais o texto original
    const originalHTML = button.innerHTML;
    let resetTimer = null;

    button.setAttribute("aria-live", "polite");

    button.addEventListener("click", async () => {
        const key = button.dataset.copy;
        if (!key) return;

        let copied = false;

        try {
            await navigator.clipboard.writeText(key);
            copied = true;
        } catch (error) {
            // Alternativa para navegadores sem Clipboard API
            const temporaryInput = document.createElement("textarea");
            temporaryInput.value = key;
            temporaryInput.style.position = "fixed";
            temporaryInput.style.opacity = "0";
            document.body.appendChild(temporaryInput);
            temporaryInput.select();

            copied = document.execCommand("copy");
            temporaryInput.remove();
        }

        button.textContent = copied ? "Copiado ✓" : "Copie manualmente";

        clearTimeout(resetTimer);
        resetTimer = setTimeout(() => {
            button.innerHTML = originalHTML;
        }, 1800);
    });
});
