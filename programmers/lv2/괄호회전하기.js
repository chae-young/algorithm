// function solution(s) {
//     // 열린 문자열을 넣는다.
//     // 열린 문자열을 넣는다.
//     // 닫을때 닫는 태그와 같은 문자인 열린 태그가 있으면 올바른 괄호.
    
//     const strArr = [...s]
//     const map = new Map
//     let count = 0
//     map.set('1',['[','(','{'])
//     map.set('0',[']',')','}'])
    
//     for(let i = 0; i < s.length; i++){
//         let open = 0
//         let close = 0
//         for(let j = 0; j < s.length; j++){
//             if(map.get('0').includes(strArr[0])) break
//             // 올바른 문자의 경우
//             const char = strArr[j]

//             if( close > open ) break
            
//             if(map.get('1').includes(char)){
//                 open++
//             }else{
//                 let closeIdx = strArr.indexOf(char);
//                 let openIdx = strArr.indexOf(strArr[j - 1]);
//                 console.log(strArr[j - 1],openIdx,char,closeIdx)
//                 close++
//                 //if(closeIdx > openIdx) close++
//                 // 닫을때 전에 오픈된 태그와 같은거 여야함
                
//             }
            
//            // 다 회전했으면?
//            if(s.length - 1 === j){
//                console.log(j,strArr,close)
//            }
//         }
//         const frontChar = strArr.shift();
//         strArr.push(frontChar)
//     }
    
//     console.log(count)
// }


function isBalanced(s) {
    const stack = [];
    const brackets = {
        '(': ')',
        '[': ']',
        '{': '}',
    };

    for (let char of s) {
        if (brackets[char]) {
            stack.push(char);
        } else {
            if (stack.length === 0 || brackets[stack.pop()] !== char) {
                return false;
            }
        }
    }

    return stack.length === 0;
}

function solution(s) {
    let count = 0;

    for (let i = 0; i < s.length; i++) {
        const rotated = s.slice(i) + s.slice(0, i);
        if (isBalanced(rotated)) {
            count++;
        }
    }

    return count;
}
isBalanced 함수는 주어진 문자열이 올바른 괄호 문자열인지 확인합니다. solution 함수에서는 문자열을 회전시키면서 각 회전에 대해 isBalanced 함수를 호출하여 올바른 괄호 문자열인지 확인하고, 올바른 괄호 문자열이 되는 회전의 개수를 세고 반환합니다.






