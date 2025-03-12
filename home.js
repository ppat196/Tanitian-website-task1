const imgs = ['images/beach1.jpg', 'images/beach2.jpg', 'images/beach3.jpg'];
let currImgIdx = 0;

const mainImage = document.getElementById('main-images');
const nextBtn = document.getElementById('next-img');
const prevBtn = document.getElementById('prev-img');

function updateImage() {
    mainImage.src = imgs[currImgIdx % imgs.length];
}

updateImage();

setInterval(() => {
    currImgIdx = (currImgIdx + 1) % imgs.length;
    updateImage();
}, 2000);

nextBtn.addEventListener('click', (event) => {
    event.preventDefault();
    currImgIdx = (currImgIdx + 1) % imgs.length;
    updateImage();
});

prevBtn.addEventListener('click', (event) => {
    event.preventDefault();
    currImgIdx = (currImgIdx + imgs.length - 1) % imgs.length;
    updateImage();
});
