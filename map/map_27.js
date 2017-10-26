var myMap;

// Дождёмся загрузки API и готовности DOM.
ymaps.ready(init);


function init () {
    // Создание экземпляра карты и его привязка к контейнеру с
    // заданным id ("map").
    myMap = new ymaps.Map('ya_map_pr', {
        // При инициализации карты обязательно нужно указать
        // её центр и коэффициент масштабирования.
        center: [59.918021,30.279896], // Объект
        zoom: 15,
	controls: ['zoomControl', 'fullscreenControl']
		
    });

		
       myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
            hintContent: ''
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'images/map-point.png',
            // Размеры метки.
            iconImageSize: [21, 21],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [0, 0]
        });

    myMap.geoObjects.add(myPlacemark);
	myMap.behaviors.disable('scrollZoom');
        	
}