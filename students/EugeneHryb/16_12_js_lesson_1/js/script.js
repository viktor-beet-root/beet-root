const endPart = "_______________________________________________ \n"

//Part 1
console.log("Part 1");
const userName = prompt("Call your name ", '');
console.log("Hi " + userName);
console.log(endPart);

//Part 2
console.log('Part 2');
const currentYear = 2020;
const yearsBorn = prompt("Enter the year of birth ", '');
const age = currentYear - yearsBorn;
const mesageAge = "Your are " + age + " years old.";
console.log(mesageAge);
console.log(endPart);

//Part 3
console.log('Part 3');
const side = prompt("Enter the size of the square,",'');
const perimeter = side*4;
const perimeterMesage = "Perimeter aquare is equal to " + perimeter;
console.log(perimeterMesage);
console.log(endPart);

//Part 4
console.log('Part 4');
const radius = prompt ('Enter the circle radius', '');
const square = radius ** 2 * Math.PI;
const squareMesage = 'Circle area is equal ' + square;
console.log(squareMesage);
console.log(endPart);

//Part 5
console.log('Part 5');
const distance = prompt ('How long do you need to go', '');
const time = prompt ('How long do you want to drive', '');
const speed = distance / time;
const speedMesage = 'You need to drive at a speed of ' + speed + ' km hour'
console.log(speedMesage);
console.log(endPart);

//Part 6
console.log('Part 6');
const curse = 0.82;
const dol = prompt ('Enter the amount in dollars', '');
const euro = dol * curse;
const euroMesage =  dol + ' dollars will equal ' + euro + ' euros.';
console.log(euroMesage);
console.log(endPart);

//Part 7
console.log('Part 7');
const flashDriveVolume = prompt ("Specify the size of the flash drive in GB", '');
const muvie = (flashDriveVolume * 1024 - ( flashDriveVolume * 1024 ) % 820) / 820 ;
const muvieMesage = 'The flash drive will fit ' + muvie + ' films of 820 MB each'
console.log(muvieMesage);
console.log(endPart);

//Part 8
console.log('Part 8');
const maney = prompt ('How much money is in the wallet?', '');
const priceChocoleteBar = prompt ('How much does a chocolate bar cost?', '');
const qtyChocoleteBar = (maney - (maney % priceChocoleteBar)) / priceChocoleteBar;
const deliveryMoney = maney % priceChocoleteBar;
const deliveryMoneyMesage = 'You can buy ' + qtyChocoleteBar + ' chocolates and you will have ' + deliveryMoney +' money left'
console.log (deliveryMoneyMesage);
console.log(endPart);

//Part 9
console.log('Part 9');
const treeNumber = prompt ('Please enter a three-digit number', '');
let numberTree = treeNumber % 10;
numberTree = ((treeNumber % 100 - numberTree) / 10 + numberTree * 10 ) ;
numberTree = numberTree * 10 + (treeNumber - (treeNumber % 100)) / 100;
const numberTreeMesage = 'This is your number)) : ' + numberTree
console.log(numberTreeMesage);
console.log(endPart);

//Part 10
console.log('Part 10');
const depManey = prompt ('Enter deposit amount', '');
let sumManey = depManey * (1 + (0.05 / 12));
sumManey = sumManey * (1 + (0.05 / 12));
const percentMoney = sumManey - depManey; 
const percentMoneyMasege = 'For two months you will be credited ' + percentMoney + ' UAH. interest on the deposit'
console.log(percentMoneyMasege);
console.log(endPart);
console.log('END');
