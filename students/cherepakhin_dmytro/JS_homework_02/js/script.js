// 1
const userAge=+prompt('How old are you?','');
let userStatus;
if ((userAge>=0) && (userAge<=2)){
    userStatus='baby';
} else if ((userAge>=12) && (userAge<18)){
    userStatus='teenager';
} else if ((userAge>=18) && (userAge<60)){
    userStatus='adult';
} else if(userAge>=60){
    userStatus='retiree';
} else {
    userStatus='child';
}
console.log('You are '+userStatus);

// 2
const digitEntered=+prompt('Enter a digit from 0 to 9:','');
let simbol;
switch(digitEntered){
    case 0:
        simbol=')';
        break;
    case 1:
        simbol='!';
        break;
    case 2:
        simbol='@';
        break;
    case 3:
        simbol='#';
        break;
    case 4:
        simbol='$';
        break;
    case 5:
        simbol='%';
        break;
    case 6:
        simbol='^';
        break;
    case 7:
        simbol='&';
        break;
    case 8:
        simbol='*';
        break;
    case 9:
        simbol='(';
        break;
    default:
        simbol='You entered the wrong simbol.';
}
console.log(simbol);

// 3
const numberForCheck=+prompt('Input 3-digit number:','');
if (isNaN(numberForCheck)){
    console.log('You mast input only digits');
}else if((numberForCheck/100<1) || (~~numberForCheck/100>9)){
    console.log('You mast input only 3-digit number');
} else{
    const firstDigit=~~(numberForCheck/100);
    const secondDigit=(~~(numberForCheck/10))%10;
    const thirdDigit=numberForCheck%10;
    if ((firstDigit==secondDigit)||(firstDigit==thirdDigit)||(secondDigit==thirdDigit)){
        console.log('The number has equal digits');
    } else {
        console.log('The number doesn\'t have equal digits');
    }
}

// 4
const yearForCheck=+prompt('Enter an year:','');
if ((isNaN(yearForCheck)) || ((yearForCheck-(~~yearForCheck))>0)){
    console.log('Wrong year. Try again.')
} else {
    if((yearForCheck%4===0) && (yearForCheck%100!==0 || yearForCheck%400===0)){
        console.log('The leap-year');
    } else {
        console.log('Non a leap-year');
    }
}

// 5
const numberPolindrom=+prompt('Input 5-digit number:');
if ((isNaN(numberPolindrom)) || ((numberPolindrom-(~~numberPolindrom))!=0) || (Math.abs(numberPolindrom)<10000) || (Math.abs(numberPolindrom)>99999)){
    console.log('You input the wrong number.');
} else {
    const digit1=~~(numberPolindrom/10000);
    const digit2=(~~(numberPolindrom/1000))%10;
    const digit4=(~~(numberPolindrom/10))%10;
    const digit5=numberPolindrom%10;
    if ((digit1==digit5) && (digit2==digit4)){
        console.log('This number is polindrom');
    } else {
        console.log('This number is NOT polindrom');
    }
}

// 6
const amountOfMoney=+prompt('Enter amount of money you want to exchange:');
if (amountOfMoney<0 || isNaN(amountOfMoney)){
    console.log('Wrong amount of money.');
} else {
    const currency=+prompt('Choose a currency: 1-EUR, 2-UAH, 3-AZN');
    const rateUsd_Eur=1.23;
    const rateUsd_Uah=0.036;
    const rateUsd_Asn=0.59;
    let result;
    switch (currency){
        case 1:
            result=(amountOfMoney/rateUsd_Eur).toFixed(2);
            console.log('You will get EUR: '+ result);
            break;
        case 2:
            result=(amountOfMoney/rateUsd_Uah).toFixed(2);
            console.log('You will get UAH: '+ result);
            break;
        case 3:
            result=(amountOfMoney/rateUsd_Asn).toFixed(2);
            console.log('You will get AZN: '+ result);
            break;
        default:
            console.log('You enter wrong number of currency.');
    }
}

