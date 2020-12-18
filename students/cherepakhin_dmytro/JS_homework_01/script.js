// 6
const exchangeRates = +prompt('Enter exchange rates \u20AC/$: ');
let usdAmount = +prompt('How much $ do you want to exchange? ', '');
console.log('You will get ' + (usdAmount/exchangeRates).toFixed(2) + ' \u20AC;');

// 7
let capacity = +prompt('Enter capacity of your flash-card (GB): ', '');
const volumeOfFile = 820;
let rezult = Math.floor(capacity * 1024 / 820);
console.log('You can save only ' + rezult + ' files;');

// 8
let amountOfMoneyInPocket = +prompt('How much money do you have?', '');
let cost = +prompt('How much does a chocolate cost? ', '');
let quantityOfCholate = Math.floor(amountOfMoneyInPocket/cost);
console.log(`You can buy ${quantityOfCholate} bars of chocolate and the rest is: ` + (amountOfMoneyInPocket-quantityOfCholate*cost).toFixed(2) + ';');

// 9
let number = +prompt('Enter 3-digit number: ', '');
let digit_3 = number%10;
let digit_2 = ((number-digit_3)/10)%10;
let digit_1 = Math.floor(number/100);
let resultReversNumber = digit_3*100+digit_2*10+digit_1;
console.log(`The result is: ${resultReversNumber};`);

// 10
const interestRate = 5;
const periodOftime = 2;
let amountOfDeposit = +prompt('Ener an amount of money: ', '');
let income = (amountOfDeposit/100*interestRate/12*periodOftime).toFixed(2);
console.log(`Your income in ${periodOftime} monthes will be: $${income};`);
