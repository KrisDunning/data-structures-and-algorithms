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

const graph = new GraphImplementation();
const pandora = graph.addNode('Pandora');
const arendelle = graph.addNode('Arendelle');
const metroville = graph.addNode('Metroville');
const monstropolis = graph.addNode('Monstropolis');
const narnia = graph.addNode('Narnia');
const naboo = graph.addNode('Naboo');
graph.addEdge(pandora, arendelle, 150);
graph.addEdge(arendelle, metroville, 99);
graph.addEdge(arendelle, monstropolis, 42);
graph.addEdge(arendelle, pandora, 150);
graph.addEdge(metroville, arendelle, 99);
graph.addEdge(metroville, monstropolis, 105);
graph.addEdge(metroville, narnia, 37);
graph.addEdge(metroville, naboo, 26);
graph.addEdge(metroville, pandora, 82);
graph.addEdge(monstropolis, arendelle, 42);
graph.addEdge(monstropolis, metroville, 105);
graph.addEdge(monstropolis, naboo, 73);
graph.addEdge(narnia, metroville, 37);
graph.addEdge(narnia, naboo, 250);
graph.addEdge(naboo, metroville, 26);
graph.addEdge(naboo, narnia, 250);
graph.addEdge(naboo, monstropolis, 73);

//let allNodes=graph.getNodes();
//console.log(allNodes);

// allNodes.forEach(node=>{
//   console.log(`Neighbors of ${node.value} : `,graph.getNeighbors(node));
// });

console.log('Returned weight : ',graph.businessTrip(graph, [metroville, pandora]));
console.log('Returned weight : ',graph.businessTrip(graph, [naboo, pandora]));
console.log('Returned weight : ',graph.businessTrip(graph, [arendelle,monstropolis,naboo]));

module.exports = { GraphImplementation, Node, Edge };
