const randomColor = {
    button: document.querySelector("#random-color-button"),
    input: document.querySelector("#color-text"),
    init: function () {
        this.button.addEventListener("click", (e) => {
            this.getRandomColor();
        });
        this.input.addEventListener("click", (e) => {
            this.copyColorToClipboard();
        });
        this.getRandomColor();

    },
    getRandomColor: function () {
       const newColor = "#" + Math.floor(Math.random()*16777215).toString(16);
       console.log(newColor); 
       this.input.value = newColor;
       document.body.style.background = newColor;
    },

    copyColorToClipboard: function () {
        const value = this.input.value;
        navigator.clipboard.writeText(value)
            .then( function () {
                window.alert("Kolor zapisany w schowku: " + value)
            });
    }
};

randomColor.init();

//randomColor jest obiektem, w którym wszysko definiuje aby na końcu pliku wywołac jego główną metodę -> init
// pobieram sobie querySelectorem button i input jako właściwości (uchwyt do elementów na stronie)
// deklaruje metody -> init (główna metoda) i dwie inne
// W init dodaje do swoich uchwytów addEventListener i invokuje inne funkcje przy tych eventach
// w metodach odwołuję się do moich właściwości input/button przez THIS