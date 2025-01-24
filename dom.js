//^ Document.getElementById

// let element = document.getElementById("demo");
// element.innerText = "Hello DOM";
// console.log(element);

// let div = document.createElement("test");
// element.innerHTML = "<h1>Header</h1>";
// console.log(div);

//^ Document.getElementByClassName

// let hii = document.getElementsByClassName("test");
// console.log(hii);
// console.log(Array.isArray(hii));

//!  spread operator :- used to takeut each and every value from the original array
//~ syntax:-  [...variable]

// let x = [...hii];
// console.log(x);
// console.log(Array.isArray(x));
// x.map((element) => {
//   console.log(element);
//   element.style.backgroundColor = "teal";
// });

//^ Document.getElementByTagName()

// let ele = document.getElementsByName("username");
// console.log(ele);
// [...ele].map((element) => {
//   console.log(element);
//   element.style.backgroundColor = "aqua";
// });

//^ document.getElementByQuerySelector
// let ele = document.querySelector("#demo");
// console.log(ele);
// let ele = document.querySelector(".test");
// console.log(ele);

//^ document.getElementByQuerySelectorAll
// let ele = document.querySelectorAll(".test");
// // console.log(ele);
// [...ele].map((element) => {
//   console.log(element.innerText);
//   element.style.backgroundColor = "yellow";
// });
