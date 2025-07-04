function solution(numbers, hand) {
    const pos = {
        1: [0,0], 2: [0,1], 3: [0,2],
        4: [1,0], 5: [1,1], 6: [1,2],
        7: [2,0], 8: [2,1], 9: [2,2],
        '*': [3,0], 0: [3,1], '#': [3,2]
    }

    const numL = new Set([1,4,7])
    const numR = new Set([3,6,9])
    let answer = ''

    let left = '*'
    let right = '#'

    function manhattan(leftNum, rightNum, pressNum) {
        const leftDistance = Math.abs(pos[leftNum][0] - pos[pressNum][0]) + Math.abs(pos[leftNum][1] - pos[pressNum][1])
        const rightDistance = Math.abs(pos[rightNum][0] - pos[pressNum][0]) + Math.abs(pos[rightNum][1] - pos[pressNum][1])

        if(leftDistance > rightDistance) {
            answer += 'R'
            right = pressNum
        }else if(leftDistance < rightDistance) {
            answer += 'L'
            left = pressNum
        }else {
            answer += hand === 'left' ? 'L' : 'R'
            left = hand === 'left' ? pressNum : leftNum
            right = hand === 'right' ? pressNum : rightNum
        }
    }

    for(let i = 0; numbers.length > i; i++) {
        // 왼손
        if(numL.has(numbers[i])){
            left = numbers[i]
            answer += 'L'
            continue;
        }
        // 오른손
        if(numR.has(numbers[i])){
            right = numbers[i]
            answer += 'R'
            continue;            
        } 
        // 2,5,8,0 숫자일 경우 더 가까운 손으로 입력
        manhattan(left, right, numbers[i])
    }
    return answer;
}