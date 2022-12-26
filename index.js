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

/* function fibsRec(n) {
    if (n === 2) {
        return [0, 1];
    } else {
        let s = fibsRec(n - 1);
        s.push(s[s.length - 1] + s[s.length - 2]);
        return s;
    }
}

console.log(fibsRec(8)); */

// Build a function mergeSort that takes in an array and returns a sorted array, using a recursive merge sort methodology.

function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }
    let mid = Math.floor(arr.length / 2);
    let left = mergeSort(arr.slice(0, mid));
    let right = mergeSort(arr.slice(mid));
    return merge(left, right);
}

function merge(left, right) {
    let result = [];
    let leftIndex = 0;
    let rightIndex = 0;
    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            result.push(left[leftIndex]);
            leftIndex++;
        } else {
            result.push(right[rightIndex]);
            rightIndex++;
        }
    }
    return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}


console.log(mergeSort([38, 27, 43, 3, 9, 82, 10]));
