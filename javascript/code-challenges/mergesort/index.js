'use strict';


function mergeSort(arr) {
  let n = arr.length;
  if (n > 1) {

    let mid = Math.floor(n / 2);
    let left = arr.slice(0, mid);
    let right = arr.slice(mid, n);
    // console.log('Top level left / right : ', left, right);
    mergeSort(left);
    mergeSort(right);
    merge(left, right, arr);
  }
}

function merge(left, right, arr) {
  let i = 0;
  let j = 0;
  let k = 0;
  //console.log('left , right , arr inside merge : ', left, right, arr);
  while (i < left.length && j < right.length) {
    if (left[i] <= right[j]) {
      arr[k] = left[i];
      i = i + 1;
    }
    else {
      arr[k] = right[j];
      j = j + 1;
    }
    k = k + 1;
    if (i === left.length) {
      arr[k] = right[j];
      // console.log('arr after pushing remaing values from right : ', arr);
    }
    else {
      arr[k] = left[i];
      // console.log('arr after pushing remaing values from left : ', arr);
    }
  }
}
let theArray = [8, 4, 23, 42, 16, 15];
let theArray2 = [99, 88, 77, 66, 44, 55];
console.log('Initial theArray : ',theArray);
mergeSort(theArray);
console.log('Merge Sorted theArray : ', theArray);
console.log('Initial theArray2 : ',theArray2);
mergeSort(theArray2);
console.log('theArray2 : ', theArray2);


module.exports = mergeSort;



