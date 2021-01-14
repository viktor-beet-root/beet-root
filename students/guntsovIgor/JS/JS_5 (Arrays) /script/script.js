// 1. Создать массив «Список покупок». Каждый элемент массива является объектом, который содержит название продукта, необходимое количество и куплен или нет.
//  Написать несколько функций для работы с таким массивом.
// Вывод всего списка на экран таким образом, чтобы сначала шли некупленные продукты, а потом – купленные.     //......(*)
// Добавление покупки в список. Учтите, что при добавлении покупки с уже существующим в списке продуктом,
// необходимо увеличивать количество в существующей покупке, а не добавлять новую.          //..............(**)
// Покупка продукта. Функция принимает название продукта и отмечает его как купленный.   //......(***)

let buyList = [
    { itemName: "apples", itemQuantity: 3, itemBought: true },
    { itemName: "bananas", itemQuantity: 4, itemBought: false },
    { itemName: "oranges", itemQuantity: 5, itemBought: true },
];

let sortedList = buyList.slice();

sortedList.sort(function (a, b) {
    return a.itemBought - b.itemBought; //......(*)
});

function itemAdd(itemName, itemQuantity, itemBought) {
    if (
        !buyList.some(function (elem) {
            return elem.itemName === itemName;
        })
    ) {
        buyList.push({ itemName, itemQuantity, itemBought }); //..............(**)
    } else {
        buyList.find(function (elem) {
            return elem.itemName === itemName;
        })["itemQuantity"] += itemQuantity;
    }
}

function bought(itemName) {
    if (
        !buyList.some(function (elem) {
            return elem.itemName === itemName; //......(***)
        })
    ) {
        console.log("NETY TAKOGO TOVARA");
    } else {
        buyList.find(function (elem) {
            return elem.itemName === itemName;
        })["itemBought"] = true;
    }
}

console.log(sortedList);
itemAdd("mandarin", 23, false);
bought("mandarin");
console.log(buyList);

// 2. Создать массив, описывающий чек в магазине.
// Каждый элемент массива состоит из названия товара, количества и цены за единицу товара.
// Написать следующие функции:
// Распечатка чека на экран;        //......(*)
// Подсчет общей суммы покупки;     //......(**)
// Получение самой дорогой покупки в чеке; //......(***)
// Подсчет средней стоимости одного товара в чеке.  //......(****)

let receipt = [
    { itemName: "apples", itemQuantity: 4, itemPrice: 2 },
    { itemName: "bananas", itemQuantity: 4, itemPrice: 3 },
    { itemName: "oranges", itemQuantity: 5, itemPrice: 5 },
];

function getPrint(productList) {
    let result = "";

    for (let i = 0; i < receipt.length; i++) {
        result =
            result +
            " ITEM № :" +
            (i + 1) +
            "\n" +
            productList[i]["itemName"] +
            " : " +
            productList[i]["itemQuantity"] +
            " x " +
            productList[i]["itemQuantity"] +
            " = " +
            productList[i]["itemQuantity"] * productList[i]["itemPrice"] +
            "\n";
    }

    return result; //......(*)
}

function getSum(productList) {
    let result = "";
    let totalCost = 0;

    for (let i = 0; i < receipt.length; i++) {
        totalCost = totalCost + productList[i]["itemQuantity"] * productList[i]["itemPrice"]; //......(**)
        result = " TOTAL PRICE : " + totalCost + "$.";
    }

    console.log(result);
    return totalCost;
}

function getMaxCost(productList) {
    let result = "";
    let maxCost = 0;

    for (let i = 0; i < receipt.length; i++) {
        let currentCost = productList[i]["itemQuantity"] * productList[i]["itemPrice"]; //......(***)
        if (currentCost > maxCost) {
            maxCost = currentCost;
        }
    }

    result = " MAX COST ITEM   : " + maxCost + "$.";
    return result;
}

function getAverage(productList) {
    let averageCost = getSum(productList) / productList.length; //......(****)
    return " AVERAGE COST ITEM   : " + averageCost + "$.";
}

console.log(getPrint(receipt));
console.log(getMaxCost(receipt));
console.log(getAverage(receipt));

// 3. Создать массив CSS-стилей (цвет, размер шрифта, выравнивание, подчеркивание и т. д.). Каждый элемент массива – это объект, состоящий из двух свойств:
// название стиля и значение стиля. Написать функцию, которая принимает массив стилей и текст, и выводит этот текст с помощью document.write() в тегах <p></p>,
// добавив в открывающий тег атрибут style со всеми стилями, перечисленными в массиве.

let styles = [
    { styleName: "color", styleValue: "red" },
    { styleName: "font-size", styleValue: "150px" },
    { styleName: "font-weight", styleValue: "bold" },
    { styleName: "text-decoration", styleValue: "underline" },
];

function setStyles(stylesArray, text) {
    let styles = "";
    for (let style of stylesArray) {
        styles += style.styleName + ":" + style.styleValue + ";";
    }
    document.write('<p style="' + styles + '">' + text + "</p>");
}

setStyles(styles, "HELLO WORLD");

// 4. Создать массив аудиторий академии. Объект-аудитория состоит из названия, количества посадочных мест (от 10 до 20) и
// названия факультета, для которого она предназначена. Написать несколько функций для работы с ним^

// Вывод на экран всех аудиторий;           //......(*)
// Вывод на экран аудиторий для указанного факультета;    //......(**)
// Функция сортировки аудиторий по количеству мест;   //......(***)
// Функция сортировки аудиторий по названию (по алфавиту).   //......(****)

let classRooms = [
    { roomName: "Big", roomCapacity: 20, roomDepartment: "Geography" },
    { roomName: "Medium", roomCapacity: 15, roomDepartment: "Math" },
    { roomName: "Small", roomCapacity: 10, roomDepartment: "Biology" },
];

function getAllList(array) {
    let result = "";

    for (let i = 0; i < array.length; i++) {
        result = result + array[i]["roomName"] + " auditory for " + array[i]["roomCapacity"] + " students of " + array[i]["roomDepartment"] + " department." + "\n";
    }
    return result; //......(*)
}

function auditoryForDeaprtment(dep) {
    let search = classRooms.find(function (item) {
        return item.roomDepartment === dep;
    });
    console.log(search); //......(**)
}

let sortedRoomCapacity = classRooms.slice();

sortedRoomCapacity.sort(function (a, b) {
    return a.roomCapacity - b.roomCapacity; //......(***)
});

let sortedRoomName = classRooms.slice();

function byField(field) {
    return (a, b) => (a[field] > b[field] ? 1 : -1); //......(****)
}

sortedRoomName.sort(byField("roomName"));

console.log(getAllList(classRooms));
auditoryForDeaprtment("Math");
console.log(sortedRoomCapacity);
console.log(sortedRoomName);
