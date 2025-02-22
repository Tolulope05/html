/**
* Loops allow us to repeat codes
* Types: for, while, for...in, for...of, do...while
*/

//Print a number from 1 to 10
/** for(
 *       [Initial expression]; 
 *       [condition];
 *       [incrementalExpression]
 * )
 */

// for (let i = 1; i <= 10; i++) {
//     console.log(i); //Anything you put in here will be dispLAYED 10 TIMES
// };


// Print out even numbers from 0 to 20
// for (let i = 0; i <= 20; i += 2) {
//     console.log(i)
// }

// Print out 100 to 0
// for (let i = 100; i >= 0; i -= 10) {
//     console.log(i)
// } //We can use  *=, /= too

// Always pay attention to how is this loop going to stop
// DO NOT RUN THIS LOOP
// INFINITE LOOP!! BAD!!
// ==================================
// ==================================
// for (let i = 1; i >= 0; i += 1)
// ==================================
// ==================================
// DO NOT RUN THIS LOOP
// INFINITE LOOP!! BAD!!

// Looping over array1
const animals = ['dog', 'cat', 'pig', 'bird', 'duck', 'bow'];


// another way to write this for(let i =0; i <= animals.length)

// for (let i = 0; i < animals.length; i += 1) {
//     console.log(i, animals[i]);
// } //0 'dog' 1 'cat' 2 'pig' 3 'bird' 4 'duck' 5 'bow

// for (let i = animals.length - 1; i >= 0; i--) {
//     console.log(animals[i]);
// } //From back

// ==================================
// Nesting for loops..
// ==================================
let str = 'LOL';
// for (let i = 0; i <= 4; i++) {
//     console.log('Outer:', i);
//     for (let j = 0; j < str.length; j++) {
//         console.log('   Inner:', str[j]);
//     }
// }
//        or 

// for (let i = 0; i <= 4; i++) {
//     console.log('Outer:', i);
//     for (let j = 0; j < str.length; j++) {
//         console.log(`   Inner: ${j}`);
//     }
// }

const seatingChart = [
    ['Krsiten', 'Erick', 'Namita'],
    ['Geofry', 'Juanita', 'Antonio', 'Kevin'],
    ['Yuma', 'Sakura', 'Jack']
]

// Print out every student name in Seating chart


// ==================================
// MINE
// ==================================
// for (let i = 0; i <= seatingChart.length - 1; i++) {
//     // console.log(`${i} There are ${seatingChart.length} seats which includes `);
//     for (let j = 0; j <= seatingChart[i].length - 1; j++) {
//         console.log(`    ${seatingChart[i][j]}`);
//     }
// }

// ==================================
// TUTORS
// ==================================
// for (let i = 0; i < seatingChart.length; i++) {
//     const row = seatingChart[i];
//     console.log(`ROW #${i + 1}`)
//     for (let j = 0; j < row.length; j++) {
//         console.log(row[j])
//     }
// }

// ==================================
// WHILE LOOP & FOR LOOP
// ==================================
let num = 0;
// while (num < 10) {
//     num++;
//     console.log(num);
// } // Check the logic.

// for (let i = 1; i <= 10; i++) {
//     console.log(i);
// } // The for mate

// while(!gameOver){
//     //player 1 move
//     //player 2 move
// }  


// ==================================
// WHILE LOOP for password
// ==================================
const secret = 'BabyHippo';
// let guess = prompt('Enter your password');
// while (secret !== guess) {
//     guess = prompt('Enter your password');
//     {
//         console.log('Wrong password');
//     }
// }
// console.log('Congrats');

// ==================================
// THE BREAK KEYWORD
// ==================================
let targetNum = Math.floor(Math.random() * 10);
let guess = Math.floor(Math.random() * 10);

// while (true) {
//     guess = Math.floor(Math.random() * 10);
//     if (guess === targetNum) {
//         console.log(`CORRECT! Guessed: ${guess} & target was: ${targetNum}`);
//         break;
//     }
//     else {
//         console.log(`Guessed ${guess}...incorrect!`);
//     }
// }

// let input = prompt('Hey, Say something!!');

// while (true) {
//     input = prompt(input);
//     if (input.toLowerCase() === 'stop copying me') {
//         break;
//     }
// }
// console.log('Ok you got me')

// for (let i = 1; i <= 1000; i++) {
//     console.log(i);
//     if (i === 100) {
//         break;
//     }
// }

// ==================================
// Build a Guessing Game
// ==================================
/**
 * Guide you through the process of guessing correct number
 * press q to quit
 */
// 
// let maximum = parseInt(prompt('Welcome! Enter your max number:'));
// while (!maximum) {
//     maximum = parseInt(prompt('Enter a maximum Number'));
// }
// let maxNum = Math.floor(Math.random() * maximum) + 1;
// console.log(maximum);
// 
// let guessNum = parseInt(prompt('Enter your first guess!!'));
// let attempts = 1;
// 
// while (parseInt(guessNum) !== targetNum) {
//     if (guess === 'q') break;
//     attempts += 1
//     if (guessNum > targetNum) {
//         guessNum = (prompt('Too high! Enter a new guess:'));
//     } else {
//         guessNum = (prompt('Too low! Enter a new guess:'));
//     }
// }
// if (guess === 'q') {
//     console.log('OK, You quit! ')
// } else {
//     console.log('Congrats YOU WIN ')
//     console.log(`You got it! It took you ${attempts} guesses`)
// } //End of guessing Game

// ==================================
// For ...OF
// A nice new and easy way of iterating over arrays
// A regular improvement over the normal i
// ==================================

const subreddits = ['cringe', 'books', 'chickens', 'funny', 'pics', 'soccers', 'biro']

for (let i = 0; i < subreddits.length; i++) {
    // console.log(`Visit reddit.com/r/${subreddits[i]}`);
}
for (let sub of subreddits) {
    // console.log(`Visit reddit.com/r/${sub}`);
}

// Iterating for of seatingChart
// ==================================

// for (let row of seatingChart) {
//     for (let student of row) {
//         console.log(student);
//     }
// }

// Iterating for for an array
// ==================================

// for (let char of 'Hello world') {
//     console.log(char);
// } // Each character is being interated over

// Iterating over objects
// ==================================

let textScores = {
    kim: 59,
    shawn: 89,
    micheal: 71,
    dwaynw: 77,
    nadia: 83,
    diedre: 81,
    vonnie: 60,
    keenan: 74,
    bwayne: 89
}

// for (let person of textScores) {
//     console.log(person);
// } //testscores are not iterable

// for (let person in textScores) {
//     // console.log(person);
//     console.log(`${person} scored ${textScores[person]}`);
// } //testscores are iiterable with for....in

// OTHER SPECIAL OBJECTS METHODS
// ==================================

// Object.keys(textScores)
// //(9) ['kim', 'shawn', 'micheal', 'dwaynw', 'nadia', 'diedre', 'vonnie', 'keenan', 'bwayne']
// Object.values(textScores)
// //(9) [59, 89, 71, 77, 83, 81, 60, 74, 89]
// Object.entries(textScores)
// //(9) [Array(2), Array(2), Array(2), Array(2), Array(2), Array(2), Array(2), Array(2), Array(2)]

// To sum up all the values and average
// ==================================
let total = 0;
let vals = Object.values(textScores);
for (let score of Object.values(textScores)) {
    total += score;
} // console.log(total) gives 638
console.log(total / vals.length) // Gives average of the students

