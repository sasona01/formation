//Exercise 1
//I am John Doe from Vancouver, Canada. Latitude(49.2827), Longitude(-123.1207)

//Exercise 2

function displayStudentInfo({first, last}) {
  return `Your full name is ${first} ${last}`;
}

console.log(displayStudentInfo({first: 'Elie', last:'Schoppik'}));

//Exercise 3

const users = { user1: 18273, user2: 92833, user3: 90315 }

const usersArray = Object.entries(users);
console.log(usersArray);
const doubledUsers = Object.entries(users).map(
  ([key, value]) => [key, value * 2]
);

console.log(doubledUsers);

//Exercise 4

//object

//Exercise 5
// 2

//Exercise 6

/* 1
[2] === [2]   false
{} === {}      false*/

class Animal {
  constructor(name, type, color) {
    this.name = name;
    this.type = type;
    this.color = color;
  }
}
class Mammal extends Animal {
  sound(animalSound) {
    return `${animalSound} I'm a ${this.type}, named ${this.name} and I'm ${this.color}`;
  }
}
const farmerCow = new Mammal("Lily", "cow", "brown and white");

console.log(farmerCow.sound("Moooo"));

