// for..of

const someArray = [1,2,3,4]

for(let i = 0; i < someArray.length; i++){
  const element = someArray[i]

}

for(const element of someArray){

}

// .map => Iterate over an array, and output a new array

const newArray = []
for(const element of someArray){
  newArray.push(element * 2)
}
