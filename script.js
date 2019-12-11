const HOURHAND = document.querySelector("#hour");
const MINUTEHAND = document.querySelector("#minute");
const SECONDHAND = document.querySelector("#second");


function runTheClock(){
var date = new Date();

let hr = date.getHours();
let min = date.getMinutes();
let sec = date.getSeconds();

hrPosition = hr*30+((min/60)*30);
minPosition = min*6+((sec/60)*6);
secPosition = sec*6;

HOURHAND.style.transform = "rotate(" + hrPosition + "deg)"
MINUTEHAND.style.transform = "rotate(" + minPosition + "deg)"
SECONDHAND.style.transform = "rotate(" + secPosition + "deg)"
}

setInterval(runTheClock,1000);
