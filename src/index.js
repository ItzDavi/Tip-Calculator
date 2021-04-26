function calculate() {
  var billAmount = document.getElementById('bill-amount').value;
  var serviceQuality = document.getElementById('service-quality').value;
  var tipSharing = document.getElementById('tip-sharing').value;
  var tipSplitted = document.getElementById('tip-splitted');
  var tipEach = document.getElementById('tip-each');

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

  var tipSplitted = (billAmount * serviceQuality / tipSharing);

  tipSplitted = Math.round(tipSplitted * 100) / 100;
  tipSplitted = tipSplitted.toFixed(2);

  document.getElementById('tip-splitted').innerHTML = tipSplitted;
}

var buttonCalculate = document.getElementById('button-calculate');

buttonCalculate.onclick = function() {
  calculate();
}
