function solution(my_string) {
    return [...my_string].filter(str => !isNaN(str)).map(number => Number(number)).sort();
}