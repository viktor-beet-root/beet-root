// 1
const startOfRange = +prompt('Enter first number:');
const endOfRange = +prompt('Enter last number:');
let result = 0;
if (isNaN(startOfRange) || isNaN(endOfRange) || (startOfRange > endOfRange)) {
    console.log('The wrong data were entered.');
} else {
    for (let i = startOfRange; i <= endOfRange; i++) {
        result += i;
    }
    console.log(startOfRange + ' + ... + ' + endOfRange + ' = ' + result);
}

// 2
const firstNumber = +prompt('Enter first number:');
const secondNumber = +prompt('Enter second number:');
let greatestCommonDivisor;
if (isNaN(firstNumber) || isNaN(secondNumber) || secondNumber === 0 || firstNumber === 0) {
    console.log('The wrong data were entered.');
} else if (firstNumber === secondNumber) {
    greatestCommonDivisor == firstNumber;
} else {
    let maxCounter = (firstNumber < secondNumber) ? firstNumber : secondNumber;
    for (let i = maxCounter; i > 0; i--) {
        if ((firstNumber % i === 0) && (secondNumber % i === 0)) {
            greatestCommonDivisor = i;
            break;
        }
    }
    console.log('greatest common divisor = ' + greatestCommonDivisor);
}

// 3
const numberForCheck = +prompt('Enter number:');
if (isNaN(numberForCheck) || numberForCheck === 0) {
    console.log('The wrong number.');
} else {
    for (let i = 1; i <= numberForCheck; i++) {
        if (numberForCheck % i === 0) {
            console.log('divisor of number ' + numberForCheck + ' is: ' + i);
        }
    }
}

// 4
const number = +(prompt('Enter number:'));
if (!isFinite(number) || !Number.isInteger(number)) {
    console.log('The wrong number.');
} else {
    let quantityOfDigits = 0;
    let intermediateNumber = number;
    do {
        quantityOfDigits++;
        intermediateNumber /= 10;
    } while (intermediateNumber > 1);
    console.log('The number ' + number + ' has ' + quantityOfDigits + ' digits.')
}

// 5
console.log('Enter 10 numbers.');
let positiveNumber = 0;
let negativeNumber = 0;
let zeroNumber = 0;
let evenNumber = 0;
let oddNumber = 0;
let numberForCheck;
for (let i = 1; i <= 10; i++) {
    do {
        numberForCheck = +prompt('number ' + i + ':');
        if (!isFinite(numberForCheck)) {
            console.log('The wrong number, try again.')
        }
    } while (!isFinite(numberForCheck));
    if (numberForCheck > 0) {
        positiveNumber++;
    } else if (numberForCheck < 0) {
        negativeNumber++;
    } else {
        zeroNumber++;
    }
    if (numberForCheck % 2 === 0) {
        evenNumber++;
    } else {
        oddNumber++;
    }
}
console.log('positive - ' + positiveNumber);
console.log('negative - ' + negativeNumber);
console.log('zero     - ' + zeroNumber);
console.log('even     - ' + evenNumber);
console.log('odd      - ' + oddNumber);

// 6
while (true) {
    let firstArgument = +prompt('Input argument 1:');
    let secondArgument = +prompt('Input argument 2:');
    let simbol = prompt('Input a simbol: "+", "-", "*" or "/":');
    let result;
    let stopSimbol;
    if ((isFinite(firstArgument)) && (isFinite(secondArgument))) {
        switch (simbol) {
            case '+':
                result = firstArgument + secondArgument;
                break;
            case '-':
                result = firstArgument - secondArgument;
                break;
            case '*':
                result = firstArgument * secondArgument;
                break;
            case '/':
                result = firstArgument / secondArgument;
                break;
            default:
                console.log('Wrong simbol.');
                result = 'ERROR';
        }
        console.log(firstArgument + ' ' + simbol + ' ' + secondArgument + ' = ' + result);
        stopSimbol = prompt('Input "N" for stop');
    } else {
        console.log('Wrong data, try again.');
    }
    if (stopSimbol === 'n' || stopSimbol === 'N') break;
}

// 7
const numberForChange = +prompt('enter a number:');
const valueOfShift = +prompt('enter number of digits to shift the number:');
let result = numberForChange;
if ((isFinite(numberForChange)) && (isFinite(valueOfShift)) && (numberForChange === ~~numberForChange) && (valueOfShift === ~~valueOfShift) && (numberForChange >= 0) && (valueOfShift >= 0)) {
    for (let i = 0; i < valueOfShift; i++) {
        let lengthOfNumber = 0;
        let number = result;
        let firstDigit = 0;
        while (number >= 1) {
            firstDigit = ~~number;
            number /= 10;
            lengthOfNumber++;
        }
        result = (result - (firstDigit * (10 ** (lengthOfNumber - 1)))) * 10 + firstDigit;
        number = result;
    }
    console.log('Number - ' + numberForChange + ', shift - ' + valueOfShift + ', result - ' + result);
} else {
    console.log('wrong data.');
}

// 8
const day = +(prompt('Enter a day of the week (1-7)', ''));
if (getDay(day) === 'error') {
    console.log('wrong number of day.');
} else {
    console.log('You choose - ' + getDay(day));
    let makingChoice = true;
    let newDay = day;
    while (makingChoice) {
        makingChoice = confirm('Do you want to see the next day?');
        if (makingChoice) {
            if (newDay === 7) {
                newDay = 1;
            } else {
                newDay++;
            }
            dayText = getDay(newDay);
            console.log('The next day is - ' + dayText);
        }
    }
}

function getDay(numberOfDay) {
    let dayText;
    switch (numberOfDay) {
        case 1:
            dayText = 'Monday';
            break;
        case 2:
            dayText = 'Tuesday';
            break;
        case 3:
            dayText = 'Wednesday';
            break;
        case 4:
            dayText = 'Thursday';
            break;
        case 5:
            dayText = 'friday';
            break;
        case 6:
            dayText = 'Saturday';
            break;
        case 7:
            dayText = 'Sunday';
            break;
        default:
            dayText = 'error';
    }
    return dayText;
}

// 9
console.log('The multiplication table:');
for (let i = 2; i <= 9; i++) {
    console.log(i + ':');
    for (let j = 1; j <= 10; j++) {
        let rezult = i * j;
        console.log(i + ' * ' + j + ' = ' + rezult);
    }
    console.log('');
}

// 10
console.log('Think the integer number from 0 to 100', '');
let firstNumber = 0;
let lastNumber = 100;
let result;
let sign = '';
do {
    result = ~~((lastNumber + firstNumber) / 2);
    sign = prompt('Your number >, <, = ' + result + ' ?');
    if (sign === '>') {
        firstNumber = result + 1;
    } else if (sign === '<') {
        lastNumber = result - 1;
    } else if (sign === '=') {
        break;
    } else {
        result = 'Wrong simbol';
        break;
    }
} while (sign !== '=');
console.log('Your number is ' + result);
