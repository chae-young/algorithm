import {LinkedList, Node} from './LinkiedListStudy.mjs'

const node1 = new Node(1)
const node2 = new Node(2)
const node3 = new Node(3)

node1.next = node2;
node2.next = node3;

console.log(node1.data)
console.log(node1.next.data)
console.log(node1.next.next.data)

let list = new LinkedList();
list.inserAt(0,0);
list.inserAt(1,1);
list.inserAt(2,2);
list.inserAt(3,3);
list.inserAt(4,4);
list.printAll()

list.clear()
list.printAll()

list.insertLast(0)
list.insertLast(1)
list.insertLast(2)
list.printAll()

list.deleteAt(0)
list.printAll()
