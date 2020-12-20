//сделал, что успел
const userAge = +prompt("Введите Ваш возраст", "");
console.log("Задание 1,", userAge); 
const child = 12;
const junior = 18;
const adult = 60;
const retiree = 60;
if((userAge > 0) && (userAge < child)) {
    console.log("Ты ребенок");
} else if((userAge >= child) && (userAge <= junior)) {
     console.log("Ты подросток");
 }
 else if((userAge > junior) && (userAge < adult)) {
     console.log("Ты взрослый")
 }
 else if(userAge >= adult) {
     console.log("Ты пенсионер");
 }
 else if(userAge <= 0) {
     console.log("Ошибка");
 }

 const userNumber = +prompt("Введите цифру от 0 до 9");
 console.log("Задание 2,", userNumber);
 if((userNumber >= 0) && (userNumber <= 9)) {
     switch(userNumber) {
         case 0:
             console.log(")");
             break;
         case 1:
             console.log("!");
             break;
         case 2:
              console.log("@");
              break;
         case 3:
              console.log("#");
              break;
         case 4:
              console.log("$");
              break;
         case 5:
              console.log("%");
              break;
         case 6:
             console.log("^");
             break;
         case 7:
              console.log("&");
              break;
         case 8:
              console.log("*");
              break;
         case 9:
              console.log("(");
              break;      
     }
 } else {
     console.log("Ошибка");
 }

const userNumberOfThrees = +prompt("Введите трехзначное число", "");
console.log("Задание 3,", userNumberOfThrees);
const firstNumber = ~~(userNumberOfThrees / 100);
const secondNumber = ~~(userNumberOfThrees / 10) % 10;
const thirdNumber = userNumberOfThrees % 10;
if(firstNumber == secondNumber == thirdNumber) {
    console.log("3 одинаковые цифры");
} else if(firstNumber == secondNumber) {
    console.log("Две одинкаковые цифры");
} else if(firstNumber == thirdNumber) {
    console.log("Две одинкаковые цифры");
}
else if(secondNumber == thirdNumber) {
    console.log("Две одинкаковые цифры");
} else {
    console.log("Нету одинаковых цифр")
}

const userYear = +prompt("Введите год", "");
console.log("Задание 4,", userYear);
if((Number.isInteger(userYear / 400)) && !(Number.isInteger(userYear / 100))) {
    console.log("Год является высокосным!");
} else if((Number.isInteger(userYear / 4)) && !(Number.isInteger(userYear / 100))) {
    console.log("Год является высокосным!");
} else {
    console.log("Год не является высокосным!");
}

const userNumberOfFifth = +prompt("Введите пятизначное число", "");
console.log("Задание 5,", userNumberOfFifth);
const numberOne = ~~(userNumberOfFifth / 10000);
const numberTwo = ~~(userNumberOfFifth / 1000) % 10;
const numberThree = ~~(userNumberOfFifth / 100) % 10;
const numberFour = ~~(userNumberOfFifth / 10) % 10;
const numberFive = ~~(userNumberOfFifth / 1) % 10;
if(numberOne == numberTwo == numberThree == numberFour == numberFive) {
    console.log("Это число палиндром");
} else if((numberOne == numberFive) && (numberTwo == numberThree == numberFour)) {
    console.log("Это число палиндром");
} else if((numberOne == numberFive) && (numberTwo == numberFour)) {
    console.log("Это число палиндром");
} else if((userNumberOfFifth < 10000) || (userNumberOfFifth > 100000)) {
    console.log("Это не пятизначное число");
} else {
    console.log("Это число не палиндром");
}

/* const dollarSum = +prompt("Введите сумму в долларах", "");
console.log("Задание 6,", dollarSum);
const chooseCurrency = prompt("Выберите валюту, в котороую хотите перевести доллары (EUR, UAH, AZN)", "");
console.log(chooseCurrency);
const eurValue = 0.82;
const eurSum = ~~(dollarSum * EUR);
const uahValue = 27.9;
const uahSum = ~~(dollarSum * UAH);
const aznValue = 1.7;
const aznSum = ~~(dollarSum * AZN);
if(chooseCurrency = "EUR")  { //сдесь проблема, выыдает почему то ошибку пронедействительное присвоение, не понимаю почему
    console.log(eurSum);
} else if(chooseCurrency = "UAH") {
    console.log(uahSum);
  } else if(chooseCurrency = "AZN") {
    console.log(aznSum);
    } */
//пытался сначала через swith делать, не получилос :(

const purchaseCost = +prompt("Введите стоимость Вашей покупки в грн");
console.log("Задание 7,", purchaseCost);
const firstSalePercent = 3;
const saleThreePercent = purchaseCost * firstSalePercent / 100;
const costWithFirstSale = purchaseCost - saleThreePercent;
const secondSalePercent = 5;
const saleFivePercent = purchaseCost * secondSalePercent / 100;
const costWithSecondSale = purchaseCost - saleFivePercent;
const thirdSalePercent = 7;
const saleSevenPercent = purchaseCost * thirdSalePercent / 100;
const costWithThirdSale = purchaseCost - saleSevenPercent;
if((purchaseCost >= 200) && (purchaseCost < 300)) {
    console.log(costWithFirstSale);
} else if((purchaseCost >=300) && (purchaseCost < 500)) {
    console.log(costWithSecondSale);
} else if(purchaseCost >= 500) {
    console.log(costWithThirdSale);
} else {
    console.log("Скидки нету");
}

const circleSize = +prompt("Введите длинну окружности (в см)", "");
console.log("Задание 8,", circleSize);
const squarePerimetr = +prompt("Введите периметр квадрата (в см)", "");
console.log(squarePerimetr);
//R = a
const squadSideQuantity = 4;
const squadSideSize = squarePerimetr / squadSideQuantity;
const radius = circleSize / (2 * Math.PI);
if(squadSideSize == circleSize) {
    console.log("Такая окружность может поместится в данный квадрат");
} else {
    console.log("Такая окружность не сможет поместится в данный квадрат");
}

/* const firstQuestion = +prompt("Сколько будет 2 * 2? Варианты ответа: А)3 Б)4 В)5", "");
const firstAnswer = 4;
console.log("Задание 9,", firstQuestion);
const secondQuestion = prompt("Алгебра это наука про природу? Варианты ответа: A)Да Б)Нет В)Это не наука", "");
const secondAnswer = "Нет";
console.log(secondQuestion);
const thirdQuestion = prompt("Какой язык является международным? Варианты ответа: А)", "");
const thirdAnswer = "Английский";
console.log(thirdQuestion);
let userMark = 0;
if(firstQuestion == firstAnswer) {
    userMark = userMark + 2;
    console.log(userMark);
} else if(secondQuestion = secondAnswer) {
    userMark = userMark + 2;
    console.log(userMark);
} else if(thirdQuestion = thirdAnswer) {
    userMark = userMark + 2;
    console.log(userMark);
}
alert("У вас "+userMark+" баллов") */
//знаю, что не так делал, переделаю
