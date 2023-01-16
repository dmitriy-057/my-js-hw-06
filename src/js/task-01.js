// 1 - получить доступ к списку --> ul#categories;
const categoriesEl = document.querySelector('#categories');

// 2 - получить массиа всех <li> в списке и их длину;
const allItemsOfCategories = categoriesEl.querySelectorAll('.item');

console.log('Numbers of Categories:', allItemsOfCategories.length);

// 3 - перебрать массив категорий методом forEach;
    // 3.1 - получить доступ к тегу <h2> в каждой категории;
    // 3.2 - получить доступ к списку каждой категории;
    // 3.3 - узнать длину дочерних элементов такого списка;
allItemsOfCategories.forEach(item => {
    
    const itemTitle = item.querySelector('h2');
    console.log('Category', itemTitle.textContent);

    const categoryList = item.querySelector('ul');
    
    const itemsOfCategoryList = categoryList.children;
    console.log('Elements', itemsOfCategoryList.length)
    
})

