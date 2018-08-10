console.log("Hello World")

function add7 ( input )
{
    return input + 7;
}

function multiply2 (input)
{
    return input * 2;
}

function firstUpper(input)
{
    let lower = input.toLowerCase();
    let result = lower[0].toUpperCase();
    lower = lower.slice(1, lower.length);
    return  result + lower;
}

function lastLetter(input)
{
    let result = input.charAt( input.length - 1 );
    return result;
}


