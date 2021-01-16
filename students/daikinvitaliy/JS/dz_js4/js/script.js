console.log("Задание 1");
(function () {
    function comparison(oneNambr, twoNambr) {
        if (oneNambr < twoNambr) {
            return -1;
        } else if (oneNambr > twoNambr) {
            return 1;
        }
        return 0;
    }
    const test = comparison(6, 5);
    console.log(test);

    console.log("Задание 2");

    function factorial(factorialNambr) {
        let nNasmbr = 1;
        for (i = 1; i <= factorialNambr; i++) {
            nNasmbr = i * nNasmbr;
        }
        return nNasmbr;
    }
    const test1 = factorial(5);
    console.log(test1);

    console.log("Задание 3");

    function addition(oneNambr, twoNambr, thirdNamber) {
        let soum = oneNambr * 100;
        soum = soum + twoNambr * 10;
        soum = soum + thirdNamber;
        return soum;
    }
    const test2 = addition(3, 5, 9);
    console.log(test2);

    console.log("Задание 4");

    function square(oneSide, secondSide) {
        if (secondSide === undefined) {
            const perimeter = oneSide * oneSide;
            return perimeter;
        }
        const perimeter = oneSide * secondSide;
        return perimeter;
    }
    const test3 = square(5);
    console.log(test3);

    console.log("Задание 5");
    function perfection(oneNambr) {
        let sum = 0;
        for (let i = oneNambr - 1; i >= 0; i--) {
            if (oneNambr % i === 0) {
                sum = sum + i;
            }
        }
        return oneNambr === sum;
    }
    const test4 = perfection(8128);
    if (!test4) {
        console.log("Не совершенное число");
    } else {
        console.log("Совершенное число");
    }
    console.log("Задание 6");
    function range(oneRange, twoRange) {
        for (let i = oneRange; i <= twoRange; i++) {
            const result = perfection(i);
            if (result) {
                console.log(i + " совершенное число");
            }
        }
    }
    range(1, 30);
    console.log("Задание 7");
    function validationNumber(number, startRange, endRange) {
        number = +number;
        startRange = +startRange;
        endRange = +endRange;
        return !(number <= startRange || number >= endRange || isNaN(number));
    }
    function time(hours, minutes, seconds) {
        let timeHohrs = "";
        let timeMinutes = "";
        let timeSeconds = "";

        if (validationNumber(hours, 0, 24)) {
            if (hours < 10) {
                timeHohrs = "0" + hours;
            } else {
                timeHohrs = hours;
            }
        } else {
            timeHohrs = "00";
        }

        if (validationNumber(minutes, 0, 60)) {
            if (minutes < 10) {
                timeMinutes = "0" + minutes;
            } else {
                timeMinutes = minutes;
            }
        } else {
            timeMinutes = "00";
        }
        if (validationNumber(seconds, 0, 60)) {
            if (seconds < 10) {
                timeSeconds = "0" + seconds;
            } else {
                timeSeconds = seconds;
            }
        } else {
            timeSeconds = "00";
        }
        const generalTime = timeHohrs + ":" + timeMinutes + ":" + timeSeconds;
        return generalTime;
    }
    console.log(
        time(
            prompt("введите часы", ""),
            prompt("введите минуты", ""),
            prompt("введите секунды", "")
        )
    );
    console.log(
        "Задание 8. Написать функцию, которая принимает время (часы, минуты, секунды) и выводит его на экран в формате «чч:мм:сс».Если при вызове функции минуты и/или секунды не были переданы, то выводить их как 00."
    );
    function taim(hours, minutes, seconds) {
        let totalSeconds = 0;
        if (validationNumber(hours, 0, 24)) {
            totalSeconds = hours * 3600;
        } else {
            console.log("не верно введены часы");
        }
        if (validationNumber(minutes, 0, 60)) {
            totalSeconds = totalSeconds + minutes * 60;
        } else {
            console.log("не верно введены минуты");
        }
        if (validationNumber(seconds, 0, 60)) {
            totalSeconds = totalSeconds + seconds;
        } else {
            console.log("не верно введены секунды");
        }
        return totalSeconds;
    }
    console.log(
        taim(
            prompt("введите часы", ""),
            prompt("введите минуты", ""),
            prompt("введите секунды", "")
        )
    );
    console.log("Задание 9");
    function totalSeconds(seconds) {
        let hours = 0;
        let minutes = 0;
        let secondss = 0;
        hours = Math.trunc(seconds / 3600);
        minutes = Math.trunc((seconds - hours * 3600) / 60);
        secondss = seconds - (hours * 3600 + minutes * 60);
        let hoursStr = hours;
        let minutesStr = minutes;
        let secondssStr = secondss;
        if (hours < 10) {
            hoursStr = "0" + hours;
        }
        if (minutes < 10) {
            minutesStr = "0" + minutes;
        }
        if (secondss < 10) {
            secondssStr = "0" + secondss;
        }
        const res = hoursStr + ":" + minutesStr + ":" + secondssStr;

        return res;
    }
    console.log(totalSeconds(prompt("введите секунды", "")));
    console.log("Задание 10");
    function timeСomparison(
        hours1,
        minutes1,
        seconds1,
        hours2,
        minutes2,
        seconds2
    ) {
        const taim1 = taim(hours1, minutes1, seconds1);
        const taim2 = taim(hours2, minutes2, seconds2);
        const secondsComparison = Math.abs(taim1 - taim2);
        const result = totalSeconds(secondsComparison);
        return result;
    }
    console.log(
        timeСomparison(
            prompt("введите часы №1", ""),
            prompt("введите минуты №1", ""),
            prompt("введите секунды №1", ""),
            prompt("введите часы №2", ""),
            prompt("введите минуты №2", ""),
            prompt("введите секунды №2", "")
        )
    );
})();
