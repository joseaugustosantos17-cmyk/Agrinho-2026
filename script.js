// Seleção de elementos do DOM
const btnGreet = document.getElementById('btn-greet');
const inputName = document.getElementById('user-name');
const welcomeText = document.getElementById('welcome-text');
const themeToggle = document.getElementById('theme-toggle');
const contactForm = document.getElementById('contact-form');
const feedback = document.getElementById('form-feedback');

// 1. Função para personalizar saudação (Uso de variáveis e Manipulação de Texto)
btnGreet.addEventListener('click', () => {
    const name = inputName.value.trim();
    if (name) {
        welcomeText.innerText = `Olá, ${name}! Vamos cultivar o amanhã?`;
        inputName.style.display = 'none';
        btnGreet.innerText = 'Nome Registrado!';
    } else {
        alert("Por favor, insira um nome para personalizar.");
    }
});

// 2. Função para Alternar Modo Escuro (Melhoria de UX)
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    // Armazena a preferência no console ou variável lógica
    const isDark = document.body.classList.contains('dark-mode');
    console.log(`Modo escuro ativado: ${isDark}`);
});

// 3. Validação de Formulário Semântico
contactForm.addEventListener('submit', (e) => {
    e.preventDefault(); // Evita o recarregamento da página
    const emailValue = document.getElementById('email').value;
    
    // Processamento simples antes de exibir
    if(emailValue.includes('@')) {
        feedback.innerText = "Obrigado pelo interesse! Nossa equipe sustentável entrará em contato.";
        feedback.classList.remove('hidden');
        feedback.style.color = "var(--primary-green)";
        contactForm.reset();
    }
});
