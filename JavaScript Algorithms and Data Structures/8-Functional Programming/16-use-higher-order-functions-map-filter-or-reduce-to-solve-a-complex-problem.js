const squareList = arr => {
  // Only change code below this line
  /*return arr.filter(n => Number.isInteger(n) && n > 0)
            .map(n => n * n);*/
  
  return arr.reduce((myArray, n) => {
    if(Number.isInteger(n) && n > 0) {
      myArray.push(n * n)
    }
    return myArray;
  }, [])
  // Only change code above this line
};

const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
console.log(squaredIntegers);
console.log(typeof 8.9)