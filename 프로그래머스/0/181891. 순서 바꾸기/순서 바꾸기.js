function solution(num_list, n) {
    const b = num_list.splice(0,n);
    return [...num_list,...b]
}