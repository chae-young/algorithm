function solution(seoul) {
  const kinIndex = seoul.findIndex(v => v === 'Kim')
  return `김서방은 ${kinIndex}에 있다`
}