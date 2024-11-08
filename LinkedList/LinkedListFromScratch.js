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

  //go to that index and change that value to that index
  set(index, value) {
    let temp = this.get(index);
    if (temp) {
      temp.value = value;
      return true;
    }
    return false;
  }

  //inserting a new node with a particular value in a particular index
  insert(index, value) {
    //beginning
    if (index === 0) return this.unshift(value);
    //at the end
    if (index === this.length) return this.push(value);
    //out of the boundaries
    if (index < 0 || index > this.length) return false;
    //anywhere in the list
    const newNode = new Node(value);
    const temp = this.get(index - 1);
    //moving newNode.next to the temp.next and then the temp.next to the newNode
    newNode.next = temp.next;
    temp.next = newNode;
    this.length++;
    return true;
  }

  remove(index) {
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();
    if (index < 0 || index >= this.length) return undefined;
    let before = this.get(index - 1);
    let temp = before.next;
    before.next = temp.next;
    temp.next = null;
    this.length--;
    return temp;
  }

  reverse() {
    //taking head and tail to switch them
    let temp = this.head;
    this.head = this.tail;
    this.tail = temp;
    //reversing the nodes is the HARD part compa
    let next = temp.next;
    let prev = null;
    for (let i = 0; i < this.length; i++) {
      next = temp.next;
      temp.next = prev;
      prev = temp;
      temp = next;
    }
  }
}

let myLinkedList = new LinkedList(13);
myLinkedList.push(20);
myLinkedList.push(10);
console.log(myLinkedList.get(2));
console.log(`👋`);
