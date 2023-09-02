function solution(s) {

    // k만큼 넣을 수 있는 귤의 개수..를 구한다..
    const map = new Map();
    const result = [];
    let sizeCount = 0;
    
    for(let i = 0; i < tangerine.length; i++){
        if(map.has(tangerine[i])){
            map.set( tangerine[i], map.get(tangerine[i]) + 1 )
        }else{
            map.set( tangerine[i], 1 )
        }
    }
    
    const mapSort = new Map([...map.entries()].sort((a,b) => b[1] - a[1]));
    
    for(const [key,value] of mapSort){
        result.push(key);
        sizeCount += value;

        if(sizeCount >= k) break;
    }

    return result.length;
 }


/* ----다른 풀이----- */

function solution2(s){
  const obj = {};

 // 같은 종이 몇개가 있는지 확인.
  tangerine.forEach((n) => {
    obj[n] = ++obj[n] | 1;
  })

  // 내림차순 정렬
  const kind = Object.values(obj).sort((a,b) => b - a);

  let sum = 0;
  let answer = 0;

  for (let num of kind) {
    answer++;
    sum += num;

    // sum값이 k보다 크거나 같으면 최솟값 충족.
    if(sum >= k) break;
  }

  return answer;
  
}


