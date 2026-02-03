// ===== Exercise 1

let persons = [
  { fullName: "Amine", mass: 80, height: 1.8 },
  { fullName: "Sara", mass: 65, height: 1.65 }
];

for (let i = 0; i < persons.length; i++) {
  persons[i].bmi = persons[i].mass / (persons[i].height * persons[i].height);
}

// function to compare BMI
const compareBMI = function (persons) {
  if (persons[0].bmi > persons[1].bmi) {
    return persons[0];
  } else {
    return persons[1];
  }
};
console.log(compareBMI(persons));

// ===== Exercise 2
let gradesList = [
  { fullName: "Amine", note: [20,50,300], },
  { fullName: "Sara",note: [30,50,10], },
];


    function findAvg(gradesList) {
    for (let i = 0; i < gradesList.length; i++) {
        let sum = 0;

        for (let j = 0; j < gradesList[i].note.length; j++) {
        sum += gradesList[i].note[j];
        }

        gradesList[i].avg = sum / gradesList[i].note.length;
    }

    return gradesList;
    }
  function type(gradesList) {
  for (let i = 0; i < gradesList.length; i++) {
    if (gradesList[i].avg >= 65) {
      console.log(gradesList[i].fullName + " : passed");
    } else {
      console.log(gradesList[i].fullName + " : failed and must repeat the course.");
    }
  }
}

// Call the functions
findAvg(gradesList);
type(gradesList);
    

 
// ===== Exercise 3

// ===== Exercise 4

// ===== Exercise ...