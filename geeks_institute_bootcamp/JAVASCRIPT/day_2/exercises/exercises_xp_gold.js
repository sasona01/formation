// ===== Exercise 1

[1, 2, 3].map(num => {
  if (typeof num === 'number') return num * 2;
  return;
});


// ===== Exercise 2

[[0, 1], [2, 3]].reduce(
  (acc, cur) => {
    return acc.concat(cur);
  },
  [1, 2],
);



// ===== Exercise 3
//i représente la position de l’élément dans le tableau


// ===== Exercise 4
const array = [[1],[2],[3],[[[4]]],[[[5]]]];
const result = array.map(el => el.flat(2));
console.log(result);
//
const greeting = [
["Hello", "young", "grasshopper!"], 
["you", "are"], 
["learning", "fast!"]
];

const newGreeting = greeting.map(arr => arr.join(" "));
console.log(newGreeting);
//

const trapped = [[[[[[[[[[[[[[[[[[[[[[[[[[3]]]]]]]]]]]]]]]]]]]]]]]]]];
const result = trapped.flat(Infinity);
console.log(result);