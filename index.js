
$(document).ready(function() {
  $(".menuall").click(function() {
    $(".submenu").toggle()
  });
});

// starting animation on page load
$(document).ready(function() {
  function shrinkLogo() {
    var x = window.matchMedia("(min-width: 700px)")
    if ( x.matches) {
      $(".logo").animate({width: '40%'},1000);
      $(".logo").animate({left: "-123px"}, 1000);
      $(".mainscreenimg").removeClass("w3-center");
      $(".mainscreenimg").removeClass("w3-animate-zoom");
      $(".mainscreentext").show(1000)
      $(".maintext").css({"position": "absolute", "right":"10%"});
      $(".logo").addClass("w3-card-4")
      $(".logo").css({"position": "absolute", "margin-top":"90px","margin-left":"18%"});


  } else {
      $(".mainscreentext").css({"width":"100%", "margin-top": "0"})
      $(".mainscreentext").show("slow");
      $(".logo").addClass("w3-card-4");
  }
  };
  let start = setTimeout(shrinkLogo, 1000)
});

//slideshow on thetop ofpage
var slideIndex = 0;
let slideshow = setInterval(showSlides, 3000);

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mainscreen");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";

}
