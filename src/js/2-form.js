const feedbackForm = document.querySelector('.feedback-form');
const emailForm = document.querySelector('input');
const messageForm = document.querySelector('textarea');

const saved = localStorage.getItem('feedback-form-state');
const savedFormState = JSON.parse(saved);
if (savedFormState !== null) {
  emailForm.value = savedFormState.email;
  messageForm.value = savedFormState.message;
}

feedbackForm.addEventListener('input', event => {
  event.preventDefault();

  const email = event.currentTarget.elements.email.value.trim();
  const message = event.currentTarget.elements.message.value.trim();
  const feedbackFormState = {
    email,
    message,
  };
  localStorage.setItem(
    'feedback-form-state',
    JSON.stringify(feedbackFormState)
  );
});

feedbackForm.addEventListener('submit', event => {
  event.preventDefault();

  const email = event.target.elements.email.value.trim();
  const message = event.target.elements.message.value.trim();
  if (email === '' || message === '') {
    return alert('Всі поля форми повинні бути заповнені');
  }
  console.log({ email, message });
  localStorage.removeItem('feedback-form-state');
  feedbackForm.reset();
});
//
