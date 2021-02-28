console.log('Задание 1. Создать объект, описывающий автомобиль (производитель, модель, год выпуска, средняя скорость), ');

const car = {
    producer: 'Dodge',
    model: 'Challenger',
    year: 1970,
    avarageSpeed: 100
}

//Создать следующие функции для работы с этим объектом:
//Функция для вывода на экран информации об автомобиле;

function getInformation() {
    console.log("Producer is " + car.producer);
    console.log("Model of car - " + car.model);
    console.log("Year of Producer - " + car.year);
    console.log("avarage Speed - " + car.avarageSpeed);
}
getInformation();

//Функция для подсчета необходимого времени для преодоления переданного расстояния со средней скоростью.
//Учтите, что через каждые 4 часа дороги водителю необходимо делать перерыв на 1 час.

function calcTime(distance) {
    if (distance === undefined || isNaN(distance) || distance === 0) return "Некоректные данные";
    let time = distance / car.avarageSpeed;
    if (time > 4) time = time + Math.floor(time / 4);
    let resultTime = "Время необходимое для преодолония переданого расстояния: " + time + ' ч.';
    return resultTime;
}

console.log(calcTime(300));
console.log(calcTime(900));
console.log(calcTime(0));

console.log('Задание 2. Создать объект, хранящий в себе отдельно числитель и знаменатель дроби');
const firstFraction = {
    numerator: 3,
    denominator: 4
}

const secondFraction = {
    numerator: 1,
    denominator: 2
}


//Функция сложения 2-х объектов-дробей

function validFraction(fraction) {
    for (let key in fraction) {
        return (fraction[key] === undefined || +fraction[key] === 0 || isNaN(fraction[key]));
    }
}

function fractionTotal() {
    if (validFraction(firstFraction) || validFraction(firstFraction)) return "Error";
    const numerator = firstFraction.numerator * secondFraction.denominator + secondFraction.numerator * firstFraction.denominator;
    const denominator = firstFraction.denominator * secondFraction.denominator;
    return fractionReduction(numerator, denominator);
}

console.log(fractionTotal());

//Функция вычитания 2-х объектов-дробей;
function fractionSubtraction() {
    if (validFraction(firstFraction) || validFraction(firstFraction)) return "Error";
    const numerator = firstFraction.numerator * secondFraction.denominator - secondFraction.numerator * firstFraction.denominator;
    const denominator = firstFraction.denominator * secondFraction.denominator;
    return fractionReduction(numerator, denominator);
}

console.log(fractionSubtraction());

//Функция умножения 2-х объектов-дробей;
function fractionMultiplication() {
    if (validFraction(firstFraction) || validFraction(firstFraction)) return "Error";
    const numerator = firstFraction.numerator * secondFraction.numerator;
    const denominator = firstFraction.denominator * secondFraction.denominator;
    return fractionReduction(numerator, denominator);
}
console.log(fractionMultiplication());

//Функция деления 2-х объектов-дробей;
function fractionDivision() {
    if (validFraction(firstFraction) || validFraction(firstFraction)) return "Error";
    const numerator = firstFraction.numerator * secondFraction.denominator;
    const denominator = firstFraction.denominator * secondFraction.numerator;
    return fractionReduction(numerator, denominator);
}
console.log(fractionDivision());
//Функция сокращения объекта-дроби.

function fractionReduction(numerator, denominator) {
    numerator = numerator / maxValue(numerator, denominator);
    denominator = denominator / maxValue(numerator, denominator);
    return ({
        num: numerator,
        dom: denominator
    });
}

function maxValue(numerator, denominator) {
    let min = (numerator < denominator) ? numerator : denominator;
    let max = 1;
    while (min > 0) {
        if (!(numerator % min) && !(denominator % min)) {
            max = min;
            break;
        }
        min--;
    }
    return max;
}

console.log('Задание 3. Создать объект, описывающий время (часы, минуты, секунды)');

const time = {
    hours: 15,
    minutes: 20,
    seconds: 40
};

//Функция вывода времени на экран;

function getTime() {
    let resultTime = "";
    for (key in time) {
        time[key] < 10 ? resultTime = resultTime + "0" + time[key] : resultTime = resultTime + time[key];
        if (key === "hours" || key === "minutes") resultTime = resultTime + ":"
    }
    return resultTime;
}
console.log(getTime());

//Функция изменения времени на переданное количество секунд;

function changeTimeSeconds(sec) {
    time.seconds = time.seconds + sec;
    if (time.seconds > 60) {
        time.minutes = time.minutes + Math.trunc(time.seconds / 60);
        time.seconds = time.seconds % 60;
    } else if (time.seconds === 60) {
        time.minutes = time.minutes + 1;
        time.seconds = "0";
    }
    return getTime();
};
console.log(changeTimeSeconds(320));

//Функция изменения времени на переданное количество минут;

function changeTimeMinutes(min) {
    time.minutes = time.minutes + min;
    if (time.minutes > 60) {
        time.hours = time.hours + Math.trunc(time.minutes / 60);
        time.minutes = time.minutes % 60;
    } else if (time.minutes === 60) {
        time.hours = time.hours + 1;
        time.minutes = "0";
    }
    return getTime();
};
console.log(changeTimeMinutes(50));

//Функция изменения времени на переданное количество часов. 

function changeTimeHours(hour) {
    time.hours = time.hours + hour;
    if (time.hours > 24) {
        time.hours = time.hours - 24;
    } else if (time.hours === 24) {
        time.hours = 0;
    }
    return getTime();
};
console.log(changeTimeHours(24));