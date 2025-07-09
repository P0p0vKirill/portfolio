import {langArr} from './lang.js';
// localStorage.clear()
// console.log(langArr)
const select = document.querySelector("select");
// select.options[ localStorage['Item'] ].selected = true;
select.addEventListener("change", changeURLLanguage);
// localStorage.clear()
changeLanguage();
function changeURLLanguage() {
  let lang = select.value;
  location.href = window.location.pathname + "#" + lang;
  localStorage['lang'] = this.value;
  console.log(localStorage['lang'])
  location.reload()
}
function changeLanguage() {
  let hash = localStorage['lang'];
  if (!hash) return;
  select.value = hash;
  for (let key in langArr) {
    let el = document.querySelector(".lng-" + key);
    if (el) el.innerHTML = langArr[key][hash];
  }
}

// button-contact-me

const contactMe = document.querySelector(".contact-me");
const formSend = document.querySelector(".form-send-email");
const headerMiddleLeft = document.querySelector(".header__middle-left");
contactMe.addEventListener("click", contactMeNone);
function contactMeNone() {
  formSend.style.top = `${
    contactMe.getBoundingClientRect().top -
    headerMiddleLeft.getBoundingClientRect().top
  }px`;
  contactMe.classList.add("inactive");
  formSend.classList.remove("inactive");
}

// nav-btn
const nav = document.querySelector("#nav");
const navBtn = document.querySelector("#nav-btn");
navBtn.onclick = () => {
  if (nav.classList.toggle("open")) {
    navBtn.classList.add("transform-nav-btn");
  } else {
    navBtn.classList.remove("transform-nav-btn");
  }
};
