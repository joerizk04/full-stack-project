class LoginForm {
  constructor() {
    this.form = document.getElementById("loginForm");
    this.errorMsg = document.getElementById("errorMsg");
    this.loginBtn = document.querySelector(".auth-btn");

    this.form.addEventListener("submit", (e) => this.handleSubmit(e));
  }

  async handleSubmit(e) {
    e.preventDefault();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    this.errorMsg.textContent = "";
    this.errorMsg.style.display = "none";

    if (!email || !password) {
      this.showError("Please fill in all fields");
      return;
    }

    this.loginBtn.disabled = true;
    this.loginBtn.textContent = "Logging in...";

    try {
      const response = await fetch('http://localhost:8000/login.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password })
      });

      const data = await response.json();

      if (data.success) {
        window.location.href = "programs.html";
      } else {
        this.showError(data.message || "Invalid email or password");
      }
    } catch (error) {
      this.showError("Connection error: Unable to reach server");
      console.error("Login error:", error);
    } finally {
      this.loginBtn.disabled = false;
      this.loginBtn.textContent = "Login";
    }
  }

  showError(message) {
    this.errorMsg.textContent = message;
    this.errorMsg.style.display = "block";
  }
}

document.addEventListener('DOMContentLoaded', () => {
  new LoginForm();
});
