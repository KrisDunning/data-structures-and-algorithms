# Singly Linked List
<!-- Short summary or background information -->

## Challenge
<!-- Description of the challenge -->
### Node

Create a Node class that has properties for the value stored in the Node, and a pointer to the next Node.

### Linked List

Create a Linked List class

Within your Linked List class, include a head property.

Upon instantiation, an empty Linked List should be created.

The class should contain the following methods

### insert

Arguments: value
Returns: nothing
Adds a new node with that value to the head of the list with an O(1) Time performance.

### includes

Arguments: value
Returns: Boolean
Indicates whether that value exists as a Node’s value somewhere within the list.

### to string

Arguments: none
Returns: a string representing all the values in the Linked List, formatted as:
"{ a } -> { b } -> { c } -> NULL"

### append

arguments: new value
adds a new node with the given value to the end of the list

### insert before

arguments: value, new value
adds a new node with the given new value immediately before the first node that has the value specified

### insert after

arguments: value, new value
adds a new node with the given new value immediately after the first node that has the value specified


## Approach & Efficiency
<!-- What approach did you take? Why? What is the Big O space/time for this approach? -->

Approach was to utilize linked list properties to effectively insert values. As a learning process, the approach was to use content from class and not necessarily the most time efficient methods.

Big O should be 0(1).

## API
<!-- Description of each method publicly available to your Linked List -->
list.insert(value) // Add a value to list at head  node

list.includes(value) // Returns true/false if value exists in the list

list.toString() // Returns list in a formatted string
e.x. {a}->{b}->{c}->Null

list.append(value) // Adds value node to end of list

list.insertBefore(searchValue,InsertValue) // Inserts value in node before the search value node

list.insertAfter(searchValue,InsertValue) // Inserts value in node after the search value node
