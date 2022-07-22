const botaoMenuCabecalho = document.querySelector('.cabecalho__menu')
const menuLateral = document.querySelector('.menu-lateral')

botaoMenuCabecalho.addEventListener('click', () =>{
    menuLateral.classList.toggle('menu-lateral--ativo')
})