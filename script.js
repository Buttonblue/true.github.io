document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function() {
        var video = document.getElementById("background-video");
        video.style.visibility = "visible";
        video.style.opacity = 1;
    }, 30000); // 30 segundos de retraso
});
