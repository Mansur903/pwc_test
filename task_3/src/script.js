window.addEventListener('DOMContentLoaded', () => {
  const apiUrl = 'https://reqres.in/api/users/';
  let addedCards = [1,2,3];

  const getData = async (url) => {
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error(`Could not fetch ${url}, status: ${res.status}`);
    }
    return await res.json();
  }

  const deleteCard = () => {
    let deleteButton = document.querySelectorAll('.card__delete');
    deleteButton.forEach((item) => {
        item.addEventListener('click', (e) => {
        e.preventDefault();
        deletedId = item.closest('.card').id
      })
    })
  }

  const loadInfo = () => {
    for (let cardNumber of addedCards) {
      getData(`${apiUrl}${cardNumber}`)
        .then(data => generateCard(data))
        .then(() => {
          let deleteButton = document.querySelectorAll('.card__delete');
          deleteButton.forEach((item) => {
            item.addEventListener('click', (e) => {
              e.preventDefault();
              deletedId = item.closest('.card').id
              const deletedItem = document.getElementById(`${deletedId}`);
              const parent = document.querySelector('.cards-list');
              parent.removeChild(deletedItem);
              addedCards = addedCards.filter((item) => item !== Number(deletedId));
            })
          })
        })
    }
  }

  loadInfo();

  const addButton = document.querySelector('.form__button');
  const message = document.querySelector('.message');

  addButton.addEventListener('click', (e) => {
    e.preventDefault();
    const cardNumber = Number(document.querySelector('.api__input').value);
    if (addedCards.includes(cardNumber)) {
      message.textContent = 'Данная карточка уже была добавлена!';
      message.classList.remove('green');
      message.classList.add('red');
    } else {
      message.textContent = 'Новая карточка добавлена :)';
      message.classList.remove('red');
      message.classList.add('green');
      addedCards.push(cardNumber);
      getData(`${apiUrl}${cardNumber}`)
        .then(data => generateCard(data))
        .then(() => {
          let deleteButton = document.querySelectorAll('.card__delete');
          deleteButton.forEach((item) => {
            item.addEventListener('click', (e) => {
              e.preventDefault();
              deletedId = item.closest('.card').id
              const deletedItem = document.getElementById(`${deletedId}`);
              const parent = document.querySelector('.cards-list');
              parent.removeChild(deletedItem);
              addedCards = addedCards.filter((item) => item !== Number(deletedId));
            })
          })
        })
    }
  })

  const generateCard = (obj) => {
    let card = document.createElement('li');
    card.classList.add('card');
    card.setAttribute('id', `${obj.data.id}`)
    card.innerHTML = `
      <img class="card__image" src="${obj.data.avatar}" alt="worker">
      <div class="card__name">${obj.data.first_name} ${obj.data.last_name}</div>
      <div class="card__email">${obj.data.email}</div>
      <button class="card__delete" type="button">Удалить</button>
    `;
    document.querySelector('.cards-list').append(card);
  }
})

//Время выполнения задания ~ 3 часа
//Для просмотра результата откройте файл index.html с помощью браузера