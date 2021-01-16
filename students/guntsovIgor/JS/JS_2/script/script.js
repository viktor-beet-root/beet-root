console.log('Задание 2.1 (про возраст)');
const age = prompt('how old are you?', '');
if (age < 12) {
  console.log('Kid');
} else if (age >= 12 && age < 18) {
  console.log('Teenager');
}
else if (age >= 18 && age < 60) {
  console.log('Adult');
}
else {
  console.log('Old');
}

console.log('Задание 2.2 (про спецсимвол)');
const key = +prompt('Pls enter key from 0 to 9', '');
switch (key) {
  case 1 :
  console.log(`!`);
  break;
  case 2 :
  console.log(`@`);
  break;
  case 3 :
  console.log(`#`);
  break;
  case 4 :
  console.log(`$`);
  break;
  case 5 :
  console.log(`%`);
  break;
  case 6 :
  console.log(`^`);
  case 7 :
  console.log(`&`);
  break;
  case 8 :
  console.log(`*`);
  break;
  case 9 :
  console.log(`(`);
  break;
  case 0 :
  console.log(`)`);
  break;
  default:
  console.log(`Enter valid number`);
}

console.log('Задание 2.3 (одинаковые цифры в числе)');
const numeric = prompt('Pls enter 3-digit number', '');
const firstDigit = numeric % 10;
const secondDigit = ((numeric % 100) - firstDigit) / 10;
const thirdDigit = (numeric - (numeric % 100)) / 100;
if (firstDigit == secondDigit || firstDigit == thirdDigit || thirdDigit == secondDigit ) {
  console.log('Number contain 2 same digits');
} else {
  console.log('All digits are different');
}

console.log('Задание 2.4 (высокосный год)');
const leapYear = prompt('Pls enter year', '');
if ( (leapYear % 400 == 0 || leapYear % 4 == 0) && (leapYear % 100 !== 0) ) {
  console.log('Year is Visokosnii');
} else {
  console.log('Year is not Visokosnii');
}

console.log('Задание 2.5 (палиндром)');
const numericPalindrom = prompt('Pls enter 5-digit number', '');
const firstDigitPalindrom = numericPalindrom % 10;
const secondDigitPalindrom = ((numericPalindrom % 100) - firstDigitPalindrom) / 10;
const fourthDigitPalindrom = ((numericPalindrom % 10000) - (numericPalindrom % 1000)) / 1000;
const fifthDigitPalindrom = (numericPalindrom - (numericPalindrom % 10000)) / 10000;
if ((firstDigitPalindrom == fifthDigitPalindrom) && (secondDigitPalindrom == fourthDigitPalindrom)) {
  console.log('Its POLINDROM');
} else {
  console.log('Its NOT POLINDROM');
}

console.log('Задание 2.6(1) (конвертер валют)');
const amountUsd = prompt('Pls advise how many USD want to convert', '');
const newCurrency = prompt('Whan cuurenyc you need?', 'eur , uah , pound');
const eurRate = 0.86;
const uahRate = 28;
const poundRate = 0.65;
if (newCurrency === "eur") {
  console.log(`You will have ${amountUsd*eurRate} euro`);
} else if (newCurrency === "uah") {
  console.log(`You will have ${amountUsd*uahRate} uah`);
} else if (newCurrency === "pound") {
  console.log(`You will have ${amountUsd*poundRate} pounds`);
} else {
  console.log(`choose correct currency`)
}

console.log('Задание 2.6(2) (конвертер валют)');
const amountUsd2 = prompt('Pls advise how many USD want to convert', '');
const newCurrency2 = prompt('What curency you need?', 'eur , uah , pound');
const eurRate2 = 0.86;
const uahRate2 = 28;
const poundRate2 = 0.65;
switch (newCurrency2) {
  case "uah" :
  console.log(`You will have ${amountUsd2*uahRate2} uah`);
  break;
  case "eur" :
  console.log(`You will have ${amountUsd2*eurRate2} eur`);
  break;
  case "pound" :
  console.log(`You will have ${amountUsd2*poundRate2} pounds`);
  break;
  default:
  console.log(`Enter valid currency from list`);
}

console.log('Задание 2.7 (сумма товара с учетом скидки)');
const purchaseSum = +prompt('Pls enter amount of your purchase?', '');
const discountSm = 0.03;
const discountMd = 0.05;
const discountLg = 0.07;
if ((purchaseSum >= 200) && (purchaseSum < 300)) {
  console.log(`Your amount is ${purchaseSum-purchaseSum*discountSm} with 3% discount`);
} else if ((purchaseSum >= 300) && (purchaseSum < 500)) {
  console.log(`Your amount is ${purchaseSum-purchaseSum*discountMd} with 5% discount`);
} else if (purchaseSum >= 500) {
  console.log(`Your amount is ${purchaseSum-purchaseSum*discountLg} with 7% discount`);
} else {
  console.log(`Your amount is ${purchaseSum}`)
}

console.log('Задание 2.8 (поместится ли круг в квадрат)');
const circleLenght = +prompt('Pls enter lenght of circle,cm', '');
const squarePerimetr = +prompt('Pls enter perimetr of square,cm', '');
console.log(circleLenght / Math.PI < squarePerimetr / 4 ? "Circle can be fitted" : "Circle can NOT be fitted");

console.log('Задание 2.9 (TEST)');
const question1 = prompt('lg100=?     a: 10;    b:2;    c=100;', 'a,b,c');
const question2 = prompt('ln(e)=?      a: 1;     b:2;    c=3;', 'a,b,c');
const question3 = prompt('sin30deg=?      a: 1;    b:2;     c=1/2;', 'a,b,c');
let result = 0;
if (question1 === "b") {
  result += 2;
}
if (question2 === "a") {
  result += 2;
}
if (question3 === "c") {
  result += 2;
}
console.log(`You got ${result} points!`);

console.log('Задание 2.10 (Календарь)');
const day = +prompt('Pls enter date', '');
const month = +prompt('Pls enter month', '');
const year = +prompt('Pls enter year', '');
let date = day + "." + month+"." + year;
if ((day+1 === 32) && (month % 2 !== 0)) {
  date = 1 + "." + (month+1) + "." +year;
  console.log(date);
}
if ((day+1 === 32) && (month === 12) ) {
  date = 1 + "." + 1 + "."  + (year+1);
  console.log(date);
} 
if ((day+1 === 31) && (month % 2 === 0)) {
  date = 1 + "." + (month+1) + "." +year;
  console.log(date);
}
if ((day+1 === 29) && (month === 2)) {
  date = 1 + "." + (month+1) + "." + year;
  console.log(date);
} else {
  date = (day+1) + "." + month + "." + year;
  console.log(date);
}
