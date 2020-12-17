console.log("Задача №1");
const askedName = prompt("Ваше имя?", "");
let askedNameResult = askedName;
console.log("Привет, его имя - " + askedNameResult + '!');

console.log("Задача №2");
const askedDateOfBirth = prompt("Дата вашего рожденния?", "");
const currentYear = 2020;
let ageResult = currentYear - askedDateOfBirth;
console.log("Ваш возраст " + ageResult);

console.log("Задача №3");
const askedSquareSide = prompt("Введите длину ?", "");
let squareResult = ((askedSquareSide) * 4);
console.log("Периметр" + squareResult); 

console.log("Задача №4");
const askedCircle = prompt("Введите радиус окружности", "");
let piNumber = 3.14;
let circleResult = (piNumber * (askedCircle * askedCircle))
console.log("Площадь: " + circleResult);

console.log("Задача №5");
const askedDistance = prompt("Сколько километров до пункта назначенния?", "");
const askedTime = prompt("За сколько времени вы хотите дрбраться?", "");
let speedResult = askedDistance / askedTime;
console.log("Для того что бы успеть вовремя, надо двигаться со скоростью: " + speedResult + "км/ч.");

console.log("Задача №6");
const askedDollar = prompt("Введите количество долларов", "");
const euro = 0.82;
let convertedResult = askedDollar * euro;
console.log("За " + askedDollar + " долларов, вы получите " + convertedResult.toFixed(2) + " евро");

console.log("Задача №7");
const askedUsbSize = prompt("Укажите объем флешки в Гб", "");
let usbSizeMb = askedUsbSize * 1024;
const fileSize = 820;
let spaceResult = usbSizeMb / fileSize;
console.log("На флешку с размером " + askedUsbSize + " ГБ " + "поместится " + Math.floor(spaceResult) + " файлов(a) размером 820 МБ");

console.log("Задача №8");
const askedMoney = prompt("Сколько денег у Вас в кошельке?", "");
const askedChocolate = prompt("Сколько стоит шоколадка?", "");
let qtyChocolate = askedMoney / askedChocolate;
let change = askedMoney % askedChocolate;
console.log("Вы получите " + Math.floor(qtyChocolate) + ' шоколадки, Ваша сдача ' + change.toFixed(2) + ' грн'); 

console.log("Задача №9");
const askedNubmer = prompt("Введите трехзначное число", "");
let reversedNumber = askedNubmer[2] + askedNubmer[1] + askedNubmer[0];
console.log("Ваше перевернутое число: " + reversedNumber);

console.log("Задача №10");
const askedDeposit = prompt("Введите сумму депозита", "");
const rateDeposit = (0.05 / 365) * 60;
let valueDeposit = askedDeposit * rateDeposit;
console.log("Вы заработаете " + valueDeposit.toFixed(2) + " грн");
