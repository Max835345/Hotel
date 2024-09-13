ymaps.ready(init);

function init() {
    myMap = new ymaps.Map("map", {
        center: [43.679971, 40.205547],
        zoom: 10,
    }, {
    }),
    myPlacemark = new ymaps.Placemark([43.679971, 40.205547],{
        balloonContentHeader: "",
        balloonContentBody: "",
        balloonContentFooter: "",
        hintContent: "Мы тут"
    });
    
myMap.geoObjects.add(myPlacemark);
    
}
