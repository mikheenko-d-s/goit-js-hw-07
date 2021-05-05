const getRandomHexColor = () => {
  return ('#000000' + Math.floor(Math.random() * 16 ** 6)
    .toString(16))
    .replace(/0(?=.{6,})/g, '');
};

const makeBoxMarkup = dim => {
  return `<div style= "height: ${dim}px;
                       width: ${dim}px;
                       background-color: ${getRandomHexColor()}">
         </div>`.replace(/ (?= |<)|\n/g, '');
};

const createBoxes = amount => {
  destroyBoxes();
  refs.input.value = amount;
  
  let dim = 30;
  const boxesMarkup = [];

  for (let i = 0; i < amount; i += 1) {
    boxesMarkup.push(makeBoxMarkup(dim));
    dim += 10;
  }

  divBoxesRef.insertAdjacentHTML('afterbegin', boxesMarkup.join(''));
};

const destroyBoxes = () => {
  divBoxesRef.innerHTML = '';
  refs.input.value = 0;
};

const divBoxesRef = document.querySelector('#boxes');
const refs = {
  input: document.querySelector('#controls input'),
  buttonRender: document.querySelector(
    '#controls button[data-action="render"]',
  ),
  buttonDestroy: document.querySelector(
    '#controls button[data-action="destroy"',
  ),
};

refs.buttonRender.addEventListener('click', () => {
  createBoxes(refs.input.value);
});

refs.buttonDestroy.addEventListener('click', destroyBoxes);
