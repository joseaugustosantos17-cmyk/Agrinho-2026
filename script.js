// ===============================
// VARIÁVEIS GLOBAIS
// ===============================
let tamanhoFonte = 16;
let usuario = "";

// ===============================
// SAUDAÇÃO PERSONALIZADA
// ===============================
document.getElementById("btn-saudacao").addEventListener("click", () => {
    usuario = document.getElementById("nome").value.trim();

    if (!usuario) {
        alert("Digite seu nome!");
        return;
    }

    document.getElementById("saudacao").textContent =
        `Olá, ${usuario}! Bem-vindo ao Agro Sustentável 🌱`;
});

// ===============================
// TEMA ESCURO / CLARO
// ===============================
document.getElementById("theme-toggle").addEventListener("click", () => {
    document.body.classList.toggle("dark");
});

// ===============================
// CONTROLE DE FONTE
// ===============================
const aumentarFonte = document.getElementById("font-up");
const diminuirFonte = document.getElementById("font-down");

aumentarFonte.addEventListener("click", () => {
    if (tamanhoFonte < 24) {
        tamanhoFonte++;
        document.body.style.fontSize = `${tamanhoFonte}px`;
    }
});

diminuirFonte.addEventListener("click", () => {
    if (tamanhoFonte > 12) {
        tamanhoFonte--;
        document.body.style.fontSize = `${tamanhoFonte}px`;
    }
});

// ===============================
// ANIMAÇÃO DA BARRA DE SUSTENTABILIDADE
// ===============================
function animarBarra(idBarra, idContador, meta) {
    const barra = document.getElementById(idBarra);
    const contador = document.getElementById(idContador);
    let valor = 0;

    const frame = () => {
        if (valor < meta) {
            valor++;
            barra.style.width = valor + "%";
            contador.textContent = valor + "%";
            requestAnimationFrame(frame);
        }
    };
    requestAnimationFrame(frame);
}

animarBarra("barra", "contador", 85);
