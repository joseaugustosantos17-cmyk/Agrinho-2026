// Espera o DOM carregar
document.addEventListener('DOMContentLoaded', () => {

    // --- VARIÁREIS E SELETORES ---
    const btnTema = document.getElementById('btn-tema');
    const btnFonte = document.getElementById('btn-fonte');
    const formRoca = document.getElementById('form-roca');
    const feedbackArea = document.getElementById('feedback-usuario');
    const textoFeedback = document.getElementById('texto-feedback');
    const btnLimpar = document.getElementById('btn-limpar');

    let tamanhoAtual = 16; // Variável para processar o tamanho da fonte

    // --- MODO ESCURO (NOITE NA ROÇA) ---
    btnTema.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        // Altera o texto do elemento dinamicamente
        btnTema.textContent = document.body.classList.contains('dark-mode') 
            ? '☀️ Dia na Roça' 
            : '🌙 Noite na Roça';
    });

    // --- AUMENTAR FONTE (MELHORIA DE UX) ---
    btnFonte.addEventListener('click', () => {
        tamanhoAtual += 2;
        if (tamanhoAtual > 24) tamanhoAtual = 16; // Reinicia se ficar muito grande
        document.documentElement.style.setProperty('--tamanho-base', tamanhoAtual + 'px');
    });

    // --- MANIPULAÇÃO DO FORMULÁRIO ---
    formRoca.addEventListener('submit', (e) => {
        e.preventDefault(); // Evita erro de recarregamento
        
        const nome = document.getElementById('nome-usuario').value;
        
        // Processa a informação antes de exibir
        const saudacao = `Êpa, ${nome}! Que alegria ter você por aqui. 
        O povo da roça agradece o interesse em nossas raízes. 
        Em breve, enviaremos um 'ofertório' de sementes e saberes para você!`;

        // Altera o DOM de forma funcional
        textoFeedback.textContent = saudacao;
        formRoca.classList.add('escondido');
        feedbackArea.classList.remove('escondido');
    });

    // --- BOTÃO PARA VOLTAR (REVERTER DOM) ---
    btnLimpar.addEventListener('click', () => {
        feedbackArea.classList.add('escondido');
        formRoca.classList.remove('escondido');
        formRoca.reset();
    });

});
