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