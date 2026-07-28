// --- 1. LÓGICA DO TEMA CLARO/ESCURO (LOCALSTORAGE) ---
const themeToggleBtn = document.getElementById('theme-toggle');
const toggleIcon = themeToggleBtn.querySelector('i');

// Verifica se o usuário já havia escolhido um tema salvo no localStorage
const currentTheme = localStorage.getItem('theme');
if (currentTheme === 'light') {
    document.body.classList.add('light-theme');
    themeToggleBtn.classList.add('active'); // Liga o interruptor visual
    toggleIcon.classList.replace('ph-sun', 'ph-moon'); // Troca o ícone principal
}

// Evento de clique para alternar o tema
themeToggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('light-theme');
    themeToggleBtn.classList.toggle('active'); // Anima o toggle switch

    // Verifica qual tema ficou ativo e salva na memória do navegador
    if (document.body.classList.contains('light-theme')) {
        localStorage.setItem('theme', 'light');
        toggleIcon.classList.replace('ph-sun', 'ph-moon');
    } else {
        localStorage.setItem('theme', 'dark');
        toggleIcon.classList.replace('ph-moon', 'ph-sun');
    }
});


// --- 2. INICIALIZAÇÃO DA BIBLIOTECA DE ANIMAÇÃO (AOS) ---
// Em telas mobile, troca fade-right/fade-left por fade-up para evitar overflow horizontal
if (window.innerWidth <= 992) {
    document.querySelectorAll('[data-aos="fade-right"], [data-aos="fade-left"]').forEach(el => {
        el.setAttribute('data-aos', 'fade-up');
    });
}

AOS.init({
    once: true, 
    offset: 100, 
    easing: 'ease-out-cubic',
});

// --- 3. LÓGICA DO MENU SCROLL SPY ---
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-list a');

window.addEventListener('scroll', () => {
    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').includes(current)) {
            link.classList.add('active');
        }
    });
});

// --- 4. MENU MOBILE (HAMBÚRGUER) ---
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const navList = document.querySelector('.nav-list');

mobileMenuBtn.addEventListener('click', () => {
    navList.classList.toggle('active');
    const icon = mobileMenuBtn.querySelector('i');
    
    if(navList.classList.contains('active')) {
        icon.classList.replace('ph-list', 'ph-x');
    } else {
        icon.classList.replace('ph-x', 'ph-list');
    }
});

// Fecha o menu ao clicar num link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navList.classList.remove('active');
        const icon = mobileMenuBtn.querySelector('i');
        if(icon.classList.contains('ph-x')) {
            icon.classList.replace('ph-x', 'ph-list');
        }
    });
});

// --- 5. DADOS DOS PROJETOS PARA O MODAL ---
const projectData = {
    'espaco-foco': {
        title: 'Espaço em Foco',
        description: 'Um site educacional voltado a ensinar de forma mais dinâmica com o auxílio de jogos, quiz, perguntas e respostas. Possui um sistema estruturado de gamificação com pontuações, conquistas, levels e rankings para deixar o aprendizado muito mais divertido e imersivo. Além disso, conta com uma comunidade ativa, onde os membros podem se seguir, compartilhar resultados e se comunicar ativamente através do fórum integrado.',
        images: [
            'img/tela-inicial-espaco-em-foco.png',
            'img/tela-topico-espaco-em-foco.png',
            'img/tela-ranking-espaco-em-foco.png'
        ]
    },
    'vertice': {
        title: 'Projeto Vértice',
        description: 'Um sistema inteligente e inovador responsável por fazer uma análise preditiva do clima. O objetivo principal do Vértice é alertar pequenos agricultores sobre possíveis fenômenos climáticos extremos (como geadas, tempestades ou secas súbitas) que podem afetar diretamente sua plantação. O sistema monitora dados em tempo real e emite notificações com algumas horas de antecedência, dando tempo para o agricultor se prevenir e proteger a sua colheita.',
        images: [
            'img/dashbord-vertice.png',
            'img/grafico-vertice.png'
        ]
    },
    'divino-sabor': {
        title: 'Divino Sabor Restaurante',
        description: `
            <p>O site foi construído para apresentar o cardápio diário aos clientes e facilitar os pedidos. Por trás das cortinas, o sistema possui um painel administrativo robusto para gerenciar produtos, pedidos, fluxo de caixa e funcionários.</p>
            <br>
            <ul>
                <li style="margin-bottom: 0.8rem;"><strong>Área do Cliente (Front-end):</strong> É a vitrine do restaurante. Ela é responsável por carregar o cardápio dinamicamente do banco de dados, dividindo-o entre "Pratos do Dia" e "Outros Itens". A página foi muito bem estruturada com foco em SEO (Search Engine Optimization), contendo meta tags detalhadas, Open Graph para redes sociais, Twitter Cards e dados estruturados (Schema.org).</li>
                <li style="margin-bottom: 0.8rem;"><strong>Área Administrativa (Back-end / Dashboard):</strong> Toda a parte administrativa é protegida por sessões, garantindo que apenas usuários logados possam acessar. Funciona como um menu principal interativo onde o administrador tem uma visão geral e pode navegar para os diferentes módulos do sistema, que conta com Gestão de Cardápio, Gestão de Pedidos, Gestão Financeira com Gráficos e Filtros, e Gestão de Usuários / RH.</li>
                <li><strong>Estrutura Técnica e Arquitetura:</strong> Desenvolvido em PHP e banco de dados MySQL, o Front-end foi construído com HTML5, CSS e JavaScript. APIs concentram os scripts que processam ações em segundo plano sem necessariamente recarregar páginas inteiras.</li>
            </ul>
        `,
        link: 'https://divinosaborguaruja.wuaze.com/',
        images: [
            'img/divino-sabor-img/divino-sabor-2.png',
            'img/divino-sabor-img/divino-sabor-3.png',
            'img/divino-sabor-img/divino-sabor-4.png',
            'img/divino-sabor-img/divino-sabor-5.png',
            'img/divino-sabor-img/divino-sabor-6.png',
            'img/divino-sabor-img/divino-sabor-7.png',
            'img/divino-sabor-img/divino-sabor-8.png',
            'img/divino-sabor-img/divino-sabor-9.png',
            'img/divino-sabor-img/divino-sabor-10.png',
            'img/divino-sabor-img/divino-sabor-11.png',
            'img/divino-sabor-img/divino-sabor-12.png',
            'img/divino-sabor-img/divino-sabor-13.png',
            'img/divino-sabor-img/divino-sabor-14.png',
            'img/divino-sabor-img/divino-sabor-15.png',
            'img/divino-sabor-img/divino-sabor-16.png',
            'img/divino-sabor-img/divino-sabor-17.png',
            'img/divino-sabor-img/divino-sabor-18.png',
            'img/divino-sabor-img/divino-sabor-19.png',
            'img/divino-sabor-img/divino-sabor-20.png',
            'img/divino-sabor-img/divino-sabor-21.png'
        ]
    }
};

