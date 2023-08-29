/* --------------------------- 내 풀이 ------------------------------ */
console.log('-----------내 풀이------------')
function answer(nums) {
    let minNum = Math.min(...nums);
    let indexArr = []

    for(let i = 0; i < nums.length; i++){
        if(nums[i] === minNum){
            indexArr.push( nums.indexOf(minNum,i) )
        }
    }


    return indexArr
 }
 
 /*main code*/
 let input = [
     [5,2,10,2],
     [4,5,7,4,8],
     [12,11,11,16,11,12]
 ]
 
 for(let i = 0; i < input.length; i++){
     console.log(`#${i + 1} ${answer(input[i])}`);
 }
 
 /* --------------------------- 강의 풀이 ------------------------------ */
 console.log('-----------강의 풀이------------')
 
 function answer2(nums) {
    let result = []
    let min = 100 // 가장 큰 값

    for(let i = 0; i < nums.length; i++){
        if(min > nums[i]){
            min = nums[i]
        }
    }

    for(let i = 0; i < nums.length; i++){
        if(min === nums[i]){
            result.push(i)
        }
    }    

    return result
  }
  
  for(let i = 0; i < input.length; i++){
      console.log(`#${i + 1} ${answer2(input[i])}`);
  }
 
 