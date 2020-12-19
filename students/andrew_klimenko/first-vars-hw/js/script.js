const enterUserName = prompt("Введите свое имя", "");
const welcomeUser = "Привет, " +enterUserName+ "!";
console.log("Задание 1", welcomeUser);

const enterUserAge = +prompt("Укажите Ваш возраст", "");
let currentYear = 2020;
const userAge = currentYear - enterUserAge;
console.log("Задание 2",userAge);

const squareSide = +prompt("Укажите сторону квадрата", "");
const squareSidesQuantity = 4;
const squarePerimetr = squareSide * squareSidesQuantity;
console.log("Задание 3", squarePerimetr);

const radius = +prompt("Введите радиус окружности", "");
const degree = 2;
const circleSquareDrob = Math.PI * radius ** degree;
const circleSquare = ~~circleSquareDrob;
console.log("Задание 4", circleSquare);

const cityDistance = +prompt("Введите расстояние между городами (в км)", "");
const travelTime = +prompt("Введите время, за которое Вы хотите добраться до точки прибытия (в часах)", "");
const travelSpeed = cityDistance / travelTime;
console.log("Задание 5", travelSpeed);

const dollarQuantity = +prompt("Долары США", "");
const euroCourse = 0.82;
const euroQuatityDrob = dollarQuantity * euroCourse;
const euroQuatity = ~~euroQuatityDrob;
console.log("Задание 6", euroQuatity);

const flashVolume = +prompt("Введите объем памяти (в Gb)", "");
let fileSize = 812;
const filesQuantity = flashVolume % fileSize ;
console.log("Задание 7", filesQuantity, "файлов размером в 812 Mb");

const moneyQuantity = +prompt("Введите сумму денег в кошельке", "");
const enterChocolatePrice = +prompt("Введите сумму 1 шоколадки", "");
const chocolateQuantityDrob = moneyQuantity / enterChocolatePrice;
const chocolateQuantity = ~~chocolateQuantityDrob;
const residue = moneyQuantity % enterChocolatePrice;
console.log("Задание 8", "количество шоколадок", chocolateQuantity, "сдача", residue);

const threeNumber = +prompt("Введите трехзначное число", "");
let firstNumber = threeNumber % 10;
firstNumber = firstNumber * 100;
let secondTwoNumbers = threeNumber / 10;
secondTwoNumbers = ~~secondTwoNumbers;
let secondNumber = secondTwoNumbers % 10;
secondNumber = secondNumber * 10;
let thirdNumber = secondTwoNumbers / 10;
thirdNumber = ~~thirdNumber;
const fullNumber = firstNumber + secondNumber + thirdNumber;
console.log("задание 9", fullNumber);

let moneySum = +prompt("Введите сумму денег (в грн)", "");
const sumPercent = 0.05;
const quatityOfMonth = 2;
const sumPercentForTwoMonth = sumPercent / quatityOfMonth;
moneySum = moneySum * sumPercentForTwoMonth + moneySum;
console.log("Задание 10", moneySum);
