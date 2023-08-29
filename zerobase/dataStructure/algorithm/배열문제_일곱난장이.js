/* --------------------------- 내 풀이 ------------------------------ */
console.log('-----------내 풀이------------')
function answer(nums) {

 }
 
 /*main code*/
 let input = [
  // TC: 1
  [1, 5, 6, 7, 10, 12, 19, 29, 33],

  // TC: 2
  [25, 23, 11, 2, 18, 3, 28, 6, 37],

  // TC: 3
  [3, 37, 5, 36, 6, 22, 19, 2, 28],
  ];
 
 for(let i = 0; i < input.length; i++){
     console.log(`#${i + 1} ${answer(input[i])}`);
 }
 
 /* --------------------------- 강의 풀이 ------------------------------ */
 console.log('-----------강의 풀이------------')
 
function answer2(dwarf) {
  let result = [];
  // 1. 9명(배열합) = 7명(100) + 2명(faker)
  let sum = 0;
  for(let i = 0; i < dwarf.length; i++){
    sum += dwarf[i];
  }
  sum -= 100 // -> faker값

  // 2. 두 요소의 합이 faker 2명에 대한 합 숫자와 같은지 비교
  let faker = [];
  for(let i = 0; i < dwarf.length; i++){
    for(let j = 1 + 1; j < dwarf.length; j++){
      if(sum == dwarf[i] + dwarf[j]){
        faker[0] = i;
        faker[1] = j;
        break;
      }
    }
    if(faker.length != 0) break;
  }

  // 3. faker 두명을 제외하고 나머지 값을 result에 넣어줌.
  let count = 0;
  for(let i = 0; i < dwarf.length; i++){
    if(faker[0] != i && faker[1] != i){
      result[count++] = dwarf[i]
    }
  }

  return result
}
  
  for(let i = 0; i < input.length; i++){
      console.log(`#${i + 1} ${answer2(input[i])}`);
  }
 
 