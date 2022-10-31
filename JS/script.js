{
    const welcome = () => {
        console.log("Witam serdecznie na mojej stronie :) !");
    }

    const toggleHeaderColor = () => {
        const headerTitle = document.querySelector(".js-headerTitle");
        const jsThemeName = document.querySelector(".jsThemeName");
        headerTitle.classList.toggle("header__afterButton");

        jsThemeName.innerText = headerTitle.classList.contains("header__afterButton") ? "Przywróć" : "Zmień"

    };

    const init = () => {
        const button = document.querySelector(".header__button");
        button.addEventListener("click", toggleHeaderColor);


        welcome()
    }

    init()
};