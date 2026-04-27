// Estado do Sistema
let totalScore = 0;

// 1. Saudação Customizada com Armazenamento Simples
const btnStart = document.getElementById('btn-start');
const nameInput = document.getElementById('user-name-input');
const welcomeTitle = document.getElementById('welcome-text');

btnStart.addEventListener('click', () => {
    const nome = nameInput.value.trim();
    if (nome !== "") {
        welcomeTitle.innerHTML = `Líder do Futuro: ${nome}<br><span style="font-size: 1.5rem">Sua jornada sustentável começou!</span>`;
        document.querySelector('.user-interaction').style.opacity = '0';
        setTimeout(() => {
            document.querySelector('.user-interaction').style.display = 'none';
        }, 500);
    } else {
        alert("Por favor, insira um nome para começar.");
    }
});

// 2. Simulador de Impacto (Manipulação de DOM Funcional)
const scoreDisplay = document.getElementById('score-counter');
const farmStatus = document.getElementById('farm-status');
const actionButtons = document.querySelectorAll('.btn-action');

actionButtons.forEach(button => {
    button.addEventListener('click', () => {
        const points = parseInt(button.getAttribute('data-points'));
        const msg = button.getAttribute('data-msg');
        
        totalScore += points;
        
        // Atualiza a tela com animação simples
        scoreDisplay.innerText = totalScore;
        scoreDisplay.style.transform = "scale(1.2)";
        setTimeout(() => scoreDisplay.style.transform = "scale(1)", 200);
        
        farmStatus.innerText = `Ação: ${msg}`;
        farmStatus.style.color = "var(--secondary)";

        // Lógica de evolução do status
        if (totalScore >= 100) {
            farmStatus.innerText = "Status: Ecossistema em Equilíbrio Perfeito! 🏆";
            farmStatus.style.color = "#27ae60";
            farmStatus.style.fontWeight = "bold";
        } else if (totalScore >= 50) {
            farmStatus.innerText = "Status: Fazenda em Transição Verde...";
            farmStatus.style.color = "#f39c12";
        }
    });
});

// 3. Dark Mode Alternativo
const themeBtn = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');

themeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    const isDark = document.body.classList.contains('dark-mode');
    themeIcon.innerText = isDark ? '☀️' : '🌙';
});

// 4. Feedback do Formulário
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const feedback = document.getElementById('form-feedback');
    feedback.classList.remove('hidden');
    this.reset();
});
