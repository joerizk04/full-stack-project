class ContactForm {
  constructor() {
    this.form = document.getElementById('contactForm');
    this.successMsg = document.getElementById('formSuccess');
    this.form.addEventListener('submit', (e) => this.handleSubmit(e));
    this.setupValidation();
  }

  setupValidation() {
    // Real-time validation
    document.getElementById('name').addEventListener('input', () => this.validateName());
    document.getElementById('email').addEventListener('input', () => this.validateEmail());
    document.getElementById('subject').addEventListener('change', () => this.validateSubject());
    document.getElementById('message').addEventListener('input', () => this.validateMessage());
  }

  validateName() {
    const name = document.getElementById('name').value.trim();
    const error = document.getElementById('nameError');
    
    if (name.length < 2) {
      error.textContent = 'Name must be at least 2 characters';
      return false;
    } else {
      error.textContent = '';
      return true;
    }
  }

  validateEmail() {
    const email = document.getElementById('email').value.trim();
    const error = document.getElementById('emailError');
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (!emailRegex.test(email)) {
      error.textContent = 'Please enter a valid email address';
      return false;
    } else {
      error.textContent = '';
      return true;
    }
  }

  validateSubject() {
    const subject = document.getElementById('subject').value;
    const error = document.getElementById('subjectError');
    
    if (!subject) {
      error.textContent = 'Please select a subject';
      return false;
    } else {
      error.textContent = '';
      return true;
    }
  }

  validateMessage() {
    const message = document.getElementById('message').value.trim();
    const error = document.getElementById('messageError');
    
    if (message.length < 10) {
      error.textContent = 'Message must be at least 10 characters';
      return false;
    } else {
      error.textContent = '';
      return true;
    }
  }

  handleSubmit(e) {
  e.preventDefault();

  const isNameValid = this.validateName();
  const isEmailValid = this.validateEmail();
  const isSubjectValid = this.validateSubject();
  const isMessageValid = this.validateMessage();

  if (isNameValid && isEmailValid && isSubjectValid && isMessageValid) {
    const formData = new FormData(this.form);

    fetch('save_message.php', {
      method: 'POST',
      body: formData
    })
    .then(res => res.json())
    .then(data => {
      if (data.status === 'success') {
        this.showSuccess();
        this.form.reset();
      } else {
        alert('Failed to send message.');
      }
    })
    .catch(err => {
      console.error('Error:', err);
      alert('Something went wrong.');
    });
  }
}

  showSuccess() {
    this.successMsg.textContent = 'Thank you for your message! We will get back to you soon.';
    this.successMsg.style.display = 'block';
    
    setTimeout(() => {
      this.successMsg.style.display = 'none';
    }, 5000);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  new ContactForm();
});