//task 1
(function () {
	function getNumbers(firstNumber, secondNumber) {
		let result = 0;
		if (firstNumber < secondNumber) {
			result = console.log("-1");
			return result;
		}
		if (firstNumber > secondNumber) {
			result = console.log("1");
			return result;
		}
		if (firstNumber === secondNumber) {
			result = console.log("0");
			return result;
		} else {
			result = console.log(
				"You entered not a number or did other mistake"
			);
			return result;
		}
	}
	getNumbers(+prompt("enter first number"), +prompt("enter second number"));
})();

//task2
(function () {
	function factorial(number) {
		let result = 1;
		if (number === undefined || isNaN(number)) {
			console.log(result);
			return false;
		}
		if (number === 1) {
			console.log(result);
			return result;
		} else {
			for (let i = 1; i <= number; i++) {
				result = result * i;
			}
			console.log(result);
			return result;
		}
	}
	factorial(+prompt("enter number"));
})();

//task3
(function () {
	function combineNumbers(firstNumber, secondNumber, thirdNumber) {
		let result = 1;
		if (isNaN(firstNumber) || isNaN(secondNumber) || isNaN(thirdNumber)) {
			result = console.log("You entered not a number!");
			return result;
		} else {
			result = firstNumber + "" + secondNumber + "" + thirdNumber;
			console.log(result);
			return result;
		}
	}
	combineNumbers(
		+prompt("enter first number"),
		+prompt("enter second number"),
		+prompt("enter third number")
	);
})();

//task4
(function () {
	function calcSquare(square, result) {
		result = console.log(square * 4);
		return result;
	}

	function checkNumber(value) {
		number = value === 0 || isNaN(value) || value.length === 0;
		return number;
	}

	function getStarted(length, weight) {
		if (checkNumber(length) & checkNumber(weight)) {
			console.log("You havent entered any parameters");
		} else getWeightAndLength(length, weight);
	}

	function getWeightAndLength(length, weight) {
		let result = 1;
		if (length === 0 || isNaN(length) || length.length === 0) {
			calcSquare(weight, result);
		}
		if (weight === 0 || isNaN(weight) || weight.length === 0) {
			calcSquare(length, result);
		} else {
			result = console.log(length * weight);
			return result;
		}
	}
	getStarted(+prompt("enter first number"), +prompt("enter first number"));
})();

//task5
(function () {
	function getStarted(value) {
		if (isNaN(value)) {
			console.log("You entered not a number");
		} else if (!value) {
			console.log("You forgot to enter the number");
		} else checkIfPerfect(value);
	}

	function checkIfPerfect(number) {
		let result;
		for (let i = 1; i <= number; i++) {
			result = 0;
			for (let j = 1; j < i; j++) {
				if (i % j === 0) result += j;
			}
			if (i === result) console.log(i);
		}
	}
	getStarted(+prompt("Enter number"));
})();

//task6
(function () {
	function getStarted(firstNumber, secondNumber) {
		if (isNaN(firstNumber) || isNaN(secondNumber)) {
			console.log("You entered not a number");
		} else if (!secondNumber) {
			console.log("You forgot to enter the number");
		} else if (secondNumber < firstNumber) {
			console.log(
				"Please try one more time, first number is lower than second number"
			);
		} else checkIfPerfect(firstNumber, secondNumber);
	}

	function checkIfPerfect(firstNumber, secondNumber) {
		let result;
		for (let i = firstNumber; i <= secondNumber; i++) {
			result = 0;
			for (let j = 0; j < i; j++) {
				if (i % j === 0) result += j;
			}
			if (i === result) console.log(i);
		}
	}
	getStarted(+prompt("Enter number"), +prompt("Enter second number"));
})();

//task7
(function () {
	function getHours(hours) {
		if (isNaN(hours)) {
			result = console.log("You entered not a number (for hours)");
			return result;
		}
		if (hours > 24 || hours < 0) {
			result = console.log("We have 24 hours in one day");
			return result;
		}
	}

	function getMinutes(minutes) {
		if (isNaN(minutes)) {
			result = console.log("You entered not a number (for minutes)");
			return result;
		}
		if (minutes > 60 || minutes < 0) {
			result = console.log("We have 60 minutes in one hour!");
			return result;
		}
	}

	function getSeconds(seconds) {
		if (isNaN(seconds)) {
			result = console.log("You entered not a number (for seconds)");
			return result;
		}
		if (seconds > 60 || seconds < 0) {
			result = console.log("We have 60 seconds in one hour");
			return result;
		}
	}

	function showTime(hours, minutes, seconds) {
		if (
			(hours > 0 && hours <= 24) &
			(minutes > 0 && minutes <= 60) &
			(seconds > 0 && seconds <= 60)
		) {
			result = console.log(hours + ":" + minutes + ":" + seconds);
			return result;
		}
		if (hours > 0 && hours <= 24 && (minutes === 0) & (seconds === 0)) {
			result = console.log(hours + ":" + "00:" + "00");
			return result;
		}
		if (hours > 0 && hours <= 24 && minutes === 0) {
			result = console.log(hours + ":" + "00:" + seconds);
			return result;
		}
		if (hours > 0 && hours <= 24 && seconds === 0) {
			result = console.log(hours + ":" + minutes + ":" + "00");
			return result;
		}
	}

	function getTime(hours, minutes, seconds) {
		getHours(hours);
		getMinutes(minutes);
		getSeconds(seconds);
		showTime(hours, minutes, seconds);
	}

	getTime(
		+prompt("Enter hours"),
		+prompt("Enter minutes"),
		+prompt("Enter seconds")
	);
})();

