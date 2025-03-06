document.addEventListener("DOMContentLoaded", function () {
    const gallery = document.getElementById("gallery");

    const imageCount = 13;  // Nombre d'images à afficher à adapter au fil des ajouts
    const images = [];      // Contiendra la source des images
    let titres_images = ["Sorti de nulle part...", "Passion vivante", "Les Machines de l'Île de Nantes", "Célébrer pour honorer", 
        "Patrimoine","Au sommet","Au clair de lune","Lys martagon","Paisible campagne","Sur la crête","« Aux Grands Hommes, la Patrie reconnaissante »", "Palais du Luxembourg","Coupole du Panthéon"]; // Titres des igms

    for (let i = imageCount; i >= 1; i--) {
        images.push(`photo_${i}.jpg`);  // Adapter l'extension au besoin
    }

    // Transformer img.alt en le véritable titre de la photo !!

    images.forEach(src => {
        const img = document.createElement("img");
        img.src = "./photos_gallerie/" + src;
        i_str = src.split("_")[1].split(".")[0]
        i = parseInt(i_str, 10) -1 ;
        img.alt = titres_images[i];
        img.classList.add("gallery-img");
        gallery.appendChild(img);

        // Lightbox effect
        img.addEventListener("click", function () {
            openLightbox(src, img.alt);
        });
    });

    // Lightbox
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");
    const caption = document.getElementById("caption");
    const closeBtn = document.querySelector(".close");

    function openLightbox(src, alt) {
        lightbox.style.display = "flex";
        lightboxImg.src = "./photos_gallerie/" + src;
        caption.innerText = alt;
    }

    closeBtn.addEventListener("click", function () {
        lightbox.style.display = "none";
    });

    lightbox.addEventListener("click", function (e) {
        if (e.target === lightbox) {
            lightbox.style.display = "none";
        }
    });
});
