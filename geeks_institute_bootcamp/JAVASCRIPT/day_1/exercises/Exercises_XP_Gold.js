//Exercise 1:
const landscape = () => {
  let result = "";

  const flat = (x) => {
    for (let i = 0; i < x; i++) {
      result += "_";
    }
  };

  const mountain = (x) => {
    result += "/";
    for (let i = 0; i < x; i++) {
      result += "'";
    }
    result += "\\";
  };
  flat(4)+
  mountain(4)+
  flat(4)

  return result;
};

console.log (landscape());

//Exercise 2:
/*13*/

//Exercise 3:
/*31*/

//Exercise 4:
/*17*/

//Exercise 5:
/*16*/

