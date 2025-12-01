document.addEventListener("DOMContentLoaded", () => {
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-image");
    const closeBtn = document.querySelector(".lightbox-close");

    // All gallery images on the page (in order)
    let galleryImages = Array.from(document.querySelectorAll(".gallery-item img"));
    let currentIndex = -1;

    function openLightboxAt(index) {
        if (galleryImages.length === 0) return;
        if (index < 0) index = galleryImages.length - 1;
        if (index >= galleryImages.length) index = 0;

        const img = galleryImages[index];
        if (!img) return;

        currentIndex = index;
        lightboxImg.src = img.src;
        lightboxImg.alt = img.alt || "";
        lightbox.classList.add("open");
    }

    function closeLightbox() {
        lightbox.classList.remove("open");
        lightboxImg.src = "";
        currentIndex = -1;
    }

    // CLICK: open lightbox when a gallery image is clicked
    document.addEventListener("click", (event) => {
        const img = event.target.closest(".gallery-item img");
        if (!img) return;

        // Find index of clicked image in the gallery list
        const index = galleryImages.indexOf(img);
        if (index !== -1) {
            openLightboxAt(index);
        }
    });

    // CLICK: close button
    if (closeBtn) {
        closeBtn.addEventListener("click", (event) => {
            event.stopPropagation();
            closeLightbox();
        });
    }

    // CLICK: clicking the dark background closes the lightbox
    lightbox.addEventListener("click", (event) => {
        if (event.target === lightbox) {
            closeLightbox();
        }
    });

    // KEYBOARD: Esc closes, arrows go prev/next
    document.addEventListener("keydown", (event) => {
        if (!lightbox.classList.contains("open")) return;

        if (event.key === "Escape") {
            event.preventDefault();
            closeLightbox();
        } else if (event.key === "ArrowRight") {
            event.preventDefault();
            openLightboxAt(currentIndex + 1);
        } else if (event.key === "ArrowLeft") {
            event.preventDefault();
            openLightboxAt(currentIndex - 1);
        }
    });

    // In case the gallery is dynamic (JS-built) and may change later:
    // you can re-scan images if needed:
    // galleryImages = Array.from(document.querySelectorAll(".gallery-item img"));
});
