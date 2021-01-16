console.log ("Задание 1");
const userName = prompt("Enter your name", "");
const usreNameCon = "Hello, " + userName + "!";
console.log (usreNameCon);

console.log ("Задание 2");
const year = 2020;
const yearOfBirth = +prompt("Please, enter year of your birth", "");
const age = year - yearOfBirth;
const ageCon = "Your age is " + age;
console.log (ageCon);

console.log ("Задание 3");
const side = +prompt("Enter the length of the side of the square", "");
const perimeter = 4 * side;
const perimeterCon = "Perimeter is " + perimeter;
console.log (perimeterCon);

console.log ("Задание 4");
const radius = +prompt("Enter the radius of the circle", "");
const square = Math.PI * radius ** 2;
const squareCon = "Square is " + square.toFixed(2);
console.log (squareCon);

console.log ("Задание 5");
const dist = +prompt("Enter distance between cities", "");
const hours = +prompt("Enter hours ", "");
const spead = dist / hours;
const speadCon = "Your spead must be " + spead.toFixed(2) + " kilometers per hour";
console.log (speadCon);

console.log ("Задание 6");
const dollar = +prompt("Enter your amount in dollars", "");
const course = 1.22;
const euro = dollar / 1.22;
const amount = `Your have ${euro.toFixed(2)} euro`;
console.log (amount);

console.log ("Задание 7");
const gigabyte = +prompt("Enter the volume of the flash drive ", "");
const numberOfFiles = Math.floor (gigabyte * 1000 / 820);
const numberOfFilesCon = `Number of files is ${numberOfFiles}`;
console.log (numberOfFilesCon);

console.log ("Задание 8");
let money = +prompt("Enter sum of your money ", "");
const costOfChoco = +prompt("Enter cost of Choco ", "");
const numberOfChoco = Math.floor (money / costOfChoco);
money = money - numberOfChoco * costOfChoco;
const answer =`You can buy ${numberOfChoco} and you will have ${money.toFixed(2)}`;
console.log (answer);

console.log ("Задание 9");
const num = +prompt("Enter XXX number ", "");
const lastNum = num % 10;
const secondNum = (num % 100 - num % 10) / 10;
const firstNum = Math.floor(num / 100);
const newNum = "New number is " + lastNum + secondNum + firstNum;
console.log (newNum);

console.log ("Задание 10");
const sumOfMoney = +prompt("Enter your sum", "");
const percent = 5 / 100 / 12;
const numOfMon = 2;
const percentSum = percent.toFixed(4) * numOfMon * sumOfMoney;
const percentSumCon = "You will have " + percentSum.toFixed(2);
console.log (percentSumCon);
