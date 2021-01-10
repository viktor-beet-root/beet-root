console.log("Задание 1.Список покупок");
const shoppingList = [{
        productName: "apple",
        numberOf: 5,
        status: true
    },
    {
        productName: "orange",
        numberOf: 2,
        status: false
    },
    {
        productName: "milk",
        numberOf: 1,
        status: false
    },
    {
        productName: "bread",
        numberOf: 5,
        status: true
    },
    {
        productName: "banana",
        numberOf: 2,
        status: false
    },
    {
        productName: "yogurt",
        numberOf: 3,
        status: true
    },
]
console.log(shoppingList);

//Вывод всего списка на экран таким образом, чтобы сначала шли некупленные продукты, а потом – купленные.
function getShoppingListSort() {
    const shoppingListSort = shoppingList.concat();
    shoppingListSort.sort(function (a, b) {
        return a.status - b.status
    });
    return shoppingListSort;
}
console.log(getShoppingListSort());

//Добавление покупки в список

function getIndexOfProduct(productItem) {
    return shoppingList.findIndex(item => item.productName === productItem);
}

function addItemsToShoppingList(newProductName, newNumberOf) {
    if (newProductName === undefined || newNumberOf === undefined || isNaN(newNumberOf)) return "Данные введены неверно";
    const indexOfNewItem = getIndexOfProduct(newProductName);
    if (indexOfNewItem === -1) {
        shoppingList.push({
            productName: newProductName,
            numberOf: newNumberOf,
            status: false
        });
    } else if (shoppingList[indexOfNewItem].status) {
        shoppingList[indexOfNewItem].numberOf = newNumberOf;
        shoppingList[indexOfNewItem].status = false;
    } else {
        shoppingList[indexOfNewItem].numberOf = shoppingList[indexOfNewItem].numberOf + newNumberOf;
    }
    return shoppingList;
}
console.log(addItemsToShoppingList("milk", 10));
console.log(addItemsToShoppingList("pizza", 1));
console.log(addItemsToShoppingList("yogurt", 1));
console.log(addItemsToShoppingList(newProductName = prompt("Введите новую покупку", ""), newNumberOf = +prompt("Введите нужное количество", "")));

//Покупка продукта. Функция принимает название продукта и отмечает его как купленный
function getDoneStatus(productItem) {
    index = getIndexOfProduct(productItem);
    if (index === -1) return "Данной покупки нет в списке"
    shoppingList[index].status = true;
    return shoppingList;
}
console.log(getDoneStatus('milk'));
console.log(getDoneStatus('orange'));
console.log(getDoneStatus(productItem = prompt("Введете название продукта", "")));

console.log("Задание 2.Чек");
const checkList = [{
        itemName: "apple",
        numberItem: 5,
        price: 4.00
    },
    {
        itemName: "orange",
        numberItem: 2,
        price: 5.00
    },
    {
        itemName: "milk",
        numberItem: 1,
        price: 6.00
    },
    {
        itemName: "bread",
        numberItem: 5,
        price: 7.00
    },
    {
        itemName: "banana",
        numberItem: 2,
        price: 8.00
    },
    {
        itemName: "yogurt",
        numberItem: 3,
        price: 4.35
    },
]

//Распечатка чека на экран;
function printChecList() {
    checkList.forEach(function (item, index) {
        const firstLine = item.itemName + " " + item.numberItem + " * " + item.price + " = " + getAllAmount()[index];
        console.log(firstLine);
        console.log("---------------");
    });
    console.log(getAmountofChecklist());
}
printChecList();

// Подсчет общей суммы покупки;
function getAmountofChecklist() {
    const amountOfItems = checkList.reduce((total, item) => total + item.numberItem * item.price, 0);
    return amountOfItems;
}
console.log(getAmountofChecklist());

// Получение самой дорогой покупки в чеке;
function getAllAmount() {
    const allAmount = checkList.map((item) => +(item.numberItem * item.price).toFixed(2));
    return allAmount;
}

function getMaxPrice() {
    const max = getAllAmount().reduce(function (a, b) {
        return Math.max(a, b);
    });
    maxIndex = getAllAmount().indexOf(max)
    const maxIndexResult = "самоя дорогоя покупкя в чеке " + checkList[maxIndex].itemName;
    return maxIndexResult;
}
console.log(getMaxPrice());

//Подсчет средней стоимости одного товара в чеке
function getAmountOfItems() {
    const amountOfItems = checkList.reduce((total, item) => total + item.numberItem, 0);
    return amountOfItems;
}

