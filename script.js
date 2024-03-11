// let js = "amazing";
// console.log(40 + 8 + 23 - 10);

// console.log("Melissa");
// console.log("24");

// let fisrtName = "Melissa";
// console.log("firstName");

// let myFisrtJob = "Programmer";





let javascriptIsFun = true;
console.log(javascriptIsFun);


console.log(typeof true);
console.log(typeof javascriptIsFun);
console.log(typeof 23);
console.log(typeof 'Melisa');

javascriptIsFun = 'YES!';
console.log(typeof javascriptIsFun);

// let year;
// console.log(year);
// console.log(typeof year);

// year = 1991;
// console.log(typeof year);


// let age = 30;
// age = 31;


// const birth = 1991;
// // birth = 1990;

// const job;

// var job = 'programmer';
// job = 'teacher'


// lastName = 'Melisa';
// console.log(lastName);

// Math operators
const now = 2024;
const ageMelisa = now - 1999;
const ageHamzi = now - 1998;
console.log(ageMelisa, ageHamzi);

console.log(ageMelisa * 2, ageMelisa / 10, 2 ** 3);
// 2 ** 3 means 2 to the power of 3 = 2*2*2

const firstName = 'Melisa';
const lastName = 'Ionela';
console.log(firstName + ' ' + lastName);

// Assignment operators
let x = 10 + 5; //15
x += 10; // x = x + 10 = 25
x *= 4; // x = x *4 = 100
x++; // x = x +1 
x--;
x--;
console.log(x);


// Comparison operators
console.log(ageMelisa > ageHamzi); // >, <, >=, <=
console.log(ageHamzi >= 18);

const isFullAge = ageSarah >= 18;

console.log(now - 1999 > now - 1998);

const age = 23;
// age >= 18 ? console.log('I like to drink wine') :
//     console.log('I like to drink wine');


//Operator precedence
let x, y;
x = y = 25 - 10 - 5; // x= y = 10
console.log(x, y);


const averageAge = (ageMelisa + ageHamzi) / 2
console.log(ageMelisa, ageHamzi, averageAge);

//TEMPLATES STRINGS

const firstName = 'Melisa';
const job = 'teacher';
const birthYear = 1999; 
const year = 2037;

const jonas = "I'm" + firstName + ', a ' + (year - birthYear) + ' years old ' + job + ' ! ';
console.log(jonas);

const jonasNew = `I'm ${firstName}, a ${year - birthYear} year old ${job} !`;
console.log(jonasNew);

console.log(`Just a regular string...`);

console.log('String with \n\
multiple \n\
lines');

console.log(`String
multiple
lines`);



// IF - ELSE

const age = 19;
// const isOldEnough = age >= 18;

if(age >= 18) {
    console.log('Sarah can start driving license');
} else {
    const yearsLeft = 18 - age;
    console.log(`Sarah is too young. Wait another ${yearsLeft} years`);
}



const birthYear = 1991;

let century;
if (birthYear <= 2000) {
    let century = 20;
} else {
    let century = 21;
}

// VALUES TYPES type conversion
const inputYear = '1991'
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number('Jhonas'));
console.log(typeof Nan);

console.log(String(23), 23);

// type coercion
console.log('I am' + 23 + ' years old ');
console.log('23' - '10' - 3);
console.log('23' * '2');

let n = '1' + 1; // '11'
n = n - 1; 
console.log(n);

// 5 FALSY VALUES: 0, '', UNDEFINED, NULL, NaN;
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Melisa'));
console.log(Boolean({}));
console.log(Boolean(''));

const money = 0;
if (money) {
    console.log("Don't spend it AbortController");
} else {
    console.log('You should to get a job!')
}

let height;
if (height) {
    console.log('YAY! Height is defined');
} else {
    console.log('Height is UNDEFINED');
}


// equality operators

const age = 18;

if (age === 18) console.log('You just became an adult (strict)');

if (age == 18) console.log('You just became an adult (loose)');

const favourite = Number(prompt("What's your favourite number?"));
console.log(favourite);
console.log(typeof favourite);

if (favourite === 23) { // '23' == 23 , 23===23
    console.log('Cool! 23 is an amazing number');

} else if (favourite === 7) {
    console.log('7 is also a cool number');

} else if (favourite === 9) {
    console.log('9 is also a cool number');
}

else {
    console.log('Number is not 23 or 7 or 9');
}


if(favourite !==23) console.log('Why not 23?')

// Boolean logic

const hasDriversLicense = true; //A
const hasGoodVision = false; //B

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

const shouldDrive = hasDriversLicense && hasGoodVision;

if (shouldDrive) {

    console.log('Sarah is able to drive!');
} else {
    console.log('Someone else should drivre...');
}

const isTired = true; //C
console.log(hasDriversLicense || hasGoodVision || isTired);


//  the switch statement

const day = 'monday';

switch (day) {
    case 'monday': // day === 'monday'
        
        console.log('Plan course structure');
        break;
    case 'tuesday':
        console.log('Preapare theory videos');
        break;
    case 'wednesday':
    case 'thursday':
        console.log('Write code examples');
        break;
    case 'friday':
        console.log('Record videos');
        break;
    case 'saturday':
    case 'sunday':
        console.log('Enjoy the weekend');
        break;
    default:
        console.log('Not a valid day!');
}


if (day === 'monday') {
console.log('Plan course structure');
} else if (day === 'tuesday') {
    console.log('Preapare theory videos');
} else if (day === 'wednesday' || day === 'thursday') {
    console.log('Write code examples');
} else if (day === 'friday') {
console.log('Record videos');
} else if (day === 'saturday' || day === 'sunday') {
    console.log('Enjoy the weekend');
} else {
    console.log('Not a valid day!');
}


// expressions = values

3 + 4
1991
true && false && !false

// statements = sentences 
if (23 > 10) {
    const str = '23 is bigger';
}

// ternary operator
const age = 23;

    
const drink = age >= 18 ? 'wine' : 'water';
console.log(drink);

let drink2;
if (age >= 18) {
    drink2 = 'wine';
} else {

    drink2 = 'water';
}

// js 