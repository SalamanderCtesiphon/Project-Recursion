let results = [];

function fibs(n) {
  if (n == 1) {
    results = [0];
  } else if ( n == 2) {
    results = [0, 1];
  } else {
    let sum;
    for (let i = 3; i <= n; i++) {
      results = [0, 1];
      sum = (i - 2) + (i - 1);
      results.push(sum);
    }
    
  }
  return results;
}



console.log(fibs(4))