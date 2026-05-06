document.addEventListener('DOMContentLoaded', () => {
    //resgata dados do sessionStorage
    const isLogado = sessionStorage.getItem('usuarioLogado');
    const nome = sessionStorage.getItem('nomeUsuario');

   //resgata elementos da pagina atual
    const loginBtn = document.querySelector('.nav-btn__login');

    //executa apenas se o usuario estiver logado e se existir os elementos na pagina
    if (isLogado === 'true' && loginBtn && nome) {
        
        //muda o que esta escrito no botao de login
        loginBtn.innerText = `Olá, ${nome}!`;
        
        // remove o link do botao
        loginBtn.removeAttribute('href');
        
        // muda o cursor para padrão
        loginBtn.style.cursor = 'default';
        
        loginBtn.classList.add('welcome-msg');
    }
});
