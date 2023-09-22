/*
길이가 n의 단어를 만들때 다음과 같은 조건이 있다. 이 조건으로 단어를 만들어라.
- M개의 주어진 단어로 구성해야함.
- 반드시 최소 2개의 자음과 최소 1개의 모음이 있어야함
- 사전순으로 나타내야함.
*/

// let [N,M] = [4,6];
// let alpha = ["a","t","c","i","s","w"];
// alpha = alpha.sort();

// function checkCondition(ans){
//     let ja = 0;
//     let mo = 0;

//     ans.forEach(ch => {
//         if(ch == 'a' || ch == 'e' || ch == 'i' || ch == 'o' || ch == 'u'){
//             mo++
//         }else{
//             ja++
//         }
//     })

//     return ja >= 2 && mo >= 1;
// }

// function backtracking(alpha,N,cur,ans){
//     if(ans.length === N){
//         if(checkCondition(ans)){
//             console.log(ans)
//         }
//         return;
//     }

//     let len = alpha.length;
//     for(let i = cur; i < len; i++){
//         ans.push(alpha[i]);
//         backtracking(alpha,N,i + 1,ans);
//         ans.pop()
//     }
// }

// backtracking(alpha,N,0,[])



/* 
1부터 n까지 자연수 중에서 중복없이 m개를 고른 수열을 모두 찾아보자.
*/



// 배열에서 0이되는 3가지 조합을 찾아라.

// let sum = 0;
// for(let i = 0; i < number.length; i++){
//     for(let j = i+1; j < number.length; j++){
//         for(let k = j+1; k < number.length; k++){
//             if(number[i]+number[j]+number[k] === 0) sum += 1;
//         }
//     }
// }
// return sum


const number = [2,3,0,2,-5];
const G = 0;

function backtracking(number,G,cur,ans){
    if(ans.length === 3){
        const result = ans.reduce((acc,curr) => acc+curr, 0);
        if(result === 0) {
            console.log(ans)
            return
        }
    }

    for(let i = cur; i < number.length; i++){
        ans.push(number[i]);

        backtracking(number,G,i+1,ans)
        ans.pop()
    }
}
backtracking(number,G,0,[])