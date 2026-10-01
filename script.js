(() => {
  const form = document.querySelector('#communityForm');
  const year = document.querySelector('#year');
  if (year) year.textContent = new Date().getFullYear();
  if (!form) return;
  const interests = [...form.querySelectorAll('.interest-check')];
  const interestOptions = form.querySelector('#interestOptions');
  const interestError = form.querySelector('#interestError');
  const validateInterests = () => {
    const valid = interests.some((input) => input.checked);
    interestOptions.classList.toggle('invalid', !valid);
    interestError.classList.toggle('show', !valid);
    return valid;
  };
  interests.forEach((input) => input.addEventListener('change', validateInterests));
  form.addEventListener('submit', (event) => {
    const interestsValid = validateInterests();
    if (!form.checkValidity() || !interestsValid) {
      event.preventDefault();
      event.stopPropagation();
      form.classList.add('was-validated');
      const firstInvalid = form.querySelector(':invalid') || interestOptions;
      firstInvalid.scrollIntoView({ behavior: 'smooth', block: 'center' });
      if (firstInvalid.focus) firstInvalid.focus({ preventScroll: true });
    }
  });
})();
