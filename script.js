// Auth0 code taken from auth0 site
// https://auth0.com/docs/quickstart/spa/vanillajs?framed=1&sq=1#initialize-the-sdk

// // Initialize the SDK
// let auth0Client = null;

// const fetchAuthConfig = () => fetch("/auth_config.json");

// const configureClient = async () => {
//   const response = await fetchAuthConfig();
//   const config = await response.json();

//   auth0Client = await auth0.createAuth0Client({
//     domain: config.domain,
//     clientId: config.clientId
//   });
// };

// window.onload = async () => {
//   await configureClient();

//   // update the UI state
//   updateUI();

//   const isAuthenticated = await auth0Client.isAuthenticated();

//   if (isAuthenticated) {
//     // show the gated content
//     return;
//   }

//   // check for the code and state parameters
//   const query = window.location.search;
//   if (query.includes("code=") && query.includes("state=")) {

//     // Process the login state
//     await auth0Client.handleRedirectCallback();

//     updateUI();

//     // Use replaceState to redirect the user away and remove the querystring parameters
//     window.history.replaceState({}, document.title, "/");
//   }
// }

// const updateUI = async () => {
//   const isAuthenticated = await auth0Client.isAuthenticated();

//   document.getElementById("btn-logout").disabled = !isAuthenticated;
//   document.getElementById("btn-login").disabled = isAuthenticated;
// };

// const login = async () => {
//   await auth0Client.loginWithRedirect({
//     authorizationParams: {
//       redirect_uri: window.location.origin
//     }
//   });
// };

// Get the modal
var modal = document.getElementById("login-form");

// Get the button that opens the modal
var btn = document.querySelector("nav li.right a");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function () {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
}

function beginTutorial() {
  var welcomeMessage = document.getElementById('welcome-message');
  var registerExplanation = document.getElementById('register-explanation');

  // Force the user to view the top of the webpage
  window.scrollTo(0, 0);

  // Hide the welcome message
  welcomeMessage.classList.toggle("hidden");

  // Show the registration explanation
  registerExplanation.classList.toggle("hidden");
}

function secondStep() {

  // Force the user to view the top of the webpage
  window.scrollTo(0, 0);

  var signIn = document.getElementById('sign-in');
  var registerPrompt = document.getElementById('register-prompt');
  var registerExplanation = document.getElementById('register-explanation');

  // Force the user to view the top of the webpage
  window.scrollTo(0, 0);

  // Show sign-in button
  signIn.classList.toggle("hidden");
  signIn.classList.toggle("emphasize");
  

  // show the sign-in guide
  registerPrompt.classList.toggle("hidden");

  // Hide the registration explanation
  registerExplanation.classList.toggle("hidden");
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
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
