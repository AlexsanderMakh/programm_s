var button = document.getElementById("listVacancies");
button.addEventListener("click", function() {
  window.location.href = "vacancies.html#openVacantion";
});

function smoothScroll(target) {
  var targetElement = document.querySelector(target);
  window.scrollTo({
    top: targetElement.offsetTop,
    behavior: "smooth"
  });
}

var button = document.getElementById("goTeam");
button.addEventListener("click", function() {
  smoothScroll("#team");
});

const projectBtn = document.getElementById('flutter_developer_button');
const formContainer = document.getElementById('formContainer');

projectBtn.addEventListener('click', function() {
  formContainer.style.display = 'block';
});

const closeButton = document.querySelector('.close-button');
const popupFormContainer = document.querySelector('.popup-form-container');

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
}

const buttonIds = [
  'flutter_developer_button',
  'java_developer_button',
  'service_specialist_button',
  'react_developer_button',
  'vue_developer_button'
];

buttonIds.forEach(buttonId => {
  const button = document.getElementById(buttonId);

  button.addEventListener('click', () => {
    popupFormContainer.style.display = 'flex';
  });
});

const vacancyItems = document.querySelectorAll('.open_vacantion_examples > div');
const containerProfile = document.querySelectorAll('.container_profile > div');

const options = {
  rootMargin: '-50px 0px',
  threshold: 0.2,
};

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const target = entry.target;
      setTimeout(() => {
        target.classList.add('show');
      }, 200);
      observer.unobserve(target);
    }
  });
}, options);

containerProfile.forEach((item) => {
  observer.observe(item);
});

vacancyItems.forEach((item) => {
  observer.observe(item);
});

var burger = document.querySelector('.burger');
var menu = document.querySelector('.menu');

if (burger && menu) {
  burger.addEventListener('click', function() {
    menu.classList.toggle('open');
  });

  document.addEventListener('click', function(event) {
    if (!menu.contains(event.target) && !burger.contains(event.target)) {
      menu.classList.remove('open');
    }
  });
}



document.addEventListener('DOMContentLoaded', function() {
  var resumeForm = document.querySelector('.resume-form');

  resumeForm.addEventListener('submit', function(event) {
    event.preventDefault();

    var nameInput = resumeForm.querySelector('input[name="name"]');
    var phoneInput = resumeForm.querySelector('input[name="phone"]');
    var emailInput = resumeForm.querySelector('input[name="email"]');
    var specialtySelect = resumeForm.querySelector('select[name="specialty"]');

    var name = nameInput ? nameInput.value : '';
    var phone = phoneInput ? phoneInput.value : '';
    var email = emailInput ? emailInput.value : '';
    var specialty = specialtySelect ? specialtySelect.value : '';

    // Проверка обязательных полей
    if (!name || !phone || !email || !specialty) {
      alert('Пожалуйста, заполните все обязательные поля');
      return;
    }

    // Проверка длины номера телефона
    if (phone.length > 20) {
      alert('Слишком длинный номер телефона');
      return;
    }

    // Проверка номера телефона на использование только цифр
    var phoneRegex = /^\+?\d+$/;
    if (!phoneRegex.test(phone)) {
      alert('Номер телефона должен содержать только цифры и символ "+" в начале (если нужно)');
      return;
    }

    // Проверка адреса электронной почты
    var emailRegex = /^[A-Za-z0-9]+([_.-][A-Za-z0-9]+)*@[A-Za-z0-9]+([_.-][A-Za-z0-9]+)*\.[A-Za-z]+$/;
    if (!emailRegex.test(email)) {
      var emailWithoutDomainRegex = /^[A-Za-z0-9]+([_.-][A-Za-z0-9]+)*@[A-Za-z0-9]+$/;
      if (!emailWithoutDomainRegex.test(email)) {
        alert('Адрес электронной почты должен содержать только английские буквы, цифры и специальные символы ".", "_", "-"');
        return;
      }
    }

    // Создаем объект FormData и добавляем значения полей формы
    var formData = new FormData();
    formData.append('name', name);
    formData.append('phone', phone);
    formData.append('email', email);
    formData.append('specialty', specialty);

    // Отправляем данные на сервер методом POST
    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'http://app-tech.ru/php/send.php');
    xhr.send(formData);

    // Очистка полей формы
    if (nameInput) {
      nameInput.value = '';
    }
    if (phoneInput) {
      phoneInput.value = '';
    }
    if (emailInput) {
      emailInput.value = '';
    }
    if (specialtySelect) {
      specialtySelect.selectedIndex = 0;
    }

    // Вывод сообщения об успешной отправке и перезагрузка страницы
    alert('Спасибо! Ваша заявка отправлена.');
    window.location.reload();
  });
});

