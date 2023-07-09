var form = document.getElementById("myForm");
form.addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent form submission

  // Validate name
  var nameInput = document.getElementById("name");
  var nameError = document.getElementById("nameError");
  if (nameInput.value.trim() === "") {
    nameError.textContent = "Name is required";
    nameInput.classList.add("error");
  } else {
    nameError.textContent = "";
    nameInput.classList.remove("error");
  }

  // Validate email
  var emailInput = document.getElementById("email");
  var emailError = document.getElementById("emailError");
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(emailInput.value.trim())) {
    emailError.textContent = "Invalid email address";
    emailInput.classList.add("error");
  } else {
    emailError.textContent = "";
    emailInput.classList.remove("error");
  }

  // Validate phone number
  var phoneInput = document.getElementById("phone");
  var phoneError = document.getElementById("phoneError");
  var phoneRegex = /^\d{10}$/;
  if (!phoneRegex.test(phoneInput.value.trim())) {
    phoneError.textContent = "Invalid phone number";
    phoneInput.classList.add("error");
  } else {
    phoneError.textContent = "";
    phoneInput.classList.remove("error");
  }

  // Validate password
  var passwordInput = document.getElementById("password");
  var passwordError = document.getElementById("passwordError");
  if (passwordInput.value.trim() === "") {
    passwordError.textContent = "Password is required";
    passwordInput.classList.add("error");
  } else {
    passwordError.textContent = "";
    passwordInput.classList.remove("error");
  }

  // Validate age
  var ageInput = document.getElementById("age");
  var ageError = document.getElementById("ageError");
  if (isNaN(ageInput.value.trim()) || parseInt(ageInput.value.trim()) < 1) {
    ageError.textContent = "Invalid age";
    ageInput.classList.add("error");
  } else {
    ageError.textContent = "";
    ageInput.classList.remove("error");
  }

  // Validate gender
  var genderInput = document.getElementById("gender");
  var genderError = document.getElementById("genderError");
  if (genderInput.value === "") {
    genderError.textContent = "Gender is required";
    genderInput.classList.add("error");
  } else {
    genderError.textContent = "";
    genderInput.classList.remove("error");
  }

  // Validate date
  var dateInput = document.getElementById("date");
  var dateError = document.getElementById("dateError");
  if (dateInput.value === "") {
    dateError.textContent = "Date is required";
    dateInput.classList.add("error");
  } else {
    dateError.textContent = "";
    dateInput.classList.remove("error");
  }

  // Validate color
  var colorInput = document.getElementById("color");
  var colorError = document.getElementById("colorError");
  if (colorInput.value === "") {
    colorError.textContent = "Color is required";
    colorInput.classList.add("error");
  } else {
    colorError.textContent = "";
    colorInput.classList.remove("error");
  }

  // If there are no errors, the form can be submitted
  if (!form.querySelector(".error")) {
    alert("Form submitted successfully!");
    form.reset();
  }
});
