// Botón "Comprar ahora"
document.getElementById('btnCompra').addEventListener('click', () => {
    alert('¡Gracias por tu interés! Pronto nos pondremos en contacto contigo.');
});

// Formulario de contacto: alerta simple y limpiar formulario
document.getElementById('formContacto').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Mensaje enviado. ¡Gracias por contactarnos!');
    e.target.reset();
});
