(function(){
    //Функции отладки
    function startPart(value){
        const text = 'Part № ' + value;
        console.log("+++++++++++++++++++++++++");
        console.log(text);
        return 1
    }

    function endPart(){
        console.log('End Part');
        console.log("+++++++++++++++++++++++++");
        return 1
    }

    //Part 1
    //Написать функцию, которая принимает 2 числа и возвращает -1, если первое меньше, чем второе; 1 – если первое больше, чем второе; и 0 – если числа равны.

    function moreLessEquals(number1, number2){
        if (number1 < number2){
            return -1;
        } else if (number1 > number2){
            return 1;
        }else if (number1 === number2){
            return 0;
        }else {
            return 'Что то пошло не так';
        }
    }

    //Отладка части 1
    startPart('1')
    while(confirm('Выпольнить част 1')){
        let num1P1 = +prompt('Введите число 1');
        let num2P2 = +prompt ('Введите число 2');
        console.log(moreLessEquals(num1P1, num2P2));
    }
    endPart();

    //Part 2
    //Написать функцию, которая вычисляет факториал переданного ей числа.

    function factorial(number){
        let answer = 1
        for(let i=1; i<=number; i++){
            answer = answer * i;
        }
        return answer;
    }

    //Отладка части 2
    startPart('2');
    while(confirm('Выпольнить чать 2')){
        let num2 = +prompt('Число для вычисления факторимал', '');
        let ans2 = factorial(num2);
        console.log(ans2);
    }
    endPart();

    //Part 3
    //Написать функцию, которая принимает три отдельные цифры и превращает их в одно число. Например: цифры 1, 4, 9 превратятся в число 149.

    function threeDigitsPerNumber(number1, number2, number3){
        return number1 * 100 + number2 * 10 + number3;
    }

    startPart('3');
    while (confirm('Выполнить часть 3')){
        let answerP3 = threeDigitsPerNumber(+prompt('Введите цифру №1',''), +prompt('Введите цифру №2',''), +prompt('Введите цифру №1', ''));
        console.log(answerP3);
    }
    endPart();

    //Part4
    //Написать функцию, которая принимает длину и ширину прямоугольника и вычисляет его площадь. Если в функцию передали 1 параметр, то она вычисляет площадь квадрата.

    function areaOfRectangle(number1, number2 = 0){
        if (!number2){
            return number1**2;
        } else{
            return number1 * number2;
        }
    };

    //Отладка части 4.
    startPart('4');
    while (confirm('Выполнить часть 4')){
        const num1P4 = +prompt('Первая сторона прямоугольника', '');
        const num2P4 = +prompt('Вторая сторона прямоуголькик', '');
        console.log("Площа прямогульника равна " + areaOfRectangle(num1P4, num2P4));
        const num3P4 = +prompt('Сторона квадрата', '');
        console.log('Площа квадрата равна ' + areaOfRectangle(num3P4));
    };
    endPart();

    //Part5
    //Написать функцию, которая проверяет, является ли переданное ей число совершенным. Совершенное число – это число, равное сумме всех своих собственных делителей.

    function isTheNumberPerfect(number1){
        let sumOfDivisors = 0;

        for(let i=1; i<number1; i++){
            if( number1 % i === 0){
                sumOfDivisors = sumOfDivisors + i;
            }
        }

        return sumOfDivisors === number1;
    }

    //Part6
    //Написать функцию, которая принимает минимальное и максимальное значения для диапазона, и выводит только те числа из диапазона, которые являются совершенными. Используйте написанную ранее функцию, чтобы узнавать, совершенное число или нет. 

    function perfectNumbers(min, max){
        const perfectNum = [];
        let counter = 0;
        for(let i = min; i<=max; i++){
            if(isTheNumberPerfect(i)){
                perfectNum[counter] = i;
                counter++;
            } 
        }
        return perfectNum;
    }

    //Отладка 5-6
    startPart('5-6');
    while (confirm('Выполнить чатсь 5-6')){
        let num1P6 = +prompt('Нижняя сторона диапазона');
        let num2P6 = +prompt('Верхняя часть диапазона');
        console.log(perfectNumbers(num1P6, num2P6));
    }
    endPart();

    //Part7
    //Написать функцию, которая принимает время (часы, минуты, секунды) и выводит его на экран в формате «чч:мм:сс».Если при вызове функции минуты и/или секунды не были переданы, то выводить их как 00.

    function timeOut(hours, minutes, seconds){

        function remuveUndefined(value){
            if(value === undefined){
                value = '00';
            }
            return value
        }

        function addedZero(value) {
            let answer = '';
            if(value < 10){
                answer = '0' + value;
            }else {
                answer = value + '';
            }
            return answer;
        }
        
        hours = remuveUndefined(hours);
        minutes = remuveUndefined(minutes);
        seconds = remuveUndefined(seconds);
        hours = addedZero(hours);
        minutes = addedZero(minutes);
        seconds = addedZero(seconds);

        return hours + ' : ' + minutes + ' : ' + seconds;
    }

    //Part 8
    //Написать функцию, которая принимает часы, минуты и секунды и возвращает это время в секундах.

    function timeToSeconds(hours, minutes, seconds) {
        const ansver = seconds + minutes*60 + hours*3600;
        return ansver;
    }

    //Part 9
    //Написать функцию, которая принимает количество секунд, переводит их в часы, минуты и секунды и возвращает в виде строки «чч:мм:сс».

    function timeSecondsToString(seconds){
        const hours = ~~(seconds / 3600);
        seconds = seconds % 3600;
        const minutes = ~~(seconds / 60 );
        seconds = seconds % 60;

        return timeOut(hours, minutes, seconds)
    }

    //Part 10
    //Написать функцию, которая считает разницу между датами. Функция принимает 6 параметров, которые описывают 2 даты, и возвращает результат в виде строки «чч:мм:сс». При выполнении задания используйте функции из предыдущих 2-х заданий: сначала обе даты переведите в секунды, узнайте разницу в секундах, а потом разницу переведите обратно в «чч:мм:сс»

    function timeDifference(hours1, minutes1, seconds1, hours2, minutes2, seconds2){
        const timeInSecondsOne = timeToSeconds(hours1, minutes1, seconds1);
        const timeInSecondsTwo = timeToSeconds(hours2, minutes2, seconds2);

        let differenceInTime = 0
        if (timeInSecondsOne > timeInSecondsTwo){
            differenceInTime = timeInSecondsOne - timeInSecondsTwo;
        }else if (timeInSecondsOne <= timeInSecondsTwo) {
            differenceInTime = timeInSecondsTwo - timeInSecondsOne;
        }

        return timeSecondsToString(differenceInTime);
    }

    //Отладка 7-10
    startPart('7-10');
    while(confirm('Выполнить часть 7-10 ')){
        let hours1P10 = +prompt('Введите часы даты 1', '');
        let minutes1P10 = +prompt('Введите минуты первой даты', '');
        let seconds1P10 = +prompt('Введтие секунды первой даты', '');
        let hours2P10 = +prompt('Введите часы даты 2', '');
        let minutes2P10 = +prompt('Введите минуты второй даты', '');
        let seconds2P10 = +prompt('Введтие секунды второй даты', '');

        let answer = timeDifference(hours1P10, minutes1P10, seconds1P10, hours2P10, minutes2P10, seconds2P10);
        console.log(answer);
    }
    endPart();
})()
