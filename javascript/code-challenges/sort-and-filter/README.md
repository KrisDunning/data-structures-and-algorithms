# Challenge Summary
<!-- Description of the challenge -->

## Feature Tasks

Implement the functions sortYear, sortTitle, and inGenre in the file sort.js.

Execute your tests while developing using npm run watch.
Execute your tests in CI using npm test.
Functions:

### sortYear

Arguments: movies array
Sorts the input array by year, in ascending order.

### sortTitle

Arguments: movies array
Sorts the input array by title, ignoring "The " at the beginning of titles.

### inGenre

Arguments: movies array, genre string
Filters the input array, returning only those movies who include genre.

Extract the comparator callbacks.
sortYear and sortTitle should both be implemented by passing a custom comparison function to the built-in sort utility.

Export these helper functions at the top level of your file, and call them from your sortYear and sortTitle functions.

Import these helper functions into your test, and write tests that verify they return the appropriate comparison values (<0, 0, or >0).

## Whiteboard Process

None Applicable

## Approach & Efficiency

## Solution
<!-- Show how to run your code, and examples of it in action -->
[Link to github repo](https://github.com/KrisDunning/data-structures-and-algorithms/tree/main/javascript/code-challenges/sort-and-filter)

Clone the repo to local environment.
In terminal run 'npm i' to download dependencies.
In terminal run 'node sort.js' to run the function with a sample array of data.
In terminal run 'npm test sort.test.js' to see tests.
