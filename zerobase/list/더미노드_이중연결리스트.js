/**
 * 
 * 
 * */

class Node {
    constructor(data, prev = null, next = null){
        this.data = data;
        this.prev = prev;
        this.next = next;
    }
}

class DummyNodeDoubleLinkedList {
    constructor() {
        this.head = new Node(null,null,null);
        this.tail = new Node(null,null,null);
        // 노드 연결
        this.head.next = this.tail;
        this.tail.prev = this.head;

        this.size = 0;
    }

    insertAt(idx,data){
        let newNode = new Node(data, null, null);

        let count = 0; // 몇번째인지 확인.
        let cur = this.head;

        while(cur != null){
            if(count == idx){
                break;
            }
            cur = cur.next;
            count++;
        }

        newNode.prev = cur.prev;
        newNode.next = cur;

        cur.prev.next = newNode;
        cur.prev = newNode;

        this.size++;
    }

    remove(data){
        if(this.isEmpty()){
            return;
        }
        let cur = this.head;
        while(cur != null){
            if(cur.data == data){
                cur.prev.next = cur.next;
                cur.next.prev = cur.prev;
    
                cur.next = null;
                cur.prev = null;
            }
            cur = cur.next;
        }
        this.size--;
    }

    search(data){
        let count = 0;
        let cur = this.head;

        while(cur != null){
            if(cur.data == data){
                console.log(`${count}번째에 ${data}가 있습니다.`);
                return;
            }
            cur = cur.next;
            count++;
        }
        console.log(`${data}가 존재하지 않습니다.`);
    }

    print(){
        let cur = this.head;

        console.log(`=== 크기" ${this.getSize()}===`);
        while(cur != null){
            console.log(cur.data);
            cur = cur.next;
        }
    }

    getSize() {
        return this.size;
    }

    isEmpty(){
        return !this.size;
    }
}

const dummyNodeDoubleLinkedList = new DummyNodeDoubleLinkedList();
dummyNodeDoubleLinkedList.insertAt(1, '월');
dummyNodeDoubleLinkedList.print();
dummyNodeDoubleLinkedList.insertAt(2, '화');
dummyNodeDoubleLinkedList.print();

dummyNodeDoubleLinkedList.search('월');
dummyNodeDoubleLinkedList.remove('월');
dummyNodeDoubleLinkedList.print();
dummyNodeDoubleLinkedList.remove('화');
dummyNodeDoubleLinkedList.print();
