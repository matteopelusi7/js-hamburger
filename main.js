const hamMenu = document.querySelector('.fas.fa-bars');

hamMenu.addEventListener('click', function() {

    let menu = document.querySelector('.hamburger-menu');
    menu.style.display = 'block' ;

})

const hamMenuNext = document.querySelector('.fas.fa-times');

hamMenuNext.addEventListener('click', function() {

    menu = document.querySelector('.hamburger-menu');
    menu.style.display = 'none' ;

})