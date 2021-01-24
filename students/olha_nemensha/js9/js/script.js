//1) Реализовать класс, описывающий окружность. В классе должны быть следующие компоненты:
function Circle(radius) {
    //поле, хранящее радиус окружности;
    this.radius = radius;
    //get-свойство, возвращающее радиус окружности;
    this.getRadius = function () {
        return this.radius;
    };
    //get-свойство, возвращающее диаметр окружности;
    this.getDiameter = function () {
        return this.radius * 2
    }

}
//set-свойство, устанавливающее радиус окружности;
Circle.prototype.setRadius = function (newRadius) {
    return this.radius = newRadius;
};
//метод, вычисляющий площадь окружности;
Circle.prototype.getCircleArea = function () {
    const circleArea = Math.round(2 * Math.PI * this.radius ** 2);
    return circleArea;
};
//метод, вычисляющий длину окружности.
Circle.prototype.getCircumFerence = function () {
    const circumFerence = Math.round(Math.PI * 2 * this.radius)
    return circumFerence;
}

//Продемонстрировать работу свойств и методов. 

let circleRadius = new Circle();
circleRadius.setRadius(5);
console.log(circleRadius);
console.log(circleRadius.getRadius());
console.log(circleRadius.getDiameter());
console.log(circleRadius.getCircleArea());
console.log(circleRadius.getCircumFerence());

//2) Реализовать класс, описывающий простой маркер. В классе должны быть следующие компоненты:
function Marker(colorMarker, amountMarker) {
    //поле, которое хранит цвет маркера;
    this.colorMarker = colorMarker;
    //поле, которое хранит количество чернил в маркере (в процентах);
    this.amountMarker = amountMarker;
}
//метод для печати (метод принимает строку и выводит текст соответствующим цветом; 
//текст выводится до тех пор, пока в маркере есть чернила;
//один не пробельный символ – это 0,5% чернил в маркере).
Marker.prototype.printMarker = function (str) {

    const printString = document.createElement('p');
    const error = document.createElement('span');

    for (let i = 0; i <= str.length - 1; i++) {
        if (this.amountMarker >= 0.5) {
            if (str[i] !== " ") {
                printString.innerHTML = printString.innerHTML + str[i];
                this.amountMarker = this.amountMarker - 0.5;
            } else {
                printString.innerHTML = printString.innerHTML + str[i];
            }
        } else error.textContent = "Error"
    }
    printString.style.color = this.colorMarker;
    document.querySelector("div").appendChild(printString);
    document.querySelector("div").appendChild(error);
}

const markerTest = new Marker('green', 45);
markerTest.printMarker("Hello world!");
markerTest.printMarker("Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem obcaecati velit maxime illum deleniti fugit, aliquam odio provident alias repellendus quibusdam reprehenderit eum at dignissimos odit adipisci incidunt? Iure, cupiditate.");
//Реализовать класс, описывающий заправляющийся маркер, 
//унаследовав его от простого маркера и добавив метод для заправки маркера.
class RefuelMarker extends Marker {
    addAmountMarker = function (amount) {
        this.amountMarker = this.amountMarker + amount;
        if (this.amountMarker > 100) this.amountInk = 100;
    }
}
const markerTest1 = new RefuelMarker('green', 45);
markerTest1.addAmountMarker(55);

//3) Реализовать класс Employee, описывающий работника, и создать массив работников банка.
//Реализовать класс EmpTable для генерации HTML-кода таблицы со списком работников банка. 
//Массив работников необходимо передавать через конструктор, а получать HTML-код с помощью метода getHtml().
//Создать объект класса EmpTable и вывести на экран результат работы метода getHtml().
function Employee(name, age, position, salary) {
    this.name = name;
    this.age = age;
    this.position = position;
    this.salary = salary;
}


const peopleBank = [
    new Employee('Jonh Smith', 31, 'sercet agent', 1240),
    new Employee('James Bond', 42, 'sercet agent 007', 2000),
    new Employee('Harry Poter', 30, 'magic manager', 1200),
    new Employee('Adele Smith', 35, 'directot', 1000)
];

function EmpTable(peopleBank) {

    this.getHtml = function () {

        const table = document.createElement('table');
        const tr = document.createElement('tr');
        const keys = Object.keys(peopleBank[0]);

        keys.forEach(function (item) {
            const th = document.createElement('th');
            newItem = item[0].toUpperCase() + item.slice(1);
            th.textContent = newItem;
            tr.appendChild(th);
        });
        table.appendChild(tr);

        peopleBank.forEach(function (item) {
            const tr1 = document.createElement('tr');
            let td;
            for (key in item) {
                td = document.createElement('td');
                td.textContent = item[key];
                tr1.appendChild(td);
            }
            table.appendChild(tr1);
        });
        document.querySelector("div").appendChild(table);
    }
}

const tableObj = new EmpTable(peopleBank);
tableObj.getHtml();
