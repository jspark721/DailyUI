$(document).ready(function(){
  /* like & shuffle button */
  $('.heart').click(function(){
    $(this).toggleClass('clicked');
  });

  $('.shuffle').click(function(){
    $(this).toggleClass('clicked');
  });

  /*show info box on hover*/
  $('#player').hover(function(){
    $('.info').toggleClass('up');
  });
});
