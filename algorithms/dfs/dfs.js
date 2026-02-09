export function deepFirstSearch(graph, name, callback) {
  let pile = graph[name];
  const visited = [];

  while (pile.length > 0) {
    const neighbor = pile.pop();

    if (!visited.includes(neighbor)) {
      if (callback(neighbor)) {
        return neighbor;
      } else {
        visited.push(neighbor);
        pile = pile.concat(graph[neighbor]);
      }
    }
  }

  return false;
}