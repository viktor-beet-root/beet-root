//Part 1
console.log("Part 1");
const userName = prompt("Call your name ", '');
console.log("Hi " + userName);
console.log("_______________________________________________");
console.log(' ');

//Part 2
console.log('Part 2');
const currentYear = 2020;
const yearsBorn = prompt("Enter the year of birth ", '');
const age = currentYear - yearsBorn;
console.log("Your are " + age + " years old.");
console.log("_______________________________________________");
console.log(' ');

//Part 3
console.log('Part 3');
const side = prompt("Enter the size of the square,",'');
const perimeter = side*4;
console.log("Perimeter aquare is equal to " + perimeter);
console.log("_______________________________________________");
console.log(' ');

//Part 4
console.log('Part 4');
const radius = prompt ('Enter the circle radius', '');
const square = radius * radius * 3.14;
console.log('Circle area is equal ' + square);
console.log("_______________________________________________");
console.log(' ');

//Part 5
console.log('Part 5');
const distance = prompt ('How long do you need to go', '');
const time = prompt ('How long do you want to drive', '');
const speed = distance / time;
console.log('You need to drive at a speed of ' + speed + ' km hour');
console.log("_______________________________________________");
console.log(' ');

//Part 6
console.log('Part 6');
const curse = 0.82;
const dol = prompt ('Enter the amount in dollars', '');
const euro = dol * curse;
console.log( dol + ' dollars will equal ' + euro + ' euros.');
console.log("_______________________________________________");
console.log(' ');

//Part 7
console.log('Part 7');
const flashDriveVolume = prompt ("Specify the size of the flash drive in GB", '');
const muvie = (flashDriveVolume * 1024 - ( flashDriveVolume * 1024 ) % 820) / 820 ;
console.log('The flash drive will fit ' + muvie + ' films of 820 MB each');
console.log("_______________________________________________");
console.log(' ');

//Part 8
console.log('Part 8');
const maney = prompt ('How much money is in the wallet?', '');
const priceChocoleteBar = prompt ('How much does a chocolate bar cost?', '');
const qtyChocoleteBar = (maney - (maney % priceChocoleteBar)) / priceChocoleteBar;
const deliveryMoney = maney % priceChocoleteBar;
console.log ('You can buy ' + qtyChocoleteBar + ' chocolates and you will have ' + deliveryMoney +' money left');
console.log("_______________________________________________");
console.log(' ');

//Part 9
console.log('Part 9');
const treeNumber = prompt ('Please enter a three-digit number', '');
let numberTree = treeNumber % 10;
numberTree = ((treeNumber % 100 - numberTree) / 10 + numberTree * 10 ) ;
numberTree = numberTree * 10 + (treeNumber - (treeNumber % 100)) / 100;
console.log('This is your number)) :' + numberTree);
console.log("_______________________________________________");
console.log(' ');

//Part 10
console.log('Part 10');
const depManey = prompt ('Enter deposit amount', '');
let sumManey = depManey * (1 + (0.05 / 12));
sumManey = depManey * (1 + (0.05 / 12));
const percentMoney = sumManey - depManey; 
console.log('For two months you will be credited ' + percentMoney + ' UAH. interest on the deposit');
console.log("_______________________________________________");
console.log('END');
