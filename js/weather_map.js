"use strict";

// Document.ready is required to detect the state of readiness

$(document).ready(function () {

//  Using $Ajax to pull weather conditions in Dallas,TX

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

        let weather = ""

        // Start from here

        for (let i = 0; i < data.list.length; i += 8) {

            weather += '<ul class="list-group-flush">'
            weather += '<li class="list-group-item">' + " " + " " + (data.list[i].dt_txt.slice(0,10)) + "</li>"
            weather += '<li class="list-group-item">' + " " + " " + (data.list[i].main.temp) + "</li>"
            weather += '<li class="list-group-item">' + "Description:" + " " + (data.list[i].weather[0].description) + "</li>"
            weather += '<li class="list-group-item">' +"Humidity:" + " " + (data.list[i].main.humidity) + "</li>"
            weather += '<li class="list-group-item">' +"Wind:" + " " + (data.list[i].wind.speed) + "</li>"
            weather += '<li class="list-group-item">' +"Pressure:" + " " + (data.list[i].main.pressure) + "</li>"
            weather += '</ul>'


        }

        $('#weather').html(weather);





    })




});














