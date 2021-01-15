console.log("Задание 1. Создать объект, описывающий автомобиль (производитель, модель, год выпуска, средняя скорость), и следующие функции для работы с этим объектом:");

const car = {
    manufacturer: 'Nissan',
    model: "Colt",
    yearOfManufact: 2009,
    averageSpeed: 100,

    getManufacturer() {
        return "Производитель автомобиля завод: " + this.manufacturer;
    },
    getModel() {
        return "Модель автомобиля: " + this.model;
    },
    getYearOfManufact() {
        return "Год выпуска автомобиля: " + this.yearOfManufact;
    },
    getAverageSpeed() {
        return "средння скорость автомобиля составляет: " + this.averageSpeed;
    },

    // Функция для вывода на экран информации об автомобиле;
    getInformAboutCar() {
        return this.getManufacturer() + '\n' + this.getModel() + '\n' + this.getYearOfManufact() + '\n' +
            this.getAverageSpeed() + " км/ч";
    },

    // Функция для подсчета необходимого времени для преодоления переданного расстояния со средней скоростью.Учтите, что через каждые 4 часа дороги водителю необходимо делать перерыв на 1 час.
    travelTime(distance) {
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

    },
}

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
    const newFraction = {
        numerator: sum,
        denominator: commonDenomin,

        NOD: NOD,
        getNumerator: getNumerator,
        getDenominator: getDenominator,
        getFraction: getFraction,
    };
    return newFraction;
};

console.log('Сумма дробей равна: ' + sumFraction(firstFraction, secondFraction).getFraction());

// Функция вычитания 2 - х объектов - дробей;

function subtractionFraction(firstFraction, secondFraction) {
    const firstNumerator = firstFraction["numerator"] * secondFraction['denominator'];
    const secondNumerator = firstFraction["denominator"] * secondFraction['numerator'];
    const commonDenomin = firstFraction["denominator"] * secondFraction['denominator'];
    const subtraction = firstNumerator - secondNumerator;
    if (subtraction !== 0) {
        newFraction = {
            numerator: subtraction,
            denominator: commonDenomin,

            NOD: NOD,
            getNumerator: getNumerator,
            getDenominator: getDenominator,
            getFraction: getFraction,
        };
        return newFraction;
    } else return 0;

};
console.log("Разница дробей равна: " + subtractionFraction(firstFraction, secondFraction).getFraction());

// Функци я умножения 2 - х объектов - дробей;

function multiplicationFraction(firstFraction, secondFraction) {
    const newFraction = {
        numerator: firstFraction["numerator"] * secondFraction['numerator'],
        denominator: firstFraction["denominator"] * secondFraction['denominator'],

        NOD: NOD,
        getNumerator: getNumerator,
        getDenominator: getDenominator,
        getFraction: getFraction,
    };
    return newFraction;
};

console.log("Произведение дробей равно: " + multiplicationFraction(firstFraction, secondFraction).getFraction());

// Функция деления 2 - х объектов - дробей;

function divisionFraction(firstFraction, secondFraction) {
    const newFraction = {
        numerator: firstFraction["numerator"] * secondFraction['denominator'],
        denominator: firstFraction["denominator"] * secondFraction['numerator'],

        NOD: NOD,
        getNumerator: getNumerator,
        getDenominator: getDenominator,
        getFraction: getFraction,
        reductionFraction: reductionFraction,
    };

    return newFraction;
};

console.log("Деление дробей равно: " + divisionFraction(firstFraction, secondFraction).getFraction());

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
    newFraction = {
        numerator: newNumerator,
        denominator: newDenominator,

        getNumerator: getNumerator,
        getDenominator: getDenominator,
        getFraction: getFraction,
    }
    return newFraction;
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

console.log(reductionFraction(sumFraction(firstFraction, secondFraction)).getFraction());
console.log(reductionFraction(subtractionFraction(firstFraction, secondFraction)).getFraction());
console.log(reductionFraction(multiplicationFraction(firstFraction, secondFraction)).getFraction());
console.log(reductionFraction(divisionFraction(firstFraction, secondFraction)).getFraction());
100

console.log('Задание 3. Создать объект, описывающий время (часы, минуты, секунды), и следующие функции для работы с этим объектом:');
const time = {
    hours: 0,
    minuts: 0,
    seconds: 0,

    // Функция вывода времени на экран;
    getTime: function () {
        const newHour = doubleNumber(this.hours);
        const newMinuts = doubleNumber(this.minuts);
        const newSeconds = doubleNumber(this.seconds);
        return newHour + ':' + newMinuts + ':' + newSeconds;
    },

    // Функция изменения времени на переданное количество секунд;

    changeSeconds: function (sec) {
        if (sec === undefined || sec < 0) return 'К сожалению, время не возможно вернуть назад))';
        const hSec = 3600;
        const mSec = 60;
        let newSec = sec;
        this.hours = ~~(newSec / hSec) + this.hours;

        if (this.hours > 24 || this.hours % 24 === 0) this.hours = this.hours - (24 * (~~(this.hours / 24)));

        newSec = newSec % hSec;
        this.minuts = ~~(newSec / mSec) + this.minuts;

        if (this.minuts > 60 || this.minuts % 60 === 0) {
            this.minuts = this.minuts - (60 * (~~(this.minuts / 60)));
            this.hours++;
            if (this.hours >= 24 || this.hours % 24 === 0) this.hours = this.hours - (24 * (~~(this.hours / 24)));
        }

        this.seconds = newSec % mSec + this.seconds;

        if (this.seconds === 60) {
            this.seconds = this.seconds - (60 * (~~(this.seconds / 60)));
            this.minuts++

            if ((this.minuts > 60 || this.minuts % 60 === 0)) {
                this.minuts = this.minuts - (60 * (~~(this.minuts / 60)));
                this.hours++;

                if (this.hours > 24 || this.hours % 24 === 0) this.hours = this.hours - (24 * (~~(this.hours / 24)));
            }
        }
    },

    //Функция изменения времени на переданное количество минут;

    changeMinuts: function (min) {
        if (min === undefined || min < 0) return 'К сожалению, время не возможно вернуть назад))';
        const hMin = 60;
        this.hours = ~~(min / hMin) + this.hours;

        if (this.hours > 24 || this.hours % 24 === 0) this.hours = this.hours - (24 * (~~(this.hours / 24)));

        this.minuts = min % hMin + this.minuts;

        if (this.minuts > 60 || this.minuts % 60 === 0) {
            this.minuts = this.minuts - (60 * (~~(this.minuts / 60)));
            this.hours++;
            if (this.hours >= 24 && this.hours % 24 === 0) this.hours = this.hours - (24 * (~~(this.hours / 24)));
        }
    },

    //Функция изменения времени на переданное количество минут;

    changeHours: function (hour) {
        if (hour === undefined || hour < 0) return 'К сожалению, время не возможно вернуть назад))';
        this.hours = hour + this.hours;
        if (this.hours >= 24 || this.hours % 24 === 0) this.hours = this.hours - (24 * (~~(this.hours / 24)));
    },
};

function doubleNumber(params) {
    let newParams = '';
    newParams = (params < 10) ? ('0' + params) : params;
    return newParams;
};

console.log(time);
console.log(time.getTime());
time.changeSeconds(3661);
console.log(time.getTime());
time.changeMinuts(65);
console.log(time.getTime());
time.changeHours(22);
console.log(time.getTime());
