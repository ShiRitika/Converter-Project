'use strict'
//------------------code for background-color-switcher start------------------------------
function changeBG(color) {
    document.body.style.backgroundColor = color;
};
//------------------/code for background-color-switcher END------------------------------

//------------------code for tempreture converter start------------------------------
const cel = document.getElementById("cel");
const fah = document.getElementById("fah");

cel.addEventListener('input', function() {
    let cel_input = this.value;
    let fah_result = (cel_input * 9/5) + 32;
    // code for removing extra numbers after points
    if(!Number.isInteger(fah_result)){
        fah_result = fah_result.toFixed(4);
    };
    fah.value = fah_result;
});

fah.addEventListener('input', function() {
    let fah_input = this.value;
    let cel_result = (fah_input - 32) * 5/9;
    // if block code for removing extra numbers after points
    if(!Number.isInteger(cel_result)){
        cel_result = cel_result.toFixed(4);
    };
    cel.value = cel_result;
});
//------------------/code for tempreture converter END ------------------------------

//------------------code for word counter start------------------------------
const textbox = document.getElementById("textbox");
textbox.addEventListener('input', function() {
    let text = this.value;
    let character = text.length
    document.getElementById("char").innerHTML = character;

    // to remove extra space from starting and end use trim
    text = text.trim();
    let words = text.split(" ");
    let cleanList = words.filter(function(element){
        return element != "";
    })
    document.getElementById("word").innerHTML = cleanList.length;
});
//-----------------/-code for word counter END------------------------------

//------------------code for stop watch start------------------------------
let hr = 0;
let min = 0;
let sec = 0;
let count = 0;

let timmer = false;

function start() {
    debugger;
    timmer = true;
    stopwatch();
};
function stop() {
    timmer = false;
};
function reset() {
    timmer = false;
    hr = 0;
    min = 0;
    sec = 0;
    count = 0;
    document.getElementById("hr").innerHTML = "00";
    document.getElementById("min").innerHTML = "00";
    document.getElementById("sec").innerHTML = "00";
    document.getElementById("count").innerHTML = "00";
};

function stopwatch() {
    if(timmer == true){
        count = count + 1;

        if(count == 100){
            sec = sec + 1;
            count = 0;
        }
        if(sec == 60){
            min = min + 1;
            sec = 0;
        }
        if(min == 60){
            hr = hr + 1;
            sec = 0;
            min = 0;
        }

        let hrString = hr;
        let minString = min;
        let secString = sec;
        let countString = count;
        if(hr < 10){
            hrString = "0" + hrString;
        };
        if(min < 10){
            minString = "0" + minString;
        };
        if(sec < 10){
            secString = "0" + secString;
        };
        if(count < 10){
            countString = "0" + countString;
        };
        document.getElementById("hr").innerHTML = hrString;
        document.getElementById("min").innerHTML = minString;
        document.getElementById("sec").innerHTML = secString;
        document.getElementById("count").innerHTML = countString;
        setTimeout("stopwatch()", 10);
    }
};
//-----------------/-code for stop watch  END------------------------------