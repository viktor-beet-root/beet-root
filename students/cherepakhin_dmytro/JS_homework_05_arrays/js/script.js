// 0

const a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17];
console.log(a);

function deleter(b, c) {
    b.splice(c, b.length - c);
    return b;
};
const b = deleter(a.map(function (item, index, array) {
    return item;
}), 10);

console.log(a);
console.log(b);


// 1 
// Создать массив« Список покупок».Каждый элемент массива является объектом, который содержит название продукта, необходимое количество и куплен или нет.Написать несколько функций для работы с таким массивом.

const toBuyList = [{
    nameOfProduct: 'pasta',
    quantity: 2,
    wasBought: true,
}, {
    nameOfProduct: 'orange',
    quantity: 3,
    wasBought: false,
}, {
    nameOfProduct: 'milk',
    quantity: 1,
    wasBought: true,
}, {
    nameOfProduct: 'potato',
    quantity: 4,
    wasBought: false,
}, {
    nameOfProduct: 'bread',
    quantity: 1,
    wasBought: true,
}];

// Вывод всего списка на экран таким образом, чтобы сначала шли некупленные продукты, а потом – купленные.
function showTheList(arr) {
    let arrCopy = JSON.parse(JSON.stringify(arr));
    arrCopy.sort((a, b) => a.wasBought > b.wasBought ? 1 : -1);
    for (let i = 0; i < arrCopy.length; i++) {
        console.log(`Product: ${arrCopy[i].nameOfProduct}, quantity - ${arrCopy[i].quantity}, was bought - ${arrCopy[i].wasBought}.`)
    }
};
showTheList(toBuyList);

// Добавление покупки в список. Учтите, что при добавлении покупки с уже существующим в списке продуктом, необходимо увеличивать количество в существующей покупке, а не добавлять новую.
function addProductToList(name, quant) {
    let isExist = false;
    let index;
    let wasBoughtCheck;
    for (let i = 0; i < toBuyList.length; i++) {
        if (toBuyList[i].nameOfProduct === name) {
            isExist = true;
            index = i;
            wasBoughtCheck = toBuyList[i].wasBought;
            break;
        }
    }
    if (isExist === true) {
        if (wasBoughtCheck === true) {
            toBuyList[index].quantity = quant;
            toBuyList[index].wasBought = false;
        } else {
            toBuyList[index].quantity += quant;
        }
    } else {
        toBuyList.push({
            nameOfProduct: name,
            quantity: quant,
            wasBought: false,
        });
    }
}

addProductToList('bananas', 6);
addProductToList('potato', 3);
addProductToList('bread', 2);
console.log('');
showTheList(toBuyList);

// Покупка продукта. Функция принимает название продукта и отмечает его как купленный.

function productWasBought(name) {
    for (let i = 0; i < toBuyList.length; i++) {
        if (toBuyList[i].nameOfProduct === name) {
            toBuyList[i].wasBought = true;
            break;
        }
    }
}

productWasBought('bananas')
console.log('');
showTheList(toBuyList);

// 2. Создать массив, описывающий чек в магазине. Каждый элемент массива состоит из названия товара, количества и цены за единицу товара.

const receipt = [{
    nameOfProduct: 'pasta',
    quantity: 2,
    cost: 5.5,
}, {
    nameOfProduct: 'orange',
    quantity: 3,
    cost: 2.1,
}, {
    nameOfProduct: 'milk',
    quantity: 1,
    cost: 3,
}, {
    nameOfProduct: 'potato',
    quantity: 4,
    cost: .75,
}, {
    nameOfProduct: 'bread',
    quantity: 1,
    cost: 1.5,
}];

// Распечатка чека на экран;
function printReceipt() {
    let textReciept = '';
    for (let i = 0; i < receipt.length; i++) {
        textReciept += ('name: ' + receipt[i].nameOfProduct + ', quantity: ' + receipt[i].quantity + ', price: ' +
            receipt[i].cost.toFixed(2) + ', total: ' + (receipt[i].cost * receipt[i].quantity).toFixed(2) + '\n');
    }
    console.log(textReciept);
}

console.log('');
printReceipt();

// Подсчет общей суммы покупки;
function getSumTotal(arr) {
    const initialValue = 0;
    const reducer = (accum, currentValue) => accum + (currentValue.cost * currentValue.quantity);
    const sumTotal = ('Sum total is: ' + arr.reduce(reducer, initialValue));
    return sumTotal;
}

console.log('');
console.log(getSumTotal(receipt));

// Получение самой дорогой покупки в чеке;
function getTheMostExpensive() {
    let theMostExpensive = 0;
    let index;
    for (let i = 0; i < receipt.length; i++) {
        if (theMostExpensive < receipt[i].cost * receipt[i].quantity) {
            index = i;
            theMostExpensive = receipt[i].cost * receipt[i].quantity;
        }
    }
    return 'The most expensive: ' + receipt[index].nameOfProduct + ', quantity: ' + receipt[index].quantity + ', price: ' +
        receipt[index].cost.toFixed(2) + ', total: ' + (receipt[index].cost * receipt[index].quantity).toFixed(2);
}
console.log('');
console.log(getTheMostExpensive());

