class Node{
  constructor(value){
    this.value = value;
    this.next = null;
  }
}

class LinkedList{
  constructor(){
    this.head = null;
    this.length = 0;
  }

  add(value){
    var node = new Node(value);
    if(this.head===null){
      this.head = node;
      this.length++;
    }
    else{
      let current = this.head;
      while(current.next){
        current = current.next;
      }
      current.next = node;
      this.length++;
    }
  }
  view(){
    if(this.length==1){
      console.log(this.head.value);
    }
    else{
      let current = this.head;
      var output = '';
      while(current.next){
        output+= current.value + '-->';
        current = current.next;
      }
      output+=current.value + '-->'+current.next;
      console.log(output);
    }
  }

  reverse(){
    var nextState = new Node();
    var current = this.head, previousState;
    while(current.next){
      nextState = current.next;
      current.next = previousState;
      previousState = current;
      current = nextState;
    }
    current.next = null;
  }

  removeDupe(){
    var hashSet = {};
    hashSet[this.head.value] = null;

    let current = this.head;
    while(current.next){
      // 1-> 2 -> 3
      if(hashSet.hasOwnProperty(current.next.value)){
        current.value = current.next.value;
        current.next = current.next.next;
        this.length--;
      }
      else{
        current = current.next;
      }
      hashSet[current.value] = null;
    }
  }
}

var ll = new LinkedList();
ll.add(2);
ll.add(3);
ll.add(4);
ll.add(5);
ll.add(7);
ll.add(7);
ll.add(8);
ll.view();
ll.removeDupe();
ll.view();
ll;
