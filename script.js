// Your code here
const table = document.querySelector(`table`);
const addRowButton = document.querySelector(`#add-row`);

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
    target.className = "";
  } else {
    target.className = "red";
  }
};

addRowButton.addEventListener(`click`, makeRows);

table.addEventListener(`click`, colorize);
