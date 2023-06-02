// Your code here
const table = document.querySelector(`table`);
const addRowButton = document.querySelector(`#add-row`)

function makeRows(){
   const row = document.createElement(`tr`);
   for(i = 0; i < 20; i++){
    const dataCells = document.createElement(`td`);
    row.appendChild(dataCells);
   };
   table.appendChild(row);
};

addRowButton.addEventListener(`click`, makeRows);

// hi