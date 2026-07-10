const botaoTema = document.getElementById('botao-tema');
const body = document.body;

function aplicarTema(escuro) {
    body.classList.toggle('escuro', escuro);
    botaoTema.innerHTML = escuro
        ? '<i class="fa-solid fa-sun"></i>'
        : '<i class="fa-solid fa-moon"></i>';

    localStorage.setItem('tema', escuro ? 'escuro' : 'claro');
}

const temaSalvo = localStorage.getItem('tema');
aplicarTema(temaSalvo === 'escuro');

botaoTema.addEventListener('click', () => {
    const temaAtualEscuro = !body.classList.contains('escuro');
    aplicarTema(temaAtualEscuro);
});

const menu = document.querySelector('.menu-hamburguer');
const nav = document.querySelector('#nav');
const icon = menu.querySelector('i');

menu.addEventListener('click', () => {
    nav.classList.toggle('active');
    icon.classList.toggle('fa-bars');
    icon.classList.toggle('fa-xmark');
});
