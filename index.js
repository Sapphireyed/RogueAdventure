$(document).ready(function() {
  $(".menuall").click(function() {
    $(".submenu").toggle()
  });
});

$(document).ready(function(){
    var o = 0;
  function opacityIn(){
    var el = document.getElementById("first");

    if (o < 0.004) {
      o = o + 0.0001;
      el.style.opacity = o;
    } else if (o < 0.7) {
      o = o + 0.025
      el.style.opacity = o;
    } else {
      o += 0.1;
      el.style.opacity = o;
    }
  }
//  let start = setTimeout(function() {
  let opacity = setInterval(opacityIn, 50)
//},1000)
})
// starting animation on page load
$(document).ready(function() {
  function shrinkLogo() {
    var x = window.matchMedia("(min-width: 700px)")
    if ( x.matches) {
      $(".logo").animate({width: '45%', left: "-227px"},1000);
      $(".logo").fadeOut(3000);
  } else {
      $(".logo").fadeOut(3000);
  }
  };
  function firstSlide() {
    var x = window.matchMedia("(min-width: 700px)")
    if ( x.matches) {
      $(".mainscreen").fadeIn(2000);
  } else {
     $(".mainscreen").fadeIn(1500);
  }
  };
//  function slideFade() {
//    $(".mainscreen").fadeOut(2000)
//  };
var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mainscreen");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 4500); // Change image every 2 seconds
}
//  let slidefade = setInterval(slideFade, 5000);
//  let firstslide = setTimeout(firstSlide, 2000)
  let logostart = setTimeout(shrinkLogo, 1000)
});

// First slide shows up
//$(document).ready(function() {

//});

//slideshow on the top of the page
//$(document).ready(function() {

//});




//});
