// Firebase code, taken from Firebase website
// https://console.firebase.google.com/u/0/project/sitetrainer-1/overview

// Import the functions you need from the SDKs you need
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";

// Imports for FirebaseUI Auth
// import firebase from 'firebase/compat/app';
// import * as firebaseui from 'firebaseui';
// import 'firebaseui/dist/firebaseui.css';

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

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const analytics = getAnalytics(app);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

// User authentication code
// https://firebase.google.com/docs/auth/web/start

// Sign up new users
createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });

// Sign in existing users
signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });

// Set authentication state observer and get user data
onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    const uid = user.uid;
    // ...
  } else {
    // User is signed out
    // ...
  }
});

// FirebaseUI Auth
// https://firebase.google.com/docs/auth/web/firebaseui

// var firebase = require('firebase');
// var firebaseui = require('firebaseui');

// // Initialize the FirebaseUI Widget using Firebase.
// var ui = new firebaseui.auth.AuthUI(firebase.auth());

// // Email address and password
// ui.start('#firebaseui-auth-container', {
//   signInOptions: [
//     firebase.auth.EmailAuthProvider.PROVIDER_ID
//   ],
//   // Other config options...
// });

// // Require user to enter display name
// ui.start('#firebaseui-auth-container', {
//   signInOptions: [
//     {
//       provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,
//       requireDisplayName: false
//     }
//   ]
// });

// // Specify the FirebaseUI configuration
// var uiConfig = {
//   callbacks: {
//     signInSuccessWithAuthResult: function(authResult, redirectUrl) {
//       // User successfully signed in.
//       // Return type determines whether we continue the redirect automatically
//       // or whether we leave that to developer to handle.
//       return true;
//     },
//     uiShown: function() {
//       // The widget is rendered.
//       // Hide the loader.
//       document.getElementById('loader').style.display = 'none';
//     }
//   },
//   // Will use popup for IDP Providers sign-in flow instead of the default, redirect.
//   signInFlow: 'popup',
//   signInSuccessUrl: '<url-to-redirect-to-on-success>',
//   signInOptions: [
//     // Leave the lines as is for the providers you want to offer your users.
//     firebase.auth.GoogleAuthProvider.PROVIDER_ID,
//     firebase.auth.FacebookAuthProvider.PROVIDER_ID,
//     firebase.auth.TwitterAuthProvider.PROVIDER_ID,
//     firebase.auth.GithubAuthProvider.PROVIDER_ID,
//     firebase.auth.EmailAuthProvider.PROVIDER_ID,
//     firebase.auth.PhoneAuthProvider.PROVIDER_ID
//   ],
//   // Terms of service url.
//   tosUrl: '<your-tos-url>',
//   // Privacy policy url.
//   privacyPolicyUrl: '<your-privacy-policy-url>'
// };

// Render the FirebaseUI Auth interface
// The start method will wait until the DOM is loaded.
ui.start('#firebaseui-auth-container', uiConfig);

// Nick: don't touch. you don't know what you're doing

document.getElementById('reg-btn').addEventListener('click', function(){
  document.getElementById('register-div').style.display="inline";
  document.getElementById('login-div').style.display="none";

});

document.getElementById('log-btn').addEventListener('click', function(){
  document.getElementById('register-div').style.display="none";
  document.getElementById('login-div').style.display="inline";
  
});

document.getElementById('login-btn').addEventListener('click', function(){
  const loginEmail=document.getElementById("login-email").value;
  const loginPassword=document.getElementById("login-password").value;

  signInWithEmailAndPassword(auth, loginEmail, loginPassword)
  .then((userCredential) => {
    const user = userCredential.user;
    document.getElementById('result-box').style.display="inline";
    document.getElementById('login-div').style.display="none";
    document.getElementById('result').style.display="Welcome Back <br>" + loginEmail + " was Login Successfully";
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    document.getElementById('result-box').style.display="inline";
    document.getElementById('login-div').style.display="none";
    document.getElementById('result').style.display="Sorry! <br>" + errorMessage;
  });

});

document.getElementById('register-btn').addEventListener('click', function(){
  const registerEmail=document.getElementById("register-email").value;
  const registerPassword=document.getElementById("register-password").value;

  createUserWithEmailAndPassword(auth, registerEmail, registerPassword)
  .then((userCredential) => {
    const user = userCredential.user;
    document.getElementById('result-box').style.display="inline";
    document.getElementById('register-div').style.display="none";
    document.getElementById('result').style.display="Welcome Back <br>" + registerEmail + " was Registered Successfully";
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    document.getElementById('result-box').style.display="inline";
    document.getElementById('register-div').style.display="none";
    document.getElementById('result').style.display="Sorry! <br>" + errorMessage;
  });
});

// // Render the FirebaseUI Auth interface
// // The start method will wait until the DOM is loaded.
// ui.start('#firebaseui-auth-container', uiConfig);
