const form = document.getElementById('formInscripcion');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  // Validar campos básicos
  const nombre = form.nombre.value.trim();
  const email = form.email.value.trim();
  const evento = form.evento.value;
  const intereses = form.querySelectorAll('input[name="intereses"]:checked');

  if (!nombre) {
    alert('Por favor, ingresa tu nombre completo.');
    form.nombre.focus();
    return;
  }

  if (!email || !validateEmail(email)) {
    alert('Por favor, ingresa un correo electrónico válido.');
    form.email.focus();
    return;
  }

  if (!evento) {
    alert('Por favor, selecciona un evento.');
    form.evento.focus();
    return;
  }

  if (intereses.length === 0) {
    alert('Por favor, selecciona al menos un interés.');
    return;
  }

  alert('¡Inscripción enviada con éxito!');
  form.reset();
});

function validateEmail(email) {
  // Expresión regular básica para validar email
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}
