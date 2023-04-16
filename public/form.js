// import { initializeApp } from "firebase/app";
// import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";


// //FireBase CONFIGURATION
// const firebaseConfig = {
//   apiKey: "AIzaSyCaxeM1OT_FA_ZF5srxhwy6Pk6mIr5HRJA",
//   authDomain: "sitetrainer-1.firebaseapp.com",
//   projectId: "sitetrainer-1",
//   storageBucket: "sitetrainer-1.appspot.com",
//   messagingSenderId: "635692315384",
//   appId: "1:635692315384:web:2b50d7207e7f68790ec10d",
//   measurementId: "G-KM83YD1LN0"
// };

// //Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const auth = getAuth();

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

// document.getElementById('register-btn').addEventListener('click', function(){
//   const registerEmail=document.getElementById("register-email").value;
//   const registerPassword=document.getElementById("register-password").value;

//   createUserWithEmailAndPassword(auth, registerEmail, registerPassword)
//   .then((userCredential) => {
//     const user = userCredential.user;
//     document.getElementById('result-box').style.display="inline";
//     document.getElementById('register-div').style.display="none";
//     document.getElementById('result').style.display="Welcome Back <br>" + registerEmail + " was Registered Successfully";
//   })
//   .catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//     document.getElementById('result-box').style.display="inline";
//     document.getElementById('register-div').style.display="none";
//     document.getElementById('result').style.display="Sorry! <br>" + errorMessage;
//   });
// });
