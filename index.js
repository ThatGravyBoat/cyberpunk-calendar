const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const daysOfTheWeek = ["Su","Mo","Tu","We","Th","Fr","Sa"]
var currentDay = -1;
var currentMonth = -1;
document.onload = loadFunction();


function loadFunction() {
    setTime();
    repeatEvery(setTime, 1000);
}

function setCurrentMonth() {
    document.getElementById("month").innerText = `${monthNames[currentMonth]}`
}

function getDaysInMonth(month,year) { return new Date(year, month, 0).getDate() }

function genCalendarDays() {
    var date = new Date();
    var monthDays = getDaysInMonth(date.getMonth() + 1, date.getFullYear());
    for (let i = 1; i <= monthDays; i++) {
        var day = new Date(date.getFullYear(), date.getMonth(), i);
        var calendar = document.getElementById("calendar");
        var node = document.createElement("div");
        node.dataset.dateid = `${date.getMonth()}-${i}`
        node.className="date";
        node.innerHTML = `<p id="dateNumber" class="dateNum">${i}</p><span id="day" class="day">${daysOfTheWeek[day.getDay()]}</span>`
        calendar.appendChild(node)
    }
    removeAndSetToday()
}

function removeAndSetToday() {
    var date = new Date();
    if (document.getElementById("today")) document.getElementById("today").id = ""
    document.getElementById("calendar").children.item(date.getDate() - 1).id = "today"
}

function setTime() {
    var date = new Date();
    if (currentMonth != date.getMonth()){
        currentMonth = date.getMonth()
        genCalendarDays();
        removeAndSetToday()
        setCurrentMonth()
    }else if (currentDay < date.getDate()){
        currentDay = date.getDate()
        removeAndSetToday()
    }
    var hours = date.getHours();
    hours = hours % 12;
    hours = hours ? hours : 12;
    var mins = date.getMinutes()
    mins = mins < 10 ? "0" + mins : mins;
    var secs = date.getSeconds()
    secs = secs < 10 ? "0" + secs : secs;
    document.getElementById("time").innerText = `${hours}:${mins}:${secs} ${date.getHours() >= 12 ? 'pm' : 'am'}`
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
