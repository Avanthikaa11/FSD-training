//^ Click

// let btn = document.getElementById("btn");
// btn.addEventListener("click", () => {
//   alert("Button Clicked");
// });

//^DoubleClick

// let btn = document.getElementById("btn");
// btn.addEventListener("dblclick", () => {
//   alert("Button Clicked twice");
// });

//^MouseOver

// let ele = document.getElementById("btn");
// ele.addEventListener("mouseover", () => {
//   ele.style.backgroundColor = "yellow";
//   //   alert("Mouse Over");
// });
// ele.addEventListener("mouseleave", () => {
//   document.body.style.backgroundColor = "teal";
// });

//^ KeyDown

// let input = document.getElementById("btn");
// input.addEventListener("keydown", (e) => {
//   console.log("keydown");
// });
// input.addEventListener("keyup", (e) => {
//   console.log("keyup");
// });

let pink = document.getElementById("pink");
pink.addEventListener("mouseover", () => {
  document.body.style.backgroundColor = "#FF6961";
});
let yellow = document.getElementById("yellow");
yellow.addEventListener("mouseover", () => {
  document.body.style.backgroundColor = "#FDFD96";
});

let blue = document.getElementById("blue");
blue.addEventListener("mouseover", () => {
  document.body.style.backgroundColor = "#AEC6CF";
});

let green = document.getElementById("green");
green.addEventListener("mouseover", () => {
  document.body.style.backgroundColor = "#77DD77";
});

let peach = document.getElementById("peach");
peach.addEventListener("mouseover", () => {
  document.body.style.backgroundColor = "#FFDAB9";
});
