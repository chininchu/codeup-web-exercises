"use strict";



fetch('https://api.github.com/events', {headers: {'Authorization': PROMISE_TOKEN}})


.then(response => {

    console.log(response.json())

});


