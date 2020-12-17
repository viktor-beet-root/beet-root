console.log("Task 1");
const userName = prompt('Enter your name', '');
console.log("Hello " + userName);

console.log("Task 2");
const userYear = prompt('Enter your year', '');
const currentYear = 2020;
const age = currentYear - userYear;
console.log(age);

console.log("Task 3");
const lengthSquare = prompt('Enter lengthSquare', '');
const perimeter = lengthSquare * 4;
console.log(perimeter);

console.log("Task 4");
const radius = prompt('Enter radius', '');
const square = Math.PI * radius ** 2;
console.log(square);

console.log("Task 5");
const distance = prompt('Enter distance', '');
const time = prompt('Enter time', '');
const speed = distance / time;
console.log(speed);

console.log("Task 6");
const dollars = prompt('Enter dollars', '');
const exchangeRates = 0.82;
const euro = dollars * exchangeRates;
console.log(euro);

console.log("Task 7");
const space = prompt('Enter space', '');
const amountFiles = Math.floor(space * 1024 / 820);
console.log(amountFiles);

console.log("Task 8");
const sumMoney = prompt('Enter sumMoney', '');
const chocolatePrice = prompt('Enter chocolatePrice', '');
const amountChocolate = Math.floor(sumMoney / chocolatePrice);
const balance = sumMoney % amountChocolate;
console.log(amountChocolate, balance);

console.log("Task 9");
const someNumber = prompt('Enter sumNumber XXX', '');
const number3 = someNumber[2];
console.log(someNumber, number3);
const number2 = someNumber[1];
const number1 = someNumber[0];
const newNumber = number3 + number2 + number1;
console.log(someNumber, newNumber);

console.log("Task 10");
const deposit = prompt('Enter deposit', '');
const rate = 5;
const duration = 62d;
const percent = deposit * rate / 100 * duration / 12;
console.log(percent);
