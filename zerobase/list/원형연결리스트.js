class Node {
    constructor(data, prev = null, next= null) {
        this.data = data;
        this.prev = prev;
        this.next = next;
    }   
}

class CircularLinkedList {
    constructor() {
        this.head = new Node(null, null, null);
        this.size = 0;
    }

    insert(idx,data) {
        let newNode = new Node(data, null, null);
        if(this.isEmpty()){
            this.head.next = newNode;
            this.head.prev = newNode;

            newNode.prev = this.head;
            newNode.next = this.head;

            this.size++;
            return;
        }
        /**
         * ㅁ - ㅁ
         *.ㅣ   ㅣ
         * ㅁ - ㅁ
        */

         let cur = this.head;
         let count = 0;

         let isStart = false; // 시작했는지를 알기위해 (원형이라)
         while(!isStart || cur != this.head) { // 다시 처음으로 돌아 왔을 경우의 조건문.
            isStart = true;
            if(count == idx){
                break;
            }

            cur = cur.next;
            count++;
         }
         // 찾았다면 집어넣어야죠
         newNode.next = cur;
         newNode.prev = cur.prev;

         cur.prev.next = newNode;
         cur.prev = newNode;

         this.size++;
    }
    remove(data) {
        // 하나만 잇을경우
        if(this.getSize() == 1) {
            this.head.next = this.head;
            this.head.prev = this.head;

            this.size--;
            return;
        }
        let cur = this.head;
        let isStart = false;
        while(!isStart || cur != this.head){
            isStart = true;

            if(cur.data == data){
                break;
            }
            cur = cur.next;
        }
        cur.prev.next = cur.next;
        cur.next.prev = cur.prev;

        this.size--;
    }
    search(data) {
        let cur = this.head;
        let count = 0;

        let isStart = false;
        while(!isStart || cur != this.head){
            isStart = true;

            if(cur.data == data){
                console.log(`${count}번째에 ${data}가 있습니다.`)
                return;
            }
            cur = cur.next;
            count++;
        }
        console.log(`${data}가 존재하지 않습니다.`)
    }
    print() {
        let cur = this.head;
        let isStart = false;

        while(!isStart || cur != this.head) { 
            isStart = true;
            console.log(cur.data);
            cur = cur.next;
            //count++;
        }
    }
    getSize() {
        return this.size;
    }
    isEmpty() {
        return !this.size;
    }
}

const cl = new CircularLinkedList();

cl.insert(1,'화');
cl.print();
cl.insert(1,'월');
cl.print();
cl.search('월')
cl.search('수')
cl.remove('월')
cl.print();
cl.remove('화')
cl.print();