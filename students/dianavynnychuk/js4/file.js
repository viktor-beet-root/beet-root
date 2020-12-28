function compare(firstNum, secondNum) {
    if (firstNum < secondNum) return "-1";
    if (firstNum > secondNum) return "1";
    if (firstNum === secondNum) return "0";
    if (firstNum === undefined || secondNum === undefined) return "Числа невірні";
}
console.log(compare(+prompt("Введіть перше число"), +prompt("Введіть друге число")));

function factorial(n) {
    console.log(n);
    if (n === undefined || isNaN(n)) {
        return false;
    }
    let result = 1;
    if (n === 1) return result;
    for (let i = 1; i <= n; i++) {
        result = result * i;
    }
    return result;
}
console.log(factorial(prompt('Число')));

function threeNumbers(firstNumber, secondNumber, thirdNumber) {
    if ((firstNumber === undefined) || (secondNumber === undefined) || (thirdNumber === undefined) || (firstNumber === 0)) {
        return "Вы ввели неверные данные";
    }
    let ollNumbers = firstNumber * 100 + secondNumber * 10 + thirdNumber;
    return ollNumbers;
}

console.log(threeNumbers(firstNumber = +prompt("Введите первое число", ""), secondNumber = +prompt("Введите второе число", ""), thirdNumber = +prompt("Введите третье число", "")));

function perimetrFunction(sideA, sideB) {
    if (((sideA === undefined) && (sideB === undefined)) || ((sideA === 0) && (sideB === 0))) {
        return "невірні дані";
    }
    let perimetr = 0;
    if (((sideA === undefined) || (sideA === 0)) && (sideB !== undefined)) {
        perimetr = 4 * sideB;
        return perimetr;
    }
    if ((sideA !== undefined) && ((sideB === undefined) || (sideB === 0))) {
        perimetr = 4 * sideA;
        return perimetr;
    }
    if ((sideA !== undefined) && (sideB !== undefined)) {
        perimetr = 2 * (sideA + sideB);
        return perimetr;
    }
}

console.log(perimetrFunction(sideA = +prompt("введіть сторону А", ""), sideB = +prompt("введіть сторону B", "")));

function perfectNumber(perfectNumber) {
    if (((perfectNumber === undefined) || (perfectNumber === 0))) {
        return "невірні дані";
    }
    let sum = 0;
    for (let i = perfectNumber - 1; i >= 1; --i) {
        if (perfectNumber % i === 0) sum = sum + i;
    }
    let result = "";
    if (perfectNumber === sum) {
        return result = true;
    } else return result = false;
}

console.log(perfectNumber(perfectNumber = +prompt("введіть число", "")));

function rangeNumbers(minNumber, maxNumber) {
    if (((minNumber === undefined) || (maxNumber === undefined) || (minNumber >= maxNumber))) {
        return "неправильні дані";
    }
    let result = "";
    for (let j = minNumber; j <= maxNumber; ++j) {
        if (perfectNumber(j) === true) result = result + j + " ";
    }
    if (result === "") {
        return "нема правильних чисел";
    } else return result;
}

console.log(rangeNumbers(minNumber = +prompt("введіть початок діапазону", ""), maxNumber = +prompt("введіть кінець діапазону ", "")));

function date(a, b, c) {
    let time = "";
    if (a < 24 && b < 60 && c < 60) {
        return (time = a + ":" + b + ":" + c);
    }
    if (b === undefined && c === undefined) {
        return (time = a + ":" + "00" + ":" + "00");
    }
    if (b === undefined) {
        return (time = a + ":" + "00" + ":" + c);
    }
    if (c === undefined) {
        return (time = a + ":" + b + ":" + "00");
    } else {
        return "Введіть правильний час";
    }
}
console.log(date(+prompt("години"), +prompt("хвилина"), +prompt("секунда")));

function secFunction(hour, minut, sec) {
    let seconds = 0;
    return (seconds = hour * 3600 * 60 + minut * 60 + sec);
}
console.log(secFunction(+prompt("введіть години"), +prompt("введіть хвилини"), +prompt("введіть секунди")));

function secondsTransform(secundNumb) {
    let time = "";
    let hours = Math.trunc(secundNumb / 3600);
    let minutes = Math.trunc((secundNumb - hours * 3600) / 60);
    let seconds = secundNumb % 60;
    return (time = hours + "h : " + minutes + "m : " + seconds + "s");
}
console.log(secondsTransform(secundNumb = +prompt("Введіть секунди", "")));

function timeRecover(hourFirst, minutFirst, secundFirst, hourSecond, minutSecond, secundSecond) {
    let result;
    let time1 = secFunction(hourFirst, minutFirst, secundFirst);
    let time2 = secFunction(hourSecond, minutSecond, secundSecond);
    result = Math.max(time1, time2) - Math.min(time1, time2);
    result = secondsTransform(result);
    return result;
}
console.log("різниця" + " : " + timeRecover(+prompt("година 1"), +prompt("хвилина 1"), +prompt("секунда 1"), +prompt("година 2"), +prompt("хвилина 2"), +prompt("секунда 2")));