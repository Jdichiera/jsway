// ex 1
console.log('Exercise 1');
const muskateers = ['Athos', 'Porthos', 'Aramis'];

for (let i = 0; i < muskateers.length; i++) {
	console.log(muskateers[i]);
}
console.log('====');

muskateers.push("D'Artagnan");

// forEach(anon function)
muskateers.forEach(muskateer => {
	console.log(muskateer);
});
console.log('====');

muskateers.splice(1, 1);

for (const muskateer of muskateers) {
	console.log(muskateer);
}

console.log('===');
console.log('Exercise 2');
// ex 2
const values = [3, 11, 7, 2, 9, 10];
let sum = 0;

for (const value of values) {
	sum += value;
};
console.log(sum);

// ex 3
console.log('===');
console.log('Exercise 3');
const values2 = [3, 11, 7, 2, 9, 10];
let maxValue = 0;

for (const value of values2) {
	if (value > maxValue) {
		maxValue = value;
	}
}

console.log('The max value of:');
for (const value of values2) {
	console.log(value);
}

console.log(`Is ${maxValue}`);