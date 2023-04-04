window.onscroll = function() {  
var currentScrollPos = window.pageYOffset;
var width = window.innerWidth;
var d = document.getElementById('carouselControlsIndex');
var prevScrollpos = d.offsetTop + (d.clientHeight/2);
  if (prevScrollpos > currentScrollPos && width > 500) {
    document.getElementById("side-bar").style.right = "-150px";
  } else {
    document.getElementById("side-bar").style.right = "0px";
  }
  prevScrollpos = currentScrollPos;
}




$(document).ready(function() {
  // Agrega un desplazamiento suave a todos los enlaces internos
  $('a[href^="#"]').on('click', function(event) {
    var target = $(this.getAttribute('href'));
    if (target.length) {
      event.preventDefault();
      if (!$('html').hasClass('animated') && !$('body').hasClass('animated')) {
        $('html, body').addClass('animated');
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          $('html, body').removeClass('animated');
        });
      }
    }
  });
});


// window.addEventListener("shown.bs.modal", function(){
//   modalaaa.modal('shown');
//   alert("I want this to appear after the modal has opened!");
// });

