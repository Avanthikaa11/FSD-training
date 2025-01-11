//^Objects

// let userDetails = {
//   name: "John Doe",
//   age: 30,
//   city: "Hyderabad",
// };
// console.log(userDetails);
// console.log(userDetails.name);

//^ Nested Objects
// let userDetails = {
//   name: "John Doe",
//   age: 30,
//   city: "Hyderabad",
//   address: {
//     area: "kukatpally",
//     street: "1",
//     pincode: "500055",
//   },
// };
// console.log(userDetails);
// console.log(userDetails.name);
// console.log(userDetails.address.area);

//^ Arrays of Objects

let user = [
  {
    name: "John Doe",
    age: 30,
    city: "Hyderabad",
  },
  {
    name: "Jane Doe",
    age: 28,
    city: "Bangalore",
  },
  {
    name: "Rahul",
    age: 35,
    city: "Chennai",
  },
  {
    name: "Suresh",
    age: 32,
    city: "Delhi",
  },
];

// console.log(user);
user.map((user) => {
  console.log(user.name);
});
