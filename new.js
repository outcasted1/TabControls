$('.ui-datepicker ');
$('.ui-datepicker-year');
$('.ui-datepicker-month');
$('.ui-datepicker .ui-datepicker-calendar td a');

var today = new Date();
var todayDate = today.getDate();
var todayMonth = today.getMonth();
var todayYear = today.getFullYear();


function getCurrentDateComponents() {
  var today = new Date();
  var todayDate = today.getDate();
  var todayMonth = today.getMonth();
  var todayYear = today.getFullYear();
  
  return {
    date: todayDate,
    month: todayMonth,
    year: todayYear
  };
}


function setMinDateForInputs() {
  var currentDate = getCurrentDateComponents();
  

  
  dateInput.min = currentDate.date;
  monthInput.min = currentDate.month + 1; 
  yearInput.min = currentDate.year;
}
setMinDateForInputs();

$(function(){
  function getCurrentDateFormatted() {
    var today = new Date();
    var todayDate = today.getDate().toString().padStart(2, '0'); 
    var todayMonth = (today.getMonth() + 1).toString().padStart(2, '0'); 
    var todayYear = today.getFullYear().toString();
  
    const myDate =`${todayDate}-${todayMonth}-${todayYear}`;
    
    return myDate;
  }
  var formattedDate = getCurrentDateFormatted();
  console.log(formattedDate); 

$('.customControl tbody').click(function () {


  var dateValues = $('.ui-datepicker .ui-datepicker-calendar td a:contains('+todayDate+')');
  var monthValues =$('.ui-datepicker-month').val(todayMonth);
  var yearValues = $('.ui-datepicker-year').val(todayYear);


});
});