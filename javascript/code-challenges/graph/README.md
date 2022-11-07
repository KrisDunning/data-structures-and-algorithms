# Graph Implementation
<!-- Short summary or background information -->
Code your own implementation of a graph

## Challenge
<!-- Description of the challenge -->
Challenge Type: Code Challenge / Algorithm

Implement your own Graph. The graph should be represented as an adjacency list, and should include the following methods:

### add node

Arguments: value
Returns: The added node
Add a node to the graph

### add edge
Arguments: 2 nodes to be connected by the edge, weight (optional)
Returns: nothing
Adds a new edge between two nodes in the graph
If specified, assign a weight to the edge
Both nodes should already be in the Graph

### get nodes

Arguments: none
Returns all of the nodes in the graph as a collection (set, list, or similar)
Empty collection returned if there are no nodes

### get neighbors

Arguments: node
Returns a collection of edges connected to the given node
Include the weight of the connection in the returned collection
Empty collection returned if there are no nodes

### size

Arguments: none
Returns the total number of nodes in the graph
0 if there are none

## Approach & Efficiency
<!-- What approach did you take? Why? What is the Big O space/time for this approach? -->
Space : O(n) - space directly related to number if words in the input string.
Time : O(1) - map data structure utilizes O(1) lookup

## API
<!-- Description of each method publicly available in each of your hashtable -->

in the hashmapRepeatedWords.js file. Simply call the repeatedWords function and pass in a string of words. Will either return the first instance of a repeated word, or 'No repeated words'.
