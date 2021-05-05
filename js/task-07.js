const rangeRef = document.querySelector('#font-size-control');
const textRef = document.querySelector('#text');

rangeRef.addEventListener('input', () => {
  textRef.style.fontSize = 0.25 + (1.5 * rangeRef.value) / 100 + 'rem';
});
