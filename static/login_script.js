const loginForm = document.getElementById("login-form");

loginForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  // Validate login credentials (replace this with your actual validation logic)
  if (username === "admin" && password === "password") {
    window.location.href = "/tree_detection"; // Redirect to tree detection page
  } else {
    alert("Invalid username or password");
  }
});
