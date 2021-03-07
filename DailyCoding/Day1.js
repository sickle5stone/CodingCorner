// list of numbers
// number k

// num[x] + num[y] === k

const numbers = [10, 15, 3, 7];
let k = 17;

const negativeComplement = [];

for (number of numbers) {
  if (numbers.includes(Math.abs(k - number))) {
    console.log("Found! Number: " + Math.abs(k - number));
    return true;
  }
}
