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

  //push || append
  push(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  //removing first item O(n)
  pop(value) {
    // 1️⃣ empty linked list
    if (!this.head) return undefined;
    // 2️⃣ two or more items
    let temp = this.head;
    let pre = this.head;
    while (temp.next) {
      pre = temp;
      temp = temp.next;
    }
    //this.tail is going to be penultimate node, this.tail.next then is null because is the end
    this.tail = pre;
    this.tail.next = null;
    this.length--;
    //3️⃣ one node if this.length is 0, this.head and this.tail should point to null too
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    //returning the pop node aka temp
    return temp;
  }

  //prepend || unshift
  unshift(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      newNode.next = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  //removing first node
  shift() {
    //1️⃣ if we don't have any items in the list
    if (!this.head) return undefined;
    //2️⃣ having two or more nodes on the linked list
    let temp = this.head;
    this.head = this.head.next;
    this.length--;
    //3️⃣1️ only having one node
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    temp.next = null;
    return temp;
  }

  //getting a particular node at certain index
  get(index) {
    if (index < 0 || index >= this.length) return undefined;
    let temp = this.head;
    //for loop to iterate over the linked list
    for (let i = 0; i < index; i++) {
      temp = temp.next;
    }
    return temp;
  }
}

let myLinkedList = new LinkedList(13);
myLinkedList.push(20);
myLinkedList.push(10);
console.log(myLinkedList.get(2));
console.log(`👋`);
