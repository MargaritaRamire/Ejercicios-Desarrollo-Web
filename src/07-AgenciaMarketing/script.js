const formCotizacion = document.getElementById('formCotizacion');

formCotizacion.addEventListener('submit', (e) => {
  e.preventDefault();
  alert('¡Gracias por enviar tu solicitud de cotización! Nos contactaremos pronto.');
  formCotizacion.reset();
});
