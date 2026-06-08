// ===============================
// MODO ESCURO COM MEMÓRIA
// ===============================
const modeToggle = document.getElementById("mode-toggle");

if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-mode");
}

modeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    localStorage.setItem(
        "theme",
        document.body.classList.contains("dark-mode") ? "dark" : "light"
    );
});

// ===============================
// TAMANHO DA FONTE
// ===============================
let currentSize = parseInt(localStorage.getItem("fontSize")) || 16;

document.body.style.fontSize = currentSize + "px";

document.getElementById("font-increase").addEventListener("click", () => {
    if (currentSize < 24) {
        currentSize++;
        document.body.style.fontSize = currentSize + "px";
        localStorage.setItem("fontSize", currentSize);
    }
});

document.getElementById("font-decrease").addEventListener("click", () => {
    if (currentSize > 12) {
        currentSize--;
        document.body.style.fontSize = currentSize + "px";
        localStorage.setItem("fontSize", currentSize);
    }
});

// ===============================
// SISTEMA DE TABS
// ===============================
function openTab(evt, tabName) {
    const contents = document.querySelectorAll(".tab-content");
    const links = document.querySelectorAll(".tab-link");

    contents.forEach(content => {
        content.classList.remove("active");
    });

    links.forEach(link => {
        link.classList.remove("active");
    });

    document.getElementById(tabName).classList.add("active");
    evt.currentTarget.classList.add("active");
}

// ===============================
// ANIMAÇÃO DOS INDICADORES
// ===============================
function animateValue(id, end) {
    let start = 0;
    const duration = 1500;
    const stepTime = duration / end;

    const timer = setInterval(() => {
        start++;

        document.getElementById(id).textContent = start + "%";

        if (start >= end) {
            clearInterval(timer);
        }
    }, stepTime);
}

// ===============================
// DASHBOARD
// ===============================
document.addEventListener("DOMContentLoaded", () => {

    animateValue("carbon-stat", 94);
    animateValue("water-stat", 100);
    animateValue("prod-stat", 87);

    document.getElementById("carbon-fill").style.width = "94%";
    document.getElementById("water-fill").style.width = "100%";
    document.getElementById("prod-fill").style.width = "87%";

});
