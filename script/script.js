const getGridContainer = document.querySelector("#gridContainer");

//? Slider
let slider = document.querySelector("#tileSlider");
let sliderOutput = document.querySelector("#sliderValue");
sliderOutput.innerHTML = `${slider.value} x ${slider.value}`;

//? buttons:
const colorResetBtn = document.querySelector("#colorResetBtn");
const colorBlackBtn = document.querySelector("#colorBlackBtn");
const colorShadingBtn = document.querySelector("#colorShadingBtn");
const colorRainbowBtn = document.querySelector("#colorRainbowBtn");
const colorEraserBtn = document.querySelector("#colorEraserBtn");
const toggleGrid = document.querySelector("#toggleGrid");

//! create global variable
let coloringMode = "";
let toggle = "grid on";

colorResetBtn.addEventListener("click", reset);

//? Draw Black
colorBlackBtn.addEventListener("click", function () {
  coloringMode = "black";
  return coloringMode;
});

//? Draw Shading
colorShadingBtn.addEventListener("click", function () {
  coloringMode = "shade";
  return coloringMode;
});

//? Draw rainbow
colorRainbowBtn.addEventListener("click", function () {
  coloringMode = "rainbow";
  return coloringMode;
});

colorEraserBtn.addEventListener("click", function () {
  coloringMode = "eraser";
});

toggleGrid.addEventListener("click", function () {
  if (toggle === "grid on") {
    toggle = "grid off";
    setGridToggle()
  } else if (toggle === "grid off") {
    toggle = "grid on";
    setGridToggle()
  }
  console.log(toggle)
  return toggle;
});

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

  for (let i = 0; i < getGridContainer.children.length; i++) {
    getGridContainer.children[i].addEventListener("mouseover", function () {
      if (coloringMode === "black") {
        this.style.backgroundColor = `black`;
      } else if (coloringMode === "shade") {
        let cssObj = window.getComputedStyle(this, null);
        let bgColor = cssObj.getPropertyValue("background-color");
        let numFromString = bgColor.match(/\d+/g).map(Number);
        newRgb = numFromString.map((value) => (value * 0.9).toFixed(0));

        this.style.backgroundColor = `rgb(${newRgb})`;
      } else if (coloringMode === "rainbow") {
        let randomColor = `rgb(${Math.floor(Math.random() * 255)}, 
        ${Math.floor(Math.random() * 255)}, 
        ${Math.floor(Math.random() * 255)})`;

        this.style.backgroundColor = randomColor;
      } else if (coloringMode === "eraser") {
        this.style.backgroundColor = "white";
      }


    });
  }
}

createGrid(16);

function setGridToggle() {
  let squares = document.querySelectorAll(".grid-item");
  for (let square of squares)
  if (toggle === "grid on") {
    square.style.border = "solid rgb(224, 224, 224) 1px"
  } else if (toggle === "grid off") {
    square.style.border = "solid rgb(224, 224, 224) 0"
  }
  console.log(toggle)
}

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
  toggle = "grid on";
  createGrid(slider.value);
};


//TODO customize slider color
//TODO make it pretty
//TODO make an invert button/brush
//? is it possible to increase brush radius to trigger neighboring divs

//! help received on discord:
/* If you want practice with removeEventListener, that's fine. 
 Personally, I would suggest attaching one listener when the cells are created.
 And in that listener, perhaps, check a global coloringMode variable to see which 
 way to color the cell.

The buttons would just change the value of that coloringMode, and the event listener 
would dynamically call one function or the other, depending on that coloringMode value.
 */
