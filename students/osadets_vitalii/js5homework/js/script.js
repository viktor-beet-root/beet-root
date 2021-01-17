// 1. Создать массив «Список покупок». Каждый элемент массива является объектом, который содержит название продукта, необходимое количество и куплен или нет. Написать несколько функций для работы с таким массивом.
// Вывод всего списка на экран таким образом, чтобы сначала шли некупленные продукты, а потом – купленные.
// Добавление покупки в список. Учтите, что при добавлении покупки с уже существующим в списке продуктом, необходимо увеличивать количество в существующей покупке, а не добавлять новую.
// Покупка продукта. Функция принимает название продукта и отмечает его как купленный.
(function () {
	const shoppingList = [
		{
			nameOfPrdouct: "milk",
			qty: 2,
			value: true,
		},
		{
			nameOfPrdouct: "banana",
			qty: 7,
			value: true,
		},
		{
			nameOfPrdouct: "peach",
			qty: 3,
			value: false,
		},
		{
			nameOfPrdouct: "apple",
			qty: 6,
			value: false,
		},
		{
			nameOfPrdouct: "watermelon",
			qty: 12,
			value: true,
		},
		{
			nameOfPrdouct: "orange",
			qty: 2,
			value: false,
		},
	];
	console.log(shoppingList);

	function sortShopingList() {
		const sortedList = shoppingList.slice();
		sortedList.sort(function (a, b) {
			return a.value - b.value;
		});
		return sortedList;
	}
	console.log(sortShopingList());

	function addToCart(name, qty) {
		let item = shoppingList.findIndex(function (elem) {
			return elem.nameOfPrdouct === name;
		});
		if (item === -1) {
			shoppingList.push({
				productName: name,
				qty: qty,
				purchaseMade: false,
			});
		} else {
			shoppingList[item].qty = shoppingList[item].qty + qty;
		}
	}
	addToCart("apple", 2);
	addToCart("a", 1);
	// Создать массив, описывающий чек в магазине. Каждый элемент массива состоит из названия товара, количества и цены за единицу товара. Написать следующие функции:
	// Распечатка чека на экран;
	// Подсчет общей суммы покупки;
	// Получение самой дорогой покупки в чеке;
	// Подсчет средней стоимости одного товара в чеке
	const billList = [
		{
			nameOfItem: "banana",
			quantity: 4,
			price: 3.0,
		},
		{
			nameOfItem: "apple",
			quantity: 2,
			price: 2.0,
		},
		{
			nameOfItem: "milk",
			quantity: 3,
			price: 6.0,
		},
		{
			nameOfItem: "lemon",
			quantity: 8,
			price: 1.0,
		},
	];
	function printBill() {
		let result = "";
		billList.forEach(function (elem) {
			result =
				"product: " +
				elem.nameOfItem +
				". " +
				"quantity: " +
				elem.quantity +
				". " +
				"price: " +
				elem.price +
				"$";
			console.log(result);
		});
	}
	printBill();

	function printTotalBill() {
		return (totalBill = billList.reduce(
			(accumulator, currentValue) =>
				accumulator + currentValue.quantity * currentValue.price,
			0
		));
	}
	console.log(printTotalBill() + "$");

	function getMostExpensiveProduct() {
		let maxValue = 0;
		for (let i = 0; i < billList.length; i++) {
			let currentValue = billList[i]["quantity"] * billList[i]["price"];
			if (currentValue > maxValue) {
				maxValue = currentValue;
			}
		}
		return maxValue;
	}

	console.log(
		"The Most expensive item is " + getMostExpensiveProduct() + "$"
	);

	function getAveragePrice() {
		let result = printTotalBill(billList) / billList.length;
		return result;
	}
	console.log("Average cost is " + getAveragePrice() + "$");

	// 3. Создать массив CSS-стилей (цвет, размер шрифта, выравнивание, подчеркивание и т. д.).
	// Каждый элемент массива – это объект, состоящий из двух свойств: название стиля и значение стиля.Написать функцию, которая принимает массив стилей и текст, и выводит этот текст с помощью document.write() в тегах < p ></ >,
	// добавив в открывающий тег атрибут style со всеми стилями, перечисленными в массиве.
	const cssStyles = [
		{
			styleName: "color",
			styleValue: "green",
		},
		{
			styleName: "font-size",
			styleValue: "140px",
		},
		{
			styleName: "font-family",
			styleValue: "Robo",
		},
		{
			styleName: "font-weight",
			styleValue: "bold",
		},
		{
			styleName: "text-decoration",
			styleValue: "none",
		},
		{
			styleName: "text-align",
			styleValue: "center",
		},
	];

	function printStyles(cssStyles, text) {
		let result = "";
		for (let style of cssStyles) {
			result = result + style.styleName + ":" + style.styleValue + ";";
		}
		document.write('<p style="' + result + '">' + text + "</p>");
	}
	printStyles(cssStyles, "I Like");
	printStyles(cssStyles, "Programming");

	// 	4. Создать массив аудиторий академии. Объект-аудитория состоит из названия, количества посадочных мест (от 10 до 20) и названия факультета, для которого она предназначена. Написать несколько функций для работы с ним^
	// Вывод на экран всех аудиторий;
	// Вывод на экран аудиторий для указанного факультета;
	// Вывод на экран только тех аудиторий, которые подходят для переданной группы. Объект-группа состоит из названия, количества студентов и названия факультета;
	// Функция сортировки аудиторий по количеству мест;
	// Функция сортировки аудиторий по названию (по алфавиту).

	const audience = [
		{
			audienceName: "320",
			audienceSeats: 13,
			faculty: "Finance",
		},
		{
			audienceName: "220",
			audienceSeats: 20,
			faculty: "English",
		},
		{
			audienceName: "120",
			audienceSeats: 15,
			faculty: "English",
		},
		{
			audienceName: "310",
			audienceSeats: 5,
			faculty: "Finance",
		},
	];
	function printAuidences() {
		let result = "";
		for (let room of audience) {
			result +=
				"Номер аудитории:" +
				room.audienceName +
				" Количество мест:" +
				room.audienceSeats +
				" Факультет:" +
				room.faculty +
				"\n";
		}
		return result;
	}
	console.log(printAuidences());

	function printFacultyAudience(faculty) {
		let result = "";
		for (let room of audience) {
			if (faculty === room.faculty) {
				return (result += room.audienceName);
			}
		}
	}
	console.log(printFacultyAudience("English"));

	function sortGroupBySeats() {
		const sortedAudience = audience.slice();
		sortedAudience.sort(function (a, b) {
			return a.audienceSeats - b.audienceSeats;
		});
		return sortedAudience;
	}
	console.log(sortGroupBySeats());

	function sortNameOfAudience() {
		const sortedAudience = audience.slice();
		sortedAudience.sort(function (a, b) {
			const nameOfFirstAudience = a.audienceName.toLowerCase();
			const nameOfSecondAudience = b.audienceName.toLowerCase();
			if (nameOfFirstAudience < nameOfSecondAudience) return -1;
			if (nameOfFirstAudience > nameOfSecondAudience) return 1;
			if (nameOfFirstAudience == nameOfSecondAudience) return 0;
		});
		return sortedAudience;
	}

	console.log(sortNameOfAudience());
})();
