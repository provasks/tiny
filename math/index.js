/**********************************************
 * Returns the factorial of a number
 **********************************************/
const factorial = n => (n <= 1 ? 1 : n * factorial(n - 1));
/**********************************************
 * Returns the nth value of Fibonacci series
 **********************************************/
export const fibonacci = (n = 5, prev = 0, next = 1) =>
  n === 1 ? prev : fibonacci(n - 1, next, prev + next);

/**********************************************
 * Check if the provided number is a Prime
 **********************************************/
export const isPrime = n => {
  for (let i = 2, l = Math.sqrt(n); i <= l; i++) {
    if (n % i == 0) {
      return false;
    }
  }
  return true;
};

/**********************************************
 * Returns the nth prime number
 **********************************************/
export const nthPrime = n => {
  // const primes = [];
  // const diffs = [];
  // let count = primes.length;
  // let start = count > 0 ? primes[count - 1] : 2;
  // for (var i = start; ; i++) {
  //   if (isPrime(i)) {
  //     diffs.push(i - primes[primes.length - 1] || 2);
  //     primes.push(i);
  //     // console.log(primes[count], diffs[count]);
  //     count = count + 1;
  //   }
  //   if (count == n) break;
  // }
  // let sorted = diffs.sort((a, b) => b - a);
  // console.log(sorted[0]);
  // return primes[n - 1];
  let counter = 0;
  for (let i = 2; ; i++) {
    if (isPrime(i)) {
      // console.log(i);
      counter++;
    }
    if (counter == n) {
      return i;
    }
  }
};

/**********************************************
 * Greatest Common Divisor between two numbers
 **********************************************/
export const gcd = (a, b) => {
  return a == 0 || b == 0
    ? 0
    : a == b
    ? a
    : a > b
    ? gcd(a - b, b)
    : gcd(a, b - a);
};

/**********************************************
 * Helper function of gcdLarge
 **********************************************/
const reduceB = (a, b = []) => {
  let mod = 0;

  // calculating mod of b with a to make
  // b like 0 <= b < a
  for (let i = 0; i < b.length; i++) {
    mod = (mod * 10 + parseInt(b[i]) - "0") % a;
  }

  return mod; // return modulo
};

/**********************************************
 * Greatest Common Divisor between two numbers
 * One number is large
 **********************************************/
export const gcdLarge = (a, b = "") => {
  // Reduce 'b' (second number) after modulo with a
  let num = reduceB(a, b.toString().split(""));

  // gcd of two numbers
  return gcd(a, num);
};

/**********************************************
 * Least Common Multiplier between two numbers
 **********************************************/
export const lcm = (a, b) => (a * b) / gcd(a, b);

export const generateSequence = n =>
  Array.apply(null, Array(n)).map((_, i) => i + 1);
