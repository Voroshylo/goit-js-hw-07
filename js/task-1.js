const categoriesList = document.querySelector('#categories');
const categoryItem = categoriesList.querySelectorAll('.item');
console.log(`Number of categories: ${categoryItems.length}`);
categoryItem.forEach((category) => {
  const categoryTitle = category.querySelector('h2')
  const subcategories = category.querySelectorAll('ul li');
  console.log(`Category: ${categoryTitle}, Number of items: ${subcategories}`)
});
