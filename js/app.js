//constants

//state variables
let runningTotal;

//cached elements
const result = document.querySelector('#result');
const num = document.querySelector('#num');
//event Listeners
document.querySelector('#add').addEventListener('click', add);
document.querySelector('#subtract').addEventListener('click', subtract);
//functions

init()

function init() {
  runningTotal = 0;
  render();
}
function add () {
  runningTotal += parseInt(num1.value);
  console.log(runningTotal);
  render();  
  clearInput();
}
function subtract () {
  runningTotal -= parseInt(num1.value);
  console.log(runningTotal);
  render();
  clearInput();
}
function render () {
  result.textContent = (`Total: ${runningTotal}`);
}

function clearInput () {
  num.value = '';
}