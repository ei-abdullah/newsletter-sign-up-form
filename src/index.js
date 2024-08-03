console.log("First");
const submitBtn = document.getElementById("submitBtn");

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();

  const emailInput = document.getElementById("emailInput");
  const novalidEmail = document.getElementById("novalid-email");

  const email = emailInput.value;
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (emailPattern.test(email)) {
    novalidEmail.classList.add("hidden");
    window.location.href = `./src/subscribing-page.html?email=${encodeURIComponent(
      email
    )}`;
  } else {
    novalidEmail.classList.remove("hidden");
  }
});
