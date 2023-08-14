$(document).ready(function () {
  debugger;
  var targetElement = $('.customControl');

  var styleValue = targetElement.attr('style');

  var styleArray = styleValue.split(';').map(function (item) {
    return item.trim();
  });

  var colorItem = styleArray.find(function (item) {
    return item.startsWith('color:');
  });

  var colorValue = colorItem.split(':')[1].trim();

  console.log('Color value:', colorValue);
});
//************************************************************* */** */
$(document).ready(function () {
  debugger;

  var targetElement = $('.customControl');

  var styleValue = targetElement.attr('style');

  var styleArray = styleValue.split(';').map(function (item) {
    return item.trim();
  });

  var colorItem = styleArray.find(function (item) {
    return item.startsWith('color:');
  });

  var colorValue = colorItem.split(':')[1].trim();

  // Modify the inline style to set color with !important
  targetElement.attr(
    'style',
    styleValue.replace(colorItem, 'color: ' + colorValue + ' !important')
  );

  console.log('Color value modified:', colorValue);
});
