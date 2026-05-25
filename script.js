document.addEventListener('DOMContentLoaded', () => {
    // Inicializa os ícones
    lucide.createIcons();

    // 1. Dark Mode com persistência
    const themeToggle = document.getElementById('theme-toggle');
    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        const isDark = document.body.classList.contains('dark-mode');
        themeToggle.innerHTML = isDark ? '☀️' : '🌓';
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
    });

    // 2. Animação de Entrada (Scroll Reveal)
    const observerOptions = { threshold: 0.1 };
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
            }
        });
    }, observerOptions);

    document.querySelectorAll('.card').forEach(card => {
        card.style.opacity = "0";
        card.style.transform = "translateY(30px)";
        card.style.transition = "all 0.6s ease-out";
        observer.observe(card);
    });

    // 3. Saudação Inteligente
    const btnGreet = document.getElementById('btn-greet');
    btnGreet.addEventListener('click', () => {
        const name = document.getElementById('user-name').value;
        const welcomeText = document.getElementById('welcome-text');
        if(name.trim() !== "") {
            welcomeText.innerHTML = `Olá, <strong>${name}</strong>! 🌱<br>Bem-vindo à nova era do campo.`;
            welcomeText.classList.add('pulse-animation');
        }
    });
});
