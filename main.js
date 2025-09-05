const cards = document.querySelectorAll('.card');
const body = document.querySelector('body');
const movieTitle = document.getElementById('movie-title');
const toggleBtn = document.querySelector('.toggle-btn');
const mobileMenu = document.querySelector('.mobile');

toggleBtn.addEventListener('click', () => {
  mobileMenu.classList.toggle('active');
});



cards.forEach(card => {
  card.addEventListener('click', () => {
    const title = card.querySelector('h2').textContent;
    const poster = card.querySelector('.poster').src;

    body.style.background = `url('${poster}') no-repeat center center/cover`;
    movieTitle.textContent = title;
  });
});
