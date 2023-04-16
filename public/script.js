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

// Firebase code, taken from Firebase website
// https://console.firebase.google.com/u/0/project/sitetrainer-1/overview

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCaxeM1OT_FA_ZF5srxhwy6Pk6mIr5HRJA",
  authDomain: "sitetrainer-1.firebaseapp.com",
  projectId: "sitetrainer-1",
  storageBucket: "sitetrainer-1.appspot.com",
  messagingSenderId: "635692315384",
  appId: "1:635692315384:web:2b50d7207e7f68790ec10d",
  measurementId: "G-KM83YD1LN0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


// FirebaseUI Auth
// https://firebase.google.com/docs/auth/web/firebaseui
var firebase = require('firebase');
var firebaseui = require('firebaseui');

// Initialize the FirebaseUI Widget using Firebase.
var ui = new firebaseui.auth.AuthUI(firebase.auth());

// Email address and password
ui.start('#firebaseui-auth-container', {
  signInOptions: [
    firebase.auth.EmailAuthProvider.PROVIDER_ID
  ],
  // Other config options...
});

// Require user to enter display name
ui.start('#firebaseui-auth-container', {
  signInOptions: [
    {
      provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,
      requireDisplayName: false
    }
  ]
});



// Nick: don't touch. you don't know what you're doing
function beginTutorial() {
  var firstStep = document.getElementById('first-step');
  var welcomeMessage = document.getElementById('welcome-message');
  var registerExplanation = document.getElementById('register-explanation');

  console.log("Before toggle:");
  console.log("firstStep: ", firstStep);
  console.log("welcomeMessage: ", welcomeMessage);
  console.log("registerExplanation: ", registerExplanation);

  // Show sign-in button
  firstStep.classList.toggle("hidden");

  // Hide the welcome message
  welcomeMessage.classList.toggle("hidden");

  // Show the registration explanation
  registerExplanation.classList.toggle("hidden");

  console.log("After toggle:");
  console.log("firstStep: ", firstStep);
  console.log("welcomeMessage: ", welcomeMessage);
  console.log("registerExplanation: ", registerExplanation);
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
