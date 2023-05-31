// Passing value vs Reference

let someValue = 5; // Assign 5 to the someValue variable
let yetAnotherValue = 5;
let anotherValue = someValue; // Assign the contents of someValue (5) to anotherValue

console.log(someValue === yetAnotherValue); // true

console.log(anotherValue); // 5
someValue = 10;
console.log(anotherValue); // 5

const someObject = { a: 1 };
const yetAnotherObject = { a: 1 };
const anotherObject = someObject;

console.log(someObject === yetAnotherObject); // true or false

console.log(anotherObject); // {a:1}
someObject.a = 10;
console.log(anotherObject); // {a:10}

// function hoistedFunction()
// const someFunction = function()

const mug = {
  material: "plastic",
  color: "black",
};

const anotherMug = {};
anotherMug.color = mug.color;
anotherMug.material = mug.material;
anotherMug.potato = "🥔";

anotherMug === mug; // false

mug.material === anotherMug.material;
mug.color === anotherMug.color;

for (const key in mug) {
  mug[key] === anotherMug[key];
}
