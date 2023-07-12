const someArray = ["name", "email", "password", "description", "age"];

const someObject = {
  name: "",
  email: "",
  password: "",
};

const initial = {};
const outputObj = someArray.reduce((acc, val) => {
  acc[val] = "";
  return acc;
}, initial);

console.log(outputObj);

someArray.map((val) => val + "🥔").filter((val) => val.length > 5);

someArray.reduce((accumulator, current) => {
  if (current.length > 4) {
    accumulator.push(current + "🥔");
  }
  return accumulator;
}, []);

someArray.reduce((accumulator, current) => {
  if (current.length > 4) {
    accumulator[current] = current + "🥔";
  }
  return accumulator;
}, {});
