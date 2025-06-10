function solution(lottos, win_nums) {
  const result = [];

  for(let i = 0; i < 2; i++) {
    let check = 0;

    for (let j = 0; j < lottos.length; j++) {
      if(win_nums.includes(lottos[j])) {
        check++;
      }
      if(lottos[j] === 0 && i === 0) {
        check++;
      }
    }

    const rank = (6 - check) === 6 ? 6 : 6 - check + 1; 

    result.push(rank);
  }

  return result
}