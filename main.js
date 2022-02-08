const hamMenu = document.querySelector('.fas.fa-bars');
const hamMenuNext = document.querySelector('.fas.fa-times');
let menu = document.querySelector('.hamburger-menu');

hamMenu.addEventListener('click', function() {

   menu.style.display = 'block' ;

})

hamMenuNext.addEventListener('click', function() {

   menu.style.display = 'none' ;

})