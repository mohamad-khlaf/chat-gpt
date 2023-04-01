

// Get the modal
var modal = document.getElementById("testimonials-modal");

// Get Img IN Modal
var modalImg = document.getElementById("testimonials-caption-img-modal");
// Get Caption IN Modal
var captionText = document.getElementById("testimonials-caption");

// Get All Imgs 
let testimonialsImg = document.querySelectorAll('.testimonials-section img');
testimonialsImg.forEach(function(img) {
    img.addEventListener('click', function () {
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
        console.log(img);
    })
})


// Get the <span> element that closes the modal
var span = document.querySelector(".testimonials-section .close");

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modal.style.display = "none";
}