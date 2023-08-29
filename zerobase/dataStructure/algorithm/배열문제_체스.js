/* --------------------------- 내 풀이 ------------------------------ */
console.log('-----------내 풀이------------')
function answer(chess) {
    const result = [];
    const chessNeddObj = {
        king: 1,
        queen: 1,
        rooks: 2,
        bishops: 2,
        knights: 2,
        pawns: 8,
    }

    let i = 0; 

    for(const key in chessNeddObj){
        result.push(chessNeddObj[key] - chess[i]);
        i++
    }

    return result;
 }
 
 /*main code*/
 let input = [
     [0,1,2,2,2,7],
     [2,1,2,1,2,1],
     [0,1,1,5,3,6]
 ]
 
 for(let i = 0; i < input.length; i++){
     console.log(`#${i + 1} ${answer(input[i])}`);
 }
 
 /* --------------------------- 강의 풀이 ------------------------------ */
 console.log('-----------강의 풀이------------')
 
function answer2(chess) {
    let result = [];

    let refer = [1,1,2,2,2,8];
    let count = 0;

    for(let i = 0; i < chess.length; i++){
        result[count++] = refer[i] - chess[i]
    }
}
  
  for(let i = 0; i < input.length; i++){
      console.log(`#${i + 1} ${answer2(input[i])}`);
  }
 
 