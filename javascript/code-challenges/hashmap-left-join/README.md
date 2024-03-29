# Hashmap Left Join
<!-- Short summary or background information -->

## Challenge
<!-- Description of the challenge -->
Write a function that LEFT JOINs two hashmaps into a single data structure.

Write a function called left join
Arguments: two hash maps

The first parameter is a hashmap that has word strings as keys, and a synonym of the key as values.

The second parameter is a hashmap that has word strings as keys, and antonyms of the key as values.

Return: The returned data structure that holds the results is up to you. It doesn’t need to exactly match the output below, so long as it achieves the LEFT JOIN logic.

NOTES:
Combine the key and corresponding values (if they exist) into a new data structure according to LEFT JOIN logic.

LEFT JOIN means all the values in the first hashmap are returned, and if values exist in the “right” hashmap, they are appended to the result row.

If no values exist in the right hashmap, then some flavor of NULL should be appended to the result row.

## Approach & Efficiency
<!-- What approach did you take? Why? What is the Big O space/time for this approach? -->
Space : O(n) - No additional space beyond the size the the maps passed into the function.
Time : O(1) - Map lookup is a O(1) operation.

## API
<!-- Description of each method publicly available in each of your hashtable -->

- Download the hashmap-left-join folder.
- Import leftJoin function from hashmap-left-join/index.js
- Call leftJoin(map1,map2) and pass in two maps.
- leftJoin() returns ar array of following the SQL Left Join Logic.

> LEFT JOIN means all the values in the first hashmap are returned, and if values exist in the “right” hashmap, they are appended to the result row.
