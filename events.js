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

let input = document.getElementById("btn");
input.addEventListener("keydown", (e) => {
  console.log("keydown");
});
input.addEventListener("keyup", (e) => {
  console.log("keyup");
});
