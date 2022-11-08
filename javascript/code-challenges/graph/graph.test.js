'use strict';
const { GraphImplementation, Edge} = require('./graph');

describe(' Graph Implementation', () => {

  it('Node can successfully be aded to the graph', () => {
    const graph = new GraphImplementation();
    graph.addNode('A');
    expect(graph.size()).toBe(1);
  });

  it('An Edge can be successfully added to the graph', () => {
    const graph = new GraphImplementation();
    const A =graph.addNode('A');
    const B =graph.addNode('B');
    graph.addEdge(A,B,1);
    expect(graph.getNeighbors(A).length).toBe(1);
  });

  it('A collection of all nodes can be properly retrieved from the graph', () => {
    const graph = new GraphImplementation();
    graph.addNode('A');
    graph.addNode('B');
    expect(graph.getNodes()).toBeTruthy();
  });
  it('All appropriate neighbors can be retrieved from the graph', () => {
    const graph = new GraphImplementation();
    const A =graph.addNode('A');
    const B =graph.addNode('B');
    graph.addEdge(A,B,1);
    expect(graph.getNeighbors(A)[0]).toMatchObject({"node": {"value": "B"}, "weight": 1});
    expect(graph.getNeighbors(B)).not.toMatchObject({"node": {"value": "B"}, "weight": 1});
  });
  it('Neighbors are returned with the weight between nodes included', () => {
    const graph = new GraphImplementation();
    const A =graph.addNode('A');
    const B =graph.addNode('B');
    graph.addEdge(A,B,1);
    expect(graph.getNeighbors(A)[0]).toHaveProperty('weight',1);
  });
  it('The proper size is returned representing the number of nodes in the graph', () => {
    const graph = new GraphImplementation();
    graph.addNode('A');
    graph.addNode('B');
    expect(graph.size()).toBe(2);
  });
  it('A graph with only one node and edge can be properly returned', () => {
    const graph = new GraphImplementation();
    const A =graph.addNode('A');
    graph.addEdge(A,A,3);
    expect(graph.size()).toBe(1);
    expect(graph.getNeighbors(A)[0]).toHaveProperty('weight',3);
  });
});

