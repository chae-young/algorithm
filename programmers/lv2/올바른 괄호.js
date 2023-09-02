function solution(s){
    //안에 괄호들이 다 짝지어져 있어야함.
    //열린 괄호가 들어왔을때 닫혔는지 안닫혔는지 체크한다.
    
    const bracketOpenCheck = [];
    let j = 0;
    
    for(let i = 0; i < s.length; i++){
        if(')' === s[0]) return false;
        if('(' === s[i]){
            bracketOpenCheck.push(0);
        }else{
            bracketOpenCheck[j] = 1;
            j++;
        }
    }
    
    return bracketOpenCheck.every((v) => v === 1);
}

/* ----다른 풀이----- */

function solution2(s){
    let cum = 0;
    for (let paren of s) { 

        cum += paren === '('? 1: -1
        console.log(cum)
        if(cum < 0) {
            return false
        }
    }
    return cum === 0? true: false;
}
solution2("()()")