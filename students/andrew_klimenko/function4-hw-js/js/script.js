function numberComperison(a, b) {
    console.log("Задание 1: ", a, b);
    const firstIsBigger = 1;
    const secondIsBigger = -1;
    const numbersAreTheSame = 0;
     if(a > b) return firstIsBigger;  
      else if(b > a) return secondIsBigger;
      else if(a === b) return numbersAreTheSame;
}
console.log(numberComperison(+prompt("Введите число", ""), +prompt("Введите второе число", "")));

function factorialNumber(a) {
    console.log("Задание 2: ", a);
    let result = 1;
    if(a === 1 ) return result;
    for (let i = 1; i <= a; i++) {
        result = result * i;
    }
    return result;
}
console.log(factorialNumber(+prompt("Число")));

function integerNumber(a, b, c) {
    console.log("Задание 3: ", a, b, c);
    if(a <= 0 ||b < 0 || c < 0) return false;
    a = a * 100;
    b = b * 10;
    const fullNumber = a + b + c;
    return fullNumber;
}
console.log(integerNumber(+prompt("Введите число", ""), +prompt("Введите второе число", ""), +prompt("Введите третее число")));

function rectangleHeightAndWidth(a, b) {
    console.log("Задание 4: ", a, b);
    if (a < 0 || b < 0) return false;
    if (a === 0 && b === 0) return false;
    if (a === 0) {
        const squadSquare = b ** 2;
        return squadSquare;
    } else if(b === 0) {
          const squadSquare = a ** 2;
          return squadSquare;
      }
      else if(a > 0 || b > 0) {
          const rectangleSquare = a * b;
          return rectangleSquare;
      }
}
console.log(rectangleHeightAndWidth(+prompt("Введите высоту прямоугольника", ""), +prompt("Ввелите ширину прямоугольника", "")));
