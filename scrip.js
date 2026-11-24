function updatecurrentTime() {
    const now = new Date();
    const timeString = now.toLocaleTimeString();
    document.getElementById('current-time').textContent = timeString;
}

//update the time every second
setInterval(updatecurrentTime, 1000);

//Initial call display the time immediately 
updatecurrentTime();
