// ex 1
const firstName = prompt('What is your first name?');
const lastName = prompt('What is your last name?');
console.log(`Hello, ${firstName} ${lastName}`); // template literal using backtick
console.log('Hello, ' + firstName + ' ' + lastName);


// ex 2
let rawPrice = prompt('Input the price:');
let priceWithTax = rawPrice + (rawPrice * .206);
console.log(priceWithTax)


// ex 3
let tempInCelsius = prompt('What is the temperature in Celsius?')
let tempInFarenheit = (tempInCelsius / 5) * 9 + 32;
console.log(tempInFarenheit);


// ex 4
let number1 = 5;
let number2 = 3;

let swapHolder = number1;
number1 = number2;
number2 = swapHolder;

console.log(number1); // Should show 3
console.log(number2); // Should show 5