// Existential questions!

const someFunction = function (num1, num2) {
  return num1 + num2;
};

const result1 = someFunction(1, 2);
const result2 = someFunction;

console.log(result1, result2);

const originalArr = [1, 2, 3];

const arr1 = originalArr;
const arr2 = originalArr.length;
