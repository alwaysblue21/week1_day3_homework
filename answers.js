// ////////////////////////////////
// // Easy Going
// ////////////////////////////////
// /// Write a for loop that will log the numbers 1 through 20.
// // for (let i = 1; i <=20; i++) {
// //     console.log(i);
// // }

// ////////////////////////////////
// // Get Even
// ////////////////////////////////
// ///// Write a for loop that will log only the even numbers in 0 through 200.
// // for (let i = 0; i <= 200; i+= 2) {
// //     console.log(i);
// // }

// ////////////////////////////////
// // Fizz Buzz
// ////////////////////////////////
// // Write a javascript application that logs all numbers from 1 - 100.
// function logNumbers() {
//     for (let i = 1; i <= 100; i++) {
//         console.log(i);
//     }
// }

// logNumbers();

// If a number is divisible by 3 log "Fizz" instead of the number.
// function logNumbers() {
//     for (let i = 1; i <= 100; i++) {
//         if (i % 3 === 0) {
//             console.log("fizz");
//         } else {
//             console.log(i);
//         }
//     }
// }

// logNumbers();

// If a number is divisible by 5 log "Buzz" instead of the number.
// function logNumbers() {
//     for (let i = 1; i <= 100; i++) {
//         if (i % 5 === 0) {
//             console.log("Buzz");
//         } else {
//             console.log(i);
//         }
//     }
// }

// logNumbers();

// If a number is divisible by 3 and 5 log "FizzBuzz" instead of the number.
// function logNumbers() {
//     for (let i = 1; i <= 100; i++) {
//         if (i % 3 === 0 && i % 5 === 0) {
//             console.log("FizzBuzz")
//         } else if (i % 3 === 0) {
//             console.log("Fizz");
//         } else if (i % 5 === 0) {
//             console.log("Buzz");
//         } else {
//             console.log(i);
//         }
//     }
// }

// logNumbers();

////////////////////////////////
// Wild Wild Life
////////////////////////////////
// const wolfy = ["Wolfy", "wolf", 16, "Yukon Territory"]
// const sharky = ["Sharky", "shark", 20, "Left Coast"]
// const plantee = ["Plantee", "plant",  5000 , "Mordor"]
// const porgee = ["Porgee", "Porg", 186, "Ahch-To"]
// const dart = ["D'Art" , "Demogorgan Dog", 2, "Upside Down"]

// Plantee just had her birthday; change Plantee's array to reflect her being a year older.
// plantee[2] = plantee[2] + 1
// console.log(plantee);

// Change Wolfy's hometown from "Yukon Territory" to "Gotham City".
// wolfy[3] = "Gotham City"
// console.log(wolfy);

// Give D'Art a second hometown by adding "Hawkins"
// dart.unshift("Hawkins")
// console.log(dart);

// Porgee decides that Wolfy can't be named "Wolfy" anymore. Remove "Wolfy" from the wolfy array and replace it with "Gameboy".
// wolfy.shift();
// wolfy.unshift("Gameboy");
// console.log(wolfy);



////////////////////////////////
// Yell at the Ninja Turtles
////////////////////////////////
// Create an array with the members of the ninja turtles (Donatello, Leonardo, Raphael, Michaelangelo)
// const ninjaTurtles = ["Donatello", "Leonardo", "Raphael", "Michelangelo"];

// // // Use a for of loop (not a typo - try it out! Try a for of loop) to call toUpperCase() on each of them and print out the result.
// for (const turtle of ninjaTurtles) {
//     console.log(turtle.toUpperCase());
// }

// DONATELLO
// LEONARDO
// RAPHAEL
// MICHELANGELO


////////////////////////////////
// Methods, Revisited
////////////////////////////////
// const favMovies = ['Jaws', 'The Fellowship of the Ring', 'Howl\'s Moving Castle', 'Django Unchained', 'Cloud Atlas', 'The Usual Suspects',
//  'Toy Story', 'Conan the Barbarian', 'Titanic', 'Harry Potter', 'Fried Green Tomatoes', 'Volver', 'Oculus', 'Seven', 'Black Panther', 'Harry Potter', 'Imitation of Life', 'Snatch', 'Fast and Furious'];

// // Console.log: the index of Titanic
// console.log(favMovies[8]);

// // use the .sort method Thought question: what did this do to the array? Did it permanently alter it?
// favMovies.sort();
// console.log(favMovies);
// // it sorted index in alphabetical order. 
// // yes

// // Use the method pop
// favMovies.pop();
// console.log(favMovies);

// // push "Guardians of the Galaxy"
// favMovies.push("Guardians of the Galaxy");
// console.log(favMovies);

// // Reverse the array
// favMovies.reverse();
// console.log(favMovies);

// // Use the shift method
// favMovies.shift();
// console.log(favMovies);

// // unshift - what does it return?
// // adds the specified elements to the beginning of an array

// // splice "Django Unchained" and add "Avatar" (try finding the index of "Django Unchained", instead of counting it yourself) Thought question: did this permanently alter our array?
// console.log(favMovies.indexOf("Django Unchained")); // 3
// favMovies.splice(3, 4, "Avator")
// console.log(favMovies);
// // yes

// // slice the last half of the array (challenge yourself and try to programatically determine the
// //  middle of the array rather than counting it and hard coding it) - Thought question: did this permanently alter our array?
// console.log(favMovies.length);
// console.log(favMovies.slice(9, 19));


// // store the value of your slice in a variable, console.log it - Thought question: what is going on here?
// const newFavMovie = favMovies.slice(9,19);
// console.log(newFavMovie);
// console.log(favMovies);
// // new array in a new variable called newFavMovie, from index 9-19

// // console.log your final results

// // After running the above tasks, console.log the index of "Fast and Furious" -We removed it from the array, what value do we get when we look for the index of something that is not in the array?
// console.log(favMovies[18]);
// undefined
// // Thought question: that we declared the variable favMovies with const, and yet, we were allowed to change the array. Weird? Should we have used let?
// we were manipulating items in the array not redeclaring the const variable

////////////////////////////////
// Where is Waldo
////////////////////////////////


////////////////////////////////
//  Excited Kitten
////////////////////////////////


////////////////////////////////
//  Find the Median
////////////////////////////////


