function solution(chicken) {
  let result = 0;

  while (chicken >= 10) {
    const service = Math.floor(chicken / 10); // 10마리당 1마리 서비스
    result += service;
    chicken = service + (chicken % 10); // 남은 쿠폰 + 새로 받은 서비스 치킨
  }

  return result;
}