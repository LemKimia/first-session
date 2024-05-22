/*
Lengkapi fungsi isPrime untuk menentukan bilangan prima.
Jika bilangan prima maka return true, jika bukan return false.
*/

function isPrime(num) {
  // Code here
  if (num <= 1) return false;

  // Check from 2 to the square root of num
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }

  return true;
}

console.log(isPrime(7)); // Output: true
console.log(isPrime(10)); // Output: false
