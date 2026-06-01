// Dados que serão injetados ao clicar na foto
const dataExpert = {
    roca: {
        title: "Gestão de Solo Sustentável",
        content: "Técnicas de plantio direto e adubação orgânica para manter a vitalidade da terra."
    },
    animais: {
        title: "Pecuária Consciente",
        content: "Criação humanizada com foco no equilíbrio do ecossistema e saúde animal."
    },
    plantacoes: {
        title: "Culturas Diversificadas",
        content: "Uso de rotação de culturas para evitar pragas e enriquecer o solo naturalmente."
    }
};

// Função de Boas-vindas
function initExperience() {
    const input = document.getElementById('user-input');
    const headline = document.getElementById('headline');
    
    if (input.value.trim() !== "") {
        headline.textContent = `Bem-vindo ao Painel, ${input.value}!`;
        input.style.display = 'none';
        document.getElementById('btn-start').style.display = 'none';
    }
}

// Abrir Modal com informação da foto
function openDetails(id) {
    const modal = document.getElementById('info-modal');
    const text = document.getElementById('modal-text');
    const info = dataExpert[id];
    
    text.innerHTML = `<h2>${info.title}</h2><p>${info.content}</p>`;
    modal.classList.remove('hidden');
}

// Fechar Modal
function closeDetails() {
    document.getElementById('info-modal').classList.add('hidden');
}

// Alternar Modo Escuro
document.getElementById('theme-switch').addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});
