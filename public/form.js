document.getElementById('reg-btn').addEventListener('click', function(){
  document.getElementById('register-div').style.display="inline";
  document.getElementById('login-div').style.display="none";

});

document.getElementById('log-btn').addEventListener('click', function(){
  document.getElementById('register-div').style.display="none";
  document.getElementById('login-div').style.display="inline";
  
});

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


// document.getElementById('login-btn').addEventListener('click', function(){
//   const registerEmail="johndoe@gmail.com"
//   const registerPassword="123P";

//   firebase.auth().createUserWithEmailAndPassword(registerEmail, registerPassword)
//   .then((userCredential) => {
//     const user = userCredential.user;
//     console.log(user)
//   })
//   .catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//     console.log(errorMessage)
//   });
// });