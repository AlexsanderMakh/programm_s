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
