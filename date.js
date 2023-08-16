$(document).ready(function () {
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth() + 1).padStart(2, '0'); // January is 0!
  var yyyy = today.getFullYear();

  today = dd + '-' + mm + '-' + yyyy;

  $('.customControl input').eq(1).attr('min', today);
});

$(document).ready(function () {
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth() + 1).padStart(2, '0'); var yyyy = today.getFullYear();
  today = dd + '-' + mm + '-' + yyyy;
  $('.customControl input').on('change', function () {
    debugger;
    var selectedDate = $(this).val();
    if (selectedDate < today) {
      $(this).val(today);
    }
  });
});
var dateToday = new Date();    
$(function () {
  $('.customControl input').datepicker({ 
        minDate: dateToday 
    });
});