console.log ("Задание 1");
const userAge = prompt("Enter your age", "");
if ((userAge > 0) && (userAge <= 12)) { 
    console.log ("You are child");
} else if((userAge > 12) && (userAge <= 18)){
    console.log ("You are teenager");
}
else if((userAge > 18) && (userAge <= 60)){
    console.log ("You are adult");
} else 
    {console.log ("You are retiree");
}

console.log ("Задание 2");
const userNum = +prompt("Enter number from 0..9", "");
switch (userNum){
    case 1:
        console.log ('!');
        break;
    case 2:
        console.log ('@');
        break;
    case 3:
        console.log ('#');
        break;
    case 4:
        console.log ('$');
        break;
    case 5:
        console.log ('%');
        break;
    case 6:
        console.log ('^');
        break;
    case 7:
        console.log ('&');
        break;
    case 8:
        console.log ('*');
        break;
    case 9:
        console.log ('(');
        break;
    case 0:
        console.log (')');
        break;
    default:
        console.log ('Something went wrong');
}

console.log ("Задание 3");
const num = +prompt("Введите ХХХ число ", "");
const lastNum = num % 10;
const secondNum = (num % 100 - num % 10) / 10;
const firstNum = Math.floor(num / 100);
if ((lastNum === secondNum) && (lastNum === firstNum)) {
    console.log ("Число состоит из всех одинаковых цифр");
} else if (lastNum === secondNum){
    console.log ("Число состоит из двух одинаковых цифр");
} else if (lastNum === firstNum){
    console.log ("Число состоит из двух одинаковых цифр");
} else if (secondNum === firstNum){
    console.log ("Число состоит из двух одинаковых цифр");
} else {
    console.log ("Число состоит из разных цифр");
}

console.log ("Задание 4");
const userYear = +prompt("Введите год", "");
if ((userYear % 400 === 0) || (userYear % 4 === 0 && userYear % 100 !== 0)){
    console.log ("Это высокосный год");
} else {
    console.log ("Это не высокосный год");
}

console.log ("Задание 5");
const fiveDigitNumber = prompt("Введите ХХХХХ число ", "");
if ((fiveDigitNumber[0] === fiveDigitNumber[4]) && (fiveDigitNumber[1] === fiveDigitNumber[3])){
    console.log ("Это палиндромом");
} else {
    console.log ("Это не палиндромом");
}

console.log ("Задание 6");
const amountOfDollars = +prompt("Введите суму в USD", "");
const rateEur = 0.82;
const rateUan = 27.90;
const rateAzn = 1.7;
let amountOfMoney = amountOfDollars;
let currency = confirm ("Валюта EUR?");
if  (currency) {
    amountOfMoney = amountOfDollars * rateEur;
    console.log ("Ваша сума "+ amountOfMoney.toFixed(2) + " EUR");
} else if (currency = confirm ("Валюта UAN?")) {
    amountOfMoney = amountOfDollars * rateUan;
    console.log ("Ваша сума "+ amountOfMoney.toFixed(2) + " UAN");
} else if (currency = confirm ("Валюта AZN?")) {
    amountOfMoney = amountOfDollars * rateAzn;
    console.log ("Ваша сума "+ amountOfMoney.toFixed(2) + " AZN");
} else {
    console.log ("Вы не выбрали валюту");
}

console.log ("Задание 7");
let amountOfPurchase = +prompt("Введите общую суму покупки", "");
const discountThree = 3;
const discountFive = 5;
const discountSeven = 7;
if (amountOfPurchase < 200) {
    console.log ("У вас нету скидки, сумма к оплате " + amountOfPurchase.toFixed(2));
} else if (amountOfPurchase >= 200 && amountOfPurchase < 300){
    amountOfPurchase = amountOfPurchase * (1 - discountThree/100);
    console.log ("Cкидка " + discountThree +" %, сумма к оплате " + amountOfPurchase.toFixed(2));
} else if (amountOfPurchase >= 300 && amountOfPurchase < 500){
    amountOfPurchase = amountOfPurchase * (1 - discountFive/100);
    console.log ("Cкидки " + discountFive +" %, сумма к оплате " + amountOfPurchase.toFixed(2));
} else {
    amountOfPurchase = amountOfPurchase * (1 - discountSeven/100);
    console.log ("Cкидки " + discountSeven +" %, сумма к оплате " + amountOfPurchase.toFixed(2));
}

console.log ("Задание 8");
const cicleLenght = +prompt("Введите длину окружности", "");
const squareLenght = +prompt("Введите периметр квадрата", "");
const cicleDiametr = cicleLenght / Math.PI;
const squareSide = squareLenght / 4;
if (squareSide >= cicleDiametr) {
    console.log ("Круг поместится в квадрате");
} else {
    console.log ("Круг не поместится в квадрате");
}

console.log ("Задание 9");
let amoutOfBals = 0;
const firstQuest = +prompt ('Вопрос: 2 + 2*2 +2/2. Варианты ответа: 7 , 5 , 12. Введите правильний ответ');
switch (firstQuest) {
    case 7:
        console.log ("Ответ верный");
        amoutOfBals = amoutOfBals +2;
    break;
    default:
        console.log ("Ответ не верный");
}
const secondQuest = prompt ('Вопрос: какого цвета жираф. Варианты ответа: оранжевый, желтый, синий. Введите правильний ответ');
switch (secondQuest) {
    case "желтый":
        amoutOfBals = amoutOfBals + 2;
        console.log ("Ответ верный");
    break;
    default:
        console.log ("Ответ не верный");
}
const thirdQuest = +prompt ('Вопрос: какого цветов у радуги. Варианты ответа: 9, 8, 7. Введите правильний ответ');
switch (thirdQuest) {
    case 7:
        amoutOfBals = amoutOfBals + 2;
        console.log ("Ответ верный");
    break;
    default:
        console.log ("Ответ не верный");
}
console.log (amoutOfBals);

console.log ("Задание 10");
const dateFul = prompt("Введите дату  дд.мм.гггг ", "");
let dateOnly = +(dateFul[0]+dateFul[1]);
let monthOnly = +(dateFul[3]+dateFul[4]);
let yearOnly = +(dateFul[6]+dateFul[7]+dateFul[8]+dateFul[9]);

if ((dateOnly === 31) && (monthOnly === 12)) {
    dateOnly = 1;
    monthOnly = 1;
    yearOnly = ++yearOnly;
} else if ((dateOnly === 29 || dateOnly === 28) && (monthOnly === 2)){
    dateOnly = 1;
    monthOnly = ++monthOnly;
} else if ((dateOnly === 30) && ((monthOnly === 4) || (monthOnly === 6) || (monthOnly === 9) || (monthOnly === 11))){
    dateOnly = 1;
    monthOnly = ++monthOnly;
} else if (dateOnly === 31) {
    dateOnly = 1;
    monthOnly = ++monthOnly;
} else {
    dateOnly = ++dateOnly;
}
if (dateOnly < 10) dateOnly = ("0" + dateOnly);
if (monthOnly < 10) monthOnly =("0" + monthOnly);
const resultData = dateOnly + "." + monthOnly +"."+ yearOnly;
if ((!(dateOnly <= 31)) || (!(monthOnly <= 12))){
    console.log ('Дата введена не верно')
}else console.log (resultData);
