/* --------------------------- 내 풀이 ------------------------------ */
function answer(s,e) {
   let sequence = [s,e];
   let num = 0
   let index = 0;

   while(true){
       num = sequence[index] - sequence[index + 1];
       if(num < 0) break;
       sequence.push(num);
       index++
   }
   return sequence;
}

/*main code*/
let input = [
    [9,3],
    [6,3],
    [13,7]
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
 /*
 [6,3]
 6,3,3,0,3
 s e sum
   s e  sum
 */
 for(let i = 0; i < input.length; i++){
     console.log(`#${i + 1} ${answer2(input[i][0], input[i][1])}`);
 }

