const botao = document.querySelector('.menu-icons');
const closeBotao = document.querySelector('.menu-icons').children[0];
const menu = document.querySelector('.menu');

botao.addEventListener('click', function() {
    menu.classList.toggle('active');
    closeBotao.classList.toggle('fa-bars');
    closeBotao.classList.toggle('fa-times');
});