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
  let blackSquares = document.querySelectorAll(".grid-item");

  for (let blackSquare of blackSquares) {
    blackSquare.addEventListener("mouseover", function () {
      blackSquare.style.backgroundColor = "black";
    });
  }
}

//! Logic is buggy
//! should read any color and darken it!
function colorGrey() {
  let squares = document.querySelectorAll(".grid-item");
  let rgbValue = document.querySelector("#rgbValue");
  let newRgbValue = document.querySelector("#newRgbValue");

  for (let square of squares) {

    square.addEventListener("mouseover", function () {
      let cssObj = window.getComputedStyle(square, null);
      let bgColor = cssObj.getPropertyValue("background-color");


      //? .match was suggested by chatGpt :(
      let numFromString = bgColor.match(/\d+/g).map(Number);
      let newRgb = numFromString.map((value) => value * 0.9);
      
      rgbValue.innerHTML = `${numFromString}`
      newRgbValue.innerHTML = `${newRgb}`

      
      square.style.backgroundColor = `rgb(${newRgb})`;
 
      
      //colorArr.push(numFromString);
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
