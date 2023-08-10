$('.customControl');
$('.customControl').eq(0);

$(document).ready(function () {
  $('.customControl')
    .eq(3)
    .click(function () {
      const normalText = $('.customControl').eq(0).val();
      const superscriptText = $('.customControl').eq(1).val();
      const combinedText = normalText + '<sup>' + superscriptText + '</sup>';
      const newParagraph = $('<p>' + combinedText + '</p>');
      $('#printFrameContainer').append(newParagraph);
      $('.customControl').eq(0).val('');
      $('.customControl').eq(1).val('');
    });
});

$(document).ready(function () {
  $('.customControl')
    .eq(4)
    .click(function () {
      debugger;
      var text = $('.customControl').eq(2).val();
      var symbols = ['™', '©'];
      var pattern = new RegExp('(' + symbols.join('|') + ')', 'g');
      var parts = text.split(pattern);
      $('.customControl').eq(0).val(parts[0]);
      $('.customControl').eq(1).val(parts[1]);
    });

  $('.customControl')
    .eq(3)
    .click(function () {
      debugger;
      const normalText = $('.customControl').eq(0).val();
      const superscriptText = $('.customControl').eq(1).val();
      const combinedText = normalText + superscriptText;
      $('.customControl').eq(2).val(combinedText);
      $('.customControl').eq(0).val('');
      $('.customControl').eq(1).val('');
    });
});
