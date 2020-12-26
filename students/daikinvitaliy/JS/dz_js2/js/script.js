console.log("Задание 1");
const manYears = prompt("Укажите ваш возвраст", "");
if (manYears <= 2) {
    console.log("ребенок");
} else if (manYears >= 12 && manYears < 18) {
    console.log("подростком");
} else if (manYears >= 18 && manYears < 60) {
    console.log("взрослый");
} else if (manYears > 60) {
    console.log("пенсионер");
} else {
    console.log("большой ребенок");
}
console.log("Задание 2");
const result = +prompt("Введите число от 0 до 9", "");
if (result === 0) {
    console.log(")");
} else if (result === 1) {
    console.log("!");
} else if (result === 2) {
    console.log("@");
} else if (result === 3) {
    console.log("#");
} else if (result === 4) {
    console.log("$");
} else if (result === 5) {
    console.log("%");
} else if (result === 6) {
    console.log("^");
} else if (result === 7) {
    console.log("&");
} else if (result === 8) {
    console.log("*");
} else {
    console.log("(");
}
console.log("Задание 3");
let threeDigit = prompt("ведите трехзначное сисло", "");
const firstDigit = threeDigit % 10;
threeDigit = Math.trunc(threeDigit / 10);
const secondDigit = threeDigit % 10;
threeDigit = Math.trunc(threeDigit / 10);
const thirdDigit = threeDigit % 10;
threeDigit = Math.trunc(threeDigit / 10);
if (
    firstDigit === secondDigit ||
    secondDigit === thirdDigit ||
    thirdDigit === firstDigit
) {
    console.log("Цифры повторяються");
} else {
    console.log("Цифры Не повторяються");
}
console.log("Задание 4");
const inputYear = prompt("Ведите год", "");

if (inputYear % 100 === 0 && inputYear % 4 != 0) {
    console.log("не высокосный год");
} else {
    console.log("высокостный год");
}

console.log("Задание 5");
let fiveDigit = prompt("ведите пятирозрядное число", "");
let original = fiveDigit;
let digit = 0;
let reversed = 0;
while (fiveDigit) {
    digit = fiveDigit % 10;
    reversed = reversed * 10 + digit;
    fiveDigit = Math.trunc(fiveDigit / 10);
}
if (original === reversed) {
    console.log("Палиндром");
} else {
    console.log("Не палиндром");
}
console.log("Задание 6");
const dolars = prompt("сумма в доларах", "");
const currency = prompt("выберите валюту (eur, uan, azn)", "");
const eur = 0.82;
const uan = 27.9;
const azn = 1.7;
const eurs = dolars * eur;
const uans = dolars * uan;
const azns = dolars * azn;
if (currency === "eur") {
    console.log(eurs);
} else if (currency === "uan") {
    console.log(uans);
} else if (currency === "azn") {
    console.log(azns);
}
console.log("Задание 7");
const price = prompt("сумма покупки", "");
let actualPrice = price;
if (price >= 200 && price < 300) {
    actualPrice = price - price * 0.03;
    console.log("к оплате", actualPrice);
} else if (price >= 300 && price < 500) {
    actualPrice = price - price * 0.05;
    console.log("к оплате", actualPrice);
} else if (price > 500) {
    actualPrice = price - price * 0.07;
    console.log("к оплате", actualPrice);
} else {
    console.log("к оплате", actualPrice);
}
console.log("Задание 8");
const circle = prompt("ведите длину окружности", "");
const perimeterSquare = prompt("ведите периметр квадрата", "");
const circleRadius = circle / Math.PI / 2;
const squareHalfSide = perimeterSquare / 4 / 2;
if (circleRadius <= squareHalfSide) {
    console.log("Окружность поместится  в квадрат");
} else {
    console.log("Окружность НЕ поместится  в квадрат");
}
console.log("Задание 9");
let correctAnswer = 0;
const firstQuestion = prompt(
    "Назовите столицу Украины: Львов, Киев, Харьков",
    ""
);
const capital = "Киев";
if (firstQuestion === capital) {
    correctAnswer = 2;
}
const secondQuestion = prompt(
    "Кто такие Том и Джерри? : Кот и Мышь, Слон и Мышь, Кот и Тигр",
    ""
);
const cartoon = "Кот и Мышь";
if (secondQuestion === cartoon) {
    correctAnswer = correctAnswer + 2;
}
const thirdQuestion = prompt("Сколько вершин у тетраэдра? :6, 4, 8", "");
const numberVertices = "4";
if (thirdQuestion === numberVertices) {
    correctAnswer = correctAnswer + 2;
}
console.log("Вы набрали " + correctAnswer + " балов!");
console.log("Задание 10");

let day = +prompt("Введите день:", "");
let month = +prompt("Введите месяц:", "");
let year = +prompt("Введите год:", "");

let nextDay = day + 1;

let daysInGivenMonth = 31;

switch (month) {
    case 2:
        if (year % 4 === 0 && year % 100 !== 0) {
            daysInGivenMonth = 29;
        } else {
            daysInGivenMonth = 28;
        }

        break;
    case 4:
    case 6:
    case 9:
    case 11:
        daysInGivenMonth = 30;
        break;
}

if (nextDay > daysInGivenMonth) {
    nextDay = 1;
    let nextMonth = month + 1;
    if (nextMonth > 12) {
        nextMonth = 1;
        let nextYear = year + 1;

        console.log(
            "Следующий день: " + nextDay + ", " + nextMonth + ", " + nextYear
        );
    } else {
        console.log(
            "Следующий день: " + nextDay + ", " + nextMonth + ", " + year
        );
    }
} else {
    console.log("Следующий день: " + nextDay + ", " + month + ", " + year);
}
