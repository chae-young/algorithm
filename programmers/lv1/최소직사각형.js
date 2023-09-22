/* 내풀이 */
function solution(sizes) {
    let w = 0;
    let h = 0;
    
    for(let i = 0; i < sizes.length; i++){
        if(sizes[i][0] < sizes[i][1]){
           [sizes[i][0],sizes[i][1]] = [sizes[i][1],sizes[i][0]]
        }
        if(w < sizes[i][0]) w = sizes[i][0]
        if(h < sizes[i][1]) h = sizes[i][1]      
    }
    
    return w * h
}
/* 다른사람풀이 */
function solution(sizes) {
    const rotated = sizes.map(([w,h]) => w < h ? [h,w] : [w,h])
    
    let maxSize = [0,0]
    rotated.forEach(([w, h]) => {
        if (w > maxSize[0]) maxSize[0] = w;
        if (h > maxSize[1]) maxSize[1] = h;
    })

    return maxSize[0]*maxSize[1]
}
console.log(solution( [[60, 50], [30, 70], [60, 30], [80, 40]] ))