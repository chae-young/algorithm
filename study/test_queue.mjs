import { Queue } from "./Queue.mjs";

let queue = new Queue()

queue.enqueue(1)
queue.enqueue(2)
queue.enqueue(3)

console.log(queue.front().data)

queue.dequeue()
queue.dequeue()
queue.dequeue()

console.log(`isEmpty: ${queue.isEmpty()}`)