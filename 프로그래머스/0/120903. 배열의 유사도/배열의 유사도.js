function solution(s1, s2) {
    return s2.filter(s => s1.includes(s)).length
}