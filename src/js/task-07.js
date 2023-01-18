// Напиши скрипт, который реагирует на изменение значения input#font-size-control (событие input) и изменяет инлайн-стиль span#text обновляя свойство font-size. В результате при перетаскивании ползунка будет меняться размер текста.

const inputEl = document.querySelector('#font-size-control');
const spanEl = document.querySelector('#text');

inputEl.addEventListener('input', onInputChange)

function onInputChange(event) {
    console.log('event.currentTarget.value', event.currentTarget.value);
    
    spanEl.style.fontSize = event.currentTarget.value + 'px';

    console.log('fontSize', spanEl.style.fontSize)
}
