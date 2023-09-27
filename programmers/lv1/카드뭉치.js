function solution(cards1, cards2, goal) {
    let check = 0;
    
    for(let i = 0; i < goal.length; i++) {
        if(cards1.includes(goal[i]) && cards1.indexOf(goal[i]) == 0){
            cards1.shift();
            check++
        }
        if(cards2.includes(goal[i]) && cards2.indexOf(goal[i]) == 0) {
            cards2.shift();
            check++
        }
    }

    return check === goal.length ? "Yes" : "No"
}

/* 다른사람 풀이 */
function solution(cards1, cards2, goal) {
    for(const s of goal){
        if(cards[0] == s){
            cards1.shift()
        }else if(cards2[0] == s){
            cards2.shift()
        }else{
            return 'No'
        }
    }

    return 'Yes'
}