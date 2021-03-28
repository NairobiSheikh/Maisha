// MENU TOGGLE
const navMenu = document.getElementById('nav-menu'),
    toggleMenu = document.getElementById('nav-toggle'),
    closeMenu = document.getElementById('nav-close')
// SHOW MENU
toggleMenu.addEventListener('click', ()=>{
  navMenu.classList.toggle('show')
})
//CLOSING MENU EVENT LISTENER
closeMenu.addEventListener('click', ()=>{
  navMenu.classList.remove('show')
})
// MOUSE OVER IMAGE .E.L.
// GSAP ANIMATION
// NAVBAR
// LANDING PAGA