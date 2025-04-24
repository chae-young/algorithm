function solution(num, k) {
    const arr = String(num).split("")
    const idx = arr.indexOf(String(k))

    return idx !== -1 ? idx + 1 : -1
}