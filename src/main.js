document.addEventListener("DOMContentLoaded", () => {
    console.log("Página cargada. Recursos listos.");

    iniciarScrollSuave();
    cargarVideosDiferidos();
    alternarModoOscuro();
});

// 🚀 Scroll suave entre secciones
function iniciarScrollSuave() {
    document.querySelectorAll("nav a").forEach(enlace => {
        enlace.addEventListener("click", event => {
            event.preventDefault();
            document.querySelector(event.target.getAttribute("href")).scrollIntoView({
                behavior: "smooth"
            });
        });
    });
}

// 🎥 Carga diferida de iframes de YouTube
function cargarVideosDiferidos() {
    const videos = document.querySelectorAll("iframe[data-src]");
    videos.forEach(video => {
        video.setAttribute("src", video.getAttribute("data-src"));
        video.removeAttribute("data-src");
    });
}

