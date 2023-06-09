function initMap() {
	const location1 = {lat: 53.89787685650946, lng: 27.515500556810508};
	const location2 = { lat: 53.684384, lng: 23.844736 };

	// Создаем карту Google для первого местоположения
	const map1 = new google.maps.Map(document.getElementById("map1"), {
		zoom: 11,
		center: location1
	});

	// Добавляем маркер на первую карту
	const marker1 = new google.maps.Marker({
		position: location1,
		map: map1,
		title: "Офис 1"
	});

	// Создаем карту Google для второго местоположения
	const map2 = new google.maps.Map(document.getElementById("map2"), {
		zoom: 11,
		center: location2
	});

	// Добавляем маркер на вторую карту
	const marker2 = new google.maps.Marker({
		position: location2,
		map: map2,
		title: "Офис 2"
	});
}

document.addEventListener('DOMContentLoaded', function() {
  var resumeButton = document.getElementById('resume_button');
  var newsButton = document.getElementById('news_button');
  var resumeFields = document.getElementById('resume_fields');
  var newsFields = document.getElementById('news_fields');

  resumeButton.addEventListener('click', function() {
    resumeFields.style.display = 'block';
    newsFields.style.display = 'none';
  });

  newsButton.addEventListener('click', function() {
    newsFields.style.display = 'block';
    resumeFields.style.display = 'none';
  });
});

// Добавляем обработчик события на клик по бургеру
var burger = document.querySelector('.burger');
var menu = document.querySelector('.menu');

if (burger && menu) {
  burger.addEventListener('click', function() {
    menu.classList.toggle('open');
  });
}

function postData(url, data) {
  return fetch(url, {
    method: 'POST',
    body: data
  })
  .then(response => {
    if (response.ok) {
      return response.text();
    }
    throw new Error('Ошибка при отправке данных');
  })
  .then(responseText => {
    alert(responseText);
    location.reload(); // Обновляем страницу
    // Или закрываем форму
  })
  .catch(error => {
    console.error('Произошла ошибка', error);
    // Здесь можно обработать ошибку соединения или другие ошибки
  });
}

function postData(url, data) {
  return fetch(url, {
    method: 'POST',
    body: data
  })
    .then(response => {
      if (response.ok) {
        return response.text();
      }
      throw new Error('Ошибка при отправке данных');
    })
    .then(responseText => {
      alert(responseText);
      location.reload(); // Обновляем страницу
      // Или закрываем форму
    })
    .catch(error => {
      console.error('Произошла ошибка', error);
      // Здесь можно обработать ошибку соединения или другие ошибки
    });
}

document.addEventListener('DOMContentLoaded', function() {
  // Получение элементов формы
  var form = document.querySelector('.form');
  var resumeButton = document.getElementById('resume_button');
  var newsButton = document.getElementById('news_button');
  var resumeFields = document.getElementById('resume_fields');
  var newsFields = document.getElementById('news_fields');
  var submitButton = document.getElementById('submit_button');

  // Обработчик нажатия кнопки "Отправить резюме"
  resumeButton.addEventListener('click', function(event) {
    event.preventDefault();
    // Показать поле для резюме и скрыть поле для новостей
    resumeFields.style.display = 'block';
    newsFields.style.display = 'none';
  });

  // Обработчик нажатия кнопки "Предложить новость"
  newsButton.addEventListener('click', function(event) {
    event.preventDefault();
    // Показать поле для новостей и скрыть поле для резюме
    newsFields.style.display = 'block';
    resumeFields.style.display = 'none';
  });

  // Обработчик отправки формы
  form.addEventListener('submit', function(event) {
    event.preventDefault();
    // Получение значений полей формы
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var specialty = document.getElementById('specialty').value;
    var resumeMessage = document.getElementById('resume_message').value;
    var newsMessage = document.getElementById('news_message').value;

    // Проверка обязательных полей
    if (!name || !email || !specialty || (!resumeMessage && !newsMessage)) {
      alert('Пожалуйста, заполните все обязательные поля');
      return;
    }

    // Создание объекта FormData и добавление значений полей формы
    var formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);
    formData.append('specialty', specialty);
    formData.append('resume_message', resumeMessage);
    formData.append('news_message', newsMessage);

    // Отправка данных на сервер методом POST
    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'http://app-tech.ru/php/send.php');
    xhr.send(formData);

    // Очистка полей формы
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('specialty').value = '';
    document.getElementById('resume_message').value = '';
    document.getElementById('news_message').value = '';

    // Перезагрузка страницы (или выполните другие действия после отправки формы)
    alert('Спасибо! Ваша заявка отправлена.');
    window.location.reload();
  });
});

