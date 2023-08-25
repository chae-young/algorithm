/* --------------------------- 내 풀이 ------------------------------ */
function answer(a,b,c,d) {
    if(a/b > c/d){
        return 1
    }else if(a/b < c/d){
        return -1
    }else{
        return 0
    }
 }
 
 /*main code*/
 let input = [
     [14,2,6,6],
     [6,7,8,9],
     [18,2,36,4]
 ]
 
 for(let i = 0; i < input.length; i++){
     console.log(`#${i + 1} ${answer(input[i][0], input[i][1],input[i][2],input[i][3])}`);
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
 
 