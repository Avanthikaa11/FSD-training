//^ARRAYS

const users = ["avi", "sush", "man", "raj", "pooj", "ash"];
const names = ["avanthika", "sushma", "manikanta", "rajeshri"];

//! For loop
// for (var i = 0; i < users.length; i++) {
//   console.log(users[i]);
// }

//! Map

// let user = users.map((user) => {
//   return user;
// });
// console.log(user);

//! For Each

// let y = users.forEach((user) => {
//   return user;
// });
// console.log(y);

//^ Array Methods

users.push("dhan"); //? adds at the last index
console.timeLog(users);
users.pop(); //? removes from the last index
console.timeLog(users);
users.unshift("panda"); //? adds at the first index
console.timeLog(users);
users.shift(); //? removes from the first index
console.timeLog(users);
console.log(users.reverse()); //? reversing the array
console.timeLog(users);
let x = users.join("");
console.log(x, typeof x); //? convert array to string
let concat = users.concat(names);
console.log(concat); //? concat two arrays

//^ Arrays of Objects

// let user = [
//     {
//       name: "John Doe",
//       age: 30,
//       city: "Hyderabad",
//     },
//     {
//       name: "Jane Doe",
//       age: 28,
//       city: "Bangalore",
//     },
//     {
//       name: "Rahul",
//       age: 35,
//       city: "Chennai",
//     },
//     {
//       name: "Suresh",
//       age: 32,
//       city: "Delhi",
//     },
//   ];

 // console.log(user);
//   user.map((user) => {
//     console.log(user.name);
//   });
