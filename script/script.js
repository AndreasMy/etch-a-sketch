const getGridContainer = document.querySelector("#gridContainer");

function calcNumberOfItems(x) {
  //const x = parseInt(prompt(Number, 3));
  const numberOfItems = x * x;
  const rows = numberOfItems / x;

  //? inline generation of css code using the rows value
  getGridContainer.style = ` 
  grid-template-columns: repeat(${rows}, 1fr);
  grid-template-rows: repeat(${rows}, 1fr);
  `;

  //? then loop the generation of items
  for (let i = 1; i <= numberOfItems; i++) {
    let gridItem = document.createElement("div");
    gridItem.className = `grid-item${[i]} grid-item`;
    getGridContainer.appendChild(gridItem);
  }
}

//todo implement a slider that effects a variable with value 0 - 100
//todo pass that variable as an argument and assign function to button
calcNumberOfItems(64);

function reset() {
  let squares = document.querySelectorAll(".grid-item");

  for (let square of squares) {
    square.style.backgroundColor = "white";
  }
}

//? querySelectorAll works well with for...of
function colorBlack() {
  let squares = document.querySelectorAll(".grid-item");

  for (let square of squares) {
    square.addEventListener("mouseover", function () {
      square.style.backgroundColor = "black";
    });
  }
}

colorBlack();

function getRandomNum() {
  return Math.floor(Math.random() * 256);
}

function getRandomRgb() {
  let colorSquares = document.querySelectorAll(".grid-item");

  for (let colorSquare of colorSquares) {
    let r = getRandomNum();
    let g = getRandomNum();
    let b = getRandomNum();

    colorSquare.addEventListener("mouseover", function () {
      colorSquare.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    });
  }
}
