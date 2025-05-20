function solution(arr, intervals) {
    const [a, b] = intervals;
    const first = arr.slice(a[0], a[1] + 1);
    const second = arr.slice(b[0], b[1] + 1);
    return [...first, ...second];
}