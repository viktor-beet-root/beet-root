// однострочный коментрий

/*
let d = 34;
let s = 34;
*/

//alert('Привет мир');

//confirm("А вы уверенны?");


// const name = prompt("Ваше имя?", "");
// let otherName = prompt("Ваше другое имя?", "");
// console.log(otherName);
// otherName = 'Petya';
// console.log(name, otherName);
// console.log(fullName);
// var fullName = "Petya";

// const fistName = prompt("Ваше имя?", "");
// const lastName = prompt("Ваша фамилия?", "");

// console.log(fistName + '"-"' + lastName);
// console.log(confirm('А вы "уверенны" что ваша фамилия:' + lastName + " и имя:" + fistName));
// console.log(confirm(`А вы "уверенны" что ваша фамилия: ${lastName} и имя: ${fistName}`));

// console.log(0.1 + 0.2); //не точно
// console.log((0.1 * 10 + 0.2 * 10) / 10);

// console.log(40 % 2);

// let numberOther = prompt('Enter number XXX ');
// numberOther = numberOther % 100;
// numberOther = (numberOther - (numberOther % 10)) / 10;
// console.log(numberOther);

// let n = +prompt("Введите пятизначное число", "");
// let lastNumber = n % 10;
// n = ~~(n / 10);
// lastNumber = lastNumber * 10000;
// n = lastNumber + n;

let n = prompt("Введите пятизначное число", "");
let lastNumber = n[4];
n = n.slice(0, n.length - 1);
console.log(lastNumber + n);