// --- 6. LÓGICA DO MODAL (POP-UP PRINCIPAL, SLIDER E LIGHTBOX) ---
const modalOverlay = document.getElementById('project-modal');
const closeModalBtn = document.getElementById('close-modal');
const modalTitle = document.getElementById('modal-title');
const modalDescription = document.getElementById('modal-description');
const modalImages = document.getElementById('modal-images');
const openModalBtns = document.querySelectorAll('.btn-open-modal');

// Botões do Slider da Galeria
const sliderPrevBtn = document.getElementById('slider-prev');
const sliderNextBtn = document.getElementById('slider-next');

// Slider de Projetos (Home)
const projectsGrid = document.getElementById('projects-grid');
const projectsPrevBtn = document.getElementById('projects-prev');
const projectsNextBtn = document.getElementById('projects-next');

if (projectsNextBtn) {
    projectsNextBtn.addEventListener('click', () => {
        projectsGrid.scrollBy({ left: 400, behavior: 'smooth' });
    });
}
if (projectsPrevBtn) {
    projectsPrevBtn.addEventListener('click', () => {
        projectsGrid.scrollBy({ left: -400, behavior: 'smooth' });
    });
}

// Elementos do Lightbox (Imagem Expandida)
const lightboxOverlay = document.getElementById('lightbox-modal');
const lightboxImage = document.getElementById('lightbox-image');
const closeLightboxBtn = document.getElementById('close-lightbox');

// Função Slider (Navegação com Setas)
sliderNextBtn.addEventListener('click', () => {
    // Rola 320px para a direita (Tamanho aproximado de uma imagem + espaço)
    modalImages.scrollBy({ left: 320, behavior: 'smooth' });
});

sliderPrevBtn.addEventListener('click', () => {
    // Rola 320px para a esquerda
    modalImages.scrollBy({ left: -320, behavior: 'smooth' });
});

// Abrir Modal Principal
openModalBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        const projectId = btn.getAttribute('data-id');
        const data = projectData[projectId];
        
        if (data) {
            // Preenche o texto
            modalTitle.textContent = data.title;
            modalDescription.innerHTML = data.description;
            
            // Logica do Botão CTA
            const ctaContainer = document.getElementById('modal-cta-container');
            const ctaLink = document.getElementById('modal-cta-link');
            if (ctaContainer && ctaLink) {
                if (data.link) {
                    ctaLink.href = data.link;
                    ctaContainer.style.display = 'block';
                } else {
                    ctaContainer.style.display = 'none';
                }
            }
            
            // Limpa as imagens antigas e cria as novas
            modalImages.innerHTML = '';
            
            data.images.forEach(imgSrc => {
                const img = document.createElement('img');
                img.src = imgSrc;
                img.alt = data.title;
                
                // EVENTO: Clicar na imagem abre o Lightbox (Full Screen)
                img.addEventListener('click', () => {
                    lightboxImage.src = imgSrc;
                    lightboxOverlay.classList.add('active');
                });
                
                modalImages.appendChild(img);
            });
            
            // Exibe o modal
            modalOverlay.classList.add('active');
            document.body.style.overflow = 'hidden'; // Evita que a página role por trás
            modalImages.scrollLeft = 0; // Reseta o scroll das imagens sempre que abre
        }
    });
});

