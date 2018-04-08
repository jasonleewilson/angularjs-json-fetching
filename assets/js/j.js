$('.footable').footable({
  calculateWidthOverride: function() {
  return {width: $(window).width()};
}
}); 

$( ".night-button" ).click(function() {
  $( "body" ).toggleClass('night-mode');
});

$('.selectpicker').val('100');
$('.selectpicker').selectpicker('render');