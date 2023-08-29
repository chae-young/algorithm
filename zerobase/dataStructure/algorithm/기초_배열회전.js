/* --------------------------- 내 풀이 ------------------------------ */
function answer(user) {
    let answer = [];

    for(let i = user.length - 1; i >= 0; i--){
        answer.push(user[i])
    }
    return answer
 }
 
 /*main code*/
 let input = [
     [1,2,3,4],
     [-1,6,'hello',-15],
     ['apple','banana','mango'],
 ]
 
 for(let i = 0; i < input.length; i++){
     console.log(`#${i + 1} ${answer(input[i])}`);
 }
 
 /* --------------------------- 강의 풀이 ------------------------------ */
 console.log('-----------강의 풀이------------')
 
 function answer2(user) {
     let reverse = [];
     let temp;

     // 두번만 돌아서...대입하는 방법....
     for(let i = 0; i < user.length / 2; i++){
        temp = user[i];
        user[i] = user[user.length - 1 - i];
        user[user.length - 1 - i] = temp;
     }

     return user;
  }
  
  for(let i = 0; i < input.length; i++){
    console.log(`#${i + 1} ${answer2(input[i])}`);
  }
 
 