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

### breadth first

Arguments: Node
Return: A collection of nodes in the order they were visited.
Display the collection

### business trip

Arguments: graph, array of city nodes
Return: the cost of the trip (if possible) or null (if not)

## Approach & Efficiency
<!-- What approach did you take? Why? What is the Big O space/time for this approach? -->
Space : O(n) - the size of the storage is dependent on how many items are added to the graph
Time : O(n) - the slowest operations are the array operations which equate to an O(n).

## API
<!-- Description of each method publicly available in each of your hashtable -->

- Download directory.
- Import `GraphImplementation` class from graph.js.
- Declare a variable and assign a new `GraphImplementation` (`ex.const graph = new GraphImplementation();`)
- `addNode(value)` -  Class method that adds a node to the graph
- `addEdge(node1,node2,weight(optional))` - Method that adds a directional edge from node1 to node2 with an optional weight(defaults to 0)
- `getNodes()` - returns an iterable of nodes in the graph
- `getNeighbors(node)` - returns a collection of edges connected to node
- `size()` - returns integer value of number of nodes in the graph
- `breadthFirst(rootNode)` - Method used to return array of node values in a breadth first traversal manner
- `businessTrip(graph,[city1,city2]`) - Method to determine cost of travel(edge weight) between two "cities"(nodes) on a graph
