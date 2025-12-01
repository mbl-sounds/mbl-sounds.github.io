// gallery.js

function shuffle(array) {
    const a = array.slice();
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

function buildGallery(containerId, opts = {}) {
    const container = document.getElementById(containerId);
    if (!container || typeof galleryImages === "undefined") return;

    const ordered = opts.random ? shuffle(galleryImages) : galleryImages;
    const subset = opts.limit ? ordered.slice(0, opts.limit) : ordered;

    subset.forEach(item => {
        const fig = document.createElement("figure");
        fig.className = "gallery-item";

        const img = document.createElement("img");
        img.src = item.src;
        img.alt = item.alt || "";
        img.loading = "lazy";

        fig.appendChild(img);
        container.appendChild(fig);
    });
}

document.addEventListener("DOMContentLoaded", () => {
    buildGallery("project-gallery", {
        random: true,
        limit: 12, // optional
    });
});
