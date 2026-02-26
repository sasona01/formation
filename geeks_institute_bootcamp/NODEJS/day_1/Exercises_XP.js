// Exercise 1:

function compareToTen(num) {
  return new Promise((resolve, reject) => {
    if (num <= 10) {
      resolve(`${num} is less than or equal to 10`);
    } else {
      reject(`${num} is greater than 10`);
    }
  });
}


compareToTen(15)
  .then(result => console.log(result))
  .catch(error => console.log(error));

compareToTen(8)
  .then(result => console.log(result))
  .catch(error => console.log(error));
  
 // Exercise 2:
const promise4sec = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("success");
  }, 4000);
});


promise4sec.then(result => console.log(result));

// Exercise 3:

const promiseResolve = Promise.resolve(3);

const promiseReject = Promise.reject("Boo!");

// Tests
promiseResolve.then(result => console.log(result));

promiseReject.catch(error => console.log(error));