var myForm = document.querySelector('.my-form');

myForm.addEventListener('submit', function(event) {
  event.preventDefault();

  var nameInput = myForm.querySelector('input[name="name"]');
  var phoneInput = myForm.querySelector('input[name="phone"]');
  var emailInput = myForm.querySelector('input[name="email"]');
  var specialtyInput = myForm.querySelector('select[name="specialty"]');

  var name = nameInput ? nameInput.value : '';
  var phone = phoneInput ? phoneInput.value : '';
  var email = emailInput ? emailInput.value : '';
  var specialty = specialtyInput ? specialtyInput.value : '';

  // Проверка обязательных полей
  if (!name || !phone || !email || !specialty) {
    alert('Пожалуйста, заполните все обязательные поля');
    return;
  }

  // Проверка длины номера телефона
  if (phone.length > 20) {
    alert('Слишком длинный номер телефона');
    return;
  }

  // Проверка номера телефона на использование только цифр
  var phoneRegex = /^\+?\d+$/;
  if (!phoneRegex.test(phone)) {
    alert('Номер телефона должен содержать только цифры и символ "+" в начале (если нужно)');
    return;
  }

  // Проверка адреса электронной почты
  var emailRegex = /^[A-Za-z0-9]+([_.-][A-Za-z0-9]+)*@[A-Za-z0-9]+([_.-][A-Za-z0-9]+)*\.[A-Za-z]+$/;
  if (!emailRegex.test(email)) {
    var emailWithoutDomainRegex = /^[A-Za-z0-9]+([_.-][A-Za-z0-9]+)*@[A-Za-z0-9]+$/;
    if (!emailWithoutDomainRegex.test(email)) {
      alert('Адрес электронной почты должен содержать только английские буквы, цифры и специальные символы ".", "_", "-"');
      return;
    }
  }

  // Создаем объект FormData и добавляем значения полей формы
  var formData = new FormData();
  formData.append('name', name);
  formData.append('phone', phone);
  formData.append('email', email);
  formData.append('specialty', specialty);

  // Отправляем данные на сервер методом POST
  var xhr = new XMLHttpRequest();
  xhr.open('POST', 'http://app-tech.ru/php/send.php');
  xhr.send(formData);

  // Очистка полей формы
  if (nameInput) {
    nameInput.value = '';
  }
  if (phoneInput) {
    phoneInput.value = '';
  }
  if (emailInput) {
    emailInput.value = '';
  }
  if (specialtyInput) {
    specialtyInput.value = '';
  }

  // Вывод сообщения об успешной отправке и перезагрузка страницы
  alert('Спасибо! Ваша заявка отправлена.');
  window.location.reload();
});

// Попап-форма для проекта
const closeFormButton = document.querySelector('.close-form');
const popupFormContainerProject = document.querySelector('.popup-form-container-project');
const popupFormProject = document.querySelector('.popup-form-project');

if (closeFormButton && popupFormContainerProject && popupFormProject) {
  closeFormButton.addEventListener('click', () => {
    closePopupFormProject();
  });

  popupFormContainerProject.addEventListener('click', (event) => {
    if (event.target === popupFormContainerProject) {
      closePopupFormProject();
    }
  });

  function closePopupFormProject() {
    popupFormContainerProject.style.display = 'none';
    popupFormProject.classList.remove('show');
  }
}

const projectButton = document.getElementById('projectBtn');

if (projectButton) {
  projectButton.addEventListener('click', () => {
    // Закрыть предыдущую попап-форму, если она открыта
    closePopupFormProject();

    popupFormContainerProject.style.display = 'flex';
    setTimeout(() => {
      popupFormProject.classList.add('show');
    }, 100);
  });
}