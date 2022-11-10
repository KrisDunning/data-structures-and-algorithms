'use strict';
const { GraphImplementation } = require('./graph');

describe(' Graph Implementation', () => {

  it('Node can successfully be aded to the graph', () => {
    const graph = new GraphImplementation();
    graph.addNode('A');
    expect(graph.size()).toBe(1);
  });

  it('An Edge can be successfully added to the graph', () => {
    const graph = new GraphImplementation();
    const A = graph.addNode('A');
    const B = graph.addNode('B');
    graph.addEdge(A, B, 1);
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
    const A = graph.addNode('A');
    const B = graph.addNode('B');
    graph.addEdge(A, B, 1);
    expect(graph.getNeighbors(A)[0]).toMatchObject({ "node": { "value": "B" }, "weight": 1 });
    expect(graph.getNeighbors(B)).not.toMatchObject({ "node": { "value": "B" }, "weight": 1 });
  });
  it('Neighbors are returned with the weight between nodes included', () => {
    const graph = new GraphImplementation();
    const A = graph.addNode('A');
    const B = graph.addNode('B');
    graph.addEdge(A, B, 1);
    expect(graph.getNeighbors(A)[0]).toHaveProperty('weight', 1);
  });
  it('The proper size is returned representing the number of nodes in the graph', () => {
    const graph = new GraphImplementation();
    graph.addNode('A');
    graph.addNode('B');
    expect(graph.size()).toBe(2);
  });
  it('A graph with only one node and edge can be properly returned', () => {
    const graph = new GraphImplementation();
    const A = graph.addNode('A');
    graph.addEdge(A, A, 3);
    expect(graph.size()).toBe(1);
    expect(graph.getNeighbors(A)[0]).toHaveProperty('weight', 3);
  });
  it('Traverse the graph utilizing a breadth first approach', () => {
    const graph = new GraphImplementation();
    const pandora = graph.addNode('Pandora');
    const arendelle = graph.addNode('Arendelle');
    const metroville = graph.addNode('Metroville');
    const monstropolis = graph.addNode('Monstropolis');
    const narnia = graph.addNode('Narnia');
    const naboo = graph.addNode('Naboo');
    graph.addEdge(pandora, arendelle);
    graph.addEdge(arendelle, metroville);
    graph.addEdge(arendelle, monstropolis);
    graph.addEdge(metroville, arendelle);
    graph.addEdge(metroville, monstropolis);
    graph.addEdge(metroville, narnia);
    graph.addEdge(metroville, naboo);
    graph.addEdge(monstropolis, arendelle);
    graph.addEdge(monstropolis, narnia);
    graph.addEdge(monstropolis, naboo);
    graph.addEdge(narnia, metroville);
    graph.addEdge(narnia, naboo);
    graph.addEdge(naboo, metroville);
    graph.addEdge(naboo, narnia);
    graph.addEdge(naboo, monstropolis);
    let returnedValues = graph.breadthFirst(pandora);
    expect(returnedValues).toStrictEqual([
      'Pandora',
      'Arendelle',
      'Metroville',
      'Monstropolis',
      'Narnia',
      'Naboo'
    ]);
  });
  it('Can return correct info for the businessTrip() function', () => {
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

    expect(graph.businessTrip(graph, [metroville, pandora])).toBe(82);
    expect(graph.businessTrip(graph, [naboo, pandora])).toBe(null);
    expect(graph.businessTrip(graph, [arendelle, monstropolis, naboo])).toBe(115);
  });
  it('Can properly return a array of values from a graph in a depth first manner', () => {
    const graph = new GraphImplementation();
    const a = graph.addNode('A');
    const b = graph.addNode('B');
    const c = graph.addNode('C');
    const d = graph.addNode('D');
    const e = graph.addNode('E');
    const f = graph.addNode('F');
    const g = graph.addNode('G');
    const h = graph.addNode('H');

    graph.addEdge(a, d);
    graph.addEdge(a, b);
    graph.addEdge(b, a);
    graph.addEdge(b, c);
    graph.addEdge(b, d);
    graph.addEdge(c, b);
    graph.addEdge(c, g);
    graph.addEdge(d, a);
    graph.addEdge(d, b);
    graph.addEdge(d, e);
    graph.addEdge(d, f);
    graph.addEdge(d, h);
    graph.addEdge(e, d);
    graph.addEdge(f, d);
    graph.addEdge(f, h);
    graph.addEdge(g, c);
    graph.addEdge(h, d);
    graph.addEdge(h, f);

    expect(graph.depthFirst(a)).toStrictEqual([
      'A', 'B', 'C',
      'G', 'D', 'H',
      'F', 'E'
    ]);
  });
});

