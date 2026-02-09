import { BSTTree, printTree } from "./bst-tree.js";

const tree = new BSTTree(5);

tree.add(2);
tree.add(6);
tree.add(7);
tree.add(8);
tree.add(9);
tree.add(10);
tree.add(1);
tree.add(3);

printTree(tree.head);
