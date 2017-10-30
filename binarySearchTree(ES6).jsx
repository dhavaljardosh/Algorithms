
class Node{
  constructor(value,left=null,right=null){
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

class Tree{
  constructor(){
    this.root = null;
  }

  add(value){
    var node = new Node(value);
        if(!this.root){
          this.root = node;
        }
        else{
            var current = this.root;
            while(true){
              if(current.value >= value){
                //go left
                if(!current.left){
                  current.left = node;
                  break;
                }
                else{
                  current = current.left;
                }
              }
              else{
                //go right
                if(!current.right){
                  current.right = node;
                  break;
                }
                else{
                  current = current.right;
                }
              }
            }
        }
    }

    findPath(value){
        var route = [];
        let current = this.root;
        while(true){
            if(current.value===value){
                route.push(value);
                break;
            }
            else if(current.value>value){
                //go left
                if(!current.left){
                    break;
                }
                else{
                    route.push(current.value);
                    current = current.left;
                }
            }
            else{
                //go right
                if(!current.right){
                    break;
                }
                else{
                    route.push(current.value);
                    current = current.right;
                }
            }
        }
        return route;
    }
}



var c = new Tree();
c.add(5.7);
c.add(3);
c.add(7);
c.add(1);
c.add(5);
c.add(4.5);
c.add(5.5);
c.add(6);
c.add(11);
c.findPath(11);

// c.findPath(23);
