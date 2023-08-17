$(function () {
  $(
    '.customControl tbody, .ui-datepicker-header a, .ui-datepicker-header div'
  ).click(function () {
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
$(function () {
  $(
    '.customControl tbody, .ui-datepicker-header a, .ui-datepicker-header div'
  ).click(function () {
    var today = new Date();
    var todayDate = today.getDate();
    var todayMonth = today.getMonth();
    var todayYear = today.getFullYear();
    var noOfDays = parseInt($('.clcontrol-textbox').val());

    $('.ui-datepicker-calendar td a').each(function () {
      var dateElement = $(this);
      var date = parseInt(dateElement.text());
      var month = $('.ui-datepicker-month').val();
      var year = $('.ui-datepicker-year').val();

      if (year >= todayYear || (year === todayYear && month >= todayMonth)) {
        if (date >= todayDate && date <= todayDate + noOfDays) {
          dateElement.removeClass('ui-state-disabled');
          dateElement.parent().removeClass('ui-datepicker-unselectable');
        } else {
          dateElement.addClass('ui-state-disabled');
          dateElement.parent().addClass('ui-datepicker-unselectable');
        }
      }
    });

    $('.ui-datepicker-month option').each(function () {
      var monthElement = $(this);
      var monthValue = parseInt(monthElement.val());

      if (
        todayYear === parseInt($('.ui-datepicker-year').val()) &&
        monthValue > todayMonth
      ) {
        monthElement.prop('disabled', true);
      } else if (todayYear < parseInt($('.ui-datepicker-year').val())) {
        monthElement.prop('disabled', true);
      }
    });

    $('.ui-datepicker-year option').each(function () {
      var yearElement = $(this);
      var yearValue = parseInt(yearElement.val());

      if (yearValue > todayYear) {
        yearElement.prop('disabled', true);
      }
    });
  });
});

$(document).ready(function () {
  var noOfDays = parseInt($('.clcontrol-textbox').val());

  $("input[name='DateTimePicker1']").datepicker({
    dateFormat: 'dd-mm-yy',
    minDate: '-0D',
    maxDate: '+' + noOfDays + 'D',
  });
});

//********************************************************************* */

$(document).ready(function () {
  $('input[name="DateTimePicker1"]').addClass('dateInput');
});

$(function () {
  $('.customControl tbody').click(function () {
    $('.dateInput:eq(0)').datepicker();

    var minDate = new Date();
    var maxDate = new Date();

    minDate.setDate(minDate.getDate() - 7);
    maxDate.setDate(maxDate.getDate() + 7);

    $('.dateInput:eq(0)').datepicker('option', 'minDate', minDate);
    $('.dateInput:eq(0)').datepicker('option', 'maxDate', maxDate);
  });
});

$(function () {
  $('.customControl tbody').click(function () {
    $('.dateInput:eq(0)').datepicker();
    var minDate = new Date();

    var numberOfDays = parseInt($('.clcontrol-textbox').val());
    var maxDate = new Date();
    maxDate.setDate(maxDate.getDate() + numberOfDays);

    $('.dateInput:eq(0)').datepicker('option', 'minDate', minDate);
    $('.dateInput:eq(0)').datepicker('option', 'maxDate', maxDate);
  });
});
//************************************************************************************** */
$(function () {
  $('.customControl tbody').click(function () {
    var minDate = new Date();
    var numberOfDays = parseInt($('.clcontrol-textbox').val());
    var maxDate = new Date();
    maxDate.setDate(maxDate.getDate() + numberOfDays);

    // Update the Datepicker options, and open it immediately
    $('.dateInput:eq(0)')
      .datepicker('option', 'minDate', minDate)
      .datepicker('option', 'maxDate', maxDate)
      .datepicker('show');
  });
});

/********************************************************************************** */