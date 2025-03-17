const hr = document.getElementById('hour');
const min = document.getElementById('min');
const sec = document.getElementById('sec');

function updateClock() {
    let date = new Date();

    date.setHours(date.getHours() + 5);
    date.setMinutes(date.getMinutes() + 30);

    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();

    let hRotate = 30 * hh + mm;
    let mRotate = 6 * mm;
    let sRotate = 6 * ss;

    sec.style.transform = `rotate(${sRotate}deg)`;
    min.style.transform = `rotate(${mRotate}deg)`;
    hr.style.transform = `rotate(${hRotate}deg)`;
}

updateClock();
setInterval(updateClock, 1000);
