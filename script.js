// Script básico para GPSolutions - Manejo del formulario de contacto
// Simula envío sin backend real (muestra mensaje de éxito)

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contact-form');
    const messageDiv = document.getElementById('form-message');
    
    if (form) {
        form.addEventListener('submit', function(event) {
            event.preventDefault(); // Evita envío real
            
            // Simula procesamiento
            messageDiv.textContent = '¡Gracias por tu mensaje! Nos pondremos en contacto pronto.';
            messageDiv.style.color = '#007BFF'; // Azul para éxito
            messageDiv.style.fontWeight = 'bold';
            
            // Limpia el formulario
            form.reset();
            
            // Opcional: Oculta mensaje después de 5 segundos
            setTimeout(() => {
                messageDiv.textContent = '';
            }, 5000);
        });
    }
    
    // Opcional: Animación sutil para hero (fade-in)
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
        heroContent.style.opacity = '0';
        heroContent.style.transition = 'opacity 2s ease-in';
        setTimeout(() => {
            heroContent.style.opacity = '1';
        }, 100);
    }
});
// Toggle del menú hamburguesa
document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');
    
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active'); // Anima el hamburguesa
            navMenu.classList.toggle('active'); // Muestra/oculta el menú
        });
        
        // Cierra el menú al hacer clic en un enlace
        navMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
        
        // Cierra el menú al hacer clic fuera (opcional)
        document.addEventListener('click', (e) => {
            if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            }
        });
    }
});