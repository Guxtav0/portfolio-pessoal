/* script.js — Gustavo Franco */

document.addEventListener('DOMContentLoaded', () => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // --- 1. Bilingual Dictionary (PT / EN) ---
    const translations = {
        pt: {
            page_title: "Gustavo Franco",
            hero_sr_title: "Gustavo Franco — Analista de Dados & BI, Automação de Processos e Soluções Digitais",
            nav_about: "Sobre",
            nav_services: "Serviços",
            nav_projects: "Projetos",
            nav_experience: "Experiência",
            nav_contact: "Contato",
            hero_role_1: "Analista de Dados & BI",
            hero_role_2: "Automação de Processos",
            hero_role_3: "Soluções Digitais",
            hero_loc_1: "Salvador, BA",
            hero_loc_2: "Atendimento Remoto",
            hero_marquee_text: "Analista de Dados & BI  •  Automação de Processos  •  Soluções Digitais  •  Salvador, BA  •  Atendimento Remoto  •  ",
            cta_contact: "Fale Comigo",
            about_heading: "Sobre mim",
            about_text: "Especialista em Business Intelligence e dashboards em Power BI, com atuação em modelagem dimensional, DAX e tratamento de dados com SQL e Power Query. Também desenvolvo automações de processos com Python e Power Automate e crio soluções digitais sob medida.",
            services_heading: "Serviços",
            srv_1_title: "Dados, BI & ETL",
            srv_1_desc: "Dashboards estratégicos em Power BI, modelagem dimensional, DAX, limpeza e tratamento de bases em SQL e Power Query para decisões rápidas e confiáveis.",
            srv_2_title: "Automação de Processos",
            srv_2_desc: "Fluxos em Python, Power Automate e integrações com SharePoint e e-mail para eliminar tarefas repetitivas.",
            srv_3_title: "Soluções Digitais & Web",
            srv_3_desc: "Landing pages modernas, páginas institucionais e design responsivo focado em conversão.",
            srv_cta: "Solicitar diagnóstico",
            projects_heading: "Projetos",
            proj_stack_label: "Stack & Modelagem",
            proj_kpis_label: "Principais KPIs",
            tag_star_schema: "Star Schema",
            tag_dim_model: "Modelagem Dimensional",
            proj_1_cat: "Comercial · Power BI & DAX",
            proj_1_title: "Dashboard Comercial",
            proj_1_desc: "Visão estratégica de vendas vs. metas, ticket médio, margem de contribuição e análise de devoluções em modelo estrela.",
            proj_1_kpi_1: "Total de Vendas vs. Meta Comercial",
            proj_1_kpi_2: "Ticket Médio & Margem de Lucro",
            proj_1_kpi_3: "Taxa de Devolução & Clientes",
            proj_1_kpi_4: "Performance por Produto",
            proj_2_cat: "Financeiro · Modelagem Dimensional",
            proj_2_title: "Dashboard Financeiro",
            proj_2_desc: "Consolidação executiva de receitas, despesas, saldo e fluxo por período para controle e previsibilidade financeira.",
            proj_2_kpi_1: "Receita Total & Despesa Total",
            proj_2_kpi_2: "Saldo Acumulado por Período",
            proj_2_kpi_3: "Despesas por Setor",
            proj_2_kpi_4: "Classificação de Despesas",
            proj_3_cat: "Logística · Operações & OTD",
            proj_3_title: "Dashboard Logístico",
            proj_3_desc: "Monitoramento de custo de frete, total de viagens, pontualidade nas entregas (OTD) e performance regional.",
            proj_3_kpi_1: "OTD (On-Time Delivery)",
            proj_3_kpi_2: "Valor do Frete & Total de Viagens",
            proj_3_kpi_3: "Peso Total & Cubagem",
            proj_3_kpi_4: "Performance Regional & Veículos",
            proj_4_cat: "Recursos Humanos · People Analytics",
            proj_4_title: "Dashboard People Analytics",
            proj_4_desc: "Indicadores estratégicos de headcount, turnover, admissões, desligamentos, demografia e folha salarial.",
            proj_4_kpi_1: "Headcount & Turnover",
            proj_4_kpi_2: "Admissões & Desligamentos",
            proj_4_kpi_3: "Folha Salarial & Salário Médio",
            proj_4_kpi_4: "Distribuição Etária & Gênero",
            live_project_btn: "Ver Projeto",
            exp_heading: "Experiência & Formação",
            exp_subtitle: "Mais de 4 anos entregando BI, engenharia de dados e automação de processos em ambiente corporativo na Capgemini, aliados à formação em Sistemas de Informação.",
            exp_result_label: "Resultado-chave",
            exp_1_badge: "CLT",
            exp_1_title: "Analista de Soluções",
            exp_1_org: "Capgemini",
            exp_1_resp_1: "Desenvolvimento de dashboards executivos e acompanhamento de indicadores operacionais (AMS, IDLE, COE).",
            exp_1_resp_2: "Otimização de pipelines ETL, modelagem dimensional e padronização de bases de dados corporativas.",
            exp_1_resp_3: "Automação de rotinas e fluxos recorrentes com Python e Power Automate integrados ao SharePoint e e-mail.",
            exp_1_resp_4: "Alinhamento contínuo de KPIs e regras de negócio diretamente com stakeholders.",
            exp_1_result: "Otimização de pipeline no Power Query reduzindo o tempo de atualização de +1h para ~10 min (>80% de redução).",
            exp_2_badge: "Aprendiz",
            exp_2_title: "Jovem Aprendiz",
            exp_2_org: "Capgemini",
            exp_2_resp_1: "Tratamento de bases operacionais e automação de relatórios em Excel e Power Query para apoio à gestão.",
            exp_2_resp_2: "Estruturação de métricas de atendimento e visibilidade de produtividade no ecossistema Jira e eazyBI.",
            exp_2_result: "Solução customizada de extração de apontamento de horas no JIRA & eazyBI em cenário onde o suporte oficial havia considerado inviável.",
            exp_3_badge: "Graduação",
            exp_3_title: "Bacharelado em Sistemas de Informação",
            exp_3_org: "Faculdade UNIME",
            exp_3_tag_1: "Engenharia de Software",
            exp_3_tag_2: "Banco de Dados",
            exp_3_tag_3: "Modelagem de Sistemas",
            exp_3_tag_4: "Lógica Computacional",
            exp_3_desc: "Formação superior focada em arquitetura de sistemas, modelagem relacional e dimensional, SQL, desenvolvimento de software e resolução analítica de problemas corporativos.",
            certs_heading: "Principais Cursos",
            certs_subtitle: "Mais de 20 cursos e formações em Dados, Python, Power BI, SQL, Engenharia de Software e Liderança Estratégica.",
            certs_counter_label: "cursos",
            cert_filter_all: "Todos",
            certs_fallback: "Não foi possível carregar a lista de cursos no momento. Abra o site via servidor local ou consulte o currículo em PDF abaixo.",
            contact_heading: "Contato",
            contact_headline: "Vamos transformar dados e processos em resultado real?",
            contact_desc: "Conte sobre o seu desafio atual de BI, automação ou presença digital. Respondo rapidamente com um diagnóstico prático.",
            contact_email_lbl: "E-mail",
            contact_loc_lbl: "Localização",
            contact_loc_val: "Salvador, BA · Remoto",
            contact_cv_btn: "Baixar Currículo (PDF)",
            cv_filename_pt: "CV_Gustavo_Franco_PT.pdf",
            cv_filename_en: "CV_Gustavo_Franco_EN.pdf",
            cv_aria_pt: "Baixar Currículo (Português)",
            cv_aria_en: "Download Resume (English)",
            form_name_lbl: "Nome Completo *",
            form_name_placeholder: "Seu nome",
            form_company_lbl: "Empresa / Negócio",
            form_company_placeholder: "Nome da sua empresa",
            form_email_lbl: "E-mail de Contato *",
            form_email_placeholder: "seuemail@provedor.com",
            form_service_lbl: "Serviço de Interesse",
            form_opt_default: "Selecione uma opção (ou Diagnóstico Geral)",
            form_opt_dados: "Dados & Dashboards em Power BI",
            form_opt_automacao: "Automação de Processos (Python / Power Automate)",
            form_opt_digital: "Soluções Digitais / Landing Pages",
            form_opt_recruitment: "Oportunidade Profissional / Recrutamento",
            form_opt_other: "Outro assunto",
            form_message_lbl: "Qual problema ou necessidade você precisa resolver? *",
            form_message_placeholder: "Conte brevemente sobre o seu processo atual, o problema que está enfrentando ou o projeto que deseja construir...",
            form_submit_btn: "Enviar Mensagem",
            form_sending: "Enviando...",
            form_sent: "Mensagem Enviada ✓",
            form_status_ok: "Solicitação registrada com sucesso! Em breve retornarei o contato.",
            footer_positioning: "Dados, BI, Automação & Soluções Digitais.",
            footer_copy: "© 2026 Gustavo Franco. Todos os direitos reservados."
        },
        en: {
            page_title: "Gustavo Franco",
            hero_sr_title: "Gustavo Franco — Data & BI Analyst, Process Automation & Digital Solutions",
            nav_about: "About",
            nav_services: "Services",
            nav_projects: "Projects",
            nav_experience: "Experience",
            nav_contact: "Contact",
            hero_role_1: "Data & BI Analyst",
            hero_role_2: "Process Automation",
            hero_role_3: "Digital Solutions",
            hero_loc_1: "Salvador, BA",
            hero_loc_2: "Remote Worldwide",
            hero_marquee_text: "Data & BI Analyst  •  Process Automation  •  Digital Solutions  •  Salvador, BA  •  Remote Worldwide  •  ",
            cta_contact: "Contact Me",
            about_heading: "About me",
            about_text: "Specialist in Business Intelligence and Power BI dashboards, working with dimensional modeling, DAX, and data transformation in SQL and Power Query. I also build process automations with Python and Power Automate and craft tailored digital solutions.",
            services_heading: "Services",
            srv_1_title: "Data, BI & ETL",
            srv_1_desc: "Strategic Power BI dashboards, dimensional modeling, DAX, and data cleaning & ETL pipelines in SQL and Power Query for fast, reliable decisions.",
            srv_2_title: "Process Automation",
            srv_2_desc: "Python workflows, Power Automate, and SharePoint/email integrations to eliminate repetitive manual work.",
            srv_3_title: "Digital Solutions & Web",
            srv_3_desc: "Modern landing pages, institutional sites, and conversion-focused responsive design.",
            srv_cta: "Request diagnosis",
            projects_heading: "Projects",
            proj_stack_label: "Stack & Modeling",
            proj_kpis_label: "Key KPIs",
            tag_star_schema: "Star Schema",
            tag_dim_model: "Dimensional Modeling",
            proj_1_cat: "Sales · Power BI & DAX",
            proj_1_title: "Sales Dashboard",
            proj_1_desc: "Strategic view of sales vs. targets, average ticket, contribution margin, and returns analysis on a star schema.",
            proj_1_kpi_1: "Total Sales vs. Commercial Target",
            proj_1_kpi_2: "Average Ticket & Profit Margin",
            proj_1_kpi_3: "Return Rate & Customer Count",
            proj_1_kpi_4: "Product Performance",
            proj_2_cat: "Finance · Dimensional Modeling",
            proj_2_title: "Financial Dashboard",
            proj_2_desc: "Executive consolidation of revenues, expenses, balance, and period cash flow for financial predictability.",
            proj_2_kpi_1: "Total Revenue & Total Expenses",
            proj_2_kpi_2: "Cumulative Period Balance",
            proj_2_kpi_3: "Expenses by Department",
            proj_2_kpi_4: "Expense Classification",
            proj_3_cat: "Logistics · Operations & OTD",
            proj_3_title: "Logistics Dashboard",
            proj_3_desc: "Tracking freight cost, total trips, On-Time Delivery (OTD), and regional operational performance.",
            proj_3_kpi_1: "OTD (On-Time Delivery)",
            proj_3_kpi_2: "Freight Cost & Total Trips",
            proj_3_kpi_3: "Total Weight & Cubic Volume",
            proj_3_kpi_4: "Regional & Fleet Performance",
            proj_4_cat: "Human Resources · People Analytics",
            proj_4_title: "People Analytics Dashboard",
            proj_4_desc: "Strategic HR indicators covering headcount, turnover, hires, departures, demographics, and payroll.",
            proj_4_kpi_1: "Headcount & Turnover",
            proj_4_kpi_2: "Hires & Terminations",
            proj_4_kpi_3: "Payroll & Average Salary",
            proj_4_kpi_4: "Age & Gender Distribution",
            live_project_btn: "Live Project",
            exp_heading: "Experience & Education",
            exp_subtitle: "Over 4 years delivering BI, data engineering, and process automation in high-demand corporate environments at Capgemini, backed by a degree in Information Systems.",
            exp_result_label: "Key Result",
            exp_1_badge: "Full-Time",
            exp_1_title: "Solutions Analyst",
            exp_1_org: "Capgemini",
            exp_1_resp_1: "Executive dashboards and operational KPI monitoring across AMS, IDLE, and COE engagements.",
            exp_1_resp_2: "ETL pipeline optimization, dimensional modeling, and corporate dataset standardization.",
            exp_1_resp_3: "Process automation with Python and Power Automate integrated with SharePoint and email.",
            exp_1_resp_4: "Direct KPI definition and business-rule alignment with stakeholders.",
            exp_1_result: "Power Query pipeline optimization cutting refresh time from +1h down to ~10 min (>80% reduction).",
            exp_2_badge: "Apprentice",
            exp_2_title: "Young Apprentice",
            exp_2_org: "Capgemini",
            exp_2_resp_1: "Operational dataset processing and automated Excel/Power Query reporting for management support.",
            exp_2_resp_2: "Service metrics structuring and productivity tracking across the Jira and eazyBI ecosystem.",
            exp_2_result: "Built a custom JIRA & eazyBI time-tracking extraction solution where official support had deemed it unfeasible.",
            exp_3_badge: "Bachelor's",
            exp_3_title: "B.Sc. in Information Systems",
            exp_3_org: "Faculdade UNIME",
            exp_3_tag_1: "Software Engineering",
            exp_3_tag_2: "Databases",
            exp_3_tag_3: "Systems Modeling",
            exp_3_tag_4: "Computational Logic",
            exp_3_desc: "Undergraduate degree focused on systems architecture, relational & dimensional data modeling, SQL, software engineering, and structured enterprise problem solving.",
            certs_heading: "Key Courses",
            certs_subtitle: "Over 20 courses across Data, Python, Power BI, SQL, Software Engineering, and Strategic Leadership.",
            certs_counter_label: "courses",
            cert_filter_all: "All",
            certs_fallback: "Unable to load courses right now. Please open the site via a local server or check the PDF resume below.",
            contact_heading: "Contact",
            contact_headline: "Ready to turn your data and workflows into measurable results?",
            contact_desc: "Share your current BI, automation, or digital presence challenge. I will reply promptly with a practical diagnosis.",
            contact_email_lbl: "Email",
            contact_loc_lbl: "Location",
            contact_loc_val: "Salvador, BA · Remote",
            contact_cv_btn: "Download Resume (PDF)",
            cv_filename_pt: "CV_Gustavo_Franco_PT.pdf",
            cv_filename_en: "CV_Gustavo_Franco_EN.pdf",
            cv_aria_pt: "Baixar Currículo (Português)",
            cv_aria_en: "Download Resume (English)",
            form_name_lbl: "Full Name *",
            form_name_placeholder: "Your name",
            form_company_lbl: "Company / Business",
            form_company_placeholder: "Your company name",
            form_email_lbl: "Contact Email *",
            form_email_placeholder: "yourname@provider.com",
            form_service_lbl: "Service of Interest",
            form_opt_default: "Select an option (or General Diagnosis)",
            form_opt_dados: "Data & Power BI Dashboards",
            form_opt_automacao: "Process Automation (Python / Power Automate)",
            form_opt_digital: "Digital Solutions / Landing Pages",
            form_opt_recruitment: "Job Opportunity / Recruitment",
            form_opt_other: "Other topic",
            form_message_lbl: "What problem or need do you want to solve? *",
            form_message_placeholder: "Briefly describe your current workflow, bottleneck, or project you want to build...",
            form_submit_btn: "Send Message",
            form_sending: "Sending...",
            form_sent: "Message Sent ✓",
            form_status_ok: "Request received! I will get back to you shortly.",
            footer_positioning: "Data, BI, Automation & Digital Solutions.",
            footer_copy: "© 2026 Gustavo Franco. All rights reserved."
        }
    };

    let currentLang = localStorage.getItem('lang') || 'pt';

    // --- 2. WebGL Gallery Projects Data (4 Real Local Dashboards) ---
    const galleryExperiments = [
        {
            id: '01',
            label: 'Dashboard de Vendas',
            src: 'projetos/Dashboard de Vendas/Dashboard Vendas.png',
            href: 'projetos/dashboard-comercial.html',
            descPt: 'Visão estratégica de vendas vs. metas, ticket médio, margem de contribuição e análise de devoluções em modelo estrela.',
            descEn: 'Strategic view of sales vs. targets, average ticket, contribution margin, and returns analysis on a star schema.'
        },
        {
            id: '02',
            label: 'Dashboard de Fluxo de Caixa',
            src: 'projetos/Dashboard de Fluxo de Caixa/Dashboard Fluxo de Caixa.png',
            href: 'projetos/dashboard-financeiro.html',
            descPt: 'Consolidação executiva de receitas, despesas, saldo acumulado e fluxo por período para previsibilidade financeira.',
            descEn: 'Executive consolidation of revenues, expenses, cumulative balance, and period cash flow for financial predictability.'
        },
        {
            id: '03',
            label: 'Dashboard de Logística',
            src: 'projetos/Dashboard de Logística/Dashboard Logistica.png',
            href: 'projetos/dashboard-logistico.html',
            descPt: 'Monitoramento de custo de frete, total de viagens, pontualidade nas entregas (OTD) e performance regional de frota.',
            descEn: 'Tracking freight cost, total trips, On-Time Delivery (OTD), and regional fleet operational performance.'
        },
        {
            id: '04',
            label: 'Dashboard de RH',
            src: 'projetos/Dashboard de RH/Dashboard RH.png',
            href: 'projetos/dashboard-rh.html',
            descPt: 'Indicadores estratégicos de headcount, turnover, admissões, desligamentos, demografia e folha salarial.',
            descEn: 'Strategic HR indicators covering headcount, turnover, hires, departures, demographics, and payroll.'
        }
    ];

    // --- 3. DOM Elements ---
    const heroSection = document.getElementById('home');
    const floatingNav = document.getElementById('floating-nav');
    const floatingNavIndicator = document.getElementById('floating-nav-indicator');
    const floatingNavLinks = Array.from(document.querySelectorAll('.floating-nav-link'));

    const marqueeSection = document.getElementById('marquee');

    const aboutTextEl = document.getElementById('about-animated-text');
    let aboutChars = [];

    const projectCards = Array.from(document.querySelectorAll('.project-card'));
    const expCards = Array.from(document.querySelectorAll('.exp-card'));
    const certFilterBtns = document.querySelectorAll('.cert-filter-btn');
    const certsGrid = document.getElementById('certs-grid');
    const langToggle = document.getElementById('lang-toggle');
    const langText = document.getElementById('lang-text');
    const contactCvBtn = document.getElementById('contact-cv-btn');
    const formServiceSelect = document.getElementById('form-service');
    const contactForm = document.getElementById('contact-form');
    const formStatus = document.getElementById('form-status');

    // --- 4. Floating Nav Pill & Scroll-Spy ---
    const trackedSectionIds = ['about', 'services', 'projects', 'experience', 'contact'];
    const trackedSections = trackedSectionIds
        .map(id => document.getElementById(id))
        .filter(Boolean);
    let activeNavId = null;
    let navClickLockUntil = 0;

    function positionFloatingNavIndicator(targetLink) {
        if (!floatingNav || !floatingNavIndicator) return;
        if (!targetLink) {
            floatingNavIndicator.style.opacity = '0';
            return;
        }
        floatingNavIndicator.style.width = `${targetLink.offsetWidth}px`;
        floatingNavIndicator.style.height = `${targetLink.offsetHeight}px`;
        floatingNavIndicator.style.top = `${targetLink.offsetTop}px`;
        floatingNavIndicator.style.transform = `translate3d(${targetLink.offsetLeft}px, 0, 0)`;
        floatingNavIndicator.style.opacity = '1';
    }

    function setActiveFloatingNav(sectionId) {
        activeNavId = sectionId || null;
        let activeLink = null;

        floatingNavLinks.forEach(link => {
            const isMatch = Boolean(sectionId && link.getAttribute('data-nav-target') === sectionId);
            link.classList.toggle('is-active', isMatch);
            if (isMatch) {
                link.setAttribute('aria-current', 'location');
                activeLink = link;
            } else {
                link.removeAttribute('aria-current');
            }
        });

        positionFloatingNavIndicator(activeLink);
    }

    function updateFloatingNavOnScroll() {
        if (!floatingNavLinks.length || !trackedSections.length) return;
        if (performance.now() < navClickLockUntil) return;

        const vh = window.innerHeight || 900;
        const triggerY = vh * 0.42;

        if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 80) {
            if (activeNavId !== 'contact') {
                setActiveFloatingNav('contact');
            }
            return;
        }

        let nextActiveId = null;
        for (const section of trackedSections) {
            if (section.getBoundingClientRect().top <= triggerY) {
                nextActiveId = section.id;
            }
        }

        if (nextActiveId !== activeNavId) {
            setActiveFloatingNav(nextActiveId);
        }
    }

    floatingNavLinks.forEach(link => {
        link.addEventListener('click', () => {
            const targetId = link.getAttribute('data-nav-target');
            if (targetId) {
                setActiveFloatingNav(targetId);
                navClickLockUntil = performance.now() + (prefersReducedMotion ? 50 : 800);
            }
        });
    });

    // --- 5. FadeIn Motion Setup ---
    function initFadeIns() {
        const fadeEls = Array.from(document.querySelectorAll('.fade-in'));
        fadeEls.forEach(el => {
            const delay = el.getAttribute('data-fade-delay') || '0';
            const fx = el.getAttribute('data-fade-x') || '0';
            const fy = el.getAttribute('data-fade-y') || '24';
            el.style.setProperty('--fade-delay', `${delay}s`);
            el.style.setProperty('--fade-x', `${fx}px`);
            el.style.setProperty('--fade-y', `${fy}px`);
        });

        if (prefersReducedMotion) {
            fadeEls.forEach(el => el.classList.add('is-visible'));
            return;
        }

        const heroFades = heroSection ? Array.from(heroSection.querySelectorAll('.fade-in')) : [];
        const otherFades = fadeEls.filter(el => !heroFades.includes(el));

        if (heroFades.length) {
            requestAnimationFrame(() => {
                requestAnimationFrame(() => {
                    heroFades.forEach(el => el.classList.add('is-visible'));
                });
            });
        }

        if ('IntersectionObserver' in window) {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-visible');
                        observer.unobserve(entry.target);
                    }
                });
            }, {
                threshold: 0.1,
                rootMargin: '0px 0px -30px 0px'
            });

            otherFades.forEach(el => observer.observe(el));
        } else {
            otherFades.forEach(el => el.classList.add('is-visible'));
        }
    }

    // --- 7. Three.js r128 WebGL Curved-Gallery Strip ---
    let galleryController = null;

    function initWebGLGallery() {
        if (!marqueeSection) return;

        const canvas = document.getElementById('gallery-webgl-canvas');
        const labelsContainer = document.getElementById('gallery-labels');
        const titleEl = document.getElementById('gallery-title');
        const ruleTickEl = document.getElementById('gallery-rule-tick');
        const counterEl = document.getElementById('gallery-counter');
        const crossBtn = document.getElementById('gallery-cross');
        const cross3dEl = document.getElementById('gallery-cross-3d');
        const fallbackEl = document.getElementById('gallery-fallback');

        const overlayEl = document.getElementById('gallery-overlay');
        const overlayImg = document.getElementById('gallery-overlay-img');
        const overlayBlocksEl = document.getElementById('gallery-overlay-blocks');
        const overlayIndexEl = document.getElementById('gallery-overlay-index');
        const overlayTitleEl = document.getElementById('gallery-overlay-title');
        const overlayDescEl = document.getElementById('gallery-overlay-desc');
        const overlayLinkEl = document.getElementById('gallery-overlay-link');
        const overlayCloseBtn = document.getElementById('gallery-overlay-close');

        let activeExpIdx = 0;
        let lastOpenExp = null;
        let blockTimers = [];

        // Detail Overlay Logic
        function buildOverlayBlocks() {
            if (!overlayBlocksEl) return;
            overlayBlocksEl.innerHTML = '';
            const frag = document.createDocumentFragment();
            for (let i = 0; i < 35; i++) {
                const block = document.createElement('span');
                block.className = 'gallery-overlay-block';
                frag.appendChild(block);
            }
            overlayBlocksEl.appendChild(frag);
        }
        buildOverlayBlocks();

        function clearOverlayTimers() {
            blockTimers.forEach(t => clearTimeout(t));
            blockTimers = [];
        }

        function openExperimentOverlay(exp) {
            if (!overlayEl || !exp) return;
            lastOpenExp = exp;

            if (overlayImg) {
                overlayImg.src = exp.src;
                overlayImg.alt = exp.label;
                overlayImg.style.objectPosition = 'center center';
            }
            if (overlayIndexEl) overlayIndexEl.textContent = `PROJETO ${exp.id}`;
            if (overlayTitleEl) overlayTitleEl.textContent = exp.label;
            if (overlayDescEl) {
                overlayDescEl.textContent = currentLang === 'en' ? exp.descEn : exp.descPt;
            }
            if (overlayLinkEl) {
                if (exp.href) {
                    overlayLinkEl.href = exp.href;
                    overlayLinkEl.hidden = false;
                } else {
                    overlayLinkEl.hidden = true;
                }
            }
            if (overlayCloseBtn) {
                overlayCloseBtn.textContent = currentLang === 'en' ? 'CLOSE' : 'FECHAR';
            }

            clearOverlayTimers();
            const blocks = overlayBlocksEl ? Array.from(overlayBlocksEl.children) : [];
            blocks.forEach(b => b.classList.remove('is-cleared'));

            overlayEl.hidden = false;
            requestAnimationFrame(() => {
                requestAnimationFrame(() => {
                    overlayEl.classList.add('is-open');
                });
            });

            if (prefersReducedMotion) {
                blocks.forEach(b => b.classList.add('is-cleared'));
            } else {
                blocks.forEach(b => {
                    const delay = 300 + Math.random() * 700;
                    const tid = setTimeout(() => b.classList.add('is-cleared'), delay);
                    blockTimers.push(tid);
                });
            }
        }

        function closeExperimentOverlay() {
            if (!overlayEl || overlayEl.hidden) return;
            clearOverlayTimers();
            overlayEl.classList.remove('is-open');
            const waitMs = prefersReducedMotion ? 10 : 720;
            const tid = setTimeout(() => {
                if (!overlayEl.classList.contains('is-open')) {
                    overlayEl.hidden = true;
                }
            }, waitMs);
            blockTimers.push(tid);
        }

        if (overlayCloseBtn) {
            overlayCloseBtn.addEventListener('click', closeExperimentOverlay);
        }
        if (overlayLinkEl) {
            overlayLinkEl.addEventListener('click', () => {
                if (overlayLinkEl.getAttribute('href')?.startsWith('#')) {
                    closeExperimentOverlay();
                }
            });
        }
        if (overlayEl) {
            overlayEl.addEventListener('click', (e) => {
                if (e.target === overlayEl) closeExperimentOverlay();
            });
        }
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && overlayEl && !overlayEl.hidden) {
                closeExperimentOverlay();
            }
        });

        function renderFallback() {
            if (canvas) canvas.style.display = 'none';
            if (fallbackEl) {
                fallbackEl.hidden = false;
                fallbackEl.innerHTML = '';
                const frag = document.createDocumentFragment();
                galleryExperiments.forEach(exp => {
                    const btn = document.createElement('button');
                    btn.type = 'button';
                    btn.className = 'gallery-fallback-card';
                    btn.innerHTML = `<img src="${exp.src}" alt="${exp.label}" loading="lazy"><span>${exp.id} · ${exp.label}</span>`;
                    btn.addEventListener('click', () => openExperimentOverlay(exp));
                    frag.appendChild(btn);
                });
                fallbackEl.appendChild(frag);
            }
        }

        if (typeof THREE === 'undefined' || !canvas) {
            renderFallback();
            return {
                onLanguageChange() {
                    if (lastOpenExp && overlayEl && !overlayEl.hidden && overlayDescEl) {
                        overlayDescEl.textContent = currentLang === 'en' ? lastOpenExp.descEn : lastOpenExp.descPt;
                    }
                    if (overlayCloseBtn) overlayCloseBtn.textContent = currentLang === 'en' ? 'CLOSE' : 'FECHAR';
                }
            };
        }

        let renderer;
        try {
            renderer = new THREE.WebGLRenderer({
                canvas,
                antialias: false,
                alpha: false,
                powerPreference: 'high-performance'
            });
        } catch (_) {
            renderFallback();
            return null;
        }

        const UNIQUE_COUNT = galleryExperiments.length; // 4 real dashboard projects
        const COPIES = 6;
        const CARD_COUNT = UNIQUE_COUNT * COPIES; // 24 seamless cards

        function getLayoutMetrics(width) {
            const isMobile = width < 768;
            const cardW = isMobile ? 0.54 : 0.174;
            const gap = isMobile ? 0.025 : 0.0046;
            const pitch = isMobile ? 0.565 : 0.1786;
            return {
                isMobile,
                cardW,
                gap,
                pitch,
                totalNorm: CARD_COUNT * pitch
            };
        }

        let W = marqueeSection.clientWidth || window.innerWidth;
        let H = marqueeSection.clientHeight || window.innerHeight;
        let layout = getLayoutMetrics(W);
        let dpr = Math.min(window.devicePixelRatio || 1, 2);

        renderer.setPixelRatio(dpr);
        renderer.setSize(W, H, false);

        const rt = new THREE.WebGLRenderTarget(
            Math.max(1, Math.round(W * dpr)),
            Math.max(1, Math.round(H * dpr)),
            {
                minFilter: THREE.LinearFilter,
                magFilter: THREE.LinearFilter,
                format: THREE.RGBAFormat
            }
        );

        const scene = new THREE.Scene();
        const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);

        const postScene = new THREE.Scene();
        const postCamera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);

        const uBase = new THREE.Vector3(0.055, 0.055, 0.065);

        // Pass 1 Background Quad
        const bgGeo = new THREE.PlaneGeometry(2, 2);
        const bgMat = new THREE.ShaderMaterial({
            depthTest: false,
            depthWrite: false,
            uniforms: {
                uBase: { value: uBase },
                uTime: { value: 0 },
                uReduced: { value: prefersReducedMotion ? 1.0 : 0.0 }
            },
            vertexShader: `
                varying vec2 vUv;
                void main() {
                    vUv = uv;
                    gl_Position = vec4(position.xy, 0.0, 1.0);
                }
            `,
            fragmentShader: `
                uniform vec3 uBase;
                uniform float uTime;
                uniform float uReduced;
                varying vec2 vUv;
                float hash12(vec2 p) {
                    return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453);
                }
                void main() {
                    float dist = length(vUv - 0.5);
                    vec3 col = uBase + vec3(0.022) * exp(-4.2 * dist * dist);
                    if (uReduced < 0.5) {
                        float grain = (hash12(gl_FragCoord.xy + fract(uTime) * 137.0) - 0.5) * 0.012;
                        col += grain;
                    }
                    gl_FragColor = vec4(max(col, 0.0), 1.0);
                }
            `
        });
        const bgMesh = new THREE.Mesh(bgGeo, bgMat);
        bgMesh.renderOrder = -1;
        scene.add(bgMesh);

        // Texture Loader (4 unique local dashboard textures shared across 24 cards)
        const textureLoader = new THREE.TextureLoader();
        const texCache = new Map();
        const fallbackDataTex = new THREE.DataTexture(new Uint8Array([13, 13, 13, 255]), 1, 1, THREE.RGBAFormat);
        fallbackDataTex.needsUpdate = true;

        function getTextureRecord(src) {
            if (texCache.has(src)) return texCache.get(src);
            const rec = { tex: fallbackDataTex, loaded: 0, aspect: 1.77 };
            texCache.set(src, rec);
            textureLoader.load(
                src,
                (loadedTex) => {
                    loadedTex.minFilter = THREE.LinearFilter;
                    loadedTex.magFilter = THREE.LinearFilter;
                    loadedTex.generateMipmaps = false;
                    rec.tex = loadedTex;
                    rec.loaded = 1;
                    if (loadedTex.image && loadedTex.image.width && loadedTex.image.height) {
                        rec.aspect = loadedTex.image.width / loadedTex.image.height;
                    }
                    cardDataList.forEach(c => {
                        if (c.exp.src === src) {
                            c.mat.uniforms.uTex.value = loadedTex;
                            c.mat.uniforms.uLoaded.value = 1.0;
                            c.mat.uniforms.uTexAspect.value = rec.aspect;
                        }
                    });
                }
            );
            return rec;
        }

        const cardVertexShader = `
            uniform vec2 uRes;
            uniform float uCx;
            uniform float uCardW;
            uniform float uIsMobile;
            uniform float uS;
            varying vec2 vUv;
            varying vec2 vSize;

            void main() {
                vUv = uv;
                float vTop = 1.0 - uv.y;

                float vx = uCx + position.x * uCardW;
                float xNorm = (vx / uRes.x) - 0.5;
                float absX = abs(xNorm);

                float topBase = mix(0.217, 0.26, uIsMobile);
                float topDist = mix(0.03, 0.03 * 1.6, uIsMobile);
                float botBase = mix(0.659, 0.60, uIsMobile);
                float botDist = mix(0.135, 0.135 * 1.6, uIsMobile);

                float topY = uRes.y * (topBase - topDist * smoothstep(0.30, 0.45, absX));
                float botY = uRes.y * (botBase - botDist * smoothstep(0.12, 0.39, absX));

                float stripMidY = 0.5 * (topY + botY);
                float stripH = max(botY - topY, 1.0);
                vec2 px = vec2(
                    uCx + position.x * uCardW * uS,
                    stripMidY + (vTop - 0.5) * stripH * uS
                );

                vSize = vec2(uCardW * uS, stripH * uS);

                vec2 ndc = vec2(
                    (px.x / uRes.x) * 2.0 - 1.0,
                    1.0 - (px.y / uRes.y) * 2.0
                );
                gl_Position = vec4(ndc, 0.0, 1.0);
            }
        `;

        const cardFragmentShader = `
            uniform sampler2D uTex;
            uniform float uLoaded;
            uniform float uTexAspect;
            uniform float uRev;
            uniform float uHover;
            uniform float uSeed;
            varying vec2 vUv;
            varying vec2 vSize;

            float hash21(vec2 p) {
                return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123);
            }

            void main() {
                vec2 p = (vUv - 0.5) * vSize;
                float r = 0.048 * vSize.x;
                vec2 q = abs(p) - (vSize * 0.5 - r);
                float d = length(max(q, 0.0)) + min(max(q.x, q.y), 0.0) - r;
                float sdfAlpha = 1.0 - smoothstep(-1.0, 1.0, d);
                if (sdfAlpha <= 0.005) discard;

                float cardAspect = vSize.x / max(vSize.y, 1.0);
                vec2 imgUv = vUv - 0.5;
                if (uTexAspect > cardAspect) {
                    imgUv.x *= cardAspect / uTexAspect;
                } else {
                    imgUv.y *= uTexAspect / cardAspect;
                }
                imgUv += 0.5;

                vec3 texCol = mix(vec3(0.05), texture2D(uTex, clamp(imgUv, 0.0, 1.0)).rgb, uLoaded);
                texCol *= (1.0 + 0.08 * uHover);

                // 5x7 block-reveal glitch
                vec2 cell = floor(vUv * vec2(5.0, 7.0));
                float h = hash21(cell + uSeed);
                float blockVis = uRev >= 0.999 ? 1.0 : step(h * 0.85, uRev);
                float glitchBand = smoothstep(h * 0.85 - 0.08, h * 0.85, uRev) * (1.0 - blockVis);
                vec3 darkBlock = vec3(0.05) + vec3(0.06, 0.05, 0.09) * glitchBand;

                vec3 finalCol = mix(darkBlock, texCol, blockVis);
                gl_FragColor = vec4(finalCol, sdfAlpha);
            }
        `;

        const cardGeo = new THREE.PlaneGeometry(1, 1, 48, 1);
        const cardDataList = [];
        const labelFrag = document.createDocumentFragment();

        for (let i = 0; i < CARD_COUNT; i++) {
            const expIdx = i % UNIQUE_COUNT;
            const exp = galleryExperiments[expIdx];
            const rec = getTextureRecord(exp.src);

            const mat = new THREE.ShaderMaterial({
                transparent: true,
                depthTest: false,
                depthWrite: false,
                uniforms: {
                    uRes: { value: new THREE.Vector2(W, H) },
                    uCx: { value: W * 0.5 },
                    uCardW: { value: layout.cardW * W },
                    uIsMobile: { value: layout.isMobile ? 1.0 : 0.0 },
                    uS: { value: 1.0 },
                    uTex: { value: rec.tex },
                    uLoaded: { value: rec.loaded },
                    uTexAspect: { value: rec.aspect },
                    uRev: { value: prefersReducedMotion ? 1.0 : 0.0 },
                    uHover: { value: 0.0 },
                    uSeed: { value: i * 1.37 + 0.5 }
                },
                vertexShader: cardVertexShader,
                fragmentShader: cardFragmentShader
            });

            const mesh = new THREE.Mesh(cardGeo, mat);
            mesh.renderOrder = i;
            scene.add(mesh);

            let labelEl = null;
            if (labelsContainer) {
                labelEl = document.createElement('span');
                labelEl.className = 'gallery-card-label';
                labelEl.textContent = exp.label;
                labelFrag.appendChild(labelEl);
            }

            cardDataList.push({
                index: i,
                expIdx,
                exp,
                mesh,
                mat,
                labelEl,
                cx: W * 0.5,
                hover: 0,
                hoverScale: 1.0,
                revStart: 0,
                wasInZone: false
            });
        }

        if (labelsContainer) {
            labelsContainer.innerHTML = '';
            labelsContainer.appendChild(labelFrag);
        }

        // Pass 2 Glass-Rim Post-Process Shader
        const postGeo = new THREE.PlaneGeometry(2, 2);
        const postMat = new THREE.ShaderMaterial({
            depthTest: false,
            depthWrite: false,
            uniforms: {
                uTex: { value: rt.texture },
                uRes: { value: new THREE.Vector2(W, H) },
                uTime: { value: 0 },
                uReduced: { value: prefersReducedMotion ? 1.0 : 0.0 }
            },
            vertexShader: `
                varying vec2 vUv;
                void main() {
                    vUv = uv;
                    gl_Position = vec4(position.xy, 0.0, 1.0);
                }
            `,
            fragmentShader: `
                uniform sampler2D uTex;
                uniform vec2 uRes;
                uniform float uTime;
                uniform float uReduced;
                varying vec2 vUv;

                void main() {
                    vec2 px = vUv * uRes;
                    vec2 halfRes = 0.5 * uRes;
                    float minDim = min(uRes.x, uRes.y);
                    float radius = 0.22 * minDim;
                    float rimBase = 0.17 * minDim;
                    float rim = rimBase * (1.0 + 0.30 * smoothstep(0.25, 0.0, vUv.y));

                    vec2 rel = px - halfRes;
                    vec2 q = abs(rel) - (halfRes - radius);
                    float sd = length(max(q, 0.0)) + min(max(q.x, q.y), 0.0) - radius;
                    float dIn = max(0.0, -sd);
                    float t = clamp(1.0 - dIn / max(rim, 1.0), 0.0, 1.0);

                    vec2 sgn = sign(rel);
                    vec2 rawG = (q.x > 0.0 && q.y > 0.0)
                        ? normalize(q)
                        : (q.x > q.y ? vec2(1.0, 0.0) : vec2(0.0, 1.0));
                    vec2 n = normalize(rawG * sgn + vec2(1e-5));
                    vec2 tang = vec2(-n.y, n.x);

                    float bend = t * t * rim;
                    vec3 col = vec3(0.0);
                    for (int i = -2; i <= 2; i++) {
                        float fi = float(i) * 0.5;
                        vec2 blurOff = tang * fi * bend * 0.055;
                        vec2 uvR = clamp((px - n * bend * 0.46 * 1.06 + blurOff) / uRes, 0.0, 1.0);
                        vec2 uvG = clamp((px - n * bend * 0.46 * 1.00 + blurOff) / uRes, 0.0, 1.0);
                        vec2 uvB = clamp((px - n * bend * 0.46 * 0.94 + blurOff) / uRes, 0.0, 1.0);
                        col.r += texture2D(uTex, uvR).r;
                        col.g += texture2D(uTex, uvG).g;
                        col.b += texture2D(uTex, uvB).b;
                    }
                    col /= 5.0;

                    float timeAnim = uReduced > 0.5 ? 0.0 : uTime;
                    float ang = atan(rel.y, rel.x);
                    float lr = 0.5 + 0.5 * sin(ang * 2.0 + timeAnim * 0.55);
                    float lg = 0.5 + 0.5 * sin(ang * 2.0 - timeAnim * 0.42 + 2.1);
                    float lb = 0.5 + 0.5 * sin(ang * 3.0 + timeAnim * 0.37 + 4.2);
                    lg *= 1.0 - 0.65 * lr;

                    vec3 edgeLight = vec3(lr, lg, lb) * 0.22 + vec3(0.16, 0.15, 0.34);
                    float luma = dot(edgeLight, vec3(0.299, 0.587, 0.114));
                    edgeLight = mix(edgeLight, vec3(luma), 0.12);
                    float edgeMask = smoothstep(0.12, 0.98, t) * 0.52;
                    col += edgeLight * edgeMask;

                    gl_FragColor = vec4(col, 1.0);
                }
            `
        });
        postScene.add(new THREE.Mesh(postGeo, postMat));

        // CPU Mirror Math
        function smoothstep(e0, e1, x) {
            const t = Math.max(0, Math.min(1, (x - e0) / (e1 - e0)));
            return t * t * (3 - 2 * t);
        }

        function wrapOffset(raw, total) {
            let d = ((raw % total) + total) % total;
            if (d > total * 0.5) d -= total;
            return d;
        }

        function cardPt(card, u, v) {
            const cardW = layout.cardW * W;
            const isMob = layout.isMobile;
            const topBase = isMob ? 0.26 : 0.217;
            const topDist = isMob ? 0.03 * 1.6 : 0.03;
            const botBase = isMob ? 0.60 : 0.659;
            const botDist = isMob ? 0.135 * 1.6 : 0.135;

            const vx = card.cx + (u - 0.5) * cardW;
            const absX = Math.abs(vx / W - 0.5);
            const topY = H * (topBase - topDist * smoothstep(0.30, 0.45, absX));
            const botY = H * (botBase - botDist * smoothstep(0.12, 0.39, absX));
            const stripMidY = 0.5 * (topY + botY);
            const stripH = Math.max(botY - topY, 1);

            return {
                x: card.cx + (u - 0.5) * cardW * card.hoverScale,
                y: stripMidY + (v - 0.5) * stripH * card.hoverScale
            };
        }

        // Motion & Interaction State
        let pos = 0;
        let target = 0;
        let hoveredCard = null;
        let pointerX = -9999;
        let pointerY = -9999;
        let isDragging = false;
        let dragMoved = false;
        let dragStartX = 0;
        let dragStartTarget = 0;
        let crossAngleY = 0;
        let lastCenterExpIdx = 0;
        let scrambleFrameCount = 0;
        let isSettledTitle = true;
        let isInView = !('IntersectionObserver' in window);
        let rafId = null;
        let lastTime = performance.now();
        let lastScrollY = window.scrollY;
        let hasRevealedSection = false;

        const SCRAMBLE_CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';

        function randomScrambleCode() {
            let out = '';
            for (let i = 0; i < 6; i++) {
                if (i === 2) {
                    out += ' ';
                } else {
                    out += SCRAMBLE_CHARS[Math.floor(Math.random() * SCRAMBLE_CHARS.length)];
                }
            }
            return out;
        }

        function updateCenterHUD(expIdx) {
            activeExpIdx = expIdx;
            const exp = galleryExperiments[expIdx];
            if (ruleTickEl) {
                ruleTickEl.style.left = `${(expIdx / 3) * 100}%`;
            }
            if (counterEl) {
                counterEl.textContent = `${exp.id} / 04`;
            }
            if (isSettledTitle && titleEl && exp) {
                titleEl.textContent = exp.label;
            }
        }
        updateCenterHUD(0);

        function triggerAllReveal(nowMs) {
            cardDataList.forEach(c => {
                c.revStart = nowMs;
            });
        }

        if (crossBtn) {
            crossBtn.addEventListener('click', () => {
                const jump = 1 + Math.floor(Math.random() * 3); // 1..3 cards ahead
                target += jump * layout.pitch;
            });
        }

        function pickCardAt(x, y) {
            const maxVisibleX = W * (layout.isMobile ? 0.95 : 0.72);
            for (let i = cardDataList.length - 1; i >= 0; i--) {
                const c = cardDataList[i];
                if (Math.abs(c.cx - W * 0.5) > maxVisibleX) continue;
                const p0 = cardPt(c, 0, 0);
                const p1 = cardPt(c, 1, 1);
                if (x >= p0.x && x <= p1.x && y >= p0.y && y <= p1.y) {
                    return c;
                }
            }
            return null;
        }

        marqueeSection.addEventListener('pointerdown', (e) => {
            if (e.target.closest('.gallery-cross-btn, .gallery-fallback')) return;
            if (e.button !== 0 && e.pointerType === 'mouse') return;
            isDragging = true;
            dragMoved = false;
            dragStartX = e.clientX;
            dragStartTarget = target;
            marqueeSection.classList.add('is-dragging');
        });

        window.addEventListener('pointermove', (e) => {
            const rect = marqueeSection.getBoundingClientRect();
            pointerX = e.clientX - rect.left;
            pointerY = e.clientY - rect.top;

            if (!isDragging) return;
            const dx = e.clientX - dragStartX;
            if (Math.abs(dx) > 6) {
                dragMoved = true;
            }
            if (dragMoved) {
                target = dragStartTarget - (dx / Math.max(W, 1)) * 1.1;
            }
        }, { passive: true });

        window.addEventListener('pointerup', (e) => {
            if (!isDragging) return;
            isDragging = false;
            marqueeSection.classList.remove('is-dragging');

            if (!dragMoved && !e.target.closest('.gallery-cross-btn')) {
                const rect = marqueeSection.getBoundingClientRect();
                const mx = e.clientX - rect.left;
                const my = e.clientY - rect.top;
                if (mx >= 0 && mx <= rect.width && my >= 0 && my <= rect.height) {
                    const hit = pickCardAt(mx, my);
                    if (hit) {
                        openExperimentOverlay(hit.exp);
                    }
                }
            }
        });

        window.addEventListener('pointercancel', () => {
            if (!isDragging) return;
            isDragging = false;
            dragMoved = false;
            marqueeSection.classList.remove('is-dragging');
        });

        // Horizontal wheel / Shift+wheel moves strip without locking vertical page scroll
        marqueeSection.addEventListener('wheel', (e) => {
            const isHoriz = Math.abs(e.deltaX) > Math.abs(e.deltaY) || e.shiftKey;
            if (isHoriz) {
                e.preventDefault();
                const delta = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY;
                target += delta * 0.00055;
            }
        }, { passive: false });

        // Gentle vertical scroll drives target while #marquee is in view
        window.addEventListener('scroll', () => {
            const curY = window.scrollY;
            const dy = curY - lastScrollY;
            lastScrollY = curY;
            if (isInView && !prefersReducedMotion) {
                target += dy * 0.00042;
            }
        }, { passive: true });

        // ArrowLeft / ArrowRight when #marquee is in view
        window.addEventListener('keydown', (e) => {
            if (!isInView) return;
            if (overlayEl && !overlayEl.hidden) return;
            const tag = document.activeElement?.tagName;
            if (tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT') return;
            if (e.key === 'ArrowRight') {
                target += layout.pitch;
            } else if (e.key === 'ArrowLeft') {
                target -= layout.pitch;
            }
        });

        function handleResize() {
            W = marqueeSection.clientWidth || window.innerWidth;
            H = marqueeSection.clientHeight || window.innerHeight;
            layout = getLayoutMetrics(W);
            dpr = Math.min(window.devicePixelRatio || 1, 2);
            renderer.setPixelRatio(dpr);
            renderer.setSize(W, H, false);
            rt.setSize(Math.max(1, Math.round(W * dpr)), Math.max(1, Math.round(H * dpr)));
            postMat.uniforms.uRes.value.set(W, H);

            const isMob = layout.isMobile ? 1.0 : 0.0;
            const cw = layout.cardW * W;
            cardDataList.forEach(c => {
                c.mat.uniforms.uRes.value.set(W, H);
                c.mat.uniforms.uCardW.value = cw;
                c.mat.uniforms.uIsMobile.value = isMob;
            });
        }
        window.addEventListener('resize', handleResize, { passive: true });

        function renderFrame(now) {
            const dt = Math.min((now - lastTime) / 1000, 0.05);
            lastTime = now;

            if (!hasRevealedSection && isInView) {
                hasRevealedSection = true;
                triggerAllReveal(now);
            }

            // Smooth pos
            const posAlpha = prefersReducedMotion ? 1 : (1 - Math.pow(1 - 0.12, dt * 30));
            const prevPos = pos;
            pos += (target - pos) * posAlpha;
            const velocity = dt > 0 ? Math.abs(pos - prevPos) / dt : 0;

            bgMat.uniforms.uTime.value = now * 0.001;
            postMat.uniforms.uTime.value = now * 0.001;

            // Hover picking
            if (pointerX >= 0 && pointerX <= W && pointerY >= 0 && pointerY <= H) {
                hoveredCard = pickCardAt(pointerX, pointerY);
            } else {
                hoveredCard = null;
            }

            // Update 24 cards
            const posPx = pos * W;
            const pitchPx = layout.pitch * W;
            const totalPx = layout.totalNorm * W;
            const halfW = W * 0.5;
            const revealThresh = layout.isMobile ? 0.85 : 0.62;
            const labelMaxOffset = W * (layout.isMobile ? 0.95 : 0.72);

            let closestCenterCard = cardDataList[0];
            let minCenterDist = Infinity;

            for (let i = 0; i < CARD_COUNT; i++) {
                const c = cardDataList[i];
                const rawOffset = (i * pitchPx) - posPx;
                const offset = wrapOffset(rawOffset, totalPx);
                c.cx = halfW + offset;

                const distCenter = Math.abs(offset);
                if (distCenter < minCenterDist) {
                    minCenterDist = distCenter;
                    closestCenterCard = c;
                }

                // 5x7 block reveal on entering reveal zone
                const normCenterDist = distCenter / Math.max(W, 1);
                const inZone = normCenterDist < revealThresh;
                if (inZone && !c.wasInZone) {
                    c.revStart = now;
                }
                c.wasInZone = inZone;

                let rev = 1.0;
                if (!prefersReducedMotion) {
                    rev = Math.max(0, Math.min(1, (now - c.revStart) / 750));
                }

                const isHovered = hoveredCard === c;
                const hoverTarget = isHovered ? 1 : 0;
                c.hover += (hoverTarget - c.hover) * (prefersReducedMotion ? 1 : Math.min(1, dt * 12));
                c.hoverScale = 1.0 + 0.015 * c.hover;

                c.mat.uniforms.uCx.value = c.cx;
                c.mat.uniforms.uS.value = c.hoverScale;
                c.mat.uniforms.uRev.value = rev;
                c.mat.uniforms.uHover.value = c.hover;

                // DOM Label mirror
                if (c.labelEl) {
                    const visible = Math.abs(offset) < labelMaxOffset;
                    if (!visible) {
                        c.labelEl.style.opacity = '0';
                    } else {
                        const p0 = cardPt(c, 0, 0);
                        const p1 = cardPt(c, 1, 0);
                        const tiltRad = Math.atan2(p1.y - p0.y, p1.x - p0.x);
                        const lx = p0.x;
                        const ly = p0.y - 0.006 * H;
                        c.labelEl.style.opacity = '1';
                        c.labelEl.style.transform = `translate3d(${lx.toFixed(1)}px, ${ly.toFixed(1)}px, 0) translateY(-100%) rotate(${tiltRad.toFixed(4)}rad)`;
                        c.labelEl.classList.toggle('is-hovered', isHovered);
                    }
                }
            }

            // Center card change -> Rule tick
            if (closestCenterCard.expIdx !== lastCenterExpIdx) {
                lastCenterExpIdx = closestCenterCard.expIdx;
                updateCenterHUD(lastCenterExpIdx);
            }

            // Title Scramble while |target - pos| > 0.004
            if (titleEl) {
                const moving = Math.abs(target - pos) > 0.004 && !prefersReducedMotion;
                if (moving) {
                    isSettledTitle = false;
                    scrambleFrameCount++;
                    if (scrambleFrameCount % 3 === 0) {
                        titleEl.textContent = randomScrambleCode();
                    }
                } else if (!isSettledTitle) {
                    isSettledTitle = true;
                    titleEl.textContent = galleryExperiments[activeExpIdx].label;
                }
            }

            // Spinning Cross scaled by velocity
            if (cross3dEl && !prefersReducedMotion) {
                crossAngleY = (crossAngleY + dt * (28 + velocity * 320)) % 360;
                const tiltX = Math.sin(now * 0.0012) * 18;
                cross3dEl.style.transform = `rotateX(${tiltX.toFixed(1)}deg) rotateY(${crossAngleY.toFixed(1)}deg)`;
            }

            // Pass 1 -> Render Target
            renderer.setRenderTarget(rt);
            renderer.render(scene, camera);

            // Pass 2 -> Screen
            renderer.setRenderTarget(null);
            renderer.render(postScene, postCamera);
        }

        function startLoop() {
            if (rafId !== null) return;
            lastTime = performance.now();
            const tick = (now) => {
                if (!isInView || document.hidden) {
                    rafId = null;
                    return;
                }
                renderFrame(now);
                rafId = requestAnimationFrame(tick);
            };
            rafId = requestAnimationFrame(tick);
        }

        function stopLoop() {
            if (rafId !== null) {
                cancelAnimationFrame(rafId);
                rafId = null;
            }
        }

        if ('IntersectionObserver' in window) {
            const viewObs = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    isInView = entry.isIntersecting;
                    if (isInView && !document.hidden) {
                        startLoop();
                    } else {
                        stopLoop();
                    }
                });
            }, { threshold: 0.01 });
            viewObs.observe(marqueeSection);
        } else {
            startLoop();
        }

        document.addEventListener('visibilitychange', () => {
            if (document.hidden) {
                stopLoop();
            } else if (isInView) {
                startLoop();
            }
        });

        // Initial frame
        renderFrame(performance.now());
        if (isInView && !document.hidden) startLoop();

        return {
            onLanguageChange() {
                if (lastOpenExp && overlayEl && !overlayEl.hidden && overlayDescEl) {
                    overlayDescEl.textContent = currentLang === 'en' ? lastOpenExp.descEn : lastOpenExp.descPt;
                }
                if (overlayCloseBtn) {
                    overlayCloseBtn.textContent = currentLang === 'en' ? 'CLOSE' : 'FECHAR';
                }
            }
        };
    }

    function initMarquee() {
        galleryController = initWebGLGallery();
    }

    // --- 8. About AnimatedText (Character-by-character scroll reveal) ---
    function renderAboutAnimatedText(lang) {
        if (!aboutTextEl) return;
        const text = (translations[lang] && translations[lang].about_text) || '';
        aboutTextEl.setAttribute('aria-label', text);
        aboutTextEl.innerHTML = '';

        const frag = document.createDocumentFragment();
        aboutChars = Array.from(text).map(char => {
            const span = document.createElement('span');
            span.className = 'anim-char';
            span.textContent = char;
            span.setAttribute('aria-hidden', 'true');
            if (prefersReducedMotion) {
                span.style.opacity = '1';
            }
            frag.appendChild(span);
            return span;
        });

        aboutTextEl.appendChild(frag);
        updateAboutTextReveal();
    }

    function updateAboutTextReveal() {
        if (!aboutTextEl || !aboutChars.length) return;
        if (prefersReducedMotion) {
            aboutChars.forEach(c => { c.style.opacity = '1'; });
            return;
        }

        const rect = aboutTextEl.getBoundingClientRect();
        const vh = window.innerHeight || 900;
        const startY = vh * 0.85;
        const endY = vh * 0.42;
        const travel = Math.max(startY - endY, 1);
        const rawProgress = (startY - rect.top) / travel;
        const progress = Math.max(0, Math.min(1, rawProgress));

        const total = aboutChars.length;
        const fadeWindow = 10;
        const cursor = progress * (total + fadeWindow);

        for (let i = 0; i < total; i++) {
            const charProgress = Math.max(0, Math.min(1, (cursor - i) / fadeWindow));
            aboutChars[i].style.opacity = (0.2 + 0.8 * charProgress).toFixed(3);
        }
    }

    // --- 9. Scroll Updates (About Text + Sticky Card Stacks + Nav) ---
    let scrollRafPending = false;

    function updateCardStack(cards) {
        if (!cards || !cards.length) return;
        if (prefersReducedMotion) {
            cards.forEach(card => { card.style.transform = 'none'; });
            return;
        }

        const totalCards = cards.length;

        cards.forEach((card, index) => {
            const targetScale = 1 - (totalCards - 1 - index) * 0.03;
            if (index >= totalCards - 1 || targetScale >= 1) {
                card.style.transform = 'scale(1)';
                return;
            }

            const nextCard = cards[index + 1];
            const nextRect = nextCard.getBoundingClientRect();
            const nextStickyTop = parseFloat(getComputedStyle(nextCard).top) || 104;
            const travel = Math.max(card.offsetHeight * 0.65, 1);
            const progress = Math.max(0, Math.min(1, (nextStickyTop + travel - nextRect.top) / travel));
            const scale = 1 - (1 - targetScale) * progress;

            card.style.transform = `scale(${scale.toFixed(4)})`;
        });
    }

    function onScrollFrame() {
        scrollRafPending = false;
        updateAboutTextReveal();
        updateCardStack(projectCards);
        updateCardStack(expCards);
        updateFloatingNavOnScroll();
    }

    window.addEventListener('scroll', () => {
        if (!scrollRafPending) {
            scrollRafPending = true;
            requestAnimationFrame(onScrollFrame);
        }
    }, { passive: true });

    window.addEventListener('resize', () => {
        onScrollFrame();
        if (activeNavId) {
            const activeLink = floatingNavLinks.find(link => link.getAttribute('data-nav-target') === activeNavId);
            positionFloatingNavIndicator(activeLink || null);
        }
    }, { passive: true });

    // --- 10. Language Toggle (PT / EN) ---
    function applyLanguage(lang) {
        currentLang = lang;
        localStorage.setItem('lang', lang);
        document.documentElement.lang = lang === 'pt' ? 'pt-BR' : 'en';

        const tr = translations[lang] || translations.pt;
        document.title = tr.page_title;

        const langLabel = lang === 'pt' ? 'PT / EN' : 'EN / PT';
        if (langText) langText.textContent = langLabel;

        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (tr[key]) {
                el.textContent = tr[key];
            } else if (key.startsWith('courses_count_')) {
                const count = key.split('_')[2];
                el.textContent = lang === 'pt'
                    ? (count === '1' ? '1 Curso' : `${count} Cursos`)
                    : (count === '1' ? '1 Course' : `${count} Courses`);
            }
        });

        document.querySelectorAll('[data-i18n-title]').forEach(el => {
            const key = el.getAttribute('data-i18n-title');
            if (tr[key]) {
                el.setAttribute('title', tr[key]);
            }
        });

        document.querySelectorAll('[data-i18n-placeholder]').forEach(input => {
            const key = input.getAttribute('data-i18n-placeholder');
            if (tr[key]) {
                input.setAttribute('placeholder', tr[key]);
            }
        });

        if (contactCvBtn) {
            const cvFile = lang === 'pt' ? tr.cv_filename_pt : tr.cv_filename_en;
            const cvAria = lang === 'pt' ? tr.cv_aria_pt : tr.cv_aria_en;
            contactCvBtn.setAttribute('href', `Curriculos/${cvFile}`);
            contactCvBtn.setAttribute('download', cvFile);
            contactCvBtn.setAttribute('aria-label', cvAria);
        }

        renderAboutAnimatedText(lang);
        if (galleryController && typeof galleryController.onLanguageChange === 'function') {
            galleryController.onLanguageChange();
        }
    }

    if (langToggle) {
        langToggle.addEventListener('click', () => {
            applyLanguage(currentLang === 'pt' ? 'en' : 'pt');
        });
    }

    // --- 11. Certifications (certificados.json) ---
    function attachDropdownListeners() {
        const dropdownCards = document.querySelectorAll('.dropdown-card');
        dropdownCards.forEach(card => {
            const headerBtn = card.querySelector('.dropdown-header');
            const content = card.querySelector('.dropdown-content');
            if (!headerBtn || !content) return;

            headerBtn.addEventListener('click', () => {
                const isOpen = card.classList.contains('open');

                dropdownCards.forEach(otherCard => {
                    otherCard.classList.remove('open');
                    const otherHeader = otherCard.querySelector('.dropdown-header');
                    const otherContent = otherCard.querySelector('.dropdown-content');
                    if (otherHeader) otherHeader.setAttribute('aria-expanded', 'false');
                    if (otherContent) {
                        otherContent.style.maxHeight = null;
                        otherContent.inert = true;
                    }
                });

                if (!isOpen) {
                    card.classList.add('open');
                    headerBtn.setAttribute('aria-expanded', 'true');
                    content.inert = false;
                    content.style.maxHeight = `${content.scrollHeight}px`;
                }
            });
        });
    }

    function filterCertsByInstitution(filter) {
        const certCards = document.querySelectorAll('#certs-grid .cert-card');
        let visibleCourseCount = 0;

        certCards.forEach(card => {
            const institution = card.getAttribute('data-institution') || '';
            if (filter === 'all' || institution === filter) {
                card.style.display = '';
                visibleCourseCount += parseInt(card.dataset.courseCount || '0', 10);
            } else {
                card.style.display = 'none';
            }
        });

        const counterEl = document.getElementById('certs-total');
        if (counterEl) {
            counterEl.textContent = filter === 'all' ? '+20' : `${visibleCourseCount}`;
        }
    }

    async function loadCertificates() {
        if (!certsGrid) return;
        try {
            const response = await fetch('certificados.json');
            if (!response.ok) throw new Error(`HTTP ${response.status}`);
            const data = await response.json();

            certsGrid.innerHTML = '';

            data.forEach(inst => {
                const courseCount = Array.isArray(inst.courses) ? inst.courses.length : (inst.count || 0);
                const card = document.createElement('div');
                card.className = 'cert-card dropdown-card';
                card.setAttribute('role', 'listitem');
                card.setAttribute('data-institution', inst.institution);
                card.dataset.courseCount = String(courseCount);

                const countKey = `courses_count_${courseCount}`;

                const coursesListHtml = (inst.courses || []).map(course => `
                    <li>
                        <a href="${course.path}" target="_blank" rel="noopener noreferrer" class="course-link">
                            <svg class="file-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                                <polyline points="14 2 14 8 20 8"></polyline>
                            </svg>
                            <span>${course.name}</span>
                        </a>
                    </li>
                `).join('');

                card.innerHTML = `
                    <button type="button" class="dropdown-header" aria-expanded="false">
                        <img src="${inst.logo}" alt="${inst.institution}" class="institution-logo" loading="lazy">
                        <div class="institution-info">
                            <h3 class="institution-name">${inst.institution}</h3>
                            <span class="courses-count" data-i18n="${countKey}">${courseCount} Cursos</span>
                        </div>
                        <svg class="chevron-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                            <polyline points="6 9 12 15 18 9"></polyline>
                        </svg>
                    </button>
                    <div class="dropdown-content">
                        <ul class="courses-list">
                            ${coursesListHtml}
                        </ul>
                    </div>
                `;

                const contentEl = card.querySelector('.dropdown-content');
                if (contentEl) contentEl.inert = true;

                certsGrid.appendChild(card);
            });

            attachDropdownListeners();
            applyLanguage(currentLang);
        } catch (err) {
            console.error('Erro ao carregar cursos:', err);
            const fallbackMsg = (translations[currentLang] && translations[currentLang].certs_fallback)
                || 'Não foi possível carregar a lista de cursos no momento.';
            certsGrid.innerHTML = `<div class="certs-fallback" role="status" data-i18n="certs_fallback">${fallbackMsg}</div>`;
        }
    }

    certFilterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            certFilterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            filterCertsByInstitution(btn.getAttribute('data-filter'));
        });
    });

    // --- 12. Services -> Contact Form Pre-fill ---
    document.querySelectorAll('[data-service-select]').forEach(link => {
        link.addEventListener('click', () => {
            const serviceValue = link.getAttribute('data-service-select');
            if (formServiceSelect && serviceValue) {
                formServiceSelect.value = serviceValue;
                formServiceSelect.style.borderColor = '#FFFFFF';
                formServiceSelect.style.boxShadow = '0 0 0 3px rgba(215, 226, 234, 0.25)';
                setTimeout(() => {
                    formServiceSelect.style.borderColor = '';
                    formServiceSelect.style.boxShadow = '';
                }, 2000);
            }
        });
    });

    // --- 13. Validated Contact Form ---
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            if (!contactForm.reportValidity()) return;

            const submitBtn = document.getElementById('contact-submit-btn');
            const tr = translations[currentLang] || translations.pt;
            if (!submitBtn) return;

            submitBtn.disabled = true;
            submitBtn.textContent = tr.form_sending;

            setTimeout(() => {
                submitBtn.textContent = tr.form_sent;
                if (formStatus) {
                    formStatus.textContent = tr.form_status_ok;
                }
                contactForm.reset();

                setTimeout(() => {
                    submitBtn.disabled = false;
                    submitBtn.textContent = (translations[currentLang] || translations.pt).form_submit_btn;
                    if (formStatus) {
                        formStatus.textContent = '';
                    }
                }, 4000);
            }, 700);
        });
    }

    // --- 14. Initialize ---
    initMarquee();
    applyLanguage(currentLang);
    initFadeIns();
    loadCertificates();
    onScrollFrame();

    if (document.fonts && document.fonts.ready) {
        document.fonts.ready.then(() => {
            onScrollFrame();
        });
    }
});
