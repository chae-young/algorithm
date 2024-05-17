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
        // 비어있으면?
        if(this.isEmpty(this.bucket[hash])){
            this.bucket[hash] = {name: key, phoneNumber: value}
            return
        }
        // 비어있지 않으면 순차적으로 조회
        console.log('충돌이 일어났습니다.')
        /* 
            jhon의 hash가 5이고 kaiz의 hash가 5라면 둘은 충돌난다.
            그래서 다음 index 0번으로 가서 순회를 해야함.
            즉, 다음 인덱스로 가서 i가 hash값이 되지 않을때 까지 i는 계속 추가.
            나로 돌아오기 전까지 버킷을 계속 순회.
        */
        for(let i = (hash + 1) % this.size; i != hash; i = (i + 1) % this.size){
            console.log('버킷 순회를 시작합니다 :', i)
            // 비어 있으면?
            if(this.isEmpty(this.bucket[i])){
                this.bucket[i] = {name: key, phoneNumber: value}
                return
            }
        }
        // 순회를 다 했는데도 어딘가에 못들어간다면 (버킷이 가득 찬경우)
        console.log('버킷이 가득 찼습니다.')

    }
    get(key){
        console.log(`[get] key: ${key}`)
        let hash = this.hashing(key)
        // 현재 해시의 버킷의 네임과 key값이 같으면?
        if(this.isSame(this.bucket[hash].name, key)){
            console.log(this.bucket[hash])
            return
        }
        
        // 다를 경우
        console.log('충돌이 일어났습니다',this.bucket[hash].name)
        for(let i = (hash + 1) % this.size; i != hash; i = (i + 1) % this.size){
            console.log('버킷순회를 시작합니다 : ',i)
            if(this.isSame(this.bucket[i].name, key)){
                console.log(this.bucket[i])
                return
            }
        }
        // 찾는데도 없다
        console.log('찾는값이 없습니다.')
    }
    del(key){
        console.log(`[del] key: ${key}`)
        let hash = this.hashing(key);

        if(this.isSame(this.bucket[hash].name,key)){
            this.bucket[hash] = {}
            return
        }
        
        console.log('충돌이 일어났습니다', this.bucket[hash].name)
        for(let i = (hash + 1) % this.size; i != hash; i = (i + 1) % this.size){
            console.log('버킷순회를 시작합니다 :', i)
            if(this.isSame(this.bucket[i].name,key)){
                this.bucket[i] = {}
                return
            }
        }

        console.log('지울 값이 없습니다')
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
    // 데이터가 같은지?
    isSame(d1,d2){
        return !this.isEmpty() && d1 == d2
    }
}

const hashMap = new HashMap()
hashMap.set('john',4)
hashMap.print()
hashMap.set('kai',33)
hashMap.print()
