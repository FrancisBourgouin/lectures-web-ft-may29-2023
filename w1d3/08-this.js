// This !
// `this` represent the context of where the function is defined (when working with fct expressions)

const arrowFunction = () => {
  // ...
};

const fctExpression = function () {
  // ...
};

const potatinator = {
  name: "Yukon Gold",
  greet: function () {
    console.log(`Hi, my name is ${this.name}`);
  },
  farewell: function () {
    console.log(`This was ${this.name}, I bid you farewell`);
  },
};

const anotherPotato = {
  name: "Russett",
  greet: function () {
    console.log(`Hi, my name is ${this.name}`);
    console.log(this);
  },
  farewell: function () {
    console.log(`This was ${this.name}, I bid you farewell`);
  },
  rename: function (newName) {
    console.log(`Changing ${this.name} to ${newName}`);
    this.name = newName;
  },
};

anotherPotato.rename("Fingerling");
anotherPotato.greet();

const deepObject = {
  greet: function () {
    console.log(`Hi, my name is ${this.info.name}`);
  },
  info: {
    name: "Pequeno Pollo de la Pampa",
  },
};

deepObject.greet();

userDatabase.getUserById();
userDatabase.getUserByName();
