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

document.addEventListener("DOMContentLoaded", function() {
    // Zoek naar alle headers in het main element
    const headers = document.querySelectorAll('main h2, main h3, main h4');
    const toc = document.getElementById('toc');

    // Voeg een <h2> toe met de tekst "Inhoud"
    const tocTitle = document.createElement('h2');
    tocTitle.textContent = 'Inhoud';
    toc.appendChild(tocTitle);
    toc.appendChild(document.createElement('hr'))
    const tocList = document.createElement('ul');
    toc.appendChild(tocList);

    headers.forEach(header => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.textContent = header.textContent;
        a.href = `#${header.id || header.textContent.toLowerCase().replace(/ /g, '-')}`;
        li.appendChild(a);
        if (header.tagName === 'H3') {
            let lastLi = tocList.lastElementChild;
            if (!lastLi.querySelector('ul')) {
                lastLi.appendChild(document.createElement('ul'));
            }
            lastLi.querySelector('ul').appendChild(li);
            li.classList.add('toc-h3');
        } else if (header.tagName === 'H4') {
            let lastLi = tocList.lastElementChild;
            if (!lastLi.querySelector('ul')) {
                lastLi.appendChild(document.createElement('ul'));
            }
            lastLi.querySelector('ul').appendChild(li);
            li.classList.add('toc-h4');
        } else {
            tocList.appendChild(li);
            li.classList.add('toc-h2');
        }
        
        // Voeg een id toe aan de headers als ze er geen hebben
        if (!header.id) {
            header.id = header.textContent.toLowerCase().replace(/ /g, '-');
        }
    });
});
