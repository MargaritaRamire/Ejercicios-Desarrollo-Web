// Botones "Inscríbete aquí"
const botonesInscripcion = document.querySelectorAll('.btnInscripcion');

botonesInscripcion.forEach(boton => {
    boton.addEventListener('click', () => {
        alert('Gracias por tu interés. Pronto recibirás más información.');
    });
});
