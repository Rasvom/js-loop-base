let array = [1, 4, 2, 4, 5, 5, 1, 2, 4, 3];
let accumulator = 0;
for (let i = 0; i < array.length; i++) {
  accumulator += array[i];
}
console.log(accumulator);