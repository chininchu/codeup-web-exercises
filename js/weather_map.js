"use strict";

// Document.ready is required to detect the state of readiness

let weather = ""

$(document).ready(function () {

    // Using $Ajax to pull weather conditions in Dallas,TX (i.e static data)


    $.ajax({

        url: "https://api.openweathermap.org/data/2.5/forecast",
        type: "GET",
        data: {
            APPID: OPEN_WEATHER_APPID,
            q: "Dallas, US",
            units: "imperial"

        }
        //     The done method attempts to resolve callbacks from the weather API
    }).done(function (data) {
        console.log(data);


        for (let i = 0; i < data.list.length; i += 8) {

            weather += '<ul class="list-group list-group-flush ">'
            weather += '<div class="card-header text-center">' + " " + " " + (data.list[i].dt_txt.slice(0, 10)) + "</div>"
            weather += '<li class="list-group-item text-center">' + " " + " " + (data.list[i].main.temp + "\u2109") + "</li>"
            weather += '<li class="list-group-item">' + "Description:" + " " + (data.list[i].weather[0].description) + "</li>"
            weather += "<img src='https://openweathermap.org/img/wn/" + data.list[i].weather[0].icon + ".png'>"
            weather += '<li class="list-group-item">' + "Humidity:" + " " + (data.list[i].main.humidity) + "</li>"
            weather += '<li class="list-group-item">' + "Wind:" + " " + (data.list[i].wind.speed) + "</li>"
            weather += '<li class="list-group-item">' + "Pressure:" + " " + (data.list[i].main.pressure) + "</li>"
            weather += '</ul>'


        }

        $('#weather').html(weather);

        $('#location').html("Current city: " + data.city.name);


    })


//Add a marker and create a function that allows the user to drag the marker and receive the weather for the particular location


    // The map variable initializes the basic configuration for the map

    mapboxgl.accessToken = MAPBOX_TOKEN;
    let map = new mapboxgl.Map({
        container: 'map', // container ID
        style: 'mapbox://styles/mapbox/streets-v12', // style URL
        center: [-96.889571, 32.892301], // starting position [lng, lat]
        zoom: 9, // starting zoom
    });


// Create a new marker. The user attempts to change the lat and lng coordinates based on the marker's placement.
    let marker = new mapboxgl.Marker()
    marker.setLngLat([-96.889571, 32.892301]).addTo(map);


    // The event listner contains the $get object which retreives the data for the coordinates
    map.on('click', function (maps) {


        $.get("http://api.openweathermap.org/data/2.5/forecast", {
            APPID: OPEN_WEATHER_APPID,
            lat: maps.lngLat.lat,
            lon: maps.lngLat.lng,
            units: "imperial"
        }).done(function (data) {


            weather = ""


            for (let i = 0; i < data.list.length; i += 8) {

                weather += '<ul class="list-group list-group-flush ">'
                weather += '<div class="card-header text-center">' + " " + " " + (data.list[i].dt_txt.slice(0, 10)) + "</div>"
                weather += '<li class="list-group-item text-center">' + " " + " " + (data.list[i].main.temp + "\u2109") + "</li>"
                weather += '<li class="list-group-item">' + "Description:" + " " + (data.list[i].weather[0].description) + "</li>"
                weather += "<img src='https://openweathermap.org/img/wn/" + data.list[i].weather[0].icon + ".png'>"
                weather += '<li class="list-group-item">' + "Humidity:" + " " + (data.list[i].main.humidity) + "</li>"
                weather += '<li class="list-group-item">' + "Wind:" + " " + (data.list[i].wind.speed) + "</li>"
                weather += '<li class="list-group-item">' + "Pressure:" + " " + (data.list[i].main.pressure) + "</li>"
                weather += '</ul>'


            }
            $('#weather').html(weather);

            $('#location').html("Current city: " + data.city.name);


        });

        marker.setLngLat([maps.lngLat.lng, maps.lngLat.lat]).addTo(map)
    });


    // The user is able to change the address on the map by inserting an address within the input field.


    $('#button').click(function () {

        let address = $('#search').val()


        geocode(address, mapboxgl.accessToken).then(function (data) {
            marker.setLngLat([data[0], data[1]]).addTo(map);
            map.setCenter([data[0], data[1]]);


            $.get("http://api.openweathermap.org/data/2.5/forecast", {
                APPID: OPEN_WEATHER_APPID,
                lat: data[1],
                lon: data[0],
                units: "imperial"
            }).done(function (data) {


                weather = ""


                for (let i = 0; i < data.list.length; i += 8) {

                    weather += '<ul class="list-group list-group-flush ">'
                    weather += '<div class="card-header text-center">' + " " + " " + (data.list[i].dt_txt.slice(0, 10)) + "</div>"
                    weather += '<li class="list-group-item text-center">' + " " + " " + (data.list[i].main.temp + "\u2109") + "</li>"
                    weather += '<li class="list-group-item">' + "Description:" + " " + (data.list[i].weather[0].description) + "</li>"
                    weather += "<img src='https://openweathermap.org/img/wn/" + data.list[i].weather[0].icon + ".png'>"
                    weather += '<li class="list-group-item">' + "Humidity:" + " " + (data.list[i].main.humidity) + "</li>"
                    weather += '<li class="list-group-item">' + "Wind:" + " " + (data.list[i].wind.speed) + "</li>"
                    weather += '<li class="list-group-item">' + "Pressure:" + " " + (data.list[i].main.pressure) + "</li>"
                    weather += '</ul>'


                }
                $('#weather').html(weather);

                $('#location').html("Current city: " + data.city.name);


            });
        })


    })


})
















