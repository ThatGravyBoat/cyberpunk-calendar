document.onload = loadFunction();
var currentDay = 0;
var currentMonth = 0;

const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

function loadFunction() {
    setTime();
    repeatEvery(setTime, 1000);
}

function setCurrentDayAndMonth() {
    document.getElementById("month").innerText = `${monthNames[currentMonth]}`
    
}

function getDaysInMonth(month,year) { return new Date(year, month, 0).getDate() }


function setTime() {
    var date = new Date();
    if (currentDay < date.getDate() || currentMonth != date.getMonth()){
        currentDay = date.getDate()
        currentMonth = date.getMonth()



    }
    var hours = date.getHours();
    hours = hours % 12;
    hours = hours ? hours : 12;
    document.getElementById("time").innerText = `${hours}:${date.getMinutes()}:${date.getSeconds()} ${date.getHours() >= 12 ? 'pm' : 'am'}`
}

function repeatEvery(func, interval) {
    var now = new Date(),
    delay = interval - now % interval;

    function start() {
        func();
        setInterval(func, interval);
    }
    setTimeout(start, delay);
}