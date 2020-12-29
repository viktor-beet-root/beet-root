(function () {
    console.log("Задание 1");

    function comparisonNumbers(num1, num2) {
        let compar;
        if (isNaN(num1) || isNaN(num2)) {
            return 'Вы ввели не число!!!';
        } else if (num1 < num2) {
            compar = -1;
        } else if (num1 > num2) {
            compar = 1;
        } else if ((num1 === undefined && num2 === undefined) || (num1 === 0 && num2 === 0)) {
            return 'Вы либо ввели оба 0 или ничего не ввели!!!';
        } else {
            compar = 0;
        }
        return compar;
    };
    console.log(comparisonNumbers(+prompt('Vvedite chislo_1'), +prompt('Vvedite chislo_2')))

    console.log("Задание 2");

    function factorial(n) {
        if (n === 0) return 1;
        else return n * factorial(n - 1);
    }
    console.log(factorial(+prompt("Введите число для вычисления факториала")));

    console.log("Задание 3");

    function number(num3_1, num3_2, num3_3) {
        if (isNaN(num3_1) || isNaN(num3_2) || isNaN(num3_3)) return "Вы ввели не цифру";
        if (num3_1 < 1 || num3_1 > 9) return 'Первая цифра не может быть: меньше 1 и больше 9';
        if (num3_2 < 0 || num3_2 > 9) return 'Вторая цифра не может быть: меньше 0 и больше 9';
        if (num3_3 < 0 || num3_3 > 9) return 'Третья цифра не может быть: меньше 0 и больше 9';
        const res3 = (num3_1 * 100) + (num3_2 * 10) + num3_3;

        return res3;
    };
    console.log(number(+prompt("Введите первую цифру"), +prompt("Введите вторую цифру"), +prompt("Введите третью цифру")));

    console.log("Задание 4");

    function sqRectangle(a, b) {
        console.log(a + " " + b);
        let sq;
        if (isNaN(a) || isNaN(b)) return "Вы ввели не цифру!!!";
        if (a < 0 || b < 0) return 'Сторона прямоугольника не может быть меньше 0!!!';
        if (a === 0 && b !== 0) {
            sq = b * b;
            return 'Площадь квадрата равна: ' + sq;
        } else if (a !== 0 && b === 0) {
            sq = a * a;
            return 'Площадь квадрата равна: ' + sq;
        } else if (a === 0 && b === 0) {
            return 'Обе стороны равны 0??? или Вы не ввели длину сторон!!!'
        } else {
            sq = a * b;
            return 'Площадь прямоугольника равна: ' + sq;
        }
    };
    console.log(sqRectangle(+prompt('Введите длину стороны треугольника а:'), +prompt('Введите длину стороны треугольника b:')));

    console.log("Задание 5");

    function perfectNumber(num5) {
        let num5_1 = num5;
        let s = 0;
        if (isNaN(num5_1)) return "NaN";
        if (num5_1 === 0) return 'Null';
        for (let i = 1; num5_1 > i; i++)
            if (num5_1 % i == 0) s += i;
        if (s === num5_1) return num5_1;
        return false;
    };

    let res5 = perfectNumber(+prompt('Введите число:'));
    if (res5 === "NaN") {
        console.log("Вы ввели не число!!!");
    } else if (res5 === 'Null') {
        console.log("Вы либо ввели 0, либо не ввели ничего");
    } else if (res5 !== false) {
        console.log("Введенное число являеться совершенным!!")
    } else {
        console.log("Введенное число НЕ являеться совершенным!!!");
    }

    console.log("Задание 6");

    function perfectNumDiapasone(num6_1, num6_2) {
        let num6_3;
        console.log("В диапазоне присутствуют следующие совершенные числа: ");
        for (let j = num6_1; j < num6_2; j++) {
            num6_3 = perfectNumber(j);
            if (num6_3 === false) continue;
            console.log(num6_3);
        }
    };
    let res6 = perfectNumDiapasone(+prompt('Введите число начала диапазона:'), +prompt('Введите число конца диапазона:'));

    console.log("Задание 7");

    function takesTime(hh, mm, ss) {
        let time7 = '';
        let hh1 = '';
        let mm1 = '';
        let ss1 = '';
        if (isNaN(hh) || isNaN(mm) || isNaN(ss)) return "Вы ввели не числа!!!";
        if (hh < 0 || mm < 0 || ss < 0) return 'Часы, минуты и секунды не могут меньше 0!!!';
        if (hh > 23) return 'Часы не могут принимать значение больше 23!!!';
        if (mm > 59 || ss > 59) return 'Минуты и секунды не могут принимать знчение больше 59!!!';
        (hh < 10) ? (hh1 = '0' + hh) : (hh1 = hh);
        (mm < 10) ? (mm1 = '0' + mm) : (mm1 = mm);
        (ss < 10) ? (ss1 = '0' + ss) : (ss1 = ss);
        time7 = hh1 + ':' + mm1 + ':' + ss1;
        return time7;
    };
    let res7 = takesTime(+prompt('Введите часы:'), +prompt('Введите минуты:'), +prompt('Введите секунды:'));
    console.log('Время ' + res7);
    console.log("Задание 8");

    function timeHourInSec(h, m, s) {
        let hh = h;
        let mm = m;
        let ss = s;
        let hh1 = '';
        let mm1 = '';
        let ss1 = '';
        const hSec = 3600;
        const mSec = 60;
        let seconds;
        if (isNaN(hh) || isNaN(mm) || isNaN(ss)) return "Вы ввели не числа!!!";
        if (hh < 0 || mm < 0 || ss < 0) return 'Часы, минуты и секунды не могут меньше 0!!!';
        if (hh > 23) return 'Часы не могут принимать значение больше 23!!!';
        if (mm > 59 || ss > 59) return 'Минуты и секунды не могут принимать знчение больше 59!!!';
        (hh < 10) ? (hh1 = '0' + hh) : (hh1 = hh);
        (mm < 10) ? (mm1 = '0' + mm) : (mm1 = mm);
        (ss < 10) ? (ss1 = '0' + ss) : (ss1 = ss);
        seconds = hh * hSec + mm * mSec + ss;
        return seconds;
    };

    let res8 = timeHourInSec(+prompt('Введите часы:'), +prompt('Введите минуты:'), +prompt('Введите секунды:'));
    console.log("Введеному количеству времени, соответсвует " + res8 + " секунд");

    console.log("Задание 9");

    function timeSecInHour(ss9) {
        let ss2 = '';
        let mm2 = '';
        let hh2 = '';
        let hh = '';
        let mm = '';
        let ss = '';
        let time = '';
        const hSec = 3600;
        const mSec = 60;
        if (isNaN(ss9)) return 'Вы ввели не числа!!!';
        if (ss9 < 0) return 'Cекунды не могут меньше 0!!!';
        if (ss9 < 3600) {
            hh2 = 0;
            mm2 = ~~(ss9 / mSec);
            ss2 = ss9 % mSec;
        } else {
            hh2 = ~~(ss9 / hSec);
            mm2 = ~~((ss9 - (hh2 * hSec)) / mSec);
            ss2 = (ss9 - (hh2 * hSec)) % mSec;
        }
        (hh2 < 10) ? (hh = '0' + hh2) : (hh = hh2);
        (mm2 < 10) ? (mm = '0' + mm2) : (mm = mm2);
        (ss2 < 10) ? (ss = '0' + ss2) : (ss = ss2);
        time = hh + ':' + mm + ':' + ss;
        return time;
    };
    let res9 = timeSecInHour(+prompt('Введите количество секунд:'));
    console.log("Веденому количеству секунд, соответствует " + res9);

    console.log("Задание 10");

    function differenceTime(hh3, mm3, ss3, hh4, mm4, ss4) {
        let ss10;
        let ss10_1 = timeHourInSec(hh3, mm3, ss3);
        let ss10_2 = timeHourInSec(hh4, mm4, ss4);
        let ss10_3;
        if (ss10_1 > ss10_2) {
            ss10 = ss10_1 - ss10_2;
        } else if (ss10_1 < ss10_2) {
            ss10 = ss10_2 - ss10_1;
        } else {
            ss10 = 0;
        }
        ss10_3 = timeSecInHour(ss10);
        return ss10_3;
    };

    let res10 = differenceTime(+prompt('Введите часы_1:'), +prompt('Введите минуты_1:'), +prompt('Введите секунды_1:'), +prompt('Введите часы_2:'), +prompt('Введите минуты_2:'), +prompt('Введите секунды_2:'));
    console.log('Разница во времени составляет ' + res10);
})();
