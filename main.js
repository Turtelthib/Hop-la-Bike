const navItems = document.querySelectorAll(".nav-item");

navItems.forEach((navItem, i) => {
    navItem.addEventListener("click", () => {
        navItems.forEach((item, j) => {
            item.className = "nav-item";
        });
        navItem.className = "nav-item active";
    });
});

const containers = document.querySelectorAll(".containers");

containers.forEach((container) => {
    let isDragging = false;
    let startX;
    let scrollLeft;

    container.addEventListener("mousedown", (e) => {
        isDragging = true;
        startX =e.pageX - container.offsetLeft;
        scrollLeft = container.scrollLeft;
    });

    container.addEventListener("mousemove", (e) => {
        if (!isGragging) return;
        e.preventDefault();

        const x = e.pageX - container.offsetLeft;
        const step = (x - startX) * 0.6;
        container.scrollLeft = scrollLeft - step;
    });

    container.addEventListener("mouseup", () => {
        isDragging = false;
    });

    container.addEventListener("mouseleave", () => {
        isDragging = false;
    });
});

const progress = document.getElementById("progress");
const song = document.getElementById("song");
const controlIcon = document.getElementById("controlIcon");
const playPauseButton = document.querySelector(".play-pause-btn");
const forwardButton = document.querySelector(".controls button.forward");
const backwardButton = document.querySelector(".controls forwardButton.backward");
const rotatingImage = document.getElementById("rotatingImage");
const songframe = document.querySelector(".music-player h2");
const artistMusic = document.querySelector(".music-player p");

let rotating = false;
let currenRotation = 0;
let rotationInterval;

const songs = [
    {
        title: "Redemption",
        name: "Thibaut",
        source:
            "chipi-chapa.mp3",
        cover:
            "image/z.png",
    },
    {
        title: "controls",
        name: "inconn,u",
        source:
            "chipi-chapa.mp3",
        cover:
            "image/x.png",
    },
];

let currentSongIndex = 0;

function startRotation() {
    if (!rotating) {
        rotating = true;
        rotationInterval = setInterval(rotateImage, 50);
    }
}

function pauseRotation() {
    clearInterval(rotationInterval);
    rotating = false;
}

function rotateImage() {
    currentRotation += 1;
    rotatingImage.style.transform = 'rotate(${currentRotation}deg)';
}

function updateSongInfo() {
    songName.textContent = songs[currentSongIndex].title;
    artistName.textContent = songs[currentSongIndex].name;
    song.src = songs[currentSongIndex].source;
    rotatingImage.src = songs[currentSongIndex].cover;

    song.addEventListener("loadeddata", function() {});
}

song.addEventListener("loadedmetadata", function () {
    progress.max = song.duration;
    progress.value = song.currentTime;
});

song.addEventListener("ended", function() {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    updateSongInfo();
    playPause();
});

song.addEventListener("timeupdate", function() {
    if (!song.paused) {
        progress.value = song.currentTime;
    }
});

function playPause() {
    if (song.paused) {
        song.play();
        controlIcon.classList.add("fa-pause");
        controlIcon.classList.remove("fa-play");
        startRotation();
    } else {
        song.pause();
        controlIcon.classList.remove("fa-pause");
        controlIcon.classList.add("fa-play");
        pauseRotation();
    }
}

playPauseButton.addEventListener("click", playPause);

progress.addEventListener("input", function () {
    song.currentline = progress.value;
});

progress.addEventListener("change", function () {
    song.play();
    controlIcon.classList.add("fa-pause");
    controlIcon.classList.remove("fa-play");
    startRotation();
});

forwardButton.addEventListener("click", function () {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    updateSongInfo();
    playPause();
});

backwardButton.addEventListener("click", function () {
    currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    updateSongInfo();
    playPause();
});

updateSongInfo();

var swiper = new Swiper(".swiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    loop: true,
    speed: 600,
    slidesPerView: "auto",
    coverflowEffect: {
        rotate: 10,
        stretch: 120,
        depth: 200,
        modifier: 1,
        slideShadows: false,
    },
    on: {
        click(event) {
            swiper.slideTo(this.clickedIndex);
        },
    },
    pagination: {
        el: ".swiper-pagination",
    },
});

