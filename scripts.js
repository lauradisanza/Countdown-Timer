//setInterval() does not work very well if you are away from your browser or on IOS


let countdown;

function timer(seconds) {
    const now = Date.now(); //Give us the current time stamp
    const then = now + seconds * 1000;
    displayTimeLeft(seconds); //Run it immediately to get the first second

    countdown = setInterval(() => {
        const secondsLeft = Math.round((then - Date.now()) / 1000);
        //check if we should stop it
        if(secondsLeft < 0) {
            clearInterval(countdown);
            return;
        };
        //display it
        displayTimeLeft(secondsLeft);
    }, 1000);
}

function displayTimeLeft(seconds) {
    console.log(seconds);
}