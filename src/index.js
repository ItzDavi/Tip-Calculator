function calculate() {
  //Initialize all the variables needed
  //The bill amount given by the people
  var billAmount = document.getElementById('bill-amount').value;

  //The service quality rate using the option tags to get directly the value
  var serviceQuality = document.getElementById('service-quality').value;

  //Number of people dividing the total tip
  var tipSharing = document.getElementById('tip-sharing').value;

  //Amount of dollars of tip divided by the number of the people
  var tipSplitted = document.getElementById('tip-splitted');

  //Currently useless variable
  //var tipEach = document.getElementById('tip-each');

  //Check of the bill amount has value, if not AN AL-ERT will show up
  if (billAmount == 0 || billAmount === '') {
    alert('Please enter a value for the bill in numbers');
    return;
  }

  /*if (tipSharing <= 1 OR tipSharing === '') {
    tipSharing = 1;
    tipEach.style.display = 'none';
  } else {
    tipEach.style.display = 'block';
  }
}*/

  //                 $$ of bill * 0 or 0.05 or 0.1... / number of people
  var tipSplitted = (billAmount * serviceQuality / tipSharing);

  //Roundindingding to two decimals
  tipSplitted = Math.round(tipSplitted * 100) / 100;

  //Fixing the two decimals position
  tipSplitted = tipSplitted.toFixed(2);

  //Display the tip divided
  document.getElementById('tip-splitted').innerHTML = tipSplitted;
}

//Variable for the button
var buttonCalculate = document.getElementById('button-calculate');

//Onclick proprety to start the calculate() function when the button Calculate is pressed
buttonCalculate.onclick = function() {
  calculate();
}
