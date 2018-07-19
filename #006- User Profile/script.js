$(document).ready(function(){
  $(".menu").click(function(){
    $(this).toggleClass("open");
    $("#overlay").toggleClass("view");
    $(".background").toggleClass("show");
  });
});
