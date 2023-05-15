let array = [
    "Альви",
    "Тимур",
    "Мансур",
    "Яхъя",
    "Якъуб",
    "Хьамзат",
    "Мовсар",
  ];
  
  let accumulator = [];
  
  for (let i = 0; i < array.length; i++) {
    if (array[i][0].toLowerCase() === 'а') {
      accumulator.push(array[i]);
    }
  }
  
  console.log(accumulator);
  