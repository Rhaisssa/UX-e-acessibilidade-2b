// ============================================
// Utilidades
// ============================================
const log = console.log;

/**
 * Mostra notificação para leitores de tela
 */
function anunciaPara(elemento, mensagem) {
    const statusDiv = document.getElementById(elemento);
    if (statusDiv) {
        statusDiv.textContent = mensagem;
    }
}

/**
 * Emite som de feedback
 */
function emiteSom(tipo = 'sucesso') {
    // Som usando Web Audio API
    try {
        const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        
        osc.connect(gain);
        gain.connect(audioCtx.destination);
        
        if (tipo === 'sucesso') {
            osc.frequency.value = 800;
            gain.gain.setValueAtTime(0.1, audioCtx.currentTime);
        } else if (tipo === 'erro') {
            osc.frequency.value = 400;
            gain.gain.setValueAtTime(0.1, audioCtx.currentTime);
        }
        
        gain.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.5);
        osc.start(audioCtx.currentTime);
        osc.stop(audioCtx.currentTime + 0.5);
    } catch (e) {
        // Fallback: apenas log no console
        log('Som de feedback:', tipo);
    }
}

// ============================================
// Menu Mobile
// ============================================
function setupMenu() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.getElementById('menu-items');
    
    if (!menuToggle || !navMenu) return;
    
    menuToggle.addEventListener('click', () => {
        const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
        menuToggle.setAttribute('aria-expanded', !isExpanded);
        
        if (isExpanded) {
            navMenu.classList.add('hide');
        } else {
            navMenu.classList.remove('hide');
        }
    });
    
    // Fecha menu ao clicar em um link
    const links = navMenu.querySelectorAll('a');
    links.forEach(link => {
        link.addEventListener('click', () => {
            menuToggle.setAttribute('aria-expanded', 'false');
            navMenu.classList.add('hide');
        });
    });
}

// ============================================
// Validação de Formulário
// ============================================
function setupFormValidation() {
    const form = document.getElementById('formulario-exemplo');
    if (!form) return;
    
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Limpa erros anteriores
        document.querySelectorAll('.erro').forEach(el => el.textContent = '');
        
        let isValid = true;
        
        // Validação de Nome
        const nome = document.getElementById('nome');
        if (!nome.value.trim()) {
            document.getElementById('nome-erro').textContent = 'Por favor, digite seu nome.';
            isValid = false;
            nome.focus();
        }
        
        // Validação de Email
        const email = document.getElementById('email');
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email.value)) {
            document.getElementById('email-erro').textContent = 'Por favor, digite um email válido.';
            isValid = false;
            if (isValid !== false) email.focus();
        }
        
        // Validação de Mensagem
        const mensagem = document.getElementById('mensagem');
        if (!mensagem.value.trim()) {
            document.getElementById('mensagem-erro').textContent = 'Por favor, digite uma mensagem.';
            isValid = false;
            if (isValid !== false) mensagem.focus();
        }
        
        if (isValid) {
            emiteSom('sucesso');
            anunciaPara('status-form', 'Mensagem enviada com sucesso! Obrigado por sua contribuição.');
            form.reset();
            
            // Simula envio
            log('Dados do formulário:', {
                nome: nome.value,
                email: email.value,
                mensagem: mensagem.value
            });
        } else {
            emiteSom('erro');
            anunciaPara('status-form', 'Por favor, corrija os erros no formulário.');
        }
    });
}

// ============================================
// Acordeão Acessível
// ============================================
function setupAccordion() {
    const buttons = document.querySelectorAll('.accordion-btn');
    
    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            const isExpanded = btn.getAttribute('aria-expanded') === 'true';
            const panelId = btn.getAttribute('aria-controls');
            const panel = document.getElementById(panelId);
            
            // Fecha outros painéis (apenas um aberto por vez)
            buttons.forEach(otherBtn => {
                if (otherBtn !== btn) {
                    otherBtn.setAttribute('aria-expanded', 'false');
                    const otherPanelId = otherBtn.getAttribute('aria-controls');
                    const otherPanel = document.getElementById(otherPanelId);
                    if (otherPanel) {
                        otherPanel.hidden = true;
                    }
                }
            });
            
            // Toggle do painel atual
            btn.setAttribute('aria-expanded', !isExpanded);
            if (panel) {
                panel.hidden = isExpanded;
            }
        });
        
        // Suporte a teclado
        btn.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                btn.click();
            }
        });
    });
}

