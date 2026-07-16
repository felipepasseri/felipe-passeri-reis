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
            modalDescription.textContent = data.description;
            
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

// --- 7. PREVENÇÃO DO FORMULÁRIO DE CONTATO ---
const form = document.getElementById('form');
if (form) {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Mensagem enviada com sucesso! (Lógica de backend a ser implementada)');
        form.reset();
    });
}