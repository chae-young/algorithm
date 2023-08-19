import { DoublyLinkedList } from "./DoublyLinkedList.mjs";

class HashData{
    constructor(key,value){
        this.key = key;
        this.value = value;
    }
}

class HashTable{
    constructor(){
        this.arr = [];
        for(let i = 0; i < 10; i++){
            this.arr[i] = new DoublyLinkedList();
        }
    }

    hashfunction(number){
        return number % 10
    }

    set(key,value){
        this.arr[this.hashfunction(key)].insertAt(0,new HashData(key,value))
    }

    get(key){
        let currentNode = this.arr[this.hashfunction(key)].head
        while(currentNode != null){
            if(currentNode.data.key == key){
                return currentNode.data.value
            }
            currentNode = currentNode.next
        }
        return null
    }

    remove(key){
        let list = this.arr[this.hashfunction(key)];
        let currentNode = list.head;
        let deletedIndex = 0;
        while(currentNode != null){
            if(currentNode.data.key == key){
                return list.deleteAt(deletedIndex)
            }
            currentNode = currentNode.next;
            deletedIndex++
        }
        return null
    }
}

export {HashTable}