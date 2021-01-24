(function () {
    // 1) Реализовать класс, описывающий окружность. В классе должны быть следующие компоненты:

    // поле, хранящее радиус окружности;
    // get-свойство, возвращающее радиус окружности;
    // set-свойство, устанавливающее радиус окружности;
    // get-свойство, возвращающее диаметр окружности;
    // метод, вычисляющий площадь окружности;
    // метод, вычисляющий длину окружности.
    // Продемонстрировать работу свойств и методов.


    function Circle(radius) {
        this.radius = radius;

        Object.defineProperty(this, "getRadius", {
            get: function () {
                return this.radius;
            }
        });

        Object.defineProperty(this, "setRadius", {
            set: function (value) {
                this.radius = value;
            }
        });

        Object.defineProperty(this, "getDiameter", {
            get: function(){
                return this.radius *2;
            }
        })
    }

    Circle.prototype.square = function(){
        return Math.PI*(this.radius**2);
    }

    Circle.prototype.length = function(){
        return Math.PI * this.getDiameter;
    }



    circle1 = new Circle(23);

    console.log(circle1.getRadius , ' Печать радиуса');
    circle1.setRadius = 4;
    console.log(circle1.getRadius , " Радиус после измениея через сетер");
    console.log(circle1.getDiameter , " Диаметер через гетер");
    console.log(circle1.square(),"Площадь окружности" )
    console.log(circle1.length(), 'Длина окружности')

    // 2) Реализовать класс, описывающий простой маркер. В классе должны быть следующие компоненты:

    // поле, которое хранит цвет маркера;
    // поле, которое хранит количество чернил в маркере (в процентах);
    // метод для печати (метод принимает строку и выводит текст соответствующим цветом; текст выводится до
    // тех пор, пока в маркере есть чернила; один не пробельный символ – это 0,5% чернил в маркере).

    function Marker(color, wraper){
        this.wraper = wraper;
        this.color = color;
        this.ink = 100;
    }

    Marker.prototype.print = function(string){
        let printText = ''
        for(let i = 0; i<string.length; i++){
            if(this.ink > 0){
                printText = printText + string[i];
                if(string[i] !== ' '){
                    this.ink = this.ink - 0.5;
                }
            }else{
                console.log('Чернила закончились');
                break;
            }
        }
        this.wraper.insertAdjacentHTML('beforeend', `
            <span style="color: ${this.color};">${printText}</span>
        `)
    }

    markerOne = new Marker("green", document.querySelector('.marker1'))
    markerOne.print('Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam eligendi fugit optio amet saepe sapiente expedita beatae maiores quas, praesentium doloremque aperiam tempora, natus libero, temporibus quos accusantium voluptas ipsam.')

    //Реализовать класс, описывающий заправляющийся маркер,
    //унаследовав его от простого маркера и добавив метод для заправки маркера.

    class FilledMarker extends Marker {};

    FilledMarker.prototype.fill = function(){
        this.ink = 100;
    }

    markerTwo = new FilledMarker('red', document.querySelector('.marker1'))
    markerTwo.print('Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam eligendi fugit optio amet saepe sapiente expedita beatae maiores quas, praesentium doloremque aperiam tempora, natus libero, temporibus quos accusantium voluptas ipsam.')
    markerTwo.fill();
    markerTwo.print('Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam eligendi fugit optio amet saepe sapiente expedita beatae maiores quas, praesentium doloremque aperiam tempora, natus libero, temporibus quos accusantium voluptas ipsam.')

    // 3) Реализовать класс Employee, описывающий работника, и создать массив работников банка.
    // Реализовать класс EmpTable для генерации HTML-кода таблицы со списком работников банка.
    //Массив работников необходимо передавать через конструктор, а получать HTML-код с помощью метода getHtml().
    // Создать объект класса EmpTable и вывести на экран результат работы метода getHtml().

    function Employee(name, position, age){
        this.name = name;
        this.position = position;
        this.age = age;
    }

    const bankEmployees = [
        new Employee('Альберт', "менеджер", 30),
        new Employee("Ина", "Касир", 23),
        new Employee("Галина", "Экономист", 35),
        new Employee("Наталия", "Директор", 34),
    ];

    function EmpTable(listEmployees){
        this.listEmployees = listEmployees;
    }

    EmpTable.prototype.getHtml = function(){
        let ansver = `
        <table border = 2>
        <caption>Таблица работников банка</caption>
        <tbody>
        <tr><td>№ п/п</td><td>Имя</td><td>Должность</td><td>Возвраст</td></tr>
        `
        let counter = 1;
        this.listEmployees.forEach(function(item){
            ansver = ansver + `
            <tr><td>${counter}</td><td>${item.name}</td><td>${item.position}</td><td>${item.age}</td></tr>
            `
            counter++
        })
        ansver = ansver + `</tbody></table>`
        return ansver;
    }

    const bankEmp = new EmpTable(bankEmployees);


    const bankTableWrapper = document.querySelector('.emp__table');
    bankTableWrapper.insertAdjacentHTML('beforeend',bankEmp.getHtml())

})()
