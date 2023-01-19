// Напиши скрипт управления формой логина.
// Обработка отправки формы form.login-form должна быть по событию submit.
// При отправке формы страница не должна перезагружаться.
// Если в форме есть незаполненные поля, выводи alert с предупреждением о том, что все поля должны быть заполнены.
// Если пользователь заполнил все поля и отправил форму, собери значения полей в обьект, где имя поля будет именем свойства, а значение поля - значением свойства. Для доступа к элементам формы используй свойство elements.
// Выведи обьект с введенными данными в консоль и очисти значения полей формы методом reset.

const form = document.querySelector('.login-form');

const inputEl = document.querySelector('input');


form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();

    const formElements = event.currentTarget.elements;
    const userData = {
        email: formElements.email.value,
        password: formElements.password.value,
    }
    console.log('userData', userData);


    if(inputEl.value === '') {
        alert('все поля должны быть заполнены.')
    } 
    
   form.reset();
}

 

//     function onFormSubmit(event) {
//         event.preventDefault();
    
//    const formData = new FormData(event.currentTarget);

//     formData.forEach((value, name) => {
//         const data = {
//             name: name,
//             value: value,

//         }
//         console.log('data', data)
//     })
//         if(inputEl.value === '') {
//             alert('все поля должны быть заполнены.')
//         } 
        
//        form.reset();
//     }