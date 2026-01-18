function countItem(linkedListNode) {
  if (linkedListNode.next === null) {
    return 1;
  } else {
    return 1 + countItem(linkedListNode.next);
  }
}

export function countItems(linkedList) {
  return countItem(linkedList.head);
}