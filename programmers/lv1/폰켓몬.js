function solution(nums) {
    const set = new Set(nums);
    const n = nums.length / 2;
    const answer = [];

    for(const val of set){
        if(answer.length < n) answer.push(val);
    }

    return answer.length;
}



/* 다른사람 풀이 */
const max = num.length / 2;
const arr = [...new Set(nums)];

return arr.length > max ? max : arr.length;