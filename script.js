// Your code here
const table = document.querySelector(`table`);
const addRowButton = document.querySelector(`#add-row`);
const select = document.querySelector(`select`);
let chosenColor = `green`;

function makeRows() {
  const row = document.createElement(`tr`);
  for (i = 0; i < 20; i++) {
    const dataCells = document.createElement(`td`);
    row.appendChild(dataCells);
  }
  table.appendChild(row);
}

const colorize = function (event) {
  const target = event.target;
  if (target.className.length) {
    target.className = ``;
  } else {
    target.className = chosenColor;
  }
};

function pickColor(target){
 if(target.className = `red`){
   chosenColor = `red`;
 } else if (target.className = `blue`){
   chosenColor = `blue`;
 } else if (target.className = `yellow`){
   chosenColor = `yellow`;
 } else if (target.className = `green`){
   chosenColor = `green`;
 }
}

addRowButton.addEventListener(`click`, makeRows);

table.addEventListener(`click`, colorize);

select.addEventListener(`change`, pickColor);