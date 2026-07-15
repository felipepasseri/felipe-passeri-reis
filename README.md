<div align="center">

# 🚀 Felipe Passeri Reis — Portfólio Pessoal

**Desenvolvedor Full Stack | Piracicaba, SP — Brasil**

Um portfólio profissional moderno, responsivo e interativo, construído com HTML, CSS e JavaScript. Design premium com tema claro/escuro, animações suaves, glassmorphism e galeria de projetos com modal e lightbox.

<br/>

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/pt-BR/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/pt-BR/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)
[![License: MIT](https://img.shields.io/badge/License-MIT-00E5FF?style=for-the-badge)](LICENSE)

</div>

---

## 📋 Índice

- [Sobre o Projeto](#-sobre-o-projeto)
- [Demonstração](#-demonstração)
- [Funcionalidades](#-funcionalidades)
- [Tecnologias Utilizadas](#-tecnologias-utilizadas)
- [Estrutura do Projeto](#-estrutura-do-projeto)
- [Projetos em Destaque](#-projetos-em-destaque)
- [Contato](#-contato)
- [Licença](#-licença)

---

## 💡 Sobre o Projeto

Este é o meu portfólio pessoal como **Desenvolvedor Full Stack**, criado para apresentar minhas habilidades técnicas, projetos em destaque e formas de contato profissional. O site foi desenvolvido do zero, sem dependência de frameworks CSS ou JavaScript, priorizando performance, acessibilidade e uma experiência visual de alto nível.

### Destaques do Design

- 🎨 **Glassmorphism** — Painéis com `backdrop-filter: blur()` e bordas translúcidas
- 🌗 **Tema Claro/Escuro** — Alternância com persistência via `localStorage`
- ✨ **Animações no Scroll** — Biblioteca [AOS](https://michalsnik.github.io/aos/) para reveal animations
- 🫧 **Micro-animações** — Ícone flutuante, glow pulsante, hover effects com transições suaves
- 📱 **Totalmente Responsivo** — Breakpoints para desktop, tablet e mobile

---

## 🖥️ Demonstração

<div align="center">

| Tema Escuro (Padrão) | Tema Claro |
|:---:|:---:|
| 🌑 Fundo `#030712` com gradientes neon | ☀️ Fundo `#F8FAFC` com tons azulados |

</div>

> **Acesse o site ao vivo:** [felipepasseri.github.io/felipe-passeri-reis](https://felipepasseri.github.io/felipe-passeri-reis)

---

## ⚡ Funcionalidades

### 🏠 Header & Navegação
- Navbar fixa com efeito glassmorphism e `backdrop-filter`
- **Scroll Spy** — Destaca automaticamente a seção visível no menu
- **Menu Mobile** — Hambúrguer animado com toggle de ícone (☰ ↔ ✕)
- **Toggle de Tema** — Switch visual com ícone sol/lua e estado salvo no `localStorage`

### 👤 Hero Section
- Apresentação com foto profissional e efeito de glow pulsante
- Ícone flutuante animado (`@keyframes float`)
- Botões de ação e links para redes sociais (GitHub, LinkedIn, WhatsApp)

### 📝 Sobre Mim & Skills
- Seção "Sobre" com texto descritivo e botão para download de currículo
- Grid de habilidades organizadas por categoria:
  - **Frontend:** HTML5, CSS3, JavaScript, Bootstrap
  - **Backend:** Java, C#, PHP, MySQL
  - **Ferramentas:** Git, GitHub, VS Code
- Hover com efeito de elevação e colorização dos ícones

### 💼 Portfólio
- Cards de projetos com imagem, descrição, tags de tecnologia e badge de status
- **Modal interativo** com galeria de screenshots, slider com setas e descrição detalhada
- **Lightbox fullscreen** — Clique em qualquer imagem do modal para expandir em tela cheia
- Fechamento via botão, clique no overlay ou tecla `ESC`

### 📬 Contato
- Informações de contato direto (WhatsApp, e-mail, localização)
- Formulário de contato com validação HTML nativa
- Links para redes sociais

### 🦶 Footer
- Créditos com logo estilizada
- Link "Voltar ao topo" com smooth scroll

---

## 🛠️ Tecnologias Utilizadas

| Tecnologia | Uso |
|:---|:---|
| **HTML5** | Estrutura semântica do site |
| **CSS3 (Vanilla)** | Estilização completa, variáveis CSS, glassmorphism, responsividade |
| **JavaScript (ES6+)** | Lógica de tema, scroll spy, menu mobile, modal/lightbox, AOS init |
| **[AOS](https://michalsnik.github.io/aos/)** | Animações de reveal ao scrollar |
| **[Phosphor Icons](https://phosphoricons.com/)** | Ícones do UI (navegação, ações, contato) |
| **[Devicon](https://devicon.dev/)** | Ícones coloridos de tecnologias (skills) |
| **[Google Fonts (Inter)](https://fonts.google.com/specimen/Inter)** | Tipografia principal |

---

## 📁 Estrutura do Projeto

```
felipe-passeri/
├── img/                                  # Assets de imagem
│   ├── felipe-foto.png                   # Foto de perfil (hero)
│   ├── espaco-em-foco.png                # Thumbnail — Espaço em Foco
│   ├── tela-inicial-espaco-em-foco.png   # Screenshot — tela inicial
│   ├── tela-topico-espaco-em-foco.png    # Screenshot — tela de tópico
│   ├── tela-ranking-espaco-em-foco.png   # Screenshot — tela de ranking
│   ├── projeto-vertice.jpeg              # Thumbnail — Projeto Vértice
│   ├── dashbord-vertice.png              # Screenshot — dashboard
│   └── grafico-vertice.png               # Screenshot — gráficos
├── index.html                            # Página principal (SPA)
├── style.css                             # Estilos completos + responsividade
├── script.js                             # Lógica interativa
├── .gitignore                            # Regras de exclusão do Git
└── README.md                             # Este arquivo
```

---

## 🏆 Projetos em Destaque

### 🎓 Espaço em Foco
> Site educacional gamificado para tornar o aprendizado divertido e interativo.

- Sistema de **gamificação** com pontuações, conquistas, levels e rankings
- Quizzes interativos e sistema de perguntas e respostas
- Comunidade ativa com fórum integrado e sistema de seguidores
- **Tags:** `Educação` `Jogos` `Quiz` `Comunidade`
- **Status:** 🔨 Em desenvolvimento

### 🌾 Projeto Vértice
> Sistema inteligente de análise preditiva climática para proteção de plantações.

- Monitoramento de dados climáticos em **tempo real**
- Alertas antecipados sobre fenômenos extremos (geadas, tempestades, secas)
- Foco em **pequenos agricultores** com notificações preventivas
- **Tags:** `Dados` `Análises` `Predição` `Clima` `IA`
- **Status:** 🔨 Em desenvolvimento

---

## 📞 Contato

<div align="center">

| Canal | Link |
|:---:|:---:|
| 📧 **E-mail** | [reisfelipe429@gmail.com](mailto:reisfelipe429@gmail.com) |
| 💼 **LinkedIn** | [felipe-reis-b1957a313](https://www.linkedin.com/in/felipe-reis-b1957a313/) |
| 🐙 **GitHub** | [felipepasseri](https://github.com/felipepasseri) |
| 📱 **WhatsApp** | [(19) 99955-2008](https://api.whatsapp.com/send?phone=5519999552008) |
| 📍 **Localização** | Piracicaba, SP — Brasil |

</div>

---

## 📄 Licença

Este projeto é de uso pessoal. Todos os direitos reservados © 2026 **Felipe Passeri Reis**.

---

<div align="center">

Feito com 💙 por [Felipe Passeri Reis](https://github.com/felipepasseri)

</div>
