//^ assignment

//! take array of objects each object should contain emp of name,  emp comoany, emp adrress wheer emp address i again an onject which contains emp city,emp area.
//! print all the values on the ui in form of table

let users = [
  {
    empid: "1",
    empname: "Avanthika",
    empcompany: "Google",
    empsalary: "200000000",
    empaddress: {
      empcity: "Hyderabad",
      emparea: "kukatpally",
    },
  },
  {
    empid: "2",
    empname: "sushma",
    empcompany: "Delloite",
    empsalary: "2000000",
    empaddress: {
      empcity: "Hyderabad",
      emparea: "gajularamaram",
    },
  },
  {
    empid: "3",
    empname: "joshna",
    empcompany: "Delloite",
    empsalary: 5000000,
    empaddress: {
      empcity: "Hyderabad",
      emparea: "miyapur",
    },
  },
  {
    empid: "4",
    empname: "dhanya",
    empcompany: "TCS",
    empsalary: 10000000,
    empaddress: {
      empcity: "Hyderabad",
      emparea: "Hitech city",
    },
  },
  {
    empid: "5",
    empname: "kavya",
    empcompany: "Amazon",
    empsalary: 10000000,
    empaddress: {
      empcity: "Hyderabad",
      emparea: "ECIL",
    },
  },
];

let store = document.getElementById("store");
users.map((users) => {
  store.innerHTML += `
        <tr>
        <td> ${users.empid}</td>
        <td> ${users.empname}</td>
        <td> ${users.empsalary}</td>
        <td> ${users.empaddress.empcity}</td>
        <td> ${users.empaddress.emparea}</td>
        </tr>`;
});
