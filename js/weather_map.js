"use strict";

// Document.ready is required to detect the state of readiness

$(document).ready(function () {

//  Using $Ajax to pull weather conditions in Dallas,TX

    $.ajax({

        url: "https://api.openweathermap.org/data/2.5/forecast",
        type: "GET",
        data: {
            APPID: OPEN_WEATHER_APPID,
            q: "Dallas, US"

        }
    }).done(function (data) {
        console.log(data);

        let weather = ""

        // Start from here

        for (let i = 0; i < data.list.length; i += 8) {

            weather += '<p>'
            weather += (data.list[i].weather[0].description)
            weather += (data.list[i].main.humidity)
            weather += (data.list[i].wind.speed)
            weather += (data.list[i].main.pressure)
            weather += '</p>'


        }


    })


});














