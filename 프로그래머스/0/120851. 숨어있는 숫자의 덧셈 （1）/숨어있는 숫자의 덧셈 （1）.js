function solution(my_string) {
    const answer = [...my_string].reduce((acc, cur) => {
       if(isNaN(cur)) return acc;
       return acc + Number(cur)
   }, 0)
    
   return answer;
}