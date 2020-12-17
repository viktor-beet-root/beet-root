console.log ('Задание 1.1 (имя)');
const userName = prompt ('What is your name?', '');
console.log (`Hello ${userName} !`);

console.log ('Задание 1.2 (возраст)');
const birthYear = prompt ('What is your year of bith?', '');
const currentYear = 2020;
console.log (`Your age is ${currentYear - birthYear}`);

console.log ('Задание 1.3 (периметр квадрата)');
const squareSide = prompt ('Pls enter square side', '');
const squarePerimetr = squareSide * 4;
console.log (`Perimetr is ${squarePerimetr}`);

console.log ('Задание 1.4 (площадь круга)');
const radius = prompt ('Enter circle radius!', '');
const circleSquare = Math.PI * radius ** 2;
console.log (`Circle square is ${circleSquare}`);

console.log ('Задание 1.5 (посчитать скорость)');
const distance = prompt ('Enter distance between cities, km', '');
const time = prompt ('How many hours do you have?', '');
const speed = distance / time;
console.log (`Your speed should be ${speed} km per hour`);

console.log ('Задание 1.6 (конвертер валют)');
const dollarAmount = prompt ('How many dollars need to convert?', '');
const rate = 0.85;
const euroAmount = dollarAmount * rate;
console.log ('You will have ' + euroAmount + ' euro') ;

console.log ('Задание 1.7 (про флешку)');
const storage = prompt ('How many Gb usb is?', '');
const fileSize = 0.82;
const fileQuantity = Math.trunc(storage / fileSize);
console.log (fileQuantity + ' file(s) can be written to USB');

console.log ('Задание 1.8 (про шоколадки и сдачу)');
let moneyAmount = prompt ('How many dollars do you have?', '');
const chocolatePrice = prompt ('What price of 1 chocolate?', '');
const chocolateQuantity = Math.trunc (moneyAmount / chocolatePrice);
moneyAmount = moneyAmount - (chocolatePrice * chocolateQuantity);
console.log ( 'You can buy ' + chocolateQuantity + ' chocolates');
console.log ('Your change will be ' + moneyAmount + ' $');

console.log ('Задание 1.9 (число задом наперед)');
const numeric = prompt ('Enter 3-digits number', '');
const firstDigit = numeric % 10;
const secondDigit = ((numeric % 100) - firstDigit) / 10;
const thirdDigit = (numeric - (numeric % 100)) / 100;
console.log (`Reverse number is ${firstDigit}${secondDigit}${thirdDigit}`);

console.log ('Задание 1.10 (вывод процентов вклада)');
const depositAmount = prompt ('Enter amount of deposit in $', '');
const interestRate = 0.05 / 12;
const depositTime = 2;
const depositProfit = depositAmount * interestRate * depositTime;
console.log (`Your profit is equal to ${depositProfit} $ for 2 months`);


