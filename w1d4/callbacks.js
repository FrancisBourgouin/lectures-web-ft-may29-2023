// Expect num1 and num2 to be numbers
const addTwoNumbers = function (num1, num2) {
  return num1 + num2;
};

addTwoNumbers("bob", [1, 2]); // error!

const showAllTheValuesOfAList = function (list) {
  for (const value of list) {
    console.log(value);
  }
};

const sayGoodMorning = function (name) {
  // More reusable because we use a parameter
  console.log(`Good morning ${name}`);
};

const potato = [1, 2, 3];
// showAllTheValuesOfAList(potato); // 1 2 3
// showAllTheValuesOfAList({ a: 1 }); // error!

const fancyMessage = function (action) {
  console.log("🔥🔥🔥🔥🔥🔥🔥🔥");
  action();
  console.log("🔥🔥🔥🔥🔥🔥🔥🔥");
};

// const result = sayGoodMorning("Jielong")

const specificGoodMorning = function () {
  sayGoodMorning("Jielong");
};
// specificGoodMorning();

fancyMessage(specificGoodMorning); // action is sayGoodMorning (fct)

// fancyMessage(sayGoodMorning("Jielong")); // action is the result of sayGoodMorning (undefined)

// const result = addTwoNumbers(5, 6);
// console.log(result);

const doSomethingWithASpecificName = function (action, name) {
  action(name);
};
