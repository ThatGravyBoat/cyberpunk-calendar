document.onload = loadFunction();

function loadFunction() {
    setTime();
    repeatEvery(setTime, 1000);
}

function setTime() {
    var date = new Date();
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