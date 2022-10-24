# Challenge Summary
<!-- Description of the challenge -->
Review the pseudocode below, then trace the algorithm by stepping through the process with the provided sample array. Document your explanation by creating a blog article that shows the step-by-step output after each iteration through some sort of visual.

Once you are done with your article, code a working, tested implementation of Insertion Sort based on the pseudocode provided.

## Pseudocode

```JS
InsertionSort(int[] arr)
    FOR i = 1 to arr.length
      int j <-- i - 1
      int temp <-- arr[i]

      WHILE j >= 0 AND temp < arr[j]
        arr[j + 1] <-- arr[j]
        j <-- j - 1

      arr[j + 1] <-- temp
```

Sample Arrays

In your blog article, visually show the output of processing this input array:

[8,4,23,42,16,15]

## Whiteboard Process

[Steps 1-3](Insertion_Sort_1.png)
[Steps 4-4.b](Insertion_Sort_2.png)
[Steps 5-5.c](Insertion_Sort_3.png)
[Step 6](Insertion_Sort_4.png)

## Approach & Efficiency
<!-- What approach did you take? Why? What is the Big O space/time for this approach? -->

Time: O(n^2) - worst case is we have a reverse sorted (highset to lowest) array and we must move the last number to the front, then 2nd to last to 2nd position and shift all numbers to the right. This is doing double the work.
Space: O(n) - worst case we still only use 1 temp variable and so no additional space is utilized beyond that.

## Solution
<!-- Show how to run your code, and examples of it in action -->
[Link to github repo](https://github.com/KrisDunning/data-structures-and-algorithms/tree/main/javascript/code-challenges/insertion-sort)

Clone the repo to local environment.
In terminal run 'npm i' to download dependencies(jest).
In terminal run 'node index.js' to run the function with a sample array of data.
In terminal run 'npm test' to see tests.