// ============================================
// Abas Acessíveis
// ============================================
function setupTabs() {
    const tabButtons = document.querySelectorAll('[role="tab"]');
    
    tabButtons.forEach((button, index) => {
        button.addEventListener('click', () => {
            selectTab(button);
        });
        
        // Navegação por teclado
        button.addEventListener('keydown', (e) => {
            let newButton;
            
            if (e.key === 'ArrowLeft') {
                e.preventDefault();
                newButton = index === 0 ? tabButtons[tabButtons.length - 1] : tabButtons[index - 1];
            } else if (e.key === 'ArrowRight') {
                e.preventDefault();
                newButton = index === tabButtons.length - 1 ? tabButtons[0] : tabButtons[index + 1];
            }
            
            if (newButton) {
                selectTab(newButton);
                newButton.focus();
            }
        });
    });
}

function selectTab(button) {
    // Remove seleção de todas as abas
    document.querySelectorAll('[role="tab"]').forEach(tab => {
        tab.setAttribute('aria-selected', 'false');
    });
    
    // Esconde todos os painéis
    document.querySelectorAll('[role="tabpanel"]').forEach(panel => {
        panel.hidden = true;
    });
    
    // Seleciona a aba clicada
    button.setAttribute('aria-selected', 'true');
    
    // Mostra o painel correspondente
    const panelId = button.getAttribute('aria-controls');
    const panel = document.getElementById(panelId);
    if (panel) {
        panel.hidden = false;
    }
}

// ============================================
// Indicador de Progresso
// ============================================
function setupProgress() {
    const btn = document.getElementById('btn-progresso');
    const progress = document.getElementById('progresso');
    const valorProgresso = document.getElementById('valor-progresso');
    
    if (!btn || !progress) return;
    
    btn.addEventListener('click', () => {
        btn.disabled = true;
        btn.textContent = 'Carregando...';
        
        let valor = 0;
        const intervalo = setInterval(() => {
            valor += Math.random() * 30;
            if (valor >= 100) {
                valor = 100;
                clearInterval(intervalo);
                btn.disabled = false;
                btn.textContent = 'Concluído ✓';
                emiteSom('sucesso');
                anunciaPara('progresso', 'Carregamento concluído com sucesso!');
                
                // Reset após 2 segundos
                setTimeout(() => {
                    btn.textContent = 'Iniciar';
                    progress.value = 0;
                    valorProgresso.textContent = '0';
                }, 2000);
            }
            
            progress.value = valor;
            valorProgresso.textContent = Math.round(valor);
        }, 400);
    });
}

// ============================================
// Checklist de Acessibilidade
// ============================================
function setupChecklist() {
    const checkboxes = document.querySelectorAll('#checklist input[type="checkbox"]');
    const contador = document.getElementById('contador');
    
    if (checkboxes.length === 0) return;
    
    function atualizaContador() {
        const checked = document.querySelectorAll('#checklist input[type="checkbox"]:checked').length;
        contador.textContent = checked;
        
        if (checked === checkboxes.length) {
            anunciaPara('progresso', `Parabéns! Você completou todos os ${checkboxes.length} itens da checklist!`);
            emiteSom('sucesso');
        }
    }
    
    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', atualizaContador);
    });
}

// ============================================
// Teste de Acessibilidade
// ============================================
function testaAcessibilidade() {
    const issues = [];
    
    // Verifica images sem alt
    document.querySelectorAll('img').forEach(img => {
        if (!img.alt) {
            issues.push(`⚠️ Imagem sem alt text em: ${img.src}`);
        }
    });
    
    // Verifica inputs sem label
    document.querySelectorAll('input, textarea').forEach(input => {
        if (!input.labels || input.labels.length === 0) {
            if (!input.getAttribute('aria-label')) {
                issues.push(`⚠️ Input sem label associada: ${input.id || input.name}`);
            }
        }
    });
    
    // Verifica contraste (simplificado)
    log('🧪 Teste de Acessibilidade:');
    if (issues.length > 0) {
        issues.forEach(issue => log(issue));
    } else {
        log('✅ Nenhum problema óbvio detectado!');
    }
    
    return issues;
}

// ============================================
// Inicialização
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    log('🚀 Inicializando projeto de UX e Acessibilidade...');
    
    setupMenu();
    setupFormValidation();
    setupAccordion();
    setupTabs();
    setupProgress();
    setupChecklist();
    
    // Testa acessibilidade
    testaAcessibilidade();
    
    log('✅ Projeto inicializado com sucesso!');
});

// ============================================
// Tecla ESC fecha menus
// ============================================
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        const menuToggle = document.querySelector('.menu-toggle');
        const navMenu = document.getElementById('menu-items');
        
        if (menuToggle && navMenu) {
            menuToggle.setAttribute('aria-expanded', 'false');
            navMenu.classList.add('hide');
        }
    }
});