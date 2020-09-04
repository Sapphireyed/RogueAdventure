
$(document).ready(function() {
  $(".menuall").click(function() {
    $(".submenu").toggle()
  });
});

$(document).ready(function() {
  $(".logo").click(function() {
    $(".mainscreenimg").removeClass("w3-center");
    $(".mainscreenimg").addClass("w3-col s6");
    $(".maintext").addClass("w3-card-4");
    $(".mainscreentext").show("slow")
    $(".maintext").css({"position": "absolute", "right":"10%"});
    $(this).addClass("w3-card-4")
    $(this).css({"position": "absolute", "margin-top":"110px","margin-left":"18%"});
    $(this).animate({width: '80%'},"slow");
  });
});
