# Reverse an Array
<!-- Description of the challenge -->
Write a function called reverseArray which takes an array as an argument. Without utilizing any of the built-in methods available to your language, return that array with elements in reversed order.  Modify the existing array in place
## Whiteboard Process
[whiteboard drawing](401-d48_Lab01Drawing.jpg)

## Approach & Efficiency
<!-- What approach did you take? Discuss Why. What is the Big O space/time for this approach? -->

Start at beginning and end of array and utilizing a temp variable swap data. Move 1 spot towards center on each end. See if end>beginning spot. If so return array, if not repeat swapping and moving pointers.

Time: O(n) time expands in relation to n length of array.
Space: O(n) space expands in relation to n length of array plus one temp variable.
