// Objects are a structural type
// Object can never be falsy

const someObject = {
  string: "",
  0: "bob",
  "🦜": "emoji, please dont!",
};

// Access values using dot notation
someObject.string;

// Access values using square bracket notation
const key = "string";
someObject[key];

// Modify value of an object
// Access first, then reassign

someObject.string = "Some fancy string";
someObject["string"] = "Some fancy string";

// Create a new key/value pair inside an object

someObject.someNewKey = "Gnocchi are good";

// Destrow a key/value pair

delete someObject.someNewKey;

// We can put functions inside objects, and they are called methods

someObject.greet = function () {
  console.log("Hello there!");
};

// Methods can use 'this' to access to object's content (parent)

someObject.betterGreet = function () {
  console.log(`Hello there! I'm ${this.name}`);
};

// We don't assign an object to a variable, we reference it

const newObject = someObject;

// newObject and someObject and both talking about exactly the same structure
