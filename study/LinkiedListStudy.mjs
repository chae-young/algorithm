class Node {
    constructor(data,next = null){
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor(){
        this.head = null; //연결리스트의 시작 노드.
        this.count = 0; //총 노드의 수를 저장
    }
    clear(){
        this.head = null;
        this.count = 0;
    }
    printAll(){
        let currentNode = this.head;
        let text = "[";
        while(currentNode != null){
            text += currentNode.data;
            currentNode = currentNode.next;
            if(currentNode != null){
                text += ','
            }
        }
        text += "]"
        console.log(text)
    }
    //내가 원하는 index에 data를 삽입하겠다! -> 노드를 삽입하겠다.
    inserAt(index,data) {
        if(index > this.count || index < 0){
            throw new Error('범위를 벗어났습니다.')
        }
        let newNode = new Node(data);
        //새 노드가 첫번째에 삽입해서 head가 새노드가 되는경우.
        if(index == 0){
            newNode.next = this.head;
            this.head = newNode
        }else{//중간에 새 노드를 삽입했을때 head의 next가 참조해서 가는경우
            let currentNode = this.head
            for(let i = 0; i < index - 1; i++){
                currentNode = currentNode.next;
            }
            newNode.next = currentNode.next
            currentNode.next = newNode;
        }
        this.count++
    }
    insertLast(data){
        this.inserAt(this.count,data)
    }
    deleteAt(index){
        if(index > this.count || index < 0) {
            throw new Error('제거할수없어요')
        }
        let currentNode = this.head; 
        if(index === 0){
            let deletedNode = this.head;
            this.head = this.head.next;
            this.count--;
            return deletedNode;
        }else{
            //index가 3이라고 했을때 그 전까지 간다
            for(let i = 0; i < index - 1; i++){
                currentNode = currentNode.next;
            }  
            let deletedNode = currentNode.next; // 제거 완
            currentNode.next = currentNode.next.next;
            this.count--;
            return deletedNode;
        }
    }
    deleteLast(){
        return this.deleteAt(this.count - 1);
    }
    getNodeAt(){
        if(index >= this.count || index < 0) {
            throw new Error('범위를 넘어갔습니다')
        }   
        let currentNode = this.head;
        for(let i = 0; i < index; i++){
            currentNode = currentNode.next
        }
        return currentNode             
    }
}

export {Node,LinkedList}