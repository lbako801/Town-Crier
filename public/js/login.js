const signInBtn = document.getElementById("signinbtn");

const loginFormHandler = async (event) => {
  event.preventDefault();

  const username = document.querySelector("#username").value.trim();
  const password = document.querySelector("#password").value.trim();

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
      alert("Failed to log in");
    }
  }
};

document
  .querySelector("#login-form")
  .addEventListener("submit", loginFormHandler);
