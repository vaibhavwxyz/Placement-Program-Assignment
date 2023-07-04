## 💡Question: Create a form with basic validation (name, email, phone number, password, age, gender, date, color picker)

### 🚀 Answer:

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Form with Basic Validation</title>
    <style>
      .error {
        color: red;
      }
    </style>
  </head>
  <body>
    <h1>Form with Basic Validation</h1>

    <form id="myForm" onsubmit="validateForm(event)">
      <label for="name">Name:</label>
      <input type="text" id="name" name="name" required />
      <br />

      <label for="email">Email:</label>
      <input type="email" id="email" name="email" required />
      <br />

      <label for="phone">Phone Number:</label>
      <input type="tel" id="phone" name="phone" pattern="[0-9]{10}" required />
      <br />

      <label for="password">Password:</label>
      <input type="password" id="password" name="password" required />
      <br />

      <label for="age">Age:</label>
      <input type="number" id="age" name="age" min="18" max="99" required />
      <br />

      <label for="gender">Gender:</label>
      <select id="gender" name="gender" required>
        <option value="">Select</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
        <option value="other">Other</option>
      </select>
      <br />

      <label for="date">Date:</label>
      <input type="date" id="date" name="date" required />
      <br />

      <label for="color">Favorite Color:</label>
      <input type="color" id="color" name="color" required />
      <br />

      <input type="submit" value="Submit" />
    </form>

    <script>
      function validateForm(event) {
        event.preventDefault();

        var name = document.getElementById("name").value;
        var email = document.getElementById("email").value;
        var phone = document.getElementById("phone").value;
        var password = document.getElementById("password").value;
        var age = document.getElementById("age").value;
        var gender = document.getElementById("gender").value;
        var date = document.getElementById("date").value;
        var color = document.getElementById("color").value;

        // Basic validation
        if (
          name === "" ||
          email === "" ||
          phone === "" ||
          password === "" ||
          age === "" ||
          gender === "" ||
          date === "" ||
          color === ""
        ) {
          alert("Please fill in all fields.");
          return;
        }

        // Additional validation rules can be added here

        // If all validations pass, you can submit the form
        document.getElementById("myForm").submit();
      }
    </script>
  </body>
</html>
```
