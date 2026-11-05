
const galleryImage = document.getElementById("galleryImage") as HTMLImageElement;

const images: string[] = [
    "https://picsum.photos/id/10/800/500",
    "https://picsum.photos/id/20/800/500",
    "https://picsum.photos/id/30/800/500",
    "https://picsum.photos/id/40/800/500",
    "https://picsum.photos/id/50/800/500"
];

let currentIndex: number = 0;

function changeImage(): void {
    currentIndex = (currentIndex + 1) % images.length;

    galleryImage.style.animation = "none";

    void galleryImage.offsetWidth;

    galleryImage.src = images[currentIndex];

    galleryImage.style.animation = "fadeIn 1s ease-in-out";
}

galleryImage.src = images[currentIndex];

setInterval(changeImage, 3000);
