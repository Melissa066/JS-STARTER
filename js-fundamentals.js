// // strict mode

// 'use strict';

// let hasDriversLicense = false;
// const passTest = true;

// if (passTest) hasDriversLicense = true;

// // functions

// function logger() {
//     console.log('My name is Melisa');
// }
// // calling / running / invoking function 
// logger();
// logger();
// logger();

// // function fruitProcessor(apples, oranges) {
// //     console.log(apples, oranges);
// //     const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
// //     return juice;
// // }

// // const appleJuice = fruitProcessor(5, 0);
// // console.log(appleJuice);
// // // or
// // console.log(fruitProcessor(5, 0));



// // const appleOrangeJuice = fruitProcessor(2, 4);
// // console.log(appleOrangeJuice);

// // const num = Number('23');


// // function declaration


// function calcAge1(birthYear) {
//     const age = 2037 - birthYear;
//     return age;
//     // or return 2037 - birthYear;

// }

// const age1 = calcAge1(1999);
// console.log(age1);


// // function expression

// const calcAge2 = function (birthYear) {
//     return 2037 - birthYear;
// }

// const age2 = calcAge2(1991);

// console.log(age1, age2);

// // arrow function

// const calcAge3 = birthYear => 2037 - birthYear;
// const agre3 = calcAge3(1991);
// console.log(age3);


// // const yearsUntilRetirement = (birthYear, firstName) => {
// //     const age = 2037 - birthYear;
// //     const retirement = 65 - age;
// //     // return retirement;
// //     return `${firstName} retires in ${retirement} years`;
// // }

// console.log(yearsUntilRetirement(1991, 'Melisa'));
// console.log(yearsUntilRetirement(1998, 'Ionela'));

// // functions calling other functions


// function cutFruitPieces(fruit) {
//     return fruit * 4;
// }
// function fruitProcessor(apples, oranges) {
//     const applePieces = cutFruitPieces(apples);
//     const orangePieces = cutFruitPieces(oranges);
//     console.log(apples, oranges);
//     const juice = `Juice with ${applePieces} piece of apple and ${orangePieces} pieces of orange.`;
//     return juice;
// }

// fruitProcessor(2, 3);

// // reccap

// const calcAge = function (birthYear) {
//     return 2037 - birthYear;
// }

// const yearsUntilRetirement = function (birthYear, firstName) {
//     const age = calcAge(birthYear);
//     const retirement = 65 - age;

//     if (retirement > 0) {
//         console.log(`${firstName} retires in ${retirement} years`);
//         return retirement;
//     } else {
//         console.log(`${firstName}has already retired`);
//         return -1;
//     }
     
//     // return `${firstName} retires in ${retirement} years`;
// }

// console.log(yearsUntilRetirement(1991, 'Melisa'));
// console.log(yearsUntilRetirement(1950, 'Mike'));

// // arrays

// // const friend1 = 'Michael';
// // const friend2 = 'Steven';
// // const friend3 = 'Peter';


// // const friends = ['Michael', 'Steven', 'Peter'];
// // console.log(friends);

// // or

// // const years = new Array(1991, 1984, 2008, 2020);


// // console.log(friends[0]);
// // console.log(friends[2]);

// // console.log(firends.length);
// // console.log(friends[friends.lenght - 1]);

// // firends[2] = 'Jay';
// // console.log(firends);

// // const firstName = 'Melisa';
// // const melisa = ['firstName', 'Ionela', 2037 - 1991, 'teacher', friends];
// // console.log(melisa);
// // console.log(melisa.length);

// // exercise

// // const calcAge5 = function (birthYear) {
// //     return 2037 - birthYear;
// // }

// // const years1 = [1991, 1967, 2002, 2010, 2018];

// // console.log(calcAge(years1));
// // const age10 = calcAge(years[0]);
// // const age11 = calcAge(years[1]);
// // const age12 = calcAge(years[years.length - 1]);
// // console.log(age10, age11, age12);

// // const ages = [calcAge(years[0]), calcAge(years[0]), calcAge(years[years.length - 1])];
// // console.log(ages);


// // arrays methods
// // add elements
// const friends = ['Michael', 'Steven', 'Peter'];
// const newLength = friends.push('Jay');
// console.log(friends);
// console.log(newLength);


// friends.unshift('John');
// console.log(friends);

// // remove elements

// const popped = friends.pop(); //las element
// console.log(popped);
// console.log(friends);


// friends.shift(); //first
// console.log(friends);

// console.log(friends.indexOf('Steven'));

// console.log(friends.includes('Steven'));



// if (friends.includes('Peter')) {
//     console.log('You have a friend called Peter');
// }


for (let key in dog) {
    console.log(key + dog[key]);
}