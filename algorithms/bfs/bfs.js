export function breadthFirstSearch(graph, name, callback) {
  let queue = graph[name];
  const visited = [];

  while(queue.length > 0) {
    const person = queue.shift();
    if (!visited.includes(person)) {
      if (callback(person)) {
        return person;
      } else {
        queue = queue.concat(graph[person]);
        visited.push(person);
      }
    }
  }

  return false;
}