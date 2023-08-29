/* --------------------------- 내 풀이 ------------------------------ */
console.log('-----------내 풀이------------')
function answer(nums) {
    nums.sort((a,b) => b - a)
    return [nums[0],nums[1]]
 }
 
 /*main code*/
 let input = [
    // TC: 1
    [-11, 5, 18, -2, -3, 6, 4, 17, 10, 9],
  
    // TC: 2
    [3, 7, -14, 2, -6, 13, -20, -2, -7, 6, -17, -5, 14, -9, 19],
  
    // TC: 3
    [
      -15, -4, -8, 12, 12, -8, -8, 9, 10, 15, -2, 10, -14, 2, 13, 19, -9, 3, -18,
      14,
    ],
  ];
 
 for(let i = 0; i < input.length; i++){
     console.log(`#${i + 1} ${answer(input[i])}`);
 }
 
 /* --------------------------- 강의 풀이 ------------------------------ */
 console.log('-----------강의 풀이------------')
 
function answer2(chess) {
    let result = [];


}
  
  for(let i = 0; i < input.length; i++){
      console.log(`#${i + 1} ${answer2(input[i])}`);
  }
 
 