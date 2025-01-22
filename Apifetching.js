//^ API Fetching

// const fetchData = async () => {
//   try {
//     const response = await fetch('https://jsonplaceholder.typicode.com/todos');
//     if (!response.ok) {
//       throw new Error(`HTTP error! status: ${response.status}`);
//     }
//     const data = await response.json();
//     return data;
//   } catch (error) {
//     console.error('Error:', error);
//     return [];
//   }
// };

function fetchUsers() {
  let res = fetch("https://jsonplaceholder.typicode.com/users");
  //   console.log(res);
  res
    .then((val) => {
      // console.log(val.json());
      return val.json().then((data) => {
        // console.log(data);
        let store = document.getElementById("store");
        data.map((user) => {
          store.innerHTML += `
            <tr>
            <td> ${user.id}</td>
            <td> ${user.name}</td>
            <td> ${user.email}</td>
            <td> ${user.company.name}</td>
            </tr>`;
        });
      });
    })
    .catch((error) => console.log(error));
}
fetchUsers();
