function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
//Напиши скрипт создания и очистки коллекции элементов. Пользователь вводит количество элементов в input и нажимает кнопку Создать, после чего рендерится коллекция. При нажатии на кнопку Очистить, коллекция элементов очищается.
// Создай функцию createBoxes(amount), которая принимает один параметр - число. Функция создает столько <div>, сколько указано в amount и добавляет их в div#boxes.

// Размеры самого первого <div> - 30px на 30px.
// Каждый элемент после первого, должен быть шире и выше предыдущего на 10px.
// Все элементы должены иметь случайный цвет фона в формате HEX. Используй готовую функцию getRandomHexColor для получения цвета.
// Создай функцию destroyBoxes(), которая очищает содержимое div#boxes, тем самым удаляя все созданные элементы.

const inputEl = document.querySelector('input');
console.log('input', inputEl.value)
const containerEl = document.querySelector('#boxes');
console.log('containerEl', containerEl);
const btnCreateEl = document.querySelector('[data-create]');
const btnDestroyEl = document.querySelector('[data-destroy]');


btnCreateEl.addEventListener('click', onBtnCreateElClick);
btnDestroyEl.addEventListener('click', onBtnDestroyElClick)

function createBoxes(amount) {
  const baseSize = 30;
  
  for (let i = 0; i < amount; i +=1) {

    let size = baseSize + i * 10;

    const divBoxEl = document.createElement('div');
    console.log('divBoxEl', divBoxEl);
    divBoxEl.style.backgroundColor = getRandomHexColor();
    divBoxEl.style.width = size + 'px';
    divBoxEl.style.height =  size + 'px';
    divBoxEl.style.border = '4px, solid, red';
    divBoxEl.style.borderRadius = '20%';
    divBoxEl.style.marginBottom = '10px';
    divBoxEl.style.marginLeft = 'auto';
    divBoxEl.style.marginRight = 'auto';
    
    containerEl.append(divBoxEl);
  }
  
}

function onBtnCreateElClick() {
  let value = inputEl.value;
  createBoxes(value);
}

function onBtnDestroyElClick() {
  containerEl.innerHTML = "";
  inputEl.value = "";
}