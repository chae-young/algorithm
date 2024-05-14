/* 
    Class: Hash Map
    Function: set(key,value), del(key), get(key), hashing(key), print

    기본 해시 테이블은 충돌이 해결되지 않는다.
    해시 테이블에 기존 데이터가 있으면 못들어감
*/

class HashMap {
    constructor(){
        this.bucket = []
        this.size = 6;
        this.bucket.length = this.size
        this.bucket = this.bucket.fill(null).map(el => ({}))
    }
    set(key,value){
        console.log(`[set] key: ${key}, value: ${value}`)
        let hash = this.hashing(key)
        if(this.isEmpty(this.bucket[hash])){
            this.bucket[hash] = {name: key, phoneNumber: value}
        }else{
            console.log('충동일 일어났습니다', this.bucket[hash].name)
        }
    }
    get(key){
        console.log(`[get] key: ${key}`)
        let hash = this.hashing(key)
        if(this.isEmpty(this.bucket[hash])){
            console.log('데이터가 없습니다')
        }else if(this.bucket[hash].name != key){
            console.log('다른값이 이미 존재합니다')
        }else{
            console.log(this.bucket[hash])
        }
    }
    del(key){
        console.log(`[del] key: ${key}`)
        let hash = this.hashing(key);
        if(this.isEmpty(this.bucket[hash])){
            console.log('데이터가 없습니다')
        }else if(this.bucket[hash].name != key){
            console.log('다른값이 이미 존재합니다')
        }else{
            this.bucket[hash] = {}
        }        
    }
    hashing(key){
        // hash funtion: 각 자리의 ascii 값을 모두 더하고 buket size로 나눈 값 -> 해싱값
        let ret = 0;
        for(let i = 0; i < key.length; i++){
            ret += key[i].charCodeAt();
        }

        ret = ret % this.size
        return ret
    }
    print(){
        console.log('===print====')
        console.log(this.bucket)
    }
    // 데이터가 비어있는지?
    isEmpty(data){
        // 문자열로 비교. 단순히 값이 같은지 안같은지 비교.
        return JSON.stringify(data) == JSON.stringify({})
    }
}

const hashMap = new HashMap()
hashMap.set('john',123)
hashMap.set('kaiz',345)

hashMap.print()
hashMap.get('john')

hashMap.del('john')
hashMap.print()
// hashMap.set('kaiz',345)
// hashMap.print()
