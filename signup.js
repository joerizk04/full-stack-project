class SignUpForm {
  constructor() {
    this.form = document.getElementById("signupForm");
    this.errorMsg = document.getElementById("signupError");
    this.signupBtn = document.querySelector(".signup-btn");

    this.form.addEventListener("submit", (e) => this.handleSubmit(e));
  }

  async handleSubmit(e) {
    e.preventDefault();

    const email = document.getElementById("signupEmail").value.trim();
    const password = document.getElementById("signupPassword").value.trim();
    const confirmPassword = document.getElementById("signupConfirm").value.trim();

    this.errorMsg.textContent = "";
    this.errorMsg.style.display = "none";

    if (!email || !password || !confirmPassword) {
      return this.showError("All fields are required");
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return this.showError("Please enter a valid email address");
}


    if (password.length < 8) {
      return this.showError("Password must be at least 8 characters");
    }

    if (password !== confirmPassword) {
      return this.showError("Passwords do not match");
    }

    this.signupBtn.disabled = true;
    this.signupBtn.textContent = "Registering...";

    try {
      const response = await fetch("http://localhost:8000/signup.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (data.success) {
        alert("Account created successfully. Please log in.");
        window.location.href = "login.html";
      } else {
        this.showError(data.message || "Registration failed");
      }
    } catch (error) {
      this.showError("Connection error. Please try again.");
      console.error("Signup error:", error);
    } finally {
      this.signupBtn.disabled = false;
      this.signupBtn.textContent = "Sign Up";
    }
  }

  showError(message) {
    this.errorMsg.textContent = message;
    this.errorMsg.style.display = "block";

    setTimeout(() => {
      this.errorMsg.style.display = "none";
    }, 5000);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  new SignUpForm();
});
