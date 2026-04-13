// Efeito de mudança de cor no Navbar ao rolar a página
window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.style.padding = '0.5rem 5%';
        navbar.style.background = '#ffffffef';
    } else {
        navbar.style.padding = '1rem 5%';
        navbar.style.background = '#ffffff';
    }
});

// Mensagem de boas-vindas no console (Debug/Info)
console.log("AgroForte carregado: Equilíbrio entre produção e ambiente.");

// Animação simples de entrada para os cards
const cards = document.querySelectorAll('.card');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = 1;
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, { threshold: 0.1 });

cards.forEach(card => {
    card.style.opacity = 0;
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'all 0.6s ease-out';
    observer.observe(card);
});
