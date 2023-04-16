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

