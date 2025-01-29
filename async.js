//^SET TimeOut

// console.log(10);
// console.log(20);
// setTimeout(() => {
//   console.log(30);
// }, 5000);
// console.log(40);
// console.log(50);

// //^SET INTERVAL
// setInterval(() => {
//   document.writeln("PANDA");
// }, 1500);
// console.log(60);

//^ Promise

// let p1 = new Promise((resolve, reject) => {});
// console.log(p1);

// let p2 = new Promise((resolve, reject) => {
//   reject("Failures");
// });
// console.log(p2);
// p2.then((response) => {
//   console.log(response);
// });
// p2.catch((error) => {
//   console.log(error);
// });
//! method chaining
// p2.then((response) => {
//   console.log(response);
// })
//   .catch((error) => {
//     console.log(error);
//   })
//   .finally(() => console.log("finally printing for both"));

// let p3 = new Promise((resolve, reject) => {
//   resolve("Success");
// });
// console.log(p3);

// p3.then((data) => {
//   console.log(data);
// })
//   .catch((error) => {
//     console.log(error);
//   })
//   .finally(() => console.log("finally printing for both"));

//! ASYNC nd AWAIT

let p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise successfully completing");
  }, 2000);
});
async function demo() {
  console.log("This is a function");
  let x = await p2; // await to pause execution for some time
  console.log(x);
  console.log("End");
}
demo();

