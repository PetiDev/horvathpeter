function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();

    m = checkTime(m);
    s = checkTime(s);
    if (today.getFullYear() == "2021") {
        changeColor();
    }
    document.getElementById('txt').innerHTML =
        h + ":" + m + ":" + s;
    var t = setTimeout(startTime, 1000);
}

function checkTime(i) {
    if (i < 10) { i = "0" + i }; 
    return i;
}

function changeColor() {
    document.body.style.animationName = "changeSzin";
    document.body.style.animationDuration = "3s";
    document.body.style.backgroundColor = "#4cd137";
}

function reset() {
    document.body.style.backgroundColor = "#e1b12c";
}