//task8
(function () {
	function getTime(hours, minutes, seconds) {
		if (
			hours < 0 ||
			isNaN(hours) ||
			minutes < 0 ||
			isNaN(minutes) ||
			seconds < 0 ||
			isNaN(seconds)
		) {
			result = console.log("You made a mistake");
			return result;
		} else {
			transformToSeconds = hours * 3600 + minutes * 60 + seconds;
			result = console.log(transformToSeconds + " seconds");
			return result;
		}
	}
	getTime(
		+prompt("Enter hours"),
		+prompt("Enter minutes"),
		+prompt("Enter seconds")
	);
})();

//task9
(function () {
	function checkNumber(seconds) {
		if (isNaN(seconds) || seconds < 0) {
			result = console.log("You made a mistake");
			return result;
		}
	}

	function showTime(seconds) {
		checkNumber(seconds);
		getTime(seconds);
	}

	function getTime(seconds) {
		if (!isNaN(seconds) && seconds > 0) {
			let result = "";
			let minutes = Math.floor(seconds / 60);
			seconds = seconds % 60;
			let hours = Math.floor(minutes / 60);
			minutes = minutes % 60;
			if (minutes < 10) minutes = "0" + minutes;
			if (hours < 10) hours = "0" + hours;
			if (seconds < 10) seconds = "0" + seconds;
			result = console.log(hours + ":" + minutes + ":" + seconds);
			return result;
		}
	}
	showTime(+prompt("Enter hours"));
})();

//task 10
(function () {
	function calcDate(hours, minutes, seconds) {
		transformToSeconds = hours * 3600 + minutes * 60 + seconds;
		result = transformToSeconds;
		return result;
	}

	function makeValidation(hours, minutes, seconds) {
		if (
			hours <= 24 ||
			hours >= 0 ||
			!isNaN(hours) ||
			minutes >= 0 ||
			minutes <= 60 ||
			Number.isInteger(minutes) ||
			seconds <= 60 ||
			seconds >= 0 ||
			Number.isInteger(seconds)
		) {
			return true;
		}
	}

	function getTime(seconds) {
		if (!isNaN(seconds) && seconds > 0) {
			let result = "";
			let minutes = Math.floor(seconds / 60);
			seconds = seconds % 60;
			let hours = Math.floor(minutes / 60);
			minutes = minutes % 60;
			if (minutes < 10) minutes = "0" + minutes;
			if (hours < 10) hours = "0" + hours;
			if (seconds < 10) seconds = "0" + seconds;
			result = console.log(hours + ":" + minutes + ":" + seconds);
			return result;
		} else {
			console.log("You have a mistake");
		}
	}

	function getTwoDates(
		hoursFirstDate,
		minutesFirstDate,
		secondsFirstDate,
		hoursSecondDate,
		minutesSecondDate,
		secondsSecondDate
	) {
		if (
			makeValidation(
				hoursFirstDate,
				minutesFirstDate,
				secondsFirstDate
			) &&
			makeValidation(
				hoursSecondDate,
				minutesSecondDate,
				secondsSecondDate
			)
		) {
			let dateinSeconds = 0;
			let difference = 0;
			let firstDate = calcDate(
				hoursFirstDate,
				minutesFirstDate,
				secondsFirstDate
			);
			let secondDate = calcDate(
				hoursSecondDate,
				minutesSecondDate,
				secondsSecondDate
			);

			if (firstDate > secondDate) {
				dateinSeconds = firstDate - secondDate;
				difference = console.log(getTime(dateinSeconds));
				return difference;
			} else if (firstDate < secondDate) {
				dateinSeconds = secondDate - firstDate;
				difference = console.log(getTime(dateinSeconds));
				return difference;
			}
		} else {
			console.log("You made a mistake");
		}
	}
	getTwoDates(0,16 , 2, 4, 20, 15);
})();
