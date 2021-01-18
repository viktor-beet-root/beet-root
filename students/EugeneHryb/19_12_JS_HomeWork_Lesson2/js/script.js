const endPart = '_____________________________________\n';

//Part 1
const part1 = 'Запросить у пользователя его возраст и определить, кем он является: ребенком (0–2), подростком (12–18), взрослым (18_60) или пенсионером (60– ...).';
console.log('Часть 1 \n' + part1 + '\n');
const userAge = prompt('Сколько вам лет', '');
let ageMessage;
if (userAge < 12) {
    ageMessage = 'Да ты совсем ребенок!!';
}else if (12 <= userAge && userAge < 18) {
    ageMessage = 'Да ты подросток !!';
}else if (18 <= userAge && userAge < 60 ){
    ageMessage = 'Да Вы уже взрослый!!';
}else if ( userAge >= 60 ) {
    ageMessage = 'Я вижу Вы уже пенсионер.';
}else {
    ageMessage = 'Что то пошло не так';
}
console.log(ageMessage);
console.log(endPart);

//Part 2
const part2 = 'Запросить у пользователя число от 0 до 9 и вывести ему спецсимвол, который расположен на этой клавише (1–!, 2–@, 3–# и т. д).';
console.log('Часть 2 \n' + part2 + '\n');

const oneNumber = +prompt('Ведите чило от 0 до 9', '');
if (oneNumber < 0 && 9 < oneNumber) {
    alert('Вы ввсели число выше или ниже допустимого диапазана');
}else {
    switch (oneNumber) {
        case 0 :
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
            break
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
            console.log('Что то пошло не так.');
    };
};
console.log(endPart);

//Part 3
const part3 = 'Запросить у пользователя трехзначное число и проверить, есть ли в нем одинаковые цифры.';
console.log('Часть 3 \n' + part3 + '\n');
const threeNumber = prompt('Введите трех-значное число', '');
const firstDigit = ~~(threeNumber / 100);
const secondDigit = ~~((threeNumber - (threeNumber % 100)) / 10);
const thirdDigit = threeNumber % 10;
if ((firstDigit == secondDigit)||(secondDigit == thirdDigit)||(thirdDigit == firstDigit)){
    console.log('В вашем числе есть две одинаковые цифры');
}else{
    console.log('В вашем числе нет повторяющихся цифр');
};
console.log(endPart);

//Part 4
const part4 = 'Запросить у пользователя год и проверить, високосный он или нет. Високосный год либо кратен 400, либо кратен 4 и при этом не кратен 100.';
console.log('Часть 4 \n' + part4 + '\n');

const year = prompt('Ведите год','');
if( ( ( (year % 4) == 0 ) && !((year % 100) == 0) ) || ( (year % 400 ) == 0) ){
    console.log('Введенный год есть высокосный');
}else {
    console.log('Введенный год не являестья высокосным');
};
console.log(endPart);

//Part 5
const part5 = 'Запросить у пользователя пятиразрядное число и определить, является ли оно палиндромом.';
console.log('Часть 5 \n' + part5 + '\n');

// Я дико извиняють но мне было лень писать один и тот же кот четыре раза.
function numberRank(number, rank){
    const ansver = ~~((number % (10**rank)) / 10**(rank-1));
    return ansver
};
const fiveNumber = prompt('Ведите пятизначное число', '');

if (-10000 < fiveNumber && fiveNumber < 10000 ){
    console.log('Число слишком маленькое');
}else if(-99999 > fiveNumber || fiveNumber > 99999){
    console.log('Число слишком больное');
} else {
    if (numberRank(fiveNumber, 1) == numberRank(fiveNumber, 5) && numberRank(fiveNumber, 2) == numberRank(fiveNumber, 4)){
        console.log('Введенное число являестья полиндроном');
    } else {
        console.log('Введенное число не являестья полиндроном');
    };
};
console.log(endPart);

//Part 6
const part6 = 'Написать конвертор валют. Пользователь вводит количество USD, выбирает, в какую валюту хочет перевести EUR, UAN или AZN, и получает в ответ соответствующую сумму';
console.log('Часть 6 \n' + part6 + '\n');

const maneyUSD = prompt('Введите суму в USD', '');
const maneyRequestMessage = 'Введите в какую валюту нужно конвертировать: \n' + 
'EUR - Евро \n' +
'UAN - Украинская гривна \n' + 
'AZN - Азейбаржанский манат \n'
const maneyConv = prompt(maneyRequestMessage, '' )
const conversionToEUR = 0.82;
const conversionToUAN = 27.90;
const conversionToAZN = 1.7;
let maneyAnsver;
switch (maneyConv) {
    case 'EUR':
        maneyAnsver = Math.round((conversionToEUR * maneyUSD ) * 100) / 100;
        maneyAnsver = 'Ваща сума будет равнятся ' + maneyAnsver + ' EUR';
        break;
    case 'UAN':
        maneyAnsver = Math.round((conversionToUAN * maneyUSD ) * 100) / 100;
        maneyAnsver = 'Ваща сума будет равнятся ' + maneyAnsver + ' UAN';
        break;
    case 'AZN':
        maneyAnsver = Math.round((conversionToAZN * maneyUSD ) * 100) / 100;
        maneyAnsver = 'Ваща сума будет равнятся ' + maneyAnsver + ' AZN';
        break;
    default:
        maneyAnsver = 'Такой валюты у наст нет!'
};
console.log(maneyAnsver);
console.log(endPart);

//Part 7
const part7 = 'Запросить у пользователя сумму покупки и вывести сумму к оплате со скидкой: от 200 до 300 – скидка будет 3%, от 300 до 500 – 5%, от 500 и выше – 7%.';
console.log('Часть 7 \n' + part7 + '\n');

