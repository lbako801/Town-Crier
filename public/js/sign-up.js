const signUpBtn = document.getElementById("signupbtn");

const signInBtn = document.getElementById("signinbtn");

const signupFormHandler = async (event) => {
  event.preventDefault();

  const firstName = document.getElementById("firstname");
  const lastName = document.getElementById("lastname");
  const city = document.getElementById("city");
  const state = document.getElementById("state");
  const email = document.getElementById("email");
  const username = document.getElementById("username");
  const password = document.getElementById("password");

  console.log(username);
  console.log(password);

  if (username && password) {
    const response = await fetch("/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });

    if (response.ok) {
      document.location.replace("/homepage");
    } else {
      alert("Failed to sign up");
    }
  }
};

document
  .querySelector("#signup-form")
  .addEventListener("submit", signupFormHandler);
