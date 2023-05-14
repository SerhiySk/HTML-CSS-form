const agreeToTermsCheckbox = document.querySelector('.agree-to-terms');
const btnSubmit = document.querySelector('.agree-to-terms');

agreeToTermsCheckbox.addEventListener('click', e =>
  console.log(e.target.checked)
);
