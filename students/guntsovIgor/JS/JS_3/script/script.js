console.log('Задание 3.1');
const start = +prompt('nachalo daipozona');
const end = +prompt('konec diapozona');
let sum = 0 ;
let i = Math.min(start,end);
while (i <= Math.max(start,end)) {
    sum = sum + i;
    i++;
}
console.log(sum);

console.log('Задание 3.2');
const num1 = +prompt('chislo 1');
const num2 = +prompt('chislo 2');
let min = Math.min (num1,num2);
let k  = min -1 ;
while (k < min) {
    if (num1 % k === 0 && num2 % k === 0) {
        console.log(k);
        break;
    }
    k--;
}

console.log('Задание 3.3');
const digit = +prompt('Vvedi chislo');
let result = '';
let j  = 0 ;
while (j < digit) {
    if (num1 % j === 0) {
        result = result + ' ' + j;
    }
    j++;
}
console.log(result);

console.log('Задание 3.4');
const chislo = prompt('vvedi chislo');
let resultPositive = 'Polozhitelnie: ';
let resultNegative = 'Negative: ';
let resultZero = '0: ';
for (let i = 0; i< 3; i++) {
    let j = +prompt('vvedi chislo');
    if (j>0) {
        resultPositive = resultPositive + ' ' + j;
    }
    if (j<0) {
        resultNegative = resultNegative + ' ' + j;
    } 
    if (j === 0){
        resultZero = resultZero + j;
    }
}
console.log(resultNegative);
console.log(resultPositive);
console.log(resultZero);

console.log('Задание 3.5');
do {
    let a = +prompt('Chislo 1');
    let b = +prompt('Chislo 2');
    let c = prompt('Znak viberi - + / *');
    switch (c) {
        case '+':
            alert(a + b);
            break;
        case '-':
            alert(a - b);
            break;
        case '/':
            alert(a / b);
            break;
        case '*':
            alert(a * b);
        default:
            break;
    }
} while (confirm('Eshe primer?'));

console.log('Задание 3.6');
const digit2 = prompt('vvedi chsilo','');
const move = +prompt('na skolko sdvinyt','');
let oldResult ;
let newResult;
oldResult = ~~ (digit2 / (10**(digit2.length-move)));
newResult = String(digit2 % (10**(digit2.length-move))) + String(oldResult) ;
console.log(newResult);

console.log('Задание 3.9');
let multiple = '';
for (let i = 2; i <= 9; i++){
    for (let j = 1; j <= 10; j++) {
      multiple =  i + ' x ' + j + ' = ' + i * j;
      console.log(multiple);
    }
}
