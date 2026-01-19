import { breadthFirstSearch } from "./bfs.js";

const graph = {
  "you": ["alice", "bob", "mark"],
  "alice": ['peggy', 'julia'],
  "bob": ['peggy', 'antonio'],
  "mark": ['jack'],
  "peggy": [],
  "julia": [],
  "antonio": [],
  "jack": [],
}

function isMangoSeller(name) {
  return name === "jack";
}

const result = breadthFirstSearch(graph, "you", isMangoSeller);
console.log({result});
