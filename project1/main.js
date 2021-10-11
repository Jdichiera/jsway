/*
	requirements:
		https://github.com/thejsway/thejsway/blob/master/manuscript/chapter11.md
*/

class Link {
	constructor(name, url, author) {
		this.name = name;
		this.url = this.formatUrl(url);
		this.author = author;
	}

	formatUrl(url) {
		if (!(url.startsWith('http://')) || !(url.startsWith('https://'))) {
			url = 'http://' + url;
		}

		return url;
	}

	display() {
		return `${this.name} (${this.url}). Author: ${this.author}`;
	}
}

let input = 99;
let links = []

while (input > 0) {
	 input = showMainMenu();
	 handleInput(input);
	 console.log(... links);
}

function showMainMenu() {
	// Using string concatenation for multi line to avoid character in
	// output when using /
	let input = Number(prompt('Choose an option\n ' +
	'  1 : Show links\n ' + 
	'  2 : Add a Link\n ' + 
	'  3 : Remove a Link\n ' +
	'  0 : Quit'));

	return input;
}

function handleInput(input) {
	console.log(input);
	switch (input) {
		case 1:
			showLinks();
			break;
		case 2:
			addLink();
			break;
		case 3:
			removeLink();
			break;
		case 0:
			quit();
			break;
		default:
			handleInvalidInput();
			break;
	}
}
function showLinks() {
	let linkString = '';
	for (let i = 0; i < links.length; i++) {
		linkString += `${i + 1}: ${links[i].display()} \n`;
	}

	alert(linkString);
}

function addLink() {
	let name = prompt('Adding link: \n Please enter link name');
	let url = prompt('Adding link: \n Please enter link url');
	let author = prompt('Adding link: \n Please enter link author');

	links.push(new Link(name, url, author));
}

function removeLink() {
	let userInput;
	if (links.length === 0) {
		alert('There are no links to remove.');
	} else {
		userInput = Number(prompt(`Enter the index of the link to be removed (between 1 and ${links.length})`));
	}

	if ((userInput > 0) && (userInput <= links.length)) {
		console.log(userInput - 1);
		links.splice((userInput - 1), 1);
		showLinks();
	} else {
		alert(`${userInput} is not an index in use. Returning to main menu.`)
	}
}

function quit() {
	alert('Have a good day!');
}

function handleInvalidInput() {
	alert('Please enter a number between 0 and 3.');
}