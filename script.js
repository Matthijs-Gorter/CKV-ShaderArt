window.addEventListener('scroll', function () {
    const parallaxImage = document.getElementById('heroImage');
    const parallaxHeader = document.getElementById('parallaxHeader');
    const scrollPosition = window.scrollY;
    parallaxImage.style.transform = 'translateY(' + scrollPosition * -1.5 + 'px)';
    parallaxHeader.style.transform = 'translateY(' + scrollPosition * -1.5 + 'px)';
});
