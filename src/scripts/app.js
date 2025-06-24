const select = document.querySelector("select");
const allLangs = ["en", "ru"];
select.addEventListener("change", changeURLLanguage);
function changeURLLanguage() {
  let lang = select.value;
  location.href = window.location.pathname + "#" + lang;
  // location.reload();
  // changeLanguage();
  location.reload();
}
function changeLanguage() {
  let hash = window.location.hash;
  if (!hash) return;
  hash = hash.slice(1);
  // if (!allLangs.includes(hash)) {
  //   location.href = window.location.pathname + "#ru";
  //   location.reload();
  // }
  select.value = hash;
  for (key in langArr) {
    let el = document.querySelector(".lng-" + key);
    if (el) el.innerHTML = langArr[key][hash];
  }
}
changeLanguage();

// coloring text
(function titleСoloring() {
  let wordsArr = ["Frontend-разработкой", "Frontend development"];
  let title = document.querySelector(".lng-header-title");
  for (let phrase of wordsArr) {
    if (title.innerHTML.includes(phrase))
      title.innerHTML = title.innerHTML.replace(
        phrase,
        `<span style="color:#C778DD">${phrase}</span>`
      );
  }
})();

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
