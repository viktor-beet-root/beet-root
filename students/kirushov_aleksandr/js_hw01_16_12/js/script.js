console.log("Задание 1");
const firstName = prompt("Веведите Ваше имя", "");
console.log("Привет, " + firstName + "!");

console.log("Задание 2");
const birthYear = prompt("Укажите год Вашего рождения", "");
const thisYear = 2020;
const age = thisYear - birthYear;
console.log("Вам " + age + " лет(год)!");

console.log("Задание 3");
const square = prompt("Введите длину стороны квадрата", "");
const p = square * 4;
console.log("Периметр квадрата равен " + p);

console.log("Задание 4");
const circle = prompt("Введите радиус окружности", "");
const sCircle = 3.14 * (circle ** 2);
console.log("Площадь круга равна " + sCircle);

console.log("Задание 5");
const distance = prompt("Укажите расстояние между городами А и Б, км", "");
const time = prompt("Укажите за сколько часов Вы хотите добраться из города А в Б, час", "");
const speed = distance / time;
console.log("Чтоб добраться из города А в город Б за " + time + " час(ов). Нужно двигаться со скоростью " + speed + " км/час");

console.log("Задание 6");
const dollar = prompt("Укажите сумму которую хотите обменять, доллар США", "");
const rate = 0.82;
const evro = dollar * rate;
console.log("Сумма в евро равна " + evro);

console.log("Задание 7");
const gB = prompt("Укажите размер флешки, Гб", "");
const mB = gB * 1024;
const files = ~~(mB / 820);
console.log("на даную флешку поместиться " + files + " файл(ов) размером 820 Мб");

console.log("Задание 8");
const suma = prompt("Укажите сумму денег в Вашем кошельке, грн", "");
const price = prompt("Укажите цену одной шоколадки, грн/шт", "");
const quantity = suma / price;
const quantity2 = Math.trunc(quantity);
let rest = quantity - quantity2;
rest = parseFloat(rest.toFixed(2));
console.log(quantity2);
console.log("Вы сможете купить " + quantity2 + " шоколадок и у Вас останется " + rest + " грн.");

console.log("Задание 9");
const numberBase = prompt("Укажите трехзначное число", "");
console.log("Ваше число задом наперед " + numberBase[2] + numberBase[1] + numberBase[0]);

console.log("Задание 10");
const deposit = prompt("Укажите сумму вклада, грн", "");
const percent2m = (0.05 / 365) * 60;
let percent = deposit * percent2m;
console.log("Сумма начисленных процентов " + percent.toFixed(2) + " грн.");
