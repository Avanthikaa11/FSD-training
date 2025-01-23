//^ API Fetching

// function fetchUsers() {
//   let res = fetch("https://jsonplaceholder.typicode.com/users");
//   //   console.log(res);
//   res
//     .then((val) => {
//       // console.log(val.json());
//       return val.json().then((data) => {
//         // console.log(data);
//         let store = document.getElementById("store");
//         data.map((user) => {
//           store.innerHTML += `
//             <tr>
//             <td> ${user.id}</td>
//             <td> ${user.name}</td>
//             <td> ${user.email}</td>
//             <td> ${user.company.name}</td>
//             </tr>`;
//         });
//       });
//     })
//     .catch((error) => console.log(error));
// }
// fetchUsers();

// async function fetchUsers() {
//   let response = await fetch("https://jsonplaceholder.typicode.com/users");
//   let data = await response.json();
//   console.log(data);
// }
// fetchUsers();
