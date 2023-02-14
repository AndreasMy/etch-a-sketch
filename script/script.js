const getGridContainer = document.querySelector("#gridContainer");
let slider = document.querySelector("#tileSlider");
let sliderOutput = document.querySelector("#sliderValue");
sliderOutput.innerHTML = `${slider.value} x ${slider.value}`;

function calcNumberOfItems(amount) {
  let numberOfItems = amount * amount;
  const rows = numberOfItems / amount;

  //? inline generation of css code using the rows value
  getGridContainer.style = ` 
  grid-template-columns: repeat(${rows}, 1fr);
  grid-template-rows: repeat(${rows}, 1fr);
  `;

  //? then loop the generation of items
  //? css border should probably be generated here to avoid bugs
  for (let i = 1; i <= numberOfItems; i++) {
    let gridItem = document.createElement("div");
    gridItem.className = `grid-item${[i]} grid-item`;
    getGridContainer.appendChild(gridItem);
  }
}
calcNumberOfItems(100);

//? Slider
//! Slider is still buggy
slider.oninput = function () {
  sliderOutput.innerHTML = `${slider.value} x ${slider.value}`;
};

slider.onmouseup = function () {
  reset();
  calcNumberOfItems(slider.value);
};

//! see if you can shorten the code with foreach
function reset() {
  let squares = document.querySelectorAll(".grid-item");

  for (let square of squares) {
    square.style.backgroundColor = "white";
  }
}

//? querySelectorAll works with for...of and foreach
function colorBlack() {
  let squares = document.querySelectorAll(".grid-item");

  for (let square of squares) {
    square.addEventListener("mouseover", function () {
      square.style.backgroundColor = "black";
    });
  }
}

//! Logic is buggy
//? this didn't accomplish the original challenge of darkening ANY color it passes over
//? subtract 10% from each number and assign them to their respective variables
//? make sure numbers don't go below 0
function colorGrey() {
  let squares = document.querySelectorAll(".grid-item");
  colorArr = [];

  for (let square of squares) {
    square.addEventListener("mouseover", function () {
      let cssObj = window.getComputedStyle(square, null);
      let bgColor = cssObj.getPropertyValue("background-color");

      //? .match was suggested by chatGpt :(
      let numFromString = bgColor.match(/\d+/g).map(Number);
      console.log(numFromString);

      //! used map() example provided by chatGpt, only to realize the same syntax is at mdn
      let newRgb = numFromString.map((value) => value * 0.9);
      console.log(newRgb);

      //colorArr.push(numFromString);

      square.style.backgroundColor = `rgb(${newRgb})`;
    });
  }
}

//? generate random rgb values
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

//TODO
