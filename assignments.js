// // let country = "Romania"
// // console.log("Romania")

// // let continent = "EU"
// // console.log("EU")
    
// // let population = "8"
// // console.log(8)



// // const massMark = 78;
// // const heightMark = 1.69;
// // const massJohn = 92;
// // const heightJohn = 1.95;

// // const BMIMark = massMark / heightMark ** 2;
// // const BMIJohn = massJohn / (heightJohn * heightJohn);
// // const markHigherBMI = BMIMark > BMIJohn;
// // console.log(BMIMark, BMIJohn, markHigherBMI);


// const massMark = 78;
// const heightMark = 1.69;
// const massJohn = 92;
// const heightJohn = 1.95;

// const BMIMark = massMark / heightMark ** 2;
// const BMIJohn = massJohn / (heightJohn * heightJohn);
// console.log(BMIMark, BMIJohn);


// if (BMIMark > BMIJohn) {
//      console.log(`Mark's BMI (${BMIMark}) is higher than John's! (${BMIJohn}) `)
// } else {
//      console.log(`John's BMI (${BMIJohn}) is higher than Mark's! (${BMIMark})`)
//  }





// // const scoreDolphins = (96 + 108 + 89) / 3;
// // const scoreKoalas = (88 + 91 + 110) / 3;
// // console.log(scoreDolphins, scoreKoalas);

// // if (scoreDolphins > scoreKoalas) {
// //      console.log('Dolphins win the trophy');
// // } else if (scoreKoalas > scoreDolphins) {
// //      console.log('Koalas win the throphy');
// // }
// //      else if (scoreDolphins === scoreKoalas) {
// //           console.log('Both win the throphy');
// //      }

// // Bonus 1
// // const scoreDolphins = (97 + 112 + 101) / 3;
// // const scoreKoalas = (109 + 95 + 123) / 3;
// // console.log(scoreDolphins, scoreKoalas);

// // if (scoreDolphins > scoreKoalas && scoreDolphins >= 100) {
// //      console.log('Dolphins win the trophy');
// // } else if (scoreKoalas > scoreDolphins && scoreKoalas >= 100) {
// //      console.log('Koalas win the throphy');
// // }
// //      else if (scoreDolphins === scoreKoalas) {
// //           console.log('Both win the throphy');
// // }
     



// // const bill = 275;
  
// // const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;
// // console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);

// const calcAverage = (a, b, c) => (a + b + c) / 3;
// console.log(calcAverage(3, 4, 5));

// let scoreDolphins = calcAverage(44, 23, 71);
// let scoreKoalas = calcAverage(65, 54, 49);
// console.log(scoreDolphins, scoreKoalas);


// const checkWinner = function(avgDolphins, avgKoalas) {
//      if (avgDolphins >= 2 * avgKoalas) {
//      console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
     
//      } else if (avgKoalas >= 2 * avgDolphins) {
//            console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
//      } else {
//           console.log('No team wins...');
//      }

// }

// checkWinner(scoreDolphins, scoreKoalas);

// // Test 2

//  scoreDolphins = calcAverage(85, 54, 41);
// scoreKoalas = calcAverage(23, 34, 27);
// console.log(scoreDolphins, scoreKoalas);
// checkWinner(scoreDolphins, scoreKoalas);


// const calcTip = function(bill1) {
//      return bill1 >= 50 && bill1 <= 300 ? bill1 * 0.15 : bill1 * 0.2;
// }

// const bills = [125, 55, 44];
// const tip = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
// console.log(bills, tip, totals);


// const totals = [bills[0] + tip[0], bills[1] + tip[1]];

// // const calcTip = bill1 >= 50 && bill1 <= 300 ? bill1 * 0.15 : bill1 * 0.2;



function processCall(recipient, onAvailable, onNotAvailable) {
  // Simulăm disponibilitatea unui abonat cu un număr aleatoriu
  const isRecipientAvailable = Math.random() > 0.5;

  if (!isRecipientAvailable) {
    onNotAvailable(recipient);
    return;
  }

  onAvailable(recipient);
}

function takeCall(name) {
  console.log(`Vă conectăm cu utilizatorul ${name}, va rugăm să așteptați...`);
  // Logica de conectare a apelurilor între 2 utilizatori
}

function activateAnsweringMachine(name) {
  console.log(`Abonatul ${recipient} nu este disponibil, va rugăm să lăsați un mesaj.`);
  // Logica de activare a robotului telefonic
}

function leaveHoloMessage(name) {
  console.log(`Abonatul ${name} nu este disponibil, înregistrați o hologramă.`);
  // Logica de înregistrare a unei holograme
}

processCall("Andrei", takeCall, activateAnsweringMachine);
processCall("Vasile", takeCall, leaveHoloMessage);