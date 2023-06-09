// Аккордеон
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    var panel = this.nextElementSibling;
    var isActive = this.classList.contains("active");

    // Закрыть все блоки аккордеона
    closeAllPanels();

    // Открыть/закрыть текущий блок аккордеона
    if (!isActive) {
      this.classList.add("active");
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}

function closeAllPanels() {
  var panels = document.getElementsByClassName("panel");
  for (var j = 0; j < panels.length; j++) {
    var panel = panels[j];
    var accordionBtn = panel.previousElementSibling;
    accordionBtn.classList.remove("active");
    panel.style.maxHeight = null;
  }
}

// Intersection Observer
function handleIntersection(entries, observer) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      document.getElementById("analytics").classList.add('analyticsshow');
      document.getElementById("java_developer").classList.add('java_developershow');
      document.getElementById("frontend").classList.add('frontendshow');
      document.getElementById("developer_javascript").classList.add('developer_javascriptshow');
      document.getElementById("architect").classList.add('architectshow');
      document.getElementById("project_manager").classList.add('project_managershow');
      document.getElementById("designer").classList.add('designershow');
      document.getElementById("developer").classList.add('developershow');
      document.getElementById("android").classList.add('androidshow');
      document.getElementById("ios").classList.add('iosshow');
      document.getElementById("admin").classList.add('adminshow');
    }
  });
}

var options = {
  root: null,
  rootMargin: '0px',
  threshold: 0.6
};

var observer = new IntersectionObserver(handleIntersection, options);

var symbolPositions = document.querySelectorAll('.symbol_position');
symbolPositions.forEach(symbolPosition => {
  observer.observe(symbolPosition);
});

// Переход по клику на кнопку
// var teamButton = document.getElementById('goTeam');
// if (teamButton) {
//   teamButton.addEventListener("click", function() {
//     window.location.href = "vacancies.html#openVacantion";
//   });
// }

var teamButton = document.getElementById('teamBtn');
if (teamButton) {
  teamButton.addEventListener("click", function() {
    window.location.href = "vacancies.html";
  });
}

// Плавная прокрутка
function smoothScroll(target) {
  var targetElement = document.querySelector(target);
  window.scrollTo({
    top: targetElement.offsetTop,
    behavior: "smooth"
  });
}

// Попап-форма
const closeButton = document.querySelector('.close-button');
const popupFormContainer = document.querySelector('.popup-form-container');
const popupForm = document.querySelector('.popup-form');

if (closeButton && popupFormContainer && popupForm) {
  closeButton.addEventListener('click', () => {
    closePopupForm();
  });

  popupFormContainer.addEventListener('click', (event) => {
    if (event.target === popupFormContainer) {
      closePopupForm();
    }
  });

  function closePopupForm() {
    popupFormContainer.style.display = 'none';
    popupForm.classList.remove('show');
  }
}

const buttonIds = [
  'projectBtn',
  'goTeam',
];

buttonIds.forEach(buttonId => {
  const button = document.getElementById(buttonId);

  if (button) {
    button.addEventListener('click', () => {
      popupFormContainer.style.display = 'flex';
      popupForm.classList.add('show');
    });
  }
});

// Добавляем обработчик события на клик по бургеру
var burger = document.querySelector('.burger');
var menu = document.querySelector('.menu');

if (burger && menu) {
  burger.addEventListener('click', function() {
    menu.classList.toggle('open');
  });
}

var form = document.getElementById('resumeForm');
var nameInput = document.querySelector('#resumeForm input[name="name"]');
var phoneInput = document.querySelector('#resumeForm input[name="phone"]');
var emailInput = document.querySelector('#resumeForm input[name="email"]');
var myForm = document.getElementById('myForm');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  var name = nameInput.value;
  var phone = phoneInput.value;
  var email = emailInput.value;

  // Проверка обязательных полей
  if (!name || !phone || !email) {
    alert('Пожалуйста, заполните все обязательные поля');
    return;
  }

  // Проверка длины номера телефона
  if (phone.length > 11) {
    alert('Номер телефона не может содержать более 11 цифр');
    return;
  }

  // Проверка адреса электронной почты на английские буквы
  var emailRegex = /^[A-Za-z0-9]+@[A-Za-z0-9]+\.[A-Za-z]+$/;
  if (!emailRegex.test(email)) {
    alert('Адрес электронной почты должен содержать только английские буквы');
    return;
  }

  // Создаем объект FormData и добавляем значения полей формы
  var formData = new FormData();
  formData.append('name', name);
  formData.append('phone', phone);
  formData.append('email', email);

  // Создаем новый объект XMLHttpRequest
  var xhr = new XMLHttpRequest();

  // Устанавливаем обработчик события onload для получения ответа от сервера
  xhr.onload = function() {
    if (xhr.status === 200) {
      // Успешная отправка данных
      console.log('Данные успешно отправлены');
      form.reset(); // Очистка полей формы
      var confirmation = confirm('Спасибо! Ваша заявка успешно отправлена. Нажмите "OK", чтобы перезагрузить страницу.');
      if (confirmation) {
        window.location.reload(); // Перезагрузка страницы
      }
    } else {
      // Ошибка при отправке данных
      console.log('Ошибка при отправке данных');
    }
  };

  // Открываем соединение и отправляем данные на сервер методом POST
  xhr.open('POST', 'http://app-tech.ru/php/send.php');
  xhr.send(formData);
});