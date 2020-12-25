console.log ("Задание 1");
function twoNumbers (firstNum, secondNum){
    console.log (firstNum,secondNum);
    let resultOfFun = 0;
    if ((firstNum !== undefined) && (secondNum !== undefined)){
        if (firstNum > secondNum) {
            resultOfFun = 1;
            return resultOfFun;
        } else if (firstNum < secondNum){
            resultOfFun = -1;
            return resultOfFun;
        } else return resultOfFun;
    } else return ("Вы ввели неверные данные");
}
console.log (twoNumbers(undefined,4));
console.log (twoNumbers(4,4));
console.log (twoNumbers(2,4));
console.log (twoNumbers(8,4));

console.log ("Задание 2. Факториал числа");
function factorialFunction (factorialNumber){
    let res = 1;
    if ((factorialNumber === undefined) || isNaN(factorialNumber)){
        return "Вы ввели неверные данные";
    }
    if (factorialNumber === 1 ) return res;
    for (let i = 1; i <= factorialNumber; i++){
        res = res * i;
    }
    return res;
}
console.log (factorialFunction(8));
console.log (factorialFunction("8"));
console.log (factorialFunction (factorialNumber = +prompt ("Введите число для вычесления его факториала","")));

console.log ("Задание 3. Три числа");
function threeNumbers (firstNumber, secondNumber,thirdNumber){
    if ((firstNumber === undefined) || (secondNumber === undefined) || (thirdNumber === undefined) || (firstNumber === 0)){
        return "Вы ввели неверные данные";
    }
    let nemNumberOfThree = firstNumber * 100 + secondNumber * 10 + thirdNumber;
    return nemNumberOfThree;
}
console.log (threeNumbers(undefined, 4, 6));
console.log (threeNumbers(0, 4, 6));
console.log (threeNumbers(1, 4, 6));
console.log (threeNumbers(firstNumber = +prompt ("Введите первое число", ""), secondNumber = +prompt ("Введите второе число", ""), thirdNumber = +prompt ("Введите третье число", "")));

console.log ("Задание 4. Периметр");
function perimetrFunction (sideA, sideB){
    if (((sideA === undefined) && (sideB === undefined)) || ((sideA === 0) && (sideB === 0))){
        return "Вы ввели неверные данные";
    }
    let perimetr = 0;
    if (((sideA === undefined) || (sideA === 0)) && (sideB !== undefined)){
        perimetr = 4 * sideB;
        return perimetr;
    }
    if ((sideA !== undefined) && ((sideB === undefined) || (sideB === 0))){
        perimetr = 4 * sideA;
        return perimetr;
    }
    if ((sideA !== undefined) && (sideB !== undefined)) {
        perimetr = 2 * (sideA + sideB);
        return perimetr;
    }
}
console.log (perimetrFunction(undefined,5));
console.log (perimetrFunction( 0, 5));
console.log (perimetrFunction( 4, 5));
console.log (perimetrFunction(sideA = +prompt ("Введите сторону А", ""), sideB = +prompt ("Введите сторону B", "")));


console.log ("Задание 5. Совершенное число");
function perfectNumberFunction(perfectNumber) {
    if (((perfectNumber === undefined) || (perfectNumber === 0))){
        return "Вы ввели неверные данные";
    }
    let sum = 0;
    for ( let i = perfectNumber - 1; i >= 1; --i) {
        if ( perfectNumber % i === 0) sum = sum + i;
    }
    let resultOfFunctioun = "";
    if (perfectNumber === sum) {
    return resultOfFunctioun = true;
    } else return resultOfFunctioun = false;
}
console.log (perfectNumberFunction(6));
console.log (perfectNumberFunction(28));
console.log (perfectNumberFunction(0));
console.log (perfectNumberFunction(undefined));
console.log (perfectNumberFunction(perfectNumber = +prompt ("Введите число для проверки","")));

console.log ("Задание 6. Диапазон");
function rangeOfNumbers (minNumberofRange, maxNumberofRang) {
    if (((minNumberofRange === undefined) || (maxNumberofRang === undefined) || (minNumberofRange >= maxNumberofRang))){
        return "Вы ввели неверные данные";
    }
    let resultRange = "";
    for (let j = minNumberofRange; j <= maxNumberofRang; ++j){
    if (perfectNumberFunction(j) === true) resultRange = resultRange + j + " ";
    }
    if (resultRange === ""){
        return "В диапазоне нету совершенных чисел";
    } else return resultRange;
}
console.log (rangeOfNumbers(4,30));
console.log (rangeOfNumbers(1,5));
console.log (rangeOfNumbers(5,5));
console.log (rangeOfNumbers(5,3));
console.log (rangeOfNumbers(minNumberofRange = +prompt ("Введите начало диапазона ",""),maxNumberofRang = +prompt ("Введите конец диапазона ","")));

