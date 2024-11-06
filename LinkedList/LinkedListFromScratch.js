class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }

  toString() {
    return `${this.value}`;
  }
}

class LinkedList {
  constructor(value) {
    const newNode = new Node(value);
    this.head = newNode;
    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    const newNode = new Node(value);
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }

  prepend(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this;
  }

  printList() {
    const array = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return array;
  }

  insert(index, value) {
    const newNode = new Node(value);
    if (this.length === 0) {
      newNode.prepend(value);
      return this.printList();
    }
    for (let i = 0; i < index; i++) {}
  }
}

let myLinkedList = new LinkedList(13);
myLinkedList.append(20);
myLinkedList.append(10);
myLinkedList.prepend(14);
console.log(myLinkedList.printList());
//myLinkedList.insert(2, 99);
