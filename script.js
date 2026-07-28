document.addEventListener("DOMContentLoaded", () => {

const buttons = document.querySelectorAll("a");

buttons.forEach(btn => {

btn.addEventListener("mouseenter", () => {
btn.style.transform = "scale(1.08)";
});

btn.addEventListener("mouseleave", () => {
btn.style.transform = "scale(1)";
});

});

const logo = document.querySelector(".logo");

setInterval(() => {

logo.style.boxShadow = "0 0 40px #00f7ff";

setTimeout(() => {

logo.style.boxShadow = "0 0 25px #8a2be2";

},500);

},1000);

});
