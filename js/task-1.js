const categories = document.querySelector('#categories');
const items = categories.querySelectorAll('.item');

// 1. Кількість категорій
console.log(`Number of categories: ${items.length}`);

// 2. Дані по кожній категорії
items.forEach(item => {
    const title = item.querySelector('h2').textContent;
    const elements = item.querySelectorAll('ul li').length;

    console.log(`Category: ${title}`);
    console.log(`Elements: ${elements}`);
});