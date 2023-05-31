// Functions!

// Is a function an object? Functions are derived from objects

// Methods

// What is a method?

const someFct = function () {
  console.log("pock pock");
};

const someChicken = {
  pockpock: function () {
    console.log("pock pock");
  },
};

// someChicken.pockpock();

const potato = {
  name: "Yukon Gold",
  greet: function () {
    console.log(`Hi, my name is ${potato.name}`);
  },
};

const anotherPotato = {
  name: "Russett",
  greet: function () {
    console.log(`Hi, my name is ${anotherPotato.name}`);
  },
};

// Methods! Because they are in a specific context (which is the object containing the key)
// console.log("Hi, my name is: " + potato.name);
// console.log(`Hi my name is : ${potato.name}`);

potato.greet();
anotherPotato.greet();

const someArray = [1, 2, 3];
someArray.length;
