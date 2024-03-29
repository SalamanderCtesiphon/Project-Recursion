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
// Project: Merge Sort
/* let rightSide = [];
let leftSide = [];
let sortItOut = [];

function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  leftSide = arr.slice(0, arr.length/ 2);
  rightSide = arr.slice(arr.length/ 2);
 
  if (leftSide.length === 1 || rightSide.length < 2) {
    if (leftSide[0] < rightSide[0]) {
      sortItOut = leftSide.concat(rightSide);
    } else {
      sortItOut = rightSide.concat(leftSide);
    }
    return sortItOut;
  } else {
    mergeSort(leftSide);
  }
  console.log(sortItOut);
  return sortItOut;
}

mergeSort( [10, -1, 2, 5, 0, 6, 4, -5]); */

// Merge Sort Implentation (Recursion)
function mergeSort (unsortedArray) {
  if (unsortedArray.length <= 1) {
    return unsortedArray;
  }
  const middle = Math.floor(unsortedArray.length / 2);

  const left = unsortedArray.slice(0, middle);
  const right = unsortedArray.slice(middle);

  return merge(
    mergeSort(left), mergeSort(right)
  );
}

function merge (left, right) {
  let resultArray = [], leftIndex = 0, rightIndex = 0;

  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      resultArray.push(left[leftIndex]);
      leftIndex++; 
    } else {
      resultArray.push(right[rightIndex]);
      rightIndex++; 
    }
  }

  return resultArray
          .concat(left.slice(leftIndex))
          .concat(right.slice(rightIndex));
}

console.log(mergeSort( [10, -1, 2, 5, 0, 6, 4, -5]));