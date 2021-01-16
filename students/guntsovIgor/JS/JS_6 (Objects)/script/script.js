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

function Fraction(numerator, denominator) {
    this.numerator = numerator;
    this.denominator = denominator;
    let result;
    this.sum = function (obj) {
        result = this.numerator * obj.denominator + this.denominator * obj.numerator + "/" + this.denominator * obj.denominator; //.....(*)
        return result;
    };

    this.minus = function (obj) {
        if (this.numerator * obj.denominator - this.denominator * obj.numerator !== 0) {
            result = this.numerator * obj.denominator - this.denominator * obj.numerator + "/" + this.denominator * obj.denominator; //.....(**)
            return result;
        } else return 0;
    };

    this.mult = function (obj) {
        result = this.numerator * obj.numerator + "/" + this.denominator * obj.denominator; //.....(***)
        return result;
    };

    this.div = function (obj) {
        result = this.numerator * this.denominator + "/" + obj.numerator * obj.denominator; //.....(****)
        return;
    };

    this.reduction = function (obj) {
        let result;
        for (var i = 1; i <= this.numerator; i++) {
            if (this.numerator % i === 0 && this.denominator % i === 0) result = this.numerator / i + "/" + this.denominator / i; //.....(*****)
        }
        return result;
    };
}

let fraction1 = new Fraction(2, 4);
let fraction2 = new Fraction(2, 3);

console.log(fraction1.sum(fraction2));
console.log(fraction1.minus(fraction2));
console.log(fraction1.mult(fraction2));
console.log(fraction1.reduction(fraction2));

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
    let hours = Math.trunc(seconds / hourSec);
    let minutes = Math.trunc((seconds - hours * hourSec) / minSec);
    let second = seconds % minSec;
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
