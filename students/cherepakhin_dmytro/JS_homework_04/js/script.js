// 1
const number_1=+prompt ('Number 1:');
const number_2=+prompt ('Number 2:');
console.log('Result : '+compareNumbers(number_1,number_2));
function compareNumbers(numberFirst, numberSecond){
    if (numberFirst>numberSecond){
        return 1;
    } else if(numberFirst<numberSecond){
        return -1;
    } else {
        return 0;
    }
}

// 2
const argument=+prompt('Enter argument of factorial:');
console.log(argument+'! = '+getFactorial(argument));
function getFactorial(arg){
    if (isFinite(arg)&&(arg>0)&&(arg===~~arg)){
        let factorial=1;
        for (let i=2; i<=arg; i++){
            factorial*=i;
        }
        return factorial;
    } else {
        return 'ERROR'
    }
}

// 3
const digit1=+prompt('Digit 1: ');
const digit2=+prompt('Digit 2: ');
const digit3=+prompt('Digit 3: ');
console.log(digit1+', '+digit2+', '+digit3+'. Result = '+makeNumber(digit1,digit2,digit3));
function makeNumber(digit_1, digit_2, digit_3){
    if(isFinite(digit_1) && isFinite(digit_2) && isFinite(digit_3) && digit_1>=0 && digit_2>=0 && digit_3>=0 && Number.isInteger(digit_1) && Number.isInteger(digit_2) && Number.isInteger(digit_3)){
        let result=digit_1*100+digit_2*10+digit_3;
        return result;
    } else {
        return 'ERROR'
    }
}

// 4
const firstSide=+prompt('Enter side 1:');
const secondSide=+prompt('Enter side 2:');
console.log('side 1 = '+firstSide+', side 2 = '+secondSide+',  S = '+getSquare(firstSide,secondSide))
function getSquare(side1, side2){
    let square;
    if (isFinite(side1) && isFinite(side2) && side1>0 && side2>0){
        square=side1*side2;
    } else if(isFinite(side1) && side1>0){
        square=side1**2;
    } else if (isFinite(side2) && side2>0){
        square=side2**2;
    } else  {
        square='ERROR'
    }
    return square;
}

// 5
const perfectNumber=+prompt('Input Perfect Number:','');
console.log(perfectNumber+' is Perfect Number - '+isPerfectNumber(perfectNumber));
function isPerfectNumber(number){
    let sumOfDivisors=0;
    for (let i=1; i<number; i++){
        if(number%i===0) sumOfDivisors+=i;
    }
    let result=number===sumOfDivisors ? true : false;
    return result;
}

// 6 
const minNumber=+prompt('Input minimum number of range:','');
const maxNumber=+prompt('Input maximum number of range:','');
for(let j=minNumber; j<=maxNumber; j++){
    if(isPerfectNumber(j)) console.log('Perfect Number - '+j);
}
function isPerfectNumber(number){
    let sumOfDivisors=0;
    for (let i=1; i<number; i++){
        if(number%i===0) sumOfDivisors+=i;
    }
    let result=number===sumOfDivisors ? true : false;
    return result;
}

// 7
const hours=+prompt('Enter hours:');
const minutes=+prompt('Enter minutes:');
const seconds=+prompt('Enter seconds:');
console.log('The time is: '+showTime(hours,minutes,seconds))
function showTime(hour, minute, second){
    let hourText;
    let minuteText;
    let secondText;
    if(hour<24&&hour>=0&&minute<60&&minute>=0&&(second<60&&second>=0||second===undefined)){
        hourText=(hour>=0 && hour<10) ? ('0'+hour) :(''+hour);
        minuteText=minute>=0 && minute<10 ? ('0'+minute) :(''+minute);
        if (second!==undefined){
            secondText=second>=0 && second<10 ? ('0'+second) :(''+second);
        } else {
            secondText='00';
        }
    } else {
        return 'Incorrect value of time'
    }
    return (hourText+':'+minuteText+':'+secondText);
}

// 8
const hours=+prompt('Enter hours:');
const minutes=+prompt('Enter minutes:');
const seconds=+prompt('Enter seconds:');
console.log('The time is: '+getTimeInSeconds(hours,minutes,seconds)+' seconds')
function getTimeInSeconds(hour, minute, second){
    let timeInSeconds;
    if (hour>=0 && minute<60 && minute>=0 && second<60 && second>=0){
        timeInSeconds=((hour*60)+minute)*60+second;
        return timeInSeconds;
    } else {
        return 'You are entered incorrect time.'
    }
}

// 9
const secondsInput=+prompt('Enter seconds:');
console.log('The time is: '+getTime(secondsInput));
function getTime(seconds){
    let hourText;
    let minuteText;
    let secondText;
    if((seconds>=0)){
        let hour=~~(seconds/3600);
        let minute=~~((seconds-(hour*3600))/60);
        let second=~~(seconds-(hour*3600)-(minute*60));
        hourText=(hour>=0 && hour<10) ? ('0'+hour) :(''+hour);
        minuteText=minute>=0 && minute<10 ? ('0'+minute) :(''+minute);
        secondText=second>=0 && second<10 ? ('0'+second) :(''+second);
        return (hourText+':'+minuteText+':'+secondText);
    } else {
        return 'Incorrect value of time'
    }
}

// 10
const hourStart=+prompt('Enter hours of the bigining:');
const minuteStart=+prompt('Enter minutes of the bigining:');
const secondStart=+prompt('Enter seconds of the bigining:');
const hourEnd=+prompt('Enter hours of the end:');
const minuteEnd=+prompt('Enter minutes of the end:');
const secondEnd=+prompt('Enter seconds of the end:');
console.log('The difference is: '+getDifference(hourStart,minuteStart,secondStart,hourEnd,minuteEnd,secondEnd));
function getDifference(hour1, minute1, second1, hour2, minute2, second2){
    if (makeValidation(hour1, minute1, second1) && makeValidation(hour2, minute2, second2) && getTimeInSeconds(hour1, minute1, second1)<getTimeInSeconds(hour2, minute2, second2)){
        let differenseInSeconds=getTimeInSeconds(hourEnd,minuteEnd,secondEnd) - getTimeInSeconds(hourStart,minuteStart,secondStart);
        let differenceInText=getTime(differenseInSeconds);
        return differenceInText;
    } else {
        return 'Incorrect time were entered.'
    }
}
function makeValidation(hour, minute, second){
    if (hour>=0 && hour <24 && minute<60 && minute>=0 && second<60 && second>=0 && Number.isInteger(hour) && Number.isInteger(minute) && Number.isInteger(second)){
        return true;
    } else {
        return false;
    }
}
function getTimeInSeconds(hour, minute, second){
    let = timeInSeconds=((hour*60)+minute)*60+second;
    return timeInSeconds;
}
function getTime(seconds){
    let hourText;
    let minuteText;
    let secondText;
    let hour=~~(seconds/3600);
    let minute=~~((seconds-(hour*3600))/60);
    let second=~~(seconds-(hour*3600)-(minute*60));
    hourText=(hour>=0 && hour<10) ? ('0'+hour) :(''+hour);
    minuteText=minute>=0 && minute<10 ? ('0'+minute) :(''+minute);
    secondText=second>=0 && second<10 ? ('0'+second) :(''+second);
    return (hourText+':'+minuteText+':'+secondText);
}
