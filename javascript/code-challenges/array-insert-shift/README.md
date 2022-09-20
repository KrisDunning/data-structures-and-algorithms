# Reverse an Array
<!-- Description of the challenge -->
Write a function called insertShiftArray which takes in an array and a value to be added. Without utilizing any of the built-in methods available to your language, return an array with the new value added at the middle index.

## Whiteboard Process
<!-- Embedded whiteboard image -->
[whiteboard drawing](array-insert-shift.png)

## Collaborators

Stephanie Hill

## Approach & Efficiency
<!-- What approach did you take? Discuss Why. What is the Big O space/time for this approach? -->

Take the original array. Find the middle index. Split original by copying indexes below middle index into newArr1. Split original index at and above middle index into newArr2. Combine newArr1, new number to insert, newArr2. Return the combined array.

Time: O(n) time expands in relation to n length of array.
Space: O(n) space expands in relation to n length of array plus two temp arrays, each approx. 1/2 siz of original array
