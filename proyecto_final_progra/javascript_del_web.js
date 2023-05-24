$(document).ready(function() {
  $('form').submit(function(event) {
    event.preventDefault();
    var searchTerm = $('.search-input').val();
    if (searchTerm.length < 3) {
      alert('Por favor, ingrese al menos tres caracteres.');
    } else {
      $('body').unhighlight();
      $('body').highlight(searchTerm);
      var firstHighlight = $('.highlight:first');
      if (firstHighlight.length) {
        $('html, body').animate({
          scrollTop: firstHighlight.offset().top - 100
        }, 1000);
      } else {
        alert('No se encontraron resultados.');
      }
    }
  });
});

$.fn.highlight = function(searchTerm) {
  var regex = new RegExp(searchTerm, 'gi');
  this.each(function() {
    $(this).html($(this).html().replace(regex, '<span class="highlight">$&</span>'));
  });
};

$.fn.unhighlight = function() {
  $(this).find('.highlight').each(function() {
    $(this).replaceWith($(this).text());
  });
};
