// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor(head) {
    this.head = head;
  }
  insertFirst(data) {
    const newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
      return;
    }
    newNode.next = this.head;
    this.head = newNode;
  }
  size() {
    let count = 0;
    let currentNode = this.head;
    while (currentNode) {
      count += 1;
      currentNode = currentNode.next;
    }
    return count;
  }
  getFirst() {
    return this.head;
  }
  getLast() {
    if (!this.head) {
      return;
    }
    let currentNode = this.head;
    while (currentNode.next) {
      currentNode = currentNode.next;
    }
    return currentNode;
  }
  clear() {
    this.head = null;
  }
  removeFirst() {
    if (!this.head) {
      return;
    }
    this.head = this.head.next;
  }
  removeLast() {
    if (!this.head) {
      return;
    }

    if (!this.head.next) {
      this.head = null;
      return;
    }

    let prevNode = this.head;
    let nextNode = this.head.next;
    while (nextNode.next) {
      prevNode = nextNode;
      nextNode = nextNode.next;
    }
    prevNode.next = null;
  }
  insertLast(data) {
    const lastNode = this.getLast();
    if (!lastNode) {
      this.head = new Node(data);
      return;
    }
    lastNode.next = new Node(data);
  }
  getAt(index) {
    if (!index) {
      return this.head;
    }
    let currentNode = this.head;
    let count = 0;
    while (currentNode) {
      if (count === index) {
        return currentNode;
      }
      currentNode = currentNode.next;
      count += 1;
    }
    return null;
  }
  removeAt(index) {
    if (index > this.size() - 1) {
      return;
    }

    if (!this.head) {
      return;
    }

    if (index === 0) {
      this.head = this.head.next;
      return;
    }

    const prevNode = this.getAt(index - 1);
    const nodeToBeRemoved = prevNode.next;
    if (nodeToBeRemoved && nodeToBeRemoved.next) {
      prevNode.next = nodeToBeRemoved.next;
    } else {
      prevNode.next = null;
    }
  }
  insertAt(data, index) {
    const newNode = new Node(data);
    if (index === 0) {
      if (this.head) {
        newNode.next = this.head;
        this.head = newNode;
        return;
      }
      this.head = newNode;
      return;
    }

    const listSize = this.size();
    if (index > listSize - 1) {
      const prevNode = this.getAt(listSize - 1);
      prevNode.next = newNode;
      return;
    }

    const prevNode = this.getAt(index - 1);
    const nextNode = prevNode.next;
    newNode.next = nextNode;
    prevNode.next = newNode;
  }
  forEach(fn) {
    let currentNode = this.head;
    while (currentNode) {
      fn(currentNode);
      currentNode = currentNode.next;
    }
  }
}

module.exports = { Node, LinkedList };