const sumAmount = prompt('Введите сумму покупки', '');
let payment;
if (sumAmount > 200 && sumAmount < 300){
    payment = sumAmount - sumAmount * 0.03;
    payment = Math.round(payment * 100) / 100;
} else if (sumAmount >= 300 && sumAmount < 500){
    payment = sumAmount - sumAmount * 0.05;
    payment = Math.round(payment * 100) / 100;
} else if (sumAmount >= 500){
    payment = sumAmount - sumAmount * 0.07;
    payment = Math.round(payment * 100) / 100;
} else {
    payment = sumAmount;
}
const paymentMessage = 'К оплате ' + payment;
console.log(paymentMessage);
console.log(endPart);

//Part 8
const part8 = 'Запросить у пользователя длину окружности и периметр квадрата. Определить, может ли такая окружность поместиться в указанный квадрат.';
console.log('Часть 8 \n' + part8 + '\n');

const circumference = prompt('Введите длину окружности' , '');
const perimeterSquare = prompt('Введите периметр квадрата','');
const circumDiameter = circumference / Math.PI ;
const aquareSide = perimeterSquare / 4;
let circumMessage;
if (aquareSide > circumDiameter){
    circumMessage = 'Ваша окружность прекрасно помещаестья в квадрат';
} else {
    circumMessage = 'Ваша окружность не поместиться в квадрат';
};
console.log(circumMessage);
console.log(endPart);

//Part 9
const part9 = 'Задать пользователю 3 вопроса, в каждом вопросе по 3 варианта ответа. За каждый правильный ответ начисляется 2 балла. После вопросов выведите пользователю количество набранных баллов.'; 
console.log('Часть 9 \n' + part9 + '\n');

const question1 = 'Бейсбольная бита и мяч вместе стоят 1 доллар 10 центов. Бита дороже мяча на 1 доллар. Сколько стоит мяч? \n' + 
'Варианты ответа (Введите цифру от 1 до 3): \n' + 
'1. 10 центов \n' +
'2. 5 центов \n' +
'3. 1 долар \n';

const question2 = '5 машин за 5 минут производят 5 штуковин. Сколько времени понадобится 100 машинам, чтобы произвести 100 штуковин? \n' +
'Варианты ответа (Введите цифру от 1 до 3): \n' +
'1. 100 минут \n' +
'2. 10 минуту \n' +
'3. 5 минут \n';

const question3 = 'Пруд зарастает кувшинками. Каждый день их площадь удваивается. Целиком озеро зарастет за 48 дней. За сколько дней цветы поглотят половину его поверхности? \n' +
'1. 24 дня \n' +
'2. 47 дней \n' + 
'3. 12 дней \n';

let rating = 0;
const ansver1 = prompt(question1, '');
if (ansver1 == 2) {
    rating = rating +2;
};
const ansver2 = prompt(question2, '');
if (ansver2 == 3) {
    rating = rating +2;
};
const ansver3 = prompt(question3, '');
if (ansver3 == 2) {
    rating = rating +2;
};
const testAnsver = 'Результат вашего теста составляет ' + rating + ' балов.'
console.log(testAnsver);
console.log(endPart);

//Part 10
const part10 = 'Запросить дату (день, месяц, год) и вывести следующую за ней дату. Учтите возможность перехода на следующий месяц, год, а также високосный год.'
console.log('Часть 10 \n' + part10 + '\n');

const userDate = +prompt('Введите день','');
const userMount = +prompt('Введите месяц', '');
const userYear = +prompt('Введите год', '');

let mountLong = false 

switch( userMount ){
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
        mountLong = true;
        break
    case 2:
    case 4:
    case 6:
    case 9:
    case 11:
        mountLong = false;
        break
}

let nextData;
let nextMount;
let nextYear;
let highYear;

if( ( ( (userYear % 4) == 0 ) && !((userYear % 100) == 0) ) || ( (userYear % 400 ) == 0) ){
    highYear = true;
}else {
    highYear = false;
};

if (userMount == 2){
    if (highYear){
        if (userDate == 29) {
            nextData = 1;
            nextMount = userMount + 1;
            nextYear = userYear;
        }else if (userDate > 29){
            console.log('Такой датты не существует');
        } else {
            nextData = userDate + 1;
            nextMount = userMount;
            nextYear = userYear;
        };
    } else {
        if (userDate == 28) {
            nextData = 1;
            nextMount = userMount + 1;
            nextYear = userYear;
        }else if (userDate > 28){
            console.log('Такой датты не существует');
        } else {
            nextData = userDate + 1;
            nextMount = userMount;
            nextYear = userYear;
        };
    };
}else if (userMount == 12){
    if (userDate == 31) {
        nextData = 1
        nextMount = 1
        nextYear = userYear +1;
    }else if(userDate > 31) {
        console.log('Такой датты не существует');
    } else {
        nextData = userDate + 1;
        nextMount = userMount;
        nextYear = userYear;
    };
}else if(userMount > 12){
    console.log('Такого месяца не существует');
} else if (mountLong){
    if (userDate == 31) {
        nextData = 1;
        nextMount = userMount +1;
        nextYear = userYear;
    } else if(userDate > 31) {
        console.log('Такой датты не существует');
    } else {
        nextData = userDate + 1;
        nextMount = userMount;
        nextYear = userYear;
    }
}else {
    if (userDate == 30) {
        nextData = 1;
        nextMount = userMount +1;
        nextYear = userYear;
    }else if(userDate > 30) {
        console.log('Такой датты не существует');
    } else {
        nextData = userDate + 1;
        nextMount = userMount;
        nextYear = userYear;
    }
}
const calendarMessage = 'Следующий день ' + nextData + '.' + nextMount + '.' + nextYear + ' г.'
console.log(calendarMessage);
