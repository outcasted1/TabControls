$(document).ready(function () {
  $('.customControl')
    .eq(3)
    .click(function () {
      var text = $('.customControl').eq(0).val();

      var pattern = new RegExp('[a-zA-Z0-9]+|\\s+', 'g');

      var words = text.match(pattern);
      var wordsString = words.join('').trim();
      var superText = text.replace(/[a-zA-Z0-9\s]+/g, '');
      var fontFamily = 'Segoe UI Symbol';
      $('.customControl').eq(1).val(wordsString);
      $('.customControl').eq(2).val(superText);   
      $('.customControl').eq(2).css('font-family', fontFamily);
    });
});