/* BOOLEAN LOGIC AND SWITCH STATEMENTS */

var age = 20;

if(age < 20) {
		console.log('John is a teenager.');
} else if(age >= 20 && age < 30) {
		console.log('John is a young man.');
} else {
		console.log('John is a man.');
}

var occupation = 'student';

occupation = prompt('What does John do?');

switch(occupation) {
		case 'student':
				console.log('John is a student.');
				break;
		case 'works':
				console.log('John works.');
				break;
		case 'driver':
				console.log('John is a driver.');
				break;
		case 'cop':
				console.log('John is a cop.');
				break;
		default:
				console.log('John does something else.');
				break;
}
