console.log("Assignment 1");
const askedAge = prompt("How old are you?", "");
if (askedAge <= 2) {
    console.log("You are a kid");
}
else if (askedAge >= 12 && askedAge <= 18) {
    console.log("You are a teenager");
}
else if (askedAge >= 18 && askedAge <= 60) {
    console.log("You are an adult");
}
else if (askedAge > 2 && askedAge < 12) {
    console.log("You are a schoolchild");
}
else {
    console.log("You are an aged");
}

console.log("Assignment 2");
const askedNumber = +prompt("What number do u want?", "");
switch (askedNumber) {
    case 1:
        console.log("!");
        break;
    case 2:
        console.log("@");
        break;
    case 3:
        console.log("#");
        break;
    case 4:
        console.log("$");
        break;
    case 5:
        console.log("%");
        break;
    case 6:
        console.log("^");
        break;
    case 7:
        console.log("&");
        break;
    case 8:
        console.log("*");
        break;
    case 9:
        console.log("(");
        break;
    case 0:
        console.log(")");
        break;
    default:
        alert("There is no symbol on this number");
}

console.log("Assignment 3");
const askedThreeNumbers = prompt("Enter three numbers", "");

if (askedThreeNumbers.length > 3) {
    console.log("You entered more than 3 numbers");
}
else if (askedThreeNumbers[0] == askedThreeNumbers[1] && askedThreeNumbers[0] != askedThreeNumbers[2]) {
    console.log("First and second numbers are same");
}
else if (askedThreeNumbers[1] == askedThreeNumbers[2] && askedThreeNumbers[1] != askedThreeNumbers[0]) {
    console.log("Second and third numbers are same");
}
else if (askedThreeNumbers[0] == askedThreeNumbers[2] && askedThreeNumbers[0] != askedThreeNumbers[1]) {
    console.log("First and third numbers are same");
}
else if (askedThreeNumbers[0] == askedThreeNumbers[1] && askedThreeNumbers[0] == askedThreeNumbers[2]) {
    console.log("Three numbers are same");
}
else {
    console.log("There are no same numbers");
}

console.log("Assignment 4");
const askedYear = prompt("Enter year", "");

if (askedYear % 400 == 0) {
    console.log("Leap Year");
}
else if (askedYear % 4 == 0 && askedYear % 100 != 0) {
    console.log("Leap Year");
}
else {
    console.log("Normal Year");
}

console.log("Assignment 5");
const askedPalNumber = prompt("Enter 5 numbers", "");
if (askedPalNumber.length == 5) {
    if (askedPalNumber[0] == askedPalNumber[4] && askedPalNumber[1] == askedPalNumber[3]) {
        console.log("It is Palindrome");
    } else {
        console.log("It is not Palindrome");        
    }
}
else if (askedPalNumber < 5) {
    alert("Please reload the app. You entered less than 5 numbers");  
}
else {
    alert("Please reload the app. You entered more than 5 numbers");
}

console.log("Assignment 6");
const askedAmount = prompt("Enter amount", "");
const askedCurrency = prompt("Enter exchange currency (EUR, UAH, AZN)", "");
const euro = 0.82;
const uah = 27.90;
const azn = 1.70;

if (askedCurrency == "EUR" || askedCurrency == "eur" || askedCurrency == "Eur" || askedCurrency == "eUr" || askedCurrency == "euR") {
    const euroAmount = (askedAmount * euro).toFixed(2);
    console.log(euroAmount);
}
else if (askedCurrency == "UAH" || askedCurrency == "uah" || askedCurrency == "Uah" || askedCurrency == "uAh" || askedCurrency == "uaH") {
    const uahAmount = (askedAmount * uah).toFixed(2);
    console.log(uahAmount);
}
else if (askedCurrency == "AZN" || askedCurrency == "azn" || askedCurrency == "Azn" || askedCurrency == "aZn" || askedCurrency == "azN") {
    const aznAmount = (askedAmount * azn).toFixed(2);
    console.log(aznAmount);
} else {
    alert("You caught an error, we dont have this currency or you made a mistake whule entering currency!");
}

console.log("Assignment 7");
const askedBill = prompt("Enter amount on your bill", "");
const discount3 = 0.03;
const discount5 = 0.05;
const discount7 = 0.07;

if (askedBill >= 200 && askedBill < 300) {
    const calculatePrice3 = (askedBill * discount3).toFixed(2);
    const resultDiscount3 = askedBill - calculatePrice3;
    console.log(resultDiscount3);
}
else if (askedBill >= 300 && askedBill < 500) {
    const calculatePrice5 = (askedBill * discount5).toFixed(2);
    const resultDiscount5 = askedBill - calculatePrice5;
    console.log(resultDiscount5);
}
else if (askedBill >= 500) {
    const calculatePrice7 = (askedBill * discount7).toFixed(2);
    const resultDiscount7 = askedBill - calculatePrice7;
    console.log(resultDiscount7);
} else {
    alert(askedBill);
}

console.log("Assignment 8");
const askedCircle = prompt("Enter circle size", "");
const askedSquare = prompt("Enter square perimeter", "");
if (askedCircle / Math.PI <= askedSquare / 4) {
    console.log("Сircle will fit into the square");
} else {
    console.log("Circle will not fit into the square");
}

console.log("Assignment 9");
const askedQuestion1 = prompt("Capital of Ukraine?        a: Kyiv.    b: Lviv.    c: New York.");
const askedQuestion2 = prompt("Capital of USA?          a: New York.    b: Washington.    c: Dnipro.")
const askedQuestion3 = prompt("Capital of Poland?          a: Wroclaw.    b: Odessa.    c: Warsaw.")
let counter = 0;
if (askedQuestion1 == "a") {
    counter += 2;
}
if (askedQuestion2 == "b") {
    counter += 2;
}
if (askedQuestion3 == "c") {
    counter += 2;
}
const resultDiscount = "Your score: " + counter;
console.log(resultDiscount);

console.log("Assignment 10");
let askedDay = +prompt("Enter day", "");
let askedMonth = +prompt("Enter month", "");
let askedYear = +prompt("Enter year", "");
if ((askedDay < 29 && askedMonth == 2) && (askedYear % 400 == 0 || askedYear % 4 == 0 && askedYear % 100 != 0)) {
    askedDay++;
    console.log(askedDay, askedMonth, askedYear);
}
else  if (askedDay == 29 && askedMonth == 2 || askedDay == 30 & askedMonth == 2 || askedDay == 31 && askedMonth == 2) {
    askedDay = 1;
    askedMonth++;
    console.log(askedDay, askedMonth, askedYear);
}
else if (askedDay == 28 && askedMonth == 2) {
    askedDay = 1;
    askedMonth++;
    console.log(askedDay, askedMonth, askedYear);
}
else if (askedDay == 31 && askedMonth == 12) {
    askedDay = 1;
    askedMonth = 1;
    askedYear++;
    console.log(askedDay, askedMonth, askedYear); 
}
else if (askedDay == 31 && askedMonth < 12) {
    askedDay = 1;
    askedMonth++;
    console.log(askedDay, askedMonth, askedYear)
} else {
    askedDay++;
    console.log(askedDay, askedMonth, askedYear);
}
