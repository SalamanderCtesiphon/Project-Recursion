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

console.log(fibs(8))

/* let results = [];
function fibsRec(n) {
  if (n < 2) {
    return n;
  } else {
    return fibsRec(n - 1) + fibsRec(n - 2);
    
  }
}

console.log(fibsRec(7)); */