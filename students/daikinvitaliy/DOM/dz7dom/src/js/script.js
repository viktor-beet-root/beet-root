//*  Создать страницу, которая выводит нумерованный список песен:
var playList = [
    { author: "LED ZEPPELIN", song: "STAIRWAY TO HEAVEN" },
    { author: "QUEEN", song: "BOHEMIAN RHAPSODY" },
    { author: "LYNYRD SKYNYRD", song: "FREE BIRD" },
    { author: "DEEP PURPLE", song: "SMOKE ON THE WATER" },
    { author: "JIMI HENDRIX", song: "ALL ALONG THE WATCHTOWER" },
    { author: "AC/DC", song: "BACK IN BLACK" },
    { author: "QUEEN", song: "WE WILL ROCK YOU" },
    { author: "METALLICA", song: "ENTER SANDMAN" },
];

let html = "<ol>";
playList.forEach(function (item) {
    html =
        html +
        "<li>" +
        "author:" +
        item.author +
        " song:" +
        item.song +
        "</li>";
});
html = html + "</ol>";
document.write(html);

//*   Создать HTML-страницу с кнопкой "Открыть" и модальным окном. На модальном окне должен быть текст и кнопка "Закрыть". Изначально модальное окно не отображается. При клике на кнопку "Открыть" появляется модальное окно, на кнопку "Закрыть" – исчезает.
const windowOpen = document.querySelector("#open");
const windowClose = document.querySelector("#close");
const windowWrapp = document.querySelector(".wrapp");

function show(element, displayValue) {
    element.style.display = displayValue;
}

function hidden(element) {
    element.style.display = "none";
}

windowClose.addEventListener("click", function (event) {
    hidden(windowWrapp);
});

windowOpen.addEventListener("click", function (event) {
    show(windowWrapp, "flex");
});

//* Создать HTML-страницу со светофором и кнопкой, которая переключает светофор на следующий цвет.

const stopRed = document.querySelector(".circle_red");
const cookYellow = document.querySelector(".circle_yellow");
const goGreen = document.querySelector(".circle_green");
const trafficSwitch = document.querySelector(".switch");
let rrr = 0;
let goUp = true;

function redLights() {
    noLights();
    stopRed.style.backgroundColor = "red";
}
function yellowLights() {
    noLights();
    cookYellow.style.backgroundColor = "yellow";
}

function greenLights() {
    noLights();
    goGreen.style.backgroundColor = "green";
}

function noLights() {
    stopRed.style.backgroundColor = "grey";
    cookYellow.style.backgroundColor = "grey";
    goGreen.style.backgroundColor = "grey";
}

trafficSwitch.addEventListener("click", function () {
    if (rrr === 0) {
        redLights();
    } else if (rrr === 1) {
        yellowLights();
    } else if (rrr === 2) {
        greenLights();
    }

    if (goUp) {
        rrr = Math.min(rrr + 1, 2);
        goUp = rrr !== 2;
    } else {
        rrr = Math.max(rrr - 1, 0);
        goUp = rrr === 0;
    }
    console.log(rrr);
});
