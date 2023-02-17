const getGridContainer = document.querySelector("#gridContainer");

//? Slider
let slider = document.querySelector("#tileSlider");
let sliderOutput = document.querySelector("#sliderValue");
sliderOutput.innerHTML = `${slider.value} x ${slider.value}`;

//? buttons:
colorResetBtn = document.querySelector("#colorResetBtn");
colorBlackBtn = document.querySelector("#colorBlackBtn");
colorShadingBtn = document.querySelector("#colorShadingBtn");
colorRainbowBtn = document.querySelector("#colorRainbowBtn");

colorResetBtn.addEventListener("click", reset);

//? Draw Black
colorBlackBtn.addEventListener("click", function () {
  drawBlack();
});

//? Draw Shading
colorShadingBtn.addEventListener("click", function () {
  drawShade();
});

//? Draw rainbow
colorRainbowBtn.addEventListener("click", function () {
  drawRandomRgb();
});

function drawBlack() {
  const blackGridContainer = document.querySelector("#gridContainer");
  for (let i = 0; i < blackGridContainer.children.length; i++) {
    blackGridContainer.children[i].addEventListener("mouseover", function () {
      this.style.backgroundColor = `red`;
    });
    blackGridContainer.children[i].addEventListener("mouseleave", function () {
      this.style.backgroundColor = `black`;
    });
  }
}


function drawRandomRgb() {
  const rgbGridContainer = document.querySelector("#gridContainer");
  for (let i = 0; i < getGridContainer.children.length; i++) {
    rgbGridContainer.children[i].addEventListener("mouseover", function () {
      this.style.backgroundColor = `red`;
    });
    rgbGridContainer.children[i].addEventListener("mouseleave", function () {
      let randomColor = `rgb(${Math.floor(Math.random() * 255)}, 
      ${Math.floor(Math.random() * 255)}, 
      ${Math.floor(Math.random() * 255)})`;
      this.style.backgroundColor = randomColor;
    });
  }
}
let newRgb;

function drawShade() {
  const shadeGridContainer = document.querySelector("#gridContainer");
  
  for (let i = 0; i < shadeGridContainer.children.length; i++) {
    shadeGridContainer.children[i].addEventListener("mouseover", function () {
      let cssObj = window.getComputedStyle(this, null);
      let bgColor = cssObj.getPropertyValue("background-color");
      let numFromString = bgColor.match(/\d+/g).map(Number);
      newRgb = numFromString.map((value) => (value * 0.9).toFixed(0));
      
      rgbValue.innerHTML = `${numFromString}`;
      this.style.backgroundColor = `red`;
    });
    shadeGridContainer.children[i].addEventListener("mouseleave", function () {
      this.style.backgroundColor = `rgb(${newRgb})`;
    });
  }
}

/* If you want practice with removeEventListener, that's fine. 
Personally, I would suggest attaching one listener when the cells are created.
 And in that listener, perhaps, check a global coloringMode variable to see which 
 way to color the cell.

The buttons would just change the value of that coloringMode, and the event listener 
would dynamically call one function or the other, depending on that coloringMode value.
 */
function createGrid(amount) {
  let numberOfItems = amount * amount;
  const rows = numberOfItems / amount;

  //? inline generation of css code using the rows value
  getGridContainer.style = ` 
  grid-template-columns: repeat(${rows}, 1fr);
  grid-template-rows: repeat(${rows}, 1fr);
  `;

  for (let i = 1; i <= numberOfItems; i++) {
    let gridItem = document.createElement("div");
    gridItem.className = `grid-item`;
    getGridContainer.appendChild(gridItem);
  }
}
createGrid(16);

//? function to remove each element
function rmElement() {
  const rmElements = document.querySelectorAll(".grid-item");
  for (let rmElement of rmElements) {
    rmElement.remove();
  }
}

function reset() {
  let squares = document.querySelectorAll(".grid-item");
  for (let square of squares) {
    square.style.backgroundColor = "white";
  }
}

//? Slider
slider.oninput = function () {
  sliderOutput.innerHTML = `${slider.value} x ${slider.value}`;
};

slider.onmouseup = function () {
  rmElement();
  createGrid(slider.value);
};
