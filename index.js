
function fib(n) {
  let results = [];
  if (n == 0) {
    results = [0];
  } else if (n == 1) {
    results = [0, 1];
  } else {
    results = [0, 1]
    for (let i = 2; i < n; i++) {
      let sum;
      sum = (i - 1) + (i);
      results.push(sum);
    }
  }
  return results;
}

console.log(fib(8));