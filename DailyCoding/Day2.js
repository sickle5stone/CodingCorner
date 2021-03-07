// # Day 2

// array of integers
// i x i...n

//i x i + 1 ... n
// because sum of product is
// n x (n + 1) x (n + 2)... x n length
// sum / n = the rest of (n + 1)...(n + k)

// const intArray = [1, 2, 3, 4, 5];
// const intArray = [2, 3, 1];
// const highestProduct = intArray.reduce((number, current) => number * current);
// const newArray = intArray.map((value) => {
//   return highestProduct / value;
// });
// console.log(newArray);

// without division
const intArray = [1, 2, 3, 4, 5];
const productArray = [];
let temp = 1;
for (var i = 0; i < intArray.length; i++) {
  if (i === 0) {
    temp = 1;
    productArray.push(temp);
  } else {
    temp = temp *= intArray[i - 1];
    productArray.push(temp);
  }
}

for (var i = productArray.length - 1; i > 0; i--) {
  productArray[i] = intArray[i] * productArray[i];
}

console.log(productArray);
// intArray.map((value) => {
//   temp = 1 * value;
//   return temp;
// });

// 1 2 3 4 5
// 1 1 2 6 24
