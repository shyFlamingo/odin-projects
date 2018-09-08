
var operandX = "";
var operandY = "";
var operator = "";
let operator_pressed = false;
//event handlers

 

document.getElementById("numbers").addEventListener("click", function(event) {
  var num = event.target.innerText;
  if( operator_pressed )
  {
    operandY += num;
    setDisplayText(operandY);
  }
  else
  {
    operandX += num;
    setDisplayText(operandX);
  }
  console.log(operandX);
})

document.getElementById("operators").addEventListener("click", function(event) {
  operator_pressed = true;
  operator = event.target.innerText;
  console.log(event.target.dataset.operator);
})

document.getElementById("equals").addEventListener("click", function(event) {
  operator_pressed = false;
  calc( operator, operandX, operandY );
})

document.getElementById("clear").addEventListener("click", function(event) {
  clear();
})

function clear()
{
  operator_pressed = false;
  operandX = "";
  operandY = "";
  setDisplayText(0);
}

function calc ( operator, x, y )
{
  operator_pressed = false;
  switch(operator){
    case '+':
      setDisplayText( add( x, y) );
      break;
    case "/":
      setDisplayText( divide( x, y) );
      break;
    case '*':
      setDisplayText( multiply( x, y) );
      break;
    case '-':
      setDisplayText( subtract( x, y) );
       break;
  }
  operandY = "";
}

function setDisplayText(text) {
  var display = document.querySelector(`#display`);
  display.textContent = text;
}

function add(one, two)
{
  operandX = parseFloat(one) + parseFloat(two)
  return operandX;
}

function subtract(one, two)
{
  operandX = parseFloat(one) - parseFloat(two)
  return operandX;
}

function multiply(one, two)
{
  operandX = parseFloat(one) * parseFloat(two)
  return operandX;
}

function divide(one, two)
{
  operandX = parseFloat(one) / parseFloat(two)
  return operandX;
}

