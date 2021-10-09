// ex 1
console.log('Exercise 1');

class Dog {
	constructor(name, type, size) {
		this.name = name;
		this.type = type;
		this.size = size;
	}

	bark() {
		let barkSound;

		if (this.size > 60) {
			barkSound = 'Grrrrr!!';
		} else {
			barkSound = 'Woof!!';
		}

		return barkSound;
	}
}

const fang = new Dog("Fang", "boarhound", 75);
console.log(`${fang.name} is a ${fang.species} dog measuring ${fang.size}`);
console.log(`Look, a cat! ${fang.name} barks: ${fang.bark()}`);

const snowy = new Dog("Snowy", "terrier", 22);
console.log(`${snowy.name} is a ${snowy.species} dog measuring ${snowy.size}`);
console.log(`Look, a cat! ${snowy.name} barks: ${snowy.bark()}`);

// ex 2
console.log('Exercise 3');

class Account {
	constructor(name, balance) {
		this.name = name;
		this.balance = balance;
	}

	credit(amount) {
		this.balance += amount;
	}

	describe() {
		return `account owner: ${this.name}, balance: ${this.balance}`
	}
}

let accounts = [
	new Account('Sean', 0), 
	new Account('Brad', 0), 
	new Account('George', 0)
];

for (const account of accounts) {
	account.credit(1000);
	console.log(account.describe());
}