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
    gridItem.className = "grid-item";
    getGridContainer.appendChild(gridItem);
  }
}

calcNumberOfItems(3);
