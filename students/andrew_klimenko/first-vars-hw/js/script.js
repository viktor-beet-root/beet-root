//старое поисправлял, сейчас буду пытаться 2 последних задания делать
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
console.log("Задание 7", filesQuantity, "размером в 812 Mb");

const moneyQuantity = +prompt("Введите сумму денег в кошельке", "");
const enterChocolatePrice = +prompt("Введите сумму 1 шоколадки", "");
const chocolateQuantityDrob = moneyQuantity / enterChocolatePrice;
const chocolateQuantity = ~~chocolateQuantityDrob;
const residue = moneyQuantity % enterChocolatePrice;
console.log("Задание 8", "количество шоколадок", chocolateQuantity, "сдача", residue);asdasd

/*const threeNumber = +prompt("Введите трехзначное число", "");
const backNumber1 = threeNumber %  10;
const backNumber2Fake = threeNumber % 100;
const backNumber2 = ~~(backNumber2Fake / 10);
const backNumber3 = ~~(threeNumber / 100);
threeNumber = [backNumber1, backNumber2, backNumber3];
console.log("Задание 9", threeNumber);*/
