let slideshowImages = document.querySelectorAll('#slideshow img');
let currentIndex = 0;
let intervalId;
let isPlaying = true;
function showImage(index) {
    slideshowImages.forEach((img, i) => {
        img.classList.toggle('active', i === index);
    });
    currentIndex = index;
}
function togglePlayPause() {
    const button = document.getElementById('playPauseButton');
    if (isPlaying) {
        clearInterval(intervalId);
        button.textContent = 'Play';
    } else {
        startSlideshow();
        button.textContent = 'Pause';
    }
    isPlaying = !isPlaying;
}
function startSlideshow() {
    intervalId = setInterval(() => {
        const nextIndex = (currentIndex + 1) % slideshowImages.length;
        showImage(nextIndex);
    }, 2000); 
}
function showPrevious() {
    const prevIndex = (currentIndex - 1 + slideshowImages.length) % slideshowImages.length;
    showImage(prevIndex);
}
function showNext() {
    const nextIndex = (currentIndex + 1) % slideshowImages.length;
    showImage(nextIndex);
}
function addImage() {
    const imageURL = document.getElementById('imageURL').value;
    const imageIndex = parseInt(document.getElementById('imageIndex').value, 10);

    if (imageURL && !isNaN(imageIndex) && imageIndex >= 0 && imageIndex <= slideshowImages.length) {
        const newImage = document.createElement('img');
        newImage.src = imageURL;
        newImage.alt = `Movie ${slideshowImages.length + 1}`;
        newImage.style.display = 'none';
        const slideshow = document.getElementById('slideshow');
        const images = Array.from(slideshowImages);
        images.splice(imageIndex, 0, newImage);
        slideshow.innerHTML = '';
        images.forEach(img => slideshow.appendChild(img));
        slideshowImages = document.querySelectorAll('#slideshow img');
        showImage(currentIndex);
        document.getElementById('imageURL').value = '';
        document.getElementById('imageIndex').value = '';
    } else {
        alert('Invalid input. Please check the URL and position.');
    }
}
showImage(currentIndex);
document.getElementById('playPauseButton').addEventListener('click', togglePlayPause);
document.getElementById('prevButton').addEventListener('click', showPrevious);
document.getElementById('nextButton').addEventListener('click', showNext);
document.getElementById('addImageButton').addEventListener('click', addImage);
startSlideshow();