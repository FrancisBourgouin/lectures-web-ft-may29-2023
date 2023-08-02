const labels = ["Aardvark", "Background Noise", "Coffee", "Merman", "Potato", "Travel"]
const sampleData = [
  0.002842077286913991,
  1.00020461561507545412,
  0.0022628558799624443,
  0.010985834524035454,
  0.9811615347862244,
  0.00254307989962399
]

// sort ?
// max ?
// 


// let biggestValue = sampleData[0]
// for (const value of sampleData) {
//   if (value > biggestValue) {
//     biggestValue = value
//   }
// }

const returnBiggestIndex = (sampleData) => {

  const biggestValue = Math.max(...sampleData)
  const biggestValueIndex = sampleData.indexOf(biggestValue)

  return biggestValueIndex
}

const labelOfBiggestValue = labels[biggestValueIndex]

console.log(labelOfBiggestValue)