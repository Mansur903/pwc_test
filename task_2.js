const iconAppearance = () => {
  const icon = document.querySelector('.tcp-payment-info');
  const options = {
    root: null,
    rootMargin: '0px',
    threshold: 1.0
  }
  const callback = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        console.log('Попадание в экран!')
      }
    })
  }
  const observer = new IntersectionObserver(callback, options);
  observer.observe(icon);
}
iconAppearance();

// Функция, которая при попадании в экран иконок оплаты в футере выводит в консоль сообщение о попадание в экран.
// Время выполнения задания ~15 минут