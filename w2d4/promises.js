// Promises?

// An agreement
// An intention of doing something
// In the future

// We will end the lecture on time (Promise)
// We do end the lecture on time (Success)
// We don't end the lecture on time (Failure)
// We always have a conclusion (Finally)

// We will grind beans
// Beans ground succesfully. (Success)
// Oh no, grinder exploded. (Failure)

// const date = new Date(); // Class
// const error = new Error(); // Class
// const promise = new Promise(); // Class

// Class => Blueprint

// const arr = [1,2,3]
// const arr2 = new Array(1,2,3)

const fiftyPercent = () => Math.random() > 0.5;

const grindCoffeeBeansPromise = () => {
  console.log("Grinding beans...");
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (fiftyPercent()) {
        resolve("Beans ground succesfully.");
      } else {
        reject("Oh no, grinder exploded.");
      }
    }, 1000);
  });
};

const boilWaterPromise = () => {
  console.log("Water is starting to boil");
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (fiftyPercent()) {
        resolve("Water boils with passion");
      } else {
        reject("Oh no water's all over the place");
      }
    }, 1000);
  });
};

const pourWaterPromise = () => {
  console.log("Bloup bloup bloup pouring...");
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (fiftyPercent()) {
        resolve("Water is draining properly");
      } else {
        reject("OH NO IT'S CLOGGED");
      }
    }, 1000);
  });
};
const enjoyCoffeePromise = () => {
  console.log("Smells great!");
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (fiftyPercent()) {
        resolve("Miam miam miam");
      } else {
        reject("OUCH IT BURNS");
      }
    }, 1000);
  });
};

// const result = grindCoffeeBeansPromise()
// result.then()
// inside result there is a promise

const successLog = (message) => console.log("🔥🔥🔥 " + message);
const failLog = (error) => console.log("☣️☣️☣️ " + error);

// grindCoffeeBeansPromise()
//   .then((message) => successLog(message))
//   .then(() => boilWaterPromise())
//   .then((message) => successLog(message))
//   .catch((error) => failLog(error));

grindCoffeeBeansPromise()
  .then(successLog)
  // .catch((error) => {
  //   failLog(error);
  //   return grindCoffeeBeansPromise();
  // })
  .then(boilWaterPromise)
  .then(successLog)
  .then(pourWaterPromise)
  .then(successLog)
  .then(enjoyCoffeePromise)
  .then(successLog)
  .catch(failLog)
  .finally(() => console.log("Guess it's time for another coffee"));

// const array = [1, 2, 3];
// array.forEach(() => {})

// Async / Await <- Syntax sugar for Promises
