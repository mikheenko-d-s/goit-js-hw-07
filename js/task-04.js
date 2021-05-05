let counterValue = 0;

const increment = () => (counterValue += 1);
const decrement = () => (counterValue -= 1);

const counterRef = document.querySelector('#value');
const incrementBtnRef = document.querySelector(
  '#counter button[data-action="increment"]',
);
const decrementBtnRef = document.querySelector(
  '#counter button[data-action="decrement"]',
);

incrementBtnRef.addEventListener('click', () => {
  counterRef.innerText = increment();
});

decrementBtnRef.addEventListener('click', () => {
  counterRef.innerText = decrement();
});
