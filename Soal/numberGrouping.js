/*
Kelompokkan angka dalam 3 nested array.
1. Index 0 mengelompokkan angka genap
2. Index 1 mengelompokkan angka ganjil
3. Index 2 mengelompokkan angka yang bisa dibagi 3
*/

function numberGrouping(numbers) {
  // Code here
  let even = [];
  let odd = [];
  let divisibleByThree = [];

  for (let number of numbers) {
    if (number % 2 === 0) {
      even.push(number);
    }
    if (number % 2 !== 0) {
      odd.push(number);
    }
    if (number % 3 === 0) {
      divisibleByThree.push(number);
    }
  }

  return [even, odd, divisibleByThree];
}

console.log(numberGrouping([1, 2, 4, 6, 8])) // Output: [[2, 4, 8], [1], [6]]
