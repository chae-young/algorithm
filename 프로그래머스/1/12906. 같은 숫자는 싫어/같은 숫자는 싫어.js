function solution(arr){
    const answer = [];
    //내가 머리가 이렇게 굳엇다고?
    for(let i = 0; i < arr.length; i++){
        if(answer[answer.length - 1] != arr[i]){
            answer.push(arr[i])
        }
    }
    
    return answer
}