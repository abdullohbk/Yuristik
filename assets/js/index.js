let popupBtn = $(".zadat-btn");
let popupWrapper = $("#popup__wrapper");
let sendBtn = $("#send");
let closeBtn = $(".close");
let zayavka = $(".zayavka");
let header = $("#header");
let voprosBtn = $(".vopros");
let buttonSend = $(".btn-send");
let closeYuristBtn = $(".close__yurist");
let yuristBtn = $(".yurist__btn-send");
let zayavkaYurist = $(".zayavka_yurist");
let indx = 0;

let caruselWrap = document.querySelector(".carusel-wrap--cardwrap");

let caruselCards = document.querySelectorAll(".carusel-wrap--cardwrap--card");

yuristBtn.addEventListener("click", () => {
  zayavkaYurist.classList.remove("hide");
  document.body.classList.add("overhidden");
});

closeYuristBtn.addEventListener("click", () => {
  zayavkaYurist.classList.add("hide");
  document.body.classList.remove("overhidden");
});

popupBtn.addEventListener("click", () => {
  popupWrapper.classList.remove("hide");
  header.classList.add("hide");
  document.body.classList.add("overhidden");
});

closeBtn.addEventListener("click", () => {
  zayavka.classList.toggle("hide");
  header.classList.remove("hide");
  document.body.classList.remove("overhidden");
});

sendBtn.addEventListener("click", () => {
  popupWrapper.classList.add("hide");
  zayavka.classList.toggle("hide");
  document.body.classList.add("overhidden");
});

voprosBtn.addEventListener("click", () => {
  popupWrapper.classList.remove("hide");
  header.classList.add("hide");
  document.body.classList.add("overhidden");
});

buttonSend.addEventListener("click", () => {
  popupWrapper.classList.add("hide");
  zayavka.classList.toggle("hide");
  document.body.classList.add("hide");
});

//---CARUSEL -----------------



function caruseRight() {
  indx++;
  if (indx > caruselCards.length - 2) {
    indx = 0;
  } else if (indx < 0) {
    indx = caruselCards.length - 2;
  }
  caruselWrap.style.transform = `translateX(${-indx * 345}px)`;
}

function caruselLeft() {
  indx--;
  if (indx > caruselCards.length - 2) {
    indx = 0;
  } else if (indx < 0) {
    indx = caruselCards.length - 2;
  }
  caruselWrap.style.transform = `translateX(${-indx * 345}px)`;
}
