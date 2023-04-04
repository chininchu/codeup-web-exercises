"use strict";

// Document.ready is required to detect the state of readiness

// (document).ready(function () {

//  Using $Ajax to pull weather conditions in Dallas,TX


let weather = ""


$.ajax({

    url: "https://api.openweathermap.org/data/2.5/forecast",
    type: "GET",
    data: {
        APPID: OPEN_WEATHER_APPID,
        q: "Dallas, US",
        units: "imperial"

    }
}).done(function (data) {
    console.log(data);


    // Start from here

    for (let i = 0; i < data.list.length; i += 8) {

        weather += '<ul class="list-group-flush">'
        weather += '<li class="list-group-item">' + " " + " " + (data.list[i].dt_txt.slice(0, 10)) + "</li>"
        weather += '<li class="list-group-item">' + " " + " " + (data.list[i].main.temp) + "</li>"
        weather += '<li class="list-group-item">' + "Description:" + " " + (data.list[i].weather[0].description) + "</li>"
        weather += '<li class="list-group-item">' + "Humidity:" + " " + (data.list[i].main.humidity) + "</li>"
        weather += '<li class="list-group-item">' + "Wind:" + " " + (data.list[i].wind.speed) + "</li>"
        weather += '<li class="list-group-item">' + "Pressure:" + " " + (data.list[i].main.pressure) + "</li>"
        weather += '</ul>'


    }

    $('#weather').html(weather);

})


//Add a marker and create a function that allows the user to drag the marker and receive the weather for the particular location

mapboxgl.accessToken = MAPBOX_TOKEN;
let map = new mapboxgl.Map({
    container: 'map', // container ID
    style: 'mapbox://styles/mapbox/streets-v12', // style URL
    center: [-96.889571, 32.892301], // starting position [lng, lat]
    zoom: 9, // starting zoom
});


// Create a new marker.
let marker = new mapboxgl.Marker()
marker.setLngLat([-96.889571, 32.892301]).addTo(map);


map.on('click', function (maps) {


    marker.setLngLat(maps.lngLat).addTo(map);


    $.get("http://api.openweathermap.org/data/2.5/forecast", {
        APPID: OPEN_WEATHER_APPID,
        lat: maps.lngLat.lat,
        lon: maps.lngLat.lng,
        units: "imperial"
    }).done(function (data) {
        // console.log('5 day forecast', data);


        weather = ""

        // Start from here

        for (let i = 0; i < data.list.length; i += 8) {

            weather += '<ul class="list-group-flush">'
            weather += '<li class="list-group-item">' + " " + " " + (data.list[i].dt_txt.slice(0, 10)) + "</li>"
            weather += '<li class="list-group-item">' + " " + " " + (data.list[i].main.temp) + "</li>"
            weather += '<li class="list-group-item">' + "Description:" + " " + (data.list[i].weather[0].description) + "</li>"
            weather += '<li class="list-group-item">' + "Humidity:" + " " + (data.list[i].main.humidity) + "</li>"
            weather += '<li class="list-group-item">' + "Wind:" + " " + (data.list[i].wind.speed) + "</li>"
            weather += '<li class="list-group-item">' + "Pressure:" + " " + (data.list[i].main.pressure) + "</li>"
            weather += '</ul>'


        }
        $('#weather').html(weather);


    });


});
















