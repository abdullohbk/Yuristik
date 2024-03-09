let popupBtn = $(".zadat-btn");
let popupWrapper = $("#popup__wrapper");
let sendBtn = $("#send");
let closeBtn = $(".close");
let zayavka = $(".zayavka");
let header = $("#header");

popupBtn.addEventListener("click", () => {
  popupWrapper.classList.remove("hide");
  header.classList.add("hide");
  document.body.classList.add("overhidden");
});

closeBtn.addEventListener("click", () => {
  zayavka.classList.toggle("hide");
  header.classList.remove("hide");
});

sendBtn.addEventListener("click", () => {
  popupWrapper.classList.add("hide");
  zayavka.classList.remove("hide");
  document.body.classList.add("overhidden");
});
