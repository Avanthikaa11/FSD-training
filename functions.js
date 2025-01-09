//^ without parameters and arguments

// function demo() {   //? function declaration
//   console.log("HIIIIIIIIIIIIII iam functionnnn");
// }
// demo(); //? function calling

//^ with parameters and arguments

// function addition(a, b) {
//   console.log(a + b);
// }
// addition(5, 7); //? function calling with arguments
// addition(10, 11); //? functions are reusable

//! ANONYMOUS FUNCTION
//^ function expression

// let x = function () {
//   console.log("HI iam anonymous function using function expression");
// };
// x();

//^ Immediate invoke function (can execute only one time)

// (
//   function () {
//   console.log("HI iam anonymous function using Immediate invoke function");
// }
// )();

//^ Arrow function (ES6)

// let x = () => {
//   console.log("HI iam anonymous function using arrow function");
// };
// x();

//^ return - implicit return and explicit return
//~ return is a end of statement
//~ implicit return(without using return keyword) only works with arrow functions

//! explicit return

// function add(a,b){
//   return a+b;
// }
// let x=add(5,5);
// console.log(x);

//! implicit return

let x = (a, b) => a + b;
console.log(x(5, 5));

let y = (a, b) => {
  return a + b;
};
console.log(y(10, 5));
