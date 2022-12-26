/* let arr = [0,1];

function fibs(n) {
    arr = [0, 1];
    for (let i = 2; i < n; i++) {
        arr.push(arr[i - 2] + arr[i - 1]);
    }
    return arr;
}

console.log(fibs(8)); */

//a recursive function that returns an array containing that many numbers of the fibonacci sequence

function fibsRec(n) {
    if (n === 2) {
        return [0, 1];
    } else {
        let s = fibsRec(n - 1);
        s.push(s[s.length - 1] + s[s.length - 2]);
        return s;
    }
}

console.log(fibsRec(8));

