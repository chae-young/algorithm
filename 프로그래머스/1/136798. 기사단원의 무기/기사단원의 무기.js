function solution(number, limit, power) {
    // number의 약수를 구합니다
    // limit이상 이면 공격력이 power가된다.
    const arr = Array.from({length: number}, (v,i) => i + 1)
    const divisorLeng = []
    
    for(let num = 1; num <= number; num++){
        let divisor = 0
        for(let j = 1; j <= Math.sqrt(num); j++){
            if(num % j === 0){
                divisor++
                
                if(j != num / j) divisor++
            }
        }
        divisorLeng.push(divisor > limit ? power : divisor)
    }
    
    return divisorLeng.reduce((acc,cur) => acc + cur)
}