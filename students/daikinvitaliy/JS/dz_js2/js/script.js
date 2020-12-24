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
const result = prompt("Введите число от 0 до 9", "");
if (result == 0) {
  console.log(")");
} else if (result == 1) {
  console.log("!");
} else if (result == 2) {
  console.log("@");
} else if (result == 3) {
  console.log("#");
} else if (result == 4) {
  console.log("$");
} else if (result == 5) {
  console.log("%");
} else if (result == 6) {
  console.log("^");
} else if (result == 7) {
  console.log("&");
} else if (result == 8) {
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
  firstDigit == secondDigit ||
  secondDigit == thirdDigit ||
  thirdDigit == firstDigit
) {
  console.log("Цифры повторяються");
} else {
  console.log("Цифры Не повторяються");
}
console.log("Задание 4");
const year = prompt("Ведите год", "");
if (year % 4 == 0) {
  if (year % 100 == 0) {
    console.log("не высокосный год");
  } else {
    console.log("высокостный год");
  }
} else {
  console.log("не високосный год");
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
if (original == reversed) {
  console.log("Палиндром");
} else {
  console.log("Не палиндром");
}
console.log("Задание 6");
const dolars = prompt("сумма в доларах", "");
const currency = prompt("выберите валюту (eur, uan, azn)", "");
let eur = 0.82;
let uan = 27.9;
let azn = 1.7;
if (currency == "eur") {
  eur = dolars * eur;
  console.log(eur);
} else if (currency == "uan") {
  uan = dolars * uan;
  console.log(uan);
} else if (currency == "azn") {
  azn = dolars * azn;
  console.log(azn);
}
console.log("Задание 7");
let price = prompt("сумма покупки", "");
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
const DaysInMoths = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

let Day = +prompt("Введите день:", "");
let Month = +prompt("Введите месяц:", "");
let Year = +prompt("Введите год:", "");

let NextDay = Day + 1;

let DaysInGivenMonth = DaysInMoths[Month - 1];

if (Month == 2) {
  if (Year % 4 === 0 && Year % 100 !== 0) {
    DaysInGivenMonth = DaysInGivenMonth + 1;
  }
}

if (NextDay > DaysInGivenMonth) {
  NextDay = 1;
  let NextMonth = Month + 1;

  if (NextMonth > 12) {
    NextMonth = 1;
    let NextYear = Year + 1;

    console.log(
      "Следующий день: " + NextDay + ", " + NextMonth + ", " + NextYear
    );
  } else {
    console.log("Следующий день: " + NextDay + ", " + NextMonth + ", " + Year);
  }
} else {
  console.log("Следующий день: " + NextDay + ", " + Month + ", " + Year);
}
