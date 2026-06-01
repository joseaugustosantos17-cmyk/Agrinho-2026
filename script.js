// Banco de dados técnico para os cards
const dataExpert = {
    roca: {
        title: "Infraestrutura de Solo e Sustentabilidade",
        content: "A gestão avançada de solo utiliza rotação de culturas e adubação orgânica para manter o microbioma ativo, reduzindo a dependência de insumos externos."
    },
    animais: {
        title: "Sistemas Pecuários Integrados",
        content: "Nossa criação foca no manejo holístico. O gado atua como agente regenerativo do pasto, otimizando o sequestro de carbono no solo."
    },
    plantacoes: {
        title: "Fitotecnia e Produtividade",
        content: "Utilizamos técnicas de agrofloresta para diversificar a produção, criando um ecossistema resiliente a pragas e variações climáticas."
    }
};

// Saudação com processamento de nome
function initExperience() {
    const input = document.getElementById('user-input');
    const headline = document.getElementById('headline');
    
    if (input.value.length > 2) {
        let user = input.value.split(' ')[0]; // Pega apenas o primeiro nome
        headline.textContent = `Diretrizes de Produção: Consultor ${user}`;
        input.parentElement.style.display = 'none';
    } else {
        alert("Por favor, insira suas credenciais (Nome).");
    }
}

// Controle de Modal (Injeção de conteúdo dinâmico)
function openDetails(id) {
    const modal = document.getElementById('info-modal');
    const text = document.getElementById('modal-text');
    
    const info = dataExpert[id];
    text.innerHTML = `<h2>${info.title}</h2><hr><p>${info.content}</p>`;
    
    modal.classList.remove('hidden');
}

function closeDetails() {
    document.getElementById('info-modal').classList.add('hidden');
}

// Alternador de Tema Profissional
document.getElementById('theme-switch').addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});
