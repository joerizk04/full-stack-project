document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('.learn-more-btn');
  const modal = document.getElementById('exerciseModal');
  const modalTitle = modal.querySelector('#modalTitle');
  const modalDescription = modal.querySelector('#modalDescription');
  const modalDifficulty = modal.querySelector('#modalDifficulty');
  const modalEquipment = modal.querySelector('#modalEquipment');
  const closeBtn = document.getElementById('modalClose');

  const API_KEY = 'xtgQuZ50cPy1n++pJSzDvA==luiCJ8GfW6Gv2Eax';

  buttons.forEach(button => {
    button.addEventListener('click', async () => {
      const card = button.closest('.exercise-card');
      const exerciseName = card.getAttribute('data-exercise');

      modalTitle.textContent = 'Loading...';
      modalDescription.textContent = '';
      modalDifficulty.textContent = '';
      modalEquipment.textContent = '';
      modal.classList.remove('hidden');

      try {
        const response = await fetch(`https://api.api-ninjas.com/v1/exercises?name=${encodeURIComponent(exerciseName)}`, {
          headers: { 'X-Api-Key': API_KEY }
        });

        if (!response.ok) throw new Error('Failed to fetch');

        const data = await response.json();

        if (data.length > 0) {
          const exercise = data[0];
          modalTitle.textContent = exercise.name || exerciseName;
          modalDescription.textContent = exercise.instructions || 'No description available.';
          modalDifficulty.textContent = exercise.difficulty || 'N/A';
          modalEquipment.textContent = exercise.equipment || 'N/A';
        } else {
          modalTitle.textContent = exerciseName;
          modalDescription.textContent = 'No description found.';
          modalDifficulty.textContent = 'N/A';
          modalEquipment.textContent = 'N/A';
        }
      } catch (err) {
        console.error(err);
        modalTitle.textContent = exerciseName;
        modalDescription.textContent = 'An error occurred while fetching exercise data.';
        modalDifficulty.textContent = 'N/A';
        modalEquipment.textContent = 'N/A';
      }
    });
  });

  closeBtn.addEventListener('click', () => {
    modal.classList.add('hidden');
  });

  modal.addEventListener('click', e => {
    if (e.target === modal) modal.classList.add('hidden');
  });
});
