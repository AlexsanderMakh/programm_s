
var button = document.getElementById("listVacancies")
button.addEventListener("click", function () {
  window.location.href = "vacancies.html#openVacantion"
})

function smoothScroll(target) {
  var targetElement = document.querySelector(target);
  window.scrollTo({
    top: targetElement.offsetTop,
    behavior: "smooth"
  });
}

var button = document.getElementById("goTeam");
button.addEventListener("click", function () {
  wi
})


const projectBtn = document.getElementById('flutter_developer_button');
const formContainer = document.getElementById('formContainer');
console.log('flutter_developer_button');


projectBtn.addEventListener('click', function() {
  formContainer.style.display = 'block';
});
console.log('click');

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

// const goTeamButton = document.getElementById('goTeam');
// const openVacantionDiv = document.getElementById('openVacantion');

// goTeamButton.addEventListener('click', function() {
//   openVacantionDiv.scrollIntoView({ behavior: 'smooth' });
// });
