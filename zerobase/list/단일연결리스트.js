/* 
    리스트
    - 링크를 이용하여 노드를 순서대로 한 줄로 저장하는 자료구조.
    1) head: 가장 처음 데이터, tail: 마지막 데이터
    2) 배열보다 빠른 삽입/삭제 속도 (노드만 바꾸어주면 되기때문)
    3) 검색은 배열보다 느리다.
    4) 기초 자료구조
*/

class Node {
    constructor(data, next = null){
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor(){
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    insertFirst(data) {
        let newNode = new Node(data, null);

        // 비어 있으면 새로운 노드를 가리킨다.
        if(this.isEmpty()){
            this.head = newNode;
            this.tail = newNode;
            this.size++;
            return;
        }

        newNode.next = this.head;
        this.head = newNode;
        this.size++;

    }
    insertLast(data) {
        let newNode = new Node(data, null);

        if(this.isEmpty()){
            this.head = newNode;
            this.tail = newNode;
            this.size++;
            return;
        }

        this.tail.next = newNode;
        this.tail = newNode;
        return;
    }
    insertAt(idx,data) {
        let newNode = new Node(data,null);
        
        if(this.isEmpty()){
            this.head = newNode;
            this.tail = newNode;
            this.size++;
            return;
            // 1번으로 들어갔을 경우를 해줘야함.
        }else if(idx == 1){
            this.insertFirst(data);
            return;
        }
        
        let cur = this.head;
        let count = 1;

        while(cur != null){
            if(count + 1 == idx){
                break;
            }
            cur = cur.next;
            count++;
        }

        newNode.next = cur.next;
        cur.next = newNode;
        this.size++;
    }
    removeFirst() {
        if(this.isEmpty()){
            return;
        }
        let cur = this.head;
        this.head = this.head.next;
        cur.next = null;

        this.size--;
    }
    removeLast() {
        /* 
            cur next가 tail을 가르키게 한다
            cur이 목요일일 경우 목요일의 next가 tail
         */
        if(this.isEmpty()){
            return;
        }else if(this.getSize() == 1){ // 하나 일 경우
            this.head = null;
            this.tail = null;
            this.size--;
            return;
        }

        let cur = this.head;
        while(cur != null){
            if(cur.next == this.tail){
                break;
            }
            cur = cur.next;
        }
        cur.next = null;
        this.tail = cur;
        this.size--;
        
    }
    remove(data){
        if(this.isEmpty()){
            return;
        }
        let cur = this.head;
        if(cur.data == data){ // 첫번째 데이터를 삭제할경우.
            // head가 next.로 이동
            this.head = cur.next
        }else{
            while(cur != null){
                // 이대로 값 검색이 안되고 끝까지 왔다면...
                if(cur.next == null){
                    return;
                }
                if(cur.next.data == data){
                    break;
                }
                cur = cur.next;
            }
            cur.next = cur.next.next;
        }
        this.size--;
    }
    search(data) {
        let idx = 1;
        let cur = thie.head;

        while(cur != null){
            if(cur.data == data){
                console.log(`${idx}번째에 ${data}가 있습니다.`);
                return;
            }
            cur = cur.next;
            idx++;
        }
        console.log(`${data}가 존재하지 않습니다.`)
    }
    print(){
        let cur = this.head;
        console.log(`====크기 : ${this.getSize()}====`)
        while(cur != null){
            // 다 돌면 끝에가 null 이기 때문.
            console.log(cur.data);
            cur = cur.next;
        }
    }
    getSize() {
        return this.size;
    }
    isEmpty() {
        return !this.size;
    }
}