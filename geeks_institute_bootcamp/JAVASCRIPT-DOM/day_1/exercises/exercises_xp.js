// ===== Exercise 1

const people = ["Greg", "Mary", "Devon", "James"];
console.log(people)
    people.splice(0,1);
    console.log(people);
        people[2]="Jason"
        console.log(people);
            people.push("sam");
            console.log(people);
                let newpeople=people.slice(1,3);
                console.log(newpeople);
                    let last=people[(people.length)-1];
                    console.log(last);
                        for(let i=0 ;i<people.length;i++){
                        console.log(people[i]);
                        if(people[i]=="Devon"){
                            break;
                        }
                        }

// ===== Exercise 2

let colors = ["black", "yellow", "green","blue","red"]; 
let choix = ["1st ", "2nd ", "3rd ","4rd ","5rd "]; 
for(let i=0;i<colors.length;i++){
    console.log("My #"+choix[i]+ "choice is "+colors[i]);
}
// ===== Exercise 3

let x;
while(x!=10){ 
   x= prompt('entrer numbre :',);
}
alert('bravo')

// ===== Exercise 4

const building = {
    numberOfFloors: 4,
    numberOfAptByFloor: {
        firstFloor: 3,
        secondFloor: 4,
        thirdFloor: 9,
        fourthFloor: 2,
    },
    nameOfTenants: ["Sarah", "Dan", "David"],
    numberOfRoomsAndRent:  {
        sarah: [3, 990],
        dan:  [4, 1000],
        david: [1, 500],
    },
}
//2
    console.log(building.numberOfFloors)
//3
    console.log("floors 1: "+building.numberOfAptByFloor.firstFloor+", floors 3: "+building.numberOfAptByFloor.thirdFloor);
//4
    console.log(building.nameOfTenants[0]+", numbre of rooms : "+building.numberOfRoomsAndRent.sarah[0]);
//5
    let sum=building.numberOfRoomsAndRent.sarah[1]+building.numberOfRoomsAndRent.david[1];
    if(sum>building.numberOfRoomsAndRent.dan[1]){
        building.numberOfRoomsAndRent.dan[1]=building.numberOfRoomsAndRent.dan[1]+1200;
        console.log( building.numberOfRoomsAndRent.dan[1]);
    }   
    else
        console.log( building.numberOfRoomsAndRent.dan[1])
    
// ===== Exercise 5

//1
const  family = {
    valeu1: 4,
    valeu2: 8,
    valeu3: 6,
    valeu4: 10,};
//2,3
    for(let x in family){
        console.log(x+" : "+family[x]);
    }
   
// ===== Exercise 6
const details = {
  my: 'name',
  is: 'Rudolf',
  the: 'reindeer'
}
   let sentence = "";

for (let key in details) {
  sentence += key + " " + details[key] + " ";
}

console.log(sentence.trim());

// ===== Exercise 7
const names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];

let secretName = [];

for (let i = 0; i < names.length; i++) {
  secretName.push(names[i][0]);
}

secretName.sort();

console.log(secretName.join(""));




