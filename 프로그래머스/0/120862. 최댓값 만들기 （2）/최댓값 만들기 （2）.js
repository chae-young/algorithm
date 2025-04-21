function solution(numbers) {
    let answer = 0;
    
    const arr = numbers.sort((a, b) => a - b);
    const backNumber = arr[arr.length - 1] * arr[arr.length - 2];

    for(let i = 0; i < arr.length; i++) {
        const a = arr[i];
        const b = arr[i + 1];
        
        if(Math.sign(a) == -1 && Math.sign(b) == -1){
            answer = a * b;
            return answer > backNumber ? answer : backNumber;
        } else {
            break;
        }
    }
    answer = backNumber;
    
    return answer;
}