console.log("Witam serdecznie na mojej stronie :) !");

let button = document.querySelector(".header__button");
let header__title = document.querySelector(".header__title");
let jsThemeName = document.querySelector(".jsThemeName");


button.addEventListener("click", () => {

    header__title.classList.toggle("header__afterButton");

    jsThemeName.innerText = header__title.classList.contains("header__afterButton") ? "Przywróć" : "Zmień"

}
);

