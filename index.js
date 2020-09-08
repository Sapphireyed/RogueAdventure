$(document).ready(function() {
  $(".menuall").click(function() {
    $(".submenu").toggle()
  });
});

// fadein first screen animation
$(document).ready(function(){
    var o = 0;
  function opacityIn(){
    var el = document.getElementById("first");
    if (o == 1) {
      clerInterval(opacity);
    } else if (o < 0.004) {
      o = o + 0.0001;
      el.style.opacity = o;
    } else if (o < 0.7) {
      o = o + 0.025
      el.style.opacity = o;
      el.style.display = "block"
    } else {
      o += 0.1;
      el.style.opacity = o;
    }
  }
  let opacity = setInterval(opacityIn, 50)

})

$(document).ready(function() {
  // starting animation on page load
  function shrinkLogo() {
    var x = window.matchMedia("(min-width: 700px)")
    if ( x.matches) {
      $(".logo").animate({width: '45%', left: "-227px"},1350);
      $(".logo").fadeOut(3000);
  } else {
      $(".logo").fadeOut(4000);
  }
  };
    let logostart = setTimeout(shrinkLogo, 1000)

 setTimeout(function(){
   $(".prev, .next").fadeIn(1000);
 }, 1500)
});
//$(document).ready(function() {
//$(".mainscreen:gt(0)").hide()

//setInterval(function() {
//  $('.slideshow > .mainscreen:first')
//    .hide()
//    .next()
//    .show()
//    .end()
//    .appendTo('.slideshow');
//}, 5000);
//});

var slideIndex = 0;
showSlides();
var slides;

function showSlides() {
    var i;
    slides = document.getElementsByClassName("mainscreen");
    for (i = 0; i < slides.length; i++) {
       slides[i].style.display = "none";
           slides[slideIndex-1].style.display = "block";
    }
    slideIndex++;
    if (slideIndex> slides.length) {slideIndex = 1}
    setTimeout(showSlides, 4000); // Change image every 8 seconds
}

function plusSlides(n) {
    slideIndex += n;
    if (slideIndex> slides.length) {slideIndex = 1}
    else if(slideIndex<1){slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
       slides[i].style.display = "none";
    }
    slides[slideIndex-1].style.display = "block";
}
