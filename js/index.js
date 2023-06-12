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
      document.getElementById("tester").classList.add('testershow');
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


var teamButton = document.getElementById('teamBtn');
if (teamButton) {
  teamButton.addEventListener("click", function() {
    window.location.href = "vacancies.html#send_summary";
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

// Добавляем обработчик события на клик по бургеру
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
  'goTeam',
];

buttonIds.forEach(buttonId => {
  const button = document.getElementById(buttonId);

  if (button) {
    button.addEventListener('click', () => {
      // Закрыть предыдущую открытую форму, если есть
      closePopupForm();

      // Открыть текущую форму
      popupFormContainer.style.display = 'flex';
      popupForm.classList.add('show');
    });
  }
});

var form = document.getElementById('resumeForm');
var nameInput = document.querySelector('#resumeForm input[name="name"]');
var phoneInput = document.querySelector('#resumeForm input[name="phone"]');
var emailInput = document.querySelector('#resumeForm input[name="email"]');
var specialtyInput = document.querySelector('#resumeForm select[name="specialty"]');
var myForm = document.getElementById('myForm');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  var name = nameInput.value;
  var phone = phoneInput.value;
  var email = emailInput.value;
  var specialty = specialtyInput.value;

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

  // Проверка номера телефона на использование только цифр и символа "+"
  var phoneRegex = /^\+?\d+$/;
  if (!phoneRegex.test(phone)) {
    alert('Номер телефона должен содержать только цифры и символ "+" в начале (если нужно)');
    return;
  }

  // Проверка адреса электронной почты на допустимые символы
  var emailRegex = /^[A-Za-z0-9._-]+@[A-Za-z0-9.-]+\.[A-Za-z]+$/;
  if (!emailRegex.test(email)) {
    var emailWithoutDomainRegex = /^[A-Za-z0-9._-]+@[A-Za-z0-9.-]+$/;
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
    // Закрыть предыдущую открытую форму, если есть
    closePopupFormProject();

    // Открыть форму для проекта
    popupFormContainerProject.style.display = 'flex';
    popupFormProject.classList.add('show');
  });
}

var formProject = document.querySelector('#myFormProject form');
var nameInputProject = document.querySelector('#myFormProject input[name="name"]');
var phoneInputProject = document.querySelector('#myFormProject input[name="phone"]');
var emailInputProject = document.querySelector('#myFormProject input[name="email"]');

formProject.addEventListener('submit', function(event) {
  event.preventDefault();

  var nameProject = nameInputProject.value;
  var phoneProject = phoneInputProject.value;
  var emailProject = emailInputProject.value;

  // Проверка обязательных полей
  if (!nameProject || !phoneProject || !emailProject) {
    alert('Пожалуйста, заполните все обязательные поля');
    return;
  }

  // Проверка длины номера телефона
  if (phoneProject.length > 20) {
    alert('Слишком длинный номер телефона');
    return;
  }

  // Проверка номера телефона на использование только цифр и символа "+"
  var phoneRegex = /^\+?\d+$/;
  if (!phoneRegex.test(phoneProject)) {
    alert('Номер телефона должен содержать только цифры и символ "+" в начале (если нужно)');
    return;
  }

  // Проверка адреса электронной почты на допустимые символы
  var emailRegex = /^[A-Za-z0-9._-]+@[A-Za-z0-9.-]+\.[A-Za-z]+$/;
  if (!emailRegex.test(emailProject)) {
    var emailWithoutDomainRegex = /^[A-Za-z0-9]+([_.-][A-Za-z0-9]+)*@[A-Za-z0-9]+$/;
    if (!emailWithoutDomainRegex.test(emailProject)) {
      alert('Адрес электронной почты должен содержать только английские буквы, цифры и специальные символы ".", "_", "-"');
      return;
    }
  }

  // Создаем объект FormData и добавляем значения полей формы
  var formDataProject = new FormData();
  formDataProject.append('name', nameProject);
  formDataProject.append('phone', phoneProject);
  formDataProject.append('email', emailProject);

  // Создаем новый объект XMLHttpRequest
  var xhrProject = new XMLHttpRequest();

  // Устанавливаем обработчик события onload для получения ответа от сервера
  xhrProject.onload = function() {
    if (xhrProject.status === 200) {
      // Успешная отправка данных
      console.log('Данные успешно отправлены');
      formProject.reset(); // Очистка полей формы
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
  xhrProject.open('POST', 'http://app-tech.ru/php/send.php');
  xhrProject.send(formDataProject);
});