console.log ("Задание 7. Время");
function timeFunction (hoursNum, minutesNum, secondsNum){
    let resultTime = ""
    if ((hoursNum >=24) || (minutesNum >=60) || (minutesNum >=60)) return "Вы ввели неверные данные";
    
    if ((hoursNum !== undefined) && (hoursNum.length === 2)){
        resultTime = resultTime + hoursNum +":";
    } else if ((hoursNum !== undefined) && (hoursNum.length === 1)){
        resultTime = resultTime +"0"+ hoursNum +":";
    } else {
        resultTime = resultTime +"00:";
    }
    if ((minutesNum !== undefined) && (minutesNum.length === 2)){
        resultTime = resultTime + minutesNum +":";
    } else if ((minutesNum !== undefined) && (minutesNum.length === 1)){
        resultTime = resultTime +"0"+ minutesNum +":";
    } else {
        resultTime = resultTime +"00:";
    }
    if ((secondsNum !== undefined) && (secondsNum.length === 2)){
        resultTime = resultTime + secondsNum;
    } else if ((secondsNum !== undefined) && (secondsNum.length === 1)){
        resultTime = resultTime +"0"+ secondsNum;
    } else {
    resultTime = resultTime +"00";
    }
    return resultTime;
}
console.log (timeFunction("1","2","3"));
console.log (timeFunction(hoursNum = prompt ("Введите часы",""), minutesNum = prompt ("Введите минуты",""), secondsNum = prompt ("Введите секунды","")));

console.log ("Задание 8. Время в секундах");
function timeInSecondsFunction (hoursNumber, minutesNumber, secondsNumber){
    if ((minutesNumber >= 60) || (minutesNumber >= 60) || (hoursNumber === undefined) || (minutesNumber === undefined) || (minutesNumber === undefined)) return "Вы ввели неверные данные";
    let resultTimeInSeconds = hoursNumber * 60 * 60 +  minutesNumber * 60 + secondsNumber; 
    return resultTimeInSeconds;
}
console.log (timeInSecondsFunction(1,2,3));
console.log (timeInSecondsFunction(hoursNumber = +prompt ("Введите часы",""), minutesNumber = +prompt ("Введите минуты",""), secondsNumber = +prompt ("Введите секунды","")));

console.log ("Задание 9. Время в секундах");
function timeSecondsFunction (numberOfSeconds){
    let hours = Math.floor(numberOfSeconds / 60 / 60);
    let minutes = Math.floor((numberOfSeconds - hours * 60 * 60) / 60);
    let seconds = numberOfSeconds - hours * 60 * 60 - minutes * 60;
    let resultOfTime = "";
    if (hours < 10) {
        resultOfTime = resultOfTime + "0" + hours +":";
    } else resultOfTime = resultOfTime + hours +":";
    if ( minutes < 10) {
        resultOfTime = resultOfTime + "0" + minutes + ":";
    } else resultOfTime = resultOfTime + minutes + ":";
    if (seconds < 10) {
        resultOfTime = resultOfTime + "0" + seconds;
    } else resultOfTime = resultOfTime + seconds;
    return resultOfTime 
}
console.log (timeSecondsFunction(360));
console.log (timeSecondsFunction(numberOfSeconds = +prompt ("Введите время в секундах","")));

console.log ("Задание 10. Разность в датах");
function calcTimeBeetweenDays (hoursFirstDay, minutesFirstDay, secondsFirstDay, hoursSecondDay, minutesSecondDay, secondsSecondDay){
    const amoutOfSecondsFirst = timeInSecondsFunction (hoursFirstDay, minutesFirstDay, secondsFirstDay);
    const amoutOfSecondsSecond = timeInSecondsFunction (hoursSecondDay, minutesSecondDay, secondsSecondDay);
    const amoutOfSecondsAll = (24 * 60 * 60 - amoutOfSecondsFirst) + amoutOfSecondsSecond;
    const timeBeetweenDays = timeSecondsFunction(amoutOfSecondsAll);
    return timeBeetweenDays;
}
console.log (calcTimeBeetweenDays(12, 0, 0, 23, 0, 0));
console.log (calcTimeBeetweenDays(0, 5, 31, 8, 5, 31));
console.log (calcTimeBeetweenDays(8, 5, 31, 23, 5, 31));
console.log (calcTimeBeetweenDays(11, 5, 31, 0, 5, 31));
