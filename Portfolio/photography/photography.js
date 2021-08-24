
document.addEventListener('load', function() {
    var scale = 1 / (window.devicePixelRatio || 1);
    var content = 'width=device-width, initial-scale=' + scale;

    document.querySelector('meta[name="viewport"]').setAttribute('content', content)
}, false)


function openModal() {
    document.getElementById("myModal").style.display = "block";
}

function closeModal() {
    document.getElementById("myModal").style.display = "none";
}

jQuery(document).keydown(function(e){
    if (e.keyCode == 37) {
        plusSlides(-1)
    }
    if (e.keyCode == 39) {
        plusSlides(+1)
    }
});

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("demo");
    var captionText = document.getElementById("caption");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
    captionText.innerHTML = dots[slideIndex-1].alt;
}


/*
Using getElementsByClassName() will return all the elements with that class name in a document
 */



