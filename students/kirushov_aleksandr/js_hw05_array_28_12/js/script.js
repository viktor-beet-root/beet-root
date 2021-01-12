console.log("Задание 1. Создать массив «Список покупок». Каждый элемент массива является объектом, который содержит название продукта, необходимое количество и куплен или нет. Написать несколько функций для работы с таким массивом." + "\n" + "Вывод всего списка на экран таким образом, чтобы сначала шли некупленные продукты, а потом– купленные." + "\n" + "Добавление покупки в список.Учтите, что при добавлении покупки с уже существующим в списке продуктом, необходимо увеличивать количество в существующей покупке, а не добавлять новую." + "\n" + "Покупка продукта.Функция принимает название продукта и отмечает его как купленный.");

const shoppingList = [{
        name: 'bread',
        amount: 1,

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
function getShoppingSort() {
    const shoppingListSort = shoppingList.concat();
    shoppingListSort.sort(function (a, b) {
        if (a.bought === true && (b.bought === undefined || b.bought === false)) return 1;
        if (a.bought === b.bought) return 0;
        if ((a.bought === undefined || a.bought === false) && b.bought === true) return -1;
    });
    return shoppingListSort;
};

// console.log(getShoppingSort());

// Добавление покупки в список.Учтите, что при добавлении покупки с уже существующим в списке продуктом, необходимо увеличивать количество в существующей покупке, а не добавлять новую.
function get

function addNewProduct(newProd, newAmount) {
    if (isNaN(newAmount) || newProd === undefined)
};
