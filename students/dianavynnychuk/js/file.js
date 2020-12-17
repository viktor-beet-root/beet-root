let userName = prompt("Ваше имя?", "");
alert(`Привет, ${userName}!`);

let birthdayYear = prompt("Вкажіть дату Вашого народження", "");
const thisYear = 2020;
let age = thisYear - birthdayYear;
alert(age);

let sideSquare = prompt("Вкажіть довжину сторони квадрата ", "");
let pSquare = sideSquare * 4;
alert(pSquare);

let radius = prompt("Вкажіть радіус", "");
let sCircle = 3.14 * (radius ** 2);
alert(sCircle);

let distance = prompt("Вкажіть відстань між містами в км", "");
let time = prompt("Вкажіть час, за який Ви хочете добратись до місця", "");
let rapidity = distance / time;
alert(rapidity + "км/год");

let dolars = prompt("Вкажіть кількість доларів", "");
const exchange = 0.82;
let euro = dolars * exchange;
alert(euro);

let dolars = prompt("Вкажіть обєм флешки в ГБ", "");
const size = 820;
let resalt = dolars * 1024 / 820;
alert(resalt);

let amountWallet = prompt("Вкажіть суму грошей в гаманці", "");
let amountChocolate = prompt("Вкажіть ціну шоколадки", "");
let chocolates = amountWallet / amountChocolate;
let chocolates2 = Math.trunc(chocolates);
let rest = chocolates - chocolates2;
alert("Ви можете купити " + chocolates2 + " шоколадок і у вас залишиться " + rest + " грн.");

let number = prompt("Вкажіть тризначне число", "");
alert(number[2] + number[1] + number[0]);

let sume = prompt("Вкажіть суму вклада на", "");
let procent = sume * 0.05 * 60 / 365;
alert(procent);
