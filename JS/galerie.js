"use strict";
const galleryImage = document.getElementById("galleryImage");
const images = [
    "https://picsum.photos/id/10/800/500",
    "https://picsum.photos/id/20/800/500",
    "https://picsum.photos/id/30/800/500",
    "https://picsum.photos/id/40/800/500",
    "https://picsum.photos/id/50/800/500"
];
let currentIndex = 0;
function changeImage() {
    currentIndex = (currentIndex + 1) % images.length;
    galleryImage.src = images[currentIndex];
}
galleryImage.src = images[currentIndex];
setInterval(changeImage, 3000);
