// ===============================
// VARIÁVEIS GLOBAIS
// ===============================
let tamanhoFonte = 16;
let usuario = "";

// ===============================
// SAUDAÇÃO PERSONALIZADA
// ===============================
const btnSaudacao = document.getElementById("btn-saudacao");

btnSaudacao.addEventListener("click", () => {
    usuario = document.getElementById("nome").value;

    if (usuario.trim() === "") {
        alert("Digite seu nome!");
        return;
    }

    document.getElementById("saudacao").textContent =
        "Olá, " + usuario + "! Bem-vindo ao Agro Sustentável 🌱";
});

// ===============================
// TEMA ESCURO / CLARO
// ===============================
document.getElementById("theme-toggle").addEventListener("click", () => {
    document.body.classList.toggle("dark");
});

// ===============================
// TAMANHO DA FONTE
// ===============================
document.getElementById("font-up").addEventListener("click", () => {
    if (tamanhoFonte < 24) {
        tamanhoFonte++;
        document.body.style.fontSize = tamanhoFonte + "px";
    }
});

document.getElementById("font-down").addEventListener("click", () => {
    if (tamanhoFonte > 12) {
        tamanhoFonte--;
        document.body.style.fontSize = tamanhoFonte + "px";
    }
});

// ===============================
// ANIMAÇÃO DA BARRA + CONTADOR
// ===============================
let valor = 0;
const barra = document.getElementById("barra");
const contador = document.getElementById("contador");

const animar = setInterval(() => {
    if (valor >= 85) {
        clearInterval(animar);
    } else {
        valor++;
        barra.style.width = valor + "%";
        contador.textContent = valor + "%";
    }
}, 20);
