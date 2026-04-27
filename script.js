// Variáveis Globais
let score = 0;

// 1. Personalização do Nome
const btnStart = document.getElementById('btn-start');
btnStart.addEventListener('click', () => {
    const nome = document.getElementById('user-name-input').value;
    const saudacao = document.getElementById('welcome-text');
    if(nome.trim() !== "") {
        saudacao.innerText = `Bem-vindo ao Futuro, ${nome}!`;
        document.querySelector('.user-interaction').style.display = 'none';
    }
});

// 2. Simulador (Manipulação de DOM)
const scoreDisplay = document.getElementById('score-counter');
const statusText = document.getElementById('farm-status');
const actionButtons = document.querySelectorAll('.btn-action');

actionButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        const pontos = parseInt(btn.getAttribute('data-points'));
        score += pontos;
        scoreDisplay.innerText = score;
        
        if(score >= 50) {
            statusText.innerText = "Status: Fazenda Sustentável Nota 10!";
            statusText.style.color = "green";
        } else {
            statusText.innerText = "Status: Melhorando o ambiente...";
        }
    });
});

// 3. Dark Mode
const themeBtn = document.getElementById('theme-toggle');
themeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    const icon = document.getElementById('theme-icon');
    icon.innerText = document.body.classList.contains('dark-mode') ? '☀️' : '🌙';
});

// 4. Formulário
document.getElementById('contact-form').addEventListener('submit', (e) => {
    e.preventDefault();
    document.getElementById('form-feedback').classList.remove('hidden');
});
