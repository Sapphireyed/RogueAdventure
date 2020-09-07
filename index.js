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
      $(".logo").animate({width: '45%', left: "-227px"},1500);
      $(".logo").fadeOut(3000);
  } else {
      $(".logo").fadeOut(4000);
  }
  };
    let logostart = setTimeout(shrinkLogo, 1000)

//  var slides = document.getElementsByClassName("mainscreen");
});
$(document).ready(function() {
$(".mainscreen:gt(0)").hide()

setInterval(function() {
  $('.slideshow > .mainscreen:first')
    .fadeOut(1000)
    .next()
    .fadeIn(2000)
    .end()
    .appendTo('.slideshow');
}, 5000);
});
