// 1. Controle de Acessibilidade: Tamanho da Fonte
let currentFontSize = 16;
function changeFontSize(delta) {
    currentFontSize += delta;
    // Limita o tamanho para não quebrar o layout
    if (currentFontSize >= 12 && currentFontSize <= 24) {
        document.documentElement.style.setProperty('--font-base', currentFontSize + 'px');
    }
}

// 2. Sistema de Abas (Tabs) - Manipulação de Classes no DOM
function openTab(evt, tabName) {
    let i, tabcontent, tablinks;
    
    // Esconde todos os conteúdos
    tabcontent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
        tabcontent[i].classList.remove("active");
    }

    // Remove a classe 'active' de todos os botões
    tablinks = document.getElementsByClassName("tab-link");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].classList.remove("active");
    }

    // Mostra a aba atual e adiciona classe ativa ao botão
    document.getElementById(tabName).style.display = "block";
    document.getElementById(tabName).classList.add("active");
    evt.currentTarget.classList.add("active");
}

// 3. Atualização Dinâmica de Dados (Simulação de Sensores IoT)
function updateStats() {
    const carbon = document.getElementById('carbon-stat');
    const fill = document.getElementById('carbon-fill');
    
    // Gera um valor aleatório para simular monitoramento real
    let newValue = Math.floor(Math.random() * (98 - 90 + 1)) + 90;
    
    carbon.innerText = newValue;
    fill.style.width = newValue + "%";
}

// Atualiza os dados a cada 5 segundos
setInterval(updateStats, 5000);

// 4. Modo Escuro
document.getElementById('mode-toggle').addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    // Armazena a preferência em uma variável (processamento)
    const isDark = document.body.classList.contains('dark-mode');
    console.log(`Modo escuro ativo: ${isDark}`);
});
