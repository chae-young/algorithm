function solution(array, height) {
    return array.filter((people,index) => height < people).length
}