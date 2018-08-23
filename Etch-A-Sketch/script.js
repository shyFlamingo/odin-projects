var blocks;
var grid = document.querySelector("#squares");
const btn = document.querySelector('#colorSelection');
const reset = document.querySelector('#resetBoard');
var color = '#f2f2f2';
var blackAndWhite = true;
var oldSize = 0;

btn.addEventListener('click', ChangeToColor )
reset.addEventListener('click', ResetBoard);

CreateGrid(10);

function CreateGrid( size )
{
  for( var index = 0; index < size; index++ )
  {
    var row = document.createElement('div');
    row.id = 'row' + index;
    row.className = 'row';

    for( var box = 0; box < size; box ++ )
    {
      var block = document.createElement('div');
      block.id = 'block' + index + box;
      block.className = 'block';

      row.appendChild(block);
    }
    grid.appendChild(row);
  }
  blocks = Array.from(document.querySelectorAll('.block'));
  blocks.forEach(block => block.addEventListener('mouseover', ChangeColor));
}

function ResetBoard()
{
  var size = prompt("Enter Board Size", 20);
  EraseBoard(oldSize);
  CreateGrid(size);
  oldSize = size;
}

function EraseBoard( size )
{
  while( grid.firstChild )
  {
    grid.removeChild(grid.firstChild);
    
  }
}

function ChangeToColor()
{
  blackAndWhite = !blackAndWhite;
}

function ChangeColor()
{
  let color = '#000000';
  if ( !blackAndWhite )
  {
    color = getRandomColor();
  }
  console.log("color changed " + this.id );
  this.style.backgroundColor = color;
}

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 10) % 16 ];
  }
  return color;
}

function Test()
{
  console.log("test passed");
  CreateGrid(10);
}