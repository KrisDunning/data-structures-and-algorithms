# Hashtables
<!-- Short summary or background information -->
Create a Hashtable. Write set,get methods for storage and retrieval of values. Write has method to verify if key exits in table. Write keys method to return all keys in the table.

## Challenge
<!-- Description of the challenge -->
Implement a Hashtable Class with the following methods:

### set

Arguments: key, value
Returns: nothing
This method should hash the key, and set the key and value pair in the table, handling collisions as needed.
Should a given key already exist, replace its value from the value argument given to this method.

### get

Arguments: key
Returns: Value associated with that key in the table.

### has

Arguments: key
Returns: Boolean, indicating if the key exists in the table already.

## keys

Returns: Collection of keys
hash
Arguments: key
Returns: Index in the collection for that key

## Approach & Efficiency
<!-- What approach did you take? Why? What is the Big O space/time for this approach? -->
Space : O(n)
Time : O(n)

## API
<!-- Description of each method publicly available in each of your hashtable -->

let table = new Hashtable(*size*)  // to create a new table of *size*. Recommend 1024 to test.

table.set('*key*','*value*')  // to set a value {key,value} pair into the table.

table.get('*key*')  // to retrieve the value matched with the key.

table.has('*key*')  // returns true or null if key is in table or not.

table.hash('*key*')  // returns the index value of the key.


