  const btn = document.getElementById('progressBtn');
  const progressFill = btn.querySelector('.progress-fill');
  const textContent = btn.querySelector('.text-content');

  btn.addEventListener('click', () => {
    btn.disabled = true;
    let progress = 0;
    textContent.textContent = '0%';

    const interval = setInterval(() => {
      progress++;
      progressFill.style.width = progress + '%';
      textContent.textContent = progress + '%';

      if (progress === 100) {
        clearInterval(interval);

        // Display "انجام شد" with checkmark
        textContent.innerHTML = 'انجام شد' + 
          `<svg class="done-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
            <path d="M9 16.2l-3.5-3.5 1.41-1.4L9 13.4l7.09-7.1 1.41 1.42z"/>
          </svg>`;
      }
    }, 60); 
  });