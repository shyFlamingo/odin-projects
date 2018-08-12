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

const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

const p = document.createElement('p');
p.classList.add('p');
p.textContent = "Hey, I am red!";
p.style.color = "red";

const h3 = document.createElement('h3');
h3.classList.add('h3');
h3.textContent = "Hey, I am blue h3!";
h3.style.color = "blue";

content.appendChild(h3);

container.appendChild(content);
container.appendChild(p);
//container.appendChild(h3);

var button = document.querySelector('#btn');
button.onclick = () => alert('Hello');

var btn = document.querySelector('#btn1');
btn.addEventListener( 'click', alerting );
btn.addEventListener( 'click', function(e)
    {
        console.log(e);
        e.target.style.background = 'blue';
    });


function alerting()
{
    alert("this is the perferred method")
}


const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', (e) => 
    {
        alert(button.id);
    });
});
