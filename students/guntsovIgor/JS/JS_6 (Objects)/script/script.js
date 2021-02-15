console.log("Задание 6.1");

// 1. Создать объект, описывающий автомобиль (производитель, модель, год выпуска, средняя скорость), и следующие функции для работы с этим объектом:
// Функция для вывода на экран информации об автомобиле;                                                  (*)
// Функция для подсчета необходимого времени для преодоления переданного расстояния со средней скоростью. (**)
// Учтите, что через каждые 4 часа дороги водителю необходимо делать перерыв на 1 час.
let car = {
    mark: "Ferrari",
    model: "Enzo",
    year: 1990,
    "average speed": 100,
};

function carDescription(obj) {
    return obj.mark + " " + obj.model + " was made in " + obj.year + "." + "\n" + "Average speed is " + obj["average speed"] + " km/h."; //......(*)
}

console.log(carDescription(car));

carDescription(car);

function averageTime(dist) {
    let time = dist / car["average speed"]; //.........(**)
    let rest;
    if (time % 4 === 0) {
        rest = Math.trunc(time / 4) - 1;
    } else {
        rest = Math.trunc(time / 4);
    }
    return "Time needed is: " + (time + rest) + "h.";
}

console.log(averageTime(450));

console.log("Задание 6.2");

// 2. Создать объект, хранящий в себе отдельно числитель и знаменатель дроби, и следующие функции для работы с этим объектом:
// Функция сложения 2-х объектов-дробей;          (*)
// Функция вычитания 2-х объектов-дробей;         (**)
// Функция умножения 2-х объектов-дробей;         (***)
// Функция деления 2-х объектов-дробей;           (****)
// Функция сокращения объекта-дроби.              (*****)

let fraction1 = {
    numerator: 2,
    denominator: 4,
};

let fraction2 = {
    numerator: 2,
    denominator: 3,
};

function sum(num1, num2) {
    let result;
    result = num1.numerator * num2.denominator + num1.denominator * num2.numerator + "/" + num1.denominator * num2.denominator; //.....(*)
    return result;
}

function minus(num1, num2) {
    let result;
    if (num1.numerator * num2.denominator - num1.denominator * num2.numerator !== 0) {
        result = num1.numerator * num2.denominator - num1.denominator * num2.numerator + "/" + num1.denominator * num2.denominator; //.....(**)
        return result;
    } else return 0;
}

function mult(num1, num2) {
    let result;
    result = num1.numerator * num2.numerator + "/" + num1.denominator * num2.denominator; //.....(***)
    return result;
}

function div(num1, num2) {
    let result;
    result = num1.numerator * num1.denominator + "/" + num2.numerator * num2.denominator; //.....(****)
    return;
}

function reduction(num1) {
    let result;
    for (var i = 1; i <= num1.numerator; i++) {
        if (num1.numerator % i === 0 && num1.denominator % i === 0) result = num1.numerator / i + "/" + num1.denominator / i; //.....(*****)
    }
    return result;
}

console.log(sum(fraction1, fraction2));
console.log(minus(fraction1, fraction2));
console.log(mult(fraction1, fraction2));
console.log(reduction(fraction1));

console.log("Задание 6.3");

// 3. Создать объект, описывающий время (часы, минуты, секунды), и следующие функции для работы с этим объектом:
// Функция вывода времени на экран;                                                                             (*)
// Функция изменения времени на переданное количество секунд;                                                   (**)
// Функция изменения времени на переданное количество минут;                                                    (***)
// Функция изменения времени на переданное количество часов.                                                    (****)
// Учтите, что в последних 3-х функциях, при изменении одной части времени, может измениться и другая.
// Например, если ко времени «20:30:45» добавить 30 секунд, то должно получиться «20:31:15», а не «20:30:75».

let time = {
    hours: 50,
    minutes: 30,
    seconds: 44,
};

time.showTime = function () {
    return "      Time       => " + this.hours + "h : " + this.minutes + "m : " + this.seconds + "s"; //.......(*)
};

time.secondsTransform = function (seconds) {
    let time = "";
    const hourSec = 3600;
    const minSec = 60;
    const hours = Math.trunc(seconds / hourSec);
    const minutes = Math.trunc((seconds - hours * hourSec) / minSec);
    const second = seconds % minSec;
    time = hours + "h : " + minutes + "m : " + second + "s";
    return time;
};

time.dateTransform = function () {
    let seconds = 0;
    seconds = this.hours * 3600 + this.minutes * 60 + this.seconds;
    return seconds;
};

time.addSeconds = function (secondsAdded) {
    let correctedSeconds;
    let correctedTime;
    correctedSeconds = this.dateTransform() + secondsAdded;
    correctedTime = this.secondsTransform(correctedSeconds);
    return "After adding " + secondsAdded + "s => " + correctedTime; //.......(**)
};

time.addMinutes = function (minutesAdded) {
    let correctedMinutes;
    let correctedTime;
    correctedMinutes = this.dateTransform() + minutesAdded * 60;
    correctedTime = this.secondsTransform(correctedMinutes);
    return "After adding " + minutesAdded + "m => " + correctedTime; //.......(***)
};

time.addHours = function (hoursAdded) {
    let correctedTime;
    correctedTime = this.hours + hoursAdded + "h : " + this.minutes + "m : " + this.seconds + "s"; //.......(****)
    return "After adding " + hoursAdded + "h => " + correctedTime;
};

console.log(time.showTime());
console.log(time.addSeconds(11));
console.log(time.addMinutes(22));
console.log(time.addHours(33));
