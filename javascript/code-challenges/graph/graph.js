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

}

module.exports={GraphImplementation,Node,Edge};
