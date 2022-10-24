'use strict';


function insertion_sort(arr) {
  console.log('Array before sort: ',arr);
  let j;
  let temp;
  for (let i = 1; i < arr.length; i++) {
    j = i - 1;
    temp = arr[i];
    while ((j >= 0) && (temp < arr[j])) {
      arr[j + 1] = arr[j];
      j = j - 1;
    }
    arr[j + 1] = temp;
  }
  console.log('Array after sort: ',arr);
  return arr;
}

insertion_sort([8,4,23,42,16,15]);

module.exports = insertion_sort;
