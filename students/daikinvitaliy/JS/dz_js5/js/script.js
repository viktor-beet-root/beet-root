(function () {
    console.log(
        "Задание 1 Создать массив «Список покупок». Каждый элемент массива является объектом, который содержит название продукта, необходимое количество и куплен или нет. Написать несколько функций для работы с таким массивом."
    );
    console.log(
        "а) Вывод всего списка на экран таким образом, чтобы сначала шли некупленные продукты, а потом – купленные."
    );
    console.log(
        "б) Добавление покупки в список. Учтите, что при добавлении покупки с уже существующим в списке продуктом, необходимо увеличивать количество в существующей покупке, а не добавлять новую."
    );
    console.log(
        "в) Покупка продукта. Функция принимает название продукта и отмечает его как купленный."
    );
    let shoppingList = [
        { productName: "картошка", count: 3, bIsBought: false },
        { productName: "молоко", count: 2, bIsBought: true },
        { productName: "хлеб", count: 3, bIsBought: false },
        { productName: "колбаса", count: 2, bIsBought: true },
        { productName: "конфеты", count: 1, bIsBought: false },
    ];
    shoppingList.sort(function (a, b) {
        if (a.bIsBought === false) return -1;
        if (b.bIsBought === false) return 1;
        return 0;
    });
    function adding(productName) {
        const product = shoppingList.find(function (a) {
            return productName === a.productName;
        });
        if (product === undefined) {
            shoppingList.push({
                productName: productName,
                count: 1,
                bIsBought: false,
            });
        } else {
            product.count = product.count + 1;
        }
    }
    adding("яйца");
    function purchase(productName) {
        const product = shoppingList.find(function (a) {
            return productName === a.productName;
        });
        if (product === undefined) {
            console.log("нет такого продукта");
        } else {
            product.bIsBought = true;
        }
    }
    purchase("картошка");
    console.log(shoppingList);

    console.log(
        "Задание 2: Создать массив, описывающий чек в магазине. Каждый элемент массива состоит из названия товара, количества и цены за единицу товара. Написать следующие функции: "
    );
    console.log(
        "а) Распечатка чека на экран; б) Подсчет общей суммы покупки; в) Получение самой дорогой покупки в чеке; г) Подсчет средней стоимости одного товара в чеке."
    );
    let check = [
        { nameProduct: "ложка", count: 3, price: 3.6 },
        { nameProduct: "вилка", count: 2, price: 7 },
        { nameProduct: "тарелка", count: 5, price: 15 },
        { nameProduct: "бокал", count: 6, price: 2 },
        { nameProduct: "чашка", count: 25, price: 3 },
        { nameProduct: "блюдце", count: 12, price: 5.9 },
    ];
    const screenCheck = check.map(function (item, index) {
        return item;
    });
    console.log("Ваш чек", screenCheck);
    let res = 0;
    check.forEach(function (a) {
        res = res + a.count * a.price;
    });
    console.log("Ваш чек на сумму", res);
    let resBig = 0;
    check.forEach(function (a) {
        if (resBig < a.count * a.price) {
            resBig = a.count * a.price;
        }
    });
    console.log("самая большая покупка", resBig);
    let result = 0;
    check.forEach(function (a) {
        result = result + a.count * a.price;
    });
    const averageСheck = result / check.length;
    console.log("Средний чек", averageСheck);

    console.log(
        "Задание 3 Создать массив CSS-стилей (цвет, размер шрифта, выравнивание, подчеркивание и т. д.). Каждый элемент массива – это объект, состоящий из двух свойств: название стиля и значение стиля. Написать функцию, которая принимает массив стилей и текст, и выводит этот текст с помощью document.write() в тегах <p></p>, добавив в открывающий тег атрибут style со всеми стилями, перечисленными в массиве."
    );
    const arrayStyles = [
        {
            nameStyle: "красный-подчоркнутый",
            styleBody: {
                fontSize: 10,
                color: "red",
                textDecoration: "underline",
            },
        },
        {
            nameStyle: "зеленый курсив",
            styleBody: { fontSize: 20, color: "green", fontStyle: "italic" },
        },
        {
            nameStyle: "жирный синий",
            styleBody: { fontSize: 14, color: "blue", fontWeight: "bold" },
        },
        {
            nameStyle: "черный курсив",
            styleBody: { fontSize: 40, color: "black", fontStyle: "italic" },
        },
        {
            nameStyle: "белый биг",
            styleBody: { fontSize: 30, color: "orange", fontWeight: "bold" },
        },
    ];
    function style(array, text) {
        for (let i = 0; i < array.length; i++) {
            let textStail = '<p style= "';
            let style = array[i].styleBody;
            if (style.color != undefined) {
                textStail = textStail + "color:" + style.color + ";";
            }
            if (style.fontSize != undefined) {
                textStail = textStail + "font-size:" + style.fontSize + "px ;";
            }
            if (style.fontStyle != undefined) {
                textStail = textStail + "font-style:" + style.fontStyle + ";";
            }
            if (style.fontWeight != undefined) {
                textStail = textStail + "font-weight:" + style.fontWeight + ";";
            }
            textStail = textStail + '">' + text + "</p>";
            document.write(textStail);
        }
    }
    style(
        arrayStyles,
        "Lorem ipsum dolor sit amet consectetur adipisicing elit"
    );

    console.log(
        "Задание 4 Создать массив аудиторий академии. Объект-аудитория состоит из названия, количества посадочных мест (от 10 до 20) и названия факультета, для которого она предназначена. Написать несколько функций для работы с ним^"
    );
    console.log("Вывод на экран всех аудиторий;");
    console.log("Вывод на экран аудиторий для указанного факультета;");
    console.log(
        "Вывод на экран только тех аудиторий, которые подходят для переданной группы. Объект-группа состоит из названия, количества студентов и названия факультета;"
    );
    console.log("Функция сортировки аудиторий по количеству мест;");
    console.log("Функция сортировки аудиторий по названию (по алфавиту).");
    let audienceAcademi = [
        {
            nameAudienc: "Физика",
            numberSeats: 20,
            nameFaculty: "Физ-Мат",
        },
        { nameAudienc: "Химия", numberSeats: 15, nameFaculty: "Химический" },
        {
            nameAudienc: "Истории",
            numberSeats: 17,
            nameFaculty: "Исторический",
        },
        {
            nameAudienc: "Информатики",
            numberSeats: 20,
            nameFaculty: "it-техно",
        },
        {
            nameAudienc: "Эконамики",
            numberSeats: 15,
            nameFaculty: "Экономический",
        },
    ];
    console.log("Все аудитории:");
    audienceAcademi.map(function (a) {
        const audienc = a.nameAudienc;
        console.log(audienc);
    });
    let faculty = prompt("Введите факультет", "");
    const audienc = audienceAcademi.find(function (a) {
        return faculty === a.nameFaculty;
    });
    if (audienc !== undefined) {
        console.log("Ваша аудитория ", audienc.nameAudienc);
    } else {
        console.log("нет такой аудитории");
    }
    let group = {
        nameGroup: "b",
        students: 12,
        nameFaculty: "Физ-Мат",
    };
    const audiencg = audienceAcademi.find(function (a, b) {
        return (
            group.students <= a.numberSeats &&
            group.nameFaculty === a.nameFaculty
        );
    });
    if (audiencg !== undefined) {
        console.log(audiencg.nameAudienc);
    }

    const audienceAcademiPlaces = audienceAcademi.map(function (a) {
        const res = a;
        return res;
    });
    audienceAcademiPlaces.sort(function (a, b) {
        if (a.numberSeats > b.numberSeats) return 1;
        if (a.numberSeats === b.numberSeats) return 0;
        if (a.numberSeats < b.numberSeats) return -1;
    });

    console.log(audienceAcademiPlaces);
    audienceAcademi.sort(function (a, b) {
        if (a.nameAudienc > b.nameAudienc) return 1;
        if (a.nameAudienc === b.nameAudienc) return 0;
        if (a.nameAudienc < b.nameAudienc) return -1;
    });
    console.log(audienceAcademi);

    console.log("Задание 5 Дэшифровать зашифрованное на уроке");

    const al = [
        "a",
        "b",
        "c",
        "d",
        "e",
        "f",
        "g",
        "h",
        "i",
        "j",
        "k",
        "l",
        "m",
        "n",
        "o",
        "p",
        "q",
        "r",
        "s",
        "t",
        "u",
        "v",
        "w",
        "x",
        "y",
        "z",
    ];
    function enigma(a) {
        const stringArr = a.split("");
        const answer = stringArr.map(function (item) {
            const indexSimbol = al.indexOf(item.toLowerCase());
            return indexSimbol === -1 ? item : indexSimbol;
        });
        return answer;
    }
    console.log(enigma("Lorem ipsum dolor sit amet.").join(""));

    const arrEnigma = enigma("Lorem ipsum dolor sit amet.");
    function enigmaDecode(a) {
        const answer = a.map(function (item) {
            return Number.isInteger(item) ? al[item] : item;
        });
        return answer.join("");
    }
    console.log(enigmaDecode(arrEnigma));
})();
