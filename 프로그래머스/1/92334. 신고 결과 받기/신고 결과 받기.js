function solution(id_list, report, k) {
  const answer = [];
  const map = {};

  // 1. 중복 신고 제거
  const uniqueReports = [...new Set(report)];

  // 2. map[user][reportedUser] = 1 형태로 저장
  uniqueReports.forEach((ids) => {
    const [user, reportedUser] = ids.split(' ');

    if (!map[user]) {
      map[user] = {};
    }

    map[user][reportedUser] = 1; // 중복 신고 방지
  });

  // 3. reportedUser 별로 신고당한 횟수 계산
  const reportedCountMap = Object.values(map).reduce((acc, cur) => {
    for (const key in cur) {
      acc[key] = (acc[key] ?? 0) + 1;
    }
    return acc;
  }, {});

  // 4. 메일 받을 횟수 계산
  id_list.forEach((id) => {
    const obj = map[id] || {};
    let count = 0;

    for (const key in obj) {
      if (reportedCountMap[key] >= k) {
        count++;
      }
    }

    answer.push(count);
  });

  return answer;
}
