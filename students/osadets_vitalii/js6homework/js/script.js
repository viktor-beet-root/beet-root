(function () {
	//1. Создать объект, описывающий автомобиль (производитель, модель, год выпуска, средняя скорость), и следующие функции для работы с этим объектом:
	const car = {
		name: "Tesla",
		model: "Model X",
		year: 2018,
		averageSpeed: 60,
		printCar: printCar,
		getInfoAboutTimeSpend: getInfoAboutTimeSpend,
	};

	// Функция для вывода на экран информации об автомобиле;
	function printCar() {
		let result = console.log(
			"Carname: " +
				this.name +
				". Model: " +
				this.model +
				". Year:" +
				this.year +
				". Average Speed" +
				this.averageSpeed +
				"."
		);
		return result;
	}
	car.printCar();

	// Функция для подсчета необходимого времени для преодоления переданного расстояния со средней скоростью. Учтите, что через каждые 4 часа дороги водителю необходимо делать перерыв на 1 час.
	function getInfoAboutTimeSpend(distance) {
		const restTime = 4;
		let restCounter;
		let result;
		let spentTime = distance / this.averageSpeed;
		if (spentTime > restTime) {
			restCounter = spentTime / restTime;
			spentTime += restCounter;
		}
		result = Math.floor(spentTime);
		return console.log(result);
	}
	car.getInfoAboutTimeSpend(1000);

	//2. Создать объект, хранящий в себе отдельно числитель и знаменатель дроби, и следующие функции для работы с этим объектом:
	const fractionOne = {
		numerator: 2,
		denominator: 3,
	};

	const fractionTwo = {
		numerator: 2,
		denominator: 4,
	};
	const finalFraction = {
		numerator: 0,
		denominator: 0,
	};

	//Функция сложения 2-х объектов-дробей;
	function totalFraction() {
		finalFraction.numerator =
			fractionOne.numerator * fractionTwo.denominator +
			fractionTwo.numerator * fractionOne.denominator;
		finalFraction.denominator =
			fractionOne.denominator * fractionTwo.denominator;
		return reductionFraction();
	}
	console.log(totalFraction());

	//Функция вычитания 2-х объектов-дробей;
	function subtractionFraction() {
		finalFraction.numerator =
			fractionOne.numerator * fractionTwo.denominator -
			fractionTwo.numerator * fractionOne.denominator;
		finalFraction.denominator =
			fractionOne.denominator * fractionTwo.denominator;
		return reductionFraction();
	}
	console.log(subtractionFraction());

	//Функция умножения 2-х объектов-дробей;
	function multiplicationFraction() {
		finalFraction.numerator = fractionOne.numerator * fractionTwo.numerator;
		finalFraction.denominator =
			fractionOne.denominator * fractionTwo.denominator;
		return reductionFraction();
	}
	console.log(multiplicationFraction());

	//Функция деления 2-х объектов-дробей;
	function divisionFraction() {
		finalFraction.numerator =
			fractionOne.numerator * fractionTwo.denominator;
		finalFraction.denominator =
			fractionTwo.numerator * fractionOne.denominator;
		return reductionFraction();
	}
	console.log(divisionFraction());

	//Функция сокращения объекта-дроби.
	function reductionFraction() {
		let min =
			finalFraction.numerator < finalFraction.denominator
				? finalFraction.numerator
				: finalFraction.denominator;
		let max;
		let divider = false;
		while (min > 0) {
			if (
				(finalFraction.numerator % min === 0) &
				(finalFraction.denominator % min === 0)
			) {
				max = min;
				divider = true;
			}
			min--;
		}
		finalFraction.numerator = finalFraction.numerator / max;
		finalFraction.denominator = finalFraction.denominator / max;
		return finalFraction;
	}

	////3. Создать объект, описывающий время (часы, минуты, секунды), и следующие функции для работы с этим объектом:
	const time = {
		hours: 2,
		minutes: 30,
		seconds: 21,
	};

	//Функция вывода времени на экран;

	function getTime() {
		let result = "";
		const values = Object.values(time);
		values.forEach((value) => {
			value < 10 ? (result = "0" + value) : (result += value);
			if (value === time.hours || value === time.minutes) result += ":";
		});
		return result;
	}
	console.log(getTime());

	//Функция изменения времени на переданное количество секунд;
	function setSeconds(sec) {
		time.seconds = time.seconds + sec;
		if (time.seconds > 60) {
			time.minutes = time.minutes + Math.floor(time.seconds / 60);
			time.seconds = time.seconds % 60;
		} else if (time.seconds === 60) {
			time.minutes++;
			time.seconds = 0;
		}
		return getTime();
	}
	console.log(setSeconds(372));

	//Функция изменения времени на переданное количество минут;
	function setMinutes(min) {
		time.minutes = time.minutes + min;
		if (time.minutes > 60) {
			time.hours = time.hours + Math.floor(time.minutes / 60);
			time.minutes = time.minutes % 60;
		} else if (time.minutes === 60) {
			time.hours++;
			time.minutes = 0;
		}
		return getTime();
	}
	console.log(setMinutes(170));

	//Функция изменения времени на переданное количество часов.
	function setHours(hour) {
		if (hour > 24) {
			alert("Enter time in 24h timezone");
		} else {
			time.hours = time.hours + hour;
			if (time.hours === 24) {
				time.hours = 0;
			}
			return getTime();
		}
	}
	console.log(setHours(9));
	console.log(setHours(69));
})();
