document.getElementById('water-btn').addEventListener('click', () => {
    const plant = document.getElementById('plant');
    plant.style.transform = 'scale(1.3)';
    setTimeout(() => {
        plant.style.transform = 'scale(1)';
    }, 200);
});
