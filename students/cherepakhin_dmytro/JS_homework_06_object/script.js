// 1. Создать объект, описывающий автомобиль

const car = {
    mark: 'Audi',
    model: 'Q5',
    yearOfProduction: 2020,
    averageSpeed: 65,
    getInformation: function () {
        const info = 'Car: ' + this.mark + ', model: ' + this.model + ', year: ' + this.yearOfProduction;
        return info;
    },
    getTime: function (distance) {
        const timeWithoutBreak = distance / this.averageSpeed;
        const time = timeWithoutBreak + Math.trunc(timeWithoutBreak / 4);
        const hours = Math.trunc(time);
        const minutes = Math.round((time - hours) * 60);
        return `The distance ${distance} km can be cover in ${hours}h ${minutes}min with average speed ${this.averageSpeed} km/h`;
    }
}

console.log(car.getInformation());
console.log(car.getTime(100));
console.log(car.getTime(1000));

// 2. Создать объект, хранящий в себе отдельно числитель и знаменатель дроби и функции для работы с этим объектом

const fraction1 = {
    numerator: 3,
    denominator: 5,
}

const fraction2 = {
    numerator: 3,
    denominator: 9,
}
// Функция сложения 2-х объектов-дробей

function getAdd(fract1, fract2) {
    const resultFraction = {
        numerator: 0,
        denominator: 0,
    };
    resultFraction.numerator = fract1.numerator * fract2.denominator + fract1.denominator * fract2.numerator;
    resultFraction.denominator = fract2.denominator * fract1.denominator;
    return `${fract1.numerator}/${fract1.denominator} + ${fract2.numerator}/${fract2.denominator} = ${resultFraction.numerator}/${resultFraction.denominator}`;
}

console.log(getAdd(fraction1, fraction2))

// Функция вычитания 2-х объектов-дробей;

function getSub(fract1, fract2) {
    const resultFraction = {
        numerator: 0,
        denominator: 0,
    };
    resultFraction.numerator = fract1.numerator * fract2.denominator - fract1.denominator * fract2.numerator;
    resultFraction.denominator = fract2.denominator * fract1.denominator;
    return `${fract1.numerator}/${fract1.denominator} - ${fract2.numerator}/${fract2.denominator} = ${resultFraction.numerator}/${resultFraction.denominator}`;
}

console.log(getSub(fraction1, fraction2))

// Функция умножения 2-х объектов-дробей;

function getMult(fract1, fract2) {
    const resultFraction = {
        numerator: 0,
        denominator: 0,
    };
    resultFraction.numerator = fract1.numerator * fract2.numerator;
    resultFraction.denominator = fract2.denominator * fract1.denominator;
    return `${fract1.numerator}/${fract1.denominator} * ${fract2.numerator}/${fract2.denominator} = ${resultFraction.numerator}/${resultFraction.denominator}`;
}

console.log(getMult(fraction1, fraction2))

// Функция деления 2-х объектов-дробей;

function getDiv(fract1, fract2) {
    const resultFraction = {
        numerator: 0,
        denominator: 0,
    };
    resultFraction.numerator = fract1.numerator * fract2.denominator;
    resultFraction.denominator = fract1.denominator * fract2.numerator;
    return `${fract1.numerator}/${fract1.denominator} / ${fract2.numerator}/${fract2.denominator} = ${resultFraction.numerator}/${resultFraction.denominator}`;
}

console.log(getDiv(fraction1, fraction2))

// Функция сокращения объекта-дроби.

function getReduction(fract) {
    const resultFraction = {
        numerator: 0,
        denominator: 0,
    };
    resultFraction.numerator = fract.numerator;
    resultFraction.denominator = fract.denominator;
    const n = fract.numerator > fract.denominator ? fract.denominator : fract.numerator;
    for (let i = n; i > 1; i--) {
        if (resultFraction.numerator % n === 0 && resultFraction.denominator % n === 0) {
            resultFraction.numerator = resultFraction.numerator / n;
            resultFraction.denominator = resultFraction.denominator / n;
        }
    }
    return `${fract.numerator}/${fract.denominator} = ${resultFraction.numerator}/${resultFraction.denominator}`;
}

console.log(getReduction(fraction2))

// 3. Создать объект, описывающий время (часы, минуты, секунды), и следующие функции для работы с этим объектом: 

const time = {
    hours: 10,
    minutes: 5,
    seconds: 45
}

// Функция вывода времени на экран;

function showTime(obj) {
    const hours = obj.hours > 9 ? obj.hours : '0' + obj.hours;
    const minutes = obj.minutes > 9 ? obj.minutes : '0' + obj.minutes;
    const seconds = obj.seconds > 9 ? obj.seconds : '0' + obj.seconds;
    return `${hours}:${minutes}:${seconds}`;
}

console.log(showTime(time));

// Функция изменения времени на переданное количество секунд;

function convertTimeIntoSecond(obj) {
    return obj.hours * 3600 + obj.minutes * 60 + obj.seconds;
}

function getTimefromSeonds(seconds) {
    const time = {
        hours: 0,
        minutes: 0,
        seconds: 0,
    }
    time.hours = Math.trunc(seconds / 3600);
    time.minutes = Math.trunc((seconds - time.hours * 3600) / 60);
    time.seconds = (seconds - time.hours * 3600) % 60;
    return time;
}

function changeSeconds(obj, seconds) {
    const oldTimeInSecond = convertTimeIntoSecond(obj);
    const newTimeInSeconds = oldTimeInSecond + seconds;
    const newTime = getTimefromSeonds(newTimeInSeconds);
    return showTime(newTime);
}

console.log(changeSeconds(time, 55))
console.log(changeSeconds(time, -55))

// Функция изменения времени на переданное количество минут;

function changeMinutes(obj, minutes) {
    const oldTimeInSecond = convertTimeIntoSecond(obj);
    const newTimeInSeconds = oldTimeInSecond + minutes * 60;
    const newTime = getTimefromSeonds(newTimeInSeconds);
    return showTime(newTime);
}

console.log(changeMinutes(time, 55))
console.log(changeMinutes(time, -55))

// Функция изменения времени на переданное количество часов. 

function changeHours(obj, hours) {
    const oldTimeInSecond = convertTimeIntoSecond(obj);
    const newTimeInSeconds = oldTimeInSecond + hours * 3600;
    const newTime = getTimefromSeonds(newTimeInSeconds);
    return showTime(newTime);
}

console.log(changeHours(time, 5))
console.log(changeHours(time, -5))
