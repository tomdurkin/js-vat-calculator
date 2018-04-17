// vat calculations
const doCalc = () => {
  // grab values
  let getDays = document.getElementById('js-days').value;
  let getRate = document.getElementById('js-rate').value;

  // the maths
  let total = (+getDays * +getRate);
  let findTax = total / 100 * 20;
  let sumTotal = total + findTax;

  // print results to screen
  const printElements = (el,customString) => {
    return document.getElementById(el).innerHTML = customString;
  }

  // results to print using printElements function ^^^
  printElements('js-display-tax', 'VAT: £' + findTax + '.');
  printElements('js-display-before', 'Without VAT: £' + total + '.');
  printElements('js-display-total', 'With VAT included: £' + sumTotal + '.');
}

// submit click actions
document.addEventListener('submit', function(e){
  e.preventDefault();
  doCalc();

  // set disabled status of elements
  const disableStatus = (el, status) => {
    return document.getElementById(el).disabled = status;
  }

  disableStatus('js-submit', 'disabled');
  disableStatus('js-reset', false);
  disableStatus('js-days','disabled');
  disableStatus('js-rate','disabled');
  
  document.getElementById('results').style.display = 'block';

  // document.getElementById('js-submit').disabled = 'disabled';
  // document.getElementById('js-reset').disabled = false;
  // document.getElementById('js-days').disabled = 'disabled';
  // document.getElementById('js-rate').disabled = 'disabled';
})

// reset click actions
document.getElementById('js-reset').onclick = function(e){
  e.preventDefault();
  document.getElementById('results').style.display = 'none';

  const resetValue = (e) => {
    return document.getElementById(e).value = '';
  }
  // reset using resetValue ^^^
  resetValue('js-days');
  resetValue('js-rate');

  // set disabled status of elements
  const disableStatus = (el, status) => {
    return document.getElementById(el).disabled = status;
  }

  disableStatus('js-days', false);
  disableStatus('js-rate', false);
  disableStatus('js-submit', false);

  document.getElementById('js-days').focus();
}
