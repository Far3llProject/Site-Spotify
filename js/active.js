function toggle(){
  let header = document.getElementById("header")
  let socials = document.getElementById("socials")
  let body = document.getElementById("body")
  header.classList.toggle('header__active')
  socials.classList.toggle('footer__menu-link-socials-hide')
  body.classList.toggle('body__blocked')
}

