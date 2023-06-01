const listOfNames = ["Caroline", "Nimisha", "Dylan", "Hans"];

// saySomethingToEveryone is a Higher Order Function
// HOFs is a function that needs another function to work
const saySomethingToEveryone = function (list, action) {
  // list should be an array
  // action should be a function
  for (let i = 0; i < list.length; i++) {
    const name = list[i];
    const index = i;

    action(name, index);
  }
};

const message = function () {
  console.log("There is a person");
};

const sayGoodMorning = function (name) {
  // More reusable because we use a parameter
  console.log(`Good morning ${name}`);
};

const sayStudentPosition = function (name, index) {
  console.log(`The student ${name} is at index ${index} in my list`);
};
const sayStudentPositionWithList = function (name, index, list) {
  console.log(`The student ${name} is at index ${index} in my list ${list}`);
};

// A Callback is a relationship status
// A callback is a function that is given as a parameter
// saySomethingToEveryone(listOfNames, message); // message is THE callback of saySomethingToEveryone
saySomethingToEveryone(listOfNames, sayGoodMorning); // sayGoodMorning is THE callback of saySomethingToEveryone
listOfNames.forEach(sayGoodMorning);
// saySomethingToEveryone(listOfNames, sayStudentPosition); // sayStudentPosition is THE callback of saySomethingToEveryone
// saySomethingToEveryone(listOfNames, sayStudentPositionWithList); // sayStudentPositionWithList is THE callback of saySomethingToEveryone

saySomethingToEveryone(listOfNames, function (name) {
  console.log(`Good morning ${name}`);
});

saySomethingToEveryone(listOfNames, (name) => console.log(`Good morning ${name}`));

const sayGoodMorningArrow = (name) => console.log(`Good morning ${name}`);

const loopOverAListNumbersAndDoSomething = function (list, action) {
  for (let i = 0; i < list.length; i++) {
    const number = list[i];

    action(number);
  }
};

loopOverAListNumbersAndDoSomething([1, 2, 3, 4, 5], (number) => console.log(number * 2));

const createANewArrayWithAModifier = function (list, action) {
  const newArray = [];
  for (let i = 0; i < list.length; i++) {
    const number = list[i];
    const result = action(number);
    newArray.push(result);
  }
  return newArray;
};

const weirdMultiplyAction = (number) => {
  if (number % 2 === 0) {
    return number * 10;
  } else {
    return number * 100;
  }
};

// [1, 2, 3, 4, 5] is the array with no name, for a few functions more
// Anonymous functions, throwaway functions

const result = createANewArrayWithAModifier([1, 2, 3, 4, 5], (number) => number * 5);
// const result = createANewArrayWithAModifier([1, 2, 3, 4, 5], () => 5);
const result2 = [1, 2, 3, 4, 5].map(weirdMultiplyAction);

const checkIfEven = (number) => number % 2 === 0;

const filteredList = [1, 2, 3, 4, 5].filter(checkIfEven);

// const result = createANewArrayWithAModifier([1, 2, 3, 4, 5], function (number) {
//   return number * 2;
// });
console.log(result, result2, filteredList);

// const addTwoNumbers = function (num1, num2) {
//   return num1 + num2;
// };

// addTwoNumbers(1, 2, 3, 4, 5, 6, 7);
