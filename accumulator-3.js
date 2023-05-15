let array = [
    "JavaScript",
    "Python",
    "Java",
    "C++",
    "Ruby",
    "Go",
    "Swift",
    "Rust",
    "TypeScript",
    "PHP"
  ];
  
  let accumulator = [];
  
  for (let i = 0; i < array.length; i++) {
    if (array[i].length > 3) {
      accumulator.push(array[i]);
    }
  }
  
  console.log(accumulator);
  