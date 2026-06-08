// ===============================
// UTIL: CACHE DE ELEMENTOS
// ===============================
const $ = (id) => document.getElementById(id);

// ===============================
// MODO ESCURO COM MEMÓRIA
// ===============================
const modeToggle = $("mode-toggle");

if (modeToggle) {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {
        document.body.classList.add("dark-mode");
    }

    modeToggle.addEventListener("click", () => {
        const isDark = document.body.classList.toggle("dark-mode");

        localStorage.setItem("theme", isDark ? "dark" : "light");
    });
}

// ===============================
// TAMANHO DA FONTE (REFATORADO)
// ===============================
const MIN_FONT = 12;
const MAX_FONT = 24;

let currentSize = Number(localStorage.getItem("fontSize")) || 16;
document.body.style.fontSize = `${currentSize}px`;

const updateFontSize = (newSize) => {
    currentSize = newSize;
    document.body.style.fontSize = `${currentSize}px`;
    localStorage.setItem("fontSize", currentSize);
};

const fontIncrease = $("font-increase");
const fontDecrease = $("font-decrease");

if (fontIncrease) {
    fontIncrease.addEventListener("click", () => {
        if (currentSize < MAX_FONT) updateFontSize(currentSize + 1);
    });
}

if (fontDecrease) {
    fontDecrease.addEventListener("click", () => {
        if (currentSize > MIN_FONT) updateFontSize(currentSize - 1);
    });
}

// ===============================
// SISTEMA DE TABS (MAIS SEGURO)
// ===============================
function openTab(evt, tabName) {
    const contents = document.querySelectorAll(".tab-content");
    const links = document.querySelectorAll(".tab-link");
    const target = $(tabName);

    if (!target) return;

    contents.forEach(el => el.classList.remove("active"));
    links.forEach(el => el.classList.remove("active"));

    target.classList.add("active");
    evt.currentTarget.classList.add("active");
}

// ===============================
// ANIMAÇÃO DE VALORES (OTIMIZADA)
// ===============================
function animateValue(id, end, duration = 1500) {
    const el = $(id);
    if (!el) return;

    let start = 0;
    const stepTime = Math.max(10, Math.floor(duration / end));

    const timer = setInterval(() => {
        start++;
        el.textContent = `${start}%`;

        if (start >= end) {
            clearInterval(timer);
        }
    }, stepTime);
}

// ===============================
// DASHBOARD INIT
// ===============================
document.addEventListener("DOMContentLoaded", () => {
    animateValue("carbon-stat", 94);
    animateValue("water-stat", 100);
    animateValue("prod-stat", 87);

    const setWidth = (id, value) => {
        const el = $(id);
        if (el) el.style.width = `${value}%`;
    };

    setWidth("carbon-fill", 94);
    setWidth("water-fill", 100);
    setWidth("prod-fill", 87);
});
