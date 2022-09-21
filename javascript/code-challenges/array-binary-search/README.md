# Binary Search
<!-- Description of the challenge -->
Write a function called BinarySearch which takes in 2 parameters: a sorted array and the search key. Without utilizing any of the built-in methods available to your language, return the index of the array’s element that is equal to the value of the search key, or -1 if the element is not in the array.
NOTE: The search algorithm used in your function should be a binary search

## Whiteboard Process
<!-- Embedded whiteboard image -->
[whiteboard drawing](array-binary-search.png)

## Collaborators

Alan Chelko

## Approach & Efficiency
<!-- What approach did you take? Discuss Why. What is the Big O space/time for this approach? -->

while the array is more than 1 index.
Find the midpoint of the array.
Compare midpoint value with target value. Return midpoint index if values match.
If midpoint value less than target value, set lower bound to midpoint+1.
If midpoint value more than target value, set upper bound to mipdoint-1.
while loop repeat.
If while loop ends return -1.

