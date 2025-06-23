function getQuiz(categoryId, amount = DEFAULT_QUIZ_AMOUNT, type = QUIZ_TYPE.MULTIPLE) {
  const url = `${API_BASE_URL}?amount=${amount}&category=${categoryId}&type=${type}`;
  return fetch(url)
    .then(response => {
      if (!response.ok) throw new Error('Network response was not ok');
      return response.json();
    })
    .then(data => data.results);
}

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function selectOption(event) {
  const btn = event.currentTarget;
  const block = btn.closest('.block');
  if (block.dataset.answered) return;
  block.dataset.answered = 'true';
  if (btn.dataset.answer === block.dataset.correctAnswer) {
    btn.classList.add('correct');
    block.dataset.correct = 'true';
  } else {
    btn.classList.add('incorrect');
    // Show the correct answer
    const options = block.querySelectorAll('button.option');
    options.forEach(opt => {
      if (opt.dataset.answer === block.dataset.correctAnswer) {
        opt.classList.add('correct');
      }
    });
    block.dataset.correct = 'false';
  }
}

function showScore() {
  const blocks = document.querySelectorAll('.block');
  const score = Array.from(blocks).filter(b => b.dataset.correct === 'true').length;

  // Update modal message
  const modalCont = document.getElementById('modal-cont');
  const messageEl = modalCont.querySelector('h1');
  messageEl.textContent = MESSAGES.congratulations;

  // Display score
  document.getElementById('modal').style.display = 'flex';
  document.getElementById('score').textContent = score;
}

function setupLoader(loaderId = 'loader', delay = LOADER_HIDE_DELAY) {
  const loader = document.getElementById(loaderId);
  window.addEventListener('load', () => {
    setTimeout(() => {
      if (loader) loader.style.display = 'none';
    }, delay);
  });
}

function closeModalOnOutsideClick(modalId = 'modal') {
  const modal = document.getElementById(modalId);
  const handler = event => {
    if (event.target === modal) {
      modal.style.display = 'none';
    }
  };
  window.addEventListener('click', handler);
  window.addEventListener('touchstart', handler);
} 