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
      $(".logo").animate({width: '45%', left: "-227px"},1000);
      $(".logo").fadeOut(4000);
  } else {
      $(".logo").fadeOut(4000);
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
  var i =0;
    function slideIn () {
      var index;
      var slides = document.getElementsByClassName("mainscreen");
      for (index = 0; index < slides.length; index++) {
        slides[index].style.display = "none";
      i++;
      if (i > slides.length) {i = 1};
      slides[i-1].style.display = "block";
      setTimeout(showSlides, 5000); // Change image every 2 seconds
      }
    }
  let slidein = setInterval(slideIn, 4000);
//  let slidefade = setInterval(slideFade, 5000);
  let firstslide = setTimeout(firstSlide, 2000)
  let logostart = setTimeout(shrinkLogo, 1000)
});

// First slide shows up
//$(document).ready(function() {

//});

//slideshow on the top of the page
//$(document).ready(function() {

//});




//});
