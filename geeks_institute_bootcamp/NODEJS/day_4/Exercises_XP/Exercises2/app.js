import { people } from './data.js';

function averageAge(arr) {
  const total = arr.reduce((sum, person) => sum + person.age, 0);
  console.log("Average age:", total / arr.length);
}

averageAge(people);