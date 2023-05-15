let array = [4, 4, 5, 3, 1, 3, 4, -3, -1, -5];
let accumulator = 0;
let i = 0;

while (i < array.length) {
  if (array[i] > 0) {
    accumulator += array[i];
  }
  i++;
}

console.log(accumulator);
