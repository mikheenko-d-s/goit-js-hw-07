const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ingredientsRef = document.querySelector('#ingredients');

const makeIngredient = ingredient => {
  const ingredientRef = document.createElement('li');
  ingredientRef.innerText = ingredient;
  return ingredientRef;
};

const ingredientItemsRef = ingredients.map(ingredient =>
  makeIngredient(ingredient),
);

ingredientsRef.append(...ingredientItemsRef);
