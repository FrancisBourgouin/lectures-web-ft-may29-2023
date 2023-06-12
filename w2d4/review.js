// Review!

// Try & Catch

// When there is a problem, we throw an error
// Uncaught exception, uncaught error

const name = "Francis";

try {
  setTimeout(() => {
    name = "Nimisha"; // Throws a TypeError
  }, 1500);
} catch (error) {
  console.log("OH NO :(");
}

// 1. assign & create name var with Francis
// 2. Open a try block
// 3. Execute a setTimeout (succesful)
// 4. skip the catch because no error
// 5. console.log good morning
// 6. run the content of the setTimeout callback

// setTimeout is synchronous
// the callback of setTimeout is asynchronous
setTimeout(() => {
  try {
    name = "Nimisha"; // Throws a TypeError
  } catch (error) {
    console.log("OH NO :(");
  }
}, 1500);
console.log("Good morning!");

setTimeout(() => console.log("Hello!"), 0);
setTimeout(() => console.log("Bye!"), 0);

const someFunction = () => console.log("Hello!");

setTimeout(someFunction, 1000);

// Callbacks
