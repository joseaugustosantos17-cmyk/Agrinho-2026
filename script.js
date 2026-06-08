let tamanhoFonte = 16;

/* 👤 SAUDAÇÃO */
document.getElementById("btn-saudacao").addEventListener("click", () => {
    const nome = document.getElementById("nome").value.trim();

    if (!nome) return alert("Digite seu nome!");

    document.getElementById("saudacao").textContent =
        `Olá, ${nome}! Bem-vindo 🌱`;
});

/* 🌗 TEMA */
document.getElementById("theme-toggle").addEventListener("click", () => {
    document.body.classList.toggle("dark");
});

/* 🔠 FONTE */
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

/* 📊 BARRAS */
function animarBarra(id, valorFinal) {
    const barra = document.getElementById(id);
    let i = 0;

    const animar = () => {
        if (i <= valorFinal) {
            barra.style.width = i + "%";
            i++;
            requestAnimationFrame(animar);
        }
    };

    animar();
}

animarBarra("solo", 80);
animarBarra("agua", 65);
animarBarra("prod", 90);

/* 💡 DICAS */
const dicas = [
    "Use irrigação por gotejamento.",
    "Rotação de culturas melhora o solo.",
    "Adubo natural reduz impactos.",
    "Evite desperdício de água."
];

document.getElementById("btn-dica").addEventListener("click", () => {
    const dica = dicas[Math.floor(Math.random() * dicas.length)];
    document.getElementById("dica").textContent = dica;
});

/* 🌦️ CLIMA DINÂMICO */
const climas = ["🌦️ Chuva leve", "☀️ Ensolarado", "⛅ Nublado", "🌧️ Chuva forte"];

setInterval(() => {
    const c = climas[Math.floor(Math.random() * climas.length)];
    document.getElementById("clima").textContent = c;
}, 5000);
