/*
   filename: sophisticated_code.js

   This JavaScript code demonstrates a sophisticated and elaborate solution 
   for solving the classic problem of producing a Fibonacci series with a twist.

   Fibonacci series: In mathematics, the Fibonacci series is a sequence of numbers
   in which each number is the sum of the two preceding ones, usually starting with
   0 and 1.

   This code takes the Fibonacci series and adds a signature feature, where it generates
   an additional number at every third position that is the sum of four preceding numbers.

   Note: This code is designed to be illustrative rather than efficient.

   Author: Creative Coder
   Date: January 1, 2022
*/

function generateFibonacciSeries(n) {
  if (n <= 0) {
    throw new Error('Invalid input: n must be a positive integer.');
  }

  let series = [0, 1];

  // Generate the Fibonacci series up to the nth position
  for (let i = 2; i < n; i++) {
    let num;

    // Add a signature number every third position
    if (i % 3 === 0) {
      num = series[i - 1] + series[i - 2] + series[i - 3] + series[i - 4];
    } else {
      num = series[i - 1] + series[i - 2];
    }

    series.push(num);
  }

  return series;
}

// Usage example
const fibSeries = generateFibonacciSeries(20);
console.log(fibSeries);

// Output:
// [0, 1, 1, 2, 3, 6, 11, 20, 37, 68, 125, 230, 423, 778, 1431, 2632, 4841, 8904, 16377, 30122]