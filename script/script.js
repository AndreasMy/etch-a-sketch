//? find out how to loop a grid generation
const getGridContainer = document.querySelector("#gridContainer");
/* const gridSize = 16; */

//? create rows and make an algorithm that generates the right amounts of rows
//? alternatively, use flexbox to create a generate a 3x3 grid

/* for (let i = 1; i <= gridSize; i++) {
  getGridContainer.innerHTML += `<div class="grid-item${[i]} grid-item"></div>`;
} */

function calcNumberOfItems() {
  const x = parseInt(prompt(Number, 3));
  const numberOfItems = x * x;
  const rows = numberOfItems / x;

  //? inline generation of css code using the rows value
  getGridContainer.style = `  grid-template-columns: repeat(${rows}, 1fr);
                              grid-template-rows: repeat(${rows}, 1fr);`

  //? then loop the generation of items
  for (let i = 1; i <= numberOfItems; i++ ) {
    getGridContainer.innerHTML += `<div class="grid-item${[i]} grid-item"></div>`;
  }
}

calcNumberOfItems()
