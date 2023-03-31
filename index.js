// Assignment 1 
// Using iteration, write a function fibs which takes a number 
// and returns an array containing that many numbers from the fibonacci sequence. 

let results = [];
function fibs(n) {
  if ( n <= 0 ) {
    return "Please enter a valid number of elements to be given an answer.";
  } else if (n == 1) {
    results = [0];
  } else if ( n == 2) {
    results = [0, 1];
  } else {
    results = [0, 1];
    let sum = 0;
    let a = 0;
    let b = 0;
    for (let i = 3; i <= n; i++) {
      a = i - 2;
      b = i - 3;      
      sum = results[a] + results[b];
      results.push(sum);
    }
  }
  return results;
}

// write another method fibsRec which solves the same problem recursively.

function getFib(a) {
  return a < 2 ? a : getFib(a - 1) + getFib(a - 2);
}

function fibsRec(n) {
  if ( n <= 0 ) {
    return "Please enter a valid number of elements to be given an answer.";
  } else if (n == 1) {
    results = [0];
  } else if ( n == 2) {
    results = [0, 1];
  } else {
    results = [0, 1];
    for (let i = 2; i < n; i++) {
      results.push(getFib(i))
    }
  }
  return results;
}
console.log(fibsRec(8))
// Project: Merge Sort