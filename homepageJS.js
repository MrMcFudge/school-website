$(document).ready(function() {
  $("#intButton").mouseenter(function() {
    $(this).animate({
      height: "+=10px", width: "+=10px"
    });
    $(this).fadeTo("medium", 2)
  });

  $("#intButton").mouseleave(function() {
    $(this).animate({
      height: "-=10px", width: "-=10px"
    });
    $(this).fadeTo("medium", 0.5)
  });
});