// Подсчет средней стоимости одного товара в чеке.
function getAverageCost() {
    let quantityTotal = 0;
    let sumTotal = 0;
    for (let i = 0; i < receipt.length; i++) {
        quantityTotal += receipt[i].quantity;
        sumTotal += receipt[i].quantity * receipt[i].cost;
    }
    const averageCost = sumTotal / quantityTotal;
    return 'quantity total: ' + quantityTotal + ', sum total: ' + sumTotal.toFixed(2) + ', average cost is: ' + averageCost.toFixed(2);
}

console.log('');
console.log(getAverageCost());

// 3. Создать массив CSS-стилей (цвет, размер шрифта, выравнивание, подчеркивание и т. д.). Каждый элемент массива – это объект, состоящий из двух свойств: название стиля и значение стиля. 

const styles = [{
    nameOfStyle: 'font-family',
    value: 'Arial',
}, {
    nameOfStyle: 'font-size',
    value: '28px',
}, {
    nameOfStyle: 'font-weight',
    value: 'bold',
}, {
    nameOfStyle: 'color',
    value: 'red',
}, {
    nameOfStyle: 'font-style',
    value: 'Italic',
}];

function makeTheText(style, text) {
    let p = document.querySelector("p");
    let allStyles = '';
    for (let i = 0; i < style.length; i++) {
        let coma = i === (style.length - 1) ? '' : '; ';
        allStyles += style[i].nameOfStyle + ': ' + style[i].value + coma;
    }
    p.setAttribute("style", allStyles);
    p.innerText = text;
}

makeTheText(styles, "Lorem ipsum dolor sit amet consectetur adipisicing elit.")

// 4. Создать массив аудиторий академии. Объект-аудитория состоит из названия, количества посадочных мест (от 10 до 20) и названия факультета, для которого она предназначена.

const rooms = [{
    numberOfRoom: 'p1',
    seats: 15,
    faculty: 'philosophy'
}, {
    numberOfRoom: 'b2',
    seats: 10,
    faculty: 'biology'
}, {
    numberOfRoom: 'c3',
    seats: 20,
    faculty: 'chemistry'
}, {
    numberOfRoom: 'f4',
    seats: 12,
    faculty: 'foreign language'
}, {
    numberOfRoom: 'f5',
    seats: 18,
    faculty: 'foreign language'
}, {
    numberOfRoom: 'p6',
    seats: 16,
    faculty: 'philosophy'
}]

// Вывод на экран всех аудиторий;

function showRoomList() {
    let result = '';
    for (let i = 0; i < rooms.length; i++) {
        result += ('number: ' + rooms[i].numberOfRoom + ', faculty: ' + rooms[i].faculty + ', number of seats: ' + rooms[i].seats) + '\n'
    }
    return result;
}

console.log('');
console.log(showRoomList());

// Вывод на экран аудиторий для указанного факультета;
function getRoomsOfFaculty(fac) {
    let result = '';
    for (let i = 0; i < rooms.length; i++) {
        if (rooms[i].faculty === fac) {
            result += ('number: ' + rooms[i].numberOfRoom + ', faculty: ' + rooms[i].faculty + ', number of seats: ' + rooms[i].seats) + '\n';
        }
    }
    return result;
}
console.log('');
console.log(getRoomsOfFaculty('philosophy'));

// Вывод на экран только тех аудиторий, которые подходят для переданной группы. Объект-группа состоит из названия, количества студентов и названия факультета;

function showRoomsForGroup(groupName, numberOfStudents, faculty) {
    let result = ('For group ' + groupName + ' - \n');
    let numberOfAppropriateRoom = 0;
    for (let i = 0; i < rooms.length; i++) {
        if (rooms[i].faculty === faculty && numberOfStudents <= rooms[i].seats) {
            result += ('number: ' + rooms[i].numberOfRoom + ', faculty: ' + rooms[i].faculty + ', number of seats: ' + rooms[i].seats + '\n');
        } else {
            numberOfAppropriateRoom += 1;
        }
    }
    if (numberOfAppropriateRoom === rooms.length) {
        result += 'there are no appropriate room.'
    }
    return result;
}
console.log('');
console.log(showRoomsForGroup('104-3', 12, 'philosophy'));
console.log(showRoomsForGroup('307-1', 19, 'biology'));

// Функция сортировки аудиторий по количеству мест;
function sortBySeats(arr) {
    let arrCopy = JSON.parse(JSON.stringify(arr));
    let result = '';
    arrCopy.sort((a, b) => a.seats > b.seats ? 1 : -1);
    for (let i = 0; i < arrCopy.length; i++) {
        result += (`Number: ${arrCopy[i].numberOfRoom}, quantity of seats - ${arrCopy[i].seats}, faculty - ${arrCopy[i].faculty}. \n`)
    }
    return result;
}

console.log('');
console.log(sortBySeats(rooms));

// Функция сортировки аудиторий по названию (по алфавиту).

function sortByName(arr) {
    let arrCopy = JSON.parse(JSON.stringify(arr));
    let result = '';
    arrCopy.sort((a, b) => a.numberOfRoom > b.numberOfRoom ? 1 : -1);
    for (let i = 0; i < arrCopy.length; i++) {
        result += (`Number: ${arrCopy[i].numberOfRoom}, quantity of seats - ${arrCopy[i].seats}, faculty - ${arrCopy[i].faculty}. \n`)
    }
    return result;
}

console.log('')
console.log(sortByName(rooms));
