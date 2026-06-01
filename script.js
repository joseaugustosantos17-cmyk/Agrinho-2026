// 1. Manipulação do DOM: Personalizar Saudação
function personalizarSaudacao() {
    const nome = document.getElementById('user-name').value;
    const display = document.getElementById('welcome-text');
    
    if (nome.trim() !== "") {
        // Armazena em variável e processa antes de exibir
        let mensagem = `Olá, ${nome}! Explore nossa Roça.`;
        display.innerText = mensagem;
        display.style.color = "#4ade80";
    } else {
        alert("Por favor, digite seu nome!");
    }
}

// 2. Modo Escuro (Melhoria de UX)
const btnTheme = document.getElementById('theme-toggle');
btnTheme.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    
    // Altera o texto do botão dinamicamente
    if(document.body.classList.contains('dark-mode')) {
        btnTheme.textContent = "Modo Claro";
    } else {
        btnTheme.textContent = "Modo Escuro";
    }
});

// 3. Feedback do Formulário
const form = document.getElementById('agro-form');
const feedback = document.getElementById('form-feedback');

form.addEventListener('submit', (e) => {
    e.preventDefault(); // Impede o recarregamento da página
    
    // Esconde o formulário e mostra mensagem de sucesso
    form.classList.add('hidden');
    feedback.classList.remove('hidden');
    feedback.style.textAlign = "center";
    feedback.style.padding = "20px";
    feedback.style.fontSize = "1.2rem";
});
