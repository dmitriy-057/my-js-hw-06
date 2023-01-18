// Напиши скрипт, который при потере фокуса на инпуте (событие blur), проверяет его содержимое на правильное количество введённых символов.
// Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
// Если введено подходящее количество символов, то border инпута становится зелёным, если неправильное - красным.
// Для добавления стилей, используй CSS-классы valid и invalid, которые мы уже добавили в исходные файлы задания.

const inputEl = document.querySelector('#validation-input');
const validInputLength = inputEl.getAttribute('data-length');


inputEl.addEventListener('blur', onInputCheck);

function onInputCheck() {
    console.log('validInputLength', validInputLength);
    console.log('inputEl.value.length', inputEl.value.length)
    console.log('inputEl.value.length >= validInputLength', inputEl.value.length >= validInputLength);
    
    if(inputEl.value.length >= validInputLength) {
        inputEl.classList.add('valid');
        inputEl.classList.remove('invalid');
    } else {
        inputEl.classList.remove('valid');
        inputEl.classList.add('invalid');
    }
}