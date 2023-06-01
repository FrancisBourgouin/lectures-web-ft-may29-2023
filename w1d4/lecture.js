// Why we use functions
// Why do we want to use functions ?
// Process & evaluate info
// Scalability
// Code reuse (DRY)
// Maintain proper scoping
// Readability
// Simplicity

const sayGoodMorningToRishad = function () {
  console.log("Good morning Rishad");
};

// sayGoodMorningToRishad(); // Too specific

const listOfNames = ["Caroline", "Nimisha", "Dylan", "Hans"];

const sayGoodMorning = function (name) {
  // More reusable because we use a parameter
  console.log(`Good morning ${name}`);
};
const sayGoodMorningToEveryone = function (list) {
  for (const name of list) {
    sayGoodMorning(name);
  }
};
const sayBye = function (name) {
  console.log(`Goodbye ${name}`);
};
const sayByeToEveryone = function (list) {
  for (const name of list) {
    sayBye(name);
  }
};

// sayGoodMorning("Phat");
// sayGoodMorning("Christian");
// sayGoodMorningToEveryone(listOfNames);

const saySomething = function (name, message) {
  console.log(`${message} ${name}`);
};

const saySomethingToEveryone = function (list, message) {
  for (const name of list) {
    saySomething(name, message);
  }
};

const doSomethingToEveryone = function (list, somethingThatIWantToDo) {
  for (const name of list) {
    somethingThatIWantToDo(name);
  }
};

doSomethingToEveryone(listOfNames, sayGoodMorning);
doSomethingToEveryone(listOfNames, sayBye);
