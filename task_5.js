const list = document.querySelectorAll('[data-id]');

list.forEach((item) => {
  const attValue = item.getAttribute('data-id');
  if (array.includes(Number(attValue))) {
    item.classList.add('test');
  }
});

// array - данный масив из 2000 чисел
// Время выполнения задания ~ 5 минут