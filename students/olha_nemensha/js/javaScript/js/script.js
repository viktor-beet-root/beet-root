console.log ("Задание 1");
const userName = prompt("Enter your name", "");
console.log ("Hello, " + userName + "!");

console.log ("Задание 2");
const year = 2020;
const yearOfBirth = +prompt("Please, enter year of your birth", "");
const age = year - yearOfBirth;
console.log ("Your age is " + age);

console.log ("Задание 3");
const side = +prompt("Enter the length of the side of the square", "");
const perimeter = 4 * side;
console.log ("Perimeter is " + perimeter);

console.log ("Задание 4");
const radius = +prompt("Enter the radius of the circle", "");
const pi = 3.14;
const square = pi * radius ** 2;
console.log ("Square is " + square);

console.log ("Задание 5");
const dist = +prompt("Enter distance between cities", "");
const hours = +prompt("Enter hours ", "");
const spead = dist / hours;
console.log ("Your spead must be " + spead.toFixed(2) + " kilometers per hour");

console.log ("Задание 6");
const dollar = +prompt("Enter your amount in dollars", "");
const course = 1.22;
const euro = dollar / 1.22;
console.log (`Your have ${euro.toFixed(2)} euro`);

console.log ("Задание 7");
const gigabyte = +prompt("Enter the volume of the flash drive ", "");
const numberOfFiles = Math.floor (gigabyte * 1000 / 820);
console.log (`Number of files is ${numberOfFiles}`);

console.log ("Задание 8");
let money = +prompt("Enter sum of your money ", "");
const costOfChoco = +prompt("Enter cost of Choco ", "");
const numberOfChoco = Math.floor (money / costOfChoco);
money = money - numberOfChoco * costOfChoco;
console.log (`You can buy ${numberOfChoco} and you will have ${money.toFixed(2)}`);

console.log ("Задание 9");
const n = +prompt("Enter XXX number ", "");
const lastNum = n % 10;
const secondNum = (n % 100 - n % 10) / 10;
const firstNum = Math.floor(n / 100);
console.log ("New number is " + lastNum + secondNum + firstNum);

console.log ("Задание 10");
const sumOfMoney = +prompt("Enter your sum", "");
const percent = 5 / 100 / 12;
const numOfMon = 2;
const percentSum = percent.toFixed(4) * numOfMon * sumOfMoney;
console.log ("You will have " + percentSum.toFixed(2));
