(function(){

    const endPart = '\n ____________________________________ \n'
    // Part 1

    console.log (' Подсчитать сумму всех чисел в заданном пользователем диапазоне.');

    const minRange = +prompt('Введите нижнюю границу диапазана','');
    const maxRange = +prompt('Введите верхнюю границу диапазона', '');

    let sumRange = 0 ;
    for ( let i = minRange; i <= maxRange; i++ ){
        sumRange = sumRange + i;
    }
    console.log('Сумма всех чисел диапазана равна ' + sumRange );
    console.log(endPart);

    //Part 2
    console.log('Запросить 2 числа и найти только наибольший общий делитель.');
    const numberOne = +prompt('Введите число №1','');
    const mumberTwo = +prompt('Ведите число №2','');
    let minNumber;
    if (numberOne<mumberTwo){
        minNumber = numberOne;
    } else {
        minNumber = mumberTwo
    }
    let maxCommonFactor = 1;
    for (let i=1; i<=minNumber; i++){
        if (numberOne%i === 0 && mumberTwo%i ===0 ){
            maxCommonFactor = i;
        };
    };
    console.log('Максимальный общий делитель двох чисел равен ' + maxCommonFactor);
    console.log(endPart);

    //Part 3
    console.log('Запросить у пользователя число и вывести все делители этого числа.');
    const userNumber = +prompt('Введит число', '');
    let answerCommonFactors = 'Делители числа ' + userNumber + ' : ';

    for( let i=1; i<=userNumber; i++ ){
        if (userNumber%i === 0){
            if (i === userNumber){
                answerCommonFactors = answerCommonFactors + i + '.';
            }else {
                answerCommonFactors = answerCommonFactors + i + ', ';
            }
        }
    }
    console.log(answerCommonFactors);

    //Part 4
    console.log('Определить количество цифр в введенном числе.');
    const userNumberPart4 = +prompt('Введите чилочисленное число', '');
    let anchor = 9;
    let part4Answer = 1;
    while ( anchor < userNumberPart4){
        anchor = anchor + 9 * 10 ** (part4Answer);
        part4Answer = part4Answer +1;
    }
    console.log('В вашем числе ' + part4Answer + ' цифр');


    //Part 5
    console.log('Запросить у пользователя 10 чисел и подсчитать, сколько он ввел положительных, отрицательных и нулей. При этом также посчитать, сколько четных и нечетных. Вывести статистику на экран. Учтите, что достаточно одной переменной (не 10) для ввода чисел пользователем');

    let usserNumbersPart5 = 0;
    const numbersStatistic = {
        negative: 0,
        positive: 0,
        null: 0,
        even: 0,
        odd: 0,
    }

    for( let i = 0; i<10; i++ ) {
        usserNumbersPart5 = prompt('Введите число № ' + (i+1));

        if(usserNumbersPart5 === 0){
            numbersStatistic.null = numbersStatistic.null +1;
        };
        if (usserNumbersPart5 < 0){
            numbersStatistic.negative = numbersStatistic.negative +1;
        };
        if (usserNumbersPart5 > 0){
            numbersStatistic.positive = numbersStatistic.positive +1;
        };
        if(usserNumbersPart5%2 === 0){
            numbersStatistic.even = numbersStatistic.even +1;
        }else {
            numbersStatistic.odd = numbersStatistic.odd +1;
        };
    };

    console.log('Вы ввели : \n' +
    numbersStatistic.negative + ' - отрицательных чисел; \n' +
    numbersStatistic.positive + ' - положительных чисел; \n' +
    numbersStatistic.null + ' - нулей; \n' +
    numbersStatistic.even + ' - четных чисел; \n' +
    numbersStatistic.odd + ' - нечетных чисел; \n');
    console.log(endPart );

    //Part 6 
    console.log("Зациклить калькулятор. Запросить у пользователя 2 числа и знак, решить пример, вывести результат и спросить, хочет ли он решить еще один пример. И так до тех пор, пока пользователь не откажется.");

    do {
        let number1 = +prompt('Ведите число №1', '');
        let symbol = prompt('Введите знак дейсвия (*, /, +, -)', '');
        let number2 = +prompt('Введите число №2', '');
        let answer = 0;
        switch(symbol){
            case '*' :
                answer = number1 * number2 ;
                break
            case '/' :
                answer = number1 / number2;
                break;
            case '+' :
                answer = number1 + number2;
                break;
            case '-' :
                answer = number1 - number2;
                break
        }
        console.log(answer);
    } while ( confirm('Вы еще хотите что то посчитать') );
    console.log(endPart );

    //Part 7
    console.log('Запросить у пользователя число и на сколько цифр его сдвинуть. Сдвинуть цифры числа и вывести результат (если число 123456 сдвинуть на 2 цифры, то получится 345612)');

    const number7 = +prompt('Введитн число', '');
    const digits = [];

    let counterOne = 0;
    while((number7 / (10**counterOne)) > 1){
        digits[counterOne] = ~~( (number7 % 10**(counterOne +1)) / 10**counterOne);
        counterOne++;
    }

    const digitmove = +prompt('На сколько цифр сдвинуть ?', '');
    let counterTwo = 0;
    let answer7 = 0;

    for( let i = counterOne - digitmove ; i < counterOne ; i++){
        answer7 = answer7 + digits[i]*(10**counterTwo);
        counterTwo++;
    }

    for(let i = 0; i < (counterOne - digitmove) ; i++){
        answer7 = answer7 + digits[i]*(10**counterTwo);
        counterTwo++;
    }

    const textAnswer7 = 'Получиться число ' + answer7;

    console.log(textAnswer7);
    console.log(endPart );

    //Part 8
    console.log('Зациклить вывод дней недели таким образом: «День недели. Хотите увидеть следующий день?» и так до тех пор, пока пользователь нажимает OK.');
    const daysOfWeek = [
        'Понеденльник',
        "Вторник",
        "Среда",
        "Четверг",
        "Пятница",
        "Субота",
        "Воскресение"
    ]

    let question = '';
    let counter = 0;

    do {
        question = daysOfWeek[counter] + '. Хотите увидеть следующий день?';
        if (counter >= 6) {
            counter = 0;
        } else {
            counter++;
        }
    } while(confirm(question));
    console.log(endPart );

    //Part 9 
    console.log('Вывести таблицу умножения для всех чисел от 2 до 9. Каждое число необходимо умножить на числа от 1 до 10.');

    ansvwer9 = '';
    for(let i=2; i<=9 ; i++){
        for(let j=1; j<=10; j++){
            ansvwer9 = ansvwer9 + i + ' x ' + j + ' = ' + i*j + '\n';
        }
        ansvwer9 = ansvwer9 + '__________________________ \n';
    }

    console.log(ansvwer9);
    console.log(endPart );

    //Part 10
    console.log('Игра «Угадай число». Предложить пользователю загадать число от 0 до 100 и отгадать его следующим способом: каждую итерацию цикла делите диапазон чисел пополам, записываете результат в N и спрашиваете у пользователя «Ваше число > N, < N или == N?». В зависимости от того, что указал пользователь, уменьшаете диапазон. Начальный диапазон от 0 до 100, поделили пополам и получили 50. Если пользователь указал, что его число > 50, то изменили диапазон на от 51 до 100. И так до тех пор, пока пользователь не выберет == N.')

    let border1 = 0;
    let border2 = 100;
    let number10 = 0;
    let question10 = "";
    let answer10 = ''
    while( answer10 !== '==' ){
        number10 = ~~((border1 + border2) / 2);
        question10 = 'Ваше число > ' + number10 + ', < ' + number10 + ' или == ' + number10 + '?';
        answer10 = prompt (question10, '');
        switch(answer10){
            case '<' :
                border2 = number10;
                break;
            case '>' :
                border1 = number10;
                break;
        }
    }
    console.log(endPart );
})()
