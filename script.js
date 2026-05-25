// Dados do Quiz
const perguntas = [
    {
        q: "Qual técnica evita a erosão do solo?",
        options: ["Queimada", "Plantio Direto", "Desmatamento"],
        answer: 1
    },
    {
        q: "Como drones ajudam o meio ambiente?",
        options: ["Espantando pássaros", "Aplicando insumos só onde precisa", "Tirando fotos para redes sociais"],
        answer: 1
    }
];

let perguntaAtual = 0;

function carregarQuiz() {
    const qArea = document.getElementById('pergunta');
    const aArea = document.getElementById('alternativas');
    const item = perguntas[perguntaAtual];

    qArea.innerText = item.q;
    aArea.innerHTML = ''; // Limpa botões antigos

    item.options.forEach((opt, index) => {
        const btn = document.createElement('button');
        btn.innerText = opt;
        btn.onclick = () => verificarResposta(index);
        aArea.appendChild(btn);
    });
}

function verificarResposta(index) {
    const feedback = document.getElementById('quiz-feedback');
    feedback.classList.remove('hidden');
    
    if(index === perguntas[perguntaAtual].answer) {
        feedback.innerText = "✅ Correto! Você entende de sustentabilidade.";
        feedback.style.color = "green";
    } else {
        feedback.innerText = "❌ Ops! Tente novamente.";
        feedback.style.color = "red";
    }
    
    // Avança após 2 segundos
    setTimeout(() => {
        perguntaAtual = (perguntaAtual + 1) % perguntas.length;
        feedback.classList.add('hidden');
        carregarQuiz();
    }, 2000);
}

// Interação do Cenário
document.querySelectorAll('.ponto-interesse').forEach(ponto => {
    ponto.addEventListener('click', () => {
        const info = ponto.getAttribute('data-info');
        document.getElementById('info-text').innerHTML = `<strong>Dica:</strong> ${info}`;
    });
});

// Iniciar ao carregar
window.onload = carregarQuiz;
