document.addEventListener('DOMContentLoaded', () => {
    // Inicializar ícones
    lucide.createIcons();

    // 1. Accordion
    const headers = document.querySelectorAll('.accordion-header');
    headers.forEach(header => {
        header.addEventListener('click', () => {
            const item = header.parentElement;
            item.classList.toggle('active');
            
            // Trocar ícone (opcional se quiser interatividade extra)
            const icon = header.querySelector('i');
            if(item.classList.contains('active')) {
                icon.setAttribute('data-lucide', 'chevron-up');
            } else {
                icon.setAttribute('data-lucide', 'chevron-down');
            }
            lucide.createIcons();
        });
    });

    // 2. Acessibilidade: Tamanho da Fonte
    let fontSize = 16;
    document.getElementById('increase-font').addEventListener('click', () => {
        fontSize += 2;
        document.documentElement.style.fontSize = fontSize + 'px';
    });
    document.getElementById('decrease-font').addEventListener('click', () => {
        if(fontSize > 12) fontSize -= 2;
        document.documentElement.style.fontSize = fontSize + 'px';
    });

    // 3. Dark Mode
    document.getElementById('toggle-theme').addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
    });

    // 4. Leitura por Voz (Speech Synthesis)
    const synth = window.speechSynthesis;
    const readTarget = document.getElementById('read-target');

    document.getElementById('start-read').addEventListener('click', () => {
        synth.cancel(); // Para leituras anteriores
        const text = readTarget.innerText;
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = 'pt-BR';
        utterance.rate = 1.1;
        synth.speak(utterance);
    });

    document.getElementById('stop-read').addEventListener('click', () => {
        synth.cancel();
    });

    // 5. Comentários (Simulação)
    const sendComment = document.getElementById('send-comment');
    const commentInput = document.getElementById('user-comment');
    const commentsDisplay = document.getElementById('comments-display');

    sendComment.addEventListener('click', () => {
        const val = commentInput.value.trim();
        if(val) {
            const div = document.createElement('div');
            div.style.padding = '15px';
            div.style.background = 'var(--gray)';
            div.style.borderRadius = '8px';
            div.style.marginTop = '10px';
            div.innerHTML = `<strong>Leitor:</strong> <p>${val}</p>`;
            commentsDisplay.prepend(div);
            commentInput.value = '';
        }
    });

    // 6. Form Submission (Prevent default)
    document.getElementById('signup-form').addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Inscrição realizada com sucesso! Verifique seu e-mail.');
    });
});
