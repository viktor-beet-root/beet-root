const enterUserName = prompt("Введите свое имя", "");
const welcomeUser = "Привет, " + enterUserName + "!";
console.log("Задание 1", welcomeUser);

const enterUserAge = +prompt("Укажите год Вашего рождения", "");
let currentYear = 2020;
const userAge = currentYear - enterUserAge;
console.log("Задание 2", userAge);

const squareSide = +prompt("Укажите размер стороны квадрата", "");
const squareSidesQuantity = 4;
const squarePerimetr = squareSide * squareSidesQuantity;
console.log("Задание 3", squarePerimetr);

const radius = +prompt("Введите радиус окружности", "");
const degree = 2;
const circleSquare = ~~(Math.PI * radius ** degree);
console.log("Задание 4", circleSquare);

const cityDistance = +prompt("Введите расстояние между городами (в км)", "");
const travelTime = +prompt("Введите время, за которое Вы хотите добраться до точки прибытия (в часах)","");
const travelSpeed = cityDistance / travelTime;
console.log("Задание 5", travelSpeed);

const dollarQuantity = +prompt("Долары США", "");
const euroCourse = 0.82;
const euroQuatity = ~~(dollarQuantity * euroCourse);
console.log("Задание 6", euroQuatity);

const flashVolume = +prompt("Введите объем памяти (в Gb)", "");
let fileSize = 812;
const filesQuantity = flashVolume % fileSize;
console.log("Задание 7", filesQuantity, "размером в 812 Mb");

const moneyQuantity = +prompt("Введите сумму денег в кошельке", "");
const enterChocolatePrice = +prompt("Введите сумму 1 шоколадки", "");
const chocolateQuantity = ~~(moneyQuantity / enterChocolatePrice);
const residue = moneyQuantity % enterChocolatePrice;
console.log("Задание 8", chocolateQuantity, "количество шоколадок", "сдача", residue);

const threeNumber = +prompt("Введите трехзначное число", "");
const firstNumber = threeNumber % 10 * 100;
const secondTwoNumbers = ~~(threeNumber / 10);
const secondNumber = secondTwoNumbers % 10 * 10;
const thirdNumber = ~~(secondTwoNumbers / 10);
const fullNumber = firstNumber + secondNumber + thirdNumber;
console.log("задание 9", fullNumber);

const enterMoneySum = +prompt("Введите сумму денег (в грн)", "");
const sumPercent = 0.05;
const quatityOfMonth = 2;
const sumPercentForTwoMonth = sumPercent / quatityOfMonth;
const moneySum = enterMoneySum * sumPercentForTwoMonth + enterMoneySum;
console.log("Задание 10", moneySum);
