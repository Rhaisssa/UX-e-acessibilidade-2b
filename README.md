# UX e Acessibilidade: Desenvolvendo Interfaces Inclusivas

Uma plataforma educativa sobre **acessibilidade web** e **experiência do usuário (UX)**, demonstrando boas práticas e componentes acessíveis conforme diretrizes **WCAG 2.1**.

## 🎯 Objetivo

Este projeto foi desenvolvido para:
- **Ensinar** princípios fundamentais de acessibilidade web
- **Demonstrar** componentes acessíveis em funcionamento
- **Informar** sobre boas práticas de UX inclusiva
- **Cumprir** diretrizes WCAG 2.1 nível AA
- **Sensibilizar** desenvolvedores sobre inclusão digital

## ✨ Características Principais

### 1. **HTML Semântico**
- Uso correto de tags semânticas (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`)
- Estrutura lógica de cabeçalhos (`<h1>` até `<h6>`)
- Links com skip para conteúdo principal
- Metadados apropriados

### 2. **Navegação Acessível**
- ✅ Navegação completa por teclado
- ✅ Menu responsivo com ARIA
- ✅ Foco visível e rastreável
- ✅ Teclas de atalho (setas, Tab, Escape)
- ✅ Links descritivos

### 3. **Formulários Inclusivos**
- Labels associados a inputs (`for="/id"`)
- Validação com mensagens de erro acessíveis
- ARIA attributes (`aria-required`, `aria-describedby`)
- Feedback por som e texto
- Indicação visual de campos obrigatórios

### 4. **Componentes Acessíveis**
- **Acordeão**: ARIA expanded/controls
- **Abas**: Navegação por setas do teclado
- **Formulário**: Validação e feedback em tempo real
- **Progresso**: Atualização com live regions
- **Checklist**: Contador dinâmico com aria-live

### 5. **Cores e Contraste**
- ✅ Contraste texto/fundo **4.5:1** (WCAG AA)
- ✅ Não apenas cores para comunicar informação
- ✅ Suporte a modo escuro (adaptável)
- ✅ Diferenciação visual sem depender de cor

### 6. **Tipografia**
- Tamanho base: **16px** (legível)
- Espaçamento de linha: **1.6** (confortável)
- Fonte clara e sem serifa (`Segoe UI`, `Tahoma`, fallbacks)
- Responsividade de tamanho em mobile

### 7. **Responsividade**
- Mobile-first design
- Grid fluída
- Viewport meta tag
- Testes em múltiplas resoluções

## 📋 Checklist de Acessibilidade WCAG

### Perceptível
- [x] Conteúdo de texto é legível
- [x] Imagens têm alt text (quando aplicável)
- [x] Cores têm contraste adequado
- [x] Não pisca/anima por mais de 3 segundos
- [x] Melhor com zoom 200%

### Operável
- [x] Navegação completa por teclado
- [x] Foco visível em todos os elementos
- [x] Sem armadilhas de teclado
- [x] Navegação por setas em componentes
- [x] Links e botões têm mínimo 44x44px

### Compreensível
- [x] Linguagem clara e simples
- [x] Estrutura previsível
- [x] Labels em formulários
- [x] Mensagens de erro descritivas
- [x] Ajuda disponível

### Robusto
- [x] HTML válido
- [x] ARIA attributes corretos
- [x] Compatível com leitores de tela
- [x] Sem alertas de validação
- [x] Código semântico

## 🚀 Funcionalidades

### Menu Mobile
- Botão hamburger acessível
- Aria-expanded para estado
- Fecha com ESC
- Navegação por teclado

### Formulário com Validação
```html
<input type="email" id="email" required 
       aria-required="true" 
       aria-describedby="email-erro">
<span id="email-erro" role="alert"></span>
```

### Acordeão (Apenas um painel por vez)
```html
<button aria-expanded="false" aria-controls="panel-1">
  Título
</button>
<div id="panel-1" hidden role="region"></div>
```

### Abas com Navegação por Setas
```javascript
// ArrowLeft/Right para navegar
// Enter para ativar
// Tab para elementos dentro da aba
```

### Indicador de Progresso com Live Region
```html
<progress id="progresso" max="100" value="0" 
          aria-label="Carregamento"></progress>
<div aria-live="polite" aria-atomic="true"></div>
```

### Checklist Dinâmico
- Contador real-time
- Feedback ao completar tudo
- Som de sucesso

## 🛠️ Tecnologias Utilizadas

- **HTML5** - Semântica moderna
- **CSS3** - Grid, Flexbox, variáveis CSS
- **JavaScript (Vanilla)** - Sem frameworks
- **ARIA** - Atributos de acessibilidade
- **Web Audio API** - Feedback sonoro

## 📖 Como Usar

### 1. Abrir no Navegador
```bash
# Abra o arquivo index.html em qualquer navegador
open index.html  # macOS
xdg-open index.html  # Linux
start index.html  # Windows
```

### 2. Testar Acessibilidade

#### Com Teclado
- **Tab** - Próximo elemento focável
- **Shift + Tab** - Elemento anterior
- **Enter** - Ativar botão/link
- **Setas** - Navegar em componentes
- **Escape** - Fechar menus

#### Com Leitor de Tela
- **NVDA** (Windows) - Gratuito
- **JAWS** (Windows) - Pago
- **VoiceOver** (macOS) - Integrado
- **TalkBack** (Android) - Integrado

#### Ferramentas Automáticas
```javascript
// No console do navegador:
// Faz teste básico de acessibilidade
// Veja erros no console (F12)
```

**Extensões do Chrome:**
- Lighthouse (DevTools)
- WAVE - Web Accessibility Evaluation Tool
- Axe DevTools
- Color Contrast Analyzer

### 3. Estrutura de Arquivos
```
UX-e-acessibilidade-2b/
├── index.html       (Estrutura semântica)
├── style.css        (Estilos acessíveis)
├── script.js        (Funcionalidades)
└── README.md        (Este arquivo)
```

## 📚 Recursos Educativos

### Documentação Oficial
- [W3C Web Accessibility Initiative (WAI)](https://www.w3.org/WAI/)
- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [ARIA Authoring Practices](https://www.w3.org/WAI/ARIA/apg/)

### Recursos em Português
- [Portal da Acessibilidade](https://www.acessibilidade.net/)
- [LGPD e Acessibilidade](https://www.gov.br/cidadania/pt-br/acesso-a-informacao/perguntas-frequentes/lgpd-acessibilidade)

### Ferramentas
- [Lighthouse](https://developers.google.com/web/tools/lighthouse)
- [WAVE Browser Extension](https://wave.webaim.org/extension/)
- [Axe DevTools](https://www.deque.com/axe/devtools/)
- [Color Contrast Analyzer](https://www.tpgi.com/color-contrast-checker/)

## 🎓 Conceitos-Chave

### Princípios POUR
1. **Perceptível** - Conteúdo visível/identificável
2. **Operável** - Navegável por qualquer método
3. **Compreensível** - Texto claro, estrutura previsível
4. **Robusto** - Compatível com tecnologias assistivas

### Usuários Beneficiados
- Pessoas com deficiência visual (cegueira, baixa visão)
- Pessoas com deficiência auditiva
- Pessoas com mobilidade reduzida
- Pessoas com dislexia ou TDAH
- Usuários com conexões lentas
- Usuários de dispositivos móveis
- **Todos nós ocasionalmente** (luz solar, braço quebrado, etc)

### Benefícios de Acessibilidade
- 🔍 Melhor SEO
- 📱 Melhor mobile
- ⚡ Código mais limpo
- 👥 Maior alcance
- ⚖️ Conformidade legal

## 🧪 Testes Realizados

- ✅ Navegação completa por teclado
- ✅ Validação com WAVE
- ✅ Contraste de cores (Lighthouse)
- ✅ Estrutura semântica
- ✅ ARIA attributes
- ✅ Responsividade
- ✅ Compatibilidade de navegadores

## 🤝 Contribuindo

Sugestões e melhorias são bem-vindas! Você pode:
1. Reportar problemas de acessibilidade
2. Sugerir novos componentes
3. Melhorar documentação
4. Adicionar exemplos práticos

## 📝 Licença

Este projeto é de código aberto e está disponível para fins educacionais.

## 🙏 Agradecimentos

Desenvolvido com ♥ para promover **inclusão digital** e conscientização sobre a importância de interfaces acessíveis.

---

**Desenvolvendo interfaces que funcionam para TODOS** 🌍♿🚀