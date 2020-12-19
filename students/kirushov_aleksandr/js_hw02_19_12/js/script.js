console.log("Задание 1");
const age = +prompt("Укажите сколько Вам лет:");
if (age < 12) {
    console.log("Вы являетесь - ребенком");
} else {
    if (age >= 12 && age < 18) {
        console.log("Вы являетесь - подростком");
    } else {
        if (age >= 18 && age < 60) {
            console.log("Вы являетесь - взрослым");
        } else {
            console.log("Вы являетесь - пенсионером");
        }
    }
}

console.log("Задание 2");
const numeric = +prompt("Введите число от 0-9");
switch (numeric) {
    case 0:
        console.log(')');
        break;
    case 1:
        console.log('!');
        break;
    case 2:
        console.log('@');
        break;
    case 3:
        console.log('#');
        break;
    case 4:
        console.log('$');
        break;
    case 5:
        console.log('%');
        break;
    case 6:
        console.log('^');
        break;
    case 7:
        console.log('&');
        break;
    case 8:
        console.log('*');
        break;
    case 9:
        console.log('(');
        break;
    default:
        console.log('Вы ввели не число не в том диапазоне');
        break;
}

console.log("Задание 3");
const numberBase = prompt("Укажите трехзначное число", "");
const num1 = ~~(numberBase / 100);
const num2 = ~~((numberBase % 100) / 10);
const num3 = numberBase % 10;
if (num1 == num2 || num1 == num3 || num2 == num3) {
    console.log("В Вашем числе есть одиноковые цифры!");
} else {
    console.log("В Вашем числе нет одиноковых цифр!");
}

console.log("Задание 4");
let year = prompt("Укажите год", "");
if (year % 400 == 0 || (year % 4 == 0 && year % 100 !== 0)) {
    console.log("Данный год являеться высокосным");
} else {
    console.log("Данный год НЕ являеться высокосным");
}

console.log("Задание 5");
const numerBase = prompt("Укажите пятиразрядное число", "");
const numer1 = ~~(numerBase / 10000);
const numer2 = ~~((numerBase % 10000) / 1000);
const numer4 = ~~((numerBase % 100) / 10);
const numer5 = numerBase % 10;
if (numer1 == numer5 && numer2 == numer4) {
    console.log("Данное число являеться ПАЛИНДРОМОМ");
} else {
    console.log("Данное число НЕ являеться палиндромом");
}

console.log("Задание 6");
const USD = prompt("Введите сумму в долларах США, USD");
const currency = prompt("Укажите валюту на которую желаете обменять: EUR, UAH, AZN");
const sumEur = USD * 0.82;
const sumUah = USD * 27.90;
const sumAzn = USD * 1.7;
if (currency == "EUR") {
    console.log("Сумма в евро = " + sumEur);
} else {
    if (currency == "UAH") {
        console.log("Сумма в украинских гривнях = " + sumUah);
    } else {
        if (currency == "AZN") {
            console.log("Сумма в азербайджанских манатах = " + sumAzn);
        } else {
            console.log("Вы неверно ввели котируемую валюту");
        }
    }
}

console.log("Задание 7");
const sum = prompt("Введите сумму покупки");
const discount3 = sum * 0.97;
const discount5 = sum * 0.95;
const discount7 = sum * 0.93;
if (sum >= 200 && sum < 300) {
    console.log("Сумма к оплате со скидкой " + discount3);
} else {
    if (sum >= 300 && sum < 500) {
        console.log("Сумма к оплате со скидкой " + discount5);
    } else {
        if (sum >= 500) {
            console.log("Сумма к оплате со скидкой " + discount7);
        } else {
            console.log("К сожалению, при данной сумме покупки скидка отсутствует");
        }
    }
}

console.log("Задание 8");
const lengthCircle = prompt("Введите длину окружности");
const squareP = prompt("Введите периметр квадрата");
const diametr = lengthCircle / Math.PI;
const squareSide = squareP / 4;
if (diametr <= squareSide) {
    console.log("Окружность может быть вписана в квадрат");
} else {
    console.log("Окружность не поместиться в квадрат");
}

console.log("Задание 9");
const ask1 = prompt("Выберите правильный вариант ответа 2+2=? (4; 5; 6)");
const ask2 = prompt("Выберите правильный вариант ответа 2+2*2=? (4; 5; 6)");
const ask3 = prompt("Выберите правильный вариант ответа 2+2*2-1=? (4; 5; 6)");
let bal = 0;
if (ask1 == 4) {
    bal = bal + 2;
} else {
    bal = bal + 0;
}
if (ask2 == 6) {
    bal = bal + 2;
} else {
    bal = bal + 0;
}
if (ask3 == 5) {
    bal = bal + 2;
} else {
    bal = bal + 0;
}
console.log("Вы оценка в баллах " + bal);

console.log("Задание 10");
let day = +prompt('Введите номер дня', '');
let month = +prompt('Введите порядковый номер месяца', '');
let year10 = +prompt('Введите год', '');
let date = day + "." + month + "." + year10;
if ((day + 1 == 32 && month < 12) || ((day + 1 == 30 && month == 2) && (year10 % 400 == 0 || (year10 % 4 == 0 && year10 % 100 !== 0))) || ((day + 1 == 29 && month == 2) && (year10 % 400 !== 0 || (year10 % 4 !== 0 && year10 % 100 == 0)))) {
    console.log(date = 1 + "." + (month + 1) + "." + year10);
} else {
    if (day + 1 == 32 && month == 12) {
        console.log(date = 1 + "." + 1 + "." + (year10 + 1));
    } else {
        console.log(day + 1 + "." + month + "." + year10);
    }
}
