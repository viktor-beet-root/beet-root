console.log("Задание 1. Создать массив «Список покупок». Каждый элемент массива является объектом, который содержит название продукта, необходимое количество и куплен или нет. Написать несколько функций для работы с таким массивом." + "\n" + "Вывод всего списка на экран таким образом, чтобы сначала шли некупленные продукты, а потом– купленные." + "\n" + "Добавление покупки в список.Учтите, что при добавлении покупки с уже существующим в списке продуктом, необходимо увеличивать количество в существующей покупке, а не добавлять новую." + "\n" + "Покупка продукта.Функция принимает название продукта и отмечает его как купленный.");

const shoppingList = [{
        name: 'bread',
        amount: 1,
        bought: false,
    },
    {
        name: 'milk',
        amount: 2,
        bought: true,
    },
    {
        name: 'eggs',
        amount: 10,
        bought: true,
    },
    {
        name: 'cheese',
        amount: 1,
        bought: false,
    },
];
console.log(shoppingList);

// Вывод всего списка на экран таким образом, чтобы сначала шли некупленные продукты, а потом – купленные.

function getShoppingList(params) {
    return 'Продукт: ' + params.name + ' Количество: ' + params.amount + ' Куплен: ' + params.bought + '\n';
};

function outputShoppingList(params) {
    console.log('Список покупок:');
    params.forEach(function (item) {
        console.log(getShoppingList(item));
    });
};

function getShoppingSort() {
    const shoppingListSort = shoppingList.concat();
    shoppingListSort.sort(function (a, b) {
        if (a.bought === true && b.bought === false) return 1;
        if (a.bought === b.bought) return 0;
        if (a.bought === false && b.bought === true) return -1;
    });
    outputShoppingList(shoppingListSort);
};

getShoppingSort();

// Добавление покупки в список.Учтите, что при добавлении покупки с уже существующим в списке продуктом, необходимо увеличивать количество в существующей покупке, а не добавлять новую.
function getIndex(params) {
    let index;
    for (let i = 0; i < shoppingList.length; i++) {

        if (shoppingList[i].name === params) {
            index = i
            break;
        } else index = -1;
    }

    return index;
};

function addNewProduct(newProd, amount) {
    const indexNewProd = getIndex(newProd);
    let newAmount;
    if (newProd !== undefined && amount === undefined) {
        newAmount = 1;
    } else if (newProd !== undefined && amount !== undefined) {
        newAmount = amount;
    } else if (newProd === undefined || isNaN(amount)) return;

    if (indexNewProd === -1) {
        shoppingList.push({
            name: newProd,
            amount: newAmount,
            bought: false,
        });
    } else {
        shoppingList[indexNewProd].amount = shoppingList[indexNewProd].amount + newAmount;

    };
};
addNewProduct('meat');
outputShoppingList(shoppingList);
addNewProduct('bread', 10);
outputShoppingList(shoppingList);

//Покупка продукта. Функция принимает название продукта и отмечает его как купленный.


function buyingProduct(nameProduct) {
    if (nameProduct === undefined) return;
    const indexProd = getIndex(nameProduct);
    if (indexProd === -1) {
        return "Данный отсутствует в списке";
    } else {
        shoppingList[indexProd].bought = true;
    }
};
buyingProduct('meat');
outputShoppingList(shoppingList);
buyingProduct('bread');
outputShoppingList(shoppingList);

console.log("Задание 2. Создать массив, описывающий чек в магазине.Каждый элемент массива состоит из названия товара, количества и цены за единицу товара.Написать следующие функции:");

const check = [{
        productNames: "Батон нарезной",
        quantity: 2,
        price: 12.00,

        getProduct: getProduct,
    },
    {
        productNames: "Масло",
        quantity: 3,
        price: 38.50,

        getProduct: getProduct,
    },
    {
        productNames: "Сыр",
        quantity: 0.400,
        price: 200.00,

        getProduct: getProduct,
    }
];

//Распечатка чека на экран;

function getProduct() {
    return this.productNames + ' -- ' + this.quantity + ' X ' + this.price + ' -- ' + (this.quantity * this.price).toFixed(2) + ' грн \n';
};

function printCheck() {
    console.log('    ----------ЧЕК----------    ');
    check.forEach(function (item) {
        console.log(item.getProduct());
    });
    console.log('    -----------------------');
    console.log('СУММА                  ', sum());
};
printCheck();

// Подсчет общей суммы покупки;
function sum() {
    return check.reduce(function (previousValue, item) {
        return previousValue + (item.price * item.quantity);
    }, 0).toFixed(2);
};
console.log(sum());

// Получение самой дорогой покупки в чеке;
function mostExpensivePurchase() {
    const checkSort = check.concat();
    checkSort.sort(function (a, b) {
        if ((a.price * a.quantity) > (b.price * b.quantity)) return 1;
        if ((a.price * a.quantity) === (b.price * b.quantity)) return 0;
        if ((a.price * a.quantity) < (b.price * b.quantity)) return -1;
    });
    const res = checkSort[checkSort.length - 1];
    const answer = "самая дорогая покупка в чеке: " + res.getProduct();
    return answer;
};
console.log(mostExpensivePurchase());

//Подсчет средней стоимости одного товара в чеке.

function getTotalQuantity() {
    let totalQnt = (check.reduce(function (previousValue, item) {
        return previousValue + item.quantity;
    }, 0)).toFixed(2);
    return totalQnt;
};

