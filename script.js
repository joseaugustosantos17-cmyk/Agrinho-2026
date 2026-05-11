// ============================
// AGROFORTE 2026 - SISTEMA PREMIUM
// ============================

// ESTADO GLOBAL
let totalScore = Number(localStorage.getItem('ecoScore')) || 0;

// ELEMENTOS
const btnStart = document.getElementById('btn-start');
const nameInput = document.getElementById('user-name-input');
const welcomeTitle = document.getElementById('welcome-text');

const scoreDisplay = document.getElementById('score-counter');
const farmStatus = document.getElementById('farm-status');
const actionButtons = document.querySelectorAll('.btn-action');

const themeBtn = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');

// ============================
// EFEITO DE DIGITAÇÃO
// ============================

const text = "O Futuro do Agro é Verde e Digital.";
let index = 0;

function typeWriter() {

    if(index < text.length){

        welcomeTitle.innerHTML += text.charAt(index);

        index++;

        setTimeout(typeWriter, 60);
    }
}

welcomeTitle.innerHTML = "";
typeWriter();

// ============================
// PERSONALIZAÇÃO COM ANIMAÇÃO
// ============================

btnStart.addEventListener('click', () => {

    const nome = nameInput.value.trim();

    if(nome !== ""){

        localStorage.setItem('agroUser', nome);

        welcomeTitle.innerHTML = `
        🌱 Líder do Futuro: ${nome}
        <br>
        <span class="sub-title">
        Sua jornada sustentável começou!
        </span>
        `;

        const interaction = document.querySelector('.user-interaction');

        interaction.style.transform = "translateY(-20px)";
        interaction.style.opacity = "0";

        setTimeout(() => {
            interaction.style.display = "none";
        }, 600);

        playSound('success');

    }else{

        shakeInput();

    }
});

// ============================
// SHAKE INPUT
// ============================

function shakeInput(){

    nameInput.classList.add('shake');

    setTimeout(() => {
        nameInput.classList.remove('shake');
    }, 500);

    playSound('error');
}

// ============================
// SIMULADOR PREMIUM
// ============================

scoreDisplay.innerText = totalScore;

actionButtons.forEach(button => {

    button.addEventListener('click', () => {

        const points = parseInt(button.dataset.points);
        const msg = button.dataset.msg;

        totalScore += points;

        localStorage.setItem('ecoScore', totalScore);

        animateCounter(scoreDisplay, totalScore);

        farmStatus.innerHTML = `
        ✅ ${msg}
        `;

        farmStatus.classList.add('pulse');

        setTimeout(() => {
            farmStatus.classList.remove('pulse');
        }, 800);

        // PARTÍCULAS
        createParticles();

        // SOM
        playSound('click');

        // EVOLUÇÃO
        updateFarmLevel();

    });
});

// ============================
// CONTADOR ANIMADO
// ============================

function animateCounter(element, target){

    let current = Number(element.innerText);

    const increment = Math.ceil((target - current) / 15);

    const timer = setInterval(() => {

        current += increment;

        if(current >= target){

            current = target;

            clearInterval(timer);
        }

        element.innerText = current;

    }, 30);
}

// ============================
// STATUS EVOLUTIVO
// ============================

function updateFarmLevel(){

    if(totalScore >= 100){

        farmStatus.innerHTML = `
        🏆 Ecossistema em Equilíbrio Perfeito!
        `;

        farmStatus.style.color = "#00ff88";

        launchConfetti();

    }

    else if(totalScore >= 60){

        farmStatus.innerHTML = `
        🌎 Fazenda Inteligente em Expansão
        `;

        farmStatus.style.color = "#f1c40f";
    }

    else if(totalScore >= 30){

        farmStatus.innerHTML = `
        🌱 Produção Sustentável Ativada
        `;

        farmStatus.style.color = "#2ecc71";
    }
}

// ============================
// DARK MODE PREMIUM
// ============================

themeBtn.addEventListener('click', () => {

    document.body.classList.toggle('dark-mode');

    const isDark = document.body.classList.contains('dark-mode');

    themeIcon.innerHTML = isDark ? '☀️' : '🌙';

    localStorage.setItem('theme', isDark ? 'dark' : 'light');
});

// CARREGA TEMA
window.addEventListener('load', () => {

    const savedTheme = localStorage.getItem('theme');

    if(savedTheme === 'dark'){

        document.body.classList.add('dark-mode');

        themeIcon.innerHTML = '☀️';
    }
});

// ============================
// FEEDBACK FORM
// ============================

document.getElementById('contact-form')
.addEventListener('submit', function(e){

    e.preventDefault();

    const feedback = document.getElementById('form-feedback');

    feedback.classList.remove('hidden');

    feedback.innerHTML = `
    🚀 Sua proposta sustentável foi enviada!
    `;

    feedback.style.animation = "pop 0.5s ease";

    playSound('success');

    this.reset();

    setTimeout(() => {

        feedback.classList.add('hidden');

    }, 4000);
});

// ============================
// PARTÍCULAS
// ============================

function createParticles(){

    for(let i = 0; i < 15; i++){

        const particle = document.createElement('span');

        particle.classList.add('particle');

        document.body.appendChild(particle);

        particle.style.left = Math.random() * window.innerWidth + 'px';

        particle.style.top = window.innerHeight - 100 + 'px';

        particle.style.animationDuration =
        Math.random() * 3 + 2 + 's';

        setTimeout(() => {
            particle.remove();
        }, 5000);
    }
}

// ============================
// CONFETTI
// ============================

function launchConfetti(){

    confetti({
        particleCount: 150,
        spread: 120,
        origin: { y: 0.6 }
    });
}

// ============================
// SONS
// ============================

function playSound(type){

    let audio;

    if(type === 'click'){
        audio = new Audio('https://assets.mixkit.co/active_storage/sfx/2571/2571-preview.mp3');
    }

    if(type === 'success'){
        audio = new Audio('https://assets.mixkit.co/active_storage/sfx/2013/2013-preview.mp3');
    }

    if(type === 'error'){
        audio = new Audio('https://assets.mixkit.co/active_storage/sfx/2955/2955-preview.mp3');
    }

    audio.volume = 0.3;

    audio.play();
}
