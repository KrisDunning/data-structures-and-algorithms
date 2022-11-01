# Tree Intersection
<!-- Short summary or background information -->

## Challenge
<!-- Description of the challenge -->
Feature Tasks

[ ] - Write a function called tree_intersection that takes two binary trees as parameters.

[ ] - Using your Hashmap implementation as a part of your algorithm, return a set of values found in both trees.

## Approach & Efficiency
<!-- What approach did you take? Why? What is the Big O space/time for this approach? -->
Space : O(n) - No additional space required beyond the trees passed as arguments.

Time : O(1) - Map() lookup is O(1).

## API
<!-- Description of each method publicly available in each of your hashtable -->

import treeIntersection from treeIntersection.js

call treeIntersection(tree1,tree2) and pass in the two trees to compare values of.

treeIntersection returns an array of shared values between tree1 and tree2.
