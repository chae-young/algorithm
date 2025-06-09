function solution(n) {
  return n.toString().split('').reduce((acc,cur) => Number(cur) + acc, 0)
}