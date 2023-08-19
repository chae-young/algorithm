import { DoublyLinkedList } from "./DoublyLinkedList.mjs";

class Deque{
    constructor(){
        this.list = new DoublyLinkedList();
    }
    printAll(){
        this.list.printAll()
    }
    addfirst(data){
        this.list.insertAt(0,data);
    }
    removeFirst(){
        return this.list.deleteAt(0)
    }
    addLast(data){
        this.list.insertAt(this.list.count,data)
    }
    removeLast(){
        return this.list.deleteAtLast()
    }
    isEmpty(){
        return (this.list.count == 0)
    }
}

export {Deque}