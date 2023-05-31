// const complexMug = {
//   material:{
//     handle:"plastic",
//     cup:"metal"
//   },
//   capacity: 300,
//   color: "grey",
//   contents: "coffee",
// }

const someList = ["a", "b", "c"];

someList[0]; // "a"

// complexMug[0] // undefined OR material

const weirdObjectThatWouldBeTheStartOfWhatAnArrayIs = {
  0: "some value",
  1: "some value",
  2: "some value",
  3: "some value",
};

weirdObjectThatWouldBeTheStartOfWhatAnArrayIs[0];

const complexMug = {
  material: {
    handle: "plastic",
    cup: "metal",
  },
  capacity: 300,
  color: "grey",
  contents: "coffee",
};

// Dot Notation (Drax VERY LITERAL)
complexMug.capacity; // 300

const someKey = "color";
complexMug.someKey; // undefined

// Square Bracket Notation (Evaluates the content inside the bracket)
complexMug["capacity"];

complexMug[someKey]; // grey
complexMug["col" + "or"]; // grey

complexMug["material"]["handle"];
complexMug.material.handle;
complexMug.material["handle"];
