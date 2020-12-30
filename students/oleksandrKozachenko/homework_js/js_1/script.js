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
const conventMb = 1024;
const fileSize = 820;
const amountFiles = Math.floor(space * conventMb / fileSize);
console.log(amountFiles);

console.log("Task 8");
const sumMoney = prompt('Enter sumMoney', '');
const chocolatePrice = prompt('Enter chocolatePrice', '');
const amountChocolate = Math.floor(sumMoney / chocolatePrice);
const balance = sumMoney % amountChocolate;
console.log(amountChocolate, balance);

console.log("Task 9/1");
const someNumber = prompt('Enter sumNumber XXX', '');
const number3 = someNumber[2];
const number2 = someNumber[1];
const number1 = someNumber[0];
const newNumber = number3 + number2 + number1;
console.log(someNumber, newNumber);

console.log("Task 9/2");
const inputNum = prompt('Enter inputNum XXX', '');
const outputNum1 = inputNum % 10;
console.log(outputNum1);
const outputNum2 = (inputNum - outputNum1) / 10 % 10;
console.log(outputNum2);
const outputNum3 = Math.floor(inputNum / 100);
console.log(outputNum3);
const outputNum = outputNum1 * 100 + outputNum2 * 10 + outputNum3;
console.log(inputNum, outputNum);

console.log("Task 112120");
const deposit = prompt('Enter deposit', '');
const rate = 5;
const duration = 2;
const percent = deposit * rate / 100 * duration / 12;
console.log(percent);
