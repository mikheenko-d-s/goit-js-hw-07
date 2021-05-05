const categoriesRef = document.querySelectorAll('#categories .item');

const numberOfCategories = categoriesRef.length;
console.log(`В списке ${numberOfCategories} категории`);

const getCategorySummary = category => {
  const categoryTitleRef = category.querySelector('h2');
  const categoryTitle = categoryTitleRef.textContent;
  const categoryItemsRef = category.querySelectorAll('li');
  const numberOfCategoryItems = categoryItemsRef.length;

  return ` - Категория: ${categoryTitle}\n    > Количество элементов: ${numberOfCategoryItems}`;
};

categoriesRef.forEach(category => console.log(getCategorySummary(category)));
