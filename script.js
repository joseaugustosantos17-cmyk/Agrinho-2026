// 1. Variável para controle de dados
const informacoesRoca = {
    roca: "A roça é o coração da agricultura familiar. Sua função é integrar o manejo do solo com a biodiversidade local, garantindo que a terra permaneça fértil para as próximas gerações sem o uso de químicos agressivos.",
    animais: "Os animais na roça possuem função sistêmica. Além da produção de alimentos, eles auxiliam na adubação natural do solo através do esterco e no controle biológico de pragas, vivendo em um sistema de bem-estar animal.",
    plantacoes: "Nossas plantações seguem a rotação de culturas. Isso significa que nunca plantamos a mesma coisa no mesmo lugar por muito tempo, o que evita o esgotamento dos nutrientes do solo e fortalece as plantas contra doenças."
};

// 2. Função para saudar usuário (Manipulação de texto e variável)
function saudarUsuario() {
    const nome = document.getElementById('input-nome').value;
    const msg = document.getElementById('mensagem-personalizada');
    
    if(nome !== "") {
        msg.innerHTML = `Olá, <strong>${nome}</strong>! Que bom ter você aqui para aprender sobre o campo!`;
    } else {
        alert("Digite seu nome para uma recepção personalizada!");
    }
}

// 3. Função para exibir detalhes ao clicar na foto (Manipulação do DOM)
function exibirDetalhes(tipo) {
    const painel = document.getElementById('painel-explicativo');
    const conteudo = document.getElementById('conteudo-texto');
    
    // Altera o texto baseado na chave do objeto informacoesRoca
    conteudo.innerHTML = `<h3>${tipo.toUpperCase()}</h3><p>${informacoesRoca[tipo]}</p>`;
    
    // Mostra o painel
    painel.classList.remove('hidden');
}

// 4. Função para fechar painel
function fecharPainel() {
    document.getElementById('painel-explicativo').classList.add('hidden');
}

// 5. Botão Modo Escuro (Melhoria de UI)
const btnDark = document.getElementById('btn-dark-mode');
btnDark.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

// 6. Formulário de contato com feedback
document.getElementById('form-agrinho').addEventListener('submit', function(e) {
    e.preventDefault();
    this.classList.add('hidden');
    document.getElementById('feedback-form').classList.remove('hidden');
});