// Fechar Modal Principal
const closeModal = () => {
    modalOverlay.classList.remove('active');
    document.body.style.overflow = 'auto'; // Devolve o scroll da página
};
closeModalBtn.addEventListener('click', closeModal);

// Fechar Lightbox
const closeLightbox = () => {
    lightboxOverlay.classList.remove('active');
};
closeLightboxBtn.addEventListener('click', closeLightbox);

// Fechar clicando nas áreas escuras (fora dos modais)
modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) closeModal();
});
lightboxOverlay.addEventListener('click', (e) => {
    if (e.target === lightboxOverlay) closeLightbox();
});

// Fechar com a tecla ESC
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        if (lightboxOverlay.classList.contains('active')) {
            closeLightbox();
        } else if (modalOverlay.classList.contains('active')) {
            closeModal();
        }
    }
});

// --- 7. VALIDAÇÃO DO FORMULÁRIO DE CONTATO ---
const form = document.getElementById('form');
if (form) {
    const inputEmail = document.getElementById('input-email');
    const inputTelefone = document.getElementById('input-telefone');
    const toggleBtns = document.querySelectorAll('.contact-type-btn');
    let tipoContato = 'email'; // Estado atual do toggle

    // --- Toggle entre Email e Telefone ---
    toggleBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const tipo = btn.getAttribute('data-type');
            if (tipo === tipoContato) return; // Já está selecionado

            tipoContato = tipo;

            // Atualiza visual dos botões
            toggleBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            // Alterna os campos
            if (tipo === 'email') {
                inputEmail.style.display = '';
                inputEmail.disabled = false;
                inputTelefone.style.display = 'none';
                inputTelefone.disabled = true;
                inputTelefone.value = '';
            } else {
                inputTelefone.style.display = '';
                inputTelefone.disabled = false;
                inputEmail.style.display = 'none';
                inputEmail.disabled = true;
                inputEmail.value = '';
            }

            // Remove erro ao trocar de tipo
            const errorMsg = document.getElementById('form-error-msg');
            if (errorMsg) errorMsg.remove();
        });
    });

    // --- Máscara para telefone: (00) 00000-0000 ---
    if (inputTelefone) {
        inputTelefone.addEventListener('input', (e) => {
            let valor = e.target.value.replace(/\D/g, ''); // Remove tudo que não é número
            if (valor.length > 11) valor = valor.slice(0, 11);

            if (valor.length > 6) {
                valor = `(${valor.slice(0, 2)}) ${valor.slice(2, 7)}-${valor.slice(7)}`;
            } else if (valor.length > 2) {
                valor = `(${valor.slice(0, 2)}) ${valor.slice(2)}`;
            } else if (valor.length > 0) {
                valor = `(${valor}`;
            }

            e.target.value = valor;
        });
    }

    // --- Remove erro ao digitar em qualquer campo ---
    form.querySelectorAll('input:not([type="hidden"]), textarea').forEach(input => {
        input.addEventListener('input', () => {
            const errorMsg = document.getElementById('form-error-msg');
            if (errorMsg) errorMsg.remove();
        });
    });

    // --- Validação no submit ---
    form.addEventListener('submit', (e) => {
        const existingError = document.getElementById('form-error-msg');
        if (existingError) existingError.remove();

        const nome = form.querySelector('[name="nome"]').value.trim();
        const assunto = form.querySelector('[name="assunto"]').value.trim();
        const mensagem = form.querySelector('[name="mensagem"]').value.trim();

        // Obtém o valor do campo ativo (email ou telefone)
        const contatoValor = tipoContato === 'email' 
            ? inputEmail.value.trim() 
            : inputTelefone.value.trim();

        // Verifica campos vazios
        if (!nome || !contatoValor || !assunto || !mensagem) {
            e.preventDefault();
            mostrarErroFormulario('Preencha todos os campos antes de enviar.');
            return;
        }

        // Validação específica por tipo
        if (tipoContato === 'email') {
            const emailRegex = /^[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}$/;
            if (!emailRegex.test(contatoValor)) {
                e.preventDefault();
                mostrarErroFormulario('Por favor, insira um e-mail válido.');
                return;
            }
        } else {
            // Valida telefone: deve ter pelo menos 10 dígitos (com DDD)
            const apenasNumeros = contatoValor.replace(/\D/g, '');
            if (apenasNumeros.length < 10 || apenasNumeros.length > 11) {
                e.preventDefault();
                mostrarErroFormulario('Por favor, insira um telefone válido com DDD. Ex: (19) 99955-2008');
                return;
            }
        }
    });
}

/**
 * Exibe uma mensagem de erro em vermelho acima do formulário.
 */
function mostrarErroFormulario(texto) {
    const form = document.getElementById('form');
    if (!form) return;

    const errorP = document.createElement('p');
    errorP.id = 'form-error-msg';
    errorP.style.cssText = 'color: #ef4444; font-size: 0.9rem; font-weight: 600; margin-bottom: 1rem; text-align: center;';
    errorP.innerHTML = '<i class="ph ph-warning-circle"></i> ' + texto;

    form.parentNode.insertBefore(errorP, form);
}
