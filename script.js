// Modo escuro
document.getElementById("mode-toggle").addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
});

// Aumentar e diminuir fonte
let currentSize = 16;

document.getElementById("font-increase").addEventListener("click", () => {
    currentSize += 1;
    document.body.style.fontSize = currentSize + "px";
});

document.getElementById("font-decrease").addEventListener("click", () => {
    currentSize -= 1;
    document.body.style.fontSize = currentSize + "px";
});

// Tabs
function openTab(evt, tabName) {
    let contents = document.getElementsByClassName("tab-content");
    let links = document.getElementsByClassName("tab-link");

    for (let i = 0; i < contents.length; i++) {
        contents[i].classList.remove("active");
    }

    for (let i = 0; i < links.length; i++) {
        links[i].classList.remove("active");
    }

    document.getElementById(tabName).classList.add("active");
    evt.currentTarget.classList.add("active");
}

// Animação dos indicadores
function animateValue(id, end) {
    let start = 0;

    let timer = setInterval(() => {
        start++;
        document.getElementById(id).textContent = start + "%";

        if (start >= end) {
            clearInterval(timer);
        }
    }, 20);
}

window.onload = () => {
    animateValue("carbon-stat", 94);
    animateValue("water-stat", 100);

    document.getElementById("carbon-fill").style.width = "94%";
    document.getElementById("water-fill").style.width = "100%";
};
