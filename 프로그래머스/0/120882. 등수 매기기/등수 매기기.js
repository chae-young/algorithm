function solution(score) {
  const avgWithIndex = score.map(([eng, math], idx) => {
    return { idx, avg: (eng + math) / 2 };
  });

  const sorted = [...avgWithIndex].sort((a, b) => b.avg - a.avg);

  const ranks = Array(score.length);
  let rank = 1;

  for (let i = 0; i < sorted.length; i++) {
    if (i > 0 && sorted[i].avg === sorted[i - 1].avg) {
      ranks[sorted[i].idx] = ranks[sorted[i - 1].idx]; // 공동 등수
    } else {
      ranks[sorted[i].idx] = i + 1;
    }
  }

  return ranks;
}