// 7
const sumOfPurchase=+prompt('Enter sum of your purchase:');
if (sumOfPurchase<0 || isNaN(sumOfPurchase)){
        console.log('Wrong sum.');
} else {
    let discount;
    if (sumOfPurchase<200){
        discount=0;
    } else if (sumOfPurchase>=200 && sumOfPurchase <300) {
        discount=3;
    } else if (sumOfPurchase>=300 && sumOfPurchase <500) {
        discount=5;
    } else {
        discount=7;
    }
    const totalCost=sumOfPurchase-sumOfPurchase/100*discount;
    console.log('Total cost with '+discount+'% discount is: '+totalCost);
}

// 8
const lengthOfCircle=+prompt('Enter the length of circle:');
const perimeterOfSquare=+prompt('Enter the perimeter of square:');
if (lengthOfCircle<=0 || isNaN(lengthOfCircle) || perimeterOfSquare<=0 || isNaN(perimeterOfSquare)){
        console.log('Wrong data.');
} else{
    const diameterOfCircle=lengthOfCircle/Math.PI;
    const sideOfSquare=perimeterOfSquare/4;
    if (sideOfSquare>diameterOfCircle){
        console.log('Yes.');
    } else {
        console.log('Not.');
    }
}

// 9
const answer_1=+prompt('Boolean is: 1-number, 2-type of data, 3-animal');
const answer_2=+prompt('JavaScript is: 1-coffe, 2-programming language, 3-plant');
const answer_3=+prompt('BeetRoot is: 1-car, 2-restaurant, 3-academy');
let result_1;
let result_2;
let result_3;
switch (answer_1){
    case 2:
        result_1=2;
        break;
    default:
        result_1=0;;
}
switch (answer_2){
    case 2:
        result_2=2;
        break;
    default:
        result_2=0;;
}
switch (answer_3){
    case 3:
        result_3=2;
        break;
    default:
        result_3=0;
}
const totalResult=result_1+result_2+result_3;
console.log('You get '+totalResult+' points');

// 10 
const dayOfDate=+prompt('Enter day (from 1 to 31):');
const monthOfDate=+prompt('Enter month (from 1 to 12):');
const yearOfDate=+prompt('Enter year:');
let typeOfMonth;
switch (monthOfDate){
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
        typeOfMonth='long';
        break;
    case 2:
        typeOfMonth='febr';
        break;
    case 4:
    case 6:
    case 9:
    case 11:
        typeOfMonth='short';
        break;
    default:
        console.log('Incorrect number of month.');
}
let typeOfYear;
if((yearOfDate%4===0) && (yearOfDate%100!==0 || yearOfDate%400===0)){
    typeOfYear='leap-year';
} else {
    typeOfYear='not-leap-year';
}
let nextDay;
if ((dayOfDate<28) || (dayOfDate<31 && typeOfMonth=='long') || (dayOfDate<30 && typeOfMonth=='short') || (dayOfDate<29 && typeOfMonth=='febr' && typeOfYear=='leap-year')){
    nextDay=dayOfDate+1;
} else if((dayOfDate>31) || (dayOfDate>30 && typeOfMonth=='short') || (dayOfDate>28 && typeOfMonth=='febr' && typeOfYear=='not-leap-year') || (dayOfDate>29 && typeOfMonth=='febr' && typeOfYear=='leap-year')){
    console.log('Wrong number of day.');//валидация даты по кол-ву дней в месяце.
}else{
    nextDay=1;
}
let nextMonth;
if (nextDay!=1){
    nextMonth=monthOfDate;
} else {
    if (monthOfDate!=12){
        nextMonth=monthOfDate+1;
    } else {
        nextMonth=1;
    }
}
let nextYear;
if (nextMonth!=1){
    nextYear=yearOfDate;
} else{
    nextYear=yearOfDate+1;
}
console.log('Your date is: '+dayOfDate+' '+monthOfDate+' '+yearOfDate);
console.log('The next date is: '+nextDay+' '+nextMonth+' '+nextYear);
