console.log("Завдання 1");
let input = true;
let nStrt = 0;
let nEnd = 0;
while (input) {
    nStrt = +prompt("введите началао диапозона, число", "");
    nEnd = +prompt("введите конец диапозона, число", "");
    if (nStrt < nEnd) {
        input = false;
    } else {
        console.log("Неправильный диапазон!");
    }
}

let sum = 0;
for (i = nStrt; i <= nEnd; ++i) {
    sum = sum + i;
}
console.log("Сумма всех чисел =", sum);
console.log("Завдання 2");
let firstNumber = Math.trunc(+prompt("Введите первое число", ""));
let secondNumber = Math.trunc(+prompt("Введите второе число", ""));
while (firstNumber != secondNumber) {
    if (firstNumber > secondNumber) {
        let tmp = firstNumber;
        firstNumber = secondNumber;
        secondNumber = tmp;
    }

    secondNumber = secondNumber - firstNumber;
}

console.log("Наибольший общий делитель: " + firstNumber);
console.log("Завдання 3");
const num = +prompt("ведите число", "");
let dividers = "Делители: ";
for (i = Math.ceil(num / 2); i >= 1; i--) {
    if (num % i === 0) {
        dividers = dividers + i;
        if (i != 1) {
            dividers = dividers + ", ";
        }
    }
}
console.log(dividers);
console.log("Завдання 4");
let enteredNumber = +prompt("ведите число", "");
let counter = 0;
while (enteredNumber) {
    enteredNumber = Math.trunc(enteredNumber / 10);
    ++counter;
}
console.log(counter);
console.log("Завдання 5");
let poz = 0;
let neg = 0;
let zrio = 0;
let even = 0;
let uneven = 0;
for (i = 0; i < 10; ++i) {
    const checkingNumbers = +prompt(
        "введите 10 чисел по очереди №" + (i + 1),
        ""
    );
    if (checkingNumbers === 0) {
        zrio = zrio + 1;
    } else if (checkingNumbers > 0) {
        poz = poz + 1;
    } else if (checkingNumbers < 0) {
        neg = neg + 1;
    }
    if (checkingNumbers % 2) {
        even = even + 1;
    } else {
        uneven = uneven + 1;
    }
}
console.log("нулей ", zrio);
console.log("позитивных чисел ", poz);
console.log("негативных чисел ", neg);
console.log("не четных чисел ", uneven);
console.log("четных чисел ", even);
console.log("Завдання 6");
let result = 0;
let calcСycle = true;
while (calcСycle) {
    const aNamber = +prompt("введите первое число", "");
    const bNamber = +prompt("введите второе число", "");
    const sign = prompt("введите символ (*,+,-, /)", "");
    if (sign === "*") {
        result = aNamber * bNamber;
    } else if (sign === "/") {
        result = aNamber / bNamber;
    } else if (sign === "+") {
        result = aNamber + bNamber;
    } else if (sign === "-") {
        result = aNamber - bNamber;
    }
    console.log(result);
    const qvechten = confirm("еще? да или нет", "");
    if (qvechten === false) {
        calcСycle = false;
    }
}
console.log("Завдання 7");
let introduce = +prompt("введите число", "");
let shiftNambr = +prompt("на сколько чисел сдвинуть?", "");
for (i = shiftNambr - 1; i >= 0; --i) {
    let indexZ = 0;
    let indexY = 1;
    let intro = introduce;
    while (intro > 9) {
        indexZ = indexZ + indexY * (intro % 10);
        indexY = indexY * 10;
        intro = Math.trunc(intro / 10);
    }
    introduce = indexZ * 10 + intro;
}
console.log(introduce);

console.log("Завдання 8");
{
    let rte = 0;
    let den = "";
    let result = true;
    while (result === true) {
        switch (rte) {
            case 0:
                den = "понидельник";
                break;
            case 1:
                den = "вторник";
                break;
            case 2:
                den = "среда";
                break;
            case 3:
                den = "четверг";
                break;
            case 4:
                den = "пятница";
                break;
            case 5:
                den = "субота";
                break;
            case 6:
                den = "воскрисение";
                break;
        }
        rte = rte + 1;
        if (rte > 6) {
            rte = 0;
        }
        result = confirm(den + ": продолжить?", "");
    }
}
console.log("Завдання 9");
for (let i = 2; i <= 9; ++i) {
    console.log("таблица умножения на " + i);
    for (let j = 1; j <= 10; ++j) {
        const result = i * j;
        console.log(i + " * " + j + " = " + result);
    }
}
console.log("Завдання 10");
let n = 50;
let start = 0;
let finish = 100;
let comp = "";
while ((comp = prompt("это число " + n + "  введите, <, >, =")) !== "=") {
    if (comp === "<") {
        finish = n - 1;
    } else if (comp === ">") {
        start = n + 1;
    }
    n = start + Math.floor((finish - start) / 2);
}
console.log("это ваше загаданное число " + n);
