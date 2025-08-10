// Al hacer click o "Enter" en un proyecto, mostrar alerta con el nombre
const proyectos = document.querySelectorAll('.proyecto');

proyectos.forEach(proyecto => {
  proyecto.addEventListener('click', () => {
    alert(`Has seleccionado: ${proyecto.dataset.nombre}`);
  });
  proyecto.addEventListener('keypress', (e) => {
    if(e.key === 'Enter') {
      alert(`Has seleccionado: ${proyecto.dataset.nombre}`);
    }
  });
});
