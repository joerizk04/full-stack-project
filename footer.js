document.getElementById('current-year').textContent = new Date().getFullYear();
document.querySelectorAll('.footer-col a').forEach(link => {
  link.setAttribute('aria-label', link.textContent);
});