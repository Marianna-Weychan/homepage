{
    const welcome = () => {
        console.log("Witam serdecznie na mojej stronie :) !");
    }

    const toggleColorHeader = () => {
        const header__title = document.querySelector(".header__title");
        const jsThemeName = document.querySelector(".jsThemeName");
        header__title.classList.toggle("header__afterButton");

        jsThemeName.innerText = header__title.classList.contains("header__afterButton") ? "Przywróć" : "Zmień"

    };

    const init = () => {
        const button = document.querySelector(".header__button");
        button.addEventListener("click", toggleColorHeader);


        welcome()
    }

    init()
};







