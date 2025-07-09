import { langArr } from "./lang.js";
const select = document.querySelector("select");
select.addEventListener("change", changeURLLanguage);
changeLanguage();
function changeURLLanguage() {
  let lang = select.value;
  location.href = window.location.pathname + "#" + lang;
  localStorage["lang"] = this.value;
  console.log(localStorage["lang"]);
  location.reload();
}
function changeLanguage() {
  let hash = localStorage["lang"];
  if (hash==='ru') return;
  select.value = hash;
  for (let key in langArr) {
    let el = document.querySelector(".lng-" + key);
    if (el) el.innerHTML = langArr[key][hash];
  }
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

// function changeURLLanguage() {
//   let lang = select.value;
//   console.log(lang)
//   location.href = window.location.pathname + "#" + lang;
//   // console.log(lang)
//   location.reload();
// }

// function changeLanguage() {
//   let hash = window.location.hash;
//   if(!hash) return
//   hash = hash.slice(1);
//   // if (!allLangs.includes(hash)) {
//   //   location.href = window.location.pathname + "#ru";
//   //   // location.reload();
//   // }
//   select.value = hash;
//   for (let key in langArr) {
//     let el = document.querySelector(".lng-" + key);
//     if (el) el.innerHTML = langArr[key][hash];
//   }
// }
// changeLanguage();
