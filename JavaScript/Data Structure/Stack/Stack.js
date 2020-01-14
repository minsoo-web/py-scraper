class Stack {
  constructor() {
    this._arr = [];
  }
  push(item) {
    this._arr.push(item);
  }
  pop() {
    console.log(this._arr.pop());
  }
  peek() {
    console.log(this._arr[this._arr.length - 1]);
  }
}

const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);

stack.pop(); // 4
stack.pop(); // 3
stack.peek(); // 2
stack.pop(); // 2
