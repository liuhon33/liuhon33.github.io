const choices = document.querySelectorAll('[data-answer]');
const continuation = document.getElementById('continuation');
const revealTitle = document.getElementById('reveal-title');
const quizHint = document.getElementById('quiz-hint');

for (const choice of choices) {
  choice.addEventListener('click', () => {
    for (const option of choices) {
      option.setAttribute('aria-pressed', String(option === choice));
      option.setAttribute('aria-expanded', 'true');
      option.disabled = true;
    }
    quizHint.textContent = `You chose ${choice.dataset.answer}. The output is revealed below.`;
    continuation.hidden = false;
    revealTitle.focus({ preventScroll: true });
    revealTitle.scrollIntoView({ block: 'start' });
  });
}
