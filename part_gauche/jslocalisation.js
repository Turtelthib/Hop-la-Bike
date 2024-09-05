function toggleFullscreen() {
    var mapContainer = document.getElementById('mapContainer');
    var toggleButton = document.getElementById('toggleButton');
    var mapImage = document.getElementById('mapImage');

    if (mapContainer.classList.contains('fullscreen')) {
        mapImage.src = 'image/earth.png';
        toggleButton.style.transform = 'translate(230%, -710%)';
        toggleButton.textContent = 'Cliquer ici pour avoir une vue plus large';
    } else {
        mapImage.src = 'image/earth_large.png';
        toggleButton.style.transform = 'translate(1300%, -2120%)';
        toggleButton.textContent = 'Réduire';
    }
    mapContainer.classList.toggle('fullscreen');
}