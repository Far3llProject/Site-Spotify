function toggle() {
  let header = document.getElementById("header")
  let socials = document.getElementById("socials")
  let body = document.getElementById("body")
  header.classList.toggle('header__active')
  socials.classList.toggle('footer__menu-link-socials-hide')
  body.classList.toggle('body__blocked')
}

function Perfil() {
  let menu = document.getElementById('menu')
  menu.classList.toggle('menu__button--show')
  let header = document.getElementById("header")
  header.classList.toggle('header__active')
}

// function mudar() {
//   const element = document.querySelector('[data-toggle]')
//   const value = element.dataset.toggle
//   console.log(value)
  
// }