//? find out how to loop a grid generation
const getGridContainer = document.querySelector("#gridContainer");
const gridSize = 1024;

//? create rows and make an algorithm that generates the right amounts of rows
//? alternatively, use flexbox to create a generate a 3x3 grid

for (let i = 1; i <= gridSize; i++) {
  getGridContainer.innerHTML += `<div class="grid-item"></div>`;
}

