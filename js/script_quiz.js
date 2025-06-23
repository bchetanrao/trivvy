// js/script_quiz.js
// Unified quiz rendering for all categories

function renderQuiz(trivia) {
  const paper = document.querySelector('.paper');
  paper.innerHTML = '';
  trivia.forEach((qData, idx) => {
    const block = document.createElement('div');
    block.classList.add('block');
    block.dataset.correctAnswer = qData.correct_answer;

    const label = document.createElement('label');
    label.textContent = `${idx + 1} of ${trivia.length}`;
    const h2 = document.createElement('h2');
    h2.innerHTML = qData.question;
    block.appendChild(label);
    block.appendChild(h2);

    const answers = [qData.correct_answer, ...qData.incorrect_answers];
    shuffle(answers);
    answers.forEach(ans => {
      const btn = document.createElement('button');
      btn.classList.add('option');
      btn.dataset.answer = ans;
      btn.innerHTML = ans;
      btn.addEventListener('click', selectOption);
      block.appendChild(btn);
    });

    delete block.dataset.answered;
    delete block.dataset.correct;
    paper.appendChild(block);
  });
}

// Initialize quiz on DOM ready
document.addEventListener('DOMContentLoaded', () => {
  // Determine quiz key from URL param or data attribute
  const paperEl = document.querySelector('.paper');
  const urlParams = new URLSearchParams(window.location.search);
  let quizKey = urlParams.get('quiz') || paperEl.getAttribute('data-quiz');
  const settings = QUIZ_SETTINGS[quizKey];
  if (!settings) {
    // Invalid or missing quiz key, redirect to home
    window.location.href = 'index.html';
    return;
  }

  // Set up page header and banner
  const titleEl = document.querySelector('.quiz-title');
  titleEl.id = settings.headingId;
  titleEl.textContent = settings.title;
  const bannerLink = document.getElementById('banner-link');
  bannerLink.href = settings.creditUrl;
  const bannerImg = document.getElementById('banner-img');
  bannerImg.src = settings.bannerSrc;
  bannerImg.alt = settings.bannerAlt;

  // Fetch and render quiz
  getQuiz(settings.categoryId).then(renderQuiz);

  // Configure submit button
  const submitBtn = document.getElementById('submit-btn');
  submitBtn.classList.add(settings.submitBtnClass);
  submitBtn.textContent = MESSAGES.submit;

  // Shared UI behaviors
  setupLoader();
  closeModalOnOutsideClick();
}); 