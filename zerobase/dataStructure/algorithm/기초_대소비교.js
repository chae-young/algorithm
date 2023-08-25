/* --------------------------- 내 풀이 ------------------------------ */
function answer(x,y) {
    if(x < y){
        return '<'
    }else if(x > y){
        return '>'
    }else{
        return '='
    }
 }
 
 /*main code*/
 let input = [
     [3,5],
     [7,4],
     [2,2]
 ]
 
 for(let i = 0; i < input.length; i++){
     console.log(`#${i + 1} ${answer(input[i][0], input[i][1])}`);
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
      console.log(`#${i + 1} ${answer2(input[i][0], input[i][1])}`);
  }
 
 