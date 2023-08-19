
import {HashSet} from './HashSet.mjs'

let hashSet = new HashSet();
console.log(`isempty: `,hashSet.isEmpty())

console.log('데이터삽입')
hashSet.add(1)
hashSet.add(1)
hashSet.add(123)
hashSet.add(512)
hashSet.printAll()
console.log(`isempty: `,hashSet.isEmpty())

console.log('데이터체크')
console.log('isContain',hashSet.isContain(1))

console.log('데이터제거')
hashSet.remove(1)
hashSet.printAll()
console.log(`isempty: `,hashSet.isEmpty())

console.log('데이터체크2')
console.log('isContain',hashSet.isContain(1))

console.log('clear')
hashSet.clear()
hashSet.printAll()
console.log(`isempty: `,hashSet.isEmpty())