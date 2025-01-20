//^JavaScript Object

let userDetails = {
  name: "Avi",
  age: 25,
  occupation: "Software Engineer",
};
console.log(userDetails);
console.log(typeof userDetails);

//^JSON object

x = JSON.stringify(userDetails); //JSON object
console.log(x);
console.log(typeof x);

//^Converting JSON string back to JavaScript object

let y = JSON.parse(x);
console.log(y);

//! databse server takes the json object only not javascript objects
