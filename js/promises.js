"use strict";


"use strict";

function dateOfLastCommit(ghUsername) {
    return fetch(`https://api.github.com/users/${ghUsername}/events/public`, {
        headers: {
            'Authorization': `token ${PROMISE_TOKEN}`
        }
    })
        .then(response => response.json())
        .then(events => {
            let pushEvents = events.filter(event => event.type === 'PushEvent')
            return pushEvents[0].created_at
        });
}

dateOfLastCommit("andychu").then(data => console.log(new Date(data).toDateString()));



