# Challenge Summary
<!-- Description of the challenge -->
Review the pseudocode below, then trace the algorithm by stepping through the process with the provided sample array. Document your explanation by creating a blog article that shows the step-by-step output after each iteration through some sort of visual.

Once you are done with your article, code a working, tested implementation of Merge Sort based on the pseudocode provided.

## Pseudocode

```JS
ALGORITHM Mergesort(arr)
    DECLARE n <-- arr.length

    if n > 1
      DECLARE mid <-- n/2
      DECLARE left <-- arr[0...mid]
      DECLARE right <-- arr[mid...n]
      // sort the left side
      Mergesort(left)
      // sort the right side
      Mergesort(right)
      // merge the sorted left and right sides together
      Merge(left, right, arr)

ALGORITHM Merge(left, right, arr)
    DECLARE i <-- 0
    DECLARE j <-- 0
    DECLARE k <-- 0

    while i < left.length && j < right.length
        if left[i] <= right[j]
            arr[k] <-- left[i]
            i <-- i + 1
        else
            arr[k] <-- right[j]
            j <-- j + 1

        k <-- k + 1

    if i = left.length
       set remaining entries in arr to remaining values in right
    else
       set remaining entries in arr to remaining values in left
```

Sample Arrays

In your blog article, visually show the output of processing this input array:

[8,4,23,42,16,15]

## Whiteboard Process

[Step 1](./mergesort_IMG/mergesort_1.png)
[Step 2](./mergesort_IMG/mergesort_2.png)
[Step 3](./mergesort_IMG/mergesort_3.png)
[Step 4](./mergesort_IMG/mergesort_4.png)
[Step 5](./mergesort_IMG/mergesort_5.png)
[Step 6](./mergesort_IMG/mergesort_6.png)

## Approach & Efficiency
<!-- What approach did you take? Why? What is the Big O space/time for this approach? -->

Time: O(n). I believe since it is recursive and we are cutting in half and half agin recursively it should end up totalling to n.

Space:O(n) No additional space needed minus a couple index variables.

## Solution
<!-- Show how to run your code, and examples of it in action -->
[Link to github repo](https://github.com/KrisDunning/data-structures-and-algorithms/tree/main/javascript/code-challenges/mergesort)

Clone the repo to local environment.
In terminal run 'npm i' to download dependencies.
In terminal run 'node index.js' to run the function with a sample array of data.
In terminal run 'npm test' to see tests.
