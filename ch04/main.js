// ex 1
const rotations = prompt('How many times should the carousel turn?');
console.log(`Launching carousel. It will turn ${rotations} times.`);

for (i = 1; i <= rotations; i++) {
	console.log(` --== rotation ${i} ==-- `)
}

ex 4
const input = prompt('Enter a number between 2 and 9 and I will display the associated multiplication table.');
if (input > 1 && input < 10) {
	for(i = 0; i <= 10; i++) {
		console.log(`${input} * ${i} = ${i * input}`);
	}
}

// ex 6
for (i = 1; i <= 100; i++ ) {
	if ((i % 5 === 0) && (i % 3 === 0)) {
		console.log(`FizzBuzz : ${i} % ${3} = ${i % 3} ${i} % ${5} = ${i % 5}`);
	} else if (i % 3 === 0) {
		console.log(`Fizz : ${i} % ${3} = ${i % 3}`);
	} else if ((i % 5 === 0) && !(i % 3 === 0)) {
		console.log(`Buzz: ${i} % ${3} = ${i % 3} ${i} % ${5} = ${i % 5}`);
	} else {
		console.log(i);
	}
}