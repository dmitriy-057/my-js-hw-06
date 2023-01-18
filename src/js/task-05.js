
// Напиши скрипт который, при наборе текста в инпуте input#name-input (событие input), подставляет его текущее значение в span#name-output. Если инпут пустой, в спане должна отображаться строка "Anonymous".

const refs ={
    input: document.querySelector('#name-input'),
    span: document.querySelector('#name-output'),
}

refs.input.addEventListener('input', onInputChange);

function onInputChange(event) {

    if(refs.input.value === "") {
        refs.span.textContent = "Anonymous";
      } else {
        refs.span.textContent = event.currentTarget.value;
      }

}