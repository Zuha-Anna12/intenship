const loginForm = document.getElementById("login-form");
const errorMessage = document.getElementById("error-message");

loginForm.addEventListener("submit", (event) => {
  event.preventDefault(); // Prevent default form submission

  // Perform basic validation (you can add more validation rules here)
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  if (username === "" || password === "") {
    errorMessage.textContent = "Please fill in all fields.";
    return;
  }

  // Simulate login process (replace with actual login logic)
  setTimeout(() => {
    // Successful login
    alert("Login successful!");
    // Clear error message
    errorMessage.textContent = "";
  }, 1000);
});
