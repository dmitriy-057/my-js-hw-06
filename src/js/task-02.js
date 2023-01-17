const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
console.log(ingredients);

// 1 - получаем доступ к id;
// 2 - перебираем массив строк меодом map;
// 3 - создаем елемент li
// 4 - присваиваем класс <li>
// 5 - добавляем  в li перебранный массив
// 6 - добавляем li в ul

const ingredientsListEl = document.querySelector('#ingredients');

const items = ingredients.map(ingredient => {

  const itemEl = document.createElement('li');

  itemEl.textContent = ingredient;

  itemEl.classList.add('item');
  return itemEl;

});

ingredientsListEl.append(...items)

