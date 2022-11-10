'use strict';
let {Stack} = require ('../stack-and-queue');

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
    return [...this.adjacencyList.keys()];
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
    return [...visited];
  }

  depthFirst(rootNode){
    let depthStack = new Stack();
    let visited = new Set();
    let addedToStack = new Set();
    let returnValues=[];
    depthStack.push(rootNode);
    while (!depthStack.isEmpty()){
      let current=depthStack.pop();
      let currentNeighbors=this.getNeighbors(current);
      if(currentNeighbors){
        currentNeighbors.forEach(neighbor=>{
          if(!visited.has(neighbor.node.value) && !addedToStack.has(neighbor.node.value)){
            depthStack.push(neighbor.node);
            addedToStack.add(neighbor.node.value);
          }
        });
      }
      returnValues.push(current.value);
      visited.add(current.value);
    }
    return returnValues;
  }



  businessTrip(graph, destinations) {
    let sumofWeight = 0;
    if (destinations.length < 2) return null;

    for (let i = 1; i < destinations.length; i++) {
      let neighbors = this.getNeighbors(destinations[i - 1]);
      neighbors = neighbors.map(neighbor => [neighbor.node.value, neighbor.weight]);
      neighbors.forEach((neighbor) => {
        if (neighbor[0]===destinations[i].value) {
          sumofWeight +=neighbor[1];
        }
      });
    }
    if(sumofWeight===0)return null;
    return sumofWeight;
  }

}

// const graph = new GraphImplementation();
// const a = graph.addNode('A');
// const b = graph.addNode('B');
// const c = graph.addNode('C');
// const d = graph.addNode('D');
// const e = graph.addNode('E');
// const f = graph.addNode('F');
// const g = graph.addNode('G');
// const h = graph.addNode('H');

// graph.addEdge(a, d);
// graph.addEdge(a, b);
// graph.addEdge(b, a);
// graph.addEdge(b, c);
// graph.addEdge(b, d);
// graph.addEdge(c, b);
// graph.addEdge(c, g);
// graph.addEdge(d, a);
// graph.addEdge(d, b);
// graph.addEdge(d, e);
// graph.addEdge(d, f);
// graph.addEdge(d, h);
// graph.addEdge(e, d);
// graph.addEdge(f, d);
// graph.addEdge(f, h);
// graph.addEdge(g, c);
// graph.addEdge(h, d);
// graph.addEdge(h, f);


// console.log(graph.depthFirst(a));


module.exports = { GraphImplementation, Node, Edge };
