let enterUserName = +prompt("Введите свое имя", "");
const welcomeUser = "Привет,"+enterUserName+"!";
console.log("Задание 1", welcomeUser);

let enterUserAge = +prompt("Укажите Ваш возраст", "");
const currentYear = 2020;
const userAge = currentYear - enterUserAge;
console.log("Задание 2",userAge);

let squareSide = +prompt("Укажите сторону квадрата", "");
const squarePerimetr = squareSide * 4;
console.log("Задание 3", squarePerimetr);

let radius = +prompt("Введите радиус окружности", "");
const piNumber = 3.14;
const circleSquare = piNumber * radius ** 2;
console.log("Задание 4", ~~circleSquare);

let cityDistance = +prompt("Введите расстояние между городами (в км)", "");
let travelTime = +prompt("Введите время, за которое Вы хотите добраться до точки прибытия (в часах)", "");
const travelSpeed = cityDistance / travelTime;
console.log("Задание 5", travelSpeed);

let dollarQuantity = +prompt("Долары США", "");
let euroQuatity = dollarQuantity * 0.82;
console.log("Задание 6", euroQuatity);

let flashVolume = +prompt("Введите объем памяти (в Gb)", "");
let fileSize = 812;
const filesQuantity = flashVolume % fileSize ;
console.log("Задание 7", filesQuantity, "размером в 812 Mb");

let moneyQuantity = +prompt("Введите сумму денег в кошельке", "");
let enterChocolatePrice = +prompt("Введите сумму 1 шоколадки", "");
let chocolateQuantity = moneyQuantity / enterChocolatePrice;
const residue = moneyQuantity % enterChocolatePrice;
console.log("Задание 8", "количество шоколадок", ~~chocolateQuantity, "сдача", residue);

//можно ли сделать через Array? будет ли считаться?
let threeNumber = +prompt("Введите трехзначное число", "");
const backNumber1 = threeNumber %  10;
const backNumber2Fake = threeNumber % 100;
const backNumber2 = ~~(backNumber2Fake / 10);
const backNumber3 = ~~(threeNumber / 100);
threeNumber = [backNumber1, backNumber2, backNumber3];
console.log("Задание 9", threeNumber);
//одно еще не сделал, завтра скину последнее

