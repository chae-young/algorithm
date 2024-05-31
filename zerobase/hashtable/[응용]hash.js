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
        this.bucket = this.bucket.fill(null).map(el => ([]))
    }
    set(key,value){
        console.log(`[set] key: ${key}, value: ${value}`)
        let hash1 = this.hashing1(key);
        let hash2 = this.hashing2(key);

        this.bucket[hash1].push({ subhash: hash2, name: key, phoneNumber: value})
    }
    get(key){
        console.log(`[get] key: ${key}`)
        let hash1 = this.hashing1(key)
        let hash2 = this.hashing2(key)
        
        let len = this.bucket[hash1].length
        for(let i = 0; i < len; i++){
            // 서브해시가 같다면? 이름이(key) 같은지 비교 => 같은 서브 해시일경우에만 비교함
            if(this.isSame(this.bucket[hash1][i].subhash, hash2)){
                if(this.bucket[hash11][i].name == key){
                    console.log(this.bucket[hash1][i]);
                    return;
                }
            }
        }
        console.log('찾는 값이 없습니다.')
    }
    del(key){
        console.log(`[del] key: ${key}`)
        let hash1 = this.hashing1(key);
        let hash2 = this.hashing2(key);

        let len = this.bucket[hash1].length;
        for(let i = 0; i <len; i++){
            if(this.isSame(this.bucket[hash1][i].name, hash2)){
                if(this.bucket[hash1][i].name == key){
                    this.bucket[hash1].splice(i,1);
                    return;
                }
                
            }
        }
        console.log('지울 값이 없습니다.')
    }
    hashing1(key){
        // hash funtion: 각 자리의 ascii 값을 모두 더하고 buket size로 나눈 값 -> 해싱값
        let ret = 0;
        for(let i = 0; i < key.length; i++){
            ret += key[i].charCodeAt();
        }

        ret = ret % this.size
        return ret
    }
    hashing2(){
        // 해싱 값
        let ref = 0;
        let len = key.length;
        
        for(let i = 0; i < len; i++){
            ret = ret * 8 + key[i].charCodeAt();
        }
        ret = ret % this.size
        
    }
    print(){
        console.log('===print====')
        console.log(this.bucket)
    }
    // 데이터가 비어있는지?
    isEmpty(data){
        // 문자열로 비교. 단순히 값이 같은지 안같은지 비교.
        return JSON.stringify(data) == JSON.stringify([])
    }
    // 데이터가 같은지?
    isSame(d1,d2){
        // 버킷이 비지 않았으며 데이터들이 같은지?
        return !this.isEmpty() && d1 == d2
    }
}

const hashMap = new HashMap();
hashMap.set('john',1);
hashMap.print();
hashMap.set('kai',2);
hashMap.print();
hashMap.set('soy',3);
hashMap.print();
hashMap.set('nana',4);
hashMap.print();

hashMap.del('nana',4);
hashMap.print();
hashMap.del('soy',3);
hashMap.print();

/* 
총 1억개의 버킷을 만들면? 메모리 공간이 1억개 필요.
해시1 1000개
해시2 1000개
*/