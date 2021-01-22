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

function sortList() {
    let sortedList = buyList.slice();
    sortedList.sort(function (a, b) {
        return a.itemBought - b.itemBought;
    });
    let result = "";
    sortedList.forEach(function (item) {
        result = result + item.itemName + " , quantity" + item.itemQuantity + " , bought : " + item.itemBought + "\n";
    });
    return result;
}

function itemAdd(itemName, itemQuantity, itemBought) {
    if (
        !buyList.some(function (elem) {
            return elem.itemName === itemName;
        })
    ) {
        buyList.push({ itemName, itemQuantity, itemBought });
    } else {
        buyList.find(function (elem) {
            return elem.itemName === itemName;
        })["itemQuantity"] += itemQuantity;
    }
}

function bought(newItemName) {
    buyList.forEach(function (product) {
        if (product.itemName === newItemName) {
            product["itemBought"] = true;
        }
    });
    return buyList;
}

console.log(sortList());
itemAdd("mandarin", 23, false);
console.log(bought("mandarin"));

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

function getPrint(receipt) {
    let result = "";

    receipt.forEach(function (item, index) {
        result = result + " ITEM № :" + (index + 1) + "\n" + item["itemName"] + " : " + item["itemQuantity"] + " x " + item["itemQuantity"] + " = " + item["itemQuantity"] * item["itemPrice"] + "\n";
    });

    return result;
}

function getSum(receipt) {
    let result = "";
    let cost = 0;

    receipt.forEach(function (item) {
        cost = item["itemQuantity"] * item["itemPrice"];
        result = result + "the cost of " + item["itemName"] + " = " + cost + "$" + "\n";
    });
    return result;
}

function getMaxCost(receipt) {
    let result = "";
    let maxCost = 0;

    receipt.forEach(function (item) {
        let currentCost = item["itemQuantity"] * item["itemPrice"];
        if (currentCost > maxCost) {
            maxCost = currentCost;
        }
    });

    result = " MAX COST ITEM   : " + maxCost + "$.";
    return result;
}

function getAverage(receipt) {
    let averageCost = getSum(receipt) / receipt.length;
    return " AVERAGE COST ITEM   : " + averageCost + "$.";
}

console.log(getPrint(receipt));
console.log(getSum(receipt));
console.log(getMaxCost(receipt));
console.log(getAverage(receipt));

// 3. Создать массив CSS-стилей (цвет, размер шрифта, выравнивание, подчеркивание и т. д.). Каждый элемент массива – это объект, состоящий из двух свойств:
// название стиля и значение стиля. Написать функцию, которая принимает массив стилей и текст, и выводит этот текст с помощью document.write() в тегах <p></p>,
// добавив в открывающий тег атрибут style со всеми стилями, перечисленными в массиве.

let stylesList = [
    { styleName: "color", styleValue: "red" },
    { styleName: "font-size", styleValue: "150px" },
    { styleName: "font-weight", styleValue: "bold" },
    { styleName: "text-decoration", styleValue: "underline" },
];

function setStyles(stylesArray, text) {
    let styles = "";
    stylesArray.forEach(function (item) {
        styles += item.styleName + ":" + item.styleValue + ";";
    });
    document.write('<p style="' + styles + '">' + text + "</p>");
}

setStyles(stylesList, "HELLO WORLD");

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

function getAllList(roomsList) {
    let result = "";

    roomsList.forEach(function (item) {
        result = result + item["roomName"] + " auditory for " + item["roomCapacity"] + " students of " + item["roomDepartment"] + " department." + "\n";
    });
    return result;
}

function auditoryForDeaprtment(dep) {
    const search = classRooms.find(function (item) {
        return item.roomDepartment === dep;
    });

    getAllList(search);
}

function sortedRooms() {
    let sortedRoomCapacity = classRooms.slice();
    sortedRoomCapacity.sort(function (a, b) {
        return a.roomCapacity - b.roomCapacity;
    });
    return sortedRoomCapacity;
}

function byField() {
    let sortedRoomName = classRooms.slice();
    sortedRoomName.sort(function (a, b) {
        return a["roomName"] > b["roomName"] ? 1 : -1;
    });
    return sortedRoomName;
}

console.log(getAllList(classRooms));
console.log(auditoryForDeaprtment("Math"));
console.log(sortedRooms());
console.log(byField());
