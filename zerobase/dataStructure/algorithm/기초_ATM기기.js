/* --------------------------- 내 풀이 ------------------------------ */
function answer(x_array,y_array) {
    let result = [];

    if(x_array[0] === x_array[1]) result[0] = x_array[2]
    else if(x_array[0] === x_array[2]) result[0] = x_array[1]
    else if(x_array[1] === x_array[2]) result[0] = x_array[0]

    if(y_array[0] === y_array[1]) result[1] = y_array[2]
    else if(y_array[0] === y_array[2]) result[2] = y_array[1]
    else result[1] = y_array[0]

    return result
 }
 
 /*main code*/
 let input = [
    [[5,5,8],[5,8,5]],
    [[3,1,1],[2,1,2]],
    [[7,7,3],[4,1,1]],
 ]
 
 for(let i = 0; i < input.length; i++){
     console.log(`#${i + 1} ${answer(input[i][0],input[i][1])}`);
 }
 
 /* --------------------------- 강의 풀이 ------------------------------ */

 