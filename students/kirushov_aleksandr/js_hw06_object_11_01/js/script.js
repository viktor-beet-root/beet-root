console.log("Задание 1. Создать объект, описывающий автомобиль (производитель, модель, год выпуска, средняя скорость), и следующие функции для работы с этим объектом:");

const car = {
    manufacturer: 'Nissan',
    model: "Colt",
    yearOfManufact: 2009,
    averageSpeed: 100,

    getManufacturer: getManufacturer,
    getModel: getModel,
    getYearOfManufact: getYearOfManufact,
    getAverageSpeed: getAverageSpeed,
    getInformAboutCar: getInformAboutCar,
    travelTime: travelTime,
}

function getManufacturer() {
    return "Производитель автомобиля завод: " + this.manufacturer;
};

function getModel() {
    return "Модель автомобиля: " + this.model;
};

function getYearOfManufact() {
    return "Год выпуска автомобиля: " + this.yearOfManufact;
};

function getAverageSpeed() {
    return "средння скорость автомобиля составляет: " + this.averageSpeed;
};

// Функция для вывода на экран информации об автомобиле;
function getInformAboutCar() {
    return this.getManufacturer() + '\n' + this.getModel() + '\n' + this.getYearOfManufact() + '\n' +
        this.getAverageSpeed() + " км/ч";
};

// Функция для подсчета необходимого времени для преодоления переданного расстояния со средней скоростью.Учтите, что через каждые 4 часа дороги водителю необходимо делать перерыв на 1 час.
function travelTime(distance) {

    if (isNaN(distance) || distance <= 0 || distance === undefined) return "Ведено не допустимое значение";
    let time = distance / this.averageSpeed;
    let pause;
    let answer;

    if (time > 4) {
        pause = ~~(time / 4);
        time = time + pause;
    };

    if ((time % 10) === 1) {
        answer = "час";
    } else if ((time !== 12 && (time % 10) === 2) || ((time % 10) === 3 && time !== 13) || ((time % 10) === 4 && time !== 14)) {
        answer = "часа";
    } else {
        answer = 'часов';
    }

    return 'Время необходимое для преодоления переданого расстояния, состовляет ' + time + ' ' + answer;
};

console.log(car);
console.log(car.getInformAboutCar());
console.log(car.travelTime(+prompt('Введите расстояние которое необходимо преодолеть')));

console.log("Задание 2. Создать объект, хранящий в себе отдельно числитель и знаменатель дроби, и следующие функции для работы с этим объектом:");

const firstFraction = {
    numerator: 3,
    denominator: 4,

    NOD: NOD,
    getNumerator: getNumerator,
    getDenominator: getDenominator,
    getFraction: getFraction,
};
const secondFraction = {
    numerator: 4,
    denominator: 7,

    NOD: NOD,
    getNumerator: getNumerator,
    getDenominator: getDenominator,
    getFraction: getFraction,

};

console.log(firstFraction.getFraction(), secondFraction.getFraction());

const obj = sumFraction(firstFraction, secondFraction);
// Функция сложения 2-х объектов-дробей;

function sumFraction(firstFraction, secondFraction) {
    const firstNumerator = firstFraction["numerator"] * secondFraction['denominator'];
    const secondNumerator = firstFraction["denominator"] * secondFraction['numerator'];
    const commonDenomin = firstFraction["denominator"] * secondFraction['denominator'];
    const sum = firstNumerator + secondNumerator;

    return sum + '/' + commonDenomin;
};
console.log('Сумма дробей равна: ' + sumFraction(firstFraction, secondFraction));

// Функция вычитания 2 - х объектов - дробей;

function subtractionFraction(firstFraction, secondFraction) {
    const firstNumerator = firstFraction["numerator"] * secondFraction['denominator'];
    const secondNumerator = firstFraction["denominator"] * secondFraction['numerator'];
    const commonDenomin = firstFraction["denominator"] * secondFraction['denominator'];
    const subtraction = firstNumerator - secondNumerator;

    if (subtraction !== 0) {
        return subtraction + '/' + commonDenomin;
    } else return 0;

};
console.log("Разница дробей равна: " + subtractionFraction(firstFraction, secondFraction));

// Функци я умножения 2 - х объектов - дробей;

function multiplicationFraction(firstFraction, secondFraction) {
    const newNumerator = firstFraction["numerator"] * secondFraction['numerator'];
    const newDenominator = firstFraction["denominator"] * secondFraction['denominator'];

    return newNumerator + '/' + newDenominator;
};

console.log("Произведение дробей равно: " + multiplicationFraction(firstFraction, secondFraction));

// Функция деления 2 - х объектов - дробей;

function divisionFraction(firstFraction, secondFraction) {
    const newNumerator = firstFraction["numerator"] * secondFraction['denominator'];
    const newDenominator = firstFraction["denominator"] * secondFraction['numerator'];

    return newNumerator + '/' + newDenominator;
};

console.log("Деление дробей равно: " + divisionFraction(firstFraction, secondFraction));

// Функция сокращения объекта - дроби.

function reductionFraction(fraction) {
    const nod = fraction.NOD();
    let newNumerator = 0;
    let newDenominator = 0;

    if (nod === 1) {
        newNumerator = fraction.numerator;
        newDenominator = fraction.denominator;
    } else {
        newNumerator = fraction.numerator / nod;
        newDenominator = fraction.denominator / nod;
    }

    return newNumerator + '/' + newDenominator;
};

function NOD() {
    let a = this.numerator;
    let b = this.denominator;
    while (a !== 0 && b !== 0) {
        if (a > b) {
            a = a % b;
        } else {
            b = b % a;
        }
        del = a + b;
    }
    return del;
};

function getNumerator() {
    return this.numerator;
};

function getDenominator() {
    return this.denominator;
};

function getFraction() {
    return this.getNumerator() + '/' + this.getDenominator();
};

console.log(reductionFraction(firstFraction));


console.log('Задание 3. Создать объект, описывающий время (часы, минуты, секунды), и следующие функции для работы с этим объектом:');
const time = {
    hours: 0,
    minuts: 0,
    seconds: 0,
};

// Функция вывода времени на экран;
function getTime() {
    const newHour = doubleNumber(time.hours);
    const newMinuts = doubleNumber(time.minuts);
    const newSeconds = doubleNumber(time.seconds);
    return newHour + ':' + newMinuts + ':' + newSeconds;
};

// Функция изменения времени на переданное количество секунд;

function changeSeconds(sec) {
    if (sec === undefined || sec < 0) return 'К сожалению, время не возможно вернуть назад))';
    const hSec = 3600;
    const mSec = 60;
    let newSec = sec;
    time.hours = ~~(newSec / hSec) + time.hours;

    if (time.hours > 24 || time.hours % 24 === 0) time.hours = time.hours - (24 * (~~(time.hours / 24)));

    newSec = newSec % hSec;
    time.minuts = ~~(newSec / mSec) + time.minuts;

    if (time.minuts > 60 || time.minuts % 60 === 0) {
        time.minuts = time.minuts - (60 * (~~(time.minuts / 60)));
        time.hours++;
        if (time.hours >= 24 || time.hours % 24 === 0) time.hours = time.hours - (24 * (~~(time.hours / 24)));
    }

    time.seconds = newSec % mSec + time.seconds;

    if (time.seconds === 60) {
        time.seconds = time.seconds - (60 * (~~(time.seconds / 60)));
        time.minuts++

        if ((time.minuts > 60 || time.minuts % 60 === 0)) {
            time.minuts = time.minuts - (60 * (~~(time.minuts / 60)));
            time.hours++;

            if (time.hours > 24 || time.hours % 24 === 0) time.hours = time.hours - (24 * (~~(time.hours / 24)));
        }
    }
};

//Функция изменения времени на переданное количество минут;

function changeMinuts(min) {

    if (min === undefined || min < 0) return 'К сожалению, время не возможно вернуть назад))';
    const hMin = 60;
    time.hours = ~~(min / hMin) + time.hours;

    if (time.hours > 24 || time.hours % 24 === 0) time.hours = time.hours - (24 * (~~(time.hours / 24)));

    time.minuts = min % hMin + time.minuts;

    if (time.minuts > 60 || time.minuts % 60 === 0) {
        time.minuts = time.minuts - (60 * (~~(time.minuts / 60)));
        time.hours++;
        if (time.hours >= 24 && time.hours % 24 === 0) time.hours = time.hours - (24 * (~~(time.hours / 24)));
    }
};

//Функция изменения времени на переданное количество минут;

function changeHours(hour) {

    if (hour === undefined || hour < 0) return 'К сожалению, время не возможно вернуть назад))';
    time.hours = hour + time.hours;
    if (time.hours >= 24 || time.hours % 24 === 0) time.hours = time.hours - (24 * (~~(time.hours / 24)));
};

function doubleNumber(params) {
    let newParams = '';
    newParams = (params < 10) ? ('0' + params) : params;
    return newParams;
};

console.log(time);
console.log(getTime());
changeSeconds(3661);
console.log(getTime());
changeMinuts(65);
console.log(getTime());
changeHours(22);
console.log(getTime());
