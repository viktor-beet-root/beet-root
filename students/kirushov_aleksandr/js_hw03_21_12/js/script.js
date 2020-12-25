console.log("Задание 1");
const num1 = +prompt("Введите число начала диапазона");
const num2 = +prompt("Введите число конца диапазона");
let result = 0
if (num1 < num2) {
    for (let i = num1; i <= num2; i++) {
        result = result + i;
    }
    console.log("Сумма чисел в диапазоне будет равна: " + result);
} else if (num1 > num2) {
    for (i = num1; i >= num2; i--) {
        result = result + i;
    }
    console.log("Сумма чисел в диапазоне будет равна: " + result);
} else {
    console.log("Вы ввели два одинаковых числачисло");
}

console.log("Задание 2");
let a = +prompt("Введите первое число");
let b = +prompt("Введите второе число");
let min = (a < b) ? a : b;
let del = min - 1;
if (a % min === 0 && b % min === 0) {
    del = min;
    console.log('Наибольший общий делитель равен: ' + del);
} else {
    while (del < min) {
        if (a % del === 0 && b % del === 0) {
            console.log('Наибольший общий делитель равен: ' + del);
            break;
        }
        del--;
    }
}

console.log("Задание 3");
const numZ3 = +prompt("Введите число");
let res3 = '';
let del3 = 0;
while (del3 < numZ3) {
    if (numZ3 % del3 === 0) {
        res3 = res3 + ' ' + del3;
    }
    del3++;
}
console.log(res3);

console.log("Задание 4");
let numZ4 = +prompt("Введите число");
let count = (numZ4 == 0) ? 1 : 0;
while (Math.abs(numZ4) >= 1) {
    numZ4 /= 10;
    count++;
}
console.log("Количество цифр в введенном числе равно: " + count);

console.log("Задание 5");
let numZ5;
let qNull = 0;
let qPositive = 0;
let qNegative = 0;
let qEven = 0;
let qUneven = 0;
for (i = 0; i < 10; ++i) {
    numZ5 = +prompt('Введите 10 чисел:');
    console.log(numZ5);
    if (numZ5 > 0) {
        qPositive++;
    } else if (numZ5 < 0) {
        qNegative++;
    } else {
        qNull++;
    }
    if (Math.abs(numZ5) % 2 === 0 && numZ5 !== 0) {
        qEven++;
    } else if (numZ5 !== 0) {
        qUneven++;
    }
}
console.log("Количество положительных чисел: " + qPositive);
console.log("Количество отрицательных чисел: " + qNegative);
console.log("Количество нолей: " + qNull);
console.log("Количество четных  чисел: " + qEven);
console.log("Количество нечетных  чисел: " + qUneven);

console.log("Задание 6");
do {
    let argOne = +prompt('Введите число1');
    let argTwo = +prompt('Введите число2');
    let symbol = prompt('Выберите знак - + / *');
    let sum, minus, p, d;
    if (symbol === "+") {
        sum = argOne + argTwo;
        alert(sum);
    }
    if (symbol === "-") {
        minus = argOne - argTwo;
        alert(minus);
    }
    if (symbol === "*") {
        p = argOne * argTwo;
        alert(p);
    }
    if (symbol === "/") {
        d = argOne / argTwo;
        alert(d);
    }
} while (confirm('Желаете решить еще один пример?'));


console.log("Задание 8");
const days = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
let currDay = 0;
while (confirm(days[currDay] + '. Хотите увидеть следующий день?')) {
    currDay = (currDay + 1) % days.length;
}

console.log("Задание 9");
let multipTable = '';
for (let i = 2; i <= 9; i++) {
    for (let j = 1; j <= 10; j++) {
        multipTable = i + ' x ' + j + ' = ' + i * j;
        console.log(multipTable);
    }
}

console.log("Задание 10");
alert("Загадайте число в диапазоне от 0 до 100");
let oneNum = 0;
let twoNum = 100;
let N;
let symbolZ10 = '';
do {
    N = ~~((oneNum + twoNum) / 2);
    symbolZ10 = prompt('Ваше число: 1) больше ' + N + '; 2) меньше ' + N + '; 3) равно ' + N + ' ? ');
    if (symbolZ10 === '1') {
        oneNum = N + 1;
    } else if (symbolZ10 === '2') {
        twoNum = N - 1;
    } else if (symbolZ10 === '3') {
        break;
    } else {
        N = 'Укажите номер варианта';
        break;
    }
}
while (symbolZ10 !== '3');
console.log("Ваше число: " + N);
