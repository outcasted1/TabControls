$('.customControl');
$('.customControl').eq(0);
$('sup');
$('.customControl').eq(0).val(parts[1]);
$('.customControl').eq(1).val(parts[2]);

/*$(document).ready(function () {
  $('.customControl')
    .eq(4)
    .click(function () {
      debugger;
      var text = $('.customControl').eq(2).val();
      var pattern = new RegExp('[a-zA-Z0-9]+|\\s+', 'g');
      var words = text.match(pattern);

      if (!words) {
        var remainingCharacters = text.replace(/[a-zA-Z0-9\s]+/g, '');
        $('.customControl').eq(1).val(remainingCharacters);
        console.log('Remaining characters:', remainingCharacters);
      } else {
        for (var i = 0; i < words.length; i++) {
          var word = words[i].trim();
          var specificPattern = new RegExp('[a-zA-Z]+');
          if (specificPattern.test(word)) {
            $('.customControl').eq(0).val(word);
            console.log('Word matches the specific pattern:', word);
          } else {
            console.log("Word doesn't match the specific pattern:", word);
          }
        }
      }
    });
});*/
//**************************************************************************************************** */
/*$(document).ready(function () {
  $('.customControl')
    .eq(4)
    .click(function () {
      debugger;
      var text = $('.customControl').eq(2).val();

      for (var i = 0; i < text.length; i++) {
        var character = text[i];
        var specificPattern = new RegExp('[a-zA-Z0-9]');
        if (specificPattern.test(character)) {
          $('.customControl').eq(0).val(text);
          console.log('Character matches the specific pattern:', character);
        } else if (character === ' ') {
          console.log('Space:', character);
        } else {
          $('.customControl').eq(1).val(character);
          console.log(
            "Character doesn't match the specific pattern:",
            character
          );
        }
      }
    });
});*/
//******************************************************************************************* */
/*$(document).ready(function () {
  $('.customControl')
    .eq(4)
    .click(function () {
      debugger;
      var text = $('.customControl').eq(2).val();
      var pattern = new RegExp('[a-zA-Z0-9]+|\\s+', 'g');
      var words = text.match(pattern);

      if (words) {
        for (var i = 0; i < words.length; i++) {
          var character = words[i];
          var specificPattern = new RegExp('[a-zA-Z0-9]');
          if (specificPattern.test(character)) {
            $('.customControl').eq(0).val(words);
            console.log('Character matches the specific pattern:', character);
          } else if (character === ' ') {
            console.log('Space:', words);
          } 
        }
      }
      {
        var remainingCharacters = text.replace(/[a-zA-Z0-9\s]+/g, '');
        $('.customControl').eq(1).val(remainingCharacters);
        console.log('Remaining characters:', remainingCharacters);
      }
    });
});*/
//******************************************************************* */
$(document).ready(function () {
  $('.customControl')
    .eq(3)
    .click(function () {
      var text = $('.customControl').eq(0).val();

      var pattern = new RegExp('[a-zA-Z0-9]+|\\s+', 'g');

      var words = text.match(pattern);
      var wordsString = words.join('').trim();
      var superText = text.replace(/[a-zA-Z0-9\s]+/g, '');

      $('.customControl').eq(1).val(wordsString);
      $('.customControl').eq(2).val(superText);
    });
});
//*************************************************************************
