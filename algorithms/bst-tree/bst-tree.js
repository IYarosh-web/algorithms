export class BSTTree {
  constructor(value) {
    this.head = new TreeNode(value);
  }

  add(val) {
    let curr = this.head;
    
    while (true) {
      if (curr.val === val) {
        break;
      }
      
      if (val < curr.val) {
        if (curr.left) {
          curr = curr.left;
        } else {
          curr.left = new TreeNode(val);
          break;
        }
      }

      if (val > curr.val) {
        if (curr.right) {
          curr = curr.right
        } else {
          curr.right = new TreeNode(val);
        }
      }
    }
  }

  search(val) {
    let curr = this.head;
    while (true) {
      if (curr.val === val) {
        return true;
      }

      if (val < curr.val) {
        if (curr.left) {
          curr = curr.left;
        } else {
          return false;
        }
      }

      if (val > curr.val) {
        if (curr.right) {
          curr = curr.right;
        } else {
          return false;
        }
      }
    }
  }
}

class TreeNode {
  constructor(val, left, right) {
    this.val = val;
    
    this.left = left ?? null;
    this.right = right ?? null;
  }
}

export function printTree(node, prefix = '', isLeft = true) {
  if (!node) return;

  if (node.right) {
    printTree(
      node.right,
      prefix + (isLeft ? '│   ' : '    '),
      false
    );
  }

  console.log(
    prefix +
    (isLeft ? '└── ' : '┌── ') +
    node.val
  );

  if (node.left) {
    printTree(
      node.left,
      prefix + (isLeft ? '    ' : '│   '),
      true
    );
  }
}
