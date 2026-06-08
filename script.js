/* =========================
   🌱 SISTEMA CAMPEÃO AGRINHO
========================= */

let pontos = parseInt(localStorage.getItem("pontos")) || 0;
let arvores = parseInt(localStorage.getItem("arvores")) || 0;

/* SALVAR NOME */
const nomeSalvo = localStorage.getItem("nome");
if (nomeSalvo) {
    document.getElementById("saudacao").textContent =
        `Bem-vindo de volta, ${nomeSalvo} 🌱`;
}

/* ENTRADA DO USUÁRIO */
document.getElementById("btn-saudacao").addEventListener("click", () => {
    const nome = document.getElementById("nome").value.trim();
    if (!nome) return;

    localStorage.setItem("nome", nome);

    pontos += 10;
    atualizarPontos();

    document.getElementById("saudacao").textContent =
        `Olá, ${nome}! Você começou sua jornada sustentável 🌱`;
});

/* 🌳 PLANTAR ÁRVORE VIRTUAL */
const btnArvore = document.createElement("button");
btnArvore.textContent = "🌳 Plantar Árvore";
btnArvore.className = "btn btn-primary";
document.querySelector(".controls-wrap").appendChild(btnArvore);

btnArvore.addEventListener("click", () => {
    arvores++;
    pontos += 5;

    localStorage.setItem("arvores", arvores);

    alert(`Você plantou ${arvores} árvores virtuais 🌳`);

    atualizarPontos();
});

/* 🏆 SISTEMA DE PONTOS */
function atualizarPontos() {
    localStorage.setItem("pontos", pontos);

    let status =
        pontos < 30 ? "🌱 Iniciante sustentável" :
        pontos < 70 ? "🌿 Agricultor consciente" :
        "🏆 Mestre da sustentabilidade";

    document.getElementById("clima").textContent =
        `${status} | Pontos: ${pontos}`;
}

/* 🎮 MISSÃO DIÁRIA */
const missoes = [
    "Reduza o uso de água hoje 💧",
    "Plante uma árvore virtual 🌳",
    "Aprenda uma prática sustentável 🌱",
    "Evite desperdício de recursos ♻️"
];

const missao = document.createElement("div");
missao.style.marginTop = "15px";
missao.style.color = "white";
missao.style.fontSize = "0.9rem";
missao.textContent =
    "🎯 Missão do dia: " + missoes[Math.floor(Math.random() * missoes.length)];

document.querySelector(".hero-content").appendChild(missao);

/* 🎓 QUIZ AGRÍCOLA */
const quizBtn = document.createElement("button");
quizBtn.textContent = "🎓 Quiz do Agro";
quizBtn.className = "btn btn-ghost";
document.querySelector(".controls-wrap").appendChild(quizBtn);

quizBtn.addEventListener("click", () => {
    const pergunta = "Qual prática ajuda a preservar o solo?\n\nA) Queimada\nB) Rotação de culturas\nC) Desmatamento";

    const resposta = prompt(pergunta);

    if (resposta?.toLowerCase() === "b") {
        pontos += 20;
        alert("Correto! 🌱 Você ganhou 20 pontos");
    } else {
        alert("Resposta incorreta. A correta é B.");
    }

    atualizarPontos();
});

/* 🧠 FEEDBACK INTELIGENTE FINAL */
setTimeout(() => {
    if (pontos > 80) {
        alert("🏆 Excelente! Seu impacto ambiental está muito positivo!");
    } else if (pontos > 40) {
        alert("🌿 Bom trabalho! Mas ainda dá para melhorar.");
    } else {
        alert("🌱 Comece a praticar sustentabilidade para evoluir!");
    }
}, 4000);
