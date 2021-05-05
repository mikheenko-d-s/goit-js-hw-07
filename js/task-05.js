const inputRef = document.querySelector('#name-input');
const outputRef = document.querySelector('#name-output');

inputRef.addEventListener('input', () => {
  outputRef.innerText = inputRef.value ? inputRef.value : 'незнакомец';
});
