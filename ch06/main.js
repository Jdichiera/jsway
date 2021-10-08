// ex 1
const aurora = {
	name: 'Aurora',
	health: 25,
	strength: 5,
	xp: 0,

	describe() {
		return `${this.name} has ${this.health} health points, ${this.strength}, as strength and ${this.xp} XP points`;
	}
};

// Aurora is harmed by an arrow
aurora.health -= 20;

// Aurora equips a strength necklace
aurora.strength += 10;

// Aurora learn a new skill
aurora.xp += 15;

console.log(aurora.describe());

//ex 2
const dog = {
	name: 'Doggy',
	species: 'Lab',
	size: 'medium',

	bark() {
		return 'WOOF!'
	}
}

console.log(`${dog.name} is a ${dog.species} dog measuring ${dog.size}`);
console.log(`Look, a cat! ${dog.name} barks: ${dog.bark()}`);

const account = {
	name: 'Alex',
	balance: 0,
	credit(amount) {
		this.balance += amount
	},

	describe() {
		return `account: ${this.name}, balance: ${this.balance}`
	}
}

console.log(account.describe())
account.credit(250)
console.log(account.describe())
account.credit(-80)
console.log(account.describe())