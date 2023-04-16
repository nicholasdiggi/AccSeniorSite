// Firebase code, taken from Firebase website
// https://console.firebase.google.com/u/0/project/sitetrainer-1/overview

// Import the functions you need from the SDKs you need
// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";

// Imports for FirebaseUI Auth
// import firebase from 'firebase/compat/app';
// import * as firebaseui from 'firebaseui';
// import 'firebaseui/dist/firebaseui.css';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

// import { initializeApp } from "firebase/app";
// import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";


// const firebaseConfig = {
//   apiKey: "AIzaSyCaxeM1OT_FA_ZF5srxhwy6Pk6mIr5HRJA",
//   authDomain: "sitetrainer-1.firebaseapp.com",
//   projectId: "sitetrainer-1",
//   storageBucket: "sitetrainer-1.appspot.com",
//   messagingSenderId: "635692315384",
//   appId: "1:635692315384:web:2b50d7207e7f68790ec10d",
//   measurementId: "G-KM83YD1LN0"
// };

// const app = initializeApp(firebaseConfig);
// const auth = getAuth();



// Nick: don't touch. you don't know what you're doing

// document.getElementById('reg-btn').addEventListener('click', function(){
//   document.getElementById('register-div').style.display="inline";
//   document.getElementById('login-div').style.display="none";

// });

// document.getElementById('log-btn').addEventListener('click', function(){
//   document.getElementById('register-div').style.display="none";
//   document.getElementById('login-div').style.display="inline";
  
// });

// document.getElementById('login-btn').addEventListener('click', function(){
//   const loginEmail=document.getElementById("login-email").value;
//   const loginPassword=document.getElementById("login-password").value;

//   signInWithEmailAndPassword(auth, loginEmail, loginPassword)
//   .then((userCredential) => {
//     const user = userCredential.user;
//     document.getElementById('result-box').classList.toggle("hidden");
//     document.getElementById('login-div').classList.toggle("hidden");
//     document.getElementById('result').innerHTML="Welcome Back <br>" + loginEmail + " was Login Successfully";
//   })
//   .catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//     document.getElementById('result-box').classList.toggle("hidden")="inline";
//     document.getElementById('login-div').classList.toggle("hidden");
//     document.getElementById('result').innerHTML="Sorry! <br>" + errorMessage;
//   });

// });

// document.getElementById('register-btn').addEventListener('click', function(){
//   const registerEmail=document.getElementById("register-email").value;
//   const registerPassword=document.getElementById("register-password").value;

//   createUserWithEmailAndPassword(auth, registerEmail, registerPassword)
//   .then((userCredential) => {
//     const user = userCredential.user;
//     document.getElementById('result-box').classList.toggle("hidden");
//     document.getElementById('register-div').classList.toggle("hidden");
//     document.getElementById('result').innerHTML="Welcome Back" + registerEmail + " was Registered Successfully";
//   })
//   .catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//     document.getElementById('result-box').style.display="inline";
//     document.getElementById('register-div').style.display="none";
//     document.getElementById('result').innerHTML="Sorry!" + errorMessage;
//   });
// });

// document.getElementById('login-btn').addEventListener('click', function(){
//   const loginEmail=document.getElementById("login-email").value;
//   const loginPassword=document.getElementById("login-password").value;

//   signInWithEmailAndPassword(auth, loginEmail, loginPassword)
//   .then((userCredential) => {
//     const user = userCredential.user;
//     document.getElementById('result-box').style.display="inline";
//     document.getElementById('login-div').style.display="none";
//     document.getElementById('result').style.display="Welcome Back <br>" + loginEmail + " was Login Successfully";
//   })
//   .catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//     document.getElementById('result-box').style.display="inline";
//     document.getElementById('login-div').style.display="none";
//     document.getElementById('result').style.display="Sorry! <br>" + errorMessage;
//   });

// });




  // const registerEmail=document.getElementById("register-email").value;
  // const registerPassword=document.getElementById("register-password").value;

  // createUserWithEmailAndPassword(auth, registerEmail, registerPassword)
  // .then((userCredential) => {
  //   const user = userCredential.user;
  //   document.getElementById('result-box').style.display="inline";
  //   document.getElementById('register-div').style.display="none";
  //   document.getElementById('result').style.display="Welcome Back <br>" + registerEmail + " was Registered Successfully";
  // })
  // .catch((error) => {
  //   const errorCode = error.code;
  //   const errorMessage = error.message;
  //   document.getElementById('result-box').style.display="inline";
  //   document.getElementById('register-div').style.display="none";
  //   document.getElementById('result').innerHTML="Sorry! <br>" + errorMessage;
  // });

