const goodsCounter = async (url) => {
  let itemsNumber = 0;
  const response = await fetch(url);
  const parser = new DOMParser();
  const doc = parser.parseFromString(await response.text(), "text/html");
  const pages = doc.querySelectorAll('.catalog-pagination-bottom-pages');
  itemsNumber += doc.querySelectorAll('.catalog-list-item').length;
  for (const page of pages) {
    const response = await fetch(page.href)
    const doc = parser.parseFromString(await response.text(), "text/html");
    itemsNumber += doc.querySelectorAll('.catalog-list-item').length;
  }
  console.log('itemsNumber: ', itemsNumber);
  return itemsNumber;
}
goodsCounter('https://boscooutlet.ru/catalog/men/obuv_1/');

// Функция считает и выводит в консоль количество товаров в категории "Обувь"
// Время выполнения ~1.1ч (сначала делал с помощью цепочек .then())