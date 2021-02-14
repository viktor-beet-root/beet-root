// console.log(
//     "Задание 1:  а) Функция для вывода на экран информации об автомобиле. б) Функция для подсчета необходимого времени для преодоления переданного расстояния со средней скоростью. Учтите, что через каждые 4 часа дороги водителю необходимо делать перерыв на 1 час."
// );
const car = {
    manufacturer: "Украина",
    model: "ZAZ-VIDA",
    yearIssue: 2017,
    averageSpeed: 70,
    getManufacturer: getManufacturer,
    getModel: getModel,
    getYearIssue: getYearIssue,
    grtAverageSpeed: grtAverageSpeed,
    getInfoCar: getInfoCar,
    timeTraveled: timeTraveled,
};

function getManufacturer() {
    return "Производитель: " + this.manufacturer;
}
function getModel() {
    return "Модель " + this.model;
}
function getYearIssue() {
    return "Год выпуска: " + this.yearIssue;
}
function grtAverageSpeed() {
    return "Средняя скорость " + this.averageSpeed + " км.ч";
}
function getInfoCar() {
    return (
        car.getManufacturer() +
        "\n" +
        car.getModel() +
        "\n" +
        car.getYearIssue() +
        "\n" +
        car.grtAverageSpeed()
    );
}
console.log(car.getInfoCar());

function timeTraveled(distance) {
    const time = distance / this.averageSpeed;
    return time + Math.trunc(time / 4);
}
console.log(
    Math.trunc(car.timeTraveled(+prompt("Введите растояние", ""))) + " часов"
);

// console.log(
//     "Задание 2: Создать объект, хранящий в себе отдельно числитель и знаменатель дроби, и следующие функции для работы с этим объектом:"
// );
// console.log(
//     "а) Функция сложения 2-х объектов-дробей; б) Функция вычитания 2-х объектов-дробей; в) Функция умножения 2-х объектов-дробей; г) Функция деления 2-х объектов-дробей; д) Функция сокращения объекта-дроби."
// );
const fraction = {
    numerator: 15,
    denominator: 40,
};
const fraction1 = {
    numerator: 3,
    denominator: 9,
};

function nok(a, b) {
    let commonDenominator = 0;
    for (let i = Math.max(a, b); i <= a * b; i++) {
        if (i % a === 0 && i % b === 0) {
            commonDenominator = i;
            break;
        }
    }
    return commonDenominator;
}

function greatestCommonFactor(a, b) {
    if (b > a) return greatestCommonFactor(b, a);
    if (!b) return a;
    return greatestCommonFactor(b, a % b);
}

function additionsс(a, b) {
    const commonDenominator = nok(a.denominator, b.denominator);
    const aFactor = commonDenominator / a.denominator;
    const bFactor = commonDenominator / b.denominator;
    const fractionResult = {
        numerator: a.numerator * aFactor + b.numerator * bFactor,
        denominator: commonDenominator,
    };
    return fractionResult;
}
console.log(additionsс(fraction, fraction1));
function subtraction(a, b) {
    const commonDenominator = nok(a.denominator, b.denominator);
    const aFactor = commonDenominator / a.denominator;
    const bFactor = commonDenominator / b.denominator;
    const fractionResult = {
        numerator: a.numerator * aFactor - b.numerator * bFactor,
        denominator: commonDenominator,
    };
    return fractionResult;
}
console.log(subtraction(fraction, fraction1));

function multiplication(a, b) {
    const fractionResult = {
        numerator: a.numerator * b.numerator,
        denominator: a.denominator * b.denominator,
    };
    return fractionResult;
}
console.log(multiplication(fraction, fraction1));

function division(a, b) {
    const fractionResult = {
        numerator: a.numerator * b.denominator,
        denominator: a.denominator * b.numerator,
    };
    return fractionResult;
}
console.log(division(fraction, fraction1));

function reduction(a) {
    const commonFactor = greatestCommonFactor(a.numerator, a.denominator);
    const fraction = {
        numerator: a.numerator / commonFactor,
        denominator: a.denominator / commonFactor,
    };
    return fraction;
}
console.log(reduction(fraction));
// console.log(
//     "Задание 3: Создать объект, описывающий время (часы, минуты, секунды), и следующие функции для работы с этим объектом: "
// );
// console.log(
//     "а) Функция вывода времени на экран; б) Функция изменения времени на переданное количество секунд; в) Функция изменения времени на переданное количество минут; г) Функция изменения времени на переданное количество часов. "
// );
// console.log(
//     "Учтите, что в последних 3-х функциях, при изменении одной части времени, может измениться и другая. Например, если ко времени «20:30:45» добавить 30 секунд, то должно получиться «20:31:15», а не «20:30:75»."
// );
const time = {
    hours: 23,
    minutes: 5,
    seconds: 18,
    getMinutes: getMinutes,
    getSeconds: getSeconds,
    getHours: getHours,
};

function getHours() {
    if (this.hours < 10) {
        return "0" + this.hours;
    }
    return this.hours;
}

function getMinutes() {
    if (this.minutes < 10) {
        return "0" + this.minutes;
    }
    return this.minutes;
}

function getSeconds() {
    if (this.seconds < 10) {
        return "0" + this.seconds;
    }
    return this.seconds;
}

function Clock(timeScreen) {
    return (
        timeScreen.getHours() +
        ":" +
        timeScreen.getMinutes() +
        ":" +
        timeScreen.getSeconds()
    );
}
console.log(Clock(time));
function addingSeconds(seconds, timeChange) {
    const resultTime = {
        hours: timeChange.hours,
        minutes: timeChange.minutes,
        seconds: timeChange.seconds,
    };
    resultTime.seconds = timeChange.seconds + seconds;
    const minutesModification = Math.trunc(resultTime.seconds / 60);
    if (minutesModification > 0) {
        resultTime.minutes = timeChange.minutes + minutesModification;
        resultTime.seconds = resultTime.seconds - minutesModification * 60;
        const hoursModification = Math.trunc(resultTime.minutes / 60);
        if (hoursModification > 0) {
            resultTime.hours = timeChange.hours + hoursModification;
            resultTime.minutes = resultTime.minutes - hoursModification * 60;
        }
    }
    return resultTime;
}

function addingMinutes(minutes, timeChange) {
    const resultTime = timeChange;

    resultTime.minutes = resultTime.minutes + minutes;

    const hoursModification = Math.trunc(resultTime.minutes / 60);
    if (hoursModification > 0) {
        resultTime.hours = resultTime.hours + hoursModification;
        resultTime.minutes = resultTime.minutes - hoursModification * 60;
    }

    return resultTime;
}
console.log(Clock(addingMinutes(1, time)));

function adding(hours, timeChange) {
    const resultTime = timeChange;

    resultTime.hours = resultTime.hours + hours;

    return resultTime;
}
console.log(Clock(adding(5, time)));
