// Get the modal
var modal = document.getElementById("login-form");

// Get the button that opens the modal
var btn = document.querySelector("nav li.right a");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// Function to handle form submission
function login(event) {
  event.preventDefault();
  // Get the input values
  var username = document.getElementsByName("username")[0].value;
  var password = document.getElementsByName("password")[0].value;

  // Validate the input
  if (username === "myusername" && password === "mypassword") {
    alert("Login successful!");
    modal.style.display = "none";
  } else {
    alert("Invalid username or password!");
  }
}

// Function to show the login form
function showLoginForm() {
  modal.style.display = "block";
}
