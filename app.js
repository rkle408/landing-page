// DOM elements
const time = document.getElementById('time');
const greeting = document.getElementById('greeting');
const user = document.getElementById('user');
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
        greeting.textContent = 'Good Morning,';
    } else if(hour < 18) {
        // Afternoon
        document.body.style.backgroundImage = "url('../assets/afternoon.jpg')";
        greeting.textContent = 'Good Afternoon,';
    } else {
        //Evening
        document.body.style.backgroundImage = "url('../assets/evening.jpg')";
        greeting.textContent = 'Good Evening,';
        // Text will be hard to read on this dark bg, so change text color
        document.body.style.color = 'white';
    }
}

// Get user
function getUser() {
    if(localStorage.getItem('user') === null ) {
        user.textContent = '[Enter user]';
    } else {
        user.textContent = localStorage.getItem('user');
    }
}

// Set user
function setUser(e) {
    // Keypress on enter only (should not return next line either), and on blur (aka click anywhere else on screen)
    if(e.which == 13 || e.type === 'keypress') {
        if(e.keyCode == 13) { // Enter button is #13
            localStorage.setItem('user', e.target.innerText);
            user.blur();
        }
    } else { // blur
        localStorage.setItem('user', e.target.innerText);
    }
}

// Get Focus
function getFocus() {
    if(localStorage.getItem('focus') === null ) {
        focus.textContent = '[Enter focus]';
    } else {
        focus.textContent = localStorage.getItem('focus');
    }
}

// Set focus
function setFocus(e) {
    // Keypress on enter only (should not return next line either), and on blur (aka click anywhere else on screen)
    if(e.type === 'keypress') {
        if(e.which == 13 || e.keyCode == 13) { // Enter button is #13
            localStorage.setItem('focus', e.target.innerText);
            focus.blur();
        }
    } else { // blur
        localStorage.setItem('focus', e.target.innerText);
    }
}

user.addEventListener('keypress', setUser);
user.addEventListener('blur', setUser);
focus.addEventListener('keypress', setFocus);
focus.addEventListener('blur', setFocus);

// Run
showTime();
setBgGreet();
getUser();
getFocus();