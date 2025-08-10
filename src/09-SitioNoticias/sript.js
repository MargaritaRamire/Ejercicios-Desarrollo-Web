// Filtrar posts por categoría
const botones = document.querySelectorAll('nav button');
const posts = document.querySelectorAll('.post');

botones.forEach(boton => {
  boton.addEventListener('click', () => {
    // Quitar active a todos
    botones.forEach(b => b.classList.remove('active'));
    boton.classList.add('active');

    const categoria = boton.dataset.categoria;

    posts.forEach(post => {
      if (categoria === 'all' || post.dataset.categoria === categoria) {
        post.style.display = '';
      } else {
        post.style.display = 'none';
      }
    });
  });
});
