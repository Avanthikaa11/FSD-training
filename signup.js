let form = document.querySelector("form");
let nameInput = document.getElementById("name");
let genderInputs = document.querySelectorAll("input[name='gender']");
let passwordInput = document.getElementById("password");
let emailInput = document.getElementById("email");
let showPasswordCheckbox = document.getElementById("showPassword");

// Show/Hide Password functionality
showPasswordCheckbox.addEventListener("click", (event) => {
  if (event.target.checked === true) {
    passwordInput.setAttribute("type", "text");
    show.innerText = "hide password";
  } else {
    passwordInput.setAttribute("type", "password");
    show.innerText = "show password";
  }
});

form.addEventListener("submit", (event) => {
  event.preventDefault();

  let nameValue = nameInput.value.trim();
  let passwordValue = passwordInput.value.trim();
  let emailValue = emailInput.value.trim();
  let genderValue = document.getElementById("gender");
  let check = document.getElementById("check");
  let show = document.getElementById("show");

  // Get selected gender
  genderInputs.forEach((gender) => {
    if (gender.checked) {
      genderValue = gender.value;
    }
  });

  // Store user details
  let userDetails = {
    name: nameValue,
    password: passwordValue,
    email: emailValue,
    gender: genderValue,
    check: check,
    show: show,
  };

  console.log(userDetails);
  localStorage.setItem("userDetails", JSON.stringify(userDetails));
});

// localStorage.clear();
