$('.ui-datepicker .ui-datepicker-calendar td a:contains("17")');
$(' .ui-datepicker-month');
$(' .ui-datepicker-year');

$(document).ready(function () {
  var activeElement = $(
    '.ui-datepicker .ui-datepicker-calendar td a.ui-state-highlight'
  );
  var activeElementText = activeElement.text();
  console.log('Text value of active element:', activeElementText);
});

var noOfDays = $(document).ready(function () {
  var a = $('.ui-datepicker .ui-datepicker-calendar td a.ui-state-highlight');
  var b = $('.ui-datepicker .ui-datepicker-calendar td a:contains("x")');
  var noOfDays = 5;
  var valueOfA = parseInt(a.text(), 10);
  var targetValue = valueOfA + noOfDays;
  var targetElement = $(
    '.ui-datepicker .ui-datepicker-calendar td a:contains("' +
      targetValue +
      '")'
  );
  console.log('Target Element:', targetElement);
});
/******************************************************************* */

$(document).ready(function () {
  var todaysDate = $(
    '.ui-datepicker .ui-datepicker-calendar td a.ui-state-highlight'
  );
  var noOfDays = $('.customControl:eq(0)').text();
  debugger;
  var todayValue = parseInt(todaysDate.text(), 10);
  var targetValue = todayValue + noOfDays;
  var datesBetween = $('.ui-datepicker .ui-datepicker-calendar td ').filter(
    function () {
      var currentValue = parseInt($(this).text(), 10);
      return currentValue > todayValue && currentValue <= targetValue;
    }
  );
  datesBetween.addClass('ui-state-disabled');
});

/****************************************************************************** */
/****************************************************************************** */
$(document).ready(function () {
  $('.customControl tbody').click(function () {
    debugger;
    var todaysDate = $(
      '.ui-datepicker .ui-datepicker-calendar td a.ui-state-highlight'
    );
    var noOfDays = $('.customControl:eq(0)').val();
    var todayValue = parseInt(todaysDate.text(), 10);
    var targetValue = todayValue + parseInt(noOfDays, 10);
    var datesBetween = $('.ui-datepicker .ui-datepicker-calendar td a').filter(
      function () {
        var currentValue = parseInt($(this).text(), 10);
        return currentValue > todayValue && currentValue <= targetValue;
      }
    );

    datesBetween.addClass('ui-state-disabled').attr('readonly', true);

    datesBetween.css('pointer-events', 'none');
  });
  $('.customControl input:eq(0)').datepicker();
});
/**************************************************************************** */
$(function () {
  // Initialize the datepicker
  var datepickerElement = $('.ui-datepicker');

  function initializeDatepicker() {
    datepickerElement.datepicker({
      beforeShowDay: function (date) {
        var currentDate = date.getDate();
        var currentMonth = date.getMonth();
        var currentYear = date.getFullYear();

        // Get today's date
        var today = new Date();
        var todayDate = today.getDate();
        var todayMonth = today.getMonth();
        var todayYear = today.getFullYear();

        // Compare the dates
        if (
          currentYear < todayYear ||
          (currentYear === todayYear && currentMonth < todayMonth) ||
          (currentYear === todayYear &&
            currentMonth === todayMonth &&
            currentDate < todayDate)
        ) {
          // Disable past dates
          return [false, 'past-date'];
        }

        // Enable other dates
        return [true, ''];
      },
    });
  }

  // Attach click event to customControl tbody
  $('.customControl tbody').on('click', function () {
    initializeDatepicker();
    datepickerElement.datepicker('show');
  });
});
