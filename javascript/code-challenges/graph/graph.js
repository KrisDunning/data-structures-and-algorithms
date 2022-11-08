'use strict';

class Node {
  constructor(value) {
    this.value = value;
  }
}

class Edge {
  constructor(node, weight = 0) {
    this.node = node;
    this.weight = weight;
  }
}

class GraphImplementation {
  constructor() {
    this.adjacencyList = new Map();
  }

  addNode(value) {
    //adds new node to graph
    const node = new Node(value);
    this.adjacencyList.set(node, []);
    return node;
  }
  addEdge(node1, node2, weight) {
    //adds new edge between the two nodes
    const adjacents = this.adjacencyList.get(node1);
    adjacents.push(new Edge(node2, weight));
  }
  getNodes() {
    //return all nodes in the graph in a collection
    return this.adjacencyList.keys();
  }
  getNeighbors(node) {
    //return a collection of edges connected to the given node
    return [...this.adjacencyList.get(node)];
  }
  size() {
    //return total number of nodes in the graph
    return this.adjacencyList.size;
  }

  breadthFirst(firstNode) {
    // declare a visited set(unique values)
    let visited = new Set();
    //assign the first node to the queue
    let queue = [firstNode];

    while (queue.length > 0) {
      let current = queue.pop();
      visited.add(current.value);
      // assign the list of neighbors to a queue(FIFO)
      let neighbors = this.getNeighbors(current);
      neighbors.forEach(neighbor => {
        // if neighbor has not been visited already then visit
        if (!visited.has(neighbor.node.value)) {
          // add neigbors to visited array when visiting
          queue.unshift(neighbor.node);
          visited.add(neighbor.node.value);
        }
      });
      // current = queue.pop();
    }
    //return set values
    return[...visited];
  }

}

module.exports = { GraphImplementation, Node, Edge };