function getAvaragePrice() {
    const avaragePrice = (getAmountofChecklist() / getAmountOfItems()).toFixed(2);
    const avaragePriceResult = "средняя стоимости одного товара в чеке " + avaragePrice;
    return avaragePriceResult;
}
console.log(getAvaragePrice());
console.log("Задание 3. Массив стилей");
const style = [{
        nameOfStyle: "color",
        valueOfStyle: "red"
    },
    {
        nameOfStyle: "fontsize",
        valueOfStyle: 14
    },
    {
        nameOfStyle: "text-align",
        valueOfStyle: "center"
    },
    {
        nameOfStyle: "text-decoration",
        valueOfStyle: "line-through"
    }
]
const text = "lorem";

function printStyle(style, text) {
    const steleString = style.map(function (item) {
        return item.nameOfStyle + ":" + item.valueOfStyle + ";"
    }).join("");
    document.write('<p>' + text + '</p>');
    document.write('<style> p {' + steleString + '} </style>')
};
printStyle(style, text);

console.log("Задание 4. Массив аудиторий");
const audiences = [{
        audienceName: "п",
        numberOfseats: 12,
        nameOfFaculty: "право"
    },
    {
        audienceName: "б",
        numberOfseats: 45,
        nameOfFaculty: "филологический"
    },
    {
        audienceName: "П",
        numberOfseats: 20,
        nameOfFaculty: "физмат"
    },
    {
        audienceName: "А",
        numberOfseats: 27,
        nameOfFaculty: "право"
    },
    {
        audienceName: "В",
        numberOfseats: 10,
        nameOfFaculty: "физмат"
    },
    {
        audienceName: "Е",
        numberOfseats: 30,
        nameOfFaculty: "физмат"
    },
]

//Вывод на экран всех аудиторий
function printList() {
    console.log(audiences);
};
printList()

//Вывод на экран аудиторий для указанного факультета
function printAudiences() {
    const userNameOfFacultet = prompt("Введите название факультета", "");
    const resultOf = audiences.filter(item => item.nameOfFaculty === userNameOfFacultet);
    if (resultOf.length === 0) return "Для данного условия нет подходящей аудитории"
    else return resultOf;
}
console.log(printAudiences());

//Вывод на экран только тех аудиторий, которые подходят для переданной группы
const group = {
    nameOfGroup: "ПР2",
    numberOfStudents: 25,
    facultet: "право"
}

function filterForGroup() {
    const resultgroup = audiences.filter((item) => item.nameOfFaculty === group.facultet && item.numberOfseats >= group.numberOfStudents);
    if (resultgroup.length === 0) return "Для данного условия нет подходящей аудитории";
    else return resultgroup;
};
console.log(filterForGroup());

//Функция сортировки аудиторий по количеству мест
function filterNumdersOfSeats() {
    const sortNumdersOfSeats = audiences.concat();
    sortNumdersOfSeats.sort(function (a, b) {
        if (a.numberOfseats > b.numberOfseats) return 1;
        if (a.numberOfseats === b.numberOfseats) return 0;
        if (a.numberOfseats < b.numberOfseats) return -1;
    });
    return sortNumdersOfSeats;
};
console.log(filterNumdersOfSeats());


//Функция сортировки аудиторий по названию (по алфавиту)
function filterNameOfAudiences() {
    const sortNameOfAudiences = audiences.concat();
    sortNameOfAudiences.sort(function (a, b) {
        const nameA = a.audienceName.toUpperCase();
        const nameB = b.audienceName.toUpperCase();
        if (nameA < nameB) return -1;
        if (nameA > nameB) return 1;
        if (nameA === nameB) return 0;
    });
    return sortNameOfAudiences;
};
console.log(filterNameOfAudiences());

console.log("Задание 5. Дешифровшик");
const al = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't',
    'u', 'v', 'w', 'x', 'y', 'z'
];

function getStringCode(str) {
    const arrString = str.split('');
    const arrCode = arrString.map(function (item) {
        const indexSymbol = al.indexOf(item.toLowerCase());
        return indexSymbol === -1 ? item : indexSymbol;
    });
    const code = arrCode.join(",");
    return code;
}
console.log(getStringCode("Hello world!"));

const stringCode = getStringCode("Hello world!");

function getDecryptionCode(strCode) {
    const arrStringCode = strCode.split(',');
    const arrDecode = arrStringCode.map(function (item) {
        const symbol = al[item];
        return symbol === undefined ? item : symbol;
    });
    const decode = arrDecode.join("");
    return decode;
}
console.log(getDecryptionCode(stringCode));
