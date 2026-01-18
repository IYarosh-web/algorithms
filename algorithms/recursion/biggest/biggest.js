export function findBiggest(linkedList) {
  return checkItem(linkedList.head, linkedList.head.value);
}

function checkItem(node, currentBiggest) {
  const biggestValue = node.value > currentBiggest ? node.value : currentBiggest;

  if (node.next === null) {
    return biggestValue;
  }

  return checkItem(node.next, biggestValue);
}