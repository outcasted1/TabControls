$('.customControl')
$('.customControl').eq(0)






$(document).ready(function() {
  $('.customControl').eq(3).click(function() {
      const normalText = $('.customControl').eq(0).val();
      const superscriptText = $('.customControl').eq(1).val();
      const combinedText = normalText + '<sup>' + superscriptText + '</sup>';   
      const newParagraph = $('<p>'+ combinedText+'</p>');
      $('#printFrameContainer').append(newParagraph);
     

     
      $('.customControl').eq(0).val('');
      $('.customControl').eq(1).val('');
  });
});