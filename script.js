
var nYr = new Date().getFullYear() + 1;

var countDate = new Date(`Jan 1, ${new Date().getFullYear() + 1} 00:00:00:`).getTime();

function showYear(targetElementId) {
    document.getElementById(targetElementId).innerHTML = nYr;
}

// ! Function
function newYear() {
    var now = new Date().getTime();
    gap = countDate - now;

    // var ms = 100;
    var second = 10 * 100;
    var minute = second * 60;
    var hour = minute * 60;
    var day = hour * 24;

    var d = Math.floor(gap / (day));
    var h = Math.floor((gap % (day)) / hour);
    var m = Math.floor((gap % (hour)) / minute);
    var s = Math.floor((gap % (minute)) / second);
    // var ms = Math.floor((gap % (second)) / ms);

    document.getElementById('day').innerText = d;
    document.getElementById('hour').innerText = h;
    document.getElementById('minute').innerText = m;
    document.getElementById('second').innerText = s;
    // document.getElemetsById('ms').innerText = ms;
}

// ! Counter
setInterval(function(){
    newYear()
},1000)