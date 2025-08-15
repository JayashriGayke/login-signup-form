let isLogin = true;

const formTitle = document.getElementById("form-title");
const submitBtn = document.getElementById("submit-btn");
const toggleText = document.getElementById("toggle-text");
const toggleLink = document.getElementById("toggle-link");
const form = document.getElementById("auth-form");

toggleLink.addEventListener("click", () => {
  isLogin = !isLogin;
  formTitle.textContent = isLogin ? "Login" : "Sign Up";
  submitBtn.textContent = isLogin ? "Login" : "Sign Up";
  toggleText.innerHTML = isLogin
    ? `Don't have an account? <span id="toggle-link">Sign Up</span>`
    : `Already have an account? <span id="toggle-link">Login</span>`;
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();

  if (!username || !password) {
    alert("Please fill in all fields.");
    return;
  }

  alert(`${isLogin ? "Logged in" : "Signed up"} successfully!`);
});
