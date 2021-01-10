console.log("Задание 1");
const num1 = +prompt("Введите число начала диапазона");
const num2 = +prompt("Введите число конца диапазона");
let result = 0
if (num1 !== num2) {
    for (let i = Math.min(num1, num2); i <= Math.max(num1, num2); i++) {
        result = result + i;
    }
    console.log("Сумма чисел в диапазоне будет равна: " + result);
} else {
    console.log("Вы ввели два одинаковых числа");
}

console.log("Задание 2");
let a = +prompt("Введите первое число");
let b = +prompt("Введите второе число");
let del;
if (a < 0 || b < 0) {
    console.log("Вы ввели отрицательным одно из чисел!!!");
} else if (a === 0 || b === 0) {
    console.log("Введеные числа не должны принимать значение - ноль!!!");
} else {
    while (a !== 0 && b !== 0) {
        if (a > b) {
            a = a % b;
        } else {
            b = b % a;
        }
        del = a + b;
    }
    console.log('Наибольший общий делитель равен: ' + del);
}

console.log("Задание 3");
const numZ3 = +prompt("Введите число");
let res3 = '';
let del3 = 1;
while (del3 <= numZ3) {
    if (numZ3 % del3 === 0) {
        res3 = res3 + ' ' + del3;
    }
    del3++;
}
console.log('Все делители введенного Вами чила:' + res3);

console.log("Задание 4");
const numZ4 = +prompt("Введите число");
let count = (numZ4 == 0) ? 1 : 0;
while (Math.abs(numZ4) >= 1) {
    numZ4 /= 10;
    count++;
}
console.log("Количество цифр в введенном числе равно: " + count);

console.log("Задание 5");
const numZ5;
let qNull = 0;
let qPositive = 0;
let qNegative = 0;
let qEven = 0;
let qUneven = 0;
for (i = 0; i < 10; ++i) {
    numZ5 = +prompt('Введите 10 чисел:');
    console.log(numZ5);

    if (numZ5 > 0) {
        if (Math.abs(numZ5) % 2 === 0 && numZ5 !== 0) {
            qEven++;
        } else if (numZ5 !== 0) {
            qUneven++;
        }
        qPositive++;
    } else if (numZ5 < 0) {
        if (Math.abs(numZ5) % 2 === 0 && numZ5 !== 0) {
            qEven++;
        } else if (numZ5 !== 0) {
            qUneven++;
        }
        qNegative++;
    } else {
        qNull++;
    }
}
console.log("Количество положительных чисел: " + qPositive);
console.log("Количество отрицательных чисел: " + qNegative);
console.log("Количество нолей: " + qNull);
console.log("Количество четных чисел: " + qEven);
console.log("Количество нечетных чисел: " + qUneven);

console.log("Задание 6");
do {
    const argOne = +prompt('Введите число1');
    const argTwo = +prompt('Введите число2');
    const symbol = prompt('Выберите знак - + / *');
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

console.log("Задание 7");
const numeric = prompt("Введите число", "");
const quantity = +prompt("На сколько цифр хотите сдвинуть?", "");
let startNum;
let changedNum;
console.log(numeric.length);
startNum = ~~(numeric / 10 ** (numeric.length - quantity));
changedNum = String(numeric % 10 ** (numeric.length - quantity)) + String(startNum);
console.log(changedNum);


console.log("Задание 8");
let day = "";
let counting = 0;
let thisDay;
do {
    counting++;
    thisDay = counting % 7;
    switch (thisDay) {
        case 1:
            day = "Понедельник";
            break;
        case 2:
            day = "Вторник";
            break;
        case 3:
            day = "Среда";
            break;
        case 4:
            day = "Четверг";
            break;
        case 5:
            day = "Пятница";
            break;
        case 6:
            day = "Суббота";
            break;
        case 0:
            day = "Воскресение";
            break;
    }
}
while (confirm(day + ". " + "Хотите увидеть следующий день?"));

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
let answer = '';
do {
    N = ~~((oneNum + twoNum) / 2);
    answer = prompt('Ваше число: 1) больше ' + N + '; 2) меньше ' + N + '; 3) равно ' + N + ' ? ');
    if (answer === '1') {
        oneNum = N + 1;
    } else if (answer === '2') {
        twoNum = N - 1;
    } else if (answer === '3') {
        break;
    } else {
        N = 'Укажите номер варианта';
        break;
    }
}
while (answer !== '3');
console.log("Ваше число: " + N);
