// ===== Exercise 1
/*
let numbers = [123, 8409, 100053, 333333333, 7]
for(let i=0;i<numbers.length;i++){
    let x=numbers[i]%3;
    if(x!=0)
       { console.log('false' );}
    else
          {console.log('true' );}
    
}*/
// ===== Exercise 2
/*
let x= prompt('entrer numbre :',);
let guestList = {
  randy: "Germany",
  karla: "France",
  wendy: "Japan",
  norman: "England",
  sam: "Argentina"
}   

if (x in guestList) {
  alert("Hi! I'm " + x + ", and I'm from " + guestList[x] + ".");
} else {
  alert("Hi! I'm a guest.");
}*/
// ===== Exercise 3
let age = [20,5,12,43,98,55];
let x =0;
let y =0;
    for (i in age){
    x=x+age[i]
   
    }
        console.log("the sum of all the numbers in the age array is: "+x);
    for (i in age){
    if(age[i]>=y){ 
        y=age[i];
    }}
        console.log("the highest age in the array is: " +y);


// ===== Exercise 4

// ===== Exercise ...