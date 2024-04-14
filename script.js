window.addEventListener('scroll', function () {
    const parallaxImage = document.getElementById('heroImage');
    const parallaxHeader = document.getElementById('parallaxHeader');
    const scrollPosition = window.scrollY;
    parallaxImage.style.transform = 'translateY(' + scrollPosition * -1.5 + 'px)';
    parallaxHeader.style.transform = 'translateY(' + scrollPosition * -1.5 + 'px)';
});

var images = document.querySelectorAll('.expandable-img');
var expandedImage = document.getElementById('expandedImage');
var overlay = document.getElementById('overlay');

// Loop through each image and add a click event listener
images.forEach(function (image) {
    image.addEventListener('click', function () {
        // When any image is clicked, print its src
        console.log('Image source:', this.src);
        expandedImage.src = this.src
        overlay.classList.add("open")
    });
});