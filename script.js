/* script.js - Portfólio de Dados (v2 — Evolução Premium) */

document.addEventListener('DOMContentLoaded', () => {
    // --- 1. Dicionário de Tradução (Bilingue PT/EN) ---
    const translations = {
        pt: {
            nav_home: "Início",
            nav_about: "Sobre",
            nav_impact: "Impacto",
            nav_services: "Serviços",
            nav_certs: "Certificações",
            nav_projects: "Projetos",
            nav_exp: "Experiência",
            nav_contact: "Contato",
            hero_greet: "Me chamo Gustavo Franco, sou um",
            hero_desc: "Analista de Dados especializado em Power BI, SQL e Python. Desenvolvo dashboards estratégicos, automatizo processos e transformo dados em decisões de negócio.",
            metric_1: "4 anos de experiência",
            metric_2: "+20 Certificações",
            metric_3: "Power BI • SQL • Python",
            metric_4: "Finanças, RH, Operações, AMS e Comercial",
            hero_btn_projects: "Ver Projetos",
            hero_btn_contact: "Contato",
            mockup_pipeline_status: "Pipeline de Dados • Live",
            mockup_sources: "Fontes Conectadas",
            mockup_sync: "Última Sincronização",
            mockup_sync_just_now: "agora",
            mockup_sync_ago: "há {time}",
            mockup_sync_seconds: "{n}s",
            mockup_sync_minute: "1 min",
            mockup_sync_minutes: "{n} min",
            about_title: "Sobre Mim",
            about_text_1: "Sou Analista de Dados com 4 anos de experiência transformando dados em informações estratégicas para apoiar a tomada de decisão. Atuo em todo o ciclo analítico, desde o levantamento de requisitos e modelagem dos dados até o desenvolvimento, manutenção e evolução de dashboards, relatórios e automações",
            about_text_2: "Tenho experiência com Power BI, Python, SQL, Excel e Power Query para coleta, tratamento, análise e visualização de dados, sempre buscando entregar soluções que gerem impacto para o negócio. Ao longo da minha trajetória, participei da otimização de processos analíticos, incluindo a redução do tempo de atualização de uma consulta de mais de 1 hora para aproximadamente 10 minutos por meio da revisão da modelagem e aplicação de filtros mais eficientes. ",
            about_text_3: "Também possuo experiência com o ecossistema Microsoft, utilizando SharePoint para criação e administração de portais corporativos e Power Automate para automatização de processos, envio de notificações e gerenciamento de listas, contribuindo para aumentar a produtividade das equipes e reduzir atividades manuais.",
            about_card_1_title: "15+ Projetos",
            about_card_1_desc: "Entregues e Operacionais",
            about_card_2_title: "4 Anos",
            about_card_2_desc: "Experiência com Dados",
            about_card_3_title: "+20 Certs",
            about_card_3_desc: "Certificações Ativas",
            impact_title: "Impacto Profissional",
            impact_subtitle: "Ao longo da minha experiência como Analista de Dados, participei da construção de dashboards estratégicos e soluções analíticas voltadas para diferentes áreas de negócio, apoiando gestores na tomada de decisão através de indicadores de performance.",
            impact_block1_title: "Projetos Corporativos",
            impact_block2_title: "Principais Resultados",
            impact_corp_1_title: "Indicadores Operacionais",
            impact_corp_1_area: "Operações",
            impact_corp_1_desc: "Monitoramento de produtividade, custos operacionais e retrabalho, permitindo o acompanhamento contínuo da eficiência das operações.",
            impact_corp_2_title: "AMS — Application Management Services",
            impact_corp_2_area: "Suporte de TI",
            impact_corp_2_desc: "Desenvolvimento de indicadores relacionados ao suporte de aplicações.",
            impact_corp_3_title: "IDLE — Gestão de Capacidade",
            impact_corp_3_area: "Finanças",
            impact_corp_3_desc: "Dashboard financeiro para gestão de capacidade operacional.",
            impact_corp_4_title: "COE — Centro de Excelência",
            impact_corp_4_area: "Comercial",
            impact_corp_4_desc: "Dashboard para acompanhamento de propostas comerciais.",
            result_1_title: "Solução Considerada Inviável",
            result_1_tag: "EazyBI + Jira Software",
            result_1_desc: "Quando ainda atuava como Jovem Aprendiz, desenvolvi uma solução utilizando EazyBI e Jira Software para exibir o detalhamento de apontamentos de horas. Essa funcionalidade era considerada inviável pelo suporte oficial da ferramenta, porém foi implementada após estudos e pesquisas técnicas.",
            result_2_title: "Redução de 80% no Tempo de Atualização",
            result_2_tag: "Power Query • Modelagem",
            result_2_desc: "Otimizei um processo de atualização de consultas no Power Query. O tempo foi reduzido de mais de uma hora para aproximadamente dez minutos — redução superior a 80%, via revisão dos filtros, remoção de etapas desnecessárias e otimização da modelagem com apoio de IA.",
            result_2_metric: "Redução no tempo de atualização",
            services_title: "Serviços",
            services_subtitle: "Soluções de dados projetadas sob medida para alavancar seus negócios.",
            service_1_title: "Desenvolvimento de Dashboards",
            service_1_desc: "Criação de painéis interativos e relatórios dinâmicos no Power BI e Excel que sintetizam métricas complexas para facilitar a tomada de decisão.",
            service_2_title: "Automação de Processos (RPA)",
            service_2_desc: "Otimização de tarefas manuais e integração de dados usando Power Automate e scripts Python, liberando tempo e eliminando falhas humanas.",
            service_3_title: "Engenharia de Dados",
            service_3_desc: "Construção de fluxos de ETL, limpeza estruturada e modelagem de dados utilizando SQL, Power Query e Python para garantir fontes de dados confiáveis.",
            service_4_title: "Análise & Apoio à Decisão",
            service_4_desc: "Consultoria analítica focada na identificação de gargalos operacionais e oportunidades de crescimento por meio do estudo de indicadores de negócio.",
            btn_hire: "Contratar",
            cv_button_label: "Baixar CV",
            cv_filename_pt: "CV_Gustavo_Franco_PT.pdf",
            cv_filename_en: "CV_Gustavo_Franco_EN.pdf",
            cv_aria_label_pt: "Baixar Currículo (Português)",
            cv_aria_label_en: "Download Resume (English)",
            certs_title: "Cursos & Certificações",
            courses_count_2: "2 Cursos",
            courses_count_8: "8 Cursos",
            course_sql_basics: "Conhecendo Instruções SQL",
            course_python_data: "Python Para Dados",
            course_feedback: "Fundamentos do Feedback",
            course_career: "Gestão de Carreira",
            course_time: "Gestão de Tempo",
            course_interactions: "Interações Difíceis",
            course_negotiation: "Negociação",
            course_strategic: "Raciocínio Estratégico",
            course_presentation: "Técnicas de Apresentação",
            course_writing: "Técnicas de Redação",
            course_ai: "Jornada de Inteligência Artificial",
            course_python_hashtag: "Jornada Python",
            course_html_css: "HTML & CSS Técnicas Avançadas",
            course_powerbi: "Power BI do Básico ao Avançado",
            projects_title: "Projetos",
            projects_subtitle: "Cada projeto é uma solução analítica completa — do contexto do problema à entrega dos indicadores.",
            filter_all: "Todos",
            filter_financeiro: "Financeiro",
            filter_logistica: "Logística",
            filter_rh: "RH",
            filter_comercial: "Comercial",
            project_fin_title: "Dashboard Financeiro",
            project_fin_desc: "Consolidação de receitas, despesas e saldo em uma visão analítica executiva, permitindo acompanhar a saúde financeira e apoiar decisões estratégicas.",
            project_log_title: "Dashboard Logístico",
            project_log_desc: "Acompanhamento da operação logística com KPIs de transporte, desempenho de entregas e análise geográfica de distribuição.",
            project_rh_title: "Dashboard People Analytics",
            project_rh_desc: "Indicadores analíticos de Recursos Humanos para apoiar decisões relacionadas à gestão de pessoas, admissões, desligamentos e folha salarial.",
            project_com_title: "Dashboard Comercial",
            project_com_desc: "Visão estratégica da operação comercial com comparação de vendas realizadas versus metas, ticket médio, margem e análise de devoluções.",
            project_case_btn: "Ver Projeto",
            experience_title: "Experiência & Educação",
            exp_responsibilities: "Principais Responsabilidades",
            exp_1_title: "Analista de Soluções",
            exp_1_org: "Capgemini",
            exp_1_type: "CLT",
            exp_1_desc: "Desenvolvimento de dashboards e relatórios em Power BI, tratamento e análise de dados com Excel, Power Query e Python, automação de processos com Power Automate, levantamento de requisitos junto às áreas de negócio e acompanhamento de indicadores para apoiar a tomada de decisão.",
            exp_1_resp_1: "Desenvolvimento e manutenção de dashboards estratégicos no Power BI",
            exp_1_resp_2: "Levantamento de requisitos junto às áreas de negócio (AMS, COE, IDLE, Operações)",
            exp_1_resp_3: "Modelagem de dados com modelagem dimensional (star schema)",
            exp_1_resp_4: "Automação de processos via Power Automate e SharePoint",
            exp_1_achievement: "Redução de 80% no tempo de atualização de consultas via otimização no Power Query",
            exp_2_title: "Jovem Aprendiz",
            exp_2_org: "Capgemini",
            exp_2_type: "Aprendiz",
            exp_2_desc: "Apoio às atividades de análise de dados sob supervisão da equipe, auxiliando na elaboração de relatórios e dashboards, tratamento e validação de dados em Excel e Power Query, documentação de processos e suporte às demandas operacionais.",
            exp_2_achievement: "Implementação de funcionalidade no EazyBI considerada inviável pelo suporte oficial",
            exp_3_title: "Bacharelado em Sistemas de Informação",
            exp_3_org: "Faculdade UNIME",
            exp_3_type: "Graduação",
            exp_3_desc: "Formação sólida em análise e desenvolvimento de sistemas, banco de dados, engenharia de software, modelagem de processos de negócio e gestão da informação. TCC focado em análise de dados e desenvolvimento de soluções para apoio à tomada de decisão.",
            certs_counter_label: "certificações",
            cert_filter_all: "Todas",
            contact_title: "Entre em Contato",
            contact_subtitle: "Vamos bater um papo sobre dados?",
            contact_desc: "Se você tem um projeto desafiador, precisa automatizar pipelines ou estruturar o setor analítico da sua empresa, fique à vontade para me contatar.",
            contact_email_lbl: "E-mail",
            contact_cv_btn: "Currículo",
            contact_loc_lbl: "Localização",
            contact_loc_val: "Salvador, Bahia (Remoto)",
            form_name_lbl: "Nome Completo",
            form_name_placeholder: "Seu nome",
            form_email_lbl: "E-mail Corporativo",
            form_email_placeholder: "seuemail@provedor.com",
            form_message_lbl: "Mensagem",
            form_message_placeholder: "Olá! Gostaria de falar sobre...",
            form_submit_btn: "Enviar Mensagem",
            footer_copy: "© 2026 Gustavo Franco. Criado com HTML, CSS e JavaScript puros."
        },
        en: {
            nav_home: "Home",
            nav_about: "About",
            nav_impact: "Impact",
            nav_services: "Services",
            nav_certs: "Certifications",
            nav_projects: "Projects",
            nav_exp: "Experience",
            nav_contact: "Contact",
            hero_greet: "My name is Gustavo Franco, I am a",
            hero_desc: "I transform large volumes of raw data into actionable strategic insights. I develop dashboards, automate processes and turn data into business decisions.",
            metric_1: "4 years of experience",
            metric_2: "+20 Certifications",
            metric_3: "Power BI • SQL • Python",
            metric_4: "Finance, HR, Operations, AMS & Sales",
            hero_btn_projects: "View Projects",
            hero_btn_contact: "Contact",
            mockup_pipeline_status: "Data Pipeline • Live",
            mockup_sources: "Connected Sources",
            mockup_sync: "Last Sync",
            mockup_sync_just_now: "now",
            mockup_sync_ago: "{time} ago",
            mockup_sync_seconds: "{n}s",
            mockup_sync_minute: "1 min",
            mockup_sync_minutes: "{n} min",
            about_title: "About Me",
            about_text_1: "I am a data professional passionate about translating complex data into clear business answers. I have experience in creating end-to-end solutions, covering everything from data engineering (structuring and cleaning in SQL/NoSQL databases and ETL pipelines) to analytical data science (statistical modeling and predictive algorithms in Python).",
            about_text_2: "I am focused on designing scalable cloud architectures and applying advanced machine learning techniques to optimize processes, predict trends, and securely support corporate decision-making.",
            about_text_3: "I also have experience with the Microsoft ecosystem, using SharePoint to create and administer corporate portals and Power Automate to automate processes, send notifications, and manage lists, thereby helping to boost team productivity and reduce manual tasks.",
            about_card_1_title: "15+ Projects",
            about_card_1_desc: "Delivered & Operational",
            about_card_2_title: "4 Years",
            about_card_2_desc: "Data Experience",
            about_card_3_title: "+20 Certs",
            about_card_3_desc: "Active Certifications",
            impact_title: "Professional Impact",
            impact_subtitle: "Throughout my experience as a Data Analyst, I participated in building strategic dashboards and analytical solutions for different business areas, supporting managers in decision-making through performance indicators.",
            impact_block1_title: "Corporate Projects",
            impact_block2_title: "Key Results",
            impact_corp_1_title: "Operational Indicators",
            impact_corp_1_area: "Operations",
            impact_corp_1_desc: "Monitoring of productivity, operational costs and rework, enabling continuous tracking of operational efficiency.",
            impact_corp_2_title: "AMS — Application Management Services",
            impact_corp_2_area: "IT Support",
            impact_corp_2_desc: "Development of indicators related to application support.",
            impact_corp_3_title: "IDLE — Capacity Management",
            impact_corp_3_area: "Finance",
            impact_corp_3_desc: "Financial dashboard for operational capacity management.",
            impact_corp_4_title: "COE — Center of Excellence",
            impact_corp_4_area: "Sales",
            impact_corp_4_desc: "Dashboard for tracking commercial proposals.",
            result_1_title: "Feature Considered Unfeasible",
            result_1_tag: "EazyBI + Jira Software",
            result_1_desc: "While working as a Young Apprentice, I developed a solution using EazyBI and Jira Software to display time-entry details. This feature was considered unfeasible by the official support team but was implemented after technical research, meeting user needs.",
            result_2_title: "80% Reduction in Update Time",
            result_2_tag: "Power Query • Data Modeling",
            result_2_desc: "I optimized a query update process in Power Query. The update time was reduced from over one hour to approximately ten minutes — a reduction of over 80%, achieved by reviewing filters, removing unnecessary steps, and optimizing modeling with AI support.",
            result_2_metric: "Reduction in refresh time",
            services_title: "Services",
            services_subtitle: "Custom-designed data solutions to leverage your business.",
            service_1_title: "Dashboard Development",
            service_1_desc: "Creation of interactive dashboards and dynamic reports in Power BI and Excel that synthesize complex metrics to facilitate decision-making.",
            service_2_title: "Process Automation (RPA)",
            service_2_desc: "Optimization of manual tasks and data integration using Power Automate and Python scripts, freeing time and eliminating human errors.",
            service_3_title: "Data Engineering",
            service_3_desc: "Building ETL flows, structured cleaning, and data modeling using SQL, Power Query, and Python to ensure reliable data sources.",
            service_4_title: "Analysis & Decision Support",
            service_4_desc: "Analytical consulting focused on identifying operational bottlenecks and growth opportunities through the study of business indicators.",
            btn_hire: "Hire Me",
            cv_button_label: "Download CV",
            cv_filename_pt: "CV_Gustavo_Franco_PT.pdf",
            cv_filename_en: "CV_Gustavo_Franco_EN.pdf",
            cv_aria_label_pt: "Baixar Currículo (Português)",
            cv_aria_label_en: "Download Resume (English)",
            certs_title: "Courses & Certifications",
            courses_count_2: "2 Courses",
            courses_count_8: "8 Courses",
            course_sql_basics: "Introduction to SQL Commands",
            course_python_data: "Python for Data Analytics",
            course_feedback: "Feedback Foundations",
            course_career: "Career Management",
            course_time: "Time Management",
            course_interactions: "Difficult Interactions",
            course_negotiation: "Negotiation",
            course_strategic: "Strategic Thinking",
            course_presentation: "Presentation Techniques",
            course_writing: "Writing Techniques",
            course_ai: "Artificial Intelligence Journey",
            course_python_hashtag: "Python Journey",
            course_html_css: "Advanced HTML & CSS Techniques",
            course_powerbi: "Power BI: Basic to Advanced",
            projects_title: "Projects",
            projects_subtitle: "Each project is a complete analytical solution — from the problem context to KPI delivery.",
            filter_all: "All",
            filter_financeiro: "Finance",
            filter_logistica: "Logistics",
            filter_rh: "HR",
            filter_comercial: "Sales",
            project_fin_title: "Financial Dashboard",
            project_fin_desc: "Consolidation of revenues, expenses and balance in an executive analytical view, enabling monitoring of financial health and supporting strategic decisions.",
            project_log_title: "Logistics Dashboard",
            project_log_desc: "Tracking the logistics operation with KPIs on transport, delivery performance and geographic distribution analysis.",
            project_rh_title: "People Analytics Dashboard",
            project_rh_desc: "HR analytical indicators to support decisions related to people management, admissions, terminations and payroll.",
            project_com_title: "Sales Dashboard",
            project_com_desc: "Strategic view of the commercial operation comparing actual sales versus targets, average ticket, margin and returns analysis.",
            project_case_btn: "View Project",
            experience_title: "Experience & Education",
            exp_responsibilities: "Key Responsibilities",
            exp_1_title: "Solutions Analyst",
            exp_1_org: "Capgemini",
            exp_1_type: "Full-time",
            exp_1_desc: "Development of dashboards and reports in Power BI, data treatment and analysis with Excel, Power Query and Python, process automation with Power Automate, requirements gathering with business areas and tracking indicators to support decision making.",
            exp_1_resp_1: "Development and maintenance of strategic dashboards in Power BI",
            exp_1_resp_2: "Requirements gathering with business areas (AMS, COE, IDLE, Operations)",
            exp_1_resp_3: "Data modeling with dimensional modeling (star schema)",
            exp_1_resp_4: "Process automation via Power Automate and SharePoint",
            exp_1_achievement: "80% reduction in query update time through Power Query optimization",
            exp_2_title: "Young Apprentice",
            exp_2_org: "Capgemini",
            exp_2_type: "Apprentice",
            exp_2_desc: "Support for data analysis activities under team supervision, assisting in the development of reports and dashboards, Excel and Power Query data processing and validation, process documentation and operational support.",
            exp_2_achievement: "Implemented EazyBI feature considered unfeasible by official support",
            exp_3_title: "Bachelor in Information Systems",
            exp_3_org: "UNIME College",
            exp_3_type: "Degree",
            exp_3_desc: "Solid training in systems analysis and development, database, software engineering, business process modeling and information management. Thesis focused on data analysis and development of decision-support solutions.",
            certs_counter_label: "certifications",
            cert_filter_all: "All",
            contact_title: "Get in Touch",
            contact_subtitle: "Let's talk about data!",
            contact_desc: "If you have a challenging project, need to automate pipelines, or structure your company's analytical sector, feel free to contact me.",
            contact_email_lbl: "Email",
            contact_cv_btn: "Resume",
            contact_loc_lbl: "Location",
            contact_loc_val: "Salvador, Bahia, Brazil (Remote)",
            form_name_lbl: "Full Name",
            form_name_placeholder: "Your name",
            form_email_lbl: "Corporate Email",
            form_email_placeholder: "yourname@provider.com",
            form_message_lbl: "Message",
            form_message_placeholder: "Hello! I would like to talk about...",
            form_submit_btn: "Send Message",
            footer_copy: "© 2026 Gustavo Franco. Created with pure HTML, CSS and JavaScript."
        }
    };

    // --- 2. Elementos DOM ---
    const langToggle = document.getElementById('lang-toggle');
    const langText = document.getElementById('lang-text');
    const typedTextSpan = document.getElementById('typed-text');
    const themeToggle = document.getElementById('theme-toggle');
    const sunIcon = themeToggle.querySelector('.sun-icon');
    const moonIcon = themeToggle.querySelector('.moon-icon');
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const navLinks = document.getElementById('nav-links');
    const menuLinks = document.querySelectorAll('.nav-links a');
    const headerEl = document.getElementById('header');
    const sections = document.querySelectorAll('section');
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');
    const contactForm = document.getElementById('contact-form');
    const syncVal = document.getElementById('stat-sync');
    const cvDownloadBtn = document.getElementById('cv-download-btn');

    // --- 3. Variáveis de Estado ---
    let currentLang = localStorage.getItem('lang') || 'pt';
    const currentTheme = localStorage.getItem('theme') || 
        (window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark');

    const typingTerms = {
        pt: ["Analista de Dados", "Desenvolvedor BI", "Especialista em Analytics", "Problem Solver"],
        en: ["Data Analyst", "BI Developer", "Analytics Specialist", "Problem Solver"]
    };
    const typingSpeed = 100;
    const erasingSpeed = 60;
    const newTextDelay = 2000;
    
    let textArrayIndex = 0;
    let charIndex = 0;
    let typingTimeoutId = null;

    // --- 4. Funções de Tema ---
    function setTheme(theme) {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);

        if (theme === 'light') {
            sunIcon.style.display = 'none';
            moonIcon.style.display = 'block';
        } else {
            sunIcon.style.display = 'block';
            moonIcon.style.display = 'none';
        }
    }

    // --- 5. Funções de Digitação ---
    function type() {
        const currentTerms = typingTerms[currentLang];
        if (charIndex < currentTerms[textArrayIndex].length) {
            typedTextSpan.textContent += currentTerms[textArrayIndex].charAt(charIndex);
            charIndex++;
            typingTimeoutId = setTimeout(type, typingSpeed);
        } else {
            typingTimeoutId = setTimeout(erase, newTextDelay);
        }
    }

    function erase() {
        const currentTerms = typingTerms[currentLang];
        if (charIndex > 0) {
            typedTextSpan.textContent = currentTerms[textArrayIndex].substring(0, charIndex - 1);
            charIndex--;
            typingTimeoutId = setTimeout(erase, erasingSpeed);
        } else {
            textArrayIndex++;
            if (textArrayIndex >= currentTerms.length) textArrayIndex = 0;
            typingTimeoutId = setTimeout(type, typingSpeed + 500);
        }
    }

    function resetTypingEffect() {
        if (typingTimeoutId) {
            clearTimeout(typingTimeoutId);
        }
        textArrayIndex = 0;
        charIndex = 0;
        if (typedTextSpan) {
            typedTextSpan.textContent = '';
            type();
        }
    }

    // --- 6. Funções de Idioma ---
    function applyLanguage(lang) {
        currentLang = lang;
        localStorage.setItem('lang', lang);
        
        // Atualizar texto do botão indicando o próximo idioma
        langText.textContent = lang === 'pt' ? 'EN' : 'PT';
        
        // Aplicar traduções
        const elementsToTranslate = document.querySelectorAll('[data-i18n]');
        elementsToTranslate.forEach(element => {
            const key = element.getAttribute('data-i18n');
            let translatedText = translations[lang][key];

            // Suporte dinâmico para contagem de cursos (sem limite de números)
            if (!translatedText && key.startsWith('courses_count_')) {
                const count = key.split('_')[2];
                if (lang === 'pt') {
                    translatedText = count === '1' ? '1 Curso' : `${count} Cursos`;
                } else {
                    translatedText = count === '1' ? '1 Course' : `${count} Courses`;
                }
            }

            if (translatedText) {
                const svg = element.querySelector('svg');
                if (svg) {
                    const textNode = Array.from(element.childNodes).find(node => node.nodeType === Node.TEXT_NODE);
                    if (textNode) {
                        textNode.nodeValue = translatedText;
                    } else {
                        element.textContent = translatedText;
                        element.prepend(svg);
                    }
                } else {
                    element.textContent = translatedText;
                }
            }
        });

        // Aplicar traduções para placeholders
        const inputsToTranslate = document.querySelectorAll('[data-i18n-placeholder]');
        inputsToTranslate.forEach(input => {
            const key = input.getAttribute('data-i18n-placeholder');
            if (translations[lang][key]) {
                input.setAttribute('placeholder', translations[lang][key]);
            }
        });

        // Trocar arquivo do CV de acordo com o idioma
        if (cvDownloadBtn) {
            const tr = translations[lang];
            const cvFile = lang === 'pt' ? tr.cv_filename_pt : tr.cv_filename_en;
            const cvAria = lang === 'pt' ? tr.cv_aria_label_pt : tr.cv_aria_label_en;
            cvDownloadBtn.setAttribute('href', `Currículos/${cvFile}`);
            cvDownloadBtn.setAttribute('download', cvFile);
            cvDownloadBtn.setAttribute('aria-label', cvAria);
        }

        // Reiniciar digitação com termos do idioma correto
        resetTypingEffect();
    }

    // --- 7. Carregar e Renderizar Certificados Dinamicamente ---
    const certsGrid = document.getElementById('certs-grid');

    async function loadCertificates() {
        try {
            const response = await fetch('certificados.json');
            const data = await response.json();
            
            if (!certsGrid) return;
            certsGrid.innerHTML = ''; // Limpar placeholder
            
            data.forEach((inst) => {
                const card = document.createElement('div');
                card.className = 'cert-card dropdown-card';
                
                // Mapear chave de tradução para a contagem de cursos
                const countKey = inst.count === 1 ? 'courses_count_1' : `courses_count_${inst.count}`;
                
                // Montar lista de cursos
                let coursesListHtml = '';
                inst.courses.forEach(course => {
                    const courseKey = course.filename.replace(/\.[^/.]+$/, "").replace(/[^a-zA-Z0-9]/g, "_").toLowerCase();
                    
                    // Adicionar chave ao dicionário dinamicamente se não existir
                    if (!translations.pt[`course_${courseKey}`]) {
                        translations.pt[`course_${courseKey}`] = course.name;
                    }
                    if (!translations.en[`course_${courseKey}`]) {
                        translations.en[`course_${courseKey}`] = course.name;
                    }

                    coursesListHtml += `
                        <li>
                            <a href="${course.path}" target="_blank" class="course-link">
                                <svg class="file-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                                    <polyline points="14 2 14 8 20 8"></polyline>
                                </svg>
                                <span data-i18n="course_${courseKey}">${course.name}</span>
                            </a>
                        </li>
                    `;
                });

                card.innerHTML = `
                    <div class="dropdown-header">
                        <img src="${inst.logo}" alt="${inst.institution} Logo" class="institution-logo">
                        <div class="institution-info">
                            <h3 class="institution-name">${inst.institution}</h3>
                            <span class="courses-count" data-i18n="${countKey}">${inst.count} Cursos</span>
                        </div>
                        <svg class="chevron-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                            <polyline points="6 9 12 15 18 9"></polyline>
                        </svg>
                    </div>
                    <div class="dropdown-content">
                        <ul class="courses-list">
                            ${coursesListHtml}
                        </ul>
                    </div>
                `;
                
                certsGrid.appendChild(card);
            });

            // Adicionar ouvintes de evento de Accordion para os cards dinâmicos
            attachDropdownListeners();
            
            // Re-aplicar idioma atual para traduzir os novos elementos injetados
            applyLanguage(currentLang);

        } catch (error) {
            console.error("Erro ao carregar certificados:", error);
        }
    }

    function attachDropdownListeners() {
        const dropdownCards = document.querySelectorAll('.dropdown-card');
        dropdownCards.forEach(card => {
            card.addEventListener('click', (e) => {
                if (e.target.closest('.course-link')) {
                    return;
                }
                
                const isActive = card.classList.contains('active');
                const content = card.querySelector('.dropdown-content');
                
                // Fechar outros dropdowns
                dropdownCards.forEach(otherCard => {
                    otherCard.classList.remove('active');
                    otherCard.querySelector('.dropdown-content').style.maxHeight = null;
                });
                
                if (!isActive) {
                    card.classList.add('active');
                    content.style.maxHeight = content.scrollHeight + 'px';
                }
            });
        });
    }

    // --- 8. Inicializadores ---
    setTheme(currentTheme);
    applyLanguage(currentLang);
    loadCertificates();

    // --- 8. Event Listeners ---
    langToggle.addEventListener('click', () => {
        const newLang = currentLang === 'pt' ? 'en' : 'pt';
        applyLanguage(newLang);
    });

    themeToggle.addEventListener('click', () => {
        const activeTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = activeTheme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
    });

    // Menu Mobile
    mobileMenuBtn.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        mobileMenuBtn.classList.toggle('active');
        
        const spans = mobileMenuBtn.querySelectorAll('span');
        if (navLinks.classList.contains('active')) {
            spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
            spans[1].style.opacity = '0';
            spans[2].style.transform = 'rotate(-45deg) translate(6px, -6px)';
        } else {
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        }
    });

    menuLinks.forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            
            const spans = mobileMenuBtn.querySelectorAll('span');
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        });
    });

    // Scroll Active Link Highlight
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            headerEl.classList.add('scrolled');
        } else {
            headerEl.classList.remove('scrolled');
        }

        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (window.scrollY >= (sectionTop - 150)) {
                current = section.getAttribute('id');
            }
        });

        menuLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });

    // Filtro de Projetos
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            const filterValue = button.getAttribute('data-filter');

            projectCards.forEach(card => {
                const category = card.getAttribute('data-category');
                
                if (filterValue === 'all' || category === filterValue) {
                    card.style.display = 'flex';
                    card.style.opacity = '0';
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'translateY(0)';
                    }, 50);
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });

    // Accordion Dropdowns para Cursos & Certificações (Carregados dinamicamente)
    // Inicializados dentro do fluxo de loadCertificates() para garantir que os elementos já existam no DOM.

    // Formulário de Contato com Feedback
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const submitBtn = contactForm.querySelector('button[type="submit"]');
            const originalBtnText = submitBtn.innerHTML;
            
            submitBtn.disabled = true;
            submitBtn.innerHTML = currentLang === 'pt' ? 'Enviando...' : 'Sending...';

            setTimeout(() => {
                submitBtn.innerHTML = currentLang === 'pt' ? 'Mensagem Enviada! 🎉' : 'Message Sent! 🎉';
                submitBtn.style.background = 'linear-gradient(135deg, #10b981 0%, #059669 100%)';
                submitBtn.style.boxShadow = '0 4px 20px rgba(16, 185, 129, 0.4)';
                
                contactForm.reset();

                setTimeout(() => {
                    submitBtn.disabled = false;
                    submitBtn.innerHTML = originalBtnText;
                    submitBtn.style.background = '';
                    submitBtn.style.boxShadow = '';
                }, 4000);
            }, 1200);
        });
    }

    // Stats dinâmicos: contador de "última sincronização" (Realtime mockup effect)
    if (syncVal) {
        const lastSync = new Date();
        const formatSync = () => {
            const t = translations[currentLang];
            const elapsedSec = Math.floor((Date.now() - lastSync.getTime()) / 1000);

            let timeStr;
            if (elapsedSec < 5) {
                timeStr = t.mockup_sync_just_now;
            } else if (elapsedSec < 60) {
                timeStr = t.mockup_sync_seconds.replace('{n}', elapsedSec);
            } else if (elapsedSec < 120) {
                timeStr = t.mockup_sync_minute;
            } else {
                timeStr = t.mockup_sync_minutes.replace('{n}', Math.floor(elapsedSec / 60));
            }

            syncVal.textContent = currentLang === 'pt'
                ? (timeStr === t.mockup_sync_just_now ? timeStr : `há ${timeStr}`)
                : (timeStr === t.mockup_sync_just_now ? timeStr : `${timeStr} ago`);
        };

        formatSync();
        setInterval(formatSync, 1000);
    }

    // --- Filtro de Certificações por Instituição ---
    const certFilterBtns = document.querySelectorAll('.cert-filter-btn');
    
    function filterCertsByInstitution(filter) {
        const certCards = document.querySelectorAll('#certs-grid .cert-card');
        let visibleCount = 0;

        certCards.forEach(card => {
            const institution = card.getAttribute('data-institution') || '';
            if (filter === 'all' || institution === filter) {
                card.style.display = '';
                card.style.opacity = '0';
                setTimeout(() => { card.style.opacity = '1'; }, 30);
                visibleCount++;
            } else {
                card.style.display = 'none';
            }
        });

        // Atualizar contador
        const counterEl = document.getElementById('certs-total');
        if (counterEl) animateCounter(counterEl, visibleCount);
    }

    certFilterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            certFilterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            filterCertsByInstitution(btn.getAttribute('data-filter'));
        });
    });

    // --- Animação do Contador de Certificações ---
    function animateCounter(el, target) {
        const start = parseInt(el.textContent) || 0;
        const duration = 600;
        const startTime = performance.now();

        function update(currentTime) {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
            el.textContent = Math.round(start + (target - start) * eased);
            if (progress < 1) requestAnimationFrame(update);
        }
        requestAnimationFrame(update);
    }

    // Inicializar contador total após carregamento de certificados
    const originalLoadCerts = loadCertificates;
    async function initCertCounter() {
        await loadCertificates();
        // Aguardar render e contar cards visíveis
        setTimeout(() => {
            // Adicionar atributo data-institution em cada card gerado
            const certCards = document.querySelectorAll('#certs-grid .cert-card');
            certCards.forEach(card => {
                const nameEl = card.querySelector('.institution-name');
                if (nameEl) {
                    card.setAttribute('data-institution', nameEl.textContent.trim());
                }
            });
            const counterEl = document.getElementById('certs-total');
            if (counterEl) animateCounter(counterEl, certCards.length);
        }, 200);
    }

    // Substituir chamada original
    // (já foi chamado acima como loadCertificates(), mantemos mas re-chamamos após DOM pronto)
    setTimeout(() => {
        const certCards = document.querySelectorAll('#certs-grid .cert-card');
        certCards.forEach(card => {
            const nameEl = card.querySelector('.institution-name');
            if (nameEl) card.setAttribute('data-institution', nameEl.textContent.trim());
        });
        const counterEl = document.getElementById('certs-total');
        if (counterEl) animateCounter(counterEl, certCards.length);
    }, 800);

    // --- Intersection Observer — Animações de Entrada ---
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                revealObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.12,
        rootMargin: '0px 0px -40px 0px'
    });

    document.querySelectorAll('.reveal-item').forEach(el => revealObserver.observe(el));

});
