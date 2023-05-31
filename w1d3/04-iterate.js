// Iterate!

const someMug = {
  material: "porcelain",
  capacity: 300,
  color: "grey",
  contents: "coffee",
  contents: "tea",
};

// {}
// .material = "porcelain"
// .material = "porcelain"
// .material = "porcelain"

someMug.color = "red";
// Iteration? Loops!

//

// for (let i = 0; i < someMug.length; i++) {
//   // Will not work, because objects don't have a length
// }

// for(let i = 0; i < arr.length; i++){
//   const value = arr[i]
//   // ..
// }
// For the values of the array
// For the keys in the object
// for(const value of someMug){
//   // Will not work, because an object is not iterable
// }

for (const key in someMug) {
  console.log(key);
  console.log(someMug[key]);
}

for (const key of Object.keys(someMug)) {
}

for (let i = 0; i < Object.keys(someMug).length; i++) {
  const key = Object.keys(someMug)[i];
}

// console.log(Object.keys(someMug));
console.log(Object.values(someMug));
