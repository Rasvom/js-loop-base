let array = [2, 8, 15, 6, 12, 3, 10, 7, 4, 9];

let accumulatorOdd = [];

for (let i = 0; i < array.length; i++) {
  if (array[i] % 2 !== 0) {
    accumulatorOdd.push(array[i]);
  }
}

console.log(accumulatorOdd);