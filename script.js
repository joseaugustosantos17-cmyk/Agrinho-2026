// Exemplo de como estruturar a lógica profissionalmente
const gameState = {
    coins: 0,
    energy: 100,
    level: 1,
    missions: {
        watered: false,
        solarInstalled: false
    }
};

function updateUI() {
    document.getElementById('coins').innerText = gameState.coins;
    document.getElementById('energy').innerText = gameState.energy;
    // Adicione animações de transição aqui
}

// Sistema de recompensas
function handleAction(action) {
    if (gameState.energy >= 10) {
        gameState.energy -= 10;
        gameState.coins += 5;
        updateUI();
    } else {
        alert("Sem energia! Descanse um pouco.");
    }
}
