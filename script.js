//document.addEventListener("DOMContentLoaded", function() {
//    setTimeout(function() {
//        var video = document.getElementById("background-video");
//        video.style.visibility = "visible";
//        video.style.opacity = 1;
//    }, 30000); // 30 segundos de retraso
//});
document.addEventListener("DOMContentLoaded", function() {
    // Mostrar video después de 30 segundos
    setTimeout(function() {
        var video = document.getElementById("background-video");
        video.style.visibility = "visible";
        video.style.opacity = 1;
    }, 30000); // 30 segundos de retraso

    var video = document.getElementById("background-video");
    var message = document.getElementById("message");

    video.addEventListener("ended", function() {
        // Cuando el video termina, ocultamos el video y mostramos el mensaje
        video.style.display = "none";
        message.classList.remove("hidden");
    });
});
