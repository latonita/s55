var myMap;

// Дождёмся загрузки API и готовности DOM.
ymaps.ready(init);


function init () {
    // Создание экземпляра карты и его привязка к контейнеру с
    // заданным id ("map").
    myMap = new ymaps.Map('ya_map_pr', {
        // При инициализации карты обязательно нужно указать
        // её центр и коэффициент масштабирования.
        center: [60.201799, 29.856252], // Объект
        zoom: 11,
	controls: ['zoomControl', 'fullscreenControl']
		
    });

		
      
	myMap.behaviors.disable('scrollZoom');
        	
}