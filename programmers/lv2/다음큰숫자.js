function solution(n) {
    let nBinary = [...n.toString(2)].filter(v => v == 1).length;
    
    for(let i = n+1; n < 1000000; i++){
        let nextNum = i;
        nextNum = [...nextNum.toString(2)].filter(v => v == 1).length;
        if(nBinary === nextNum) return i
    }
}

/* ----다른 풀이----- */

function nextBigNumber(n) {
    var size = n.toString(2).match(/1/g).length;
    while(n++) {
        if(size === n.toString(2).match(/1/g).length) return n
    }
}
