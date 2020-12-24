console.log("task 1");

let sum = 0;
for (let i = 0; i < 10; i++) {
	let askedNumber = +prompt("Enter number", "");
	if (!isNaN(askedNumber)) {
		sum += askedNumber;
	} else {
		alert("Try one more time, u entered not a number");
	}
}
console.log(sum);

console.log("task 2");
let askedNumbertask2 = +prompt("Enter number", "");
let askedSecondNumbertask2 = +prompt("Enter number", "");
while (askedNumbertask2 && askedSecondNumbertask2) {
	askedNumbertask2 > askedSecondNumbertask2
		? (askedNumbertask2 %= askedSecondNumbertask2)
		: (askedSecondNumbertask2 %= askedNumbertask2);
}
askedNumbertask2 += askedSecondNumbertask2;
console.log(askedNumbertask2);

console.log("task3");

const askedNumber3 = +prompt("Введите число ", "");
for (let i = 1; i <= askedNumber3; i++) {
	if (askedNumber3 % i == 0) {
		console.log(i);
	}
}

console.log("task 4");
const askedNumber4 = prompt("Введите число", "");
for (let i = 1; i <= askedNumber4.length; i++) {
	console.log(askedNumber4.length);
}

console.log("task 5");
let countZero = 0;
let countPositive = 0;
let countNegative = 0;
let evenNumbers = 0;
let oddNumbers = 0;
for (let i = 0; i < 10; i++) {
	const askedNumber5 = +prompt("Введите число", "");
	if (askedNumber5 % 2 === 0) {
		evenNumbers++;
		if (askedNumber5 > 0) {
			countPositive++;
		} else if (askedNumber5 === 0 || askedNumber5 === -0) {
			countZero++;
		} else {
			countNegative++;
		}
	} else oddNumbers++;
}
console.log(
	"Positive " +
		countPositive +
		" Negative " +
		countNegative +
		" Zeros " +
		countZero +
		" evens " +
		evenNumbers +
		" odds " +
		oddNumbers
);

console.log("task 6");
let askedFirstNumberTask5;
let askedSecondNumberTask5;
let askedAct;
let result;
do {
	askedFirstNumberTask5 = +prompt("Введите число1", "");
	askedSecondNumberTask5 = +prompt("Введите число2", "");
	askedAct = +prompt(
		"Enter + for plus  Enter - for minus Enter * for multiply Enter / for division"
	);
	if (isNaN(askedFirstNumberTask5) || isNaN(askedSecondNumberTask5)) {
		alert(
			"Sorry! I cant calculate it. \nSomehow you entered not a number "
		);
	}
	switch (askedAct) {
		case "+":
			result = askedFirstNumberTask5 + askedSecondNumberTask5;
			console.log(result);
			break;
		case "-":
			result = askedFirstNumberTask5 - askedSecondNumberTask5;
			console.log(result);
			break;
		case "*":
			result = askedFirstNumberTask5 * askedSecondNumberTask5;
			console.log(result);
			break;
		case "/":
			result = askedFirstNumberTask5 / askedSecondNumberTask5;
			console.log(result);
			break;
		default:
			console.log("I think you are done");
	}
} while (askedAct !== 0);

console.log("task 8");
const days = [
	"Monday",
	"Tuesday",
	"Wednesday",
	"Thursday",
	"Friday",
	"Saturday",
	"Sunday",
];
let currentDay = 0;
while (confirm(`${days[currentDay]}. Do u want to check another day?`)) {
	currentDay = currentDay + (1 % days.length);
	if (currentDay === 7) {
		currentDay = 0;
	}
}

console.log("task 9");
let resultTask9 = 0;
for (let i = 2; i <= 9; i++) {
	for (let j = 1; j <= 10; j++) {
		resultTask9 = i * j;
		console.log(`${i} * ${j} = ${resultTask9}`);
	}
}

console.log("task10");
let numberTask10 = 100;
let numberDivision = numberTask10 / 2;
let askedTask10Number = +prompt("Enter number from 0 to 100");
let answer;
do {
	if ((answer = confirm("Your number is " + numberDivision))) {
		answer = askedTask10Number;
		console.log(answer);
	} else if (confirm("Your number is < " + numberDivision + " ?")) {
		numberDivision = Math.round(numberDivision / 2);
	} else if (confirm("Your number is > " + numberDivision + " ?")) {
		numberDivision = Math.round(numberDivision + 1);
	}
} while (answer !== askedTask10Number);
