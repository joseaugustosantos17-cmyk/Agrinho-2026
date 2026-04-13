// Armazenamento de estado da aplicação
let score = 0;
const userNameDisplay = document.getElementById('welcome-text');

// 1. Função para personalizar saudação (Manipulação de Texto e Variáveis)
document.getElementById('btn-start').addEventListener('click', () => {
    const inputName = document.getElementById('user-name-input').value;
    if (inputName.trim() !== "") {
        userNameDisplay.innerText = `Olá, ${inputName}! Vamos cultivar o futuro?`;
        // Esconde a área de input após o uso
        document.querySelector('.user-interaction').style.display = 'none';
    }
});

// 2. Simulador de Sustentabilidade (Lógica e Atualização de Tela)
const scoreElement = document.getElementById('score-counter');
const statusText = document.getElementById('farm-status');

const updateScore = (points, action) => {
    score += points;
    scoreElement.innerText = score;
    
    // Altera o status com base na pontuação
    if (score > 50) {
        statusText.innerText = "Fazenda de Elite Sustentável!";
        statusText.style.color = "green";
    } else {
        statusText.innerText = `Ação realizada: ${action}`;
    }
};

// Eventos dos botões de ação
document.querySelectorAll('.btn-action').forEach(button => {
    button.addEventListener('click', (e) => {
        const action = e.target.getAttribute('data-action');
        updateScore(10, action);
    });
});

// 3. Função Modo Escuro (Melhoria de Experiência do Usuário)
const themeBtn = document.getElementById('theme-toggle');
themeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    const icon = document.getElementById('theme-icon');
    icon.innerText = document.body.classList.contains('dark-mode') ? '☀️' : '🌙';
});

// 4. Manipulação de Formulário (Prevenção de erro e feedback visual)
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault(); // Evita o recarregamento da página
    const feedback = document.getElementById('form-feedback');
    feedback.classList.remove('hidden'); // Mostra a div de sucesso
    this.reset(); // Limpa o formulário
});
