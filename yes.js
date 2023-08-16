$(function () {
  $('.customControl tbody').click(function () {
    var today = new Date();
    var todayDate = today.getDate();
    var todayMonth = today.getMonth();
    var todayYear = today.getFullYear();

    // Disable dates
    $('.ui-datepicker-calendar td a').each(function () {
      var dateElement = $(this);
      var date = parseInt(dateElement.text());

      var month = $('.ui-datepicker-month').val();
      var year = $('.ui-datepicker-year').val();

      if ((year <= todayYear && month <= todayMonth) || year < todayYear) {
        if (date < todayDate) {
          dateElement.addClass('ui-state-disabled');
          dateElement.parent().addClass('ui-datepicker-unselectable');
        }
      }
    });

    // Disable months
    $('.ui-datepicker-month option').each(function () {
      var monthElement = $(this);
      var monthValue = parseInt(monthElement.val());

      var year = $('.ui-datepicker-year').val();

      if ((year <= todayYear && monthValue < todayMonth) || year < todayYear) {
        monthElement.prop('disabled', true);
      }
    });

    // Disable years
    $('.ui-datepicker-year option').each(function () {
      var yearElement = $(this);
      var yearValue = parseInt(yearElement.val());
      if (yearValue < todayYear) {
        yearElement.prop('disabled', true);
      }
    });
  });
});
/**************** */
//Updated for past
$(function () {
  $('.customControl tbody').click(function () {
    var today = new Date();
    var todayDate = today.getDate();
    var todayMonth = today.getMonth();
    var todayYear = today.getFullYear();

    var selectedMonth = parseInt($('.ui-datepicker-month').val());
    var selectedYear = parseInt($('.ui-datepicker-year').val());

    $('.ui-datepicker-calendar td a').each(function () {
      var dateElement = $(this);
      var date = parseInt(dateElement.text());

      if (
        (selectedYear <= todayYear && selectedMonth <= todayMonth) ||
        selectedYear < todayYear
      ) {
        if (date < todayDate) {
          dateElement.addClass('ui-state-disabled');
          dateElement.parent().addClass('ui-datepicker-unselectable');
        }
      }
    });

    $('.ui-datepicker-month option').each(function () {
      var monthElement = $(this);
      var monthValue = parseInt(monthElement.val());

      if (
        (selectedYear <= todayYear && monthValue < todayMonth) ||
        selectedYear < todayYear
      ) {
        monthElement.prop('disabled', true);
      }
    });

    $('.ui-datepicker-year option').each(function () {
      var yearElement = $(this);
      var yearValue = parseInt(yearElement.val());
      if (yearValue < todayYear) {
        yearElement.prop('disabled', true);
      }
    });
  });
});
// Updated for future
$(function(){
  $('.customControl tbody').click(function () {
    var today = new Date();
    var todayDate = today.getDate();
    var todayMonth = today.getMonth();
    var todayYear = today.getFullYear();

    $('.ui-datepicker-calendar td a').each(function() {
      var dateElement = $(this);
      var date = parseInt(dateElement.text());
      var month = $('.ui-datepicker-month').val();
      var year = $('.ui-datepicker-year').val();

      if (year >= todayYear || (year === todayYear && month >= todayMonth)) {
        if (date > todayDate) {
          dateElement.addClass('ui-state-disabled');
          dateElement.parent().addClass('ui-datepicker-unselectable');
        }
      }
    });

    $('.ui-datepicker-month option').each(function() {
      var monthElement = $(this);
      var monthValue = parseInt(monthElement.val());

      if (todayYear === parseInt($('.ui-datepicker-year').val()) && monthValue > todayMonth) {
        monthElement.prop('disabled', true);
      } else if (todayYear < parseInt($('.ui-datepicker-year').val())) {
        monthElement.prop('disabled', true);
      }
    });

    $('.ui-datepicker-year option').each(function() {
      var yearElement = $(this);
      var yearValue = parseInt(yearElement.val());

      if (yearValue > todayYear) {
        yearElement.prop('disabled', true);
      }
    });
  });
});

//*************************************/
$(function () {
  $('.customControl tbody').click(function () {
    debugger;

    var today = new Date();
    var todayDate = today.getDate();
    var todayMonth = today.getMonth();
    var todayYear = today.getFullYear();

    var selectedMonth = parseInt($('.ui-datepicker-month').val());
    var selectedYear = parseInt($('.ui-datepicker-year').val());

    $('.ui-datepicker-calendar td a').each(function () {
      var dateElement = $(this);
      var date = parseInt(dateElement.text());

      if (selectedYear === todayYear && selectedMonth === todayMonth) {
        if (date < todayDate || date > todayDate + 10) {
          dateElement.addClass('ui-state-disabled');
          dateElement.parent().addClass('ui-datepicker-unselectable');
        } else {
          dateElement.removeClass('ui-state-disabled');
          dateElement.parent().removeClass('ui-datepicker-unselectable');
        }
      } else if (selectedYear >= todayYear && selectedMonth >= todayMonth) {
        dateElement.removeClass('ui-state-disabled');
        dateElement.parent().removeClass('ui-datepicker-unselectable');
      } else {
        dateElement.addClass('ui-state-disabled');
        dateElement.parent().addClass('ui-datepicker-unselectable');
      }
    });

    $('.ui-datepicker-month option').each(function () {
      var monthElement = $(this);
      var monthValue = parseInt(monthElement.val());

      if (
        selectedYear < todayYear ||
        (selectedYear === todayYear && monthValue < todayMonth)
      ) {
        monthElement.prop('disabled', true);
      }
      if (
        selectedYear > todayYear ||
        (selectedYear === todayYear && monthValue < todayMonth)
      ) {
        monthElement.prop('disabled', false);
      }
    });

    $('.ui-datepicker-year option').each(function () {
      var yearElement = $(this);
      var yearValue = parseInt(yearElement.val());

      if (yearValue < todayYear) {
        yearElement.prop('disabled', true);
      }
      if (yearValue > todayYear) {
        yearElement.prop('disabled', false);
      }
    });
  });
});
