var buttonCalculate = document.getElementsById('button-calculate');
var tipSplitted = document.getElementById('tip-splitted');
var tipEach = document.getElementById('tip-each');

function calculate(buttonCalculate, tipSplitted, tipEach) {
  var billAmount = document.getElementById('bill-amount');
  var serviceQuality = document.getElementById('service-quality');
  var tipSharing = document.getElementById('tip-sharing');

  if (billAmount == 0 OR billAmount === '') {
    alert('Please enter a value for the bill in numbers');
    return;
  }

  if (tipSharing <= 1 OR tipSharing === '') {
    tipSharing = 1;
    tipEach.style.display = 'none';
  } else {
    tipEach.style.display = ''
  }
}

  buttonCalculate = document.addEventListener('click', () => {

  });
}
