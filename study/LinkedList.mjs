//연결리스트 데이터를 담을 노드를 연결하는 구조.
class Node{
    constructor(data,next = null){
        this.data = data;
        this.next = next;
    }
}

class LinkedList{
    constructor(){
        this.head = null;
        this.count = 0; //저장된 노드의수
    }
    printAll(){
        let currentNode = this.head;
        let text = '[';

        while(currentNode != null){
            text += currentNode.data;
            currentNode = currentNode.next
            if(currentNode != null){
                text += ","
            }
        }
        text += ']'
        console.log(text)
    }
    clear(){
        this.head = null;
        this.count = 0;
    }
    // 원하는 인덱스에 데이터를 삽입하는 함수
    insertAt(index,data){
        if(index > this.count || index < 0) {
            throw new Error('범위를 넘어갔습니다')
        }
        let newNode = new Node(data)
        //새로 생성한 노드를 연결
        //앞부분에 삽입하는 경우
        if(index === 0){
            newNode.next = this.head;
            this.head = newNode;
        }else{
            let currentNode = this.head;
            //index가 3이라고 했을때 그 전까지 간다
            for(let i = 0; i < index - 1; i++){
                currentNode = currentNode.next;
            }
            newNode.next = currentNode.next;
            currentNode.next = newNode
        }
        this.count++
    }
    //가장 마지막 데이터 뒤에 삽입하는 기능
    insertLast(data){
        this.insertAt(this.count,data);
    }

    deleteAt(index){
        if(index > this.count || index < 0) {
            throw new Error('제거할수없어요')
        }
        let currentNode = this.head

        if(index === 0){
            let deletedNode = this.head;
            this.head = this.head.next;
            this.count--;
            return deletedNode
        }else{
            //index가 3이라고 했을때 그 전까지 간다
            for(let i = 0; i < index - 1; i++){
                currentNode = currentNode.next;
            }  
            let deletedNode = currentNode.next;  
            currentNode.next = currentNode.next.next;
            this.count--;
            return deletedNode;
        }
    }
    deleteAtLast(){
        return this.deleteAt(this.count - 1)
    }
    getNodeAt(index){
        if(index > this.count || index < 0) {
            throw new Error('범위를 넘어갔습니다')
        }
        let currentNode = this.head;
        for(let i = 0; i < index; i++){
            currentNode = currentNode.next
        }
        return currentNode;
    }
}

export {Node,LinkedList}