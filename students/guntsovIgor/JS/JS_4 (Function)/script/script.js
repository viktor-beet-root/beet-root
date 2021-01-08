console.log("Задание 4.1");
function compare(a, b) {
    if (a < b) return "-1";
    if (a > b) return "1";
    if ((a === null && b === null) || (a === "" && b === "")) {
        return "Vi ne vveli ni odnogo chisla";
    } else return "0";
}
console.log(compare(prompt("Vvedi chislo 1"), prompt("Vvedi chislo 2")));

console.log("Задание 4.2");
function factorial(a) {
    let result = 1;
    for (let i = 1; i <= a; i++) {
        result = i * result;
    }
    return result;
}
console.log(factorial(5));

console.log("Задание 4.3");
function number(a, b, c) {
    return a * 100 + b * 10 + c;
}
console.log(number(9, 9, 9));

console.log("Задание 4.4");
function square(a, b) {
    let result = 1;
    if (a !== undefined && b !== undefined) {
        result = a * b;
    } else {
        result = a * a;
    }
    return result;
}
console.log(square(7));

console.log("Задание 4.5");

function divSum(a) {
    let result = 0;
    for (i = 1; i < a; i++) {
        if (a % i === 0) {
            result = result + i;
        }
    }
    return result;
}

function perfect(a) {
    if (divSum(a) === a) {
        return true;
    }
    if (divSum(a) !== a) {
        return false;
    }
}
console.log(perfect(28));

console.log("Задание 4.6");
function perfetcZone(a, b) {
    const max = Math.max(a, b);
    const min = Math.min(a, b);
    for (let i = min; i <= max; i++) {
        if (perfect(i)) {
            console.log("Chislo " + i + " " + " sovershennoe");
        }
    }
}
console.log(perfetcZone(1, 1000));

console.log("Задание 4.7");
function date(a, b, c) {
    let time = "";
    if (b < 60 && c < 60) {
        time = a + ":" + b + ":" + c;
        return time;
    }
    if (b === undefined && c === undefined) {
        time = a + ":" + "00" + ":" + "00";
        return time;
    }
    if (b === undefined) {
        time = a + ":" + "00" + ":" + c;
        return time;
    }
    if (c === undefined) {
        time = a + ":" + b + ":" + "00";
        return time;
    } else {
        return "vvedi pravilnoe vremia";
    }
}
console.log(date(+prompt("chasi"), +prompt("minuti"), +prompt("sekyndi")));

console.log("Задание 4.8");
function dateTransform(a, b, c) {
    let seconds = 0;
    seconds = a * 60 * 60 + b * 60 + c;
    return seconds;
}
console.log(dateTransform(+prompt("chasi"), +prompt("minuti"), +prompt("sekyndi")) + "s");

console.log("Задание 4.9");
function secondsTransform(a) {
    let time = "";
    const hourSec = 3600;
    const minSec = 60;
    let hours = Math.trunc(a / hourSec);
    let minutes = Math.trunc((a - hours * hourSec) / minSec);
    let seconds = a % minSec;
    time = hours + "h : " + minutes + "m : " + seconds + "s";
    return time;
}
console.log(secondsTransform(3661));

console.log("Задание 4.10");
function timeDiff(a, b, c, a2, b2, c2) {
    let result;
    let time1 = dateTransform(a, b, c);
    let time2 = dateTransform(a2, b2, c2);
    result = Math.max(time1, time2) - Math.min(time1, time2);
    result = secondsTransform(result);
    return result;
}
console.log("raznica" + " : " + timeDiff(+prompt("chasi 1"), +prompt("minuti 1"), +prompt("sekyndi 1"), +prompt("chasi 2"), +prompt("minuti 2"), +prompt("sekyndi 2")));
