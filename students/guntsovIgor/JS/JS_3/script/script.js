console.log("Задание 3.1");
const start = +prompt("nachalo daipozona");
const end = +prompt("konec diapozona");
let sum = 0;
const x = Math.max(start, end);
let i = Math.min(start, end);
while (i <= x) {
    sum = sum + i;
    i++;
}
console.log(sum);

console.log("Задание 3.2");
const num1 = +prompt("chislo 1");
const num2 = +prompt("chislo 2");
let min = Math.min(num1, num2);
let k = min;
while (k <= min) {
    if (num1 % k === 0 && num2 % k === 0) {
        console.log(k);
        break;
    }
    k--;
}

console.log("Задание 3.3");
const digit = +prompt("Vvedi chislo");
let result = "";
let sumDel = 0;
while (sumDel < digit) {
    if (num1 % sumDel === 0) {
        result = result + " " + sumDel;
    }
    sumDel++;
}
console.log(result);

console.log("Задание 3.4");
let digit3 = +prompt("vvedi chislo");
let count = 0;
do {
    digit3 = digit3 / 10;
    count++;
} while (digit3 >= 1);
console.log(count);

console.log("Задание 3.5");
let resultPositive = 0;
let resultNegative = 0;
let resultZero = 0;
let even = 0;
let notEven = 0;
let j;
for (let i = 0; i <= 9; i++) {
    j = +prompt("vvedi chislo");
    if (j > 0) {
        resultPositive++;
    }
    if (j < 0) {
        resultNegative++;
    }
    if (j === 0 || j === -0) {
        resultZero++;
    }
    if (j % 2 === 0) {
        even++;
    } else {
        notEven++;
    }
}
console.log("Negative: " + resultNegative);
console.log("Positive: " + resultPositive);
console.log("0: " + resultZero);
console.log("Even: " + even);
console.log("Not even: " + notEven);

console.log("Задание 3.6");
do {
    let a = +prompt("Chislo 1");
    let b = +prompt("Chislo 2");
    let c = prompt("Znak viberi - + / *");
    let total = 0;
    switch (c) {
        case "+":
            total = a + b;
            console.log(total);
            break;
        case "-":
            total = a - b;
            console.log(total);
            break;
        case "/":
            total = a / b;
            console.log(total);
            break;
        case "*":
            total = a * b;
            console.log(total);
        default:
            break;
    }
} while (confirm("Eshe primer?"));

console.log("Задание 3.7");
const digit2 = prompt("vvedi chsilo", "");
const move = +prompt("na skolko sdvinyt", "");
let oldResult;
let newResult;
oldResult = ~~(digit2 / 10 ** (digit2.length - move));
newResult = String(digit2 % 10 ** (digit2.length - move)) + String(oldResult);
console.log(newResult);

console.log("Задание 3.8");
let day = "";
let counter = 0;
let modulo;
do {
    counter++;
    modulo = counter % 7;
    switch (modulo) {
        case 1:
            day = "Monday";
            break;
        case 2:
            day = "Tuesday";
            break;
        case 3:
            day = "Wednesday";
            break;
        case 4:
            day = "Thursday";
            break;
        case 5:
            day = "Friday";
            break;
        case 6:
            day = "Saturday";
            break;
        case 0:
            day = "Sunday";
            break;
    }
} while (confirm(day + ". " + "Next day?"));

console.log("Задание 3.9");
let multiple = "";
for (let i = 2; i <= 9; i++) {
    for (let j = 1; j <= 10; j++) {
        multiple = i + " x " + j + " = " + i * j;
        console.log(multiple);
    }
}

console.log("Задание 3.10");
alert("Zagadai chislo ot 0 do 100");
let N1 = 0;
let N2 = 100;
let N;
let answer;
do {
    N = Math.floor((N1 + N2) / 2);
    answer = prompt("Vashe chislo   '>'   ,   '<'   ili   '=='   " + N + " ?", "");
    switch (answer) {
        case ">":
            N1 = N + 1;
            break;
        case "<":
            N2 = N - 1;
            break;
        case "==":
            console.log(N + " vashe chislo!!!");
            break;
        default:
            console.log("SDELAI VIBOR " + "\n");
    }
} while (answer !== "==");
