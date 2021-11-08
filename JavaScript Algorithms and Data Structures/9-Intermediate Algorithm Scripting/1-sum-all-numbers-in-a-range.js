function sumAll(arr) {
  arr.sort((a, b) => a < b ? -1 : 1);

  const [a, b] = arr;
  /** Solution with for loop */
  //let sum = 0;
  //for(let i = a; i <= b; i++) {
  //  sum +=i;
  //}
  // return sum;


  /* Solution with recursion */
  if(a == b) return a;
  return a + sumAll([a + 1, b])
}

console.log(sumAll([4, 1]));