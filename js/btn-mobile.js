const btnMobile = document.getElementById('btn-mobile');

function toggleMenu() {
    const navCont = document.querySelector('.nav__container');
    const navMenu = document.querySelector('.nav__menu');
    const btnMobile = document.getElementById('btn-mobile');

    btnMobile.classList.toggle('btn-active');
    navCont.classList.toggle('nav__container--active');
    navMenu.classList.toggle('nav__menu--active');
}
btnMobile.addEventListener('click', toggleMenu);


// mudança de cor ao clique
btnMobile.addEventListener('click', () => {
  // liga/desliga
    btnMobile.classList.toggle('ativo');
});