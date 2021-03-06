var entryCount = 0;
var displayCount = 0;
let numCols = 10;
let numRows = 10;

$(document).ready(function() {

  //capture key presses
  $(document).on("keypress", function(e) {
    e.preventDefault();
    entryCount ++;
    displayCount ++;

    //translate unicode to characters 
    //https://unicodelookup.com/       
    var char = String.fromCharCode(e.which);
    console.log("entry #" + entryCount + " : " + e.which + " | " + char + ". Showing " + displayCount);
    createElement(char);
  });

  //capture function keys
  $(document).on("keydown", function(e) {
    //if pressed key is a backspace
    if (e.which == 8){
      e.preventDefault();
      entryCount ++;
      displayCount --;
      console.log("entry #" + entryCount + " : " + e.which + " | BKSP. Showing " + displayCount);
      deleteElement();
    }
  });

  // //Make the array of boxes
  // site = document.getElementById('site');
  // myContainer = site.getElementsByClassName('container')[0];
  // for (i = 0; i < numCols; i++) {
  //   for (j = 0; j < numRows; j++) {
  //     let newBox = document.createElement('div');
  //     newBox.className = 'box';
  //     newBox.setAttribute('grid-column', i + 1);
  //     newBox.setAttribute('grid-row', j + 1);
  //     myContainer.appendChild(newBox);
  //     console.log(i, j)

  //   }

  // }


//});


// Make the array of boxes
site = document.getElementById('site');
myContainer = site.getElementsByClassName('container')[0];
for (i = 0; i < numCols; i++) {
  for (j = 0; j < numRows; j++) {
    let newBox = document.createElement('div');
    let newNode = document.createTextNode(' ');
    newBox.append(newNode);
    let boxName = 'box' + i + j;
    newBox.className = 'box';
    newBox.style.gridColumn = i + 1;
    newBox.style.gridRow = j + 1;
    newBox.style.borderBottom = 'solid 0.2rem black';

      }

 }


});


function createElement(k) {
  var elem = $('#cursor');
  if (k == "a" || k == "A") { elem.before('<span class="inner">a</span>'); }
  if (k == "b" || k == "B") { elem.before('<span class="inner">b</span>'); }
  if (k == "c" || k == "C") { elem.before('<span class="inner">c</span>'); }
  if (k == "d" || k == "D") { elem.before('<span class="inner">d</span>'); }
  if (k == "e" || k == "E") { elem.before('<span class="inner">e</span>'); }
  if (k == "f" || k == "F") { elem.before('<span class="inner">f</span>'); }
  if (k == "g" || k == "G") { elem.before('<span class="inner">g</span>'); }
  if (k == "h" || k == "H") { elem.before('<span class="inner">h</span>'); }
  if (k == "i" || k == "I") { elem.before('<span class="inner">i</span>'); }
  if (k == "j" || k == "J") { elem.before('<span class="inner">j</span>'); }
  if (k == "k" || k == "K") { elem.before('<span class="inner">k</span>'); }
  if (k == "l" || k == "L") { elem.before('<span class="inner">l</span>'); }
  if (k == "m" || k == "M") { elem.before('<span class="inner">m</span>'); }
  if (k == "n" || k == "N") { elem.before('<span class="inner">n</span>'); }
  if (k == "o" || k == "O") { elem.before('<span class="inner">o</span>'); }
  if (k == "p" || k == "P") { elem.before('<span class="inner">p</span>'); }
  if (k == "q" || k == "Q") { elem.before('<span class="inner">q</span>'); }
  if (k == "r" || k == "R") { elem.before('<span class="inner">r</span>'); }
  if (k == "s" || k == "S") { elem.before('<span class="inner">s</span>'); }
  if (k == "t" || k == "T") { elem.before('<span class="inner">t</span>'); }
  if (k == "u" || k == "U") { elem.before('<span class="inner">u</span>'); }
  if (k == "v" || k == "V") { elem.before('<span class="inner">v</span>'); }
  if (k == "w" || k == "W") { elem.before('<span class="inner">w</span>'); }
  if (k == "x" || k == "X") { elem.before('<span class="inner">x</span>'); }
  if (k == "y" || k == "Y") { elem.before('<span class="inner">y</span>'); }
  if (k == "z" || k == "Z") { elem.before('<span class="inner">z</span>'); }
  if (k == " ") { elem.before('<span class="inner">&nbsp;</span>') };
}

function deleteElement() {
  $(".inner").last().remove();
}