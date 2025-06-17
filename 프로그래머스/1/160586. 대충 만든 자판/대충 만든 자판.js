function solution(keymap, targets) {
    const answer = [];
    
    targets.forEach((target, targetIdx) => {
        let count = 0;
        let flag = false;
        [...target].forEach((str) => {
  
            const min = [];
            for(let i = 0; i < keymap.length; i++) {
                if(keymap[i].indexOf(str) !== -1 && !flag) {
                    min.push(keymap[i].indexOf(str) + 1)
                }
            }
            count += Math.min(...min)
        })

        count = count === Infinity ? -1 : count;
        answer.push(count)
    })
    
   return answer;
}
