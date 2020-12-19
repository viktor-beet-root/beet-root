console.log("Задача №1");
const askedName = prompt("Ваше имя?", "");
const askedNameResult = "Привет, его имя - " + askedName + '!';
console.log(askedNameResult);

console.log("Задача №2");
const askedDateOfBirth = prompt("Дата вашего рожденния?", "");
const currentYear = 2020;
const ageResult = "Ваш возраст " + (currentYear - askedDateOfBirth);
console.log(ageResult);

console.log("Задача №3");
const askedSquareSide = prompt("Введите длину ?", "");
const squareResult = "Периметр " + ((askedSquareSide) * 4);
console.log(squareResult); 

console.log("Задача №4");
const askedCircle = prompt("Введите радиус окружности", "");
const circleResult = "Площадь: " +  (Math.PI * (askedCircle * askedCircle))
console.log(circleResult);

console.log("Задача №5");
const askedDistance = prompt("Сколько километров до пункта назначенния?", "");
const askedTime = prompt("За сколько времени вы хотите дрбраться?", "");
const speedResult = "Для того что бы успеть вовремя, надо двигаться со скоростью: " + (askedDistance / askedTime) + "км/ч." ;
console.log(speedResult);

console.log("Задача №6");
const askedDollar = prompt("Введите количество долларов", "");
const euro = 0.82;
const convertedValue = askedDollar * euro;
const convertedResult = "За " + askedDollar + " долларов, вы получите " + convertedValue.toFixed(2) + " евро";
console.log(convertedResult);

console.log("Задача №7");
const askedUsbSize = prompt("Укажите объем флешки в Гб", "");
const usbSizeMb = askedUsbSize * 1024;
const fileSize = 820;
const spaceSpare = usbSizeMb / fileSize;
const spaceResult = "На флешку с размером " + askedUsbSize + " ГБ " + "поместится " + Math.floor(spaceSpare) + " файлов(a) размером 820 МБ";
console.log(spaceResult);

console.log("Задача №8");
const askedMoney = prompt("Сколько денег у Вас в кошельке?", "");
const askedChocolate = prompt("Сколько стоит шоколадка?", "");
const qtyChocolate = askedMoney / askedChocolate;
const change = askedMoney % askedChocolate;
const chocolateResult = "Вы получите " + Math.floor(qtyChocolate) + ' шоколадки, Ваша сдача ' + change.toFixed(2) + ' грн';
console.log(chocolateResult); 

console.log("Задача №9");
let askedNumber = prompt("Введите трехзначное число", "");
const firstNumber = askedNumber % 10;
const secondNumber = ((askedNumber % 100) - firstNumber) / 10;
const thirdNumber = (askedNumber - (askedNumber % 100)) / 100;
const reverseResult = "Перевернутое число: " + firstNumber + secondNumber + thirdNumber;
console.log(reverseResult);

console.log("Задача №10");
const askedDeposit = prompt("Введите сумму депозита", "");
const rateDeposit = (0.05 / 365) * 60;
const valueDeposit = askedDeposit * rateDeposit;
const depositResult = "Вы заработаете " + valueDeposit.toFixed(2) + " грн";
console.log(depositResult);
