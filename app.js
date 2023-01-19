// DOM elements
const time = document.getElementById('time');
const greeting = document.getElementById('greeting');
const name = document.getElementById('name');
const focus = document.getElementById('focus');

// Show Time
function showTime() {
    let today = new Date(),
        hour = today.getHours(),
        min = today.getMinutes(),
        sec = today.getSeconds();

    // Set AM or PM
    const amPm = hour >= 12 ? 'PM' : 'AM';

    // 12 hour format
    hour = hour % 12 || 12;

    // Output Time
    time.innerHTML = `${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(sec)}`;

    setTimeout(showTime, 1000);
}

// Add Zeros to front of time when singular digit
function addZero(n) {
    return (parseInt (n, 10) < 10 ? '0' : '') + n;
}

// Set background and greeting
function setBgGreet() {
    // Run condition to set time of day
    let today = new Date(),
        hour = today.getHours();

    // Do not want 12 hour format
    if(hour < 12) {
        //Morning
        document.body.style.backgroundImage = "url('../assets/morning.jpg')";
        greeting.textContent = 'Good Morning';
    } else if(hour < 18) {
        // Afternoon
        document.body.style.backgroundImage = "url('../assets/afternoon.jpg')";
        greeting.textContent = 'Good Afternoon';
    } else {
        //Evening
        document.body.style.backgroundImage = "url('../assets/evening.jpg')";
        greeting.textContent = 'Good Evening';
        // Text will be hard to read on this dark bg, so change text color
        document.body.style.color = 'white';
    }
}

// Run
showTime();
setBgGreet();