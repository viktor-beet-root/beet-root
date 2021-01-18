(function () {

    console.log("Задание 1. Написать функцию, которая принимает 2 числа и возвращает -1, если первое меньше, чем второе; 1 – если первое больше, чем второе; и 0 – если числа равны.");

    function comparisonNumbers(num1, num2) {
        let compar;

        if (isNaN(num1) || isNaN(num2) || num1 === undefined || num2 === undefined) {
            return 'Вы ввели не число или ничего не ввели!!!';
        } else if (num1 < num2) {
            compar = -1;
        } else if (num1 > num2) {
            compar = 1;
        } else {
            compar = 0;
        }

        return compar;

    };

    console.log(comparisonNumbers(+prompt('Vvedite chislo_1'), +prompt('Vvedite chislo_2')));

    console.log("Задание 2. Написать функцию, которая вычисляет факториал переданного ей числа.");

    function factorial(n) {
        if (n === 0) return 1;
        else return n * factorial(n - 1);
    }
    console.log(factorial(+prompt("Введите число для вычисления факториала")));

    console.log("Задание 3. Написать функцию, которая принимает три отдельные цифры и превращает их в одно число. Например: цифры 1, 4, 9 превратятся в число 149.");

    function number(num3_1, num3_2, num3_3) {
        if (isNaN(num3_1) || isNaN(num3_2) || isNaN(num3_3)) return "Вы ввели не цифру";
        if (num3_1 < 1 || num3_1 > 9) return 'Первая цифра не может быть: меньше 1 и больше 9';
        if (num3_2 < 0 || num3_2 > 9) return 'Вторая цифра не может быть: меньше 0 и больше 9';
        if (num3_3 < 0 || num3_3 > 9) return 'Третья цифра не может быть: меньше 0 и больше 9';
        const res3 = (num3_1 * 100) + (num3_2 * 10) + num3_3;

        return res3;
    };
    console.log(number(+prompt("Введите первую цифру"), +prompt("Введите вторую цифру"), +prompt("Введите третью цифру")));

    console.log("Задание 4. Написать функцию, которая принимает длину и ширину прямоугольника и вычисляет его площадь. Если в функцию передали 1 параметр, то она вычисляет площадь квадрата.");

    function sqRectangle(a, b) {
        let sq;
        if (a === 0 || isNaN(a)) return 'Вы не ввели основной параметр - а!!!';
        if (a < 0 || b < 0) return 'Сторона прямоугольника не может быть меньше 0!!!';
        if (a !== 0 && (b === 0 || isNaN(b))) {
            sq = a * a;
            return 'Площадь квадрата равна: ' + sq;
        } else {
            sq = a * b;
            return 'Площадь прямоугольника равна: ' + sq;
        }
    };
    console.log(sqRectangle(+prompt('Введите длину стороны прямоугольника а:'), +prompt('Введите длину стороны прямоугольника b:')));

    console.log("Задание 5. Написать функцию, которая проверяет, является ли переданное ей число совершенным. Совершенное число – это число, равное сумме всех своих собственных делителей.");

    function perfectNumber(num5) {
        let num5_1 = num5;
        let s = 0;

        if (isNaN(num5_1)) return "NaN";
        if (num5_1 === 0) return 'Null';
        for (let i = 1; num5_1 > i; i++) {

            if (num5_1 % i == 0) s += i;

        }
        if (s === num5_1) return num5_1;

        return false;
    };

    let res5 = perfectNumber(+prompt('Введите число:'));

    function answerPerfectNumber(a) {

        if (a === "NaN") {
            return 'Вы ввели не число!';
        } else if (a === 'Null') {
            return "Вы либо ввели 0, либо не ввели ничего!";
        } else if (a !== false) {
            return "Введенное число являеться совершенным!"
        } else {
            return "Введенное число НЕ являеться совершенным!";
        }
    };
    console.log(answerPerfectNumber(res5));

    console.log("Задание 6. Написать функцию, которая принимает минимальное и максимальное значения для диапазона, и выводит только те числа из диапазона, которые являются совершенными. Используйте написанную ранее функцию, чтобы узнавать, совершенное число или нет.");

    function perfectNumDiapasone(num6_1, num6_2) {
        let num6_3;
        let answer6 = "";
        if (num6_1 === 0 && num6_2 === 0) return 'Вы либо ввели оба 0? Или не ввели ничего!';
        if (Math.min(num6_1, num6_2) < 0) return 'В диапазоне не могут присутствовать значения ниже нуля!';
        for (let j = Math.min(num6_1, num6_2); j < Math.max(num6_1, num6_2); j++) {
            num6_3 = perfectNumber(j);
            if (num6_3 === j) {
                answer6 = answer6 + ' ' + num6_3;
            }
            if (num6_3 === false) continue;
        }
        return "В диапазоне присутствуют следующие совершенные числа:" + answer6;

    };
    console.log(perfectNumDiapasone(+prompt('Введите число начала диапазона:'), +prompt('Введите число конца диапазона:')));

    console.log("Задание 7. Написать функцию, которая принимает время (часы, минуты, секунды) и выводит его на экран в формате «чч:мм:сс».Если при вызове функции минуты и/или секунды не были переданы, то выводить их как 00.");

    function takesTime(hh, mm, ss) {
        let time7 = '';
        let hours = '';
        let minutes = '';
        let seconds = '';
        if (isNaN(hh) || isNaN(mm) || isNaN(ss)) return "Вы ввели не числа!!!";
        if (hh < 0 || mm < 0 || ss < 0) return 'Часы, минуты и секунды не могут меньше 0!!!';
        if (hh > 23) return 'Часы не могут принимать значение больше 23!!!';
        if (mm > 59 || ss > 59) return 'Минуты и секунды не могут принимать знчение больше 59!!!';
        hours = (hh < 10) ? ('0' + hh) : hh;
        minutes = (mm < 10) ? ('0' + mm) : mm;
        seconds = (ss < 10) ? ('0' + ss) : ss;
        time7 = hours + ':' + minutes + ':' + seconds;
        return time7;
    };
    let res7 = takesTime(+prompt('Введите часы:'), +prompt('Введите минуты:'), +prompt('Введите секунды:'));
    console.log('Время ' + res7);

    console.log("Задание 8. Написать функцию, которая принимает часы, минуты и секунды и возвращает это время в секундах.");

    function timeHourInSec(hh, mm, ss) {
        const hSec = 3600;
        const mSec = 60;
        let timeInSeconds;
        if (isNaN(hh) || isNaN(mm) || isNaN(ss)) return "Вы ввели не числа!!!";
        if (hh < 0 || mm < 0 || ss < 0) return 'Часы, минуты и секунды не могут меньше 0!!!';
        if (hh > 23) return 'Часы не могут принимать значение больше 23!!!';
        if (mm > 59 || ss > 59) return 'Минуты и секунды не могут принимать значение больше 59!!!';

        timeInSeconds = hh * hSec + mm * mSec + ss;
        return timeInSeconds;
    };

    let res8 = timeHourInSec(+prompt('Введите часы:'), +prompt('Введите минуты:'), +prompt('Введите секунды:'));
    console.log("Введеному количеству времени, соответсвует " + res8 + " секунд");

    console.log("Задание 9. Написать функцию, которая принимает количество секунд, переводит их в часы, минуты и секунды и возвращает в виде строки «чч:мм:сс».");

    function timeSecInHour(second) {
        let hours = '';
        let minuts = '';
        let seconds = '';
        let time = '';
        const hSec = 3600;
        const mSec = 60;
        if (isNaN(second)) return 'Вы ввели не числа!!!';
        if (second < 0) return 'Cекунды не могут быть меньше 0!!!';

        hours = ~~(second / hSec);
        second = second % hSec;
        minuts = minuts = ~~(second / mSec);
        second = second % mSec;

        hours = (hours < 10) ? ('0' + hours) : hours;
        minuts = (minuts < 10) ? ('0' + minuts) : minuts;
        seconds = (second < 10) ? ('0' + second) : second;
        time = hours + ':' + minuts + ':' + seconds;
        return time;
    };
    let res9 = timeSecInHour(+prompt('Введите количество секунд:'));
    console.log("Веденому количеству секунд, соответствует " + res9);

    console.log("Задание 10. Написать функцию, которая считает разницу между датами. Функция принимает 6 параметров, которые описывают 2 даты, и возвращает результат в виде строки «чч:мм:сс». При выполнении задания используйте функции из предыдущих 2-х заданий: сначала обе даты переведите в секунды, узнайте разницу в секундах, а потом разницу переведите обратно в «чч:мм:сс»");

    function differenceTime(hh1, mm1, ss1, hh2, mm2, ss2) {
        let timeDifferen;
        const timeSec_1 = timeHourInSec(hh1, mm1, ss1);
        const timeSec_2 = timeHourInSec(hh2, mm2, ss2);
        timeDifferen = Math.max(timeSec_1, timeSec_2) - Math.min(timeSec_1, timeSec_2);
        timeDifferen = timeSecInHour(timeDifferen);
        return timeDifferen;
    };

    let res10 = differenceTime(+prompt('Введите часы_1:'), +prompt('Введите минуты_1:'), +prompt('Введите секунды_1:'), +prompt('Введите часы_2:'), +prompt('Введите минуты_2:'), +prompt('Введите секунды_2:'));
    console.log('Разница во времени составляет ' + res10);
})();
