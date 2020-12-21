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

const dollarSum = +prompt("Введите сумму в долларах", "");
console.log("Задание 6,", dollarSum);
const chooseCurrency = prompt("Выберите валюту, в котороую хотите перевести доллары (EUR, UAH, AZN)", "");
console.log(chooseCurrency);
const eurValue = 0.82;
const eurSum = ~~(dollarSum * eurValue);
const uahValue = 27.9;
const uahSum = ~~(dollarSum * uahValue);
const aznValue = 1.7;
const aznSum = ~~(dollarSum * aznValue);
if(chooseCurrency == "EUR")  {
    console.log(eurSum);
} else if(chooseCurrency == "UAH") {
    console.log(uahSum);
  } else if(chooseCurrency == "AZN") {
    console.log(aznSum);
    }

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
const costOfOneRightAnswer = 2;
let userMark = 0;
const rightAnswer = "Верно!";
const uncorrectAnswer = "Неверно!";
const chooseAnswer = "Выберите один из трех вариантон ответа";
const firstVaiantOfAnswer = "А)";
const secondVariantOfAnswer = "Б)";
const thirdVariantOfAnswer = "В)"
const firstQuestion = prompt("Сколько будет 2 * 2? Варианты ответа: А)3 Б)0 В)4", "");
const firstQuestionAnswer1 = 3;
const firstQuestionAnswer2 = 0;
const firstQuestionRightAnswer = 4;
console.log("Задание 9");
if(firstQuestion == thirdVariantOfAnswer) {
    console.log(thirdVariantOfAnswer, firstQuestionRightAnswer, rightAnswer);
    userMark = userMark + costOfOneRightAnswer;
} else if((firstQuestion !== firstVaiantOfAnswer) && (firstQuestion !== secondVariantOfAnswer)) {
     console.log(chooseAnswer);
  } else {
    console.log(uncorrectAnswer);
    }
const secondQuestion = prompt("Алгебра это наука про природу? Варианты ответа: А)Нет Б)Да В)Это не наука", "");
const secondQuestionRightAnswer = "Нет";
const secondQuestionAnswer2 = "Да";
const secondQuestionAnswer3 = "Это не наука";
if(secondQuestion == firstVaiantOfAnswer) {
    console.log(firstVaiantOfAnswer, secondQuestionRightAnswer, rightAnswer);
    userMark = userMark + costOfOneRightAnswer;
} else if((secondQuestion !== secondVariantOfAnswer) && (secondQuestion !== thirdVariantOfAnswer)) {
    console.log(chooseAnswer);
  } else {
    console.log(uncorrectAnswer);
    }

const thirdQuestion = prompt("Какой язык является международным? Варианты ответа: А)Русский Б)Анлгийский В)Немецкий", "");
const thirdQuestionAnwer1 = "Русский";
const thirdQuestionRightAnswer = "Английский";
const thirdQuestionAnwer3 = "Немецкий";
if(thirdQuestion == secondVariantOfAnswer) {
    console.log(secondVariantOfAnswer, thirdQuestionRightAnswer, rightAnswer);
    userMark = userMark + costOfOneRightAnswer;
} else if((thirdQuestion !== firstVaiantOfAnswer) && (thirdQuestion !== thirdVariantOfAnswer)) {
    console.log(chooseAnswer);
} else {
    console.log(uncorrectAnswer);
}
if(userMark === 2) {
    console.log("Вы набрали "+userMark+" балла!");
    alert("Вы набрали "+userMark+" балла!");
} else {
    console.log("Вы набрали "+userMark+" баллов!");
    alert("Вы набрал "+userMark+" баллов!");
}
//пока что 10 сделать не могу, не обращайте внимание, я его криво написал
/* console.log("Задание 10");
const dayError = "Введите верную дату дня";
const monthError = "Введите верный месяц";
const yearError = "Введите верный год";
const maxDays = 31;
const maxMonths = 12;
const uncorrectDate = "Неправильная дата";
let daySecondCase = 1;
let day = +prompt("Введите дату дня", "");
let month = +prompt("Введите месяц", "");
let year = +prompt("Введите год", "");
console.log(day);

if(day === 30) {
    day = maxDays;
} else if(day === maxDays) {
    day = 1;
}
if(month === 11) {
    month = maxMonths;
} else if(month === maxMonths) {
    month = 1;
}

if((day > 1) && (day < 30)) {
    day = day + 1;
    console.log( day);
} else {
      console.log(dayError);
  }
  

console.log(month);
if ((month >= 0) && (month < 11)) {
    month = month + 1;
    console.log(month);
} else {
    console.log(monthError);
  }
  

console.log(year);
if(year >= 0) {
    year = year + 1;
    console.log(year);
} else {
    console.log(yearError);
}


if(month >= maxMonths) {
    month = 1;
    year = year + 1;
}
if((day < 0) && (month < 0) && (year < 0)) {
    console.log(uncorrectDate);
}
console.log(day, month, year); */
