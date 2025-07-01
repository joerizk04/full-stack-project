function checkAuthState() {
  const isLoggedIn = localStorage.getItem('authToken') !== null; 
  if (isLoggedIn) {
    document.body.classList.add('logged-in');
  } else {
    document.body.classList.remove('logged-in');
  }
}
document.addEventListener('DOMContentLoaded', checkAuthState);
window.addEventListener('storage', checkAuthState);