const inputRef = document.querySelector('#validation-input');

const resetValidationСlasses = event =>
  event.currentTarget.classList.remove('invalid', 'valid');

const setValidationСlasses = event => {
  const ref = event.currentTarget;
  const inputValidLength = Number(ref.dataset.length);

  if (ref.value.length !== inputValidLength) {
    ref.classList.add('invalid');
    return;
  }

  ref.classList.add('valid');
};

inputRef.addEventListener('focus', resetValidationСlasses);

inputRef.addEventListener('blur', setValidationСlasses);