function averageСost() {
    const result = (sum() / getTotalQuantity()).toFixed(2);
    return result;
};
console.log('Cредняя стоимость одного товара в чеке: ' + averageСost() + ' грн');

console.log('Задание 3. Создать массив CSS-стилей (цвет, размер шрифта, выравнивание, подчеркивание и т. д.). Каждый элемент массива – это объект, состоящий из двух свойств: название стиля и значение стиля. Написать функцию, которая принимает массив стилей и текст, и выводит этот текст с помощью document.write() в тегах <p></p>, добавив в открывающий тег атрибут style со всеми стилями, перечисленными в массиве.');
const cssStyles = [{
        name: 'color',
        value: 'red',
    },
    {
        name: 'font-size',
        value: '30px',
    },
    {
        name: 'text-align',
        value: 'center',
    },
];

function string(arr) {
    let b = '';
    for (let i = 0; i < arr.length; i++) {
        b = b + (arr[i].name + ': ' + arr[i].value + ';');
    };

    return b;
};

function enter(arr, text) {
    document.write("<p style=\' " + string(arr) + "\'>" + text + "</p>");
    document.close();
};
enter(cssStyles, "Lorem ipsum dolor sit.");

console.log("Задание 4. Создать массив аудиторий академии. Объект-аудитория состоит из названия, количества посадочных мест (от 10 до 20) и названия факультета, для которого она предназначена. Написать несколько функций для работы с ним:");

const audienceList = [{
        name: 'A',
        seats: 5,
        faculty: 'Gryffindor',
    },
    {
        name: 'C',
        seats: 10,
        faculty: 'Hufflepuff',
    },
    {
        name: 'B',
        seats: 5,
        faculty: 'Ravenclaw',
    },
    {
        name: 'E',
        seats: 8,
        faculty: 'Slytherin',
    },
    {
        name: 'D',
        seats: 15,
        faculty: 'Gryffindor',
    },
    {
        name: 'G',
        seats: 20,
        faculty: 'Hufflepuff',
    },
    {
        name: 'F',
        seats: 10,
        faculty: 'Slytherin',
    },
];

//Вывод на экран всех аудиторий;

function getAudienceList(params) {
    return 'Название: ' + params.name + ' Кол.мест: ' + params.seats + ' Факультет: ' + params.faculty + '\n';
};

function outputOnDisplay(params) {
    console.log('Список аудиторий:');
    params.forEach(function (item) {
        console.log(getAudienceList(item));
    });
};
outputOnDisplay(audienceList);

//Вывод на экран аудиторий для указанного факультета;

function classForFaculty(params) {
    const facultyClassList = audienceList.filter(function (item) {

        return item.faculty === params;

    });
    if (facultyClassList.length === 0) return console.log("Для данного факультета нет подходящей аудитории");
    else return outputOnDisplay(facultyClassList);
};

classForFaculty('Slytherin');
classForFaculty('fffff');

//Вывод на экран только тех аудиторий, которые подходят для переданной группы.Объект - группа состоит из названия, количества студентов и названия факультета;
const groupA = {
    nameGroup: 'A-1',
    numberOfStudents: 30,
    nameFaculty: 'Gryffindor',

};
const groupB = {
    nameGroup: 'B-1',
    numberOfStudents: 7,
    nameFaculty: 'Slytherin',

};

function classForGroup(params) {
    const groupClassList = audienceList.filter(function (item) {

        if (item.seats >= params.numberOfStudents && item.faculty === params.nameFaculty) {
            return true;
        } else false;

    });
    if (groupClassList.length === 0) return console.log("Для данной группы нет подходящей аудитории");
    else return outputOnDisplay(groupClassList);

};
classForGroup(groupA);
classForGroup(groupB);

//Функция сортировки аудиторий по количеству мест;

function sortingBySeats() {
    const audienceListSort = audienceList.concat();
    audienceListSort.sort(function (a, b) {

        if (a.seats > b.seats) {
            return 1;
        } else if (a.seats < b.seats) {
            return -1;
        } else return 0;
    });
    outputOnDisplay(audienceListSort);
};
sortingBySeats();

// Функция сортировки аудиторий по названию(по алфавиту).
function sortingByName() {
    const audienceListSort = audienceList.concat();
    audienceListSort.sort(function (a, b) {
        const nameA = a.name.toLowerCase();
        const nameB = b.name.toLowerCase();

        if (nameA > nameB) {
            return 1;
        } else if (nameA < nameB) {
            return -1;
        } else return 0;
    });
    outputOnDisplay(audienceListSort);
};
sortingByName();

console.log("Задание 5. Дешифратор");
const al = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
    't', 'u', 'v', 'w', 'x', 'y', 'z'
];

function scrambler(string) {
    let arrString = string.split("");
    const answer = arrString.map(function (item) {
        const indexSymbol = al.indexOf(item.toLowerCase());
        return indexSymbol === -1 ? item : indexSymbol;
    });
    return answer;
};
console.log(scrambler("lorem ipsum"));

const arrScrambler = scrambler("lorem ipsum");

function decoder(arr) {
    const arrString = arr.map(function (item) {
        const symbol = al[item];
        return symbol === undefined ? item : symbol;
    });
    const answer = arrString.join('');
    return answer;
};

console.log(decoder(arrScrambler));
