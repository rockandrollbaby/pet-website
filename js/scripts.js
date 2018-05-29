$(document).ready(function() {
  $("button#black").click(function() {
    $("body").removeClass();
  $("body").addClass("black-background");
  });

  $("button#beige").click(function() {
    $("body").removeClass();
   $("body").addClass("white-background");
  });
});
