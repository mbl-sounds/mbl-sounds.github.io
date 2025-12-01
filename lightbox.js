// Lightbox logic
document.addEventListener("DOMContentLoaded", () => {
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-image");
    const closeBtn = document.querySelector(".lightbox-close");

    function openLightbox(src, alt) {
        lightboxImg.src = src;
        lightboxImg.alt = alt || "";
        lightbox.classList.add("open");
    }

    function closeLightbox() {
        lightbox.classList.remove("open");
        lightboxImg.src = "";
    }

    // Click on gallery image → open
    document.addEventListener("click", (event) => {
        const img = event.target.closest(".gallery-item img");
        if (img) {
            openLightbox(img.src, img.alt);
        }
    });

    // Click on close button → close
    closeBtn.addEventListener("click", (event) => {
        event.stopPropagation();
        closeLightbox();
    });

    // Click on dark background (outside the inner box) → close
    lightbox.addEventListener("click", (event) => {
        if (event.target === lightbox) {
            closeLightbox();
        }
    });

    // ESC key → close
    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape" && lightbox.classList.contains("open")) {
            closeLightbox();
        }
    });
});
