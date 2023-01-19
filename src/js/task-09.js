function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

// Напиши скрипт, который изменяет цвета фона элемента <body> через инлайн стиль при клике на button.change-color и выводит значение цвета в span.color.
// Для генерации случайного цвета используй функцию getRandomHexColor.

const btnEl = document.querySelector('.change-color');
const bodyEl = document.querySelector('body');
const spanEl = document.querySelector('.color');


btnEl.addEventListener('click', onBtnClick);

function onBtnClick() {
  bodyEl.style.backgroundColor = getRandomHexColor();
  console.log(bodyEl.style.backgroundColor)

  spanEl.textContent = bodyEl.style.backgroundColor;
}