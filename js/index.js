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



// Функция, которая будет вызываться при входе в область видимости
function handleIntersection(entries, observer) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // entry.target.classList.add('show')
      document.getElementById("analytics").classList.add('analyticsshow')
      document.getElementById("java_developer").classList.add('java_developershow')
      document.getElementById("frontend").classList.add('frontendshow')
      document.getElementById("developer_javascript").classList.add('developer_javascriptshow')
      document.getElementById("architect").classList.add('architectshow')
      document.getElementById("project_manager").classList.add('project_managershow')
      document.getElementById("designer").classList.add('designershow')
      document.getElementById("developer").classList.add('developershow')
      document.getElementById("android").classList.add('androidshow')
      document.getElementById("ios").classList.add('iosshow')
      document.getElementById("admin").classList.add('adminshow');
    }
  });
}

// Создаем экземпляр Intersection Observer
var options = {
  root: null,
  rootMargin: '0px',
  threshold: 0.6 // При пересечении 60% области видимости будет вызвана функция handleIntersection
};

var observer = new IntersectionObserver(handleIntersection, options);

// Получаем все блоки .symbol_position и добавляем их в наблюдатель
var symbolPositions = document.querySelectorAll('.symbol_position');
symbolPositions.forEach(symbolPosition => {
  observer.observe(symbolPosition);
});

var button = document.getElementById("teamBtn");
var button = document.getElementById('goTeam');
button.addEventListener("click", function () {
  window.location.href = "vacancies.html#openVacantion"
})
var button = document.getElementById('goTeam')
function smoothScroll(target) {
  var targetElement = document.querySelector(target);
  window.scrollTo({
    top: targetElement.offsetTop,
    behavior: "smooth"
  });
}

const closeButton = document.querySelector('.close-button');
const popupFormContainer = document.querySelector('.popup-form-container');
const popupForm = document.querySelector('.popup-form');

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
  popupForm.classList.remove('show'); // Убрать класс 'show' при закрытии формы
}

const buttonIds = [
  'projectBtn',
];

buttonIds.forEach(buttonId => {
  const button = document.getElementById(buttonId);

  button.addEventListener('click', () => {
    popupFormContainer.style.display = 'flex';
    popupForm.classList.add('show'); // Добавить класс 'show' при открытии формы
  });
});

