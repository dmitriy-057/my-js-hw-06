// Создай переменную counterValue в которой будет храниться текущее значение счетчика и инициализируй её значением 0.
// Добавь слушатели кликов на кнопки, внутри которых увеличивай или уменьшай значение счтетчика.
// Обновляй интерфейс новым значением переменной counterValue.

const valueEl = document.querySelector('#value');
console.log('valueEl', valueEl);


let counterValue = 0;
console.log('счетчик', counterValue)

const decrementEl = document.querySelector('[data-action="decrement"]');
console.log('decrementEl', decrementEl);

const incrementEl = document.querySelector('[data-action="increment"]');
console.log('incrementEl', incrementEl);

decrementEl.addEventListener('click', onDecrementBtnClick);

incrementEl.addEventListener('click', onIncrememntBtnCLick);

function onDecrementBtnClick() {
    console.log(`Значение счетчика уменьшилось на 1`);

    counterValue -= 1;
    valueEl.textContent = counterValue;

    if(counterValue = 0) {
        valueEl.style.color = 'red';
    } 
    
    return valueEl;
}
function onIncrememntBtnCLick() {
    console.log(`Значение счетчика увеличилось на 1`);

    counterValue += 1;
    valueEl.textContent = counterValue;

    if(counterValue >= 0) {
        valueEl.style.color = 'green';
    }
    
    return valueEl;
}


