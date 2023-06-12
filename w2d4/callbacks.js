const fiftyPercent = () => Math.random() > 0.5;

const grindCoffeeBeans = (nextStepCB) => {
  setTimeout(() => {
    if (fiftyPercent()) {
      nextStepCB(null, "Beans ground succesfully.");
    } else {
      nextStepCB("Oh no, grinder exploded.", null);
    }
  }, 1000);
};

const grindCoffeeBeansPrototype = (successCB, failCB) => {
  setTimeout(() => {
    if (fiftyPercent()) {
      successCB("Beans ground succesfully.");
    } else {
      failCB("Oh no, grinder exploded.");
    }
  }, 1000);
};

const boilWaterPrototype = (successCB, failCB) => {
  setTimeout(() => {
    if (fiftyPercent()) {
      successCB("Water boils with passion");
    } else {
      failCB("Oh no water's all over the place");
    }
  }, 1000);
};

const boilWater = (nextStepCB) => {
  setTimeout(() => {
    if (fiftyPercent()) {
      nextStepCB(null, "Water boils with passion");
    } else {
      nextStepCB("Oh no water's all over the place", null);
    }
  }, 1000);
};
const pourWater = (nextStepCB) => {};
const enjoyCoffee = (nextStepCB) => {};

grindCoffeeBeans((error, data) => {
  if (error) {
    console.log(error);
  } else {
    console.log(data);
    boilWater((error, data) => {
      if (error) {
        console.log(error);
      } else {
        console.log(data);
      }
    });
  }
});

grindCoffeeBeansPrototype(
  (message) => {
    console.log(message);
    boilWaterPrototype(
      (message) => {
        console.log(message);
      },
      (error) => {
        console.log(error);
      }
    );
  },
  (error) => {
    console.log(error);
  }
);
// grindCoffeeBeans(() => {
//   boilWater(() => {
//     pourWater(() => {
//       enjoyCoffee(() => {
//         console.log("The end.");
//       });
//     });
//   });
// });
