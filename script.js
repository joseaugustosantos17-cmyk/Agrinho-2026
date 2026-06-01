// Banco de dados técnico para manipulação do DOM
const agroData = {
    roca: {
        title: "Infraestrutura da Roça Moderna",
        text: "Integração de sensores IoT em hortas familiares para economia de 40% de água."
    },
    animais: {
        title: "Pecuária de Precisão",
        text: "Sistemas de rastreamento que garantem que o animal foi criado em áreas sem desmatamento."
    },
    plantio: {
        title: "Plantio Regenerativo",
        text: "Uso de rotação de cultura para manter o solo rico em nitrogênio sem fertilizantes químicos."
    }
};

// 1. Variável de Processamento (Personalização)
function personalizarPainel() {
    const nomeOriginal = document.getElementById('user-name').value;
    const tituloDisplay = document.getElementById('main-title');
    
    if(nomeOriginal.trim() !== "") {
        // Processa a informação antes de exibir
        const nomeFormatado = nomeOriginal.toUpperCase();
        tituloDisplay.innerText = `Painel AgroForte: Consultor ${nomeFormatado}`;
        tituloDisplay.style.color = "#95d5b2";
    }
}

// 2. Manipulação Funcional do DOM (Exibir/Esconder)
function showInfo(categoria) {
    const painel = document.getElementById('info-display');
    const conteudo = document.getElementById('info-content');
    const dados = agroData[categoria];

    conteudo.innerHTML = `<h3>${dados.title}</h3><p>${dados.text}</p>`;
    painel.classList.remove('hidden');
    painel.style.display = "block"; // Altera o display via JS
}

function closePanel() {
    document.getElementById('info-display').style.display = "none";
}

// 3. Atualizador de Contador (Simulação de Impacto)
let visitas = 0;
setInterval(() => {
    visitas += Math.floor(Math.random() * 5);
    document.getElementById('counter').innerText = visitas;
}, 3000);

// 4. Modo Escuro Funcional
const btnMode = document.getElementById('mode-toggle');
btnMode.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});
