console.log("Задание 4.1");
function compare(a, b) {
    if (a < b) return "-1";
    if (a > b) return "1";
    if (a === b) return "0";
    if (a === undefined || b === undefined) return "Vi ne vveli chislo";
}
console.log(compare(+prompt("Vvedi chislo 1"), +prompt("Vvedi chislo 2")));

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

function perfect(a) {
    let result = 0;
    for (i = 1; i < a; i++) {
        if (a % i === 0) {
            result = result + i;
        }
    }
    if (result === a) {
        console.log("4islo" + " " + a + " " + "sovershennoe");
    }
    if (result !== a) {
        console.log("4islo" + " " + a + " " + "ne sovershennoe");
    }
    return result;
}
console.log(perfect(6));

console.log("Задание 4.6");
function perfetcZone(a, b) {
    for (let i = Math.min(a, b); i <= Math.max(a, b); i++) {
        if (i !== perfect(i)) continue;
        console.log(i + " " + " SOVERSHENNOE");
    }
}
console.log(perfetcZone(1, 100));

console.log("Задание 4.7");
function date(a, b, c) {
    let time = "";
    if (a < 24 && b < 60 && c < 60) {
        return (time = a + ":" + b + ":" + c);
    }
    if (b === undefined && c === undefined) {
        return (time = a + ":" + "00" + ":" + "00");
    }
    if (b === undefined) {
        return (time = a + ":" + "00" + ":" + c);
    }
    if (c === undefined) {
        return (time = a + ":" + b + ":" + "00");
    } else {
        return "vvedi pravilnoe vremia";
    }
}
console.log(date(+prompt("chasi"), +prompt("minuti"), +prompt("sekyndi")));

console.log("Задание 4.8");
function dateTransform(a, b, c) {
    let seconds = 0;
    return (seconds = a * 60 * 60 + b * 60 + c);
}
console.log(dateTransform(+prompt("chasi"), +prompt("minuti"), +prompt("sekyndi")) + "s");

console.log("Задание 4.9");
function secondsTransform(a) {
    let time = "";
    let hours = Math.trunc(a / 3600);
    let minutes = Math.trunc((a - hours * 3600) / 60);
    let seconds = a % 60;
    return (time = hours + "h : " + minutes + "m : " + seconds + "s");
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
