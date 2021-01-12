(function () {
    //Функции отладки
    function startPart(value) {
        const text = 'Part № ' + value;
        console.log("+++++++++++++++++++++++++");
        console.log(text);
    }

    function endPart() {
        console.log('End Part');
        console.log("+++++++++++++++++++++++++");
    }


    //Part 1
    // 1. Создать массив «Список покупок». Каждый элемент массива является объектом, который содержит название продукта, необходимое количество и куплен или нет. Написать несколько функций для работы с таким массивом.

    // Вывод всего списка на экран таким образом, чтобы сначала шли некупленные продукты, а потом – купленные.
    // Добавление покупки в список. Учтите, что при добавлении покупки с уже существующим в списке продуктом, необходимо увеличивать количество в существующей покупке, а не добавлять новую.
    // Покупка продукта. Функция принимает название продукта и отмечает его как купленный.

    startPart('1')

    const shoppingList = [{
            productName: 'tomato',
            qty: 12,
            purchaseMade: false,
        },
        {
            productName: 'beef',
            qty: 5,
            purchaseMade: true,
        },
        {
            productName: 'salat',
            qty: 18,
            purchaseMade: false,
        },
    ]

    function printShoppingList() {
        let printString = ''
        console.log('-- Список покупок --')

        for (let key in shoppingList) {
            if (!shoppingList[key].purchaseMade) {
                printString = '__ ' + shoppingList[key].productName + ' - ' + shoppingList[key].qty + ' шт.';
                console.log(printString);
            }
        };

        for (let key in shoppingList) {
            if (shoppingList[key].purchaseMade) {
                printString = ' X ' + shoppingList[key].productName + ' - ' + shoppingList[key].qty + ' шт.';
                console.log(printString);
            }
        }
    }

    function addPurchase(name, qty) {
        let index = shoppingList.findIndex(function (element) {
            return element.productName === name
        })

        if (index === -1) {
            let add = {
                productName: name,
                qty: qty,
                purchaseMade: false,
            };
            shoppingList.push(add);
        } else {
            shoppingList[index].qty = shoppingList[index].qty + qty
        }
    }

    function purchase(item) {
        let index = shoppingList.findIndex(function (element) {
            return element.productName === item;
        })
        shoppingList[index].purchaseMade = true;

    }

    printShoppingList();
    addPurchase('salat', 12);
    addPurchase('salsa', 42);
    purchase('tomato');
    printShoppingList();

    endPart()

    //2. Создать массив, описывающий чек в магазине. Каждый элемент массива состоит из названия товара, количества и цены за единицу товара. Написать следующие функции:

    // Распечатка чека на экран;
    // Подсчет общей суммы покупки;
    // Получение самой дорогой покупки в чеке;
    // Подсчет средней стоимости одного товара в чеке.

    startPart('2')

    const check = [{
            productName: 'cigarete',
            qty: 2,
            unitPrice: 56,
        },
        {
            productName: 'milk',
            qty: 1,
            unitPrice: 24,
        },
        {
            productName: 'sugar',
            qty: 5,
            unitPrice: 12,
        }
    ]

    function printCheck() {
        console.log('----Чек----');
        let printString = '';
        let counter = 1;
        check.forEach(function (element) {
            printString = counter + '. ' + element.productName + ' | ' + element.qty + ' ед. | ' + element.unitPrice + ' уе. / шт.';
            console.log(printString);
            counter++;
        })
    }

    function checkAmount() {
        return check.reduce(function (previousValue, element) {
            return previousValue + element.unitPrice * element.qty;
        }, 0)
    }

    function mostExpensivePurchase() {
        let answer = 0
        check.forEach(function (element) {
            if (element.unitPrice > answer) {
                answer = element.unitPrice
            }
        });
        return answer
    }

    function averageCost() {
        let counter = 0
        let answer = check.reduce(function (previousValue, element) {
            counter++
            return previousValue + element.unitPrice;
        }, 0)
        return answer / counter;
    }

    printCheck();
    console.log(checkAmount());
    console.log(mostExpensivePurchase());
    console.log(averageCost());

    endPart();
    startPart('3');

    // 3. Создать массив CSS-стилей (цвет, размер шрифта, выравнивание, подчеркивание и т. д.). Каждый элемент массива – это объект, состоящий из двух свойств: название стиля и значение стиля. Написать функцию, которая принимает массив стилей и текст, и выводит этот текст с помощью document.write() в тегах <p></p>, добавив в открывающий тег атрибут style со всеми стилями, перечисленными в массиве.

    const style = [{
            styleName: 'font-size',
            styleValue: '26px',
        },
        {
            styleName: 'text-align',
            styleValue: 'center',
        },
        {
            styleName: 'color',
            styleValue: 'red',
        },
        {
            styleName: 'background-color',
            styleValue: 'gray',
        }
    ]

    function writeText(style, text) {
        let print = '<p style="';
        style.forEach(function (element) {
            print = print + element.styleName + ': ' + element.styleValue + '; '
        })
        print = print + '" >' + text + '</p>';
        document.write(print);
    }

    writeText(style, 'Hello World');
    endPart();

    //4. Создать массив аудиторий академии. Объект-аудитория состоит из названия, количества посадочных мест (от 10 до 20) и названия факультета, для которого она предназначена. Написать несколько функций для работы с ним^
    // Вывод на экран всех аудиторий;
    // Вывод на экран аудиторий для указанного факультета;
    // Вывод на экран только тех аудиторий, которые подходят для переданной группы. Объект-группа состоит из названия, количества студентов и названия факультета;
    // Функция сортировки аудиторий по количеству мест;
    // Функция сортировки аудиторий по названию (по алфавиту).

    const audience = [{
            Name: 'audience №1',
            qtySeats: 20,
            faculty: 'TEF',
        },
        {
            Name: 'audience №2',
            qtySeats: 15,
            faculty: 'TEF',
        },
        {
            Name: 'audience №3',
            qtySeats: 10,
            faculty: 'TEF',
        },
        {
            Name: 'audience №4',
            qtySeats: 10,
            faculty: 'ChTF',
        },
        {
            Name: 'audience №5',
            qtySeats: 18,
            faculty: 'ChTF',
        }
    ]

    const groupTF = {
        nameGroup: 'TF',
        qtyStudents: 14,
        faculty: 'TEF',
    }

     // Вывод на экран всех аудиторий;
    function printAudience() {
        let print = ''

        audience.forEach(function (element) {
            print = element.Name + ' ' + element.qtySeats + ' мест, факультет ' + element.faculty
            console.log(print);
        })
    };

    //Служебная функция вывода в консоль масивов основанных на масиве аудитория.
    function printElementsAudience(arrayElements){
        let print = '';

        arrayElements.forEach(function (element) {
            print = element.Name + ' ' + element.qtySeats + ' мест, факультет ' + element.faculty
            console.log(print);
        })
    };

    // Вывод на экран аудиторий для указанного факультета;
    function printAudienceForFaculty(faculty) {
        const print = audience.filter(function(element){
            return element.faculty === faculty;
        })
        printElementsAudience(print);
    };

    // Вывод на экран только тех аудиторий, которые подходят для переданной группы.
    function printAudienceForGrup(grup){
        const print = audience.filter(function(element){
            return grup.faculty === element.faculty && grup.qtyStudents <= element.qtySeats;
        })
        printElementsAudience(print);
    };

    // Функция сортировки аудиторий по количеству мест;
    function sortAudienceToQtySeats(){
        audience.sort(function(elementOne, elementTwo){
            return elementOne.qtySeats - elementTwo.qtySeats
        })
    }

    // Функция сортировки аудиторий по названию (по алфавиту).
    function sortAudienceToAlphabet(){
        audience.sort(function(element1, element2){
            if(element1.Name < element2.Name) return -1;
            if(element1.Name > element2.Name) return 1;
            return 0;
        })
    }

    printAudience();
    console.log('________________ 2');
    printAudienceForFaculty("ChTF");
    console.log('________________ 3');
    printAudienceForGrup(groupTF);
    console.log('________________ 4');
    sortAudienceToQtySeats();
    printAudience();
    console.log('________________ 5');
    sortAudienceToAlphabet()
    printAudience();

})()
