const getGridContainer = document.querySelector("#gridContainer");

function calcNumberOfItems(amount) {
  //const amount = parseInt(prompt(Number, 3));
  let numberOfItems = amount * amount;
  const rows = numberOfItems / amount;

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
calcNumberOfItems(100);

//? Slider
let slider = document.querySelector("#tileSlider");
let sliderOutput = document.querySelector("#sliderValue");
sliderOutput.innerHTML = `${slider.value} x ${slider.value}`;

//! Slider is still buggy
function handleSliderInput() {
  sliderOutput.innerHTML = `${this.value} x ${this.value}`;
}

slider.oninput = handleSliderInput;
slider.onmouseup = function() {
  reset()
  calcNumberOfItems(slider.value);
}


function reset() {
  let squares = document.querySelectorAll(".grid-item");

  for (let square of squares) {
    square.style.backgroundColor = "white";
  }
}

//? querySelectorAll works well with for...of and foreach
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
