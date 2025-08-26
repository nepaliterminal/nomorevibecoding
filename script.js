document.addEventListener('DOMContentLoaded', function() {
  const stars = document.querySelectorAll('#stars span');
  const ratingInput = document.getElementById('rating');

  stars.forEach(star => {
    star.addEventListener('click', function() {
      const value = this.getAttribute('data-value');
      ratingInput.value = value;

      // Add visual feedback for the selected stars
      stars.forEach(s => {
        if (s.getAttribute('data-value') <= value) {
          s.classList.add('selected');
        } else {
          s.classList.remove('selected');
        }
      });
    });
  });
});// Add this code inside your 'DOMContentLoaded' function in script.js

const reviewText = document.getElementById('review');
const charCounter = document.getElementById('char-counter');
const maxLength = 250;

reviewText.addEventListener('input', function() {
  const currentLength = reviewText.value.length;
  charCounter.textContent = `${currentLength} / `;

  // Optional: Change color if the user exceeds the limit
  if (currentLength > maxLength) {
    charCounter.style.color = 'red';
  } else {
    charCounter.style.color = '#666';
  }
});
