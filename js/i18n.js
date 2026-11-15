// IDIOMAS — PORTUGUÊS, INGLÊS, ESPANHOL E FRANCÊS 
// Camada independente: não substitui os recursos existentes. 
(() => {
    "use strict";

    const picker = document.getElementById("languagePicker");
    const toggle = document.getElementById("languageToggle");
    const currentLabel = document.getElementById("languageCurrent");
    const options = document.querySelectorAll(".language-option");

    if (!picker || !toggle || !currentLabel || !options.length) return;

    const labels = {
        "pt-BR": "PT",
        en: "EN",
        es: "ES",
        fr: "FR"
    };

    /*
    As traduções são aplicadas a textos completos de elementos marcados
    por data-i18n. Os nomes oficiais de cursos, certificações, instituições,
    tecnologias, IDs e credenciais permanecem no idioma original.
    */
    const translations = {
        en: {
            "Início": "Home",
            "Quem é o Denilson?": "About",
            "Projetos": "Projects",
            "Graduação": "Degree",
            "Formações": "Education",
            "Certificações": "Certifications",
            "Vamos conversar": "Let's talk",
            "Conheça minha trajetória": "Discover my journey",
            "Ver projetos": "View projects",
            "ACOMPANHE MINHA JORNADA": "FOLLOW MY JOURNEY",
            "CONHEÇA MINHA TRAJETÓRIA": "DISCOVER MY JOURNEY",
            "Quem é": "Who is",
            "Denilson?": "Denilson?",
            "Conhecimento, tecnologia e evolução contínua.": "Knowledge, technology and continuous growth.",
            "SOBRE MIM": "ABOUT ME",
            "Construindo o futuro através da": "Building the future through",
            "tecnologia.": "technology.",
            "TECNOLOGIAS, LINGUAGENS, FERRAMENTAS E CONHECIMENTOS": "TECHNOLOGIES, LANGUAGES, TOOLS AND SKILLS",
            "Aprendizado contínuo.": "Continuous learning.",
            "Meu Credly ↗": "My Credly ↗",
            "Desenvolvimento Web": "Web Development",
            "Programação": "Programming",
            "Redes de Computadores": "Computer Networks",
            "Inteligência Artificial": "Artificial Intelligence",
            "Cibersegurança": "Cybersecurity",
            "Segurança da Informação": "Information Security",
            "Certificações Cisco. Consulte as credenciais no meu perfil Credly.": "Cisco certifications. View the credentials on my Credly profile.",
            "Conhecimento em constante evolução.": "Knowledge in continuous development.",
            "Conecte-se comigo no LinkedIn ↗": "Connect with me on LinkedIn ↗",
            "PORTFÓLIO / PROJETOS": "PORTFOLIO / PROJECTS",
            "Transformando ideias em": "Turning ideas into",
            "soluções digitais.": "digital solutions.",
            "Conheça alguns projetos que desenvolvi, conectando tecnologia, estratégia e negócios.": "Explore projects I have developed, connecting technology, strategy and business.",
            "Explorar projeto ↗": "Explore project ↗",
            "TRAJETÓRIA EDUCACIONAL": "EDUCATIONAL JOURNEY",
            "Formação e": "Education and",
            "conhecimento.": "knowledge.",
            "Uma trajetória construída através da educação, do desenvolvimento de habilidades técnicas e da busca contínua por conhecimento.": "A journey built through education, technical skill development and the continuous pursuit of knowledge.",
            "GRADUAÇÃO EM ANDAMENTO": "DEGREE IN PROGRESS",
            "FORMAÇÃO SUPERIOR": "HIGHER EDUCATION",
            "Engenharia de": "Software",
            "Software.": "Engineering",
            "INFORMAÇÕES": "DETAILS",
            "GRAU ACADÊMICO": "DEGREE",
            "Bacharelado": "Bachelor's Degree",
            "INSTITUIÇÃO": "INSTITUTION",
            "DURAÇÃO INFORMADA": "PROGRAM DURATION",
            "8 semestres · 4 anos": "8 semesters · 4 years",
            "ÁREAS DE CONHECIMENTO": "AREAS OF KNOWLEDGE",
            "Arquitetura de Software": "Software Architecture",
            "Banco de Dados": "Databases",
            "Noções de Segurança": "Security Fundamentals",
            "Conhecer a graduação": "Explore the degree",
            "PÁGINA OFICIAL DA GRADUAÇÃO": "OFFICIAL DEGREE PAGE",
            "Página oficial da graduação": "Official degree page",
            "Abrir em nova aba ↗": "Open in a new tab ↗",
            "FORMAÇÃO PROFISSIONAL": "PROFESSIONAL EDUCATION",
            "Formação": "Technical",
            "técnica.": "education.",
            "Duas formações técnicas registradas no Sistema Nacional de Informações da Educação Profissional e Tecnológica.": "Two technical qualifications registered in Brazil's National Information System for Professional and Technological Education.",
            "Consultar SISTEC": "Check SISTEC",
            "CARGA HORÁRIA": "WORKLOAD",
            "CHAVE DE AUTENTICAÇÃO": "AUTHENTICATION KEY",
            "Copiar": "Copy",
            "Consultar validade no SISTEC": "Verify on SISTEC",
            "Os registros podem ser consultados no portal oficial de validação nacional do SISTEC.": "Records can be verified on the official SISTEC national validation portal.",
            "CERTIFICAÇÕES & CONQUISTAS": "CERTIFICATIONS & ACHIEVEMENTS",
            "Conhecimento em constante evolução.": "Knowledge in continuous development.",
            "Emissão:": "Issued:",
            "Visualizar certificado ↗": "View certificate ↗",
            "Ver badge Credly ↗": "View Credly badge ↗",
            "Certificações e conquistas profissionais. Consulte os documentos originais e valide suas credenciais no Credly.": "Professional certifications and achievements. View the original documents and verify your credentials on Credly.",
            "NAVEGAÇÃO": "NAVIGATION",
            "CONECTE-SE": "CONNECT",
            "VAMOS CONVERSAR?": "LET'S TALK?",
            "Vamos construir algo juntos?": "Shall we build something together?",
            "Estou aberto a conexões, ideias e oportunidades na área de tecnologia.": "I am open to connections, ideas and opportunities in technology.",
            "Entrar em contato": "Get in touch",
            "Denilson Salazar. Todos os direitos reservados.": "Denilson Salazar. All rights reserved.",
            "VOLTAR AO TOPO": "BACK TO TOP",
            "Copiado ✓": "Copied ✓",
            "Copie manualmente": "Copy manually",
            "Ativar tema claro": "Enable light theme",
            "Ativar tema escuro": "Enable dark theme",
            "Alternar para tema escuro": "Switch to dark theme",
            "Alternar para tema claro": "Switch to light theme",
            "Abrir menu": "Open menu",
            "Fechar menu": "Close menu",
            "Próxima certificação": "Next certification",
            "Certificação anterior": "Previous certification",
            "Próximo projeto": "Next project",
            "Projeto anterior": "Previous project"
        },
        es: {
            "Início": "Inicio",
            "Quem é o Denilson?": "¿Quién es Denilson?",
            "Projetos": "Proyectos",
            "Graduação": "Carrera",
            "Formações": "Formación",
            "Certificações": "Certificaciones",
            "Vamos conversar": "Hablemos",
            "Conheça minha trajetória": "Conoce mi trayectoria",
            "Ver projetos": "Ver proyectos",
            "ACOMPANHE MINHA JORNADA": "SIGUE MI TRAYECTORIA",
            "CONHEÇA MINHA TRAJETÓRIA": "CONOCE MI TRAYECTORIA",
            "Quem é": "Quién es",
            "Denilson?": "¿Denilson?",
            "Conhecimento, tecnologia e evolução contínua.": "Conocimiento, tecnología y evolución continua.",
            "SOBRE MIM": "SOBRE MÍ",
            "Construindo o futuro através da": "Construyendo el futuro a través de la",
            "tecnologia.": "tecnología.",
            "TECNOLOGIAS, LINGUAGENS, FERRAMENTAS E CONHECIMENTOS": "TECNOLOGÍAS, LENGUAJES, HERRAMIENTAS Y CONOCIMIENTOS",
            "Aprendizado contínuo.": "Aprendizaje continuo.",
            "Meu Credly ↗": "Mi Credly ↗",
            "Desenvolvimento Web": "Desarrollo Web",
            "Programação": "Programación",
            "Redes de Computadores": "Redes Informáticas",
            "Inteligência Artificial": "Inteligencia Artificial",
            "Cibersegurança": "Ciberseguridad",
            "Segurança da Informação": "Seguridad de la Información",
            "Certificações Cisco. Consulte as credenciais no meu perfil Credly.": "Certificaciones Cisco. Consulta las credenciales en mi perfil de Credly.",
            "Conhecimento em constante evolução.": "Conocimiento en constante evolución.",
            "Conecte-se comigo no LinkedIn ↗": "Conéctate conmigo en LinkedIn ↗",
            "PORTFÓLIO / PROJETOS": "PORTAFOLIO / PROYECTOS",
            "Transformando ideias em": "Transformando ideas en",
            "soluções digitais.": "soluciones digitales.",
            "Conheça alguns projetos que desenvolvi, conectando tecnologia, estratégia e negócios.": "Conoce algunos proyectos que desarrollé, conectando tecnología, estrategia y negocios.",
            "Explorar projeto ↗": "Explorar proyecto ↗",
            "TRAJETÓRIA EDUCACIONAL": "TRAYECTORIA EDUCATIVA",
            "Formação e": "Formación y",
            "conhecimento.": "conocimiento.",
            "Uma trajetória construída através da educação, do desenvolvimento de habilidades técnicas e da busca contínua por conhecimento.": "Una trayectoria construida mediante la educación, el desarrollo de habilidades técnicas y la búsqueda continua de conocimiento.",
            "GRADUAÇÃO EM ANDAMENTO": "CARRERA EN CURSO",
            "FORMAÇÃO SUPERIOR": "EDUCACIÓN SUPERIOR",
            "Engenharia de": "Ingeniería de",
            "Software.": "Software.",
            "INFORMAÇÕES": "INFORMACIÓN",
            "GRAU ACADÊMICO": "GRADO ACADÉMICO",
            "Bacharelado": "Licenciatura",
            "INSTITUIÇÃO": "INSTITUCIÓN",
            "DURAÇÃO INFORMADA": "DURACIÓN INFORMADA",
            "8 semestres · 4 anos": "8 semestres · 4 años",
            "ÁREAS DE CONHECIMENTO": "ÁREAS DE CONOCIMIENTO",
            "Arquitetura de Software": "Arquitectura de Software",
            "Banco de Dados": "Bases de Datos",
            "Noções de Segurança": "Fundamentos de Seguridad",
            "Conhecer a graduação": "Conocer la carrera",
            "PÁGINA OFICIAL DA GRADUAÇÃO": "PÁGINA OFICIAL DE LA CARRERA",
            "Página oficial da graduação": "Página oficial de la carrera",
            "Abrir em nova aba ↗": "Abrir en una nueva pestaña ↗",
            "FORMAÇÃO PROFISSIONAL": "FORMACIÓN PROFESIONAL",
            "Formação": "Formación",
            "técnica.": "técnica.",
            "Duas formações técnicas registradas no Sistema Nacional de Informações da Educação Profissional e Tecnológica.": "Dos titulaciones técnicas registradas en el Sistema Nacional de Información de Educación Profesional y Tecnológica de Brasil.",
            "Consultar SISTEC": "Consultar SISTEC",
            "CARGA HORÁRIA": "CARGA HORARIA",
            "CHAVE DE AUTENTICAÇÃO": "CLAVE DE AUTENTICACIÓN",
            "Copiar": "Copiar",
            "Consultar validade no SISTEC": "Consultar validez en SISTEC",
            "Os registros podem ser consultados no portal oficial de validação nacional do SISTEC.": "Los registros pueden consultarse en el portal oficial de validación nacional de SISTEC.",
            "CERTIFICAÇÕES & CONQUISTAS": "CERTIFICACIONES Y LOGROS",
            "Emissão:": "Emisión:",
            "Visualizar certificado ↗": "Ver certificado ↗",
            "Ver badge Credly ↗": "Ver insignia de Credly ↗",
            "Certificações e conquistas profissionais. Consulte os documentos originais e valide suas credenciais no Credly.": "Certificaciones y logros profesionales. Consulta los documentos originales y valida tus credenciales en Credly.",
            "NAVEGAÇÃO": "NAVEGACIÓN",
            "CONECTE-SE": "CONECTA",
            "VAMOS CONVERSAR?": "¿HABLEMOS?",
            "Vamos construir algo juntos?": "¿Construimos algo juntos?",
            "Estou aberto a conexões, ideias e oportunidades na área de tecnologia.": "Estoy abierto a conexiones, ideas y oportunidades en el área de tecnología.",
            "Entrar em contato": "Contactar",
            "Denilson Salazar. Todos os direitos reservados.": "Denilson Salazar. Todos los derechos reservados.",
            "VOLTAR AO TOPO": "VOLVER ARRIBA",
            "Copiado ✓": "Copiado ✓",
            "Copie manualmente": "Copie manualmente",
            "Ativar tema claro": "Activar tema claro",
            "Ativar tema escuro": "Activar tema oscuro",
            "Alternar para tema escuro": "Cambiar al tema oscuro",
            "Alternar para tema claro": "Cambiar al tema claro",
            "Abrir menu": "Abrir menú",
            "Fechar menu": "Cerrar menú",
            "Próxima certificação": "Siguiente certificación",
            "Certificação anterior": "Certificación anterior",
            "Próximo projeto": "Siguiente proyecto",
            "Projeto anterior": "Proyecto anterior"
        },
        fr: {
            "Início": "Accueil",
            "Quem é o Denilson?": "Qui est Denilson ?",
            "Projetos": "Projets",
            "Graduação": "Diplôme",
            "Formações": "Formations",
            "Certificações": "Certifications",
            "Vamos conversar": "Discutons",
            "Conheça minha trajetória": "Découvrez mon parcours",
            "Ver projetos": "Voir les projets",
            "ACOMPANHE MINHA JORNADA": "SUIVEZ MON PARCOURS",
            "CONHEÇA MINHA TRAJETÓRIA": "DÉCOUVREZ MON PARCOURS",
            "Quem é": "Qui est",
            "Denilson?": "Denilson ?",
            "Conhecimento, tecnologia e evolução contínua.": "Connaissances, technologie et évolution continue.",
            "SOBRE MIM": "À PROPOS",
            "Construindo o futuro através da": "Construire l'avenir grâce à la",
            "tecnologia.": "technologie.",
            "TECNOLOGIAS, LINGUAGENS, FERRAMENTAS E CONHECIMENTOS": "TECHNOLOGIES, LANGAGES, OUTILS ET COMPÉTENCES",
            "Aprendizado contínuo.": "Apprentissage continu.",
            "Meu Credly ↗": "Mon Credly ↗",
            "Desenvolvimento Web": "Développement Web",
            "Programação": "Programmation",
            "Redes de Computadores": "Réseaux informatiques",
            "Inteligência Artificial": "Intelligence artificielle",
            "Cibersegurança": "Cybersécurité",
            "Segurança da Informação": "Sécurité de l'information",
            "Certificações Cisco. Consulte as credenciais no meu perfil Credly.": "Certifications Cisco. Consultez les accréditations sur mon profil Credly.",
            "Conhecimento em constante evolução.": "Des connaissances en constante évolution.",
            "Conecte-se comigo no LinkedIn ↗": "Retrouvez-moi sur LinkedIn ↗",
            "PORTFÓLIO / PROJETOS": "PORTFOLIO / PROJETS",
            "Transformando ideias em": "Transformer les idées en",
            "soluções digitais.": "solutions numériques.",
            "Conheça alguns projetos que desenvolvi, conectando tecnologia, estratégia e negócios.": "Découvrez quelques projets que j'ai développés, en reliant technologie, stratégie et affaires.",
            "Explorar projeto ↗": "Découvrir le projet ↗",
            "TRAJETÓRIA EDUCACIONAL": "PARCOURS ÉDUCATIF",
            "Formação e": "Formation et",
            "conhecimento.": "connaissances.",
            "Uma trajetória construída através da educação, do desenvolvimento de habilidades técnicas e da busca contínua por conhecimento.": "Un parcours construit grâce à l'éducation, au développement de compétences techniques et à la recherche continue de connaissances.",
            "GRADUAÇÃO EM ANDAMENTO": "DIPLÔME EN COURS",
            "FORMAÇÃO SUPERIOR": "ENSEIGNEMENT SUPÉRIEUR",
            "Engenharia de": "Génie",
            "Software.": "logiciel.",
            "INFORMAÇÕES": "INFORMATIONS",
            "GRAU ACADÊMICO": "DIPLÔME",
            "Bacharelado": "Licence",
            "INSTITUIÇÃO": "ÉTABLISSEMENT",
            "DURAÇÃO INFORMADA": "DURÉE INDIQUÉE",
            "8 semestres · 4 anos": "8 semestres · 4 ans",
            "ÁREAS DE CONHECIMENTO": "DOMAINES DE CONNAISSANCE",
            "Arquitetura de Software": "Architecture logicielle",
            "Banco de Dados": "Bases de données",
            "Noções de Segurança": "Notions de sécurité",
            "Conhecer a graduação": "Découvrir le diplôme",
            "PÁGINA OFICIAL DA GRADUAÇÃO": "PAGE OFFICIELLE DU DIPLÔME",
            "Página oficial da graduação": "Page officielle du diplôme",
            "Abrir em nova aba ↗": "Ouvrir dans un nouvel onglet ↗",
            "FORMAÇÃO PROFISSIONAL": "FORMATION PROFESSIONNELLE",
            "Formação": "Formation",
            "técnica.": "technique.",
            "Duas formações técnicas registradas no Sistema Nacional de Informações da Educação Profissional e Tecnológica.": "Deux qualifications techniques enregistrées dans le système national brésilien d'information sur l'enseignement professionnel et technologique.",
            "Consultar SISTEC": "Consulter SISTEC",
            "CARGA HORÁRIA": "VOLUME HORAIRE",
            "CHAVE DE AUTENTICAÇÃO": "CLÉ D'AUTHENTIFICATION",
            "Copiar": "Copier",
            "Consultar validade no SISTEC": "Vérifier sur SISTEC",
            "Os registros podem ser consultados no portal oficial de validação nacional do SISTEC.": "Les enregistrements peuvent être consultés sur le portail officiel national de validation SISTEC.",
            "CERTIFICAÇÕES & CONQUISTAS": "CERTIFICATIONS ET RÉALISATIONS",
            "Emissão:": "Délivré le :",
            "Visualizar certificado ↗": "Voir le certificat ↗",
            "Ver badge Credly ↗": "Voir le badge Credly ↗",
            "Certificações e conquistas profissionais. Consulte os documentos originais e valide suas credenciais no Credly.": "Certifications et réalisations professionnelles. Consultez les documents originaux et vérifiez vos accréditations sur Credly.",
            "NAVEGAÇÃO": "NAVIGATION",
            "CONECTE-SE": "RÉSEAUX",
            "VAMOS CONVERSAR?": "PARLONS-EN ?",
            "Vamos construir algo juntos?": "Et si nous construisions quelque chose ensemble ?",
            "Estou aberto a conexões, ideias e oportunidades na área de tecnologia.": "Je suis ouvert aux contacts, aux idées et aux opportunités dans le domaine de la technologie.",
            "Entrar em contato": "Me contacter",
            "Denilson Salazar. Todos os direitos reservados.": "Denilson Salazar. Tous droits réservés.",
            "VOLTAR AO TOPO": "RETOUR EN HAUT",
            "Copiado ✓": "Copié ✓",
            "Copie manualmente": "Copiez manuellement",
            "Ativar tema claro": "Activer le thème clair",
            "Ativar tema escuro": "Activer le thème sombre",
            "Alternar para tema escuro": "Passer au thème sombre",
            "Alternar para tema claro": "Passer au thème clair",
            "Abrir menu": "Ouvrir le menu",
            "Fechar menu": "Fermer le menu",
            "Próxima certificação": "Certification suivante",
            "Certificação anterior": "Certification précédente",
            "Próximo projeto": "Projet suivant",
            "Projeto anterior": "Projet précédent"
        }
    };

    // Traduz textos simples sem modificar código, links, nomes próprios ou dados de credenciais.
    const originalTextNodes = [];
    const walker = document.createTreeWalker(
        document.body,
        NodeFilter.SHOW_TEXT,
        {
            acceptNode(node) {
                if (!node.nodeValue.trim()) return NodeFilter.FILTER_REJECT;
                const parent = node.parentElement;
                if (!parent || ["SCRIPT", "STYLE", "CODE"].includes(parent.tagName)) {
                    return NodeFilter.FILTER_REJECT;
                }
                if (parent.closest("[data-no-translate], .language-picker")) {
                    return NodeFilter.FILTER_REJECT;
                }
                return NodeFilter.FILTER_ACCEPT;
            }
        }
    );

    while (walker.nextNode()) {
        const node = walker.currentNode;
        const original = node.nodeValue;
        const trimmed = original.trim();
        originalTextNodes.push({ node, original, trimmed });
    }

    const originalAttributes = [];
    document.querySelectorAll("[aria-label], [title], img[alt]").forEach(element => {
        ["aria-label", "title", "alt"].forEach(attribute => {
            if (element.hasAttribute(attribute)) {
                originalAttributes.push({
                    element,
                    attribute,
                    original: element.getAttribute(attribute)
                });
            }
        });
    });

    function translate(lang) {
        const dictionary = translations[lang] || {};
        originalTextNodes.forEach(({ node, original, trimmed }) => {
            const translated = dictionary[trimmed];
            if (translated) {
                const leading = original.match(/^\s*/)?.[0] || "";
                const trailing = original.match(/\s*$/)?.[0] || "";
                node.nodeValue = leading + translated + trailing;
            } else {
                node.nodeValue = original;
            }
        });

        originalAttributes.forEach(({ element, attribute, original }) => {
            const translated = dictionary[original];
            element.setAttribute(attribute, translated || original);
        });

        document.documentElement.lang = lang === "pt-BR" ? "pt-BR" : lang;
        currentLabel.textContent = labels[lang] || "PT";

        options.forEach(option => {
            const active = option.dataset.lang === lang;
            option.classList.toggle("active", active);
            if (active) option.setAttribute("aria-current", "true");
            else option.removeAttribute("aria-current");
        });

        try {
            localStorage.setItem("denilson-language", lang);
        } catch (error) {
            console.warn("Não foi possível salvar o idioma.", error);
        }
    }

    function closeMenu(returnFocus = false) {
        picker.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
        if (returnFocus) toggle.focus();
    }

    toggle.addEventListener("click", () => {
        const open = !picker.classList.contains("open");
        picker.classList.toggle("open", open);
        toggle.setAttribute("aria-expanded", String(open));
    });

    options.forEach(option => {
        option.addEventListener("click", () => {
            translate(option.dataset.lang);
            closeMenu();
        });
    });

    document.addEventListener("click", event => {
        if (!picker.contains(event.target)) closeMenu();
    });

    document.addEventListener("keydown", event => {
        if (event.key === "Escape" && picker.classList.contains("open")) {
            closeMenu(true);
        }
    });

    let savedLanguage = "pt-BR";
    try {
        const stored = localStorage.getItem("denilson-language");
        if (stored && Object.prototype.hasOwnProperty.call(labels, stored)) {
            savedLanguage = stored;
        }
    } catch (error) {
        console.warn("Não foi possível recuperar o idioma salvo.", error);
    }

    translate(savedLanguage);
})();
