// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(data, next) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor(head = null) {
    this.head = head;
  }

  insertFirst(data) {
    const newNode = new Node(data, this.head);
    this.head = newNode;
  }

  size() {
    let count = 0;
    let node = this.head;
    while (node) {
      count++;
      node = node.next;
    }
    return count;
  }

  getFirst() {
    return this.head;
  }

  getLast() {
    if (!this.head) {
      return null;
    }

    let node = this.head;
    while (node.next) {
      node = node.next;
    }
    return node;
  }

  clear() {
    this.head = null;
  }

  removeFirst() {
    this.head = this.head.next;
  }

  removeLast() {
    // if only head, clear the list
    if (this.size() <= 1) {
      this.clear();
      return;
    }

    let previousNode = this.head;
    let nextNode = this.head.next;
    while (nextNode.next) {
      previousNode = nextNode;
      nextNode = nextNode.next;
    }
    previousNode.next = null;
  }

  insertLast(data) {
    const lastNode = this.getLast();
    const newNode = new Node(data, null);
    if (!lastNode) {
      this.head = newNode;
      return;
    }
    lastNode.next = newNode;
  }

  getAt(index) {
    let currentIndex = 0;
    let node = this.head;
    while (node) {
      if (currentIndex === index) {
        return node;
      }
      currentIndex++;
      node = node.next;
    }
    return null;
  }

  removeAt(index) {
    if (!this.head) {
      return;
    }

    if (index == 0) {
      this.head = this.head.next;
    }

    let currentNode = this.head;
    let nextNode = this.head.next;
    let currentIndex = 1;

    while (nextNode) {
      if (currentIndex === index) {
        currentNode.next = nextNode.next;
        return;
      }
      currentNode = nextNode;
      nextNode = nextNode.next;
      currentIndex++;
    }
  }

  insertAt(data, index) {
    const newNode = new Node(data, null);
    if (index === 0) {
      newNode.next = this.head;
      this.head = newNode;
      return;
    }

    const previousNode = this.getAt(index - 1) || this.getLast();
    newNode.next = previousNode.next;
    previousNode.next = newNode;
  }

  forEach(fn) {
    let node = this.head;
    while (node) {
      fn(node);
      node = node.next;
    }
  }
}



module.exports = { Node, LinkedList };
