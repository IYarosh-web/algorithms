import {dejkstraSearch} from "./dejkstra.js"

const graph = {
  start: {
    a: 5,
    b: 2
  },
  a: {
    d: 2,
    c: 4,
  },
  b: {
    a: 8,
    d: 7,
  },
  c: {
    d: 6,
    end: 3,
  },
  d: {
    end: 1,
  },
  end: {}
};

const graphB = {
  start: {
    a: 10,
  },
  a: {
    b: 20,
  },
  b: {
    end: 30,
    c: 1,
  },
  c: {
    a: 1,
  },
  end: {}
};

console.log(dejkstraSearch(graphB, "start", "end"));