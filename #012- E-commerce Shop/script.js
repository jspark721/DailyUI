$(document).ready(function(){
  $(".size").on('click', function(){
     $(this).toggleClass('focus').siblings().removeClass('focus');
  })
});
