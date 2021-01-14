let ctx;

let x = 0;
let y = 0;

let pX = 0;
let pY = 0;

let hasP = false;

let points = 0;

let running = false;

let snake = [];

let direction = 'none';

window.onload = () => {
    ctx = $('#snake')[0].getContext('2d');
    ctx.clearRect(0, 0, 500, 500);
    setInterval(() => update(), 200);
    if (getCookie("max") == "") {
        setCookie("max", 0);
    }
    $('#max').text("Egyéni rekord: " + getCookie('max'));
}

function update() {
    if (!hasP) {
        pX = (Math.random() * 49).toFixed();
        pY = (Math.random() * 49).toFixed();
        hasP = true;
    }
    ctx.clearRect(0, 0, 500, 500);


    switch (direction) {
        case 'up':
            y--;
            break;
        case 'down':
            y++;
            break;
        case 'left':
            x--;
            break;
        case 'right':
            x++;
            break;
        case 'none':
            return;
    }

    if (x == pX && y == pY) {
        hasP = false;
        points++;
        let sX = x;
        let sY = y;
        switch (direction) {
            case 'up':
                sY++;
                break;
            case 'down':
                sY--;
                break;
            case 'left':
                sX++;
                break;
            case 'right':
                sX--;
                break;
            case 'none':
                return;
        }
        if (parseInt(getCookie("max")) < points) {
            setCookie("max", points);
            $('#max').text("Egyéni rekord: " + getCookie('max'));
        }
        snake.push({
            x: sX,
            y: sY,
            direction: direction
        });
    }

    if (x > 50) x = 0;
    if (x < 0) x = 50;
    if (y > 50) y = 0;
    if (y < 0) y = 50;

    ctx.fillStyle = '#4cd137';
    ctx.fillRect(x * 10, y * 10, 10, 10);

    ctx.fillStyle = '#0000ff';
    for (let i = 0; i < snake.length; i++) {
        let e = snake[i];
        //if (i == 0) {
        //    e.direction = direction;
        //}else {
        //    e.direction = snake[i-1].direction;
        //}

        /*switch (e.direction) {
            case 'up':
                e.y--;
                break;
            case 'down':
                e.y++;
                break;
            case 'left':
                e.x--;
                break;
            case 'right':
                e.x++;
                break;
            case 'none':
                return;
        }*/

        switch (direction) {
            case 'up':
                ctx.fillRect(x * 10, (y + 1 + i) * 10, 10, 10);
                break;
            case 'down':
                ctx.fillRect(x * 10, (y - 1 - i) * 10, 10, 10);
                break;
            case 'left':
                ctx.fillRect((x + 1 + i) * 10, y * 10, 10, 10);
                break;
            case 'right':
                ctx.fillRect((x - 1 - i) * 10, y * 10, 10, 10);
                break;
            case 'none':
                return;
        }

        //ctx.fillRect(e.x * 10, e.y * 10, 10, 10);
    }

    ctx.fillStyle = '#ff0000';
    ctx.fillRect(pX * 10, pY * 10, 10, 10);
}

window.onkeydown = (e) => {
    switch (e.key) {
        case 'ArrowUp':
            direction = 'up';
            break;
        case ' ':
            running = true;
        case 'ArrowDown':
            direction = 'down';
            break;
        case 'ArrowLeft':
            direction = 'left';
            break;
        case 'ArrowRight':
            direction = 'right';
            break;
    }
}

var seconds = 0;
let timer = $('#timer');
let score = $('#score');

setInterval(function () {
    if (!running) return;
    timer.text('Idő: ' + seconds++);
    score.text('Pontjaid: ' + points);
}, 1000);

function setCookie(cname, cvalue) {
    var d = new Date();
    d.setTime(d.getTime() + (10000*24*60*60*1000));
    var expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
}
function vissza() {
    window.location="../index.html";
}