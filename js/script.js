function toggleMenu(event) {
    event.stopPropagation(); // Evita que el click se propague
    const menu = document.getElementById('dropdownMenu');
    menu.classList.toggle('show');
}

// Cerrar menú al hacer clic fuera
document.addEventListener('click', function(event) {
    const menu = document.getElementById('dropdownMenu');
    const trigger = document.querySelector('.dropdown-trigger');
    
    if (!trigger.contains(event.target)) {
        menu.classList.remove('show');
    }
});

// Prevenir que el menú se cierre al hacer clic dentro
document.getElementById('dropdownMenu').addEventListener('click', function(event) {
    event.stopPropagation();
});