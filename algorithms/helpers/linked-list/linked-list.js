export class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  prepend(value) {
    const node = new LinkedListNode(value, this.head)
    this.head = node;

    if (!this.tail) {
      this.tail = node;
    }

    return this;
  }

  append(value) {
    const node = new LinkedListNode(value, null);
    if (!this.head) {
      this.head = node;
    }
    if (!this.tail) {
        this.tail = node;
    }

    this.tail.next = node;
    this.tail = node;

    return this;
  }
}

export class LinkedListNode {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }

  toString() {
    return `${this.value}`
  }
}