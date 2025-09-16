// Global variable for colors
const colors = ["red", "blue", "green", "purple", "orange"];
let colorIndex = 0;

// Part 2: Function with parameters & return values
function changeBoxColor(element, color) {
  element.style.backgroundColor = color;
  return color; // return the applied color
}

// Attach to button
const colorBox = document.getElementById("colorBox");
const colorBtn = document.getElementById("colorBtn");

colorBtn.addEventListener("click", () => {
  colorIndex = (colorIndex + 1) % colors.length;
  let newColor = changeBoxColor(colorBox, colors[colorIndex]);
  console.log("Box color changed to:", newColor);
});

// Part 3: Combining CSS & JS
const animatedBox = document.getElementById("animatedBox");
const animateBtn = document.getElementById("animateBtn");

animateBtn.addEventListener("click", () => {
  animatedBox.classList.toggle("move");
});
