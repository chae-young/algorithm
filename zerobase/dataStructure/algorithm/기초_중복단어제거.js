/* --------------------------- 내 풀이 ------------------------------ */
function answer(arr) {
    const val = [...new Set(arr)];
    return val
 }

 /*main code*/
 let input = [
     ['john','alice','alice'],
     ['Hello','hello','Hello','hello'],
     ['kiwi','banana','mango','kiwi','banana']
 ]
 
 for(let i = 0; i < input.length; i++){
     console.log(`#${i + 1} ${answer(input[i])}`);
 }
 
 /* --------------------------- 강의 풀이 ------------------------------ */
 console.log('-----------강의 풀이------------')
 
 function answer2(s,e) {
     let sequence = [];
     sequence.push(s);
     sequence.push(e);
 
     let sum;
     while(true){
         sum = s - e;
         s = e;
         e = sum;
         if(e < 0) break;
         sequence.push(e);
     }
     return sequence
  }
  
  for(let i = 0; i < input.length; i++){
      console.log(`#${i + 1} ${answer2(input[i])}`);
  }
 
/*
  1. [] 새 배열을 만들어서 중복값이 있는지 체크하는 방법.
  2. Set을 이용하는 방법
 */
 