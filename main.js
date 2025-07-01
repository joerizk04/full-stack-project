document.addEventListener('DOMContentLoaded', () => {
  const toggleBtn = document.querySelector('#nav_toggle');
  const sidebar = document.querySelector('.sidebar');
  
  localStorage.removeItem('sidebarState');
  sidebar.classList.remove('collapsed');
  
  if (toggleBtn && sidebar) {
    toggleBtn.addEventListener('click', () => {
      sidebar.classList.toggle('collapsed');
      localStorage.setItem('sidebarState', sidebar.classList.contains('collapsed') ? 'collapsed' : 'expanded');
    });
  }
});

 
  window.toggleSubmenu = function(e) {
    e.preventDefault();
    const parent = e.target.closest('.has-dropdown');
    if (parent) {
      parent.classList.toggle('open');
    }
  };


function showProgram(program) {
  document.querySelectorAll('.program-section').forEach(section => {
    section.classList.add('hidden');
  });
  
  const selectedProgram = document.getElementById(`${program}-program`);
  if (selectedProgram) {
    selectedProgram.classList.remove('hidden');
    selectedProgram.scrollIntoView({ behavior: 'smooth' });
  }
}

function goBack() {
  document.querySelectorAll('.program-section').forEach(section => {
    section.classList.add('hidden');
  });
  
  document.querySelector('.hero-program')?.scrollIntoView({ behavior: 'smooth' });
}