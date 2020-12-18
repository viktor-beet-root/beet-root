// 6
const exchangeRates = 0.82;
const usdAmount = +prompt('How much $ do you want to exchange? ', '');
let amoutOfEuro = (usdAmount*exchangeRates).toFixed(2);
console.log('You will get ' + amoutOfEuro + ' \u20AC;');

// 7
const capacity = +prompt('Enter capacity of your flash-card (GB): ', '');
const volumeOfFile = 820;
let rezult = Math.floor(capacity * 1024 / volumeOfFile);
console.log('You can save only ' + rezult + ' files;');

// 8
const amountOfMoneyInPocket = +prompt('How much money do you have?', '');
const cost = +prompt('How much does a chocolate cost? ', '');
let quantityOfCholate = Math.floor(amountOfMoneyInPocket/cost);
let rest = (amountOfMoneyInPocket-quantityOfCholate*cost).toFixed(2);
console.log('You can buy '+quantityOfCholate + ' bars of chocolate and the rest is: $' + rest + ';');

// 9
const number = +prompt('Enter 3-digit number: ', '');
let digit_3 = number%10;
let digit_2 = ((number-digit_3)/10)%10;
let digit_1 = Math.floor(number/100);
let resultReversNumber = digit_3*100+digit_2*10+digit_1;
console.log('The result is: ' + resultReversNumber +';');

// 10
const interestRate = 5;
const periodOftime = 2;
const amountOfDeposit = +prompt('Ener an amount of money: ', '');
let income = (amountOfDeposit/100*interestRate/12*periodOftime).toFixed(2);
console.log('Your income in ' + periodOftime + ' monthes will be: $' +income +';');
