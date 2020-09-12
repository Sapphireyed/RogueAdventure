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

//logo zoom in, shrinks and goes to its end position. Starting on page load
$(document).ready(function() {
  function shrinkLogo() {
    var x = window.matchMedia("(min-width: 700px)")
    if ( x.matches) {
      $(".logo").animate({width: '45%', left: "-15%", padding: "20px"},1350);
      $(".logo").fadeOut(2500);
  } else {
      $(".logo").animate({padding: "20px"},1350);
      $(".logo").fadeOut(4000);
  }
  };
    let logostart = setTimeout(shrinkLogo, 1000)

 setTimeout(function(){
   $(".prev, .next").fadeIn(1000);
 }, 2000)
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
//Automaticslideshow
function showSlides() {
    var i;
    slides = document.getElementsByClassName("mainscreen");
    for (i = 0; i < slides.length; i++) {
       slides[i].style.display = "none";
           slides[slideIndex-1].style.display = "block";
    }
    slideIndex++;
    if (slideIndex> slides.length) {slideIndex = 1}
    setTimeout(showSlides, 4000);
}

// Changing slides on next andprev buttons
function plusSlides(n) {
    slideIndex += n;
    if (slideIndex> slides.length) {slideIndex = 1}
    else if(slideIndex<1){slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
       slides[i].style.display = "none";
    }
    slides[slideIndex-1].style.display = "block";
}

//display description of cards/bonuses
$(document).ready(function() {
  var x = window.matchMedia("(min-width: 700px)")
  if ( x.matches) {
  $(".class button").each(function(){
    $(this).on("click", function(){
     if ($(this).val() == "deck") {
       $(".bonuses, .more, .deck").not($(this).parent().find(".deck")).hide();
       $(this).parent().find(".deck").slideToggle("slow")
     } else if ($(this).val() == "bonuses") {
       $(".more, .bonuses, .deck").not($(this).parent().find(".bonuses")).hide();
       $(this).parent().find(".bonuses").slideToggle("slow")
   }
    })
  })
}
  var x = window.matchMedia("(max-width: 700px)")
  if ( x.matches) {
  $(".class button").each(function(){
      $(this).on("click", function(){
        if ($(this).val() == "deck") {
       $(".bonusesmobile, .moremobile, .deckmobile").not($(this).parent().find(".deckmobile")).hide();
       $(this).parent().find(".deckmobile").slideToggle("slow");
//       $(this).parent().find("div:first-child").toggle();
     } else if ($(this).val() == "bonuses") {
       $(".deckmobile, .moremobile, .bonusesmobile").not($(this).parent().find(".bonusesmobile")).hide();
       $(this).parent().find(".bonuses").slideToggle("slow")
//       $(this).parent().find("div:first-child").toggle();
   }
   })
    })
  }
})
