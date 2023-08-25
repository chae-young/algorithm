/* --------------------------- 내 풀이 ------------------------------ */
function answer(year) {
    if(year % 4 == 0 && year % 100 != 0){
        return true
    }else if(year % 400 == 0){
        return true
    }else{
        return false
    }
 }
 
 /*main code*/
 let input = [
     4,
     100,
     124,
     247,
     400
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
  /*
  [6,3]
  6,3,3,0,3
  s e sum
    s e  sum
  */
  for(let i = 0; i < input.length; i++){
      console.log(`#${i + 1} ${answer2(input[i][0], input[i][1])}`);
  }
 
 