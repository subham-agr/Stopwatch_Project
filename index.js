var seconds = 00;
var minutes = 00;
var sec = document.getElementById('seconds');
var min = document.getElementById('minutes');
var buttonStart = document.getElementById('btn-start');
var buttonLap = document.getElementById('btn-lap');
var buttonReset = document.getElementById('btn-reset');
var interval;
let num = 1;

function startTimer(){
    minutes++;

    if(minutes<9){
        min.innerHTML = "0" + minutes;
    }
    if(minutes>9){
        min.innerHTML = minutes;
    }
    if(minutes>99){
        seconds++;
        sec.innerHTML = "0" + seconds;
        minutes = 0;
        min.innerHTML = "0" + 0;
    }
    if(seconds>9){
        sec.innerHTML = seconds;
    }
}

function Start() {
    interval = setInterval(startTimer);
};

function Lap() {
    localStorage.setItem("minutes", minutes);
    localStorage.setItem("seconds", seconds);
    let table1 = localStorage.getItem('seconds');
    let table2 = localStorage.getItem('minutes');
    document.getElementById('table').innerHTML += "<tr>" + "<td>" + num + "</td>" + "<td>" + table1 + ":" + table2 + "</td>" + "</tr>";
    num=num+1;
    if(table2==0){
        Game();
    }
    if(num==11){
        Lose();
    }
};

function Reset() {
    clearInterval(interval);
    minutes = "00";
    seconds = "00";
    sec.innerHTML = seconds;
    min.innerHTML = minutes;
    document.getElementById('table').innerHTML = "<tr>" + "<td>" + "Lap" + "</td>" + "<td>" + "Time" + "</td>" + "</tr>";
    num = 1;
    document.getElementById('Game').innerHTML = "STOPWATCH";
}

function Game() {
    clearInterval(interval);
    document.getElementById('Game').innerHTML = "You Win!";
}

function Lose() {
    clearInterval(interval);
    document.getElementById('Game').innerHTML = "You Lose!";
}