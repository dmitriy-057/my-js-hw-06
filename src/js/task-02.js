const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
console.log(ingredients)
ingredients.map(ingredient => {
  console.log(ingredient);

  const ingredientsListEl = document.querySelector('#ingredients');
  console.log('ingredientsListEl', ingredientsListEl);

  const itemEl = document.createElement('li');
  console.log('itemEl', itemEl);

  itemEl.textContent = ingredient;
  console.log('item name', itemEl.textContent );
});

