// Data types (Primitives)

// Boolean => false
// Number => 0
// String => ""
// BigInt => 0
// Null => null
// Undefined => undefined

// Float => Not in Javascript
// Double => Not in Javascript

// Structural Types

// Arrays => Never be falsy
// Objects => Never be falsy

const someArray = [1, 2, 3, 4, 5];
const someObject = { name: "Bob", age: 42 };

const something = ["porcelain", 300, "grey", "coffee"];

const someMug = {
  material: "porcelain",
  capacity: 300,
  color: "grey",
  contents: "coffee",
};

const anotherMug = {
  material: "paper",
  capacity: 300,
  color: "green",
  contents: "coffee",
};

const listOfMugs = [someMug, anotherMug];
// When to use an object?
// Rule of thumb: If the info is about a specific subject, then they should be organized in an object

// When to use an array?
// Rule of thumb: If the elements are independent, they can be put in an array
