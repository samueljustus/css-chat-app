// const planets = ['The Moon','Venus', 'Earth', 'Mars', 'Jupiter']; //DO NOT TOUCH THIS LINE!

// YOUR CODE GOES BELOW THIS LINE:

// planets.shift('The Moon')
// planets.push('Saturn')
// planets.unshift('Mercury')

// const airplaneSeats = [
//     ['Ruth', 'Anthony', 'Stevie'],
//     ['Amelia', 'Pedro', 'Maya'],
//     ['Xavier', 'Ananya', 'Luis'],
//     ['Luke', null, 'Deniz'],
//     ['Rin', 'Sakura', 'Francisco']
// ];

// // YOUR CODE GOES BELOW THIS LINE:

// airplaneSeats[3].splice(1,1,"Hugo")

// console.log(airplaneSeats);

// const person = {
//     firstName: "samuel",
//     lastName: "justus",
//     favColor: ['red', 'purple', 'blue'],
//     isMarried: false,
//     isWorking: false,

// }

// console.log(person)

// const restaurant = {
//   name: "Ichiran Ramen",
//   address: `${Math.floor(Math.random() * 100) + 1} Johnson Ave`,
//   city: "Brooklyn",
//   state: "NY",
//   zipcode: "11206",
// };

// const fullAddress = `${restaurant.address}, ${restaurant.city}, ${restaurant.state} ${restaurant.zipcode}`;

// console.log(fullAddress);

// const midTerm = {
//   Daniel: 96,
//   joy: 78,
// };
// console.log(midTerm);
// midTerm.Daniel = 100;
// console.log(midTerm);

// midTerm.Abigail = 80;
// console.log(midTerm);

// for (let i = 12; i <= 15; i++) {
//   console.log(i);
// }

// for (let i = 1; i <= 6; i++) {
//   console.log(`${i}:Da ba dee da ba daa`);
// }

// for (let num = 0; num <= 20; num += 2) {
//   console.log(`${num} is an even number`);
// }

// for (let i = 100; i >= 0; i -= 10) {
//   console.log(i);
// }

// const food = ['rice','beans', 'spags', 'bread']

// console.log(food.length)

// for (let i = 0; i < food.length; i++) {
//     console.log(`${i} :${food[i]}`)
// }

// const people = ["Scooby", "Velma", "Daphne", "Shaggy", "Fred"];

// for (i = 0; i < people.length; i++){
//     console.log(people[i].toUpperCase())
// }

// practicing looping through a nested array'

// const seatingChart = [
//     ['abigail', 'samuel', 'lydia', 'seun'],
//     ['jay', 'mama', 'mum', 'crown'],
//     ['daniel', 'lemuel', 'phillip', 'hermione']
// ]

// for (let i = 0; i < seatingChart.length; i++) {
//     let row = seatingChart[i]
//     console.log(row)

//     for(let j = 0; j < row.length; j++) {
//         console.log(row[j])
//     }
// }

// command line to do list

// steps

// initial prompt what would you like to do
// if they type "new" initiate new todo
// prompt user to enter a todo list
// whatever to do add it to the array of list

// command : list (iterate over all to do and list them out in terminal with their index)

// command new : prompts user to enter a todo list

// command quit : to exit the game

// command delete : to remove a specific todo

// let command = prompt("what would you like to do");
// let todo = [];

// if (command === "new") {
//   command = prompt("enter a todo list");
// } else if (command === "quit") {
//   console.log("You exit todo App");
// }

// while ((command = prompt("enter a todo list"))) {
//   todo.push(command);
//   console.log(todo);
// }

// usersInput = prompt('what would you like to do')
// while(usersInput !== 'quit') {
//     userInput = prompt('what would you like to do')
//     console.log(userInput)
// }

// console.log('you quite the app')

// function neutralise(s1, s2) {

//   let result = ''
//   console.log(result)
//   // Here be dragons!
//   for (let i = 0; i < s1.length; i++) {
//     if (s1[i] == s2[i]) {
//       result += s1[i]

//     }else [
//       result += '0'
//     ]
//   }
//   return result
// }

// neutralise('-+-', '++-')

// function repeat(str, num) {
//   let result = ''
//   for (let i = 0; i < num; i++) {
//     result = result + str
//   }
//   console.log(result);

// }

// repeat("samuel", 5)

// Please write a function called lastElement which accepts a single array argument.  T
// he function should return the last element of the array (without removing the element).
// If the array is empty, the function should return null.

// lastElement([3,5,7]) //7
// lastElement([1]) //1
// lastElement([]) //null

// function lastElement(array) {
//   if (array.length === 0) {
//     return null;
//   }
//   return array[array.length - 1]
// }

// console.log(lastElement([1,2,4]))

// function capitalize(str) {
//  return str[0].toUpperCase() + slice(1)
// }

// console.log(capitalize("samuel"))

// function sumArray(arr) {
//   let total = 0
//   for(num of arr) {
//       total = total + num
//     }
//     console.log(total)
//     return total;
// }

// sumArray([1,2,3])

// const days = ['mon', 'tue', 'wed', 'thur', 'fri', 'sat', 'sun']

// function returnDay(num) {
//     if (num < 1 || num > 7) {
//       console.log(null)
//         return null
//     }

//     return days[num-1]

// }

// returnDay(0)

// function countSheeps(arrayOfSheep) {
//   let count = 0;
//   for (let sheep of arrayOfSheep) {
//     if(sheep) {
//       count++
//       console.log(count)
//     }

//   }
//   console.log(count)

// }

// countSheeps([false, false, null, undefined, false, false, true, true, false]);

// const square = {
//   area: function (l) {
//      return l ** 2
//   },

//   perimeter: function (l) {
//       return l * 4;
//   }
// }

// You have a list of 'on' and 'off'.
// Every time you see 'toggle', you flip the light from on → off or off → on.

// python
// Copy
// Edit
// ['on', 'toggle', 'toggle', 'off', 'toggle']
// # ➞ ['on', 'off', 'on', 'on', 'off']

// write a function called toggle
//we have to keep track of the toggle state with a variable. lets call it flick
//if array is equal to toggle we want to change it to the opposite

function flipSwitch(arr) {
  let flip = "on";

  let result = [];

  for (let item of arr) {
    if (item === "toggle") {
      flip = (flip === "on") ? "off" : "on"
    } else {
      flip = item
    }
    result.push(flip)
  }
  return result
}

flipSwitch([["on", "toggle", "toggle", "off", "toggle"]]);
