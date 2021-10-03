// ex 1
// const currentDay = prompt('What day is it?');
// let nextDay = null;

// switch (currentDay) {
// 	case 'Sunday':
// 		nextDay = 'Monday';
// 		break;
// 	case 'Monday':
// 		nextDay = 'Tuesday';
// 		break;
// 	case 'Tuesday':
// 		nextDay = 'Wednesday';
// 		break;
// 	case 'Wednesday':
// 		nextDay = 'Thursday';
// 		break;
// 	case 'Thursday':
// 		nextDay = 'Friday';
// 			break;
// 	case 'Friday':
// 		nextDay = 'Saturday';
// 		break;
// 	case 'Saturday':
// 		nextDay = 'Sunday';
// 		break;
// 	default:
// 		console.log(`'${currentDay}' is not a day I recognize, try again.`)
// }

// if (nextDay != null) {
// 	console.log(`If today is ${currentDay}, then tomorrow is ${nextDay}`);
// }

// ex 2
// const number1 = prompt('Please enter a number:');
// const number2 = prompt('Please enter another number:');

// if (number1 > number2) {
// 	console.log(`${number1} is greater than ${number2}.`);
// } else if (number1 === number2) {
// 	console.log(`${number1} and ${number2} are equal.`);
// } else {
// 	console.log(`${number1} is less than ${number2}`)
// }

// ex 3
// const monthNumber = Number(prompt('Please enter a month number (1 - 12):'));

// let monthName = null;
// let daysInMonth = null;

// switch (monthNumber) {
// 	case 1:
// 		monthName = 'January';
// 		daysInMonth = 31
// 		break;
// 	case 2:
// 		monthName = 'February';
// 		daysInMonth = 28
// 		break;
// 	case 3:
// 		monthName = 'March';
// 		daysInMonth = 31
// 		break;
// 	case 4:
// 		monthName = 'April';
// 		daysInMonth = 30
// 		break;
// 	case 5:
// 		monthName = 'May';
// 		daysInMonth = 31
// 		break;
// 	case 6:
// 		monthName = 'June';
// 		daysInMonth = 30
// 		break;
// 	case 7:
// 		monthName = 'July';
// 		daysInMonth = 31
// 		break;
// 	case 8:
// 		monthName = 'August';
// 		daysInMonth = 31
// 		break;
// 	case 9:
// 		monthName = 'September';
// 		daysInMonth = 30
// 		break;
// 	case 10:
// 		monthName = 'October';
// 		daysInMonth = 31
// 		break;
// 	case 11:
// 		monthName = 'November';
// 		daysInMonth = 30
// 		break;
// 	case 12:
// 		monthName = 'December';
// 		daysInMonth = 31
// 		break;
// 	default:
// 		console.log(`You entered a month I do not recognize, please try again.`)
// }

// if ((monthName != null) && (monthNumber != null)) {
// 	console.log(`${monthNumber} is ${monthName} and it has ${daysInMonth} days.`)
// }

// ex 4
// alert('Please enter a time in hours, minutes, and seconds. Use numbers only.')

let hoursEntered = Number(prompt('Please enter the hour (00 - 23)'));
let minutesEntered = Number(prompt('Please enter the minutes (00 - 59)'));
let secondsEntered = Number(prompt('Please enter the seconds (00 - 59)'));

let secondOutput;
let minuteOutput;
let hourOutput;
let isNewMinute = false;
let isNewHour = false;

// console.log(`You entered: ${hoursEntered}h ${minutesEntered}m ${secondsEntered}s`)
if (secondsEntered == 59) {
	secondOutput = '00s';
	isNewMinute = true;
} else {
	secondOutput = secondsEntered + 's'
}

if ((isNewMinute) && (minutesEntered == 59)) {
	isNewHour = true;
	minuteOutput = '00m';
} else if (isNewMinute) {
	minutesEntered += 1;
	minuteOutput = minutesEntered + 'm'
} else {
	minuteOutput = minutesEntered + 'm'
}

if ((isNewHour) && (hoursEntered == 23)) {
	hourOutput = '00h';
} else if (isNewHour) {
	hoursEntered += 1;
	hourOutput = hoursEntered + 'h'
} else {
	hourOutput = hoursEntered + 'h'
}

console.log(`${hourOutput} ${minuteOutput} ${secondOutput}`);












// else if (secondsEntered === 59) {
// 	console.log(`${secondsEntered} is valid and it will be a new minute`)
// 	newTime += '00s';
// 	// isNewMinute = true;
// 	if ((secondsEntered > 59) || (secondsEntered < 0) || isNaN(secondsEntered)) {
// 		console.log(`${secondsEntered} is invalid`)
// 	} else if (secondsEntered === 59) {
// 		console.log(`${secondsEntered} is valid and it will be a new minute`)
// 		// isNewMinute = true;
// 		// do minute if minute is 59 
// 		// do hour
// 	}
// 	// do minute if minute is 59 
// 	// do hour
// }
// console.log(newTime);


// if ((hoursEntered <= 23) && (hoursEntered > -1) && !isNaN(hoursEntered)) {
// 	console.log(`${hoursEntered} is valid`)
// } else {
// 	console.log(`${hoursEntered} is invalid`)
// }







// (minutesEntered < 59) || (secondsEntered < 59)) {

// } else {

// }