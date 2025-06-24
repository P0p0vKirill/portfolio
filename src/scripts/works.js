const select = document.querySelector("select");
const allLangs = ["en", "ru"];
select.addEventListener("change", changeURLLanguage);
function changeURLLanguage() {
  let lang = select.value;
  location.href = window.location.pathname + "#" + lang;
  location.reload();
}

function changeLanguage() {
  let hash = window.location.hash;
  if(!hash) return
  hash = hash.slice(1);
  // if (!allLangs.includes(hash)) {
  //   location.href = window.location.pathname + "#ru";
  //   // location.reload();
  // }
  select.value = hash;
  for (key in langArr) {
    let el = document.querySelector(".lng-" + key);
    if (el) el.innerHTML = langArr[key][hash];
  }
}
changeLanguage();

// nav-btn
const nav = document.querySelector("#nav");
const navBtn = document.querySelector("#nav-btn");
navBtn.onclick = () => {
  if (nav.classList.toggle('open')){
    navBtn.classList.add('transform-nav-btn')
  } else {
    navBtn.classList.remove('transform-nav-btn')
  }
}