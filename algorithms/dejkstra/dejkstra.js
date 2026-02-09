export function dejkstraSearch(graph, head, end) {
  const initNeighbors = graph[head];
  const costs = {};
  const parents = {};
  const visited = [];

  costs[end] = Infinity;

  Object.keys(initNeighbors).forEach(n => {
    costs[n] = initNeighbors[n];
    parents[n] = head;
  });

  let node = findCheapest(costs, visited);

  while (node) {
    const cost = costs[node];
    const neighbors = graph[node];
    for (let n of Object.keys(neighbors)) {
      const newCost = cost + neighbors[n];

      if (newCost < costs[n] || !costs[n]) {
        costs[n] = newCost;
        parents[n] = node;
      }
    }

    visited.push(node);
    node = findCheapest(costs, visited);
  }

  let result = [end];
  let curr = parents[end];

  while (curr) {
    result.push(curr);
    curr = parents[curr];
  }

  return result;
}

function findCheapest(costs, visited) {
  let res;
  let min = Infinity;
  for (let n of Object.keys(costs)) {
    if (costs[n] < min && !visited.includes(n)) {
      min = costs[n];
      res = n;
    }
  }
  return res;
}