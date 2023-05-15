let array = [2, 8, 15, 6, 12, 3, 10, 7, 4, 9];

let accumulatorEven = [];

for (let i = 0; i < array.length; i++) {
  if (array[i] % 2 === 0) {
    accumulatorEven.push(array[i]);
  }
}

console.log(accumulatorEven);