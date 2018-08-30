
function operate( operation, one, two )
{
  switch(operation){
    case 0:
      return add(one, two);
    case 1:
      return subtract(one, two);
    case 2:
      return multiply(one, two);
    case 3:
      return divide(one, two);
    case 4:
      return modulo(one, two);
  }
}

function add(one, two)
{
  return one + two;
}

function subtract(one, two)
{
  return one - two;
}

function multiply(one, two)
{
  return one * two;
}

function divide(one, two)
{
  return one / two;
}

function modulo(one, two)
{
  return one % two;
}