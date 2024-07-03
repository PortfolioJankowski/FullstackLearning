const lightbox = {
    gallery: document.querySelector(".gallery"),
    init: function() {
        this.container = document.createElement("div");
        this.container.id = "lightbox";
        document.body.appendChild(this.container);
        this.lightboxImg = document.createElement("img");
        this.container.appendChild(this.lightboxImg);

        this.loadImages();
    },
    loadImages: function(keywordsArr, defSize="300x300") {
        let keywords = ["car", "bicycle", "sun", "programming", "sigma", "house"];
        if (keywordsArr) keywords = keywordsArr;
        let htmlCode = "";

        for (let keyword of keywords) {
            keyword = keyword.trim().toLowerCase();
            const urlAddress = `https://source.unsplash.com/${defSize}?${keyword}`;
            htmlCode += `<img src="${urlAddress}" />`;
            console.log(`<img src="${urlAddress}" />`);
        }
        this.gallery.innerHTML = htmlCode;

        this.addListeners();
    },
    addListeners: function() {
        const images = document.querySelectorAll(".gallery img");
        images.forEach(img => img.addEventListener("click", (event) => this.galleryImgClicked(img)));

        this.container.addEventListener("click", (event) => this.hideLightbox());
    },
    galleryImgClicked: function(img) {
        this.lightboxImg.src = img.src;
        this.container.classList.add("active");
    },
    hideLightbox: function() {
        this.container.classList.remove("active");
    }
};

lightbox.init();

// jeszcze lightboxa nie ma na stronie a mimo to już CSS jest dodany
// dlatego this.container.id = "lightbox" to przypisanie tego stylu do elementu
// dodaje już wystylowany lightbox do diva, a do lightboxa dodaje zdjęcie (też jest styl na #lightbox img)
// później po kliknieciu zdjęcia z galerii będą przypisywał do atrybutu src dla img w lightboxie src klikniętego img

//fajnie robiony jest dynamiczny link poprzez backticki (tylda) i dolar{}

//fajne użycie querySelectorAll .galery img -> pobieram wszystkie img w klasie galeria
//żeby użyć metody forEach i iteracyjnie dodać eventListenery