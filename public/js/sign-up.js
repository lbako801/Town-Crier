const signUpBtn = document.getElementById("signupbtn");
const signInBtn = document.getElementById("signinbtn");

const signupFormHandler = async (event) => {
  event.preventDefault();

  const username = document.querySelector("#username").value.trim();
  const email = document.querySelector("#email").value.trim();
  const password = document.querySelector("#password").value.trim();
  const location = document.querySelector("#city").value.trim();

  if (username && password) {

    const response = await fetch("/api/user/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, email, password, location }),
    });

    if (response.ok) {
      const user = await response.json();
      console.log(user);
      document.location.replace(`city/${user.location}`);
    } else {
      alert("Failed to sign up");
    }
  }
};

document
  .querySelector("#signup-form")
  .addEventListener("submit", signupFormHandler);
