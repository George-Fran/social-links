const botones = document.querySelectorAll('ul.redes > li > a');
botones.forEach(activar => {
    activar.addEventListener('click', () => {
        botones.forEach(remover => {
            remover.classList.remove('activo');
        });
        activar.classList.add('activo');
    });
});