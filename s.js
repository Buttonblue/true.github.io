document.addEventListener("DOMContentLoaded", function() {
    var loader = document.querySelector('.loader');
    var content = document.querySelector('.content');

    setTimeout(function() {
        loader.style.display = 'none';
        content.classList.remove('hidden');
    }, 3000); // 3 segundos después de que la página se haya cargado completamente